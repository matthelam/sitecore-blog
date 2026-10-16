import type { ReactNode } from 'react'

// Atom: small inline icons. Colour comes from the parent's text colour (currentColor), so an icon
// always matches the words it sits beside. Decorative by default: pair it with words.

export type IconName = 'pause' | 'duplicate' | 'check' | 'cross'

const paths: Record<IconName, ReactNode> = {
  pause: (
    <>
      <rect x="2" y="2" width="3" height="8" fill="currentColor" />
      <rect x="7" y="2" width="3" height="8" fill="currentColor" />
    </>
  ),
  duplicate: (
    <>
      <rect
        x="1"
        y="3"
        width="7"
        height="8"
        rx="1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <rect
        x="4"
        y="1"
        width="7"
        height="8"
        rx="1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </>
  ),
  check: <path d="M2 6.5 L5 9.5 L10 2.5" fill="none" stroke="currentColor" strokeWidth="1.6" />,
  cross: (
    <path
      d="M2.5 2.5 L9.5 9.5 M9.5 2.5 L2.5 9.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
  ),
}

type IconProps = {
  name: IconName
  size?: number
}

const Icon = ({ name, size = 12 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 12 12" aria-hidden="true" className="shrink-0">
    {paths[name]}
  </svg>
)

export default Icon
