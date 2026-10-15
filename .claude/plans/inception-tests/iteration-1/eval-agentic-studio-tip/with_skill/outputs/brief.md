# Brief: Agentic Studio: Renaming a Flow Drops Its Brand Kit

Status: **Draft**

Working slug: `agentic-studio-flow-rename-drops-brand-kit`

## The point

> Renaming an Agentic Studio flow quietly drops its brand kit, so check the brand kit again after every rename.

Candidate one-liners (Matt to pick or rewrite):

1. **Renaming an Agentic Studio flow quietly drops its brand kit, so check the brand kit again after every rename.** (recommended: it names the trigger, the symptom and the rule in one go)
2. "Set it once, use it everywhere" has an exception: rename a flow and you have un-set its brand.
3. A flow's name isn't just a label. Change it and the brand context attached to the flow goes with it.
   *(Only usable if Matt can say the rename is what breaks the link. Today we only know the two things happen together. See open questions.)*

## Title options

1. Agentic Studio: Renaming a Flow Drops Its Brand Kit
2. Agentic Studio: Rename a Flow, Lose Your Brand
3. Agentic Studio: Check the Brand Kit After You Rename a Flow

(Option 1 matches the house pattern used by "Agent Export Drops These Fields" and "Widgets Do Not Export".)

## Reader

- **Who:** A practitioner building or tidying up flows in Agentic Studio who has already set up Brand Knowledge / Brand Kits.
- **Believes now:** Once a brand kit is set it applies everywhere automatically. That's the platform's pitch, and this blog said so in February ("every agent, every flow, every brief generation automatically picks up those constraints").
- **Should leave with:** A rename is not a harmless cosmetic edit. After renaming a flow they check its brand kit, and re-apply it if needed, before running it again.

## Tension

The failure is silent. Brand context is sold as set-once, ambient and persistent, so nobody thinks to check it. Renaming is about the most harmless edit there is, usually done while tidying up just before handing a flow to someone else or promoting it. The flow keeps running and nothing warns you. The output just stops sounding like the brand, and the person who notices is usually a reviewer, not the builder.
*(How visible the loss is in practice, whether it's off-brand output or an empty setting in the UI, is **author to supply**.)*

## Shape

- **Type:** tip
- **Rough size:** Short, roughly the size of the export-is-lossy and debug-pane posts (about 250 to 450 words). The evidence is one behaviour and one rule. If Matt has a clean before/after of the output, it can grow slightly but should stay a tip.
- **Arc:** Tip (pattern 6). Hook → the quirk → the trap → the rule in one line → imperative close. This is the closest match to "a single thing a practitioner should know before they hit it", and it matches the sibling posts in the Agentic Studio quirk family.
- **Alternatives considered:**
  - **Single insight (pattern 5):** built around a side-by-side of the same flow's output before and after the rename. Stronger if Matt has two outputs that visibly differ, but it needs evidence we don't have yet, and it would push the post towards a short essay. Revisit if the before/after exists and is striking.
  - **Tip with a self-correction lead-in (Tip + an honesty beat from Build log):** open on the February "set it once, use it everywhere" claim from the AI Project Lifecycle post, then show where it doesn't hold. More engaging and very on-brand for the blog's honesty. The risk is spending too much of a short post on the old post. Folded into the recommended arc as one beat (beat 2) rather than used as the whole frame. Matt to choose how prominent it is.

## Story flow

| # | Beat | What it does for the reader | Evidence it needs | Have it? |
|---|---|---|---|---|
| 1 | Hook: "Another quick one…". You've set up your brand kit, built a flow, and given it a better name. | Puts the reader in a situation they've been in or soon will be. | None beyond the setup. | yes |
| 2 | The expectation: brand context is meant to be set once and picked up everywhere. Sitecore positions it that way, and this blog said so in February. | Sets up the belief the quirk breaks. Doubles as an early honesty beat. | Link to the AI Project Lifecycle post. Optionally a Sitecore doc page describing brand kits applying to flows. | partly: blog post yes; doc reference author to supply |
| 3 | The quirk: create a flow with a brand kit, rename it, and the brand kit context is gone. | The fact itself, stated plainly. | Exact repro steps: where the brand kit is set (flow settings? at creation?), where the rename happens, what "gone" looks like (empty field, default kit, or unbranded output). | author to supply |
| 4 | **The trap (turning point):** nothing warns you. The flow still runs, and the output just isn't on-brand. | The cost becomes real: they wouldn't have caught this themselves. | What Matt actually saw, e.g. how he noticed, and ideally a before/after of the setting or the output. | author to supply |
| 5 | Scope and what isn't known: is it every rename or only after the first run, does it affect agents too, is it the rename itself or a save/refresh, has it been reported? | Honesty. Stops readers over- or under-generalising. | Whatever Matt has tested, plus support ticket status. | author to supply |
| 6 | The rule in one line: after renaming a flow, check its brand kit and re-apply it before you run it. Or better, name the flow before you attach the brand kit. | The takeaway; the emphasis line returns. | Confirmation that re-selecting the brand kit actually fixes it (and/or that naming first avoids it). | author to supply |
| 7 | Imperative close, tied to the family: like export drops and widgets, things in Agentic Studio can go missing quietly, so check what's attached, not just what's named. | Links it to the series of quirk posts without becoming an essay. | Links to the export-is-lossy and widgets posts. | yes |

## Turning points and visual moments

- **Beat 4:** the reader should *see the brand kit there, then not there*, with the only change in between being the name. If Matt has screenshots of the flow's brand kit setting before and after the rename (or two outputs side by side), this is the one visual the post needs. If there's nothing to show, a plain repro list is fine. It's a tip.
- **Beat 6:** the reader should come away with *one action they'll actually do*: check after renaming (or name first). This is a pull-quote moment like the debug-pane post's "The visible pane is the only proof…" line, not a diagram.

## Emphasis plan

- **Opening (beat 1/3):** state the quirk in one sentence close to the one-liner.
- **Turn (beat 4):** "silently" / "nothing warns you", the reason the one-liner matters.
- **Close (beat 6/7):** the rule, worded as the one-liner's imperative half ("check the brand kit again after every rename").

## Honesty beats

- **What this blog got wrong first:** the February AI Project Lifecycle post said every flow automatically picks up brand constraints and "you never re-explain your brand". This finding is a real exception to that. Own it briefly. Matt to decide whether that post also gets an update note linking here.
- **What isn't known:** why it happens (rename vs. save vs. some reference keyed on the name). Don't guess at a mechanism in the post. "I have not worked out why yet" fits the house style.
- **Whether it's been reported / whether it's a bug or by design:** support ticket status, if any.
- **Possibly a moving target:** Agentic Studio changes week to week (the export post found July and August results disagreeing). Date the finding and say it was observed on that date.

## Opening hook options

1. "Another quick one from Agentic Studio. If you rename a flow after creating it, it forgets its brand kit."
2. "Back in February I wrote that brand kits in Agentic Studio are set once and picked up by every flow. That's mostly true. Here's the exception I hit this week."

## Open questions

1. **What exactly is "lost"?** Is the brand kit field empty/reset in the flow's settings, does it fall back to a default kit, or does the setting look intact while the output ignores it? This decides the whole trap beat.
2. **How did you notice?** Off-brand output, the UI, a reviewer, the debug pane? That's the most natural hook.
3. **Where is the rename done**, and where is the brand kit attached: at creation, in flow settings, or per agent within the flow?
4. **Is it a "flow" in the Sitecore sense** (chained agents, like the ABM Campaign flow) or a workflow agent built in the workflow editor? The post needs the platform's exact term.
5. **Is it reproducible every time?** Have you repeated it on a fresh flow? Does it happen on the first rename only, or every rename?
6. **Does re-selecting the brand kit fix it, and does it stick?** Does naming the flow first and attaching the brand kit after avoid it? The rule in beat 6 depends on this.
7. **Does the same thing happen to agents** (renaming a standard agent) or only flows? If agents too, the post's scope widens.
8. **Have you logged a support ticket?** Matching the export post's "will update once I hear back" close.
9. **Do you want to call out the February post explicitly** (hook option 2), or keep it to a light link?
10. **Is this one post, or a sign of a bigger "things Agentic Studio drops silently" round-up?** My view: keep it a standalone tip for now. It fits next to the export and widgets posts, and a round-up can come later if more turn up.

## Evidence still needed

- Exact repro steps (create → attach brand kit → rename → observe), with the date observed.
- Screenshot(s) of the brand kit setting before and after the rename, or a before/after of generated output.
- Confirmation of the workaround (re-select, or name first).
- Sitecore documentation page(s) for brand kits on flows and for renaming/editing flows, to check whether the docs say anything about this. Could be checked via the Sitecore Documentation MCP during write-up.
- Support ticket reference/status, if one exists.
