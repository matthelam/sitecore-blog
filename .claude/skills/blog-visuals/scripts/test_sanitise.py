"""Tests for sanitise.py. Needs the same tools as the script (Pillow, pytesseract, Tesseract).

    python .claude/skills/blog-visuals/scripts/test_sanitise.py
"""

import subprocess
import sys
import tempfile
import unittest
from pathlib import Path
from unittest import mock

from PIL import Image, ImageDraw, ImageFont

sys.path.insert(0, str(Path(__file__).parent))
import sanitise  # noqa: E402

SCRIPT = Path(__file__).parent / "sanitise.py"
SENSITIVE = [
    "Jane Citizen",
    "jane.citizen@contoso.com",
    "3f2a9c10-7b4e-4d71-9a07-0c1d2e3f4a57",
    "https://contoso.sitecorecloud.io/tenant",
    "sk-fake-0000aaaa1111",
]
BENIGN = ["User permissions", "Organization Admin", "Builder Seats"]


def font(size):
    for name in ("arial.ttf", "DejaVuSans.ttf"):
        try:
            return ImageFont.truetype(name, size)
        except OSError:
            pass
    return ImageFont.load_default(size)


class Classify(unittest.TestCase):
    def test_ocr_misread_ids_are_caught(self):
        for word in ("3f2a9c1O-/b4e-4d/1-9aO7-Oc1d2e3f4a5/", "3F2A9C10-7B4E-4D71-9A07-0C1D2E3F4A57"):
            self.assertEqual(sanitise.classify(word, set()), "id", word)

    def test_patterns(self):
        cases = {
            "jane.citizen@contoso.com": "email",
            "jane.citizen©contoso.com": "email",
            "https://contoso.io/x": "url",
            "portal.contoso.com": "url",
            "ghp_abcdefgh": "token",
            "a1b2c3d4e5f6g7h8i9": "id",
        }
        for word, why in cases.items():
            self.assertEqual(sanitise.classify(word, set()), why, word)

    def test_placeholders_are_left_alone(self):
        for word in ("user.one@example.com", "https://example.org/x", "portal.example.com", "api.contoso.test"):
            self.assertIsNone(sanitise.classify(word, set()), word)
        for word in ("user.one@example.com.evil.io", "https://example.com.evil.io/x"):
            self.assertIsNotNone(sanitise.classify(word, set()), word)

    def test_names_and_benign_words(self):
        self.assertEqual(sanitise.classify("Citizen,", {"citizen"}), "name")
        for word in ("Settings", "Organization", "permissions", "1/5", "Admin"):
            self.assertIsNone(sanitise.classify(word, set()), word)


class EndToEnd(unittest.TestCase):
    def test_fixture_is_sanitised_and_rechecked_clean(self):
        with tempfile.TemporaryDirectory() as tmp:
            raw, out = Path(tmp, "raw.png"), Path(tmp, "out.png")
            image = Image.new("RGB", (900, 40 * (len(SENSITIVE) + len(BENIGN)) + 20), "white")
            draw = ImageDraw.Draw(image)
            for i, line in enumerate(BENIGN + SENSITIVE):
                draw.text((20, 15 + 40 * i), line, fill="black", font=font(20))
            image.save(raw)

            run = subprocess.run(
                [sys.executable, str(SCRIPT), str(raw), str(out), "--name", "Jane Citizen"],
                capture_output=True,
                text=True,
            )
            self.assertEqual(run.returncode, 0, run.stdout + run.stderr)
            self.assertIn("re-check clean", run.stdout)
            for why in ("name", "email", "id", "url", "token"):
                self.assertIn(f"detected {why}", run.stdout)

            sanitise.find_tesseract()
            text = " ".join(word for word, _ in sanitise.ocr_words(Image.open(out)))
            for word in ("Jane", "Citizen", "contoso", "3f2a9c10", "sk-fake"):
                self.assertNotIn(word, text)
            for word in ("permissions", "Organization", "Builder"):
                self.assertIn(word, text)


class ReCheck(unittest.TestCase):
    def test_anything_left_after_redaction_fails_the_run(self):
        hit = [("email", "jane@contoso.com", (10, 10, 50, 12))]
        with tempfile.TemporaryDirectory() as tmp:
            raw, out = Path(tmp, "raw.png"), Path(tmp, "out.png")
            Image.new("RGB", (200, 100), "white").save(raw)
            argv = ["sanitise.py", str(raw), str(out)]
            with mock.patch.object(sys, "argv", argv), mock.patch.object(
                sanitise, "detect", side_effect=[hit, hit]
            ), mock.patch.object(sanitise, "find_tesseract"):
                with self.assertRaises(SystemExit) as stop:
                    sanitise.main()
            self.assertEqual(stop.exception.code, 2)


if __name__ == "__main__":
    unittest.main()
