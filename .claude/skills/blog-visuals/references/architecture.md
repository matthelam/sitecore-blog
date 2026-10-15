# Visual components — architecture

These conventions will become the Legislation for `components/visuals/` when the Legal Framework is
installed in this repository. Until then they live here.

## Where things go

| Thing | Location | Notes |
|---|---|---|
| Component | `components/visuals/<PascalCase>.tsx` | Default export, arrow function, the same idiom as `components/TableWrapper.tsx` |
| Registration | `components/MDXComponents.tsx` | The only place components are made available to posts |
| Static diagram file | `public/static/images/<post-slug>/<name>.svg` | Referenced as `/static/images/<post-slug>/<name>.svg` |
| Inline static diagram | In the post's MDX | Precede hand-tuned SVG with `{/* prettier-ignore */}`, as `the-agent-as-customer-a-practical-build-guide` does |
| Trial or preview page | `data/blog/<slug>.mdx` with `draft: true` | Drafts render under `yarn dev` and never in production |

## Rendering

- Add `'use client'` only when the component has state or event handlers. `Figure` stays a server
  component.
- Plain React with SVG or HTML first. Add an npm library only when it does substantial work, such as
  graph layout (dagre, ELK) or a complex chart, and tell the author before adding the dependency.

## Platform constraints (verified 2026-10-15)

- **CSP** (`next.config.js`): `script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app
  analytics.umami.is` and `frame-src giscus.app`. CDN scripts and iframes are blocked. Libraries
  come from npm only. Don't loosen the CSP for a visual without the author's approval.
- **Dark mode** is the `.dark` class set by next-themes (`attribute="class"`), with Tailwind's
  `@custom-variant dark`. Style every colour through Tailwind classes with a `dark:` variant. Never
  use `prefers-color-scheme` or `data-theme` selectors.

## Colour

| Role | Classes | Why |
|---|---|---|
| Neutral marks, text, controls | `gray-*` | The default for everything not carrying meaning |
| Active or focused element | `primary-*` (the brand red-orange) | The site's accent, as in links |
| Enforced, rejected, failed | `red-600` / `dark:red-500`, always with an icon and words | Matches the Agent as Customer convention: red marks ENFORCED |
| Advisory or upcoming | Dashed `gray-300` / `dark:gray-600` borders | Matches the same post: dashed marks ADVISORY |

Lesson from the first trial: a slider styled in the brand red read as an error inside a component
where red means "rejected". Keep `primary-*` off controls in any component that also uses red for
failure.

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
