import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import JsonLd from '@/components/JsonLd'
import { webPageSchema } from '@/data/schema'
import ListLayout from '@/layouts/ListLayoutWithTags'

const POSTS_PER_PAGE = 5

const PAGE = {
  title: 'Blog - Matt Lam on Agentic Sitecore Development',
  description:
    "Matt Lam's posts in one place: Sitecore Agentic Studio, agent context engineering, Claude Code, Sitecore XM Cloud, and Azure Entra ID SSO for Sitecore.",
}

export const metadata = genPageMetadata({ ...PAGE, absoluteTitle: true })

export default async function BlogPage(props: { searchParams: Promise<{ page: string }> }) {
  const posts = allCoreContent(sortPosts(allBlogs))
  const pageNumber = 1
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE * pageNumber)
  const pagination = {
    currentPage: pageNumber,
    totalPages: totalPages,
  }

  return (
    <>
      <JsonLd data={webPageSchema('CollectionPage', 'blog', PAGE)} />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Posts"
      />
    </>
  )
}
