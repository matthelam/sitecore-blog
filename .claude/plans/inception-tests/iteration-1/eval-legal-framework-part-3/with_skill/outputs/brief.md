# Brief: Legal Framework part 3 — a month on Hindsight, and what OKF was really for

Status: **Draft** <!-- becomes: **Locked** YYYY-MM-DD, only on the author's word -->

Working slug: `legal-framework-part-3-hindsight` (would live at `.claude/briefs/legal-framework-part-3-hindsight.md`)

## Where the series stands

- **Series one-liner (from post one):** experience is precedent, so recall it at the point of
  ambiguity rather than loading it up front.
- **Post one** (`a-legal-framework-for-agent-context`): the model. Constitution, Legislation,
  Common Law; the Ambiguity Event, the Clarity Assessment, and the Legislation-review feedback loop.
- **Post two** (`implementing-the-legal-framework`): the build. OKF, three scripts, the hook that
  asks rather than injects. It justified OKF on **retrieval** grounds ("The reason for the
  file-per-fact obsession is retrieval"), admitted it was "much less confident that I needed to build
  the storage layer underneath it", and promised to actually use Hindsight. It left three things
  open: the tags, consolidation, and Claude's own memory running alongside. It closed on "the
  interesting question stops being 'how do I store this' and becomes 'what is worth remembering'".
- **Related tip** (`agentic-studio-scoped-memory-space`): "The point is the scoping and the
  discipline, not the implementation." Also the four provenance tiers, and a catch where a July
  test and an August export disagreed.

Post three is the follow-through on post two's promise. What it has to answer is the user's own
question: with recall solved by someone else, does the one-fact-per-file discipline still earn its
keep?

## The point

**Not chosen yet. Three candidates follow; the author picks one or rewrites it.** Which one is
true depends on what the month actually showed (see Open questions). Candidate C is a real option,
not a straw man.

> **A.** One fact per file was never really a retrieval trick. It was a decision forced at capture
> time, and you only notice it's gone when you try to review, supersede or promote what you've
> remembered.

> **B.** Hindsight answered "how do I store this". It didn't answer "what is worth remembering", and
> that was the half the discipline was for.

> **C.** I built OKF for retrieval, and better retrieval made it unnecessary. What survives of the
> framework is the timing (recall at ambiguity), not the format.

My lean is **A or B, but only if the evidence backs it.** Post two already put OKF's justification
on retrieval, and the user's month has knocked that justification out. That gives the post its
tension either way: either OKF had a second job nobody wrote down (A or B), or it didn't (C). If the
month produced no moment where the missing discipline cost something, C is the honest post, and
it's still a good one.

## Title options

1. Agent Harness: A Month on Hindsight (and What I Stopped Doing)
2. Agent Harness: Better Recall, Looser Facts
3. Agent Harness: What One Key Fact Was Actually For
4. Agent Harness: I Outsourced My Memory Layer. Here's What Came With It, and What Didn't.

(The "Agent Harness:" prefix matches posts one and two.)

## Reader

- **Who:** practitioners building or choosing a memory layer for coding agents. Many will have
  read post two, and some will be weighing Hindsight, Claude Code's built-in memory, or rolling
  their own.
- **Believes now:** memory is a retrieval problem, so better recall means a better memory. If
  they read post two, they may believe OKF is the price of good retrieval.
- **Should leave with:** a clear view of which jobs a memory format does beyond retrieval (such as
  capture judgement, supersession, provenance, and promotion into Legislation), and whether those
  jobs survive handing storage to a product. Depending on the point chosen, also a concrete rule
  for what to keep doing by hand.

## Tension

The author built a storage layer, then found a product that recalls better than his own. That part
is a pleasant surprise. The uncomfortable part is this: post two said one-fact-per-file was there
**for retrieval**, retrieval is now better without it, and yet something feels lost. Either the
author mis-stated why OKF mattered, or he's sentimental about a format he no longer needs. The
reader should want to know which, because they face the same choice with any memory product.

A second tension sits under it. Post one's feedback loop (consulted rulings → Legislation review)
assumes you can point at a single ruling and count how often it's used. Does that still work when
the "ruling" is a chunk of a Hindsight memory bank? **(Author to confirm whether this was tried.)**

## Shape

- **Type:** series part 3 (of an open-ended series; post one promised "progressive blogs as
  updates")
- **Rough size:** a mid-length essay, about the size of post two. One month of use is enough for
  an honest interim report, not a verdict. Don't size it as the definitive comparison.
- **Arc:** **Build log** (pattern 4) **with a Three-attempts spine** (pattern 1) for the turn.
  Build log is the series' own follow-up pattern, and post two used it. The Three-attempts spine
  fits because the author has lived through two attempts: his own store with strict OKF, then
  Hindsight with loose capture. The post asks what the third looks like. Recommended because it
  keeps the specifics-plus-shortfalls credibility of post two, and because the "wrong version
  first" turn is real here: the wrong version may be post two's own explanation of OKF.
- **Alternatives considered:**
  - **Governing analogy, revisited** (pattern 3). Test the legal analogy at its edge. Law reports
    keep the headnote (the holding, in one line) separate from the full judgment. Full-text search
    across judgments can be excellent recall, but you still cite and overturn holdings, not
    transcripts. That maps neatly onto "Hindsight recall vs OKF facts". It's strong if the author
    likes it, but it risks becoming a post about the analogy, not about the month. Better used as
    **one beat** inside the recommended arc (beat 6) than as the whole spine.
  - **Single insight** (pattern 5). If the month produced exactly one sharp before/after, say a
    memory that couldn't be superseded or promoted, the post could be about 500 words: the default
    (loose capture), the problem it caused, the small change (keep a holding line per memory), and
    a before/after. It's tighter, but it drops the series threads post two left open (tags,
    consolidation, Claude's own memory, scoping). Pick it only if those threads aren't ready.

## Story flow

Arc: Build log, with a Three-attempts turn. Beats 5 and 6 depend on which point is chosen; the
variants are noted.

| # | Beat | What it does for the reader | Evidence it needs | Have it? |
|---|---|---|---|---|
| 1 | Pointer back: post two promised to actually use Hindsight, and quoted its own reason for OKF (retrieval). | Re-anchors the series and sets up the claim that's about to be tested. | Post two's lines (in hand). | yes |
| 2 | What changed, concretely: a month on Hindsight in place of `memory.py` / `memory_hook.py`. How it's wired (MCP? hooks? Retain/Recall/Reflect?), which bank scoping he chose, and what he switched off. | Grounds everything in a real setup, as post two did with files and line counts. | Setup details: wiring, bank scope (per-repo or global), whether the operating-loop skills survive, whether the hook still asks a self-question. | author to supply |
| 3 | Recall is better, shown. | Gives Hindsight its due first, fairly. The reader has to believe the trade was worth making before the loss means anything. | One or two concrete recall examples, before/after against the old store. "It's better" alone won't carry it. | author to supply |
| 4 | What quietly stopped happening: capture is no longer one sentence, present tense, tagged and scoped. | Names the loss precisely before judging it. | A description of what Hindsight memories look like now compared with an OKF file. A real example of each would be ideal. | author to supply |
| 5 | **The turn: did the loss cost anything?** Look for the moment it bit, or plainly didn't, across supersede, provenance tier, consolidation, duplicates, and promotion into Legislation. | The reader's model changes here. Either "OKF had a second job" (A or B) or "the format was scaffolding" (C). | At least one concrete incident in either direction. Example: a memory that couldn't be retired or cited, a duplicate, a lost provenance tag, or the reverse, a month with no such incident at all. | **author to supply (critical)** |
| 6 | Reframe what OKF was for. (A or B: the headnote/holding beat, where the discipline is a capture-time judgement and Hindsight doesn't make it for you. C: the timing survived and the format didn't.) | Gives the reader the reusable idea, independent of tool. | The author's own reasoning. The legal-analogy beat is optional. | partly (the analogy is offered; the conclusion is the author's) |
| 7 | What he's doing now: keep Hindsight, and keep some discipline on top (a holding line, provenance, or a capture gate)? Or drop OKF entirely? | Turns the insight into practice, which is what post two readers will copy. | The actual current setup, or the planned one. | author to supply |
| 8 | Status of post two's open threads: tags, consolidation (did Reflect do it?), Claude's own memory, global scoping. | Keeps the series honest. Each thread gets resolved, moved, or dropped out loud. | One line per thread from the author. | author to supply |
| 9 | What's not right yet, and what's next. Does the downloadable skill (v1.2.0) still stand, and does post four exist? | The series' standard honest close. | Author's plan. | author to supply |

## Turning points and visual moments

- **Beat 5 (the turn):** the reader should **see the same piece of experience captured both
  ways** (one OKF file next to the equivalent Hindsight memory) and spot for themselves what the
  second can't do, or see that it can do everything. This is where the claim gets its proof.
- **Beat 6 (the reframe):** the reader should **see OKF's jobs come apart into two piles**: the jobs
  Hindsight took over (recall, search, scoping) and the jobs nobody took over (supersession,
  provenance, promotion, the capture-time judgement). If C wins, the second pile is empty, and
  showing it empty is the point.
- **Beat 3 (secondary):** the reader should **feel the recall improvement** in a before/after on
  the same query. It's only worth a visual if the author has a real side-by-side.

## Emphasis plan

The chosen one-liner appears three times:

1. **Opening**, set against post two's own sentence ("The reason for the file-per-fact obsession is
   retrieval"), so the reader sees the claim under test straight away.
2. **The turn (beat 5/6)**, restated as the conclusion once the incident has landed.
3. **Close**, tied back to the series one-liner: the framework's lasting claim was about when
   experience is recalled, and this post settles how much of the format that claim needs.

## Honesty beats

- **Post two gave the wrong reason, or an incomplete one.** OKF was justified on retrieval, and a
  month shows retrieval wasn't where its value was (or that it had no further value). Owning that
  directly is this post's main credibility beat.
- **The author built a storage layer he arguably didn't need.** Post two already hinted at this.
  Post three is where it's either confirmed or rebutted.
- **One month, one person, one workload.** State the sample size plainly. This is an interim
  report.
- **Prior art:** Hindsight is credited in full (Vectorize, MIT, Retain/Recall/Reflect, tag groups,
  scoping) and isn't set up as a rival to beat. Mention Anthropic's convergent posting again only if
  something new has come out.
- **What's still unsolved:** whatever remains of tags, consolidation and Claude's own memory.
  Name it, even if the answer is "still unsolved".
- **What he'd do differently:** possibly "adopt a product first and add the discipline on top"
  instead of "build the storage, then find the product". **Author to confirm whether that's his
  view.**

## Opening hook options

1. Open on post two's line about retrieval, then say that a month later the retrieval is better
   and the line is wrong. (For A or B: wrong about why. For C: wrong that it mattered.)
2. "For a month I haven't written a single one-fact file, and my agent remembers more than it ever
   did." Then the turn: the author has a feeling he's lost something, and the post finds out what.
3. Open on the July-vs-August contradiction from the Agentic Studio post, a catch made possible by
   discrete, dated facts, and ask whether it would have been caught under Hindsight. **Use only if
   the author knows the answer.**

## Open questions

1. **Which point (A, B, C, or your rewrite)?** This decides beats 5–7. It probably comes down to
   question 2.
2. **Did the missing discipline ever bite in the month?** A concrete moment: a memory you couldn't
   retire, a duplicate, a lost provenance tag, a fact you wanted to promote into Legislation and
   couldn't isolate. Or, just as useful, did nothing of the kind happen?
3. **How is Hindsight wired in?** MCP recall tool, hooks, or both? Does the "hook asks a question,
   it doesn't inject" design from post two survive, or does Hindsight's recall replace it?
4. **What scoping did you choose: per-repo bank or a global one?** Post two said global scoping was
   "precisely the feature I am now hunting for". Did you get it, and did it work?
5. **Did you use Reflect?** If so, did it do any of the consolidation post two said was missing?
6. **What about the provenance tiers** (`observed` / `documented` / `contractual` /
   `unverified`)? Did they survive the move to Hindsight, or did they go the same way as the OKF
   format? This may be the sharpest test of whether "discipline" is about format or about judgement.
7. **Claude Code's own memory:** is it still running alongside? Did Hindsight change that?
8. **The Legislation feedback loop:** have you attempted a Legislation review from Hindsight
   memories? Post one's loop depends on counting how often a ruling is consulted.
9. **The downloadable skill (v1.2.0) and the `legal-framework` skill:** does post three change
   what they install? Do readers who downloaded it need to be told anything?
10. **Is this the last part, or does it point to a post four** (e.g. global memory, or tags)?

## Evidence still needed

- Your Hindsight setup: wiring, bank scoping, what replaced `memory.py` / `memory_hook.py`, and
  what's switched off.
- At least one concrete recall-is-better example, ideally the same query answered by the old store
  and by Hindsight.
- One real experience captured both ways: an OKF file, and what the equivalent Hindsight memory
  looks like (it can be sanitised).
- The incident, or the absence of one, for beat 5. **The post can't take a side without this.**
- One line per open thread from post two: tags, consolidation, Claude's own memory, global scope.
- Your current practice: what discipline, if any, you've kept or reinstated on top of Hindsight.
