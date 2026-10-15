#!/usr/bin/env python3
"""Pre-publish checks for one or more posts in data/blog/.

Usage: python .claude/skills/blog-publish/scripts/preflight.py <slug> [<slug> ...]
       python .claude/skills/blog-publish/scripts/preflight.py --all

Exit 0 when no ERRORs (WARNs are for the author to weigh), 1 otherwise.
Checks only what the repository can prove; it never edits a file.
"""
import re
import sys
from datetime import date
from pathlib import Path

import yaml

REPO = Path(__file__).resolve().parents[4]
BLOG = REPO / "data" / "blog"
PUBLIC = REPO / "public"

REQUIRED = ("title", "date")
OPTIONAL = {"tags", "lastmod", "draft", "summary", "images", "authors", "layout",
            "bibliography", "canonicalUrl"}


def load(path):
    text = path.read_text(encoding="utf-8")
    m = re.match(r"^---\r?\n(.*?)\r?\n---\r?\n(.*)$", text, re.S)
    if not m:
        return None, text
    return yaml.safe_load(m.group(1)) or {}, m.group(2)


def drafts_and_slugs():
    slugs, drafts = set(), set()
    for p in BLOG.glob("*.mdx"):
        fm, _ = load(p)
        slugs.add(p.stem)
        if fm and fm.get("draft") is True:
            drafts.add(p.stem)
    return slugs, drafts


def strip_code(body):
    return re.sub(r"```.*?```", "", body, flags=re.S)


def check(slug, slugs, drafts):
    out = []
    err = lambda m: out.append(("ERROR", m))
    warn = lambda m: out.append(("WARN", m))
    path = BLOG / f"{slug}.mdx"
    if not path.exists():
        return [("ERROR", f"no such post: data/blog/{slug}.mdx")]
    fm, body = load(path)
    if fm is None:
        return [("ERROR", "frontmatter missing or not fenced with ---")]

    for k in REQUIRED:
        if not fm.get(k):
            err(f"frontmatter: '{k}' is required")
    for k in fm:
        if k not in REQUIRED and k not in OPTIONAL:
            warn(f"frontmatter: unknown field '{k}' (Contentlayer will ignore it)")
    d = fm.get("date")
    if isinstance(d, str):  # quoted dates are valid; Contentlayer parses the string
        try:
            d = date.fromisoformat(d)
        except ValueError:
            err(f"frontmatter: date '{d}' is not YYYY-MM-DD")
            d = None
    if isinstance(d, date) and d > date.today():
        warn(f"frontmatter: date {d} is in the future")
    if not fm.get("summary"):
        warn("frontmatter: no summary (used for the listing card and SEO)")
    for t in fm.get("tags") or []:
        if str(t) != str(t).lower():
            err(f"frontmatter: tag '{t}' must be lowercase")
    if fm.get("draft") is True:
        warn("draft: true — this post will NOT appear in production")

    prose = strip_code(body)

    # Static assets must exist.
    for ref in sorted(set(re.findall(r"""["'(](/static/[^"')\s]+)""", prose))):
        if not (PUBLIC / ref.lstrip("/")).exists():
            err(f"missing asset: {ref} (no file under public/)")

    # Internal blog links must resolve and must not point at drafts.
    for target in sorted(set(re.findall(r"\(/blog/([^)#\s]+)", prose))):
        t = target.rstrip("/")
        if t not in slugs:
            err(f"broken link: /blog/{t} (no such post)")
        elif t in drafts and fm.get("draft") is not True:
            err(f"link to a draft: /blog/{t} 404s in production")

    # Alt text.
    for alt in re.findall(r"!\[([^\]]*)\]\(", prose):
        if not alt.strip():
            err("markdown image with empty alt text")
    for tag in re.findall(r"<img\b[^>]*>", prose):
        if not re.search(r"""\balt=["'][^"']+["']""", tag):
            err(f"<img> without alt text: {tag[:60]}...")

    # Series pointers written as text but not linked.
    for line in prose.splitlines():
        if re.search(r"\b(previous|next) (article|post)\b", line, re.I) and "](/blog/" not in line:
            warn(f"unlinked series pointer: {line.strip()[:90]}")
    return out


def main(argv):
    if not argv:
        print(__doc__)
        return 2
    slugs, drafts = drafts_and_slugs()
    targets = sorted(slugs) if argv == ["--all"] else [a.removesuffix(".mdx") for a in argv]
    failed = False
    for s in targets:
        results = check(s, slugs, drafts)
        errors = [m for lvl, m in results if lvl == "ERROR"]
        failed |= bool(errors)
        status = "FAIL" if errors else "ok"
        print(f"{status:4} {s}")
        for lvl, m in results:
            print(f"     {lvl}: {m}")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
