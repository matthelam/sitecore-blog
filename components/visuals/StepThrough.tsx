'use client'

import { useRef, useState, type KeyboardEvent } from 'react'

type Step = {
  node: string
  detail: string
  // Label for the arrow from this step to the next one.
  edge?: string
}

type StepThroughProps = {
  label: string
  steps: Step[]
}

const nodeClass = (index: number, active: number) => {
  if (index === active) {
    return 'border-gray-900 bg-gray-100 font-semibold text-gray-900 dark:border-gray-100 dark:bg-gray-800 dark:text-gray-100'
  }
  if (index < active) {
    return 'border-gray-400 bg-white text-gray-800 dark:border-gray-500 dark:bg-gray-900 dark:text-gray-200'
  }
  return 'border-dashed border-gray-300 bg-white text-gray-500 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-400'
}

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
              className={`rounded-md border-2 px-3 py-2 text-left transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 motion-reduce:transition-none dark:focus-visible:outline-gray-100 ${nodeClass(index, active)}`}
            >
              <span className="mr-2 text-xs text-gray-400 tabular-nums">{index + 1}</span>
              {step.node}
            </button>
            {index < last && (
              <div className="flex items-center gap-2 py-1 pl-5" aria-hidden="true">
                <svg width="10" height="22" viewBox="0 0 10 22" className="shrink-0">
                  <line
                    x1="5"
                    y1="0"
                    x2="5"
                    y2="16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray={index + 1 > active ? '3 3' : undefined}
                    className={
                      index + 1 === active ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400'
                    }
                  />
                  <polygon
                    points="1,15 9,15 5,21"
                    className={
                      index + 1 === active
                        ? 'fill-gray-700 dark:fill-gray-300'
                        : 'fill-gray-400 dark:fill-gray-500'
                    }
                  />
                </svg>
                {step.edge && (
                  <span className="text-xs text-gray-500 italic dark:text-gray-400">
                    {step.edge}
                  </span>
                )}
              </div>
            )}
          </li>
        ))}
      </ol>

      <div className="flex flex-col gap-4 self-start rounded-md bg-gray-50 p-4 dark:bg-gray-800">
        <div aria-live="polite">
          <p className="text-xs text-gray-500 tabular-nums dark:text-gray-400">
            Step {active + 1} of {steps.length}
          </p>
          <p className="mt-1 text-base font-semibold text-gray-900 dark:text-gray-100">
            {steps[active].node}
          </p>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-gray-300">
            {steps[active].detail}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => go(active - 1)}
            disabled={active === 0}
            className="rounded-md border border-gray-300 px-3 py-1.5 text-gray-800 disabled:opacity-40 dark:border-gray-600 dark:text-gray-200"
          >
            Back
          </button>
          <button
            type="button"
            onClick={() => go(active + 1)}
            disabled={active === last}
            className="rounded-md bg-gray-900 px-3 py-1.5 text-white hover:bg-gray-700 disabled:opacity-40 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-300"
          >
            Next step
          </button>
        </div>
      </div>
    </div>
  )
}

export default StepThrough
