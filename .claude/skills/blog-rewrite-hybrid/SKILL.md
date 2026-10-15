---
name: blog-rewrite-hybrid
description: Author or rewrite a post for Matt Lam's blog using external technical-writing craft gated by his bespoke voice guide. Use when drafting or rewriting a post with the hybrid approach, or when explicitly asked to run the "hybrid" bake-off arm on a named post. Applies transferable craft (thesis spine, sentence craft, filler cuts, no-AI-tells) but the voice guide overrides on every conflict; never invents domain claims.
---

# Blog Author — Hybrid (external craft, voice-gated)

This arm combines the transferable external writing craft with the author's own voice, and resolves
every collision in favour of the voice. It exists to test whether "best of both" beats either pure
approach.

## Process

1. **Read `voice-guide.md`, `craft-fragments.md` and `tone-profiles.md` in this directory, all in
   full.**
2. Read the source post end to end.
3. Rewrite section by section. Apply the craft fragments **only** where they do not conflict with the
   voice guide. On any conflict, apply the voice guide and move on.
4. Apply the Concision rules in `voice-guide.md` (structure first, then filler words). Then count
   prose words and take the base tone profile from `tone-profiles.md`: 500 or fewer is casual
   throughout, over 500 is crisp. In a crisp-based post, switch a passage to **casual** only where
   that file allows it, within its limits, and only if it passes the drift check. If the post is part
   of a series, also apply the series conventions in `voice-guide.md`.
5. **Visual pass.** For each section, ask whether a cold reader would otherwise have to assemble a
   mechanism from prose. If so, hand the section to the `blog-visuals` skill, which picks the kind
   (static diagram, chart, step-through, explorable), reuses a component where one fits, and
   builds it from facts already in the post. Keep every existing visual unless the author approves
   replacing it; a new interactive version sits beside the original until then.
6. Preserve substance exactly (every claim, number, code block, table, link). Fix only genuine
   errors. Keep all `<aside>`, `<svg>`, `<img>`, and code components in place.
7. Output valid MDX, then list: prose word count before and after; the correctness fixes; each
   passage written in casual, with the reason; each visual added or changed, with the reason; and
   any place where a craft fragment was overridden by the voice guide, with the one-line reason.

## The override table (where external craft and this author collide)

| External rule | Hybrid behaviour | Why |
|---|---|---|
| "Replace 'seems/appears/might'; remove all hedging." | Keep calibrated hedges that carry certainty information ("I am less confident that…"); cut only information-free filler hedging. | His calibrated epistemics are a feature; flattening them misrepresents how sure he is. |
| "Cut tangents that don't serve the thesis." | Keep `<aside>` reflections and the honest "what is not right yet" digressions. | The honest asides are the reason readers trust the posts. |
| "Conclusions that extend, not summarise." | Allow the forward-looking close **and** an explicit "In Summary" when the source uses one, provided the summary adds a consequence or next step (Concision rule 4). | Both are his real endings, but the author wants restating summaries cut. |
| "Cut the preamble; start doing." | Keep his blunt problem-first or pointer opening ("This is that post."); only cut true throat-clearing ("In this article we will"). | His openings are already lean and are part of the voice. |
| "Lead with authority; no first-sentence hedging." | Lead with the real position, but do not inflate confidence beyond what he wrote. | Authority here comes from specifics and honesty, not from removing doubt. |
| "Active voice; vague adjectives → specifics." | Apply fully — no conflict. | This matches his instinct (line counts, prices, real product names). |
| "Signal-to-noise; one purpose per sentence; parallel logic." | Apply fully — no conflict. | Pure craft improvement; keep the long-setup-then-hammer rhythm. |

## What this skill must never do

- Never add a CTA, conversion nudge, social proof, or urgency.
- Never apply a discarded conversion sweep from `craft-fragments.md`.
- Never raise a claim's confidence, delete an admission, or de-capitalise a coined concept.
- Never invent a statistic, source, image path, or domain fact not in the source.
