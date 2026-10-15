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
