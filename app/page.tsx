import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import JsonLd from '@/components/JsonLd'
import { genPageMetadata } from 'app/seo'
import { personSchema, webPageSchema, websiteSchema, SCHEMA_CONTEXT } from '@/data/schema'

const PAGE = {
  title: 'Agentic Sitecore Development by Matt Lam (Matthelam)',
  description:
    'Matt Lam is a Sitecore Technical Architect at Aceik. His blog covers AI-assisted Sitecore development, Sitecore Agentic Studio and agent context engineering.',
}

export const metadata = genPageMetadata({ ...PAGE, absoluteTitle: true })

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return (
    <>
      <JsonLd
        data={[
          webPageSchema('WebPage', '', PAGE),
          websiteSchema(),
          { '@context': SCHEMA_CONTEXT, ...personSchema() },
        ]}
      />
      <Main posts={posts} />
    </>
  )
}
