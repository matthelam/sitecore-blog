---
name: blog-visuals
description: Decide, design and build diagrams, charts, screenshots and interactive visuals for Matt Lam's blog as built-in MDX components. Use when a post needs a visual or a screenshot: capturing one from a public page or a logged-in tool like the Sitecore Cloud Portal, redacting names, emails or tenant IDs from one before it is published, annotating or placing it. Also when the blog-rewrite-hybrid visual pass calls for one, or when creating or changing anything in components/design-system/ or css/design-system.css. Visuals carry only facts already in the post; the components hold no facts of their own.
---

# Blog Visuals — built-in components (option A)

Visuals on this blog are React components in the design system, `components/design-system/`:
atoms, molecules and organisms on one theme (`css/design-system.css`). Organisms are registered in
`components/MDXComponents.tsx` and used from a post's MDX with the post's own facts passed in as
props. The structure and its laws are in `components/CLAUDE.md`. The author chose this over embedded HTML widgets (option B) on 2026-10-15. The full
conventions are in `references/architecture.md`; read it before writing or changing a component.

## Process

1. **Decide whether a visual earns its place.** A visual earns its place when it lets a cold
   reader see a mechanism they would otherwise assemble from prose: where data flows, what changes
   between two options, what state something moves through, how a number responds to a choice. If a
   sentence says it faster, write the sentence. If a three-column table says it, use the table.
2. **Pick the kind.**

   | The reader needs to…                                                              | Kind               | How                                                                         |
   | --------------------------------------------------------------------------------- | ------------------ | --------------------------------------------------------------------------- |
   | See a structure or flow at a glance                                               | **Static diagram** | Inline `<svg>` in the MDX, or an `.svg` under `/static/images/<post-slug>/` |
   | Compare quantities or see change over time                                        | **Chart**          | Load the `dataviz` skill and follow its procedure                           |
   | Move through an ordered sequence one step at a time                               | **Step-through**   | `StepThrough` component                                                     |
   | Change an input and watch the outcome change                                      | **Explorable**     | Reuse a component, or propose a new one                                     |
   | Recognise a real screen they will meet: where a setting lives, what a column says | **Screenshot**     | Capture, redact, privacy-check and place: `references/screenshots.md`       |

   A screenshot shows the real product UI a reader will meet; a diagram explains a mechanism. If
   the reader needs to find the thing, show it; if they need to understand how it works, draw it.

   Interactive is the exception, not the default. Use it only when the reader learns something by
   acting that they wouldn't learn by looking.

3. **Load the craft skills when they're available.** `artifact-diagramming` for diagrams (when a
   picture earns its place, labelled arrows, `currentColor`, one figure per claim). `dataviz` for
   charts (form first, colour last, run its palette validator, hover by default). Both ship with
   Claude Code. Where they say `prefers-color-scheme` or `data-theme`, apply the blog's `.dark`
   class instead (architecture.md).
4. **Reuse before you build.** Check the catalogue below, then the atoms and molecules. A new
   organism only when no existing one fits, built from existing atoms and molecules where possible.
   **Before building, show Matt a wireframe** (the cheapest form that conveys it: an ASCII sketch
   or a low-fidelity box diagram) and build only after he approves it.
5. **Pass facts as props.** Every number, label and description comes from the post, written in the
   MDX. A component never contains a fact, a default value that is a fact, or anything the post
   doesn't say.
6. **Wrap it in `<Figure caption="…">`.** The caption states what the visual shows, as a claim.
7. **Verify** with the checklist in architecture.md: Prettier, ESLint, `yarn build`, then `yarn dev`
   screenshots in light, dark and at 390px wide, before and after interacting, and look at them.

## Component catalogue

| Component          | Kind           | Props (all from the post)                                                                                          | First used                                                                                                                                                                    |
| ------------------ | -------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Figure`           | Wrapper        | `caption`, children                                                                                                | Every visual                                                                                                                                                                  |
| `MandateCheckout`  | Explorable     | `mandateId`, `ceilingAud`, `unitPriceAud`, `itemLabel`, `maxQuantity`                                              | `visual-components-trial` (draft), built for The Agent as Customer: cart total against an agent's spending mandate, showing the gateway's accepted or `over_mandate` response |
| `StepThrough`      | Step-through   | `label`, `steps: { node, detail, edge? }[]`                                                                        | `visual-components-trial` (draft), built for Legal Framework: the recall sequence at the point of ambiguity                                                                   |
| `LayerParallel`    | Static diagram | `label`, `columns: { heading, layers[] }[]`, `highlight`, `highlightLabel`                                         | `we-dont-build-the-website`: CMS world and agent world as parallel layer stacks, with the design surface marked                                                               |
| `SkillComposition` | Static diagram | `label`, `before`, `after` (each `{ title, note, agents: { name, core, items? }[], library? }`), `duplicateLegend` | `we-dont-build-the-website`: skills baked into each agent against shared skills loaded on demand; duplication is derived from the props                                       |
| `GatedFlow`        | Static diagram | `label`, `lanes: { label, steps: { label, gate?, detail? }[] }[]`                                                  | `we-dont-build-the-website`: Sitecore approval workflow beside the agent delivery engine's hooks; fluid columns, the shorter lane stretches to match                          |

Building blocks for new organisms (`components/design-system/`, see `components/CLAUDE.md`):

| Layer    | Component   | Use                                                                    |
| -------- | ----------- | ---------------------------------------------------------------------- |
| Atom     | `Surface`   | Every box. `tone`: plain, muted, emphasis, negative, advisory, inverse |
| Atom     | `Arrow`     | Every connector. `direction`: down, up, right; `stretch`; `dashed`     |
| Atom     | `Chip`      | A labelled item. `variant`: solid, inverse, dashed; optional `icon`    |
| Atom     | `Icon`      | pause, duplicate, check, cross (uses the text colour)                  |
| Atom     | `Eyebrow`   | Small uppercase label                                                  |
| Molecule | `FlowNode`  | A workflow step or gate                                                |
| Molecule | `AgentCard` | An agent, its core and its capabilities, duplicates marked             |

Add a row whenever a component is added. A component with no row doesn't exist as far as future
work is concerned.

## What this skill must never do

- Invent a number, label, result or behaviour the post doesn't state.
- Load a script from a CDN or embed an iframe (the site's CSP blocks both; see architecture.md).
- Use colour as the only signal of state.
- Add motion that runs without the reader acting, or ignore reduced-motion preferences.
- Replace an author's existing diagram in a published post without the author's approval.
- Commit an unredacted screenshot, or click anything that changes data or settings in a logged-in
  tool while capturing one.
