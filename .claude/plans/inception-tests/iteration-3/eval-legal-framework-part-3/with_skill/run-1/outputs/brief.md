# Brief: Legal Framework part 3 - a month on Hindsight (working slug: `legal-framework-hindsight-month`)

Status: **Draft**

## The point

> **Leading candidate (not chosen yet):** "One fact per file was there for retrieval. A month on
> Hindsight says retrieval doesn't need it any more, so I need to work out what else it was doing."

The point can't be settled yet, because it depends on your answer to open question 1: after a
month, does OKF still matter, and for what? Each candidate below is a different verdict, so each
one makes a different post.

**Candidates considered:**

| # | Wording | Includes | Leaves out |
|---|---|---|---|
| A | "One fact per file was a retrieval workaround. Once recall got good, the format stopped earning its keep." | The switch, the recall gain, retiring OKF. Short and decisive. | Supersede, lint, export/import and promotion, the jobs OKF did besides retrieval. It only holds if you've checked that none of those suffered. |
| B | "Better recall didn't remove the need for discipline. It moved it, from how a fact is stored to what's worth remembering." | Picks up post two's closing line ("what is worth remembering ... was always the harder half"). Makes room for the unsettled tags and the rule for what becomes a memory. | A firm verdict on OKF itself. **To confirm:** "moved" is my framing, not something you've said. |
| C | "Atomic facts were never really for the retriever. They were for me: superseding, linting, and promoting precedent into Legislation." | The governance side of the framework (feedback loop, framework-lint, export/import), and why OKF survives. | The "recall is better" story moves to the background. It only holds if you found you missed those jobs. |
| D | "A month on Hindsight: recall got better, and I still can't tell what I gave up by dropping one fact per file." | An honest open-question post. Fits the series' habit of reporting what isn't solved. | Any verdict. The risk is that it reads as a status update instead of a post. |

Post two (implementing-the-legal-framework) already set up a test this post can answer. It said:
*"I am still a fan of OKF as a format. I am much less confident that I needed to build the storage
layer underneath it."* The month went further than that prediction. The storage layer went, and
so did the format discipline. Whichever candidate you pick, its wording has to say whether that
prediction held.

**Beat check:** not run. It has to wait until the wording is chosen (see step 12). Notes so far:
beat 8 (the leftover promises from post two) only fits candidates B and D, and beat 6 (the audit)
is the core of C and gets thin under A.

## Title options

1. Agent Harness: A Month on Hindsight - What One Fact Per File Was For
2. Agent Harness: I Stopped Writing One Fact Per File
3. Agent Harness: The Legal Framework Without My Scripts

(The series titles use the "Agent Harness:" prefix. Keep it or drop it, your call.)

## Reader

- **Who:** Someone who read parts one and two, or anyone running agent memory (Claude Code's
  built-in memory, a hand-rolled store, Hindsight) who is deciding how much structure to put on
  what gets remembered.
- **Believes now:** Post two told them atomic, schema-checked facts make retrieval trustworthy,
  and that the scripts enforce it.
- **Should leave with:** A clear view, tested over a month of use, of which part of that
  discipline a good memory service makes unnecessary and which part (if any) is still on them.
  Which part survives depends on the verdict.

## Tension

Post two gave one reason for OKF: *"The reason for the file-per-fact obsession is retrieval."* A
month without it, recall got **better**. On its own terms the reason has gone. Still, you've
noticed you "lost" something, and part two also used OKF for jobs besides retrieval: supersede,
lint, the export/import reconciliation, and promoting facts into Legislation. So the question is
whether you kept a ritual whose reason has gone, or whether it was doing work you only notice now
that it's missing. The tension also lands on you personally: you built the scripts, and post two
already admitted doubts about the storage layer.

## Shape

- **Type:** series, part 3 of an open-ended series (Agent Harness / Legal Framework)
- **Rough size:** set by the verdict and the evidence. With A or D, a short essay (roughly
  800 to 1,200 words) is honest. With B or C plus the full audit (beat 6), a long essay. Don't
  plan for the length of post two unless you have concrete examples for beats 3 and 5.
- **Arc:** **Build log** (pattern 4), with the "what was OKF for" audit as the turning point. It's
  the pattern part two used, it fits a series follow-up, and its "what's not right yet" beat
  covers the threads post two left open.
- **Alternatives considered:** Governing analogy, extended (pattern 3), and Single insight
  (pattern 5). Both are laid out below. Three attempts (pattern 1) wasn't offered. You have two
  attempts (scripts, then Hindsight) and no third model yet. If the month gave you a hybrid
  ("Hindsight for recall, OKF kept for X"), that's the third attempt, and the pattern becomes the
  strongest option.

## Story flow (recommended: Build log)

| # | Beat | What it does for the reader | Evidence it needs | Have it? |
|---|---|---|---|---|
| 1 | Pointer back: post two ended keen to "actually use Hindsight", said post three would cover "whichever of those survives contact with reality", and called "what is worth remembering" the harder half. | Picks up the thread and states the promise this post keeps. | Post two's closing lines. | yes |
| 2 | The switch, concretely: what Hindsight replaced and what stayed. memory.py, memory_exchange.py, memory_hook.py, the six skills, Constitution and Legislation. Managed or self-hosted, how banks are scoped. | Specifics are where this series gets its credibility. Shows the reader the setup, not just a verdict. | Your setup details. | author to supply |
| 3 | Recall is better: one or two concrete moments where Hindsight surfaced something your scripts wouldn't have, or surfaced it more reliably. | Makes "better" real instead of claimed. | Examples, and how you judged "better" (see open questions). | author to supply |
| 4 | **Turn 1:** put post two's own reasoning ("the reason for the file-per-fact obsession is retrieval") and its prediction (format stays, storage goes) next to the result. | The reader sees the stated reason for OKF stop applying. | Post two quotes (have). Confirmation that the format discipline went, not only the storage. | partly. Confirm what "lost the discipline" means in practice |
| 5 | What I lost: the concrete symptoms of dropping one fact per file. | Shows the cost, if there is one, as something specific. | Your observations: duplicates, facts you can't supersede, nothing to lint, harder to export, or nothing noticeable. | author to supply |
| 6 | **Turn 2:** the audit. Go through each job OKF did in post two (retrieval, supersede, schema/lint, scope, export generalisation and import conflict check, promotion into Legislation and framework-lint) and ask whether Hindsight covers it, whether it still matters, or whether it quietly stopped. | The reader's model shifts from "OKF is a storage format" to "OKF was a bundle of jobs, and only some of them were about storage". | The list of jobs (have, from post two). The verdict on each one. | partly. Verdicts are author to supply |
| 7 | The verdict: the one-liner, said plainly. | The thing the reader leaves with. | Your decision. | author to supply |
| 8 | What's still not right. Post two left four threads open: tags, consolidation, Claude Code's own memory running alongside, and a global memory with per-space scoping. Where does each stand after a month? (Hindsight's Reflect and scoping are directly relevant. **To confirm** whether you used them.) | Honesty beat, and it keeps the series going. | Status of each thread. | author to supply |
| 9 | What's next, with an invitation to argue. | Close, and a pointer to part four. | Your plans. | author to supply |

### Alternative: Governing analogy, extended (pattern 3)

The first post used the analogy as its arc, so this one would stay inside it.

1. Restate the Common Law tier and its OKF form. *Gives the reader the model again.* Evidence: posts one and two (have).
2. Bring in how real case law records precedent: full judgments are kept, and the binding principle is drawn out when a case is cited. *Puts the analogy to work on the question.* Evidence: **to confirm**. This is my framing, and you'd want to check it's accurate enough to build on.
3. Map it: OKF distils the fact when it's written, and Hindsight (as you've used it) distils it when it's recalled. *Names the difference between the two approaches.* Evidence: **to confirm** how Hindsight actually processes what it retains. This is an inference, not a fact you've given me.
4. **Turn:** the place where distillation happens decides what you lose. *The reader's model changes here.* Evidence: beats 3 and 5 of the main arc.
5. What that means for the framework: which tier still needs the discipline (for example, promotion into Legislation). *The consequence.* Evidence: author to supply.
6. A one-line distillation. Evidence: the chosen point.

Why it isn't recommended: it rests on two links that are still to confirm (the case-law
mechanism and Hindsight's internals). It's also the most elegant option, so it's the most likely
to dress up a guess as a finding. If both links hold, it becomes the strongest option, because it
tests the series' analogy at its edges, as arc-patterns asks.

### Alternative: Single insight (pattern 5)

1. The default: one fact per file, gated by memory.py. Evidence: post two (have).
2. The problem it caused in practice. Evidence: author to supply. **Is there one, beyond upkeep?**
3. The change: Hindsight, no format discipline. Evidence: your setup.
4. **Turn:** before and after on recall. Evidence: examples from beat 3 of the main arc.
5. When OKF is still worth it, and when to skip it. Evidence: author to supply.
6. The insight in a line.

Why it isn't recommended: it only works under candidate A, and it gets rid of the uncertainty you
raised instead of examining it. Pick it if your honest answer to open question 1 is "it really
doesn't matter".

## Turning points and visual moments

- **Beat 4:** the reader should see the stated reason for OKF stop applying. Post two's sentence
  on one side, a month of better recall on the other, and the prediction ("format stays, storage
  goes") marked as half right or wrong.
- **Beat 6:** the reader should see "OKF" break apart into separate jobs, then watch each one get
  sorted: covered by Hindsight, still needed, or quietly lost. This is where their model changes.
- **Beat 7:** the verdict should read as the result of the sort in beat 6, not as a new claim.

## Emphasis plan

The chosen one-liner appears three times. In the opening, as the question this post answers
(beat 1 into 2). At the turn, when the retrieval reason stops applying (beat 4). At the close, as
the verdict (beat 7), stated flat. The series point ("give each kind of context its own home and
deliver it just in time, with experience recalled as precedent") should come back once in beat 1
or 9, so the part stands on its own.

## Honesty beats

- Post two's prediction, that the storage layer goes and the format stays, was only half right,
  or wrong. Say which, plainly.
- You built about 1,200 lines of scripts (372 + 702 + 115) and a month on a product replaced at
  least some of them. Post two already admitted to a "mixed feeling" about finding Hindsight. How
  does that feeling look now?
- The threads post two left open (tags, consolidation, Claude's own memory, global scoping): say
  which are still open, and don't let Hindsight quietly take credit for ones it didn't solve.
- If the honest answer is "I can't tell yet", say that, and say what would let you tell
  (candidate D).
- Prior art: Hindsight itself, and the Anthropic posting cited in part two, if it's still relevant.

## Opening hook options

1. Quote back post two's line *"the reason for the file-per-fact obsession is retrieval"*, then:
   a month without it, retrieval got better.
2. Start with the promise: "Post two ended with me wanting to actually use Hindsight rather than
   read about it. I've used it for a month, and it took one of my rules with it."
3. Start with the admission: "I stopped writing one fact per file a month ago and recall improved.
   I'm still not sure that's good news."

## Open questions

1. **"I'm not sure that matters anymore."** Matters for what? Retrieval quality, being able to
   supersede and retire facts, linting, export/import, promoting precedent into Legislation, your
   own ability to read and trust the fact base? This answer picks the candidate point.
2. **"Recall is better."** Better how, and how did you observe it? More relevant hits, fewer
   misses, less prompting to consult, results you'd previously have missed? Did you ever run the
   same question against both systems, or is this an impression from the month? Either is fine,
   but the post has to say which.
3. **"Lost the OKF one-fact-per-file discipline."** What does losing it look like? Do memories now
   go in as free text, several facts per entry, unschema'd? Did you stop on purpose or did it
   just happen? Is anything enforcing structure now (Hindsight's tagging at ingest)?
4. **"Instead of my own memory scripts."** All three scripts, or only memory.py? Are the hook, the
   six skills, framework-lint and export/import still running, now pointed at Hindsight, or
   retired?
5. Did the Ambiguity Event / Clarity Assessment recall mechanism from post one survive the switch,
   or does Hindsight's recall now happen at a different moment? This bears on the series point.
6. Did you use Hindsight's scoping (per repo or per space) and its Reflect API? Post two named
   scoping as "precisely the feature I am now hunting for", and Reflect could bear on the
   consolidation problem.
7. Has Claude Code's own memory stopped competing, or is it still running alongside?
8. Do you want this post to give a verdict (A, B or C) or report an open question (D)?
9. Is this the post that answers the tags question from post two, or does that stay for part four?

## Evidence still needed

- Your Hindsight setup (managed or self-hosted, how banks are scoped, how it's wired into Claude
  Code).
- One or two concrete recall examples that back up "better".
- Concrete symptoms (or a clear lack of them) of losing one fact per file.
- A verdict on each OKF job in beat 6.
- Status of the four threads post two left open.
- If you use the analogy arc: confirmation of the case-law framing and of how Hindsight processes
  retained memories.
