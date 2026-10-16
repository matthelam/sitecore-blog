import Eyebrow from '../atoms/Eyebrow'
import Icon from '../atoms/Icon'
import Surface from '../atoms/Surface'
import type { FlowStep } from '../types'

// Molecule: one step of a workflow. A gate is marked by emphasis, a pause icon and the word
// "Gate", so the meaning never rests on colour alone.

const FlowNode = ({ step }: { step: FlowStep }) =>
  step.gate ? (
    <Surface tone="emphasis">
      <span className="text-ds-ink-muted flex items-center gap-1.5">
        <Icon name="pause" size={10} />
        <Eyebrow inline>Gate</Eyebrow>
      </span>
      <span className="block font-semibold">{step.label}</span>
      {step.detail && (
        <span className="text-ds-ink-muted mt-0.5 block text-xs leading-snug">{step.detail}</span>
      )}
    </Surface>
  ) : (
    <Surface tone="plain" className="text-center">
      {step.label}
    </Surface>
  )

export default FlowNode
