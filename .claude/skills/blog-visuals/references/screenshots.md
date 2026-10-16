# Screenshots

How a screenshot is decided, captured, redacted, checked, annotated and placed. A screenshot can
come up at any phase: listed in the inception brief's visual plan, captured during the write-up,
or added when a reviewer asks "where is that setting?". The steps are the same whenever it happens.

## 1. Decide

A screenshot earns its place when the reader will meet that exact screen and needs to recognise it:
where a setting lives, what a column says, what the error looks like. It shows _what is there_.
A diagram explains _how something works_: flow, structure, cause. If the reader needs the
mechanism, draw it; if they need to find the thing, show it.

Before capturing, write down what the screenshot proves, in one sentence. That sentence becomes the
caption, and it decides the crop: everything outside what the sentence needs is cut.

## 2. Capture

Raw captures go to the session's scratchpad, **never into the repo**. Only the redacted file
enters `public/static/`.

| Source                                                         | Tool                                          | How                                                                                                                                                                                                        |
| -------------------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A public page, repeatable                                      | Playwright (`@playwright/test`, installed)    | `node .claude/skills/blog-visuals/scripts/capture.mjs <url> <scratch>/<name> [selector]`: widths 1280 and 390, light and dark, device scale 2, reduced motion. Run from the repo root after `yarn install` |
| A public page, quick look                                      | The in-app browser (`mcp__Claude_Browser__*`) | Find the screen, the state and the crop. Its screenshot comes back to the agent, not to disk, so take the file with Playwright                                                                             |
| Matt's logged-in tools (Sitecore Cloud Portal, Agentic Studio) | Claude in Chrome (`mcp__claude-in-chrome__*`) | `computer` `screenshot` with `save_to_disk: true`, or `zoom` with a `region` to crop. Matt's own session in his own Chrome                                                                                 |

**Logged-in capture is read-only.** Navigate, scroll, hover, read the page and capture. Never
click anything that saves, toggles, assigns, deletes, submits or invites; never type into a field;
never run page JavaScript. Tabs and menus that only change what is displayed are fine; if you are
unsure whether a control changes anything, don't click it. If the screen needs a state that only a
change can produce, stop and ask Matt to set it up.

For the blog's own pages, Playwright's `colorScheme` drives the theme, because the site follows
the system theme (`siteMetadata.theme: 'system'`).

## 3. Redact

Redact before the file goes anywhere near the repo. Look for:

- people's names, emails, avatars and initials;
- tenant, organisation, project and environment names or IDs;
- hostnames and internal URLs, including the browser's address bar, tabs and bookmarks;
- tokens, keys, connection strings, anything secret-shaped;
- client names, logos and anything that identifies an engagement;
- Aceik-internal processes, pricing or staff.

Then run `scripts/redact.py` (Pillow only, already installed locally; not a CI dependency):

```bash
python .claude/skills/blog-visuals/scripts/redact.py <scratch>/raw.png <scratch>/check.png --box 120,340,260,22 --outline
python .claude/skills/blog-visuals/scripts/redact.py <scratch>/raw.png public/static/images/<post-slug>/<name>.png --box 120,340,260,22
```

- Rectangles are `x,y,width,height` in the image's own pixels. A device-scale-2 capture has
  twice the CSS pixels, so a `getBoundingClientRect()` box is doubled.
- Run with `--outline` first and look at the result: every box must cover its target fully, with
  a margin.
- `--box` (solid fill, default grey, `--fill #RRGGBB` to match) for text. `--blur` only for things
  that should still read as present, like an avatar; blurred text can sometimes be recovered.
- Where the reader needs to see that a value exists, the existing precedent
  (`/static/images/agentic-studio-builder-license/cloud-portal-org-admins.png`) shows the pattern:
  a box over the tenant name, and placeholder addresses like `user.one@example.com`.
- The output is a fresh PNG with no metadata.

Open the redacted file and read it at full size, zooming on every box, before step 4.

## 4. Privacy check

`public/static/CLAUDE.md` law 1 and Constitution law 1: anything here is downloadable by anyone.
Read the redacted image as a stranger would, plus its file name, alt text and caption. Anything
left from the list in step 3, or anything else that makes you hesitate, is a **PENDING ACTION**
for Matt: what was found, where in the image, and the options (approve as is, redact more,
re-capture, drop the screenshot). Don't commit until he decides.

## 5. Annotate

Point at things with numbered callouts beside the image, not arrows painted into the PNG: painted
marks don't adapt to dark mode, scale badly on phones and can't be read by a screen reader. The
`AnnotatedScreenshot` organism is proposed for this (wireframe in
`.claude/plans/annotated-screenshot-wireframe.md`, awaiting Matt's approval; not built).
Until it exists, refer to parts of the screenshot in the prose or a list under the figure.

## 6. Place

- File: `public/static/images/<post-slug>/<what-it-shows>.png`, kebab-case
  (`public/static/CLAUDE.md` law 2).
- In the post, inside `<Figure>`, with real alt text that says what the screenshot shows
  (`public/static/CLAUDE.md` law 4) and a caption that states the claim from step 1:

  ```mdx
  <Figure caption="The Individual access column tells you who the admins are.">

  ![Cloud Portal Admin Users list with an Individual access column](/static/images/<post-slug>/org-admins.png)

  </Figure>
  ```

  Keep the blank lines inside `<Figure>`, or MDX won't parse the Markdown image.

- Check it at 390px wide in light and dark (`yarn dev`, then the verification checklist in
  `architecture.md`). A 1280px capture shrunk to a phone often makes its text unreadable: crop
  tighter, or capture the 390px layout as well.
