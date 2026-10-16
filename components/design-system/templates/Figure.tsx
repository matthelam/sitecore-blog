import type { ReactNode } from 'react'

// Template: the frame every visual sits in. The caption states the claim the visual makes.

type FigureProps = {
  caption: ReactNode
  children: ReactNode
}

const Figure = ({ caption, children }: FigureProps) => (
  <figure className="not-prose my-8">
    <div className="border-ds-line bg-ds-surface rounded-lg border p-4 sm:p-6">{children}</div>
    <figcaption className="text-ds-ink-subtle mt-3 text-sm leading-relaxed">{caption}</figcaption>
  </figure>
)

export default Figure
