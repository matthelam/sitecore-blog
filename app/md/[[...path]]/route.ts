import { absoluteUrl } from '@/data/schema'
import { markdownForPath, notFoundMarkdown } from '@/data/markdown'

/**
 * Markdown representation of a page. middleware.ts rewrites a request for a page here when
 * the client sends "Accept: text/markdown", so /blog/some-post keeps its URL and returns
 * Markdown instead of HTML. Unknown paths get a 404 with a Markdown body.
 */
export async function GET(_request: Request, ctx: { params: Promise<{ path?: string[] }> }) {
  const { path = [] } = await ctx.params
  const body = markdownForPath(path)
  const headers: Record<string, string> = {
    'Content-Type': 'text/markdown; charset=utf-8',
    Vary: 'Accept',
    'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
  }
  if (body === undefined) {
    return new Response(notFoundMarkdown(), { status: 404, headers })
  }
  headers.Link = `<${absoluteUrl(path.join('/'))}>; rel="canonical"`
  return new Response(body, { headers })
}
