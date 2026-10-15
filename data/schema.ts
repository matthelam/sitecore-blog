/**
 * schema.org JSON-LD builders. Everything is generated from existing fields in
 * siteMetadata, the post frontmatter and data/pillars.ts, so nothing here holds a fact
 * of its own. Imported by contentlayer.config.ts, so it uses relative imports only.
 */
import siteMetadata from './siteMetadata'
import { getPillarName, getSeriesName } from './pillars'

export const SCHEMA_CONTEXT = 'https://schema.org'

export const authorName = 'Matt Lam'
export const authorAlternateNames = ['Matthew Lam', 'Matthelam', 'Aceik Matt']
export const employer = { name: 'Aceik', url: 'https://aceik.com.au' }

const siteUrl: string = siteMetadata.siteUrl

/** Absolute URL for a site path. The path is percent-encoded (slugs can contain spaces). */
export function absoluteUrl(sitePath = ''): string {
  const clean = sitePath.replace(/^\/+/, '')
  return clean ? `${siteUrl}/${encodeURI(clean)}` : siteUrl
}

/** Absolute URL for an image that is either already absolute or a site-relative path. */
export function absoluteImageUrl(src: string): string {
  if (/^https?:\/\//i.test(src)) return src
  return `${siteUrl}${src.startsWith('/') ? '' : '/'}${src}`
}

export function personSchema() {
  const sameAs = [siteMetadata.linkedin, siteMetadata.github].filter(Boolean)
  return {
    '@type': 'Person',
    '@id': `${siteUrl}/about#person`,
    name: authorName,
    alternateName: authorAlternateNames,
    url: `${siteUrl}/about`,
    jobTitle: 'Technical Architect',
    description:
      'Sitecore Technical Architect at Aceik in Adelaide, South Australia, writing about agentic Sitecore development, Sitecore Agentic Studio and agent context engineering.',
    worksFor: { '@type': 'Organization', name: employer.name, url: employer.url },
    sameAs,
  }
}

export function websiteSchema() {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'WebSite',
    '@id': `${siteUrl}#website`,
    name: siteMetadata.title,
    url: siteUrl,
    description: siteMetadata.description,
    inLanguage: siteMetadata.locale,
    author: personSchema(),
  }
}

export interface PageCopy {
  title: string
  description: string
}

/** A page node carrying the page's own title and description, linked to the WebSite node. */
export function webPageSchema(
  type: 'WebPage' | 'CollectionPage' | 'ProfilePage',
  path: string,
  page: PageCopy,
  extra: Record<string, unknown> = {}
) {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': type,
    url: path ? `${siteUrl}/${path}` : siteUrl,
    name: page.title,
    description: page.description,
    inLanguage: siteMetadata.locale,
    isPartOf: { '@id': `${siteUrl}#website` },
    ...extra,
  }
}

export function profilePageSchema(page: PageCopy) {
  return webPageSchema('ProfilePage', 'about', page, { mainEntity: personSchema() })
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

interface PostLike {
  title: string
  date: string
  lastmod?: string
  summary?: string
  tags?: string[]
  images?: unknown
  slug: string
  path: string
}

function firstImage(images: unknown): string | undefined {
  if (typeof images === 'string') return images
  if (Array.isArray(images) && typeof images[0] === 'string') return images[0]
  return undefined
}

export function postSchema(post: PostLike) {
  const url = absoluteUrl(post.path)
  const person = personSchema()
  const pillar = getPillarName(post.slug)
  const series = getSeriesName(post.slug, post.title)
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    dateModified: post.lastmod || post.date,
    image: absoluteImageUrl(firstImage(post.images) || siteMetadata.socialBanner),
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    inLanguage: siteMetadata.locale,
    ...(post.tags && post.tags.length ? { keywords: post.tags.join(', ') } : {}),
    ...(pillar ? { articleSection: pillar } : {}),
    ...(series ? { isPartOf: { '@type': 'CreativeWorkSeries', name: series } } : {}),
    author: person,
    publisher: person,
  }
}

export function postBreadcrumb(post: { title: string; path: string }) {
  return breadcrumbSchema([
    { name: 'Home', path: '' },
    { name: 'Blog', path: 'blog' },
    { name: post.title, path: post.path },
  ])
}
