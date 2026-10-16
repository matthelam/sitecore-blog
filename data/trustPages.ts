/**
 * Copy for /contact and /privacy. The HTML pages and the Markdown route
 * (app/md/[[...path]]/route.ts) both render from here, so the two never drift.
 *
 * REVIEW (Matt): every sentence here is drawn from data/authors/default.mdx,
 * data/siteMetadata.js or what the code does. Read both pages before they go live.
 */
import siteMetadata from './siteMetadata'

export interface TrustLink {
  label: string
  href: string
}

export interface TrustSection {
  heading: string
  paragraphs: string[]
  links?: TrustLink[]
}

export interface TrustPage {
  path: string
  title: string
  description: string
  intro: string
  sections: TrustSection[]
}

export const contactPage: TrustPage = {
  path: 'contact',
  title: 'Contact Matt Lam',
  description:
    'How to contact Matt Lam (Matthew Lam, Matthelam), a Sitecore Technical Architect at Aceik in Adelaide, South Australia: email, LinkedIn and GitHub.',
  intro:
    "I'm Matt Lam, a Technical Architect at Aceik based in Adelaide, South Australia. You can reach me by email, on LinkedIn or on GitHub.",
  sections: [
    {
      heading: 'Where to find me',
      paragraphs: [],
      links: [
        { label: `Email: ${siteMetadata.email}`, href: `mailto:${siteMetadata.email}` },
        { label: 'LinkedIn', href: siteMetadata.linkedin as string },
        { label: 'GitHub (matthelam)', href: siteMetadata.github as string },
      ],
    },
    {
      heading: 'What to get in touch about',
      paragraphs: [
        'At Aceik I lead implementations across composable architectures, with a focus on Sitecore XM Cloud, headless frameworks (Next.js/JSS), Azure DevOps pipelines and enterprise integration patterns.',
        'On this blog I write about agentic Sitecore development: Sitecore Agentic Studio, SitecoreAI, and the agent context and memory that AI work on Sitecore depends on.',
        "I'm passionate about helping to grow and represent the Sitecore community in South Australia.",
      ],
    },
    {
      heading: 'About this blog',
      paragraphs: [
        'The source for this blog, including every post, is public on GitHub. Each post has a View on GitHub link at the bottom of the page.',
      ],
      links: [{ label: 'Blog source on GitHub', href: siteMetadata.siteRepo as string }],
    },
  ],
}

export const privacyPage: TrustPage = {
  path: 'privacy',
  title: 'Privacy',
  description:
    'What matthelam.com does with visitor data: Vercel Web Analytics, browser storage for the theme setting, local search, and no accounts, comments or newsletter.',
  intro:
    "This is Matt Lam's personal blog at matthelam.com. It has no accounts, no sign-up forms, no comments and no newsletter. This page describes what the site does with visitor data, based on how the site is built.",
  sections: [
    {
      heading: 'Analytics',
      paragraphs: [
        'The site uses Vercel Web Analytics (the @vercel/analytics package) to measure visits to its pages.',
      ],
    },
    {
      heading: 'Cookies and browser storage',
      paragraphs: [
        'The site\'s own code does not set cookies. The light or dark theme you choose is remembered in your browser\'s local storage under the key "theme", on your device only.',
      ],
    },
    {
      heading: 'Search',
      paragraphs: [
        'Search runs in your browser. The site loads a search index file (/search.json) from this same site and searches it locally, so your search terms are not sent to a third-party search service.',
      ],
    },
    {
      heading: 'Hosting',
      paragraphs: ['The site is hosted on Vercel.'],
    },
    {
      heading: 'Email and links to other sites',
      paragraphs: [
        "If you email me, I receive the address and the message you send. Links to other sites, such as GitHub, LinkedIn and Sitecore documentation, are governed by those sites' own privacy policies.",
        'If you have a question about this page, get in touch using the contact page.',
      ],
      links: [{ label: 'Contact', href: '/contact' }],
    },
  ],
}

export function trustPageToMarkdown(page: TrustPage, absolute: (p: string) => string): string {
  const out = [`# ${page.title}`, '', page.intro, '']
  for (const section of page.sections) {
    out.push(`## ${section.heading}`, '')
    for (const p of section.paragraphs) out.push(p, '')
    if (section.links) {
      for (const l of section.links) {
        const href = l.href.startsWith('/') ? absolute(l.href) : l.href
        out.push(`- [${l.label}](${href})`)
      }
      out.push('')
    }
  }
  return out.join('\n')
}
