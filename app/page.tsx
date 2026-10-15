import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import JsonLd from '@/components/JsonLd'
import { genPageMetadata } from 'app/seo'
import { personSchema, websiteSchema, SCHEMA_CONTEXT } from '@/data/schema'

export const metadata = genPageMetadata({
  title: 'Agentic Sitecore Development by Matt Lam (Matthelam)',
  description:
    'Matt Lam writes about agentic Sitecore development: Sitecore Agentic Studio, SitecoreAI, AI-assisted Sitecore work and the agent context behind it.',
  absoluteTitle: true,
})

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return (
    <>
      <JsonLd data={[websiteSchema(), { '@context': SCHEMA_CONTEXT, ...personSchema() }]} />
      <Main posts={posts} />
    </>
  )
}
