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
