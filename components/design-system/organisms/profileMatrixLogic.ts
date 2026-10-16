import type { CognitiveDimension, WorkingStyle } from '../types'

// Pure logic behind ProfileMatrix, kept apart from the component so it can be tested alone.
// A position (x, y) runs 0 to 1, with y = 0 at the top. Corners run clockwise from top-left:
// 0 = TL, 1 = TR, 2 = BR, 3 = BL. Diagonal corners are opposites (0 with 2, 1 with 3).

export type Position = { x: number; y: number }
export type Weights = [number, number, number, number]

export const BALANCED_BELOW = 0.36
export const STRONG_AT = 0.6
export const TIE_WITHIN = 0.04
export const BLEND_RATIO = 0.75

export const clamp01 = (value: number) => Math.max(0, Math.min(1, value))

/** Bilinear corner weights for a position. They always sum to 1. */
export const cornerWeights = ({ x, y }: Position): Weights => [
  (1 - x) * (1 - y),
  x * (1 - y),
  x * y,
  (1 - x) * y,
]

/** Corner indexes from the heaviest weight to the lightest; ties keep corner order. */
export const rankCorners = (weights: Weights): number[] =>
  [0, 1, 2, 3].sort((a, b) => weights[b] - weights[a] || a - b)

export type Thought = { text: string; tail?: string }

export type Profile =
  | { kind: 'balanced'; heading: string; note: string }
  | {
      kind: 'strong' | 'blend'
      heading: string
      primary: number
      secondary?: number
      thinks: Thought[]
    }

type ProfileInput = {
  styles: WorkingStyle[]
  names: Record<string, string>
  balanced: { name: string; note: string }
}

/** Which profile a set of corner weights describes, and what to call it. */
export const resolveProfile = (weights: Weights, input: ProfileInput): Profile => {
  const { styles, names, balanced } = input
  const [first, second, third] = rankCorners(weights)
  if (weights[first] < BALANCED_BELOW)
    return { kind: 'balanced', heading: balanced.name, note: balanced.note }

  const primaryName = styles[first].name
  const thoughts = styles[first].thinks
  const strong =
    weights[first] >= STRONG_AT || weights[second] - weights[third] <= TIE_WITHIN + 1e-9
  if (strong) {
    return {
      kind: 'strong',
      heading: `Strongly ${primaryName}: ${names[primaryName]}`,
      primary: first,
      thinks: thoughts.map((text) => ({ text })),
    }
  }

  const secondaryName = styles[second].name
  const profileName = names[`${primaryName}|${secondaryName}`] ?? names[primaryName]
  const heading =
    weights[second] / weights[first] >= BLEND_RATIO
      ? `${profileName} (${primaryName}–${secondaryName})`
      : `Mostly ${primaryName}, leaning ${secondaryName}: ${profileName}`
  return {
    kind: 'blend',
    heading,
    primary: first,
    secondary: second,
    // The secondary's line is its own thought, so it never trails a question awkwardly.
    thinks: [...thoughts.map((text) => ({ text })), { text: styles[second].asSecondary }],
  }
}

/** Σ weight × leaning for each dimension, 0 to 1, in the dimensions' own order. */
export const dimensionScores = (
  weights: Weights,
  styles: WorkingStyle[],
  dimensions: CognitiveDimension[]
): number[] =>
  dimensions.map((dimension) =>
    styles.reduce((sum, style, i) => sum + weights[i] * (style.leanings[dimension.name] ?? 0), 0)
  )

/** The `count` highest-scoring dimensions (prioritise) and lowest-scoring (deprioritise). */
export const extremes = (scores: number[], count = 3) => {
  const order = scores.map((_, i) => i).sort((a, b) => scores[b] - scores[a] || a - b)
  return { top: order.slice(0, count), bottom: order.slice(-count).reverse() }
}

/** Moves a position by an arrow key, clamped; null for any other key. */
export const nudge = (position: Position, key: string, step: number): Position | null => {
  const dx = key === 'ArrowRight' ? step : key === 'ArrowLeft' ? -step : 0
  const dy = key === 'ArrowDown' ? step : key === 'ArrowUp' ? -step : 0
  if (dx === 0 && dy === 0) return null
  const round = (value: number) => Math.round(clamp01(value) * 1e4) / 1e4
  return { x: round(position.x + dx), y: round(position.y + dy) }
}
