'use client'

import { useId, useState } from 'react'
import Eyebrow from '../atoms/Eyebrow'
import Surface from '../atoms/Surface'
import TabList from '../molecules/TabList'
import type { SeriesStage } from '../types'

// Organism: a series of stages as tabs, with a panel that never changes beneath them (the
// constant task). Picking a stage shows what it adds; the task panel shows what stays the same.
// Every panel stays in the DOM (inactive ones hidden), so the page carries all of them.

type SeriesOverviewProps = {
  label: string
  stages: SeriesStage[]
  initial?: number
  constant: {
    eyebrow: string
    headline: string
    rows: { label: string; text: string }[]
  }
}

const SeriesOverview = ({ label, stages, initial = 0, constant }: SeriesOverviewProps) => {
  const [active, setActive] = useState(initial)
  const id = useId()

  return (
    <div role="group" aria-label={label} className="flex flex-col gap-4 font-sans text-sm">
      <TabList
        label={label}
        idBase={id}
        active={active}
        onChange={setActive}
        className="grid grid-cols-2 gap-2 sm:grid-cols-5"
        tabs={stages.map((stage) => (
          <span key={stage.number} className="flex flex-col">
            <span className="text-ds-ink-subtle text-xs">Stage {stage.number}</span>
            <span className="text-ds-ink font-semibold">{stage.name}</span>
            <span className="text-ds-ink-subtle text-xs">{stage.status}</span>
          </span>
        ))}
      />

      {stages.map((stage, index) => (
        <div
          key={stage.number}
          role="tabpanel"
          id={`${id}-panel-${index}`}
          aria-labelledby={`${id}-tab-${index}`}
          hidden={index !== active}
        >
          <Surface pad="lg">
            <dl className="flex flex-col gap-3">
              {stage.rows.map((row) => (
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

      <Surface tone="muted" pad="lg" className="flex flex-col gap-3">
        <Eyebrow>{constant.eyebrow}</Eyebrow>
        <p className="text-ds-ink text-base leading-snug font-semibold">{constant.headline}</p>
        <dl className="flex flex-col gap-2">
          {constant.rows.map((row) => (
            <div key={row.label} className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
              <dt className="sm:w-24 sm:shrink-0 sm:pt-0.5">
                <Eyebrow>{row.label}</Eyebrow>
              </dt>
              <dd className="text-ds-ink-muted min-w-0 leading-relaxed">{row.text}</dd>
            </div>
          ))}
        </dl>
      </Surface>
    </div>
  )
}

export default SeriesOverview
