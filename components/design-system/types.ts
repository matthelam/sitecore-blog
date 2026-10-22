// Shared prop shapes for the design system. Organisms take these from a post's MDX, so a post
// can describe a flow, a layer stack or an agent team once and any organism can draw it.

/** One step of a workflow. A gate is where the workflow pauses and checks before moving on. */
export type FlowStep = {
  label: string
  gate?: boolean
  detail?: string
}

/** A named workflow: one lane of a GatedFlow. */
export type Lane = {
  label: string
  steps: FlowStep[]
}

/** One column of a LayerParallel: a world and its layers, top to bottom. */
export type LayerColumn = {
  heading: string
  layers: string[]
}

/** An agent: its own core (never counted as duplication) and the capabilities it carries. */
export type Agent = {
  name: string
  core: string
  items?: string[]
}

/** Skills held once, outside the agents, loaded when a task needs them. */
export type SkillLibrary = {
  title: string
  items: string[]
  edge: string
}

/** One side of a SkillComposition comparison. */
export type SkillPanel = {
  title: string
  note: string
  agents: Agent[]
  library?: SkillLibrary
}

/** One step of a StepThrough sequence. */
export type SequenceStep = {
  node: string
  detail: string
  edge?: string
}

/** One numbered callout on an AnnotatedScreenshot: where it points, as a percentage of the
 * image's width (x) and height (y), and what it marks. */
export type Callout = {
  x: number
  y: number
  label: string
  detail?: string
}

/** One thinking dimension an agent can lean on, with what each end of it looks like in practice. */
export type CognitiveDimension = {
  name: string
  low: string
  high: string
}

/** One of the four styles in the corners of a ProfileMatrix. `leanings` holds 0..1 per dimension
 * name; `thinks` are the two first-person thoughts used when this style is primary, and
 * `asSecondary` is a full sentence shown as an extra thought when it is the secondary. */
export type WorkingStyle = {
  name: string
  gist: string
  thinks: string[]
  asSecondary: string
  leanings: Record<string, number>
}

/** One profile's reading of a shared prompt: one tab of a PerspectiveTabs. */
export type Perspective = {
  name: string
  tag: string
  rows: { label: string; text: string }[]
}

/** One role in a TeamProfiles chart: its simplified cognitive profile. */
export type TeamRole = {
  name: string
  profile: string
  thinks: string
  prioritises: string[]
  defocuses: string[]
}

/** A group of roles shown side by side (equals, not a hierarchy). */
export type TeamGroup = {
  name: string
  roles: TeamRole[]
}

/** One stage of a SeriesOverview: its number, name, the quality it adds, and labelled rows. */
export type SeriesStage = {
  number: string
  name: string
  status: string
  rows: { label: string; text: string }[]
  /** Optional further reading for the stage; opens in a new tab. */
  source?: { label: string; href: string }
  /** The stage's task section; a stage without one shows SeriesOverview's pending text. */
  detail?: SeriesStageDetail
}

/** The task section of one SeriesOverview stage. */
export type SeriesStageDetail = {
  eyebrow: string
  headline: string
  rows: { label: string; text: string }[]
}

/** One marked span in a PromptAnatomy prompt. `text` must appear verbatim in the prompt. */
export type PromptMark = {
  text: string
  kind: string
  note: string
}

/** One round of a PromptAnatomy: the prompt as sent and its marked spans. */
export type PromptRound = {
  round: string
  title: string
  prompt: string
  marks: PromptMark[]
}

/** One view of a PromptAnatomy: which kind of mark it shows. `countLabel` turns on a word count
 * of the marked text ("words of guardrail text"). */
export type PromptView = {
  kind: string
  label: string
  countLabel?: string
}

/** One set of fields in a FieldSets comparison. */
export type FieldSet = {
  heading: string
  rendered: boolean
  fields: { name: string; output?: string }[]
  note?: string
  flag?: string
}

/** One editable value in a CountCheck: what the chat claimed and the rule it must meet. */
export type CountField = {
  label: string
  value: string
  claimed: string
  min?: number
  max: number
  rule: string
  multiline?: boolean
}

/** A box in a WhoCarries diagram. */
export type CarryNode = {
  name: string
  lines: string[]
}
