import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import JsonLd from '@/components/JsonLd'
import { profilePageSchema } from '@/data/schema'

export const metadata = genPageMetadata({
  title: 'About Matt Lam (Matthew Lam), Technical Architect at Aceik',
  description:
    'Matt Lam (Matthew Lam, Matthelam) is a Sitecore Technical Architect at Aceik in Adelaide, writing about agentic Sitecore development and agent memory.',
  absoluteTitle: true,
})

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <JsonLd data={profilePageSchema()} />
      <AuthorLayout content={mainContent}>
        <p>
          I&apos;m Matt Lam (Matthew Lam, or Matthelam on GitHub), a Technical Architect at Aceik in
          Adelaide, South Australia. I work on Sitecore XM Cloud implementations, and my writing
          here is about agentic Sitecore development and the persistent memory that agent work
          depends on.
        </p>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
    </>
  )
}
