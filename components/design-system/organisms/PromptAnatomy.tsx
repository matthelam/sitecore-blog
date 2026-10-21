'use client'

import { Fragment, useId, useState } from 'react'
import Eyebrow from '../atoms/Eyebrow'
import Surface from '../atoms/Surface'
import TabList from '../molecules/TabList'
import type { PromptRound, PromptView } from '../types'

// Organism: real prompts, one per tab, with spans marked by kind. A view shows one kind of mark
// at a time (numbered underlines in the prompt, the same numbers in the notes below). When a view
// has a countLabel, it also shows how many of the prompt's words fall inside its marks: the
// number is derived from the prompt and the marks, never written into the component.

type PromptAnatomyProps = {
  label: string
  rounds: PromptRound[]
  views: PromptView[]
  initialView?: number
}

const words = (text: string) => text.split(/\s+/).filter(Boolean).length

type Segment = { text: string; mark?: number }

// Splits the prompt into plain text and marked spans, in order. Marks that are not found, or that
// overlap an earlier mark, are skipped.
const segment = (prompt: string, marks: { text: string }[]): Segment[] => {
  const found = marks
    .map((mark, index) => ({ index, start: prompt.indexOf(mark.text), length: mark.text.length }))
    .filter((m) => m.start >= 0)
    .sort((a, b) => a.start - b.start)
  const out: Segment[] = []
  let at = 0
  for (const m of found) {
    if (m.start < at) continue
    if (m.start > at) out.push({ text: prompt.slice(at, m.start) })
    out.push({ text: prompt.slice(m.start, m.start + m.length), mark: m.index })
    at = m.start + m.length
  }
  if (at < prompt.length) out.push({ text: prompt.slice(at) })
  return out
}

const PromptAnatomy = ({ label, rounds, views, initialView = 0 }: PromptAnatomyProps) => {
  const [active, setActive] = useState(0)
  const [viewIndex, setViewIndex] = useState(initialView)
  const id = useId()
  const view = views[viewIndex]

  return (
    <div role="group" aria-label={label} className="flex flex-col gap-4 font-sans text-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <TabList
          label={`${label}: rounds`}
          idBase={id}
          active={active}
          onChange={setActive}
          tabs={rounds.map((round) => (
            <span key={round.round} className="tabular-nums">
              {round.round}
            </span>
          ))}
        />
        <div role="group" aria-label="View" className="flex flex-wrap gap-2">
          {views.map((v, index) => (
            <button
              key={v.kind}
              type="button"
              aria-pressed={index === viewIndex}
              onClick={() => setViewIndex(index)}
              className={`focus-visible:outline-ds-emphasis-line rounded-full border px-3 py-1 text-xs transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none ${
                index === viewIndex
                  ? 'border-ds-emphasis-line bg-ds-emphasis-fill text-ds-ink font-semibold'
                  : 'border-ds-line text-ds-ink-muted hover:border-ds-line-strong'
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      {rounds.map((round, index) => {
        const marks = round.marks
          .map((mark, i) => ({ ...mark, i }))
          .filter((mark) => mark.kind === view.kind)
        const segments = segment(round.prompt, marks)
        const number = new Map(marks.map((mark, n) => [mark.i, n + 1]))
        const visible = marks.map((mark) => round.marks[mark.i])
        const markedWords = segments
          .filter((s) => s.mark !== undefined)
          .reduce((sum, s) => sum + words(s.text), 0)
        const totalWords = words(round.prompt)

        return (
          <div
            key={round.round}
            role="tabpanel"
            id={`${id}-panel-${index}`}
            aria-labelledby={`${id}-tab-${index}`}
            hidden={index !== active}
            className="flex flex-col gap-3"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p className="text-ds-ink text-base font-semibold">{round.title}</p>
              {view.countLabel && (
                <p className="text-ds-ink-muted tabular-nums" aria-live="polite">
                  <strong className="text-ds-ink">{markedWords}</strong> of {totalWords}{' '}
                  {view.countLabel}
                </p>
              )}
            </div>

            <Surface tone="muted" pad="lg">
              <p className="text-ds-ink font-mono text-[0.8rem] leading-relaxed break-words whitespace-pre-wrap">
                {segments.map((s, k) =>
                  s.mark === undefined ? (
                    <Fragment key={k}>{s.text}</Fragment>
                  ) : (
                    <mark
                      key={k}
                      className="bg-ds-emphasis-fill text-ds-ink decoration-ds-emphasis-line rounded-sm px-0.5 underline decoration-2 underline-offset-4"
                    >
                      {s.text}
                      <sup className="text-ds-ink-muted ml-0.5 font-sans font-semibold">
                        {number.get(s.mark)}
                      </sup>
                    </mark>
                  )
                )}
              </p>
            </Surface>

            {visible.length > 0 ? (
              <ol className="flex flex-col gap-2">
                {visible.map((mark, n) => (
                  <li key={n} className="flex gap-3">
                    <span className="text-ds-ink w-4 shrink-0 text-right font-semibold tabular-nums">
                      {n + 1}
                    </span>
                    <span className="leading-relaxed">{mark.note}</span>
                  </li>
                ))}
              </ol>
            ) : (
              <Eyebrow>Nothing marked in this view</Eyebrow>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default PromptAnatomy
