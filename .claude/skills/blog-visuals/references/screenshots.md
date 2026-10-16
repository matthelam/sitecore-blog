# Screenshots

How a screenshot is decided, captured, sanitised, checked, annotated and placed. A screenshot can
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

Raw captures go to the session's scratchpad, **never into the repo**. Only the sanitised file
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

## 3. Review and sanitise (mandatory)

Matt's rule (`public/static/CLAUDE.md` law 1): every screenshot goes through a security and
privacy review, and its information is modified so it is sanitised and safe to display publicly.
This step is never skipped, not even for a screenshot that looks harmless.

**Review** the raw capture against this checklist, at full size:

- [ ] people's names, emails, avatars and initials
- [ ] tenant, organisation, project and environment names or IDs (GUIDs included)
- [ ] internal URLs and hostnames
- [ ] API keys, tokens, connection strings, anything secret-shaped
- [ ] client names and logos, anything that identifies an engagement
- [ ] Aceik-internal data: processes, pricing, staff
- [ ] anything readable in browser chrome: address bar, tabs, bookmarks, extensions, notifications

**Sanitise** every item found. Each is redacted (a solid box), blurred (an avatar or logo only;
blurred text can sometimes be recovered) or replaced with a neutral placeholder. Placeholders are
best where the reader should see that a value exists. They come from the source when its data is
already neutral, such as a test tenant whose users have `example.com` addresses (capture stays
read-only, so never edit data to get them); otherwise box the value. The precedent
`/static/images/agentic-studio-builder-license/cloud-portal-org-admins.png` shows both:
`user.one@example.com` addresses and a box over the tenant name.

The tool is `scripts/sanitise.py` (Pillow, pytesseract and Tesseract OCR, installed locally; not
a CI dependency). It finds text by OCR, boxes what matches, adds your manual boxes, then re-checks:

```bash
python .claude/skills/blog-visuals/scripts/sanitise.py <scratch>/raw.png <scratch>/check.png --name "<person or client>" --box 900,40,48,48 --outline
python .claude/skills/blog-visuals/scripts/sanitise.py <scratch>/raw.png public/static/images/<post-slug>/<name>.png --name "<person or client>" --box 900,40,48,48
```

- **Automatic detection** reads the image twice (as captured and as a 2x greyscale upscale) and
  boxes emails, GUIDs and other long IDs, URLs and hostnames, tokens and keys, and every word of a
  `--name` (or `--names <file>`) entry. Hex IDs are matched after correcting common OCR misreads
  (`O` for `0`, `/` for `7`). Reserved placeholder domains (`example.com`, `.test`) are left alone.
- **Manual boxes** cover what OCR can't read: avatars, logos, initials in circles, small or
  low-contrast text. `x,y,width,height` in the image's own pixels; a device-scale-2 capture has
  twice the CSS pixels. `--blur x,y,w,h` for an avatar or logo.
- **`--outline` first.** It draws what would be redacted. Look at it: every box covers its target
  with a margin, and nothing the reader needs is covered (`--allow <word>` keeps a false match).
- **The re-check is mandatory.** The script OCRs its own output and exits 2 if anything still
  matches. Never commit after a failed re-check: add boxes and run again.
- **OCR is not enough on its own.** Open the sanitised file at full size and go through the
  checklist again by eye, zooming on every box and every block of small text.
- The output is a fresh PNG with no metadata. Test the tool with
  `python .claude/skills/blog-visuals/scripts/test_sanitise.py`.

Keep the script's summary (`detected email ... at x,y`): it is what step 6 reports in the PR.

## 4. Privacy check

`public/static/CLAUDE.md` law 1 and Constitution law 1: anything here is downloadable by anyone.
Read the sanitised image as a stranger would, plus its file name, alt text and caption. Anything
left from the checklist, anything you're unsure about, or anything else that makes you hesitate is
a **PENDING ACTION** for Matt: what was found, where in the image, and the options (approve as
is, sanitise more, re-capture, drop the screenshot). Don't commit until he decides.

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

- In the PR description, say what was sanitised in each image and why ("3 emails and the tenant
  ID boxed; avatar blurred"), never the values themselves (`public/static/CLAUDE.md` law 5).
- Check it at 390px wide in light and dark (`yarn dev`, then the verification checklist in
  `architecture.md`). A 1280px capture shrunk to a phone often makes its text unreadable: crop
  tighter, or capture the 390px layout as well.
