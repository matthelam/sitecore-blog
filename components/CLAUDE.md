# Legislation — components/

The site's React components (header, footer, layout pieces, comments, newsletter form) and the
components posts can use. `MDXComponents.tsx` is the only registry for components posts can use:
anything not listed there doesn't exist as far as MDX is concerned. `visuals/` holds the blog's
own diagram and interactive components, governed in detail by the `blog-visuals` skill and its
`references/architecture.md`.

## Architecture

| Piece | Purpose |
|---|---|
| `MDXComponents.tsx` | Registers every component available in posts |
| `visuals/Figure.tsx` | Server component: bordered figure with caption; wraps every visual |
| `visuals/MandateCheckout.tsx`, `visuals/StepThrough.tsx` | Client components (`'use client'`), all facts passed as props |
| Everything else | Starter-blog site chrome (tailwind-nextjs-starter-blog v2.4.0) |

## Laws for this directory

1. **CSP-safe only.** `next.config.js` allows scripts from self, giscus and umami, and frames from
   giscus only. No CDN scripts and no iframes, including same-origin ones. Libraries come from npm.
2. **Components hold no facts.** Every number, label and claim a visual shows arrives as a prop
   from the post, so the post stays the single owner of its content (Constitution law 2).
3. **Dark mode via the `.dark` class.** Every visual is checked in light, dark and at 390px width
   with Playwright screenshots that are actually looked at. Colour is never the only signal; motion
   respects `motion-reduce`.
4. **Register and catalogue together.** A new visual is added to `MDXComponents.tsx` and to the
   catalogue table in `.claude/skills/blog-visuals/SKILL.md` in the same change, and Matt is told
   before it's built.
5. **Lint and build before commit.** eslint (including jsx-a11y) and prettier pass, and
   `yarn build` passes.
6. **Red is never a highlight.** The brand primary (`primary-*`) is a red, and red reads as
   negative: error, rejection, failure. In visuals it is reserved for genuinely negative states
   (always with an icon and words). Emphasis, active, focused and "look here" states use a strong
   neutral instead: a dark gray border on a light gray fill, inverted in dark mode. Matt's rule,
   2026-10-16.
