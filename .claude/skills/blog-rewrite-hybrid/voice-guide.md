# Voice Guide — Matt Lam's blog

Derived from the source MDX of three posts the author named as the quality bar:
`a-legal-framework-for-agent-context`, `implementing-the-legal-framework`,
`the-agent-as-customer-a-practical-build-guide`. Every rule below is anchored to a real
sentence he wrote. Apply these literally when authoring or rewriting.

The organising principle: **this blog is a practitioner reasoning in public and being honest
about it.** That honesty — including admitted doubt and admitted failure — is the product, not a
flaw to edit out. A rewrite that makes him sound more confident, more polished, or more "marketing"
has failed, even if every sentence is individually cleaner.

---

## 1. Stance and epistemics

- **First person, present tense, reasoning out loud.** "I tried that. It is wrong." / "This is the
  design decision I am most pleased with." Keep the "I".
- **Calibrated claim strength is a feature — protect it.** He states exactly how sure he is:
  "I am much less confident that I needed to build the storage layer underneath it." /
  "Convergence is not proof that an idea is right. It is decent evidence you are pointed at a real
  problem." Do **not** flatten these into flat confident assertions.
- **The distinction that matters:** calibrated epistemics (keep) vs. vague filler hedging (cut).
  - KEEP: "I believe", "I am less confident", "to my eye it lands close to", "decent evidence".
    These carry real information about certainty.
  - CUT: empty hedges that carry no information — "it kind of seems like maybe this could help",
    "in general this is probably sort of useful". Tighten these.
- **Admitting what is not solved is mandatory, never edited away.** Whole sections exist for it:
  "What is not right yet", "I would rather write them down than pretend otherwise", "This is the
  honest technical flaw." If the source admits a limitation, the rewrite keeps it, in his voice.

## 2. Sentence craft and rhythm

- **Long setup, then a short hammer.** "Nothing hand-edits `memory/`. That single rule is doing
  most of the work." / "A memory system that breaks your prompt is worse than no memory system."
  Preserve or create this cadence; don't level every sentence to the same length.
- **Em dash as the connective of choice.** "facts, not sales pressure" / "a client anecdote is not
  knowledge." He uses ` - ` and `—` to pivot. Keep them; do not convert every dash into a comma.
- **One bold distilled thesis sentence per major section.** He bolds the single line that carries
  the idea: **"help generously, reject hard - at different layers."** /
  **"you do not tell the agent 'please do not overspend'; you make overspending impossible."**
  When a section has such a line, keep it bold and keep it one sentence.
- **Occasional direct address to the reader.** "If you would rather read the code than read me, take
  the skill and go." / "judge for yourself" / "Your call." Keep these; they are not filler.

## 3. Named concepts and specificity

- **He names and Capitalises his concepts.** Constitution / Legislation / Common Law, OKF (One Key
  Fact), Ambiguity Event, Clarity Assessment, Capability Profile, mandate, Human Window. Never
  rename, lowercase, or "simplify away" a coined term — the naming is the contribution.
- **Concrete artefacts over adjectives.** Line counts ("`memory.py`, 372 lines"), real filenames,
  real product names (Hindsight, Vectorize, AP2, MCP, Stripe), real prices (A$280), real durations
  ("within a fortnight"). If the source has a specific, the rewrite keeps that exact specific.
- **Code, JSON, and tables are load-bearing.** Keep every fenced block, JSON object, and table
  intact and in place. Do not paraphrase code into prose.

## 4. Structure

- **Open on the problem or a direct hook, not a preamble.** He opens with the tension
  ("We have started to settle on how we hand context to an agent... But prescription only goes so
  far") or a blunt pointer ("[The first post] ended with a promise... This is that post"). No
  "In this article we will" throat-clearing.
- **`##` sections with plain, often declarative headings.** "The three tiers, as files" /
  "The hook asks a question, it does not inject an answer" / "What is not right yet" /
  "What is next". Headings can state a position; they are not generic labels only.
- **Close by looking forward or inviting the reader — or, when it fits, "In Summary".** The essay
  closes with an explicit "## In Summary"; the implementation post closes forward: "Post three will
  cover whichever of those survives contact with reality. Come and tell me if you have solved the
  consolidation problem, because I have not." Both are valid. Never bolt on a generic marketing CTA.

## 5. Spelling, mechanics, components

- **Australian/British spelling.** generalise, behaviour, stabilise, colour, optimise, prioritise,
  categorise. Keep it; do not Americanise.
- **`<aside>` callouts** carry tangents and personal reflection, styled exactly as in the posts
  (`className="not-prose my-6 rounded-lg border-l-4 ... italic ..."`). Preserve them verbatim in
  structure; only fix errors inside.
- **Inline `<svg>` / `<img>` diagrams** with detailed `alt`/`aria-label`. Keep untouched unless
  fixing a typo in the label. Hand-tuned SVG is preceded by `{/* prettier-ignore */}`.

## 6. Correctness pass (voice-preserving)

The live posts ship real errors — fix these kinds, and only these kinds, listing each change:
- Misspellings: "heirarchy" → "hierarchy", "Consitution" → "Constitution".
- Grammar slips: "the our Common Law" → "our Common Law"; "In more extreme cases can may identify"
  → "In more extreme cases we may identify".
- Obvious doubled words / broken agreement.
Do **not**, under the banner of "correctness", remove hedging, cut an admission, de-capitalise a
coined term, shorten an `<aside>`, or rephrase a claim into something stronger than he wrote.

---

## Platform validity (this repo)

- Frontmatter is YAML between `---` fences. Schema (from `contentlayer.config.ts`):
  `title` (required), `date` (required, `YYYY-MM-DD`), `tags` (lowercase-hyphen slugs), `draft`
  (bool), `summary`, `images`, `authors: ['default']`, `layout: PostLayout`. Preserve the source
  frontmatter unless asked to change it.
- Body is MDX: Markdown plus JSX components. Keep `<aside>`, `<svg>`, `<img>`, code fences
  (language + optional `title`) exactly as the component conventions require.
- Images live at `/static/images/<post-slug>/...`. Never invent an image path that is not in the
  source.
