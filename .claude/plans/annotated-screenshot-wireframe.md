# AnnotatedScreenshot: wireframe for approval

**Status: awaiting Matt's approval. Not built.** (`components/CLAUDE.md` law 4: wireframe, then build.)

A screenshot with numbered callout markers placed on it, and the same numbers as a list below, so
the post can say "look at 2" without painting arrows into the PNG. Proposed in
`.claude/skills/blog-visuals/references/screenshots.md`, step 5.

## Wireframe

Desktop, inside the existing `Figure` template:

```
┌ Figure ───────────────────────────────────────────────────────────┐
│ ┌ Surface tone="plain" pad="none" (image frame, relative) ──────┐ │
│ │                                                               │ │
│ │   [ screenshot: <img>, full width, keeps its aspect ratio ]   │ │
│ │                                                               │ │
│ │        (1)                                                    │ │
│ │                             (2)                               │ │
│ │                                                    (3)        │ │
│ │                                                               │ │
│ └───────────────────────────────────────────────────────────────┘ │
│                                                                   │
│  WHAT TO LOOK FOR                       <- Eyebrow, `label` prop  │
│  (1) Individual access                  <- Marker + label (ink)   │
│      Organization Admin or Owner        <- detail (ink-muted)     │
│  (2) Last login                                                   │
│  (3) Row menu                                                     │
└───────────────────────────────────────────────────────────────────┘
  Caption: the claim the screenshot makes.
```

Phone (390px): the image scales to the column, markers shrink from 24px to 20px and stay at the
same percentages, the list stays underneath at full width.

```
┌ Figure ──────────────────┐
│ ┌──────────────────────┐ │
│ │ [screenshot]  (1)    │ │
│ │        (2)      (3)  │ │
│ └──────────────────────┘ │
│ WHAT TO LOOK FOR         │
│ (1) Individual access    │
│     Organization Admin…  │
│ (2) Last login           │
│ (3) Row menu             │
└──────────────────────────┘
```

The labels above are placeholders to show the layout, not content.

## Props (all from the post)

```ts
type Callout = { x: number; y: number; label: string; detail?: string } // x, y: % of the image
type AnnotatedScreenshotProps = {
  src: string // /static/images/<post-slug>/<name>.png, already redacted
  alt: string // what the screenshot shows
  width: number // intrinsic pixels, so the frame reserves its height (no layout shift)
  height: number
  label: string // eyebrow above the list
  callouts: Callout[] // numbered 1..n in order
}
```

## Built from

| Piece                             | Layer          | Notes                                                                                                                                                                                                            |
| --------------------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Surface` (`plain`, `pad="none"`) | Atom, existing | The image frame; `relative overflow-hidden` via `className` (layout only)                                                                                                                                        |
| `Eyebrow`                         | Atom, existing | The list label                                                                                                                                                                                                   |
| `Marker`                          | **Atom, new**  | A numbered circle: `inverse` fill and ink (solid, reads as "this one"), a `ds-surface` ring so it stands out on light and dark screenshots. Used on the image and in the list, so the two match. Not red (law 6) |
| `AnnotatedScreenshot`             | Organism, new  | Positions markers with `left: x%; top: y%` and a centring transform                                                                                                                                              |

- **Theme roles only**: `bg-ds-inverse-fill`, `text-ds-inverse-ink`, `ring-ds-surface`,
  `text-ds-ink`, `text-ds-ink-muted`. No palette colours, no `dark:` variants.
- **Accessibility**: the image keeps its `alt`. Markers on the image are `aria-hidden`; the `<ol>`
  carries the same information in reading order, so nothing depends on seeing the image.
- **No state, no motion**: a server component. Plain `<img>` with `width`, `height` and
  `loading="lazy"`, like the Markdown images posts already use (`next/core-web-vitals` warns on
  `<img>`; a warning, not a CI failure).
- Ships with a Storybook story (light, dark, desktop, phone), a `MDXComponents.tsx` registration
  and a catalogue row in `blog-visuals/SKILL.md`, in the same change.

## Decisions for Matt

1. **Approve the layout** above, or change it.
2. **New `Marker` atom**, or reuse `Chip variant="inverse"` with a number (a pill, not a circle)?
   Recommendation: the new atom; a round numbered marker is the convention readers know.
3. **Static, or linked on hover?** Linked: hovering or focusing a list item emphasises its marker
   on the image (needs `'use client'`). Recommendation: static first; add the link only if a post
   has enough callouts that matching numbers by eye gets hard.
