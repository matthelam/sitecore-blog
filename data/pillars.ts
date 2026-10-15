/**
 * Content pillars and series, from brand/brand-kit.md section 2.
 * Each published post has one primary pillar, keyed by post slug (the filename without .mdx).
 * A slug missing from the map has no pillar, so new posts are listed under "Other posts"
 * until they are added here.
 */
export interface Pillar {
  name: string
  slugs: string[]
}

export const pillars: Pillar[] = [
  {
    name: 'Agentic Sitecore in practice',
    slugs: [
      'agentic-studio-agent-export-is-lossy',
      'agentic-studio-builder-license',
      'agentic-studio-debug-pane-browser-caching',
      'agentic-studio-scoped-memory-space',
      'agentic-studio-widgets-do-not-export',
      'the-ai-project-lifecycle-hiding-in-plain-sight-inside-sitecore-agentic-studio',
      'How-to-use-Sitecore-Documentation-in-AI-to-get-better-results',
      'we-dont-build-the-website',
    ],
  },
  {
    name: 'Agent context and memory',
    slugs: [
      'a-legal-framework-for-agent-context',
      'implementing-the-legal-framework',
      'the-trinity-of-clarity-getting-the-results-you-want',
      'three-dimensions-of-agent-context-from-over-engineering-to-orthogonal-design',
      'writing-agent-guidelines-that-actually-work',
      'first-principles-in-agent-conversations-when-to-stop-accommodating-and-start-reasoning',
    ],
  },
  {
    name: 'Agent teams and design patterns',
    slugs: [
      'sub-agents-vs-personas-vs-skills-a-journey-through-code-architecture',
      'composing-agent-teams-by-cognitive-profile',
      'emerging-pattern-in-agentic-systems',
      'the-agent-as-customer-a-practical-build-guide',
    ],
  },
  {
    name: 'Sitecore platform foundations',
    slugs: [
      '01-SSO-Preparation',
      '02-SSO-Entra-ID-Setup',
      '03-SSO-Sitecore-Cloud-Portal-Setup',
      '04-SSO-Content-Hub-Setup',
      'The Leading Slash That Breaks Your Page Static vs Dynamic Placeholders in Sitecore',
    ],
  },
]

export const OTHER_PILLAR = 'Other posts'

export function getPillarName(slug: string): string | undefined {
  return pillars.find((p) => p.slugs.includes(slug))?.name
}

/** Series a post belongs to, derived from the slug or the title prefix. */
export function getSeriesName(slug: string, title: string): string | undefined {
  if (/^0[1-4]-SSO-/.test(slug)) return 'Azure Entra ID SSO for Sitecore'
  if (title.startsWith('Agentic Studio:')) return 'Agentic Studio'
  return undefined
}
