"""Sanitise a screenshot so it is safe to publish: detect, redact, re-check.

Every screenshot goes through this before it enters the repo (public/static/CLAUDE.md law 1).
Run it on the raw capture (kept outside the repo) and write straight to the post's image folder:

    python .claude/skills/blog-visuals/scripts/sanitise.py RAW.png OUT.png \
        --name "Jane Citizen" --name "Contoso" --box 900,40,48,48

1. Detect: OCR (Tesseract) reads the image twice, as captured and as a 2x greyscale upscale, and
   boxes every word that looks like an email, a GUID or other long ID, a URL or hostname, a token
   or key, or a --name / --names entry (people, clients, tenants). OCR misreads hex IDs ('0' as
   'O', '7' as '/'), so words are normalised before the ID patterns are tried.
2. Redact: detected words and every --box get a solid fill; --blur pixelates (for avatars and
   logos, never text: blurred text can sometimes be recovered).
3. Re-check: the output is OCR'd the same way. Anything still matching fails the run (exit 2)
   and nothing should be committed. A clean re-check is necessary, not sufficient: look at the
   output yourself, then do the privacy check in references/screenshots.md.

Rectangles are x,y,width,height in the image's own pixels. --outline draws what would be
redacted instead of redacting, for review. --allow keeps an exact word that matched by mistake.
The output is a fresh PNG with no metadata. Needs Pillow, pytesseract and the Tesseract binary
(TESSERACT_CMD, PATH, or the default Windows install path).
"""

import argparse
import os
import re
import shutil
import sys
from pathlib import Path

try:
    import pytesseract
    from PIL import Image, ImageDraw, ImageFilter, ImageOps
except ImportError:
    sys.exit("sanitise.py needs Pillow and pytesseract: python -m pip install Pillow pytesseract")

WINDOWS_TESSERACT = r"C:\Program Files\Tesseract-OCR\tesseract.exe"
PAD = 4

EMAIL = re.compile(r"[\w.+-]+[@©®][\w-]+(\.[\w-]+)+", re.I)
GUID = re.compile(r"[0-9a-f]{7,9}[-_]?[0-9a-f]{3,5}[-_]?[0-9a-f]{3,5}[-_]?[0-9a-f]{3,5}[-_]?[0-9a-f]{11,13}", re.I)
URL = re.compile(r"(https?:|www\.|://)", re.I)
HOST = re.compile(r"^[a-z0-9-]+(\.[a-z0-9-]+)*\.(com|net|org|io|ai|au|nz|uk|app|dev|cloud|xyz|co|local|internal)$", re.I)
# Reserved placeholder domains (RFC 2606): already neutral, so left as they are.
PLACEHOLDER = re.compile(r"([\w-]+\.)*(example\.(com|org|net)|[\w-]+\.(example|test|invalid))", re.I)
TOKEN = re.compile(r"^(sk-|pk_|rk_|ghp_|gho_|github_pat_|xox[abpr]-|AKIA|AIza|eyJ)", re.I)
# OCR confusions inside hex-like tokens.
HEXIFY = str.maketrans({"O": "0", "o": "0", "Q": "0", "D": "0", "l": "1", "I": "1", "i": "1",
                        "|": "1", "/": "7", "S": "5", "s": "5", "Z": "2", "z": "2", "G": "6"})


def is_placeholder(text):
    """True when the whole host of an email or URL is a reserved placeholder domain."""
    host = re.sub(r"^[a-z]+://", "", text, flags=re.I)
    host = re.split(r"[@©®]", host)[-1]
    host = re.split(r"[/?#:]", host)[0].strip(".")
    return bool(PLACEHOLDER.fullmatch(host))


def classify(word, names):
    """Return why a word is sensitive, or None. Works on raw OCR text."""
    text = word.strip(".,;:()[]{}<>'\"`")
    if len(text) < 3:
        return None
    if (EMAIL.search(text) or URL.search(text) or HOST.match(text)) and is_placeholder(text):
        return None
    if EMAIL.search(text):
        return "email"
    if URL.search(text) or HOST.match(text):
        return "url"
    if TOKEN.match(text):
        return "token"
    if GUID.search(text.translate(HEXIFY)):
        return "id"
    if len(text) >= 16 and re.search(r"\d", text) and re.search(r"[a-z]", text, re.I):
        return "id"
    if text.lower() in names:
        return "name"
    return None


def ocr_words(image):
    """Words with boxes from the image as is and from a 2x greyscale upscale, merged."""
    found = []
    grey = ImageOps.grayscale(image)
    big = grey.resize((grey.width * 2, grey.height * 2), Image.Resampling.LANCZOS)
    for source, scale in ((image.convert("RGB"), 1), (big, 2)):
        data = pytesseract.image_to_data(source, output_type=pytesseract.Output.DICT)
        for i, text in enumerate(data["text"]):
            if text.strip():
                box = tuple(round(data[k][i] / scale) for k in ("left", "top", "width", "height"))
                found.append((text.strip(), box))
    return found


def detect(image, names, allow):
    hits = []
    for text, box in ocr_words(image):
        why = None if text in allow else classify(text, names)
        if why:
            hits.append((why, text, box))
    return hits


def mask(text):
    return text[:2] + "*" * max(0, len(text) - 2) if len(text) > 2 else "**"


def rect(value):
    try:
        x, y, w, h = (int(part) for part in value.split(","))
    except ValueError:
        raise argparse.ArgumentTypeError(f"expected x,y,width,height in pixels, got {value!r}")
    if w <= 0 or h <= 0 or x < 0 or y < 0:
        raise argparse.ArgumentTypeError(f"rectangle {value!r} needs x,y >= 0 and width,height > 0")
    return x, y, w, h


def colour(value):
    value = value.lstrip("#")
    if len(value) != 6:
        raise argparse.ArgumentTypeError(f"expected #RRGGBB, got {value!r}")
    return tuple(int(value[i : i + 2], 16) for i in (0, 2, 4))


def find_tesseract():
    cmd = os.environ.get("TESSERACT_CMD") or shutil.which("tesseract")
    if not cmd and Path(WINDOWS_TESSERACT).exists():
        cmd = WINDOWS_TESSERACT
    if not cmd:
        sys.exit("Tesseract OCR not found: install it, or set TESSERACT_CMD to tesseract.exe")
    pytesseract.pytesseract.tesseract_cmd = cmd


def main():
    parser = argparse.ArgumentParser(description="Detect, redact and re-check a screenshot.")
    parser.add_argument("source", type=Path, help="raw capture (keep it outside the repo)")
    parser.add_argument("output", type=Path, help="sanitised PNG to write")
    parser.add_argument("--box", type=rect, action="append", default=[], help="x,y,w,h solid fill")
    parser.add_argument("--blur", type=rect, action="append", default=[], help="x,y,w,h pixelate")
    parser.add_argument("--name", action="append", default=[], help="always redact (repeatable)")
    parser.add_argument("--names", type=Path, help="file of names, one per line")
    parser.add_argument("--allow", action="append", default=[], help="exact word to keep")
    parser.add_argument("--fill", type=colour, default=(128, 128, 128), help="box colour, #RRGGBB")
    parser.add_argument("--outline", action="store_true", help="draw what would be redacted")
    args = parser.parse_args()

    if args.source.resolve() == args.output.resolve():
        parser.error("write to a new file; keep the raw capture so a redaction can be redone")
    if args.output.suffix.lower() != ".png":
        parser.error("output must be .png")
    find_tesseract()

    entries = list(args.name)
    if args.names:
        entries += [line.strip() for line in args.names.read_text("utf-8").splitlines()]
    # Each word of a name is redacted wherever it appears: over-redaction is the safe failure.
    names = {part.lower() for entry in entries for part in entry.split() if len(part) >= 3}
    allow = set(args.allow)

    with Image.open(args.source) as raw:
        image = raw.convert("RGBA") if raw.mode in ("RGBA", "LA", "P") else raw.convert("RGB")
    width, height = image.size
    for x, y, w, h in args.box + args.blur:
        if x + w > width or y + h > height:
            sys.exit(f"rectangle {x},{y},{w},{h} falls outside the {width}x{height} image")

    hits = detect(image, names, allow)
    boxes = list(args.box)
    for why, text, (x, y, w, h) in hits:
        x0, y0 = max(0, x - PAD), max(0, y - PAD)
        boxes.append((x0, y0, min(width, x + w + PAD) - x0, min(height, y + h + PAD) - y0))
        print(f"detected {why:<5} {mask(text):<24} at {x},{y} {w}x{h}")

    draw = ImageDraw.Draw(image)
    if args.outline:
        for x, y, w, h in boxes + args.blur:
            draw.rectangle((x, y, x + w - 1, y + h - 1), outline=(255, 0, 255), width=3)
    else:
        for x, y, w, h in args.blur:
            area = image.crop((x, y, x + w, y + h))
            small = area.resize((max(1, w // 16), max(1, h // 16)), Image.Resampling.BILINEAR)
            area = small.resize((w, h), Image.Resampling.NEAREST).filter(ImageFilter.GaussianBlur(4))
            image.paste(area, (x, y))
        for x, y, w, h in boxes:
            draw.rectangle((x, y, x + w - 1, y + h - 1), fill=args.fill)

    args.output.parent.mkdir(parents=True, exist_ok=True)
    # A fresh save without pnginfo or exif drops every metadata chunk of the source.
    image.save(args.output, "PNG", optimize=True)
    print(f"{len(hits)} detected, {len(args.box)} manual box(es), {len(args.blur)} blur(s)")

    if args.outline:
        print(f"outline only, not sanitised: {args.output}")
        return
    left = detect(image, names, allow)
    if left:
        for why, text, (x, y, w, h) in left:
            print(f"RE-CHECK FAILED {why:<5} {mask(text):<24} at {x},{y} {w}x{h}")
        print("Do not commit. Add --box for these areas and run again.")
        sys.exit(2)
    print(f"re-check clean: {args.output}. Now look at it, then the privacy check.")


if __name__ == "__main__":
    main()
