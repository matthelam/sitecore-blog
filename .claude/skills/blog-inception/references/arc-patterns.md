# Arc patterns

Story shapes the author already uses, each taken from a post of his. Use them as starting points,
not templates: name the pattern you're proposing so the author can say "no, more like the build
log". Combine two when the material calls for it, and say so.

## 1. Three attempts

*Source: `three-dimensions-of-agent-context-from-over-engineering-to-orthogonal-design`.*

Too little → too much → the model that works. The reader lives through each failure, so the fix
feels earned rather than announced.

Beats: the first attempt and why it seemed reasonable → how it broke, concretely → the
overcorrection → the hidden cost of the overcorrection → **the realisation** (turning point) → the
model that works → proof it holds → what to carry forward.

Fits when the author iterated toward the answer and remembers the wrong turns. The wrong turns
are the content.

## 2. One example, threaded

*Source: `the-agent-as-customer-a-practical-build-guide`.*

A single concrete example is introduced early and carried through the whole post (an agent buying
a booster box under an A$300 ceiling), so every abstract component is immediately grounded.

Beats: why the author is here (personal pivot) → a framing analogy (the late-90s web) → the
example, introduced → the shape of the work → each component, tied back to the example → **the
example end to end, including failure** (turning point) → practical guidance (integrate vs build,
what not to build, the first sprint) → honest close that invites argument.

Fits frameworks, guides, and anything with many parts that could otherwise read as a list.

## 3. Governing analogy

*Source: `a-legal-framework-for-agent-context`.*

Borrow a system the reader already understands and map the new idea onto it, part by part. The
analogy does the explaining and also gives the concepts their names (Constitution, Legislation,
Common Law).

Beats: name the problem and what current practice gets wrong → introduce the analogy → map each
part → **the mechanism the analogy reveals** (turning point) → the feedback loop or consequence →
the one-line distillation.

Fits a new mental model that would otherwise need a page of definitions. The test: does the
analogy still hold at the edges, or does it break where it matters?

## 4. Build log

*Source: `implementing-the-legal-framework`.*

What was actually built, concretely, then where it falls short. Credibility comes from specifics
(files, line counts, the decision the author would defend) and from the shortfalls.

Beats: pointer back to the promise or previous post → the thing, concretely → **the design
decision worth defending, and the wrong version tried first** (turning point) → how it runs day to
day → what's not right yet → prior art found along the way → what's next.

Fits implementation posts and series follow-ups.

## 5. Single insight

*Source: `first-principles-in-agent-conversations-when-to-stop-accommodating-and-start-reasoning`.*

One behaviour, one small change, a visible difference.

Beats: the default behaviour → the problem it causes in practice → the small change → **before and
after, side by side** (turning point) → the evidence → when to use it and when to skip it → the
core insight in a line.

Fits short essays. The source post is 416 words.

## 6. Tip

*Sources: `agentic-studio-debug-pane-browser-caching`, `agentic-studio-agent-export-is-lossy`.*

Hook → the quirk → the trap → the rule in one line → an imperative close. Honest about what isn't
known yet ("I have not managed to separate those two yet").

Fits a single thing a practitioner should know before they hit it. If it needs a second section,
it's probably a short essay.

## Series

*Sources: the Azure Entra ID SSO series (01–05); Agent Harness posts 1–2.*

Each part answers one question and points to the next. Plan the series' one-liner as well as each
part's, so every part can repeat the series' point in a sentence.
