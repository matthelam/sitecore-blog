import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'
import Figure from './design-system/templates/Figure'
import AnnotatedScreenshot from './design-system/organisms/AnnotatedScreenshot'
import CountCheck from './design-system/organisms/CountCheck'
import FieldSets from './design-system/organisms/FieldSets'
import GatedFlow from './design-system/organisms/GatedFlow'
import LayerParallel from './design-system/organisms/LayerParallel'
import MandateCheckout from './design-system/organisms/MandateCheckout'
import PerspectiveTabs from './design-system/organisms/PerspectiveTabs'
import PromptAnatomy from './design-system/organisms/PromptAnatomy'
import ProfileMatrix from './design-system/organisms/ProfileMatrix'
import SeriesOverview from './design-system/organisms/SeriesOverview'
import SkillComposition from './design-system/organisms/SkillComposition'
import StepThrough from './design-system/organisms/StepThrough'
import TeamProfiles from './design-system/organisms/TeamProfiles'
import WhoCarries from './design-system/organisms/WhoCarries'
import YouTubePlayer from './design-system/organisms/YouTubePlayer'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
  Figure,
  AnnotatedScreenshot,
  CountCheck,
  FieldSets,
  GatedFlow,
  LayerParallel,
  MandateCheckout,
  PerspectiveTabs,
  PromptAnatomy,
  ProfileMatrix,
  SeriesOverview,
  SkillComposition,
  StepThrough,
  TeamProfiles,
  WhoCarries,
  YouTubePlayer,
}
