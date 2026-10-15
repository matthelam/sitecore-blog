import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'

interface PageSEOProps {
  title: string
  description?: string
  image?: string
  /** Use the title exactly as given, without the " | site title" suffix from the root layout. */
  absoluteTitle?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export function genPageMetadata({
  title,
  description,
  image,
  absoluteTitle,
  ...rest
}: PageSEOProps): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${siteMetadata.title}`
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description: description || siteMetadata.description,
    openGraph: {
      title: fullTitle,
      description: description || siteMetadata.description,
      url: './',
      siteName: siteMetadata.title,
      images: image ? [image] : [siteMetadata.socialBanner],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      title: fullTitle,
      card: 'summary_large_image',
      images: image ? [image] : [siteMetadata.socialBanner],
    },
    ...rest,
  }
}
