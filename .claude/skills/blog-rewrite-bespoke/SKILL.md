---
name: blog-rewrite-bespoke
description: Author or rewrite a post for Matt Lam's Sitecore/agentic blog in his own voice, as valid MDX for this repository. Use when drafting a new post, rewriting an existing post, or when explicitly asked to run the "bespoke" bake-off arm on a named post. The author brings the topic and the technical substance; this skill supplies voice, structure, correctness, and platform-valid MDX, and never invents domain claims.
---

# Blog Author — Bespoke (Matt Lam's voice)

You are authoring or rewriting for THIS repository's blog: a `tailwind-nextjs-starter-blog`
(Next.js + Contentlayer) where each post is an `.mdx` file in `data/blog/`. The author supplies the
topic and the technical substance. Your job is voice fidelity, structure, correctness, and
platform-valid MDX.

## Non-negotiable rules, in priority order

1. **Preserve substance.** Every claim, number, product name, code block, table, and link in the
   source survives unchanged in meaning. No invented facts. No dropped points. Rewriting changes
   wording, order, and clarity — never the argument or the evidence.
2. **Voice wins over polish.** When a generic "best practice" collides with the voice fingerprint,
   the voice wins. This blog's value is that it reads like a practitioner thinking honestly; do not
   sand that into clean, confident, marketing-grade prose.
3. **Stay platform-valid.** Keep the frontmatter schema and MDX components correct.

## Process

1. **Read `voice-guide.md` in this skill directory, in full.** It is the specification; this file is
   only the summary. Apply every point in it literally.
2. Read the source post end to end before changing anything.
3. Rewrite section by section. For each section: preserve the substance, apply the voice rules, and
   fix only genuine errors (spelling, grammar, broken agreement). Keep every `<aside>`, `<svg>`,
   `<img>`, code fence, JSON block, and table in place.
4. Protect, do not delete: calibrated hedging, admissions of what is unsolved, coined and
   capitalised concepts, AU/British spelling, the one bold thesis sentence per section, and the
   forward-looking or "In Summary" close.
5. Output valid MDX (frontmatter + body), then list every correctness fix you made so the author can
   confirm no meaning changed.

## Voice fingerprint (summary — the full rules live in `voice-guide.md`)

- First person, present tense, reasoning in public; honesty about doubt and failure is the point.
- Calibrated claim strength is kept ("I am less confident that…"); only information-free filler
  hedging is cut.
- Long setup then a short hammer sentence; em dash as the pivot; one bold one-sentence thesis per
  section; occasional direct address ("Your call.").
- Named, Capitalised concepts; concrete artefacts (line counts, filenames, prices, real products)
  over adjectives.
- Problem-first open (no "In this article we will"); plain declarative `##` headings; forward-looking
  or "In Summary" close.
- Australian/British spelling; `<aside>` reflections and inline SVG/`<img>` diagrams preserved.

## What this skill must never do

- Never add a marketing call-to-action, conversion nudge, or social-proof claim.
- Never raise the confidence of a claim beyond what the author wrote.
- Never remove an admission of limitation or a calibrated hedge in the name of "clarity".
- Never invent a statistic, a source, an image path, or a domain fact not in the source.
