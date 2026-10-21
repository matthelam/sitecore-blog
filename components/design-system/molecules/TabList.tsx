'use client'

import { useRef, type KeyboardEvent, type ReactNode } from 'react'

// Molecule: a row of tabs with the WAI-ARIA keyboard pattern (arrow keys, Home, End; automatic
// activation). The parent owns the selected index and renders the panels, using
// `${idBase}-tab-${i}` and `${idBase}-panel-${i}` to link them. The active tab uses the emphasis
// role, never the brand red.

type TabListProps = {
  label: string
  idBase: string
  tabs: ReactNode[]
  active: number
  onChange: (index: number) => void
  // Layout-only classes for the row (grid or flex). Never colours.
  className?: string
}

const TabList = ({
  label,
  idBase,
  tabs,
  active,
  onChange,
  className = 'flex flex-wrap gap-2',
}: TabListProps) => {
  const refs = useRef<(HTMLButtonElement | null)[]>([])
  const last = tabs.length - 1

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const keys: Record<string, number> = {
      ArrowRight: index === last ? 0 : index + 1,
      ArrowLeft: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    }
    const next = keys[event.key]
    if (next === undefined) return
    event.preventDefault()
    onChange(next)
    refs.current[next]?.focus()
  }

  return (
    <div role="tablist" aria-label={label} className={className}>
      {tabs.map((tab, index) => (
        <button
          key={index}
          type="button"
          role="tab"
          id={`${idBase}-tab-${index}`}
          aria-selected={index === active}
          aria-controls={`${idBase}-panel-${index}`}
          tabIndex={index === active ? 0 : -1}
          ref={(element) => {
            refs.current[index] = element
          }}
          onClick={() => onChange(index)}
          onKeyDown={(event) => onKeyDown(event, index)}
          className={`focus-visible:outline-ds-emphasis-line rounded-md border-2 px-3 py-1.5 text-left transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none ${
            index === active
              ? 'border-ds-emphasis-line bg-ds-emphasis-fill text-ds-ink'
              : 'border-ds-line bg-ds-surface text-ds-ink-muted hover:border-ds-line-strong'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

export default TabList
