import Arrow from '../atoms/Arrow'
import Eyebrow from '../atoms/Eyebrow'
import Surface from '../atoms/Surface'
import type { LayerColumn } from '../types'

// Organism: two (or more) worlds drawn as parallel stacks, one row per layer, so the reader sees
// that the same layer plays the same role in each. The highlighted row spans every column.

type LayerParallelProps = {
  label: string
  columns: LayerColumn[]
  // Index of the layer row to mark, and the words that mark it.
  highlight: number
  highlightLabel: string
}

const LayerParallel = ({ label, columns, highlight, highlightLabel }: LayerParallelProps) => {
  const rows = Math.max(...columns.map((c) => c.layers.length))
  const grid = { gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }

  const row = (index: number, marked: boolean) => (
    <div className="grid gap-x-3" style={grid}>
      {columns.map((c) => (
        <Surface
          key={c.heading}
          tone="plain"
          pad="sm"
          className={`py-2 text-center leading-snug sm:px-3 ${marked ? 'font-semibold' : ''}`}
        >
          {c.layers[index] ?? ''}
        </Surface>
      ))}
    </div>
  )

  return (
    <div role="group" aria-label={label} className="font-sans text-sm">
      <div className="grid gap-x-3 pb-2" style={grid}>
        {columns.map((c) => (
          <Eyebrow key={c.heading} align="center">
            {c.heading}
          </Eyebrow>
        ))}
      </div>
      {Array.from({ length: rows }, (_, index) => (
        <div key={index}>
          {index > 0 && (
            <div className="grid gap-x-3" style={grid}>
              {columns.map((c) => (
                <Arrow key={c.heading} />
              ))}
            </div>
          )}
          {index === highlight ? (
            <Surface tone="emphasis" pad="sm" className="rounded-lg">
              <span className="block pb-2 text-center text-xs font-semibold">{highlightLabel}</span>
              {row(index, true)}
            </Surface>
          ) : (
            row(index, false)
          )}
        </div>
      ))}
    </div>
  )
}

export default LayerParallel
