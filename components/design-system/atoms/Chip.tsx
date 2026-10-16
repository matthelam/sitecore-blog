import type { ReactNode } from 'react'
import Icon, { type IconName } from './Icon'

// Atom: a small labelled item inside a card or list.
// - solid: a capability the parent carries
// - inverse: the parent's own core (e.g. an agent's specialist knowledge)
// - dashed: available on demand, not carried

type ChipProps = {
  variant?: 'solid' | 'inverse' | 'dashed'
  icon?: IconName
  // Spoken after the label for screen readers when the icon carries meaning.
  srLabel?: string
  children: ReactNode
}

const variants = {
  solid: 'border border-ds-line bg-ds-surface-muted text-ds-ink',
  inverse: 'bg-ds-inverse-fill text-ds-inverse-ink',
  dashed: 'border border-dashed border-ds-advisory-line text-ds-ink-muted',
}

const Chip = ({ variant = 'solid', icon, srLabel, children }: ChipProps) => (
  <span
    className={`flex items-center gap-1.5 rounded px-2 py-1 text-xs leading-snug ${variants[variant]}`}
  >
    {icon && (
      <span className="text-ds-ink-subtle">
        <Icon name={icon} />
      </span>
    )}
    <span>{children}</span>
    {srLabel && <span className="sr-only">({srLabel})</span>}
  </span>
)

export default Chip
