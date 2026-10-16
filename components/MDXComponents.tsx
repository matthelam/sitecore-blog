import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'
import Figure from './design-system/templates/Figure'
import GatedFlow from './design-system/organisms/GatedFlow'
import LayerParallel from './design-system/organisms/LayerParallel'
import MandateCheckout from './design-system/organisms/MandateCheckout'
import SkillComposition from './design-system/organisms/SkillComposition'
import StepThrough from './design-system/organisms/StepThrough'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
  Figure,
  GatedFlow,
  LayerParallel,
  MandateCheckout,
  SkillComposition,
  StepThrough,
}
