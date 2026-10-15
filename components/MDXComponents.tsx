import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'
import Figure from './visuals/Figure'
import GatedFlow from './visuals/GatedFlow'
import LayerParallel from './visuals/LayerParallel'
import MandateCheckout from './visuals/MandateCheckout'
import SkillComposition from './visuals/SkillComposition'
import StepThrough from './visuals/StepThrough'

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
