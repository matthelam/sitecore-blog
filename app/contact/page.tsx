import { genPageMetadata } from 'app/seo'
import TrustPageView from '@/components/TrustPageView'
import { contactPage } from '@/data/trustPages'

export const metadata = genPageMetadata({
  title: contactPage.title,
  description: contactPage.description,
  absoluteTitle: true,
})

export default function Page() {
  return <TrustPageView page={contactPage} />
}
