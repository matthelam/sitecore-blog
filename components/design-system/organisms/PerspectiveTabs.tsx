'use client'

import { useId, useRef, useState, type KeyboardEvent } from 'react'
import Chip from '../atoms/Chip'
import Eyebrow from '../atoms/Eyebrow'
import Surface from '../atoms/Surface'
import type { Perspective } from '../types'

// Organism: one skill and one prompt, with a tab per profile showing how that profile's thinking
// differs. Every panel stays in the DOM (inactive ones hidden), so the page carries all of them.
// The active tab uses the emphasis role.

type PerspectiveTabsProps = {
  label: string
  context: { label: string; value: string }[]
  perspectives: Perspective[]
  note?: string
}

const PerspectiveTabs = ({ label, context, perspectives, note }: PerspectiveTabsProps) => {
  const [active, setActive] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const id = useId()
  const last = perspectives.length - 1

  // Arrow keys, Home and End move focus and selection together (automatic activation).
  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const next =
      event.key === 'ArrowRight'
        ? index === last
          ? 0
          : index + 1
        : event.key === 'ArrowLeft'
          ? index === 0
            ? last
            : index - 1
          : event.key === 'Home'
            ? 0
            : event.key === 'End'
              ? last
              : null
    if (next === null) return
    event.preventDefault()
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <div role="group" aria-label={label} className="flex flex-col gap-4 font-sans text-sm">
      <Surface tone="muted" pad="lg">
        <dl className="flex flex-col gap-2">
          {context.map((item) => (
            <div key={item.label} className="flex flex-col gap-1 sm:flex-row sm:gap-3">
              <dt className="sm:w-16 sm:shrink-0 sm:pt-0.5">
                <Eyebrow>{item.label}</Eyebrow>
              </dt>
              <dd className="min-w-0 leading-relaxed">{item.value}</dd>
            </div>
          ))}
        </dl>
      </Surface>

      <div role="tablist" aria-label={label} className="flex flex-wrap gap-2">
        {perspectives.map((perspective, index) => (
          <button
            key={perspective.name}
            type="button"
            role="tab"
            id={`${id}-tab-${index}`}
            aria-selected={index === active}
            aria-controls={`${id}-panel-${index}`}
            tabIndex={index === active ? 0 : -1}
            ref={(element) => {
              tabRefs.current[index] = element
            }}
            onClick={() => setActive(index)}
            onKeyDown={(event) => onKeyDown(event, index)}
            className={`focus-visible:outline-ds-emphasis-line rounded-md border-2 px-3 py-1.5 text-left transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none ${
              index === active
                ? 'border-ds-emphasis-line bg-ds-emphasis-fill text-ds-ink font-semibold'
                : 'border-ds-line bg-ds-surface text-ds-ink-muted hover:border-ds-line-strong'
            }`}
          >
            {perspective.name}
          </button>
        ))}
      </div>

      {perspectives.map((perspective, index) => (
        <div
          key={perspective.name}
          role="tabpanel"
          id={`${id}-panel-${index}`}
          aria-labelledby={`${id}-tab-${index}`}
          hidden={index !== active}
        >
          <Surface pad="lg" className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <p className="text-base font-semibold">{perspective.name}</p>
              <Chip>{perspective.tag}</Chip>
            </div>
            <dl className="flex flex-col gap-3">
              {perspective.rows.map((row) => (
                <div key={row.label} className="flex flex-col gap-0.5">
                  <dt>
                    <Eyebrow>{row.label}</Eyebrow>
                  </dt>
                  <dd className="leading-relaxed">{row.text}</dd>
                </div>
              ))}
            </dl>
          </Surface>
        </div>
      ))}

      {note && <p className="text-ds-ink-subtle text-xs leading-relaxed">{note}</p>}
    </div>
  )
}

export default PerspectiveTabs
