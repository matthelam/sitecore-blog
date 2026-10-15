# Legislation — public/static/

Static assets served as-is at `/static/...`: post images under `images/`, plus `favicons/`,
`downloads/` and `files/`. Everything in this directory is publicly downloadable from the live
site, including this file.

## Patterns

| Thing | Convention |
|---|---|
| Post images | One folder per post under `images/`, usually named after the post's slug (some older folders aren't, e.g. `legal-framework-implementation`) |
| Site images | Logos, banner and avatar at the top level of `images/`, referenced from `data/siteMetadata.js` |
| References | Posts link as `/static/images/<folder>/<file>` |

## Laws for this directory

1. **Public means public.** Anything added here is downloadable by anyone, so Constitution law 1
   applies with extra force: screenshots are checked for client names, internal URLs, emails and
   secrets before they're committed, and anything found is raised with Matt.
2. **New post images go in a folder named after the post's slug.** That keeps every asset
   traceable to the post that uses it. Existing folders are not renamed, because published posts
   link to them.
3. **No image without a reference.** Don't add assets no post uses, and don't delete an asset
   without checking that nothing links to it (`grep -r "/static/" data/ components/ layouts/`).
4. **Images carry real alt text in the post.** Alt text describes what the image shows, for
   readers who can't see it.
