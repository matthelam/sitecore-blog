'use client'

import { useId, useState } from 'react'
import Eyebrow from '../atoms/Eyebrow'
import Icon from '../atoms/Icon'
import Surface from '../atoms/Surface'
import type { CountField } from '../types'

// Organism: editable values with a live character count, set beside what the chat claimed and
// the rule the value must meet. The reader can edit and watch the count; Reset puts back the
// values the post passed in. A broken rule uses the negative role, with the cross and words.

type CountCheckProps = {
  label: string
  fields: CountField[]
  claimedLabel: string
  passLabel: string
  failLabel: string
  resetLabel: string
}

// Counts characters as people see them (code points), so "$" and spaces count once each.
const count = (text: string) => Array.from(text).length

const CountCheck = ({
  label,
  fields,
  claimedLabel,
  passLabel,
  failLabel,
  resetLabel,
}: CountCheckProps) => {
  const [values, setValues] = useState(fields.map((field) => field.value))
  const id = useId()
  const changed = values.some((value, index) => value !== fields[index].value)

  return (
    <div role="group" aria-label={label} className="flex flex-col gap-4 font-sans text-sm">
      {fields.map((field, index) => {
        const n = count(values[index])
        const pass = n <= field.max && (field.min === undefined || n >= field.min)
        const inputId = `${id}-${index}`
        const Input = field.multiline ? 'textarea' : 'input'
        return (
          <div key={field.label} className="flex flex-col gap-2">
            <label htmlFor={inputId}>
              <Eyebrow>{field.label}</Eyebrow>
            </label>
            <Input
              id={inputId}
              value={values[index]}
              onChange={(event) =>
                setValues(values.map((v, i) => (i === index ? event.target.value : v)))
              }
              {...(Input === 'textarea' ? {} : { type: 'text' })}
              className={`border-ds-line bg-ds-surface text-ds-ink focus-visible:outline-ds-emphasis-line w-full rounded-md border px-3 py-2 font-mono text-[0.8rem] leading-relaxed focus-visible:outline-2 focus-visible:outline-offset-1 ${
                field.multiline ? 'field-sizing-content min-h-20 resize-none' : ''
              }`}
            />
            <div
              className="flex flex-wrap items-center gap-x-4 gap-y-2"
              aria-live="polite"
              aria-atomic="true"
            >
              <span className="text-ds-ink tabular-nums">
                <strong className="text-base">{n}</strong> characters
              </span>
              <span className="text-ds-ink-muted">
                {claimedLabel}: <span className="tabular-nums">{field.claimed}</span>
              </span>
              {pass ? (
                <Surface tone="plain" pad="sm" className="flex items-center gap-1.5 text-xs">
                  <Icon name="check" />
                  {passLabel}: {field.rule}
                </Surface>
              ) : (
                <Surface
                  tone="negative"
                  pad="sm"
                  className="flex items-center gap-1.5 text-xs font-semibold"
                >
                  <Icon name="cross" />
                  {failLabel}: {field.rule}
                </Surface>
              )}
            </div>
          </div>
        )
      })}
      {changed && (
        <button
          type="button"
          onClick={() => setValues(fields.map((field) => field.value))}
          className="border-ds-line text-ds-ink-muted hover:border-ds-line-strong focus-visible:outline-ds-emphasis-line self-start rounded-md border px-3 py-1 text-xs focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          {resetLabel}
        </button>
      )}
    </div>
  )
}

export default CountCheck
