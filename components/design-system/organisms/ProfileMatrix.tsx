'use client'

import { useRef, useState, type KeyboardEvent, type PointerEvent } from 'react'
import Eyebrow from '../atoms/Eyebrow'
import Surface from '../atoms/Surface'
import type { CognitiveDimension, WorkingStyle } from '../types'
import {
  clamp01,
  cornerWeights,
  dimensionScores,
  extremes,
  nudge,
  resolveProfile,
  type Position,
} from './profileMatrixLogic'

// Organism: a square with a style in each corner. The reader drags (or arrow-keys) a dot inside
// it and the readout names the profile at that point, how it thinks and what it weighs. The
// corner styles, dimensions and every sentence arrive as props; this component only does the
// geometry. Corners run clockwise from the top-left, so diagonal corners are opposites.

type ProfileMatrixProps = {
  label: string
  styles: [WorkingStyle, WorkingStyle, WorkingStyle, WorkingStyle]
  dimensions: CognitiveDimension[]
  names: Record<string, string>
  balanced: { name: string; note: string }
  initial?: Position
}

const DEFAULT_START: Position = { x: 0.5, y: 0.08 }
const STEP = 0.05
const BIG_STEP = 0.2

// Where each corner's label sits, and how it aligns.
const cornerClass = [
  'top-2 left-2 items-start text-left',
  'top-2 right-2 items-end text-right',
  'right-2 bottom-2 items-end text-right',
  'bottom-2 left-2 items-start text-left',
]
// Which quarter of the square each corner's tint fills.
const quarterClass = ['top-0 left-0', 'top-0 right-0', 'right-0 bottom-0', 'bottom-0 left-0']

const ProfileMatrix = ({
  label,
  styles,
  dimensions,
  names,
  balanced,
  initial = DEFAULT_START,
}: ProfileMatrixProps) => {
  const [position, setPosition] = useState<Position>(initial)
  const areaRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLButtonElement>(null)
  const dragging = useRef(false)

  const weights = cornerWeights(position)
  const profile = resolveProfile(weights, { styles, names, balanced })
  const scores = dimensionScores(weights, styles, dimensions)
  const { top, bottom } = extremes(scores)

  const moveTo = (event: PointerEvent<HTMLDivElement>) => {
    const box = areaRef.current?.getBoundingClientRect()
    if (!box || box.width === 0 || box.height === 0) return
    setPosition({
      x: clamp01((event.clientX - box.left) / box.width),
      y: clamp01((event.clientY - box.top) / box.height),
    })
  }

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    dragging.current = true
    event.currentTarget.setPointerCapture(event.pointerId)
    dotRef.current?.focus()
    moveTo(event)
  }
  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (dragging.current) moveTo(event)
  }
  const onPointerEnd = (event: PointerEvent<HTMLDivElement>) => {
    dragging.current = false
    if (event.currentTarget.hasPointerCapture(event.pointerId))
      event.currentTarget.releasePointerCapture(event.pointerId)
  }

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const next = nudge(position, event.key, event.shiftKey ? BIG_STEP : STEP)
    if (!next) return
    event.preventDefault()
    setPosition(next)
  }

  return (
    <div
      role="group"
      aria-label={label}
      className="grid gap-6 font-sans text-sm md:grid-cols-2 md:items-start"
    >
      <Surface
        pad="none"
        className="relative mx-auto aspect-square w-full max-w-[26rem] overflow-hidden"
      >
        <div
          ref={areaRef}
          role="presentation"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerEnd}
          onPointerCancel={onPointerEnd}
          className="absolute inset-0 cursor-crosshair touch-none select-none"
        >
          {weights.map((weight, i) => (
            <div
              key={styles[i].name}
              aria-hidden="true"
              className={`bg-ds-emphasis-line absolute h-1/2 w-1/2 transition-opacity duration-200 motion-reduce:transition-none ${quarterClass[i]}`}
              style={{ opacity: weight * 0.35 }}
            />
          ))}
          <div aria-hidden="true" className="bg-ds-line absolute top-0 bottom-0 left-1/2 w-px" />
          <div aria-hidden="true" className="bg-ds-line absolute top-1/2 right-0 left-0 h-px" />

          {styles.map((style, i) => (
            <div
              key={style.name}
              aria-hidden="true"
              className={`pointer-events-none absolute flex max-w-[42%] flex-col gap-0.5 ${cornerClass[i]}`}
            >
              <Eyebrow>{style.name}</Eyebrow>
              <span className="text-ds-ink-muted text-xs leading-snug">{style.gist}</span>
            </div>
          ))}

          <span
            aria-hidden="true"
            className="bg-ds-surface text-ds-ink-subtle pointer-events-none absolute top-1/2 left-1/2 max-w-[6.5rem] -translate-x-1/2 translate-y-3 rounded px-1 text-center text-[0.65rem] leading-tight"
          >
            {balanced.name}
          </span>

          {/* A 2D picker has no native role, so the dot is a button that takes the arrow keys. */}
          <button
            ref={dotRef}
            type="button"
            aria-roledescription="2D profile picker"
            aria-label={`Current profile: ${profile.heading}. Arrow keys move the dot; Shift makes bigger steps.`}
            onKeyDown={onKeyDown}
            className="bg-ds-inverse-fill focus-visible:ring-ds-emphasis-line focus-visible:ring-offset-ds-surface absolute size-5 -translate-x-1/2 -translate-y-1/2 rounded-full shadow focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            style={{ left: `${position.x * 100}%`, top: `${position.y * 100}%` }}
          />
        </div>
      </Surface>

      <div className="flex min-w-0 flex-col gap-4">
        <div aria-live="polite" className="flex flex-col gap-4">
          <p className="text-base font-semibold">{profile.heading}</p>

          {profile.kind === 'balanced' ? (
            <p className="text-ds-ink-muted leading-relaxed">{profile.note}</p>
          ) : (
            <div>
              <Eyebrow>It will think:</Eyebrow>
              <ul className="mt-1 flex list-disc flex-col gap-1 pl-5 leading-relaxed">
                {profile.thinks.map((thought) => (
                  <li key={thought.text}>
                    {thought.text}
                    {thought.tail && <span className="text-ds-ink-muted"> {thought.tail}</span>}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <Eyebrow>It will prioritise:</Eyebrow>
            <ul className="mt-1 flex list-disc flex-col gap-1 pl-5 leading-relaxed">
              {top.map((i) => (
                <li key={dimensions[i].name}>
                  <strong>{dimensions[i].name}</strong> high: {dimensions[i].high}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Eyebrow>It will deprioritise:</Eyebrow>
            <ul className="mt-1 flex list-disc flex-col gap-1 pl-5 leading-relaxed">
              {bottom.map((i) => (
                <li key={dimensions[i].name}>
                  <strong>{dimensions[i].name}</strong> low: {dimensions[i].low}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-x-3 gap-y-2">
          {dimensions.map((dimension, i) => (
            <li key={dimension.name} className="min-w-0">
              <div className="text-ds-ink-muted flex items-baseline justify-between gap-2 text-xs">
                <span className="min-w-0 break-words">{dimension.name}</span>
                <span className="tabular-nums">{scores[i].toFixed(2)}</span>
              </div>
              <div className="bg-ds-line mt-0.5 h-1.5 overflow-hidden rounded-full">
                <div
                  className="bg-ds-emphasis-line h-full rounded-full transition-[width] duration-200 motion-reduce:transition-none"
                  style={{ width: `${scores[i] * 100}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProfileMatrix
