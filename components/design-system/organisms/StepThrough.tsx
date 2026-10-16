'use client'

import { useRef, useState, type KeyboardEvent } from 'react'
import Arrow from '../atoms/Arrow'
import Surface from '../atoms/Surface'
import type { SequenceStep } from '../types'

// Organism: an ordered sequence the reader moves through one step at a time. The active step
// is emphasised, passed steps are plain and upcoming steps are dashed (advisory).

type StepThroughProps = {
  label: string
  steps: SequenceStep[]
}

const nodeClass = (index: number, active: number) => {
  if (index === active)
    return 'border-ds-emphasis-line bg-ds-emphasis-fill text-ds-ink font-semibold'
  if (index < active) return 'border-ds-line-strong bg-ds-surface text-ds-ink'
  return 'border-dashed border-ds-advisory-line bg-ds-surface text-ds-ink-subtle'
}

const buttonBase =
  'focus-visible:outline-ds-emphasis-line rounded-md px-3 py-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-40'

const StepThrough = ({ label, steps }: StepThroughProps) => {
  const [active, setActive] = useState(0)
  const nodeRefs = useRef<(HTMLButtonElement | null)[]>([])
  const last = steps.length - 1
  const go = (index: number) => setActive(Math.max(0, Math.min(last, index)))

  // Arrow keys move between the step buttons themselves, so focus and the active step stay together.
  const onNodeKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const delta =
      event.key === 'ArrowDown' || event.key === 'ArrowRight'
        ? 1
        : event.key === 'ArrowUp' || event.key === 'ArrowLeft'
          ? -1
          : 0
    if (delta === 0) return
    event.preventDefault()
    const next = Math.max(0, Math.min(last, index + delta))
    go(next)
    nodeRefs.current[next]?.focus()
  }

  return (
    <div
      role="group"
      aria-label={label}
      className="grid gap-6 font-sans text-sm md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)]"
    >
      <ol className="flex flex-col">
        {steps.map((step, index) => (
          <li key={step.node} className="flex flex-col items-stretch">
            <button
              type="button"
              ref={(element) => {
                nodeRefs.current[index] = element
              }}
              onClick={() => go(index)}
              onKeyDown={(event) => onNodeKeyDown(event, index)}
              aria-current={index === active ? 'step' : undefined}
              className={`focus-visible:outline-ds-emphasis-line rounded-md border-2 px-3 py-2 text-left transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none ${nodeClass(index, active)}`}
            >
              <span className="text-ds-ink-subtle mr-2 text-xs tabular-nums">{index + 1}</span>
              {step.node}
            </button>
            {index < last && (
              <div className="flex items-center gap-2 pl-4">
                <Arrow dashed={index + 1 > active} />
                {step.edge && (
                  <span className="text-ds-ink-subtle text-xs italic">{step.edge}</span>
                )}
              </div>
            )}
          </li>
        ))}
      </ol>

      <Surface tone="muted" pad="lg" className="flex flex-col gap-4 self-start">
        <div aria-live="polite">
          <p className="text-ds-ink-subtle text-xs tabular-nums">
            Step {active + 1} of {steps.length}
          </p>
          <p className="mt-1 text-base font-semibold">{steps[active].node}</p>
          <p className="text-ds-ink-muted mt-2 leading-relaxed">{steps[active].detail}</p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => go(active - 1)}
            disabled={active === 0}
            className={`border-ds-line-strong text-ds-ink border ${buttonBase}`}
          >
            Back
          </button>
          <button
            type="button"
            onClick={() => go(active + 1)}
            disabled={active === last}
            className={`bg-ds-inverse-fill text-ds-inverse-ink hover:opacity-90 ${buttonBase}`}
          >
            Next step
          </button>
        </div>
      </Surface>
    </div>
  )
}

export default StepThrough
