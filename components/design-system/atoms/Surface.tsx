import type { ReactNode } from 'react'

// Atom: every box in the design system. The tone says what the box means; components never pick
// colours themselves.
// - plain: an ordinary item
// - muted: a panel or grouping background
// - emphasis: "look here" (neutral, never the brand red)
// - negative: a genuinely failed or rejected state (pair with an icon and words)
// - advisory: optional, upcoming or on demand (dashed)
// - inverse: solid, for an item's own core

export type SurfaceTone = 'plain' | 'muted' | 'emphasis' | 'negative' | 'advisory' | 'inverse'

const tones: Record<SurfaceTone, string> = {
  plain: 'border border-ds-line bg-ds-surface text-ds-ink',
  muted: 'bg-ds-surface-muted text-ds-ink',
  emphasis: 'border-2 border-ds-emphasis-line bg-ds-emphasis-fill text-ds-ink',
  negative: 'border-2 border-ds-negative-line bg-ds-negative-fill text-ds-negative-ink',
  advisory: 'border border-dashed border-ds-advisory-line bg-ds-surface text-ds-ink-muted',
  inverse: 'bg-ds-inverse-fill text-ds-inverse-ink',
}

const pads = { none: '', sm: 'px-2 py-1', md: 'px-3 py-2', lg: 'p-3' }

type SurfaceProps = {
  tone?: SurfaceTone
  pad?: keyof typeof pads
  // Layout-only classes (flex, grid, width, text alignment). Never colours.
  className?: string
  children: ReactNode
}

const Surface = ({ tone = 'plain', pad = 'md', className = '', children }: SurfaceProps) => (
  <div className={`rounded-md ${tones[tone]} ${pads[pad]} ${className}`}>{children}</div>
)

export default Surface
