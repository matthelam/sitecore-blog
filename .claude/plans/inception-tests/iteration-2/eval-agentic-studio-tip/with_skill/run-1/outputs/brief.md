# Brief: agentic-studio-flow-rename-brand-kit

Status: **Draft**

Working slug: `agentic-studio-flow-rename-brand-kit` (would be saved as `.claude/briefs/agentic-studio-flow-rename-brand-kit.md`)

## The point

Three candidates. Matt picks or rewrites:

1. **"Name the flow before you build it. Renaming one afterwards loses its brand kit context."** (the rule, as a tip)
2. **"In Agentic Studio a flow's name isn't just a label, and renaming it costs you the brand kit."** (the surprise)
3. **"After you rename a flow, check its brand kit before you trust what it produces."** (the habit, which only works if re-checking is enough to fix it. **To confirm**)

Recommended: **1**, provided the fix is "name it first" (see open questions). If re-attaching the brand kit after a rename fixes it, then 3 is the more useful and more honest line.

> Name the flow before you build it. Renaming one afterwards loses its brand kit context.

## Title options

1. Agentic Studio: Renaming a Flow Loses Its Brand Kit
2. Agentic Studio: Name Your Flow Before You Build It
3. Agentic Studio: Flow Renames Drop the Brand Kit

(Same `Agentic Studio: <quirk>` pattern as the existing tip posts.)

## Reader

- **Who:** A practitioner building or tidying up flows in Agentic Studio, quite likely renaming a flow from a placeholder name to a proper one once it works.
- **Believes now:** Renaming is cosmetic. The brand kit, once set, carries through to every agent and flow (the lifecycle post says pretty much exactly this: "every agent, every flow… automatically picks up those constraints").
- **Should leave with:** Renaming a flow is not cosmetic. Either name it right up front, or check the brand kit context after a rename.

## Tension

The brand kit is the part of SitecoreAI that is meant to make everything on-brand without you thinking about it. A rename is the most harmless edit there is. If a harmless edit quietly removes the on-brand guarantee, the flow may keep running and producing output that looks fine but isn't constrained by the brand any more. **Whether it is quiet or visible is to confirm.** Matt said the context is "lost", not how he found out.

## Shape

- **Type:** tip
- **Rough size:** short. About the size of the debug-pane and export-is-lossy posts (roughly 150 to 350 words). The evidence so far is one observation, so it is a tip unless repro detail turns up a second point.
- **Arc:** **Tip** (pattern 6). One thing a practitioner should know before they hit it. It fits the existing run of Agentic Studio tips.
- **Alternatives considered:**
  - **Single insight** (pattern 5), built around a before/after comparison of output from the same flow with and without the brand kit. Stronger if Matt has a side-by-side, weaker if he doesn't, because the before/after is the whole post. Keep it as the upgrade path if the evidence exists.
  - **"What doesn't survive" roundup**, a short essay grouping this with the export dropping Agent Type and Tags and with widgets that don't export: Agentic Studio has several ways metadata goes missing when you move or edit things. It has more reach, but it's a different post. It turns one finding into an argument the author hasn't made yet, so it's not recommended for now. It could be a later post that links back to this one.

### Story flow (recommended: Tip)

| # | Beat | What it does for the reader | Evidence it needs | Have it? |
|---|---|---|---|---|
| 1 | Hook: the everyday move. You build a flow, it works, you give it a proper name. | Puts the reader in a moment they've already had | None beyond the scenario | yes |
| 2 | The quirk: after the rename, the flow no longer has the brand kit context. | States the finding plainly, as Matt observed it | What "loses" means exactly: kit unset in the flow settings? output off-brand? a different kit picked? | author to supply |
| 3 | How it showed up: the moment Matt noticed. | Grounds the claim, tells the reader what to look for | How it was observed, and whether it reproduces | author to supply |
| 4 | The trap: why you won't notice. **Only if confirmed** (e.g. no warning, flow still runs). | Turns a quirk into a cost | Whether the flow warns, errors, or runs normally afterwards | to confirm |
| 5 | The rule in one line (the emphasis line). | What to carry away | None | yes |
| 6 | Honesty beat: what isn't known yet (does re-attaching fix it, other renames, ticket logged?) | Credibility, in the style of "I have not managed to separate those two yet" | Matt's answers on scope and the workaround | author to supply |
| 7 | Imperative close: "Name it first. Then build it." or "Rename it. Then check the brand kit." | Gives a habit to take away | Depends on which workaround is real | partly |

### Alternative A: Single insight (beats)

1. Default behaviour: brand kit applies to flows automatically (evidence: docs / lifecycle post, **have it**).
2. The problem: a rename drops it (**author to supply**: what drops and how seen).
3. The small change: name first, or re-check after a rename.
4. **Before and after, side by side**: same flow, same input, output with and without the brand kit (**author to supply**, essential).
5. When it matters / when to skip it (e.g. flows without a brand kit aren't affected).
6. The insight in a line.

### Alternative B: "What doesn't survive" roundup (beats)

1. Agentic Studio's convenience features assume things stay put.
2. Export drops Agent Type and Tags (existing post, **have it**).
3. Widgets don't export (existing post, **have it**).
4. Renaming a flow drops the brand kit (this finding, **author to supply**).
5. **The pattern across all three** (turning point; needs Matt's view on whether there *is* a common pattern, **author to supply**).
6. A checklist habit before trusting a moved or edited thing.

## Turning points and visual moments

- **Beat 2 to 4 (Tip):** the reader should *see the same flow twice*, once before the rename with the brand kit attached and once after without it, and realise nothing else changed. If there is a settings screenshot or the output from each, this is where it goes. Building it is the write-up stage's call.
- **Beat 4 (Single insight alt):** the reader should *feel the brand drift*: same prompt, visibly different tone or content.

## Emphasis plan

- **Opening:** short version of the one-liner in the hook or straight after it.
- **Beat 5:** the rule in one line, as a pull quote (as in the debug-pane post).
- **Close:** imperative restatement ("Name it first. Then build it.").

## Honesty beats

- What isn't known yet: whether it's every flow or some, every rename or only some kinds, and whether it's been reported (**author to supply**).
- Whether re-attaching the brand kit fixes it. If yes, say so; that's the practical takeaway.
- If Matt's first assumption was something else (e.g. he blamed the prompt or the agent before tracing it to the rename), that wrong turn is worth one sentence.
- Prior art: check whether Sitecore docs mention renaming flows or brand kit binding (**to check**).

## Opening hook options

1. "You build a flow, it works, and you give it a proper name. That last step is the one that costs you."
2. "Short one. If you rename a flow in Agentic Studio after creating it, check its brand kit."

## Open questions

- **"Lose" — what exactly is lost?** Does the brand kit setting show as empty/unset on the flow, does a different (default?) kit get used, or does the setting look intact while the output stops following the brand? These are three different posts.
- **How did you notice?** Settings screen, off-brand output, debug pane, something else? That's beat 3.
- **"Brand kit context"**: is this the brand kit chosen on the flow itself, or the brand context passed to the agents inside it? (The flow-level vs agent-level distinction matters for the rule.)
- **Does it fail visibly?** Any warning or error, or does the flow just run? I've not assumed it's silent; it's marked to confirm.
- **"Rename"**: where? Flow settings, the list view, during export/import? Does renaming anything else (agents) do the same?
- **Reproducible?** Seen once or repeatedly; one tenant or more?
- **Workaround:** does re-selecting the brand kit after a rename fix it? This decides between candidate one-liners 1 and 3.
- **Is it custom flows only, or out-of-the-box flows too?** (e.g. the ABM Campaign flow)
- **Support ticket logged?** If yes, it's an "I'll update this post" honesty beat like the export post.
- **Standalone tip, or fold into a roundup later?** Recommendation: standalone now.

## Evidence still needed

- A plain description of the repro: create flow with brand kit → rename → what you see.
- Ideally a screenshot of the flow's brand kit setting before and after (or output before and after).
- Answer on whether re-attaching fixes it.
- Date/version context, given how fast Agentic Studio changes (the export post hit exactly this problem).
- Any relevant Sitecore doc link for the References section.
