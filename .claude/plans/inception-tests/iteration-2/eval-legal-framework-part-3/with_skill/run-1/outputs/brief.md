# Brief: Legal Framework part 3 (Hindsight as Common Law)

Working slug: `legal-framework-part-3-hindsight`

Status: **Draft**

<!-- Inception only. Nothing below is locked. Everything marked "author to supply" or "to confirm" is
not yet a claim and must not reach the post as one. -->

## Where this sits in the series

- **Series one-liner (as posts 1 and 2 already carry it):** experience is precedent, so recall it at
  the point of ambiguity, not up front.
- **Post 1** (`a-legal-framework-for-agent-context`): the model. Constitution, Legislation, Common
  Law, the Ambiguity Event, the Clarity Assessment, the feedback loop. Promised "key changes" for
  post 3.
- **Post 2** (`implementing-the-legal-framework`): the build. OKF, three scripts, the
  question-asking hook. Left open: the tags, consolidation, locking out Claude's own memory. It said
  "I am still a fan of OKF as a format. I am much less confident that I needed to build the storage
  layer underneath it." It ended with "I am very keen to actually use Hindsight" and "if it does what
  it says, the interesting question stops being 'how do I store this' and becomes 'what is worth
  remembering'". It also promised that post 3 "will cover whichever of those survives contact with
  reality".
- **Post 3 (this one):** the contact with reality. A month on Hindsight in place of the scripts.

**The hook post 2 already set up:** post 2 bet that the *format* (OKF) mattered and the *storage*
didn't. A month later he has dropped the storage, and the format went with it. So the post has to
find out which of the two was doing the work. Only Matt's answer to "does it matter?" settles that,
and he says he doesn't know yet.

## The point

Not chosen yet. All three candidates come from the raw material. Which one is honest depends on
the answer to Open question 1.

> **A. (OKF doesn't matter any more)** "One fact per file was a retrieval workaround. Once recall is
> good, the discipline that matters moves from how a fact is written to whether it should be kept at
> all."

> **B. (it still matters, just somewhere else)** "Better recall didn't make the discipline obsolete.
> It moved it." *(Where it moved to, whether into the review, the retain step or the Legislation, is
> **author to supply**. I have no evidence for any of these.)*

> **C. (genuinely undecided: the post is the open question)** "I built a storage layer to enforce a
> format. A month without either is the first fair test of which one was doing the work."

My lean is **C** if he can't yet point to a moment where the missing discipline hurt or didn't hurt,
and **A** or **B** once he can. C is the honest one today. A is the bolder post, but it needs
evidence he hasn't given yet.

## Title options

1. Agent Harness: A Month of Common Law on Hindsight
2. Agent Harness: Did One Key Fact Ever Matter?
3. Agent Harness: Better Recall, Looser Facts
4. Agent Harness: The Legal Framework Meets Hindsight

(Keeps the "Agent Harness:" prefix the series uses.)

## Reader

- **Who:** practitioners running a memory layer for coding agents (their own, Claude Code's built-in,
  or a product like Hindsight), including readers of posts 1 and 2 who may have downloaded the skill.
- **Believes now:** that structured, atomic facts (OKF or similar) are what makes agent memory
  trustworthy, and that hand-built schemas and gates are worth the effort. If they read post 2, they
  believe Matt believes this.
- **Should leave with:** a clear view of what a good recall engine does and doesn't replace in a
  hand-built memory discipline, and a sense of which parts of the Legal Framework survive the swap
  (*which ones is author to supply*).

## Tension

Post 2 argued for one-fact-per-file because "a fact you can search, supersede and scope individually
is a fact you can trust." Matt has now spent a month without that discipline and says recall is
*better*. Either the discipline was never what made memory useful, or its cost hasn't arrived yet.
Stale facts, duplicates and unlinked supersessions are exactly the consolidation problem post 2 said
was unsolved, and they would show up late. The reader can't tell which, and neither, for now, can
the author. He also told readers to download the OKF skill. That raises the stakes: if OKF doesn't
matter, he owes them that.

## Shape

- **Type:** series part 3 of an open series (the "Agent Harness" Legal Framework thread).
- **Rough size:** a long essay (roughly 1,200 to 1,800 words) *if* he has concrete before/after
  recall examples and a view on question 1. Without them it is a short essay or a
  "field notes at one month" post (600 to 900 words) that states the open question and invites
  readers in. The evidence decides, not the series slot.
- **Arc:** **Build log**, with **Single insight's before/after** grafted on at the turning point.
  The build log is the series' established follow-up shape. Post 2 used it, and it carries specifics
  and shortfalls well. The before/after graft is there because "recall is better" is a comparative
  claim and needs to be *shown*, not asserted.
- **Alternatives considered:** Three attempts (scripts, then Hindsight, then a hybrid). It's strong
  if a third settled state exists, but there's no evidence one does yet. Governing analogy, extended:
  it uses the series' own legal frame to name what was lost, but it depends on mechanics I can't
  confirm. Both are laid out below.

## Story flow (recommended: Build log + before/after)

| # | Beat | What it does for the reader | Evidence it needs | Have it? |
|---|---|---|---|---|
| 1 | Pointer back: post 2 ended "keen to actually use Hindsight", and this is a month of doing it | Re-anchors series readers, sets the promise being kept | Link to post 2 and the line quoted | yes |
| 2 | The swap, concretely: what replaced what. Scripts out? Hooks kept? Skills kept? Which repos/spaces? Bank scoping? | Grounds the post in specifics, the way post 2's file and line counts did | What exactly he turned off and on; managed vs self-hosted; how Hindsight is wired to the consult/capture loop | author to supply |
| 3 | What stayed the same: Constitution and Legislation, presumably untouched; the Ambiguity Event / consult moment | Shows the framework is the model, not the scripts. Ties back to the series one-liner | Whether the consult hook/self-question still fires and now points at Hindsight recall | to confirm |
| 4 | **Recall is better: before and after** (turning point 1) | The reader sees the difference, not just hears it | One or two concrete recall moments, same kind of question, scripts vs Hindsight; what "better" means (found more? found the right one? fewer misses? less prompting?) | author to supply |
| 5 | What went: the OKF discipline. What it actually looks like now, in what gets retained and how | Makes the loss concrete rather than abstract | Examples of what Hindsight memories look like vs an OKF file; whether he stopped writing OKF or Hindsight reshapes what he writes | author to supply |
| 6 | **Does it matter?** (turning point 2, the post's real question) | The reader's model changes here: either the format was a crutch for weak retrieval, or its absence has a cost that is coming | Any moment in the month where the missing discipline bit (a stale fact, a duplicate, a wrong recall), *or* the absence of any such moment. Also: does Hindsight's ingest-time tagging do part of OKF's job? | author to supply |
| 7 | Post 2's open items revisited: tags, consolidation, Claude's own memory, global scoping | Keeps the series honest, the "whichever survives contact with reality" promise | Status of each of the four after a month | author to supply |
| 8 | What's not right yet / what I'd tell someone who downloaded the v1.2.0 skill | Honesty beat plus practical guidance | His view on whether readers should keep OKF, drop it, or keep it as a writing habit only | author to supply |
| 9 | Close: the one-liner, and what post 4 tests | Returns to the point, hands to the next part | His next step | author to supply |

### Alternative arc: Three attempts

1. **Attempt one, the hand-built gate (post 2):** why it seemed right, with OKF and schema
   validation. *Evidence: post 2, which we have.*
2. **Where it broke:** recall quality, and maintenance (consolidation by hand). *Evidence: what was
   actually weak about recall under the scripts. Author to supply.*
3. **The overcorrection, handing it all to Hindsight:** recall gets better and discipline goes.
   *Evidence: the month. Author to supply.*
4. **The hidden cost of the overcorrection:** *only exists if he has seen one. Author to supply.*
5. **The realisation (turning point):** which part of the discipline was load-bearing. *Author to
   supply.*
6. **The model that works:** some hybrid (OKF-shaped writes into Hindsight? a review pass?). *Does
   not exist yet as far as the material shows.*

Not recommended *today*, because beats 4 to 6 need a cost and a fix that the material doesn't
contain. If a month or two more produces them, this becomes the stronger arc and arguably the better
post. Worth holding in reserve.

### Alternative arc: Governing analogy, extended

1. **The problem restated:** post 2 made Common Law a pile of atomic facts. *Have it.*
2. **Extend the analogy:** in a real common-law system, precedent survives as whole judgments, and
   lawyers and editors pull out the binding principle afterwards, at reporting or at citation time.
   *This is my suggestion, not Matt's claim. Does it fit his experience?*
3. **Map it:** OKF writes the distilled principle up front, one fact per file. Hindsight (perhaps)
   retains richer material and extracts at recall. *Whether Hindsight works like that is **to
   confirm**. I don't know its internals beyond what post 2 states (Retain/Recall/Reflect,
   tagging at ingest, scoping).*
4. **The mechanism it reveals (turning point):** where the distilling happens, at write time or at
   read time, and who does it. *Author to supply whether this matches.*
5. **The consequence:** what that means for the Legislation feedback loop from post 1. *Author to
   supply.*
6. **The distillation.**

Attractive because it keeps the series' own language and could give the "does it matter" question a
name. It's risky because it rests on a mechanism claim about Hindsight that we haven't confirmed,
and the analogy has to hold at the edge that matters. Could be folded into beat 6 of the
recommended arc as a short paragraph instead of carrying the whole post.

## Turning points and visual moments

- **Beat 4 (recall before/after):** the reader should *see the same question answered twice*, once
  by the old scripts and once by Hindsight, and judge the difference themselves.
- **Beat 6 (does it matter):** the reader should *see an OKF fact next to its Hindsight equivalent*
  and notice what's been gained and what's gone. If a stale or duplicate fact surfaced in the month,
  this is where the reader *watches the cost arrive*. If none did, they should see that absence.
- **Beat 3 (what stayed):** optional. The reader *sees post 1's three tiers with only the Common Law
  box swapped out*, so the framework visibly outlives its implementation.

## Emphasis plan

- **Opening:** state the question version of the one-liner, tied to post 2's "fan of OKF as a
  format" line.
- **Turn (beat 6):** the one-liner lands as the answer, or, under candidate C, as the sharpened
  question.
- **Close:** the one-liner again, plus the series line, "experience is precedent, recalled at
  ambiguity", to show the model survived the swap (*if it did, to confirm*).

## Honesty beats

- **Post 2 defended OKF.** If it doesn't matter, say so plainly, and say what that means for
  readers who downloaded the skill.
- **"Not sure yet"** is itself an honesty beat. One month may be too short to see consolidation
  costs, and the post should say so rather than declare victory.
- **Prior art:** post 2 already said Hindsight is "several years ahead". This post is where he finds
  out whether that held up in use.
- **Post 2's unresolved items** (tags, consolidation, Claude's own memory, global scoping). Report
  each honestly, including the ones that didn't move.
- **What he'd do differently** with a month's hindsight (the pun is available; tone is a later
  call). *Author to supply.*

## Opening hook options

1. Open on post 2's own line, "I am still a fan of OKF as a format", then say that a month later he
   isn't writing it any more and can't yet say whether that's a problem.
2. Open on the trade: recall got better and the discipline went, and he doesn't know which of those
   is the bigger deal.
3. Open on the promise: "Post three will cover whichever of those survives contact with reality.
   This is the contact."

## Open questions

1. **"I'm not sure that matters anymore": this is the post's central claim, and it's undecided.**
   What would convince you either way? Has anything in the month gone wrong that OKF would have
   prevented (a stale fact recalled, duplicates, a fact that couldn't be superseded or scoped)? Or
   has nothing gone wrong, and is that the evidence? The choice between candidates A, B and C hangs
   on this.
2. **"Recall is better": better how, and how did you observe it?** More relevant results? The right
   fact on the first try? Fewer times you had to step in and nudge? Recall across repos/spaces that
   the scripts couldn't do? Is it a felt impression or something you could show side by side?
3. **"Lost the OKF discipline": what concretely was lost?** Did you stop writing one-sentence
   atomic facts, or does Hindsight's retain step take in whatever you give it? Is the schema
   (id, tags, scope, status, dates) gone, or partly replaced by Hindsight's ingest tagging and
   scoping? Was it a deliberate choice or did it just drift?
4. **"Instead of my own memory scripts": what exactly was swapped?** Are `memory.py`,
   `memory_exchange.py` and `memory_hook.py` all off? Are the consult/capture/sense-check skills and
   the question-asking hook still running, now pointed at Hindsight? Managed or self-hosted?
5. **Is the Legal Framework still the frame?** Did the Constitution/Legislation/Common Law split
   and the "recall at ambiguity" moment survive unchanged, with only the storage replaced? Or did
   Hindsight change *when* recall happens too?
6. **Post 2's four open items after a month:** tags, consolidation, locking out Claude's own memory,
   and the global/scoped memory you were hunting for. Did Hindsight's scoping deliver the last one?
7. **The knowledge-exchange layer** (export/import, conflict against destination law). Does it have
   any equivalent on Hindsight, or is that a loss worth naming?
8. **"What is worth remembering":** post 2 predicted this becomes the real question once storage is
   solved. Has it? Is that actually where the discipline went (candidate B)?
9. **One month is a short window.** Do you want to publish now as a one-month check-in, or hold
   until the consolidation question has had time to show up?
10. **Post 1 promised "key changes based on my learnings" for post 3.** Is the Hindsight swap the
    key change, or are there others (e.g. to the Clarity Assessment) that belong here?

## Evidence still needed

- A concrete description of the current setup (what's running, what's off).
- At least one, ideally two, side-by-side recall examples (old scripts vs Hindsight).
- An example of an OKF fact and what the same knowledge looks like in Hindsight now.
- Any incident in the month where the lost discipline did or didn't cost something.
- The status of tags, consolidation, Claude-memory lockout and global scoping.
- Your recommendation to readers who installed the v1.2.0 skill.
- Anything about Hindsight's internals the post leans on (e.g. how retain processes input), checked
  against its documentation, not assumed.
