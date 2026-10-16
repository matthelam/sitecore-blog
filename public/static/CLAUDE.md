# Legislation — public/static/

Static assets served as-is at `/static/...`: post images under `images/`, plus `favicons/`,
`downloads/` and `files/`. Everything in this directory is publicly downloadable from the live
site, including this file.

## Patterns

| Thing       | Convention                                                                                                                                  |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Post images | One folder per post under `images/`, usually named after the post's slug (some older folders aren't, e.g. `legal-framework-implementation`) |
| Site images | Logos, banner and avatar at the top level of `images/`, referenced from `data/siteMetadata.js`                                              |
| References  | Posts link as `/static/images/<folder>/<file>`                                                                                              |

## Laws for this directory

1. **Public means public: every screenshot is reviewed and sanitised.** Anything added here is
   downloadable by anyone, so Constitution law 1 applies with extra force. Matt's rule
   (2026-10-16): "screenshots must always go through a security and privacy review and modify
   information so it is 'sanitized' and safe to display publicly". Before a screenshot enters the
   repo it is reviewed for security and privacy, and every identifying or sensitive detail is
   modified: redacted, blurred or replaced with a neutral placeholder. The tool and checklist are
   in `.claude/skills/blog-visuals/references/screenshots.md`. An unsanitised screenshot is never
   committed. Anything you're unsure about is raised with Matt as a **PENDING ACTION**.
2. **New post images go in a folder named after the post's slug.** That keeps every asset
   traceable to the post that uses it. Existing folders are not renamed, because published posts
   link to them.
3. **No image without a reference.** Don't add assets no post uses, and don't delete an asset
   without checking that nothing links to it (`grep -r "/static/" data/ components/ layouts/`).
4. **Images carry real alt text in the post.** Alt text describes what the image shows, for
   readers who can't see it.
5. **Sanitising is visible in the PR.** The PR description for any screenshot change says what
   was modified in each image and why (for example "3 emails and the tenant ID boxed; avatar
   blurred"), without repeating the sensitive values.
