# Brief: CLAUDE.md to skills (working slug: `claude-md-to-skills`)

Status: **Draft** <!-- becomes: **Locked** YYYY-MM-DD, only on the author's word -->

## The point

Three candidates. Pick one or rewrite it. The recommended one is first.

1. **(Recommended)** "Moving workflows out of CLAUDE.md into skills fixed the rules that were being ignored, but it swapped 'ignored' for 'maybe never loaded', and that second failure is quieter."
   This one keeps the doubt about triggering inside the point instead of tacking it on at the end. Before using it, confirm that the move did fix the ignoring (see open questions). Your notes don't say that yet.
2. "CLAUDE.md is for what the agent must always know. A skill is for what it needs only while doing one job."
   A clean rule of thumb. The risk is that it reads as advice, not experience, and it overlaps with the Constitution tier in the Legal Framework post.
3. "A 900-line CLAUDE.md doesn't fail loudly. The rules at the bottom just stop counting."
   A strong hook, but it only covers the problem half. It would suit a tip-sized post that stops before the skills.

## Title options

1. "I stopped putting everything in CLAUDE.md"
2. "From 900 lines to 120: moving CLAUDE.md into skills"
3. "CLAUDE.md vs skills: what belongs where, and what I still don't trust"

## Reader

- **Who:** Developers using Claude Code (or a similar harness) on real client repos, whose root instruction file has grown as the project grew.
- **Believes now:** When the agent gets something wrong, the fix is to add another rule to CLAUDE.md. Everything in that file gets the same attention.
- **Should leave with:** A way to decide what stays in the root file and what moves into a skill. They should also know that skills bring their own failure mode, so they should check that a skill actually loaded, not assume it did.

## Tension

The file kept growing because adding a rule felt like fixing the problem. At about 900 lines the agent started ignoring rules near the bottom, so the fix itself was causing failures. Moving workflows into skills shrank the file to about 120 lines, but now the open question is whether those skills fire when they should. A rule that is ignored at least sits where you can see it. A skill that never triggers fails with nothing to show for it. *(That last sentence is my framing, not your claim. **To confirm** whether it matches what you've seen.)*

## Shape

- **Type:** a single long-ish essay. One post, not a series (see below).
- **Rough size:** about 1,000–1,500 words if the before/after specifics and one skill-triggering example exist. Closer to 600–800 if they don't.
- **Arc:** Build log (`implementing-the-legal-framework`). The material is concrete: 900 → 120 lines, 6 skills, one client repo, and a problem you openly haven't solved. That's what the build log is made for. The "what's not right yet" beat is where the triggering doubt goes.
- **Alternatives considered:**
  - **Three attempts.** Better than the build log *if* you tried other fixes first (reordering, bold or caps, splitting into per-directory CLAUDE.md files) before reaching for skills. Your notes don't mention any, so it depends on wrong turns only you can supply.
  - **Single insight.** One behaviour (a long root file loses its tail), one change (move workflows to skills), before and after. Shorter and tighter, but it has no natural place for the honest "not sure skills trigger reliably" part beyond a closing caveat.

### One post or a series?

**One post.** A series only works when every part stands on its own and answers one question. Right now there's one question with evidence behind it ("what happened when I moved workflows out of CLAUDE.md?"). There's a second question with no evidence yet ("do skills trigger reliably?"). The second one could become a follow-up post *once you've gathered something*: which skills missed, how often, and what you changed in their descriptions. Seed it in this post's close as an open thread. Don't promise a part two.

It might also fit the **Agent Harness** series. The Legal Framework post says the root CLAUDE.md (the Constitution) should be "a concise set of points", and gives Karpathy's ~60 lines as the example. This post is field evidence for that, from a client repo. See open questions.

## Story flow (recommended: Build log)

| # | Beat | What it does for the reader | Evidence it needs | Have it? |
|---|---|---|---|---|
| 1 | The file that kept growing: one client repo, root CLAUDE.md at ~900 lines | Recognition: "mine looks like that" | Line count (have). What filled it (author to supply). How long it took to grow (author to supply) | partly |
| 2 | How it broke: the agent started ignoring rules near the bottom | Makes the cost concrete, not theoretical | One or two specific rules that were ignored, and how you noticed (author to supply). Whether position was the cause or just correlated (**to confirm**) | author to supply |
| 3 | **The decision: workflows move out, the root file keeps only what's always true** (turning point) | The reader gets the sorting rule, not just the result | Your actual test for "stays" vs "moves" (author to supply). Whether anything went somewhere other than skills, e.g. per-directory CLAUDE.md or deleted (author to supply) | author to supply |
| 4 | The result, concretely: 6 skills, root file at ~120 lines | Proof of scale. Lets the reader picture the end state | Counts (have). The names or roles of the 6 skills, anonymised for the client (author to supply). Where the other ~780 lines went (author to supply) | partly |
| 5 | How it runs day to day: did the ignored rules start being followed? | Shows whether the change worked, not just whether it happened | What you observed after the move (author to supply; your notes don't say yet) | author to supply |
| 6 | What's not right yet: you're not sure skills trigger reliably | The honesty beat and the second half of the point: the failure mode moved, it didn't disappear | What you've actually seen. A missed trigger? A suspicion? How you'd tell (author to supply) | author to supply |
| 7 | Prior art / link back | Ties it to your own model (Constitution tier) and anything you've read on this | Links to the Legal Framework posts (have). Any outside sources (author to supply) | partly |
| 8 | Close: the one-liner, plus the open thread on triggering | The reader leaves with the rule and a check to run | none | yes |

### Alternative A: Three attempts (only if the wrong turns exist)

1. The root file grows, and adding rules seems reasonable: recognition.
2. It breaks: bottom rules ignored. Needs the specific example.
3. Overcorrection or first fix (author to supply: reorder? emphasise? split by directory?). Shows why the obvious fixes fall short.
4. **The realisation:** this isn't a wording problem, it's a loading problem (turning point). Needs whatever made it click for you.
5. Skills: 6 workflows out, 120 lines left. Counts.
6. The new risk: triggering. Honesty beat.

### Alternative B: Single insight

1. Default behaviour: everything goes into CLAUDE.md.
2. The problem in practice: tail rules ignored at ~900 lines.
3. The small change: workflows into skills.
4. **Before and after side by side:** 900 vs 120, and one rule's fate in each (turning point). Needs one concrete rule.
5. When it doesn't work: the triggering caveat.
6. The one-liner.

## Turning points and visual moments

- **Beat 2:** the reader should *feel how long the file is* and see that the rules at the bottom sit far from where the agent's attention lands. They should sense the scale of 900 lines before being told what went wrong.
- **Beat 3/4:** the reader should *see the 900 lines sort into two piles*: a small root file and six labelled skills. The before-and-after shrink is the moment the model changes.
- **Beat 6:** the reader should *see the failure move*. Before, a rule was visibly present but ignored. After, a skill may not be loaded at all, and nothing shows it. Same kind of risk, harder to see.

## Emphasis plan

- **Opening:** state the problem half of the one-liner (the file grew, the tail got ignored).
- **Turn (beat 3–4):** state the fix half (workflows into skills).
- **Beat 6 and close:** return to the full line, including "swapped ignored for maybe never loaded", so the reader leaves with both the fix and its cost.

## Honesty beats

- You're not sure skills trigger reliably. This is planned as a full beat (6), not a footnote.
- The file reached 900 lines before you acted. Say what kept you adding rules (author to supply). It's the most relatable part.
- Your own earlier post already recommends a concise root file. Admit that you wrote the principle and still let a client repo drift. **To confirm** whether that's true, or whether this repo came before that post.
- Anything that went wrong in the move: a workflow that didn't fit a skill, or something you moved back (author to supply).

## Opening hook options

1. Start on the number: a root CLAUDE.md at about 900 lines, and the moment you noticed the agent wasn't following something near the bottom.
2. Start on the habit: every time the agent got something wrong, you added a line. Then show where that habit led.

## Open questions

- **Did the move fix the ignoring?** Your notes say the file shrank, not that the rules started being followed. The whole point depends on this.
- **"Ignoring rules near the bottom": how did you observe it?** Which rules? Was it consistent? Did you check whether the same rules worked when moved higher, or are you inferring that position was the cause? Right now "position caused it" is my inference, **to confirm**.
- **"Cramming everything": what was in the 900 lines?** Workflows, conventions, client facts, commands? What share were workflows?
- **900 → 120: where did the other ~780 lines go?** All into the 6 skills? Some deleted as filler? Some into per-directory CLAUDE.md files?
- **What are the 6 skills?** Roles or names you can share without exposing the client.
- **"Not sure skills trigger reliably": what have you seen?** A specific miss, a near-miss, or just no way to check? Have you changed descriptions to improve it?
- **What's your rule for "stays in CLAUDE.md" vs "becomes a skill"?** That rule is probably the most reusable thing in the post.
- **Series placement:** standalone, or Agent Harness part three? Post two promised part three would cover tags or Hindsight, so this might need its own slot or a note.
- **Client confidentiality:** how much about the repo can you say (stack, team size, how long it ran)?

## Evidence still needed

- One or two concrete rules that were ignored, and how you noticed.
- What happened to those rules' behaviour after the move.
- The list or roles of the 6 skills (anonymised).
- A breakdown of where the ~780 lines went.
- Any concrete skill-triggering observation (a miss, a fix, or a check you run).
- Optional: a short excerpt or outline of the 120-line root file, cleaned of client detail.
