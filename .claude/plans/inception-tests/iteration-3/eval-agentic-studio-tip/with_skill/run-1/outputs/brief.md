# Brief: Agentic Studio: renaming a flow loses its brand kit

Status: **Draft**. The wording of the point isn't chosen yet, so this can't lock.

Working slug: `agentic-studio-flow-rename-drops-brand-kit`

## The raw material, as given

> "found that Agentic Studio flows lose the brand kit context if you rename the flow after creating it"

That's all of it. Everything below is built on that one sentence. Anything beyond it is marked
**to confirm** or **author to supply**.

## The point

> **Leading candidate (A):** If you rename a flow in Agentic Studio after creating it, check its brand kit, because the rename can drop it.

**Candidates considered:**

| # | Wording | What it covers | What it leaves out |
|---|---|---|---|
| A | "Rename a flow after creating it and it can lose its brand kit, so check it after every rename." | One trigger (rename), one setting (brand kit), one check. A pure tip, like the debug pane and export posts. | The question of why. Any other edits that might do the same. |
| B | "Name the flow before you create it, because renaming afterwards loses the brand kit." | Prevention: get the name right up front. | Flows that already exist and need renaming. It also assumes renaming at creation time is safe, which is **to confirm**. |
| C | "Brand kits are meant to be set once and used everywhere, but a flow rename quietly breaks that." | The broken promise. It ties back to my Feb post, which said "every agent, every flow ... automatically picks up those constraints". | Turns the tip into a correction of an earlier claim. Bigger post, needs more evidence. "Quietly" is my guess, not yours (see open questions). |

A is the honest default for what you have now. C is the stronger story, but only if the evidence
holds up and you're happy to correct the Feb post in public.

**Beat check:** not run yet. It runs once you pick the wording. As drafted, beat 5 (the Feb post
callback) belongs to C, and it gets dropped or cut down to one line if you pick A or B.

## Title options

1. Agentic Studio: Renaming a Flow Drops Its Brand Kit
2. Agentic Studio: Name Your Flow Before You Save It
3. Agentic Studio: Check the Brand Kit After You Rename a Flow

(Option 1 matches the "Agentic Studio: <quirk>" pattern of the existing tip posts.)

## Reader

- **Who:** A practitioner building or maintaining flows in Agentic Studio, the same reader as the debug pane, export and widgets tips.
- **Believes now:** The brand kit is ambient. Once it's set, every flow gets it, and a rename is a harmless cosmetic edit.
- **Should leave with:** A rename isn't cosmetic. After renaming a flow, they check the brand kit (or name the flow right the first time).

## Tension

A rename is about the most harmless edit there is, so nobody re-checks anything afterwards. The
whole value of a brand kit is that you don't have to think about it. Put those together and the
flow can run without brand context and nobody notices. **To confirm:** whether it's actually
unnoticeable. It depends on how you found out (see open questions).

## Shape

- **Type:** tip
- **Rough size:** about 250–400 words, in line with `agentic-studio-agent-export-is-lossy` and `agentic-studio-debug-pane-browser-caching`. One trigger and one consequence is a tip. It grows only if you have more (other edits that trigger it, a confirmed cause, a support response).
- **Arc:** Tip (pattern 6). Hook, the quirk, the trap, the rule in one line, an imperative close. A single thing a practitioner should know before they hit it.
- **Alternatives considered:**
  - **Single insight (pattern 5)** with a before/after: brand kit set, rename, brand kit gone (or output off-brand). Worth it only if you can show two outputs side by side. Beats:
    1. Default: brand kit attached to a new flow.
    2. The small change: rename it.
    3. **Before and after**: settings or output, side by side.
    4. Evidence: repro steps, how many times.
    5. When it bites, and the one-line rule.
  - **Tip with a callback**, which goes with candidate C. Same tip arc, plus one beat that admits the Feb lifecycle post said brand kits apply "automatically" to "every flow" and that this is an exception. Beats:
    1. Hook: the "set it once, use it everywhere" promise.
    2. The quirk: renaming breaks it.
    3. **The callback**: "I said every flow picks it up. Not after a rename."
    4. The rule.
    5. Close.

  Recommended: plain Tip, because the evidence is one observation. Add the callback beat (as one
  line) if you're fine pointing back at the Feb post. It's a cheap, credible honesty beat.

## Story flow (recommended: Tip)

| # | Beat | What it does for the reader | Evidence it needs | Have it? |
|---|---|---|---|---|
| 1 | Hook: a short one, in the style of the other tips ("A small one if you build flows in Agentic Studio.") | Tells them it's quick and it's for them | None | yes |
| 2 | The quirk: create a flow with a brand kit, rename it, and the brand kit context is gone | States the finding exactly as observed | Exact repro steps: where the rename happens, where the brand kit is set, what "lose" looked like | **author to supply** |
| 3 | The trap: why you won't notice. A rename feels cosmetic, and the brand kit is supposed to be ambient | Makes the cost real | How you discovered it (off-brand output? an empty setting?). Whether the UI gives any sign | **author to supply** |
| 4 | The rule in one line: the point, in the chosen wording | The thing they take away | Whether the fix is "re-select the brand kit" or "name it before creating", and that it works | **author to supply** |
| 5 | (Optional, for C) Callback: "In February I wrote that every flow picks up brand constraints automatically. Mostly true. Not after a rename." | Honesty beat. Turns a known claim into a corrected one | Link to the lifecycle post. Your OK to correct it | yes (post exists) / author to decide |
| 6 | What's not known yet: the cause, whether other edits do it, support ticket status | Keeps the post honest and lets you update it later | Whatever you've tested or logged | **author to supply** |
| 7 | Imperative close: "Rename, then check the brand kit." | Final repeat of the point | None | yes |

## Turning points and visual moments

- **Beat 2/3:** the reader should *see* the brand kit present before the rename and missing after. Two states of the same flow. That's the one visual moment a tip this size has, and only if you have the before/after (screenshots or two outputs). If you don't, it's text only.

## Emphasis plan

- **Opening:** the trigger (rename) and the consequence (brand kit lost) in the first two sentences.
- **Turn:** beat 4 states the rule as the pull quote (the debug pane post uses a `>` pull quote the same way).
- **Close:** the imperative repeats the rule.

## Honesty beats

- **What isn't known:** the mechanism. Don't claim it fails silently, unlinks, or anything else. You said "lose", and that's all the post can say until you've pinned it down.
- **Scope:** which flows (custom only? the out-of-the-box ones like ABM Campaign?), and whether it's always reproducible. **To confirm.**
- **Prior claim:** the Feb lifecycle post says brand kits apply automatically to every flow. This finding is a caveat to that. Name it, or knowingly leave it out.
- **Support ticket:** the export post set the pattern of "ticket logged, will update". Is there one here?

## Opening hook options

1. "A small one if you build flows in Agentic Studio: be careful renaming them."
2. "Renaming a flow feels like the safest edit you can make. In Agentic Studio it can cost you your brand kit."
3. (C) "Brand kits are meant to be set once and forgotten. Rename a flow and they get forgotten for you." (Only use this if "forgotten" matches what you saw.)

## Open questions

- **"Flows":** do you mean flows (chained agents, like ABM Campaign) or a custom agent's workflow in the workflow editor? The docs and your Feb post use both terms.
- **"Lose":** what did you actually see? The brand kit selector showing empty or default after the rename? Output that came out off-brand? Something in the debug pane? Each one gives a different trap beat.
- **"Brand kit context":** is this a brand kit chosen per flow, or the tenant-level Brand Knowledge that's meant to be ambient? If it's the tenant-level one, the post is bigger: a rename breaking something global.
- **"Rename":** where? The flow's name field in its settings, a rename action in a list, or in some other way? Does renaming during creation (before the first save) also do it?
- **"After creating it":** does it matter how long after (before or after the first run)?
- **Reproducible?** How many times, and on which flows? Is it the same in a second tenant?
- **Fix:** does re-selecting the brand kit after the rename restore it, and does it stay?
- **Is any UI sign shown?** If there is a visible sign, the trap is weaker. If there isn't, "it fails silently" would be fair, but only once you've confirmed it.
- **Other edits:** have you tried duplicating, exporting/importing, or editing other fields? (Don't widen the post unless you've tested them.)
- **Support:** has a ticket been logged? Do you want the "will update" pattern?
- **The Feb post:** point back to it and correct it, or not?

## Evidence still needed

- Exact repro steps (create, attach brand kit, rename, observe).
- What "lose" looked like, as you observed it: a screenshot of the setting before and after, or two outputs.
- How many times reproduced, and on which flow(s).
- Whether the workaround works.
- A doc link for brand kits on flows (the References section in the other tips links to doc.sitecore.com).
