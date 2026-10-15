# Brief: From a 900-line CLAUDE.md to six skills

Working slug: `claude-md-to-skills`

Status: **Draft** <!-- becomes: **Locked** YYYY-MM-DD, only on the author's word -->

## The point

> **Leading candidate (C):** Moving workflows out of CLAUDE.md and into skills fixed the rules
> being ignored, but it swapped one risk for another: context that's always loaded but not
> followed, for context that might never load.

This is provisional. Nothing below is locked until you pick the wording, and the beat check runs
against whatever you pick.

**Candidates considered:**

- **A — the sorting rule.** "CLAUDE.md is for what applies every time; anything that only applies
  sometimes belongs in a skill."
  *Includes:* the criterion you used to decide what moved and what stayed in the ~120 lines.
  *Leaves out:* the failure that pushed you to do it, and the triggering doubt. It reads as advice
  and puts the honesty beat at the edge. Also close to ground already covered in
  `three-dimensions-of-agent-context` ("selective loading beats universal loading") and the
  Constitution section of `a-legal-framework-for-agent-context`, so it needs your client-repo
  specifics to earn its place.
- **B — the symptom.** "Past a certain length, the rules at the bottom of CLAUDE.md stop being
  followed."
  *Includes:* the failure, how you noticed it, and what "near the bottom" means.
  *Leaves out:* most of the skills migration, which would shrink to the fix in a few lines. That
  makes it a tip or short essay, and it lives or dies on how well you can show the ignoring
  happened (see Open questions). I have **not** assumed it was about position rather than
  length: that's your call to make, **to confirm**.
- **C — the trade-off (leading).** As above.
  *Includes:* the failure, the migration, the before/after, and the unresolved triggering
  question as the turn of the post rather than an afterthought.
  *Leaves out:* a definitive "skills are the answer" claim, which your notes don't support yet.
  Why it leads: it's the only one of the three where your "still not sure skills trigger reliably"
  is part of the point rather than a caveat, and it's the angle the earlier posts don't cover.

**Beat check:** not run yet. It runs once you pick the wording. Watch for: if you pick A, beats 7–8
(the triggering doubt) become a footnote; if you pick B, beats 4–6 shrink to one.

## Title options

1. "I Stopped Putting Everything in CLAUDE.md"
2. "From 900 Lines to 120: Moving CLAUDE.md Into Skills"
3. "Always Loaded, Not Always Followed: CLAUDE.md vs Skills"
4. (Series-styled, if it joins Agent Harness) "Agent Harness: When CLAUDE.md Gets Too Big"

## Reader

- **Who:** A developer using Claude Code (or a similar harness) on a real, long-running repo,
  whose root CLAUDE.md has been growing a rule at a time.
- **Believes now:** Anything the agent needs to know should go in CLAUDE.md, and if a rule is
  being missed, the answer is to write it more firmly or add another one.
- **Should leave with:** Length has a cost, a test for what stays in CLAUDE.md and what moves out
  to a skill, and a clear sense of the risk that comes with skills (they may not load), so they
  go in with eyes open.

## Tension

The file you rely on to control the agent got so long that the agent stopped following parts of
it. You couldn't see that happening; you only saw the output. The fix (skills) brings back a
version of the same problem in a new form: now the question isn't "will it read the rule" but
"will it load the skill at all". Fixing one thing and being unsure about the replacement is what
makes this worth reading past the first paragraph.

## Shape

- **Type:** short-to-long essay (one post). **Not a series yet.**
- **Rough size:** ~1,200–1,800 words, as the evidence supports. Today's notes alone would support
  about a tip; the size depends on how much of the "Evidence still needed" list you can fill.
- **Arc:** **Build log** (pattern 4), with the triggering question as its "what's not right yet"
  beat raised to the turning point. Why: what you have is concrete (one repo, ~900 → ~120 lines,
  six skills) and ends on an honest shortfall. That's how `implementing-the-legal-framework` is
  built, and it's the arc that holds specifics best.
- **Alternatives considered:** Single insight (pattern 5) and Three attempts (pattern 1). Both
  laid out below.

**On one post vs a series:** a series only works if each part stands alone and answers one
question. The possible parts are (1) "why did a long CLAUDE.md stop working and what did I
move?" and (2) "do skills actually trigger reliably?". You can answer part 1 now. Part 2 has no
evidence yet: your notes say you're not sure. So write one post, end it on the open triggering
question, and if you later test triggering properly, that becomes its own follow-up post (and a
natural Agent Harness entry). Open question: does this belong in the Agent Harness series at all?
The Legal Framework posts already argue for a concise Constitution, so this could be the
"what happened when I didn't" companion.

## Story flow (recommended: Build log)

| # | Beat | What it does for the reader | Evidence it needs | Have it? |
|---|---|---|---|---|
| 1 | Hook: the client repo, and a CLAUDE.md that reached ~900 lines | Places the reader in a familiar spot: a file that grew one reasonable rule at a time | How it got there (who added what, over how long) | partly: ~900 lines yes; how it grew, author to supply |
| 2 | The symptom: rules near the bottom being ignored | Makes the cost concrete: the file was there, the agent didn't follow it | Which rules, what the agent did instead, how you noticed; at least one specific example | author to supply |
| 3 | What you tried first, if anything (reordering, emphasis, repeating rules) | Shows why the obvious fix wasn't enough; sets up the move | Whether you tried anything before skills | author to supply (drop this beat if you went straight to skills) |
| 4 | **The design decision: what moved and what stayed** (turning point 1) | Gives the reader the sorting test they can use on their own file | Your actual criterion; the six skills by name or role (anonymised for the client); what's in the remaining ~120 lines | partly: 6 skills and ~120 yes; criterion and contents, author to supply |
| 5 | Before and after: ~900 → ~120 | The visible collapse: the reader sees the bulk leave the always-loaded file | The two line counts (have); a rough map of which sections went to which skill | partly |
| 6 | How it runs day to day now | Shows whether it worked: are the rules that used to be ignored now followed? | What you've seen since the move; **don't assume it fixed the ignoring until you confirm** | author to supply |
| 7 | **What's not right yet: do skills trigger reliably?** (turning point 2) | Turns the post from "here's the fix" to "here's the trade-off": the reader sees the new risk | What you've seen: a skill not loading when it should, loading when it shouldn't, or just no way to check | author to supply. Notes only say "not sure" |
| 8 | Prior art / connection to earlier posts | Ties to `three-dimensions` (selective loading, "every token is rent") and the Legal Framework (concise Constitution), without repeating them | Links only; nothing new needed | yes |
| 9 | What's next / close on the trade-off | Restates the point; leaves the triggering question openly unanswered and invites readers' experience | Your plan, if any, for testing triggering | author to supply |

## Alternative arc A: Single insight (pattern 5)

Fits if you choose point **B**. Short essay, ~500–800 words.

1. Default behaviour: keep adding rules to CLAUDE.md. *Does:* recognition. *Needs:* nothing new.
2. The problem in practice: rules near the bottom ignored on the client repo. *Does:* the cost.
   *Needs:* a concrete example (author to supply).
3. The small change: move workflows out into skills. *Does:* the fix. *Needs:* what moved.
4. **Before and after, side by side** (turning point): ~900 vs ~120 lines, and the behaviour
   before vs after. *Needs:* the behaviour change since (author to supply).
5. When to use it and when to skip it. *Needs:* your sorting criterion.
6. Core insight in a line.

Why not recommended: it needs a clean before/after *behaviour* result, and the triggering doubt
would be cut down to a caveat. Your notes have the line counts but not the behaviour result.

## Alternative arc B: Three attempts (pattern 1)

Fits only if you remember wrong turns, e.g. you tried a split CLAUDE.md, nested CLAUDE.md files or
heavier emphasis before skills. **I don't know whether you did; author to supply.**

1. First attempt: one root CLAUDE.md, add rules as needed. Why it seemed reasonable.
2. How it broke: ~900 lines, bottom rules ignored. *Needs:* the example.
3. Overcorrection (author to supply: whatever you tried next).
4. Hidden cost of the overcorrection (author to supply).
5. **The realisation** (turning point): workflows don't need to be always loaded.
6. The model that works: ~120-line CLAUDE.md + six skills.
7. Proof it holds, and where it doesn't (triggering).
8. What to carry forward.

Why not recommended: it rests on beats 3–4, which your notes don't contain. If you did try
something in between, this becomes a strong option, and closer to `three-dimensions` in feel.

## Turning points and visual moments

- **Beat 4:** the reader should see the sorting test applied, with sections of the old file
  splitting into "every time → stays" vs "only for this job → moves to a skill".
- **Beat 5:** the reader should see ~900 lines shrink to ~120, with six skills taking the
  difference.
- **Beat 7:** the reader should feel the trade-off reverse: "loaded but ignored" on one side,
  "followed when it loads, but might not load" on the other. (*"Followed when it loads" is a
  guess on my part. Confirm it, or drop that half.*)

## Emphasis plan

- **Opening (beat 1–2):** state the trade-off early in plain form: the move fixed one thing and
  opened a question.
- **Turn (beat 7):** return to it in full when the triggering doubt arrives. This is where the
  point gets its full wording.
- **Close (beat 9):** one-line restatement, framed as the question you're still working on.

## Honesty beats

- **Not solved:** whether skills trigger reliably. This is the planned turning point, not a
  disclaimer.
- **What went wrong first:** letting the file reach ~900 lines; and whatever you tried before
  skills, if anything (beat 3).
- **One repo:** this is one client codebase. Say so; don't generalise past it.
- **Prior art:** your own `three-dimensions` and Legal Framework posts already argue for lean
  always-loaded context. Own that you knew the principle and still ended up at 900 lines, if
  that's true (**to confirm**). It's a strong beat if so.
- **What you'd do differently:** author to supply.

## Opening hook options

1. Open on the numbers: the client repo's CLAUDE.md hit ~900 lines, and the agent was quietly
   skipping the rules at the end of it.
2. Open on the moment you noticed: a specific rule near the bottom that the agent didn't follow
   (needs the example: author to supply).
3. Open on the irony, if it holds: having written about lean agent context, you found your own
   client repo at ~900 lines (**to confirm**).

## Open questions

- **Which point wording?** A, B, C, or a reworded one? The brief can't lock without it.
- **"Ignoring rules near the bottom":** how did you observe this? Which rules? Every session or
  some? Did you confirm it was the rules' position, not the file's overall length or the rules
  themselves? I've kept "near the bottom" as your observation only and made no claim about why.
- **"Still not sure skills trigger reliably":** what's behind the doubt? A case where a skill
  didn't load when it should have? One that loaded when it shouldn't? Or just no way to check?
- **Did the move fix the ignoring?** Your notes say what you moved, not what changed after. Beat 6
  and the before/after both depend on this.
- **What was the sorting criterion?** How did you decide what stayed in the ~120 lines?
- **What are the six skills?** Even as anonymised roles (e.g. "release workflow", "content
  migration"). Can any client details be shown, or does everything need anonymising?
- **Did you try anything before skills?** That decides whether Three attempts is an option.
- **"Workflows":** was everything you moved a workflow (step-by-step procedures), or did some
  reference material or rules move too? This changes the sorting test.
- **Series fit:** standalone post, or an Agent Harness entry?
- **Other CLAUDE.md mechanisms:** did you consider nested/per-directory CLAUDE.md files (your
  Legislation tier) instead of, or as well as, skills? Readers of the Legal Framework posts will
  ask.

## Evidence still needed

- At least one concrete example of a bottom-of-file rule being ignored (rule + what the agent did).
- How the ~900 and ~120 figures were measured (lines; whether includes/imports counted).
- The criterion for stay vs move, and a rough map of old sections → six skills.
- Observed behaviour after the move (did the previously ignored rules start being followed?).
- Any concrete triggering observation, or a plain statement that you haven't tested it.
- Timeframe: how long it took to reach ~900 lines, and how long you've run with skills.
