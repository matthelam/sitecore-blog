/**
 * Markdown and plain-text renderings of the site for agents: llms.txt and the
 * text/markdown responses served by app/md/[[...path]]/route.ts. Everything is built from
 * contentlayer, siteMetadata, data/pillars.ts and data/trustPages.ts, so no copy lives here
 * apart from the "when to use" guidance, which restates the brand kit's positioning and pillars.
 */
import { slug as slugify } from 'github-slugger'
import { allBlogs, allAuthors } from 'contentlayer/generated'
import type { Blog } from 'contentlayer/generated'
import siteMetadata from './siteMetadata'
import { absoluteUrl, authorName, employer } from './schema'
import { pillars, OTHER_PILLAR, getPillarName } from './pillars'
import { contactPage, privacyPage, trustPageToMarkdown } from './trustPages'

export function publishedPosts(): Blog[] {
  return allBlogs
    .filter((p) => !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
}

function postLine(p: Blog): string {
  const link = `[${p.title}](${absoluteUrl(p.path)})`
  return p.summary ? `- ${link}: ${p.summary.replace(/\s+/g, ' ').trim()}` : `- ${link}`
}

function postsByPillar(posts: Blog[]): { name: string; posts: Blog[] }[] {
  const groups = pillars.map((pillar) => ({
    name: pillar.name,
    posts: posts.filter((p) => getPillarName(p.slug) === pillar.name),
  }))
  const other = posts.filter((p) => !getPillarName(p.slug))
  if (other.length) groups.push({ name: OTHER_PILLAR, posts: other })
  return groups.filter((g) => g.posts.length)
}

const positioning =
  'Practical field notes on agentic Sitecore development by Matt Lam of Aceik: Sitecore Agentic Studio, SitecoreAI, and the agent context and memory that AI work on Sitecore depends on.'

export function llmsTxt(): string {
  const posts = publishedPosts()
  const out: string[] = [
    `# ${siteMetadata.title}`,
    '',
    `> ${positioning}`,
    '',
    `${authorName} is a Technical Architect at ${employer.name} (${employer.url}) in Adelaide, South Australia, also known as Matthew Lam and Matthelam.`,
    '',
    '## When to use this site',
    '',
    'Use this site when you need working detail, not marketing, on:',
    '',
    '- Agentic Sitecore development: using AI agents on real Sitecore work, including using Sitecore documentation as agent context.',
    '- Sitecore Agentic Studio and SitecoreAI: licensing, setup, debugging, what does and does not export, and the AI project lifecycle.',
    '- Agent context engineering: how to give agents the right context and a durable memory, including the Legal Framework for agent context.',
    '- Agent teams and design patterns: sub-agents, personas, skills, and building services for agents as customers.',
    '- Sitecore platform foundations: Azure Entra ID SSO for Sitecore Cloud Portal and Content Hub, and static versus dynamic placeholders.',
    '',
    'It is written for Sitecore developers and architects starting to use AI agents, Sitecore Agentic Studio or SitecoreAI, for Sitecore teams and partners, and for developers of any stack building agent context, memory and harnesses.',
    '',
    '## Posts',
    '',
  ]
  for (const group of postsByPillar(posts)) {
    out.push(`### ${group.name}`, '', ...group.posts.map(postLine), '')
  }
  out.push(
    '## Pages',
    '',
    `- [About ${authorName}](${absoluteUrl('about')}): background, role and links`,
    `- [Contact](${absoluteUrl('contact')}): email, LinkedIn and GitHub`,
    `- [Privacy](${absoluteUrl('privacy')}): what the site does with visitor data`,
    `- [All posts](${absoluteUrl('blog')})`,
    `- [Topics](${absoluteUrl('tags')})`,
    `- [Sitemap](${absoluteUrl('sitemap.xml')})`,
    `- [RSS feed](${absoluteUrl('feed.xml')})`,
    ''
  )
  return out.join('\n')
}

/**
 * Best-effort conversion of an MDX body to Markdown: drops import/export lines, MDX comments
 * and JSX blocks (components, inline SVG), and keeps the text inside <aside> callouts.
 * Fenced code is left untouched.
 */
export function mdxToMarkdown(raw: string): string {
  const lines = raw.replace(/\r\n/g, '\n').split('\n')
  const out: string[] = []
  let inFence = false
  let fenceMarker = ''
  let inAside = false
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const trimmed = line.trim()
    const fence = trimmed.match(/^(`{3,}|~{3,})/)
    if (fence) {
      if (!inFence) {
        inFence = true
        fenceMarker = fence[1][0]
      } else if (fence[1][0] === fenceMarker) {
        inFence = false
      }
      out.push(line)
      continue
    }
    if (inFence) {
      out.push(line)
      continue
    }
    if (/^(import|export)\s/.test(trimmed)) continue
    if (/^\{\/\*[\s\S]*\*\/\}$/.test(trimmed)) continue
    if (inAside) {
      if (/^<\/aside>/.test(trimmed)) {
        inAside = false
        continue
      }
      const text = line.replace(/<\/?[a-zA-Z][^>]*>/g, '').trim()
      // Skip fragments of a multi-line tag (for example a lone "<a" or an attribute line).
      if (text && !/^<[a-zA-Z]/.test(text) && !/^[a-zA-Z-]+=/.test(text) && text !== '>') {
        out.push(text)
      }
      continue
    }
    if (/^<aside[\s>]/.test(trimmed)) {
      inAside = !/<\/aside>/.test(trimmed)
      continue
    }
    const open = trimmed.match(/^<(svg|img|[A-Z][A-Za-z0-9]*)(?:[\s>/]|$)/)
    if (open) {
      const name = open[1]
      if (name === 'Image' || name === 'img') {
        // <Image src="..." alt="..." /> becomes a Markdown image so the alt text survives.
        let j = i
        let tag = lines[j]
        while (!/\/>\s*$/.test(lines[j].trim()) && j + 1 < lines.length) {
          j++
          tag += `\n${lines[j]}`
        }
        const src = tag.match(/src="([^"]*)"/)?.[1]
        const alt = tag.match(/alt="([^"]*)"/)?.[1] ?? ''
        if (src) out.push(`![${alt}](${src.startsWith('/') ? absoluteUrl(src) : src})`)
        i = j
        continue
      }
      if (/\/>\s*$/.test(trimmed) || new RegExp(`</${name}>\\s*$`).test(trimmed)) continue
      const closing = `</${name}>`
      let end = -1
      for (let j = i + 1; j < lines.length; j++) {
        if (lines[j].includes(closing)) {
          end = j
          break
        }
      }
      if (end === -1) {
        // No closing tag: a multi-line self-closing component, so skip to the line ending "/>".
        for (let j = i + 1; j < lines.length; j++) {
          if (/\/>\s*$/.test(lines[j].trim())) {
            end = j
            break
          }
        }
      }
      if (end !== -1) i = end
      continue
    }
    out.push(line)
  }
  return out
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

export function postMarkdown(post: Blog): string {
  const head = [`# ${post.title}`, '']
  if (post.summary) head.push(`> ${post.summary.replace(/\s+/g, ' ').trim()}`, '')
  return `${head.join('\n')}\n${mdxToMarkdown(post.body.raw)}\n`
}

function homeMarkdown(): string {
  const posts = publishedPosts().slice(0, 10)
  return [
    `# ${siteMetadata.title}`,
    '',
    `> ${siteMetadata.description}`,
    '',
    positioning,
    '',
    '## Latest posts',
    '',
    ...posts.map(postLine),
    '',
    `All posts: ${absoluteUrl('blog')}`,
    `Index for agents: ${absoluteUrl('llms.txt')}`,
    '',
  ].join('\n')
}

function blogMarkdown(): string {
  return [
    '# Blog: Agentic Sitecore Development and Agent Context',
    '',
    ...publishedPosts().map(postLine),
    '',
  ].join('\n')
}

function aboutMarkdown(): string {
  const author = allAuthors.find((a) => a.slug === 'default')
  const body = author ? mdxToMarkdown(author.body.raw) : ''
  return [
    `# About ${authorName}`,
    '',
    `${authorName} (Matthew Lam, Matthelam) is a Technical Architect at ${employer.name} (${employer.url}).`,
    '',
    body,
    '',
    `- [LinkedIn](${siteMetadata.linkedin})`,
    `- [GitHub](${siteMetadata.github})`,
    '',
  ].join('\n')
}

function tagsMarkdown(): string {
  const counts: Record<string, number> = {}
  for (const p of publishedPosts()) {
    for (const t of p.tags || []) counts[slugify(t)] = (counts[slugify(t)] || 0) + 1
  }
  const tags = Object.keys(counts).sort((a, b) => counts[b] - counts[a] || a.localeCompare(b))
  return [
    '# Topics',
    '',
    ...tags.map((t) => `- [${t}](${absoluteUrl(`tags/${t}`)}) (${counts[t]})`),
    '',
  ].join('\n')
}

function tagMarkdown(tag: string): string | undefined {
  const posts = publishedPosts().filter((p) => (p.tags || []).some((t) => slugify(t) === tag))
  if (!posts.length) return undefined
  return [`# Posts tagged ${tag}`, '', ...posts.map(postLine), ''].join('\n')
}

export function notFoundMarkdown(): string {
  return [
    '# Page not found',
    '',
    `The page you asked for does not exist on ${siteMetadata.siteUrl.replace('https://', '')}, the blog of ${authorName} on agentic Sitecore development.`,
    '',
    `- [All posts](${absoluteUrl('blog')})`,
    `- [llms.txt](${absoluteUrl('llms.txt')})`,
    `- [Sitemap](${absoluteUrl('sitemap.xml')})`,
    '',
  ].join('\n')
}

function safeDecode(s: string): string {
  try {
    return decodeURIComponent(s)
  } catch {
    return s
  }
}

/** Markdown for a site path (segments after the site root), or undefined when there is no such page. */
export function markdownForPath(segments: string[]): string | undefined {
  const parts = segments.map(safeDecode)
  const [first, ...rest] = parts
  if (!first) return homeMarkdown()
  if (first === 'about' && !rest.length) return aboutMarkdown()
  if (first === 'contact' && !rest.length) return trustPageToMarkdown(contactPage, absoluteUrl)
  if (first === 'privacy' && !rest.length) return trustPageToMarkdown(privacyPage, absoluteUrl)
  if (first === 'tags') {
    if (!rest.length) return tagsMarkdown()
    if (rest.length === 1) return tagMarkdown(rest[0])
    return undefined
  }
  if (first === 'blog') {
    if (!rest.length || (rest[0] === 'page' && rest.length === 2 && /^\d+$/.test(rest[1]))) {
      return blogMarkdown()
    }
    const post = publishedPosts().find((p) => p.slug === rest.join('/'))
    return post ? postMarkdown(post) : undefined
  }
  return undefined
}
