import type { ReactNode } from 'react'

type FigureProps = {
  caption: ReactNode
  children: ReactNode
}

const Figure = ({ caption, children }: FigureProps) => (
  <figure className="not-prose my-8">
    <div className="rounded-lg border border-gray-200 bg-white p-4 sm:p-6 dark:border-gray-700 dark:bg-gray-900">
      {children}
    </div>
    <figcaption className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
      {caption}
    </figcaption>
  </figure>
)

export default Figure
