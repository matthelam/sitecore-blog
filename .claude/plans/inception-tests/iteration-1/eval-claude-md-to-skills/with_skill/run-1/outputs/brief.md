# Brief: CLAUDE.md is not a filing cabinet

Working slug: `claude-md-to-skills`
Status: **Draft** <!-- becomes: **Locked** YYYY-MM-DD, only on the author's word -->

## The point

Candidates. Pick one or rewrite it. The one you pick becomes the emphasis line.

- **A.** *"Your root CLAUDE.md is the one file the agent reads every time, so put in it only what has to apply every time, and move everything else to where it gets loaded when it's needed."*
- **B.** *"Moving workflows into skills swapped a rule the agent stopped reading for a skill the agent might not load. That's a better problem to have, but it's still a problem."*
- **C.** *"Past a certain length, adding a rule to CLAUDE.md makes the rules you already have weaker."*

**Recommendation: A, with B as the honest turn.** A is the takeaway a reader can act on. B is
where your notes are most honest (you're "still not sure skills trigger reliably"), and it stops
the post reading like a migration success story. C is the sharpest line, but it claims more than
one client repo shows. Use it only if you have more than one data point (see Open questions).

> Draft emphasis line (A): **CLAUDE.md is for what's always true. Everything else should load when it's needed.**

## Title options

1. CLAUDE.md Is Not a Filing Cabinet
2. From 900 Lines to 120: Moving Workflows Out of CLAUDE.md and Into Skills
3. The Rules at the Bottom of CLAUDE.md
4. Agent Harness: When the Constitution Gets Too Long *(only if this joins the Agent Harness series, see Shape)*

## Reader

- **Who:** A developer who uses Claude Code (or a similar harness) on a real, long-running repo, and whose root CLAUDE.md keeps growing every time the agent gets something wrong.
- **Believes now:** CLAUDE.md is *the* place to tell the agent things. More rules there means more control, and if the agent misses a rule, the rule needs to be clearer or louder.
- **Should leave with:** A rule for sorting what stays in CLAUDE.md and what moves, a realistic idea of what moving it costs (skills have to be picked up to work), and permission to delete most of that file.

## Tension

The fix everyone reaches for, adding one more rule to CLAUDE.md, is the thing that broke it. At
around 900 lines the agent started ignoring rules near the bottom, so every new rule was quietly
weakening older ones. Moving workflows into skills fixed the length but created a different
uncertainty. A rule in CLAUDE.md is at least always loaded. A rule in a skill only works if the
skill triggers, and you're not yet sure it does. The reader is choosing between two failure
modes, and the post is honest that neither one is solved.

## Shape

- **Type:** Long-ish essay, single post. **Not a series yet.**
- **Rough size:** About 1,200–1,600 words, in line with `implementing-the-legal-framework` (about 1,500). The evidence is one repo, one migration, and two numbers (900 → 120, 6 skills). That fills one post well and wouldn't stretch across several.
- **Why not a series:** Each part of a series has to stand on its own and answer one question. Right now you can answer one question ("what moves out of CLAUDE.md and why"). The second question ("do skills actually trigger reliably?") is the open one, and you don't have the evidence for it yet. A post on it now would just be "I'm not sure". **Recommendation:** write this one post. End it with skill triggering as the explicit open problem, and treat a follow-up ("Do skills actually trigger?") as a *candidate* part two once you've measured something. If that follow-up happens, these two posts make a natural two-part series. The series one-liner could be *"Context that loads on demand is only as good as the thing that demands it."*
- **Series fit to decide:** This sits very close to the **Agent Harness / Legal Framework** posts. In `a-legal-framework-for-agent-context` the root CLAUDE.md is the Constitution, "a concise set of points", with Karpathy's roughly 60 lines held up as the exemplar. This post is the field evidence for *why* the Constitution has to be concise. It could be (a) Agent Harness post three, (b) a standalone post that links back, or (c) standalone with no link to the framework. See Open questions.
- **Arc:** **Build log** (pattern 4), with the **before and after** turning point from Single insight (pattern 5) borrowed for the 900 → 120 moment. Reasoning: what you have is implementation specifics (line counts, six skills, one client repo) plus a shortfall you're upfront about (triggering). Build log is the pattern built for "here's what I did, concretely, and here's what isn't right yet". It's also the pattern your series follow-ups already use.
- **Alternatives considered:**
  - **Three attempts** (pattern 1): 900-line CLAUDE.md → *[some intermediate fix: reordering, bolding, "IMPORTANT", splitting into per-directory CLAUDE.md?]* → skills. This is the strongest arc **if** there was a middle attempt, because the wrong turns are the content. Your notes don't mention one, so it's not recommended unless you tell me there was. If there was, switch to this.
  - **Single insight** (pattern 5): default (everything in CLAUDE.md) → problem (bottom rules ignored) → small change (move workflows into skills) → before/after → when to use or skip → one line. A tighter post of 500–700 words. Recommend this instead if you'd rather ship a short opinion piece now and keep the specifics for a later post.

## Story flow

Recommended arc: Build log + before/after.

| # | Beat | What it does for the reader | Evidence it needs | Have it? |
|---|---|---|---|---|
| 1 | **The habit.** Every time the agent got something wrong on this client repo, the fix was another rule in CLAUDE.md. | Recognition: "that's me." Sets up the one-liner by showing the opposite of it. | What kinds of things went in, and over roughly what period it grew. | Partly. "~900 lines, one client repo" yes. Timeline and contents: author to supply |
| 2 | **The symptom.** The agent started ignoring rules near the bottom. | Makes the cost concrete. This is the hook beat. | **One specific rule** that was ignored, what the agent did instead, and roughly where it sat in the file. | Author to supply |
| 3 | **The diagnosis, held loosely.** Why you think position or length was the cause and not, say, a vague or conflicting rule. | Credibility. It stops the reader filing this under "you just wrote bad rules" (see `writing-agent-guidelines-that-actually-work`). | How you knew it was the bottom of the file: did moving a rule up make it stick? Did the same rule work in a short file? | Author to supply. **This is the claim the post rests on** |
| 4 | **The sort.** The rule you used to decide what stays and what moves: always true vs. needed for a particular workflow. | The transferable part. This is what readers will copy. | Your actual sorting rule, in your words, and two or three examples of each pile. | Author to supply |
| 5 | **Before and after** *(turning point)*. 900 lines → about 120, plus six skills. What the 120 lines are now. | The reader *sees* how small the always-on part really is. | What's left in the 120 lines (by category is fine). The six skill names or descriptions, anonymised for the client. | Numbers yes. Contents: author to supply |
| 6 | **How it runs day to day.** What changed in practice after the move. Do bottom-of-file-type rules stick now? | Proof it holds, or the honest admission that it only partly holds. | Any before/after observation: fewer corrections, rules now followed, anything at all. | Author to supply |
| 7 | **The trade** *(turning point)*. An ignored rule became a skill that might not load. | The model updates: on-demand context moves the failure, it doesn't remove it. Emphasis line returns here (B as the turn). | What makes you unsure skills trigger. Any time one didn't when it should have, or you can't tell whether it did. | Partly ("still not sure skills trigger reliably"). Specific instance: author to supply |
| 8 | **What's not right yet.** Triggering reliability, and anything else unsettled. | Honesty beat. Keeps the post credible and leaves the door open. | What you've tried so far to make triggering reliable, if anything. | Author to supply |
| 9 | **Prior art and where it fits.** Link back to the Constitution idea (concise root file) and to `three-dimensions-of-agent-context` ("what they should load"). | Shows this is field evidence for an idea you've already argued, not a new manifesto. | Decision on series fit. Any outside prior art you found. | Links yes. Decision: author to supply |
| 10 | **Close.** The one-liner, plus the open question handed to the reader ("how do you know your skills fired?"). | Leaves the reader with the rule and an invitation. | — | Yes |

## Turning points and visual moments

- **Beat 2 / 3 (the cost becomes real):** the reader should *see a rule sitting deep in a very long file* and feel how little chance it has of being read. They should register "line 800 of 900" as a place, not just a number.
- **Beat 5 (the sort, before and after):** the reader should *see the 900 lines split into two piles*, a small "always" pile that stays (about 120) and a large "sometimes" pile that becomes six skills, and notice how much smaller the always-on part is than they'd assumed.
- **Beat 7 (the trade):** the reader should *see the failure move rather than vanish*. Before, it was always loaded but ignored at the bottom. After, it's read when loaded, but loading isn't guaranteed. These are two failure modes side by side, not a win-versus-loss chart.

## Emphasis plan

- **Opening:** end the opening section with the one-liner (A) as the lesson you only learned at 900 lines.
- **The turn (beat 7):** bring it back with B's twist. *"CLAUDE.md is for what's always true. The catch is that 'loaded when needed' depends on something noticing that it's needed."*
- **Close:** restate A plainly, then hand over the open question.

## Honesty beats

- **What isn't solved:** skill triggering reliability. This is the post's main honesty beat and should be planned as beat 7–8, not tacked on at the end.
- **What went wrong first:** the 900-line file itself. You built it, it grew by habit, and you didn't notice the decay until rules started being ignored. *Did you try a fix inside CLAUDE.md before moving things out? Author to supply.* If you did, that's a second honesty beat (and a reason to switch to the Three attempts arc).
- **The causation caveat:** you saw rules near the bottom being ignored. Whether position or length caused that is your reading of it, so say how confident you are (beat 3).
- **Sample size:** one client repo. Say so.
- **Prior art:** your own Constitution post already argued for a concise root file. Admit that you wrote the principle down before you followed it on this repo, *if that's true* (author to confirm). That's a strong beat if it holds.
- **What you'd do differently:** author to supply. For example, start with a small CLAUDE.md and a skill-first habit from day one?

## Opening hook options

1. Open on the ignored rule: the agent breaks a rule you know is in CLAUDE.md, you go to check, and it's on line ~800. *(Needs the specific rule, beat 2.)*
2. Open on the number: "The root CLAUDE.md on one of my client repos got to about 900 lines. It's about 120 now, and the agent follows it better." *(Only if "follows it better" is true; see beat 6.)*
3. Open on the habit: "Every time the agent got something wrong, I added a line to CLAUDE.md. That's how you get to 900 lines."

## Open questions

1. **Which one-liner:** A, B, C or your own?
2. **One post or series:** I recommend one post now, with "do skills trigger reliably?" as a candidate part two once you have evidence. Agree?
3. **Series fit:** is this Agent Harness post three, a standalone post linking back to the Constitution, or fully standalone? (Post two promised that post three would cover tags or global memory, so making this "post three" would break that promise.)
4. **Was there a middle attempt?** Before moving things into skills, did you try reordering, emphasis, or per-directory CLAUDE.md files (the "Legislation" tier)? If yes, the arc should be Three attempts. If you deliberately chose skills *over* nested CLAUDE.md files, why? Readers of the framework posts will ask.
5. **How do you know it was position and not the rules themselves?** This is the claim the post rests on.
6. **Did the move actually fix the ignored rules?** The post needs at least an honest "seems to" or "not sure yet".
7. **What makes you unsure skills trigger?** Is there a specific miss, or is it that you can't observe whether they fired?
8. **Client confidentiality:** what can you show of the CLAUDE.md contents and the six skills? Names, categories, nothing at all?
9. **One repo only?** If you've seen the same decay on other repos, the post can make a stronger claim (point C).

## Evidence still needed

- One concrete ignored rule: what it said, roughly where it sat, what the agent did instead.
- Your basis for blaming position or length.
- Your sorting rule (what stays vs. what moves), with two or three examples per pile.
- What's in the remaining ~120 lines, by category.
- The six skills: names or anonymised one-line descriptions.
- Any after-migration observation (rules followed now? fewer corrections?).
- Any specific instance or symptom behind "not sure skills trigger reliably".
- Rough timeline: how long the file took to reach 900 lines, and how long you've run with skills since.
