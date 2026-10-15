import { genPageMetadata } from 'app/seo'
import TrustPageView from '@/components/TrustPageView'
import { privacyPage } from '@/data/trustPages'

export const metadata = genPageMetadata({
  title: privacyPage.title,
  description: privacyPage.description,
})

export default function Page() {
  return <TrustPageView page={privacyPage} />
}
