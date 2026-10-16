# Visual components — architecture

Detailed conventions for `components/design-system/`. The structure and its laws are Legislation in
`components/CLAUDE.md`; this file adds the how.

## Where things go

| Thing | Location | Notes |
|---|---|---|
| Theme role | `css/design-system.css` | A `--ds-*` value in light and dark, exposed as `--color-ds-*` |
| Atom, molecule, organism | `components/design-system/{atoms,molecules,organisms}/<PascalCase>.tsx` | Default export, arrow function, the same idiom as `components/TableWrapper.tsx` |
| Shared prop shape | `components/design-system/types.ts` | |
| Story | `<Layer>.stories.tsx` next to the components | Every atom, molecule and organism has one |
| Registration | `components/MDXComponents.tsx` | The only place components are made available to posts |
| Static diagram file | `public/static/images/<post-slug>/<name>.svg` | Referenced as `/static/images/<post-slug>/<name>.svg` |
| Inline static diagram | In the post's MDX | Precede hand-tuned SVG with `{/* prettier-ignore */}`, as `the-agent-as-customer-a-practical-build-guide` does |
| Preview | Storybook (`yarn storybook`) | Replaces draft trial pages for component work; a draft post is still fine for an in-context check |

## Rendering

- Add `'use client'` only when the component has state or event handlers. `Figure` stays a server
  component.
- Plain React with SVG or HTML first. Add an npm library only when it does substantial work, such as
  graph layout (dagre, ELK) or a complex chart, and tell the author before adding the dependency.

## Platform constraints (verified 2026-10-15)

- **CSP** (`next.config.js`): `script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app
  analytics.umami.is` and `frame-src giscus.app`. CDN scripts and iframes are blocked. Libraries
  come from npm only. Don't loosen the CSP for a visual without the author's approval.
- **Dark mode** is the `.dark` class set by next-themes (`attribute="class"`). In the design system
  it is handled once, in `css/design-system.css`, by redefining the role values under `.dark`.
  Components use role utilities only and never a `dark:` variant. Never use
  `prefers-color-scheme` or `data-theme` selectors.

## Colour

| Role | Classes | Why |
|---|---|---|
| Neutral marks, text, controls | `ds-surface`, `ds-surface-muted`, `ds-line`, `ds-line-strong`, `ds-ink`, `ds-ink-muted`, `ds-ink-subtle` (`Surface tone="plain"`/`"muted"`) | The default for everything not carrying meaning |
| Highlight, active or focused element | `ds-emphasis-line`, `ds-emphasis-fill` (`Surface tone="emphasis"`) | A strong neutral. Never `primary-*`: the brand colour is a red, and red reads as negative (`components/CLAUDE.md` law 6) |
| Enforced, rejected, failed | `ds-negative-line`, `ds-negative-fill`, `ds-negative-ink` (`Surface tone="negative"`), always with an icon and words | Matches the Agent as Customer convention: red marks ENFORCED |
| Advisory, upcoming, on demand | `ds-advisory-line`, dashed (`Surface tone="advisory"`, `Arrow dashed`) | Matches the same post: dashed marks ADVISORY |
| An item's own core | `ds-inverse-fill`, `ds-inverse-ink` (`Surface tone="inverse"`, `Chip variant="inverse"`) | Solid, so it reads as the thing itself |

Lesson from the first trial: a slider styled in the brand red read as an error inside a component
where red means "rejected". Matt then made it a rule (2026-10-16) after the We Don't Build the
Website figures used the brand red for their highlights: `primary-*` is not used in visuals at all,
and red appears only for genuinely negative states.

## Accessibility

- Wrap every visual in `<Figure caption>`; the caption states the claim.
- SVG diagrams carry `role="img"` and an `aria-label` that says what the picture shows.
- State that changes on interaction is announced with `aria-live="polite"`.
- Use native controls (`<input type="range">`, `<button>`). Keyboard handlers go on the interactive
  element itself; ESLint's `jsx-a11y/no-noninteractive-element-interactions` fails the build
  otherwise. This happened in the first trial.
- State is never colour alone: pair it with an icon (✓, ✕) and words.

## Motion

Motion happens only in response to the reader's action. No autoplay. Every transition carries
`motion-reduce:transition-none`.

## Responsive

Test at 390px wide. Wrap long JSON arrays onto separate lines and give code `overflow-x-auto`. The
first trial clipped a JSON line on phones until the array was wrapped.

## Verification checklist

1. `npx prettier --write` and `npx eslint` on the changed files.
2. `yarn build` passes. It compiles every post's MDX against the components.
3. `git status` after the build: revert any regenerated `app/tag-data.json` unless the change is
   intended. The committed copy is stale and the build rewrites it every time.
4. `yarn dev`, then Playwright screenshots of the page in light, dark and at 390px, before and after
   interacting, with console errors logged. Chromium is at `/opt/pw-browsers/chromium-1194/` in
   cloud sessions.
5. Look at every screenshot before reporting the visual as done.
