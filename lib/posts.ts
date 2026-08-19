import { allBlogs } from 'contentlayer/generated'

const isProduction = process.env.NODE_ENV === 'production'

/**
 * Every blog post that should be publicly visible.
 *
 * Posts with `draft: true` stay visible in development, so they can be
 * previewed on the dev server, and are excluded from every production build.
 *
 * This is the single source of truth for that rule. Import from here rather
 * than reaching for `allBlogs` directly: the filter was previously duplicated
 * per route, which is how it ended up applied to the sitemap and the main RSS
 * feed and to nothing else.
 */
export const publishedBlogs = isProduction
  ? allBlogs.filter((post) => post.draft !== true)
  : allBlogs
