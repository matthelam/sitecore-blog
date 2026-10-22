'use client'

import { useId, useState } from 'react'
import Eyebrow from '../atoms/Eyebrow'
import Surface from '../atoms/Surface'
import TabList from '../molecules/TabList'
import type { SeriesStage, SeriesStageDetail } from '../types'

// Organism: a series of stages as tabs. Each panel shows what the stage adds, an optional link
// for further reading, and the stage's own task section. A stage without a task yet shows the
// post's pending text there instead. Every panel stays in the DOM (inactive ones hidden), so the
// page carries all of them.

type SeriesOverviewProps = {
  label: string
  stages: SeriesStage[]
  initial?: number
  // Shown in the task section of a stage that has no `detail` yet.
  pending: { eyebrow: string; text: string }
}

const Detail = ({ detail }: { detail: SeriesStageDetail }) => (
  <Surface tone="muted" pad="lg" className="flex flex-col gap-3">
    <Eyebrow>{detail.eyebrow}</Eyebrow>
    <p className="text-ds-ink text-base leading-snug font-semibold">{detail.headline}</p>
    <dl className="flex flex-col gap-2">
      {detail.rows.map((row) => (
        <div key={row.label} className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
          <dt className="sm:w-24 sm:shrink-0 sm:pt-0.5">
            <Eyebrow>{row.label}</Eyebrow>
          </dt>
          <dd className="text-ds-ink-muted min-w-0 leading-relaxed">{row.text}</dd>
        </div>
      ))}
    </dl>
  </Surface>
)

const SeriesOverview = ({ label, stages, initial = 0, pending }: SeriesOverviewProps) => {
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
          className="flex flex-col gap-4"
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
            {stage.source && (
              <p className="border-ds-line mt-4 border-t pt-3">
                <a
                  href={stage.source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!text-ds-ink-muted hover:!text-ds-ink underline underline-offset-2"
                >
                  {stage.source.label}
                  <span aria-hidden="true"> {'↗︎'}</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </p>
            )}
          </Surface>

          {stage.detail ? (
            <Detail detail={stage.detail} />
          ) : (
            <Surface tone="advisory" pad="lg" className="flex flex-col gap-1">
              <Eyebrow>{pending.eyebrow}</Eyebrow>
              <p className="text-ds-ink-muted">{pending.text}</p>
            </Surface>
          )}
        </div>
      ))}
    </div>
  )
}

export default SeriesOverview
