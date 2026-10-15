# Legislation — data/blog/

The posts. Every `.mdx` file here is one post, rendered by Contentlayer (`contentlayer.config.ts`)
into `/blog/<filename-without-.mdx>`. This is the product, so the Constitution's values apply in
full here. Creative work starts in `blog-inception`; the write-up uses `blog-rewrite-hybrid`
(voice guide, concision, tone profiles) and `blog-visuals`.

## Patterns

| Thing | Convention |
|---|---|
| Frontmatter | YAML between `---` fences. `title` and `date` (`YYYY-MM-DD`) required; optional `tags` (lowercase), `lastmod`, `draft`, `summary`, `images`, `authors`, `layout`, `bibliography`, `canonicalUrl` |
| Drafts | `draft: true` renders under `yarn dev` and is excluded from production |
| Slugs | The filename is the slug. Procedural series use numbered filenames (`01-…`); essays use descriptive slugs |
| Series | Shared title prefix ("Azure Entra ID SSO – …", "Agentic Studio: …"); openers point back, closers point forward |
| Components | Only what `components/MDXComponents.tsx` registers; inline SVG preceded by `{/* prettier-ignore */}` |

## Laws for this directory

1. **Published posts change only when Matt asked for that change.** A post with `draft: false` is
   live. Fixing a typo or link he requested is fine; rewording or restructuring anything else is
   not, because his voice is the product.
2. **Link the neighbours, never a draft.** Series posts link the previous and next posts by slug.
   A link to a `draft: true` post 404s in production, so it stays as plain text until that post is
   published, and is linked in the same change that publishes it.
3. **No invented claims (Constitution law 2), restated for content.** Every fact, number and
   quote is Matt's or comes from a published post, and quotes are verbatim. Gaps are marked
   "author to supply" and never filled with plausible detail.
4. **Code, JSON and tables are load-bearing.** Rewrites keep them intact unless Matt asks
   otherwise.
5. **A published post's slug is permanent.** The slug is the post's URL and its RSS `guid`.
   Renaming the file breaks inbound links and makes Buttondown treat the post as new, which can
   email it to subscribers again (Constitution law 3).
6. **Image paths must exist.** Never reference a file under `/static/` that is not in
   `public/static/` (see that directory's Legislation).
