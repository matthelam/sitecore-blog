import type { ReactNode } from 'react'

// Atom: the small uppercase label above a column, lane or box ("CMS WORLD", "GATE").
// Renders a span so it can sit inside any box; block unless inline.

type EyebrowProps = {
  align?: 'left' | 'center'
  inline?: boolean
  children: ReactNode
}

const Eyebrow = ({ align = 'left', inline = false, children }: EyebrowProps) => (
  <span
    className={`text-ds-ink-subtle text-xs font-semibold tracking-wide uppercase ${inline ? '' : 'block'} ${align === 'center' ? 'text-center' : ''}`}
  >
    {children}
  </span>
)

export default Eyebrow
