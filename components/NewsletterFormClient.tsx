'use client'
import dynamic from 'next/dynamic'

// Client-only version of the pliny NewsletterForm (default export) to avoid hydration mismatches
// from extension-injected attributes before React hydrates.
const NewsletterForm = dynamic(() => import('pliny/ui/NewsletterForm'), {
  ssr: false,
  loading: () => null,
})

export default NewsletterForm