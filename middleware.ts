import { NextRequest, NextResponse } from 'next/server'

/**
 * Markdown content negotiation for agents (https://acceptmarkdown.com).
 * A request for a page with "Accept: text/markdown" is rewritten to app/md/[[...path]]/route.ts,
 * which returns text/markdown. Every other page response is passed through with "Vary: Accept",
 * so caches keep the HTML and Markdown versions of the same URL apart.
 */
function wantsMarkdown(accept: string | null): boolean {
  if (!accept) return false
  return accept.split(',').some((part) => {
    const [type, ...params] = part.trim().split(';')
    if (type.trim().toLowerCase() !== 'text/markdown') return false
    const q = params.map((p) => p.trim()).find((p) => p.startsWith('q='))
    return q === undefined || parseFloat(q.slice(2)) > 0
  })
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isRead = request.method === 'GET' || request.method === 'HEAD'

  if (isRead && wantsMarkdown(request.headers.get('accept'))) {
    const url = request.nextUrl.clone()
    url.pathname = `/md${pathname === '/' ? '' : pathname}`
    return NextResponse.rewrite(url)
  }

  const response = NextResponse.next()
  response.headers.append('Vary', 'Accept')
  return response
}

export const config = {
  // Page paths only: skip Next internals, the md route itself and anything with a file extension
  // (static assets, sitemap.xml, feed.xml, llms.txt and so on).
  matcher: ['/((?!_next/|md/|api/|static/|.*\\..*).*)'],
}
