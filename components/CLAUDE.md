# Legislation — components/

The site's React components (header, footer, layout pieces) and the components posts can use.
`MDXComponents.tsx` is the only registry for components posts can use: anything not listed there
doesn't exist as far as MDX is concerned. `design-system/` holds the blog's own visual components,
built in atomic layers on one theme. The `blog-visuals` skill and its `references/architecture.md`
govern how a visual is decided, designed and verified.

## Architecture

| Piece                                | Purpose                                                                                                                                                                                                                                                                  |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `MDXComponents.tsx`                  | Registers every component available in posts (organisms and the Figure template only)                                                                                                                                                                                    |
| `css/design-system.css` (repo root)  | **The theme.** Semantic colour roles (`ds-surface`, `ds-ink`, `ds-emphasis-*`, `ds-negative-*`, `ds-advisory-line`...) with light and dark values. The only place a design-system colour is defined                                                                      |
| `design-system/atoms/`               | Smallest parts: `Surface` (tones), `Arrow`, `Chip`, `Icon`, `Eyebrow`, `Marker`. Import nothing but React                                                                                                                                                                |
| `design-system/molecules/`           | Small groups of atoms with one job: `FlowNode`, `AgentCard`, `TabList`. Import atoms only                                                                                                                                                                                |
| `design-system/organisms/`           | Whole visuals a post uses: `LayerParallel`, `GatedFlow`, `SkillComposition`, `StepThrough`, `MandateCheckout`, `AnnotatedScreenshot`, `YouTubePlayer`, `SeriesOverview`, `PromptAnatomy`, `FieldSets`, `CountCheck`, `WhoCarries`, `InfoTip`. Import atoms and molecules |
| `design-system/templates/Figure.tsx` | The frame and caption every organism sits in                                                                                                                                                                                                                             |
| `design-system/types.ts`             | Shared prop shapes (`Lane`, `FlowStep`, `LayerColumn`, `Agent`, `SkillPanel`, `SequenceStep`, `Callout`)                                                                                                                                                                 |
| `**/*.stories.tsx`                   | Storybook stories for every atom, molecule and organism, in light and dark                                                                                                                                                                                               |
| `scripts/check-design-system.mjs`    | Enforces laws 6 to 8; runs before every `yarn build` (`yarn ds:check`)                                                                                                                                                                                                   |
| Everything else                      | Starter-blog site chrome (tailwind-nextjs-starter-blog v2.4.0)                                                                                                                                                                                                           |

## Laws for this directory

1. **CSP-safe only.** `next.config.js` allows scripts from self and `https://www.youtube.com`, and
   frames from `https://www.youtube.com` only. No CDN scripts and no hand-written iframes,
   including same-origin ones. Libraries come from npm. The one exception is `YouTubePlayer`, which
   loads Google's official IFrame Player API (`https://www.youtube.com/iframe_api`); the API, not
   our code, creates the player frame. Any other third-party embed needs Matt's approval and a CSP
   change. (Amended 2026-10-22 at Matt's request for a YouTube viewer.)
2. **Components hold no facts.** Every number, label and claim a visual shows arrives as a prop
   from the post, so the post stays the single owner of its content (Constitution law 2).
3. **Checked in every theme and width.** Every visual is checked in light, dark and at 390px
   width, in Storybook and on the page, and the screenshots are actually looked at. Colour is
   never the only signal; motion respects `motion-reduce`.
4. **Wireframe, then build, then register and catalogue together.** A new organism starts as a
   wireframe Matt approves. Once built, it is added to `MDXComponents.tsx`, gets a story, and gets
   a row in the catalogue in `.claude/skills/blog-visuals/SKILL.md`, all in the same change.
5. **Lint and build before commit.** eslint (including jsx-a11y) and prettier pass, and
   `yarn build` passes (it runs the design-system check first).
6. **Red is never a highlight.** The brand primary (`primary-*`) is a red, and red reads as
   negative: error, rejection, failure. It is reserved for genuinely negative states (the
   `negative` role, always with an icon and words). Emphasis, active, focused and "look here"
   states use the `emphasis` role: a strong neutral. Matt's rule, 2026-10-16.
7. **Theme roles only.** Components in `design-system/` use only the `ds-*` theme roles
   (`bg-ds-surface`, `text-ds-ink`, `border-ds-emphasis-line`...). No palette colours (`gray-500`,
   `red-600`, `primary-*`) and no `dark:` variants: colour and dark mode live in
   `css/design-system.css`. A new role is added there first, in light and dark.
8. **Layers import downwards only.** Atoms import nothing from the design system; molecules import
   atoms; organisms import atoms and molecules; templates frame organisms. Posts use organisms
   (and `Figure`) only, through `MDXComponents.tsx`. Reuse an existing atom or molecule before
   writing a new one, and add a new one at the lowest layer that fits.
