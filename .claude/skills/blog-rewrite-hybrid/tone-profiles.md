# Tone profiles

Status: **approved by the author, 2026-10-15** (crisp default, casual for posts of 500 words or fewer and for chosen moments).

Two profiles, chosen in the tone trial (`.claude/plans/register-trial/`). The post type decides
which one is the base (table below). Both profiles sit under `voice-guide.md`: substance,
calibrated hedges, coined concepts and AU spelling are never traded away for tone.

## Choosing the profile by post type

Derived from a survey of the author's 27 published and draft posts (October 2025 – August 2026).
**The 500-word rule (the author's decision).** A post of 500 prose words or fewer is written casual
throughout. Over 500, the base is crisp. Count prose only: exclude frontmatter, code blocks, tables,
inline SVG, and the References list. If a casual post drafts past 500, first try cutting it back
under 500 (see Concision in `voice-guide.md`); switch it to crisp only if the cut would lose
substance.

500 is a ceiling, not a target. Cut repetition, never nuance. The line started at 400; in the first
draft trial, getting `agentic-studio-widgets-do-not-export` under 400 forced four small losses of
nuance (a dropped "without much risk", a paraphrased doc quote), and the author judged the result
too short.

| Post type | What it is | Base profile | The author's examples (prose words) |
|---|---|---|---|
| **Tip** | One quirk, trap or trick. Usually one code or JSON block and a References list. | casual if ≤ 500, else crisp | `agentic-studio-debug-pane-browser-caching` (196), `agentic-studio-agent-export-is-lossy` (222) |
| **Short essay** | One idea argued briefly; few or no headings. | casual if ≤ 500, else crisp | `emerging-pattern-in-agentic-systems` (373), `first-principles-in-agent-conversations…` (416) |
| **Long essay / framework** | A framework or argument across several sections. | **crisp**, casual moments only | `a-legal-framework-for-agent-context`, `three-dimensions-of-agent-context…`, `we-dont-build-the-website` |
| **Step-by-step guide** | A procedure the reader follows, often in a series. | **crisp**; practical notes may be casual | `01-SSO-Preparation` … `05-SSO-Vercel-Setup` |

### What casual throughout looks like (from the short posts)

- Open on the hook, not a preamble: "There is a hidden debug console!"
- One bold run-in for the secondary point: "**One more trap while you're here.**"
- The rule of the post as a one-line blockquote: "> The visible pane is the only proof the flag
  took effect."
- Honest about what isn't known yet: "I have not managed to separate those two yet."
- A short imperative close: "Check the pane is there. Then start debugging."

In casual-throughout posts the per-section casual limit doesn't apply. These limits still do: the
drift check, calibrated hedges, no more than two fragments in a row, and code, commands and URLs
reproduced exactly.

### Guides: practical notes

In step-by-step guides, short practical notes in blockquotes may be casual, as in the SSO series:
"as of now, you're on your own for those ones!" This differs from the reflective `<aside>` in long
essays, which stays crisp.

## crisp — the default (trial V2)

1. Contractions on for pronoun + auxiliary and for negatives: I'm, it's, we've, I'll, don't, isn't.
   Don't contract a noun + has ("the ecosystem's stabilised" stays "the ecosystem has stabilised").
   Don't contract "have" when it means possess ("we have those things").
2. Cut formal connectives: as such, in order to, moving forward, additionally, furthermore, thus.
3. Keep the author's short declarative lines and occasional direct address to the reader.
4. At most two light Australian words per section: a heap, keen, reckon, fortnight. Never ocker.
5. Sentences average roughly 15–18 words. Mix long setups with short lines.

Trial example: "The memory containers are very sophisticated, but I reckon there's a heap more
clarity to surface in how we hook them up."

## casual — for chosen moments only (trial V3)

Everything in crisp, plus shorter sentences, plainer verbs, and fragments for emphasis.

Trial examples: "Wrong time, wrong shape." / "Less structured than the rules. More the _ah-ha_
moment that saves the day."

### Where casual is allowed

- The one punch line that lands a section's point, usually beside its bold thesis sentence.
- The author's own reaction or quoted thought ("I tried that. It's wrong.").
- Direct address to the reader ("Your call.").

### Where casual is not allowed

- Inside `<aside>` reflections. In the trial, casual removed the warmth that makes them work.
- Definitions of coined concepts (Constitution, Common Law, Ambiguity Event, and so on).
- Explanations of a mechanism, a process, or code.
- Any sentence carrying a calibrated hedge ("I'm less confident that…").
- Headings, summaries, frontmatter.

### Limits

- At most one casual passage (one to three sentences) per `##` section.
- Never more than two fragments in a row.
- **Drift check:** compare each casual passage with its source sentence. If the subject, the
  certainty, or the meaning moved, revert it to crisp. Trial cases that failed this check:
  "a real maturing of the craft" → "real progress" (meaning narrowed); "The ecosystem has
  stabilised" → "We've landed" (subject changed); "it has surpassed my framework" → "one has
  surpassed it" (claim made more specific).
