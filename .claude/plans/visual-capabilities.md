# Visual Capabilities — Plan & Scope (diagrams, images, animation)

Status: **DRAFT — research done, nothing installed.** Branch `claude/friendly-ritchie-ujxr94`.

## 1. Premise correction (verified)

The blog can already render any diagram, image or animation. What it lacks is a low-friction way to
*produce* them and a skill that *chooses* to use them.

- Verified: `next.config.js` uses `output: 'export'` only when the `EXPORT` env var is set. A
  default Vercel build is a normal Next build, so client React components (animation) run.
- Verified: `@svgr/webpack` is installed, so `.svg` files can be imported as React components.
- Verified: custom MDX components are registered in one place, `components/MDXComponents.tsx`
  (today: `Image`, `TOCInline`, `a`, `pre`, `table`, `BlogNewsletterForm`).
- Verified habit: across all posts there is 1 hand-authored inline `<svg>` (theme-aware via
  `currentColor`), 5 `<img>` SVGs under `/static/images/<slug>/`, and 0 Mermaid blocks.

## 2. Candidates reviewed

| Need | Candidate | Source | Verdict |
|---|---|---|---|
| Editorial diagrams | `cathrynlavery/diagram-design` v2.6 (MIT) | GitHub | **Primary pick.** Read SKILL.md §0–4: "highest-quality move is deletion", draws only if the reader learns more than from a paragraph, no shadows, 1–2 accent nodes, rejects Mermaid's auto-layout. Close to the author's own style. 45 types; HTML/SVG/PNG output; has `animation.md` (static by default). **Not yet read:** `references/style-guide.md`, `animation.md`, the export path. Open questions: does its SVG theme for dark mode, and can it emit a bare `.svg`/inline `<svg>` for MDX instead of a full HTML page? |
| Diagrams as code | Mermaid via `rehype-mermaid` v3 | npm | **Not as default.** It needs Playwright during the build and has a documented ordering conflict with `rehype-prism-plus` under Contentlayer, which is unmaintained. Its stock look also clashes with the hand-drawn house style. A client-side `<Mermaid>` component for quick sketches is the fallback if wanted. |
| Diagrams via renderer | "Diagrams" plugin (Kroki: PlantUML, Mermaid, D2, C4, GraphViz) | Anthropic Directory (community) | Optional. Sends diagram source to kroki.io, a third party. |
| Mermaid authoring | `mgranberry/mermaid-diagram-skill` | GitHub | Downloaded but not yet reviewed. Only relevant if Mermaid is adopted. |
| Data charts | `dataviz` skill | Already available | Use it for any chart of real numbers. |
| Theme-aware SVG guidance | `artifact-diagramming` skill | Already available | Its inline-SVG and two-theme rules carry over to MDX. |
| Images / diagrams in Figma | Figma MCP (`generate_diagram`, `generate_image`, `export_video`) | Connected this session | Optional. Produces Figma assets you then export into `/static/images/<slug>/`. |
| Image prompting | "image-generation" plugin | Anthropic Directory (community) | A prompting guide only. It does not generate images. |
| Animated SVG | "archgram" plugin | Anthropic Directory (community) | Draws animated SVG of *repository* architecture. Narrow fit. |
| Video animation | "animation-studio" plugin | Anthropic Directory (community) | Hand-drawn animated shorts as 1080p MP4. Suited to a hero or explainer clip, not inline figures. |
| Everything-generator | CellCog | Anthropic Directory (community, remote) | Not recommended. A remote third-party service, and post content leaves the repo. |
| In-post animation runtime | `motion` (Framer Motion) or Lottie | npm | Add only if a post needs component-level motion. CSS/SMIL animated SVG needs no new dependency. |

## 3. Proposed approach (for approval)

1. **Propensity (no dependencies).** Add a "visual-first" pass to the hybrid skill. For each section
   it chooses prose, table, diagram or animation, gated by diagram-design's test: *would the reader
   learn more from this than from a well-written paragraph?* Extend `voice-guide.md` with the
   author's diagram conventions: `currentColor`/Tailwind dark-mode support, detailed
   `alt`/`aria-label`, legend style (ENFORCED / ADVISORY / MIXED), `{/* prettier-ignore */}` above
   hand-tuned SVG, and assets saved under `/static/images/<slug>/`.
2. **Diagram production.** Install `diagram-design` as a project skill after the remaining
   references are reviewed. Customise its style-guide gate to the blog's tokens. Target output is a
   theme-aware `.svg` or inline `<svg>`, not a standalone HTML page.
3. **Animation (opt-in per post).** Default to CSS/SMIL animated SVG with `prefers-reduced-motion`
   respected. Add `motion` as a client MDX component only when a post needs it. Use video
   (animation-studio, Figma `export_video`) only for hero or explainer clips.
4. **Mermaid: deferred.** Revisit only if the author wants quick diagrams-as-code; a client-side
   component would avoid the build-time Playwright dependency.

## 4. Proposed test (same method as the rewrite bake-off)

Redraw one existing Legal Framework diagram (the recall sequence) two ways: (a) a static
diagram-design SVG and (b) an animated SVG version. Compare both side by side against the original
in an artifact, then decide before anything is installed.

---

## 5. Round 2 — interactive visuals (2026-10-15)

### What Claude's in-chat visuals are, and aren't

The official page ("Claude builds interactive visuals right in your conversation") describes them
as in-line and **temporary**: they "change or disappear as the conversation evolves", unlike
artifacts. It doesn't disclose the implementation. Not portable as a feature. What is portable: the
design method (skills below) and the output type (HTML/SVG/JS).

### Platform constraints (verified in this repo)

- `next.config.js` CSP: `frame-src giscus.app` blocks every other iframe, including same-origin.
  `script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app analytics.umami.is` blocks CDN
  libraries. Inline scripts are allowed. So libraries must come from npm; iframes need a CSP change.
- Dark mode is a `.dark` class (next-themes `attribute="class"`, Tailwind
  `@custom-variant dark`). Visuals must key off `.dark`, not `prefers-color-scheme`. An iframe
  can't see the parent's `.dark` class without a postMessage bridge.

### Skills reviewed (read in full unless noted)

| Skill | Source | Fit | Fold in as |
|---|---|---|---|
| `dataviz` | Anthropic, bundled with Claude Code | High | The chart procedure: form first, colour last, run the palette validator, hover layer by default, dark mode selected not flipped. Reference it, don't copy it. Adapt theming to `.dark`. References folder not yet read. |
| `artifact-diagramming` | Anthropic, bundled | High | The test for when a diagram earns its place, plus inline-SVG mechanics (`viewBox`, `currentColor`, labelled arrows, `figure`/`figcaption`, `role="img"`). Matches the author's existing SVG habits. |
| `diagram-design` v2.6 | cathrynlavery (MIT) | High for static editorial diagrams | 45 diagram types, editorial rules. Outputs HTML pages, so SVG must be extracted. §0–4 read; references not yet read. |
| `data-visualization` | NTCoding/claude-skillz | Medium | Reference material only: perceptual ranking, Shneiderman's "overview, zoom, details", and the layout-algorithm-to-library map (dagre/ELK, d3-hierarchy, d3-sankey). |
| `frontend-design` | Anthropic | Medium | Anti-default design guard for widget styling. Overlaps `artifact-design`. |
| `web-artifacts-builder` | Anthropic | Low | Bundles React + Tailwind + shadcn into one HTML file for claude.ai. Only useful for the iframe route; the blog is already React + Tailwind. |
| Inline visualizer (claudskills.com) | community | Low | Chart.js in chat; CDN loading conflicts with the CSP. Not read. |
| Visual Explainer (ericblue) | community | Low | Generates images via OpenAI/Gemini; not interactive. Not read. |
| "dataink" plugin | community, privileged | Unknown | Data storytelling and infographic design. Not reviewed. |

### Integration routes (decision for the author)

- **A. Native MDX components** (`components/visuals/`, registered in `components/MDXComponents.tsx`,
  libraries via npm). Best for theming, accessibility, search indexing and consistency. Costs an
  up-front starter kit.
- **B. Self-contained HTML widgets in an iframe** (`public/static/widgets/<slug>/`). Matches how
  Claude already builds artifacts, so it's the fastest to author and isolated from the site build.
  Needs `frame-src 'self'`, a height and theme bridge, and inlined libraries; not indexed.

Recommendation: A for the repeatable patterns (chart, step-through diagram, explorable control),
with B allowed for one-off bespoke explorables. Prototype any visual as an artifact first, then
port it.

### Proposed trial (same method as before)

1. **Explorable:** in `the-agent-as-customer-a-practical-build-guide`, a cart-total slider against
   the A$300 mandate that flips the checkout response between accepted and the post's real
   `over_mandate` rejection JSON.
2. **Step-through diagram:** the Legal Framework recall sequence (Clarity Assessment → Ambiguity
   Event → Legal Check → ranked precedent) as a stepped, animated SVG that respects reduced motion.
Both built as route A components, previewed with `yarn dev`, compared against the static originals.
