"""Redact rectangles in a screenshot and write a clean PNG.

Run it on the raw capture (kept outside the repo) and write the result straight to the post's
image folder, so the unredacted file never enters the repository:

    python .claude/skills/blog-visuals/scripts/redact.py RAW.png OUT.png \
        --box 120,340,260,22 --box 120,372,260,22 --blur 900,40,48,48

Rectangles are x,y,width,height in the image's own pixels (a capture at deviceScaleFactor 2 has
twice the CSS pixels). --box fills solid and is the default for text: names, emails, IDs, URLs,
tokens. --blur pixelates then blurs, for things that should still read as present (an avatar, a
logo); never use it on text, because blurred text can sometimes be recovered.
--outline draws the rectangles instead of filling them, to check placement before the real run.

The output is a new PNG with no metadata (no text chunks, no EXIF). Needs Pillow only.
"""

import argparse
import sys
from pathlib import Path

try:
    from PIL import Image, ImageDraw, ImageFilter
except ImportError:
    sys.exit("redact.py needs Pillow: python -m pip install Pillow")


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


def main():
    parser = argparse.ArgumentParser(description="Redact rectangles in a screenshot.")
    parser.add_argument("source", type=Path, help="raw capture (keep it outside the repo)")
    parser.add_argument("output", type=Path, help="redacted PNG to write")
    parser.add_argument("--box", type=rect, action="append", default=[], help="x,y,w,h solid fill")
    parser.add_argument("--blur", type=rect, action="append", default=[], help="x,y,w,h pixelate")
    parser.add_argument("--fill", type=colour, default=(128, 128, 128), help="box colour, #RRGGBB")
    parser.add_argument("--outline", action="store_true", help="draw rectangles, don't redact")
    args = parser.parse_args()

    if not args.box and not args.blur:
        parser.error("give at least one --box or --blur")
    if args.source.resolve() == args.output.resolve():
        parser.error("write to a new file; keep the raw capture so a redaction can be redone")
    if args.output.suffix.lower() != ".png":
        parser.error("output must be .png")

    with Image.open(args.source) as raw:
        image = raw.convert("RGBA") if raw.mode in ("RGBA", "LA", "P") else raw.convert("RGB")

    width, height = image.size
    for x, y, w, h in args.box + args.blur:
        if x + w > width or y + h > height:
            sys.exit(f"rectangle {x},{y},{w},{h} falls outside the {width}x{height} image")

    draw = ImageDraw.Draw(image)
    if args.outline:
        for x, y, w, h in args.box + args.blur:
            draw.rectangle((x, y, x + w - 1, y + h - 1), outline=(255, 0, 255), width=3)
    else:
        for x, y, w, h in args.blur:
            area = image.crop((x, y, x + w, y + h))
            small = area.resize((max(1, w // 16), max(1, h // 16)), Image.Resampling.BILINEAR)
            area = small.resize((w, h), Image.Resampling.NEAREST).filter(ImageFilter.GaussianBlur(4))
            image.paste(area, (x, y))
        for x, y, w, h in args.box:
            draw.rectangle((x, y, x + w - 1, y + h - 1), fill=args.fill)

    args.output.parent.mkdir(parents=True, exist_ok=True)
    # A fresh save without pnginfo or exif drops every metadata chunk of the source.
    image.save(args.output, "PNG", optimize=True)
    action = "outlined" if args.outline else "redacted"
    print(f"{action} {len(args.box)} box(es), {len(args.blur)} blur(s) -> {args.output}")


if __name__ == "__main__":
    main()
