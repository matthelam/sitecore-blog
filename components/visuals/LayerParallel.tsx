type LayerParallelProps = {
  // Accessible name for the whole diagram.
  label: string
  columns: { heading: string; layers: string[] }[]
  // Index of the layer row to mark, and the words that mark it.
  highlight: number
  highlightLabel: string
}

const Arrow = () => (
  <div className="flex justify-center py-1" aria-hidden="true">
    <svg width="10" height="18" viewBox="0 0 10 18">
      <line
        x1="5"
        y1="0"
        x2="5"
        y2="12"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-gray-400"
      />
      <polygon points="1,11 9,11 5,17" className="fill-gray-400 dark:fill-gray-500" />
    </svg>
  </div>
)

// Two (or more) worlds drawn as parallel stacks, one row per layer, so the reader sees that the
// same layer plays the same role in each. The highlighted row spans every column.
const LayerParallel = ({ label, columns, highlight, highlightLabel }: LayerParallelProps) => {
  const rows = Math.max(...columns.map((c) => c.layers.length))
  const cols = { gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }

  return (
    <div role="group" aria-label={label} className="font-sans text-sm">
      <div className="grid gap-x-3" style={cols}>
        {columns.map((c) => (
          <p
            key={c.heading}
            className="pb-2 text-center text-xs font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400"
          >
            {c.heading}
          </p>
        ))}
      </div>
      {Array.from({ length: rows }, (_, row) => {
        const marked = row === highlight
        return (
          <div key={row}>
            {row > 0 && (
              <div className="grid gap-x-3" style={cols}>
                {columns.map((c) => (
                  <Arrow key={c.heading} />
                ))}
              </div>
            )}
            <div
              className={
                marked
                  ? 'rounded-lg border-2 border-gray-800 bg-gray-100 p-2 dark:border-gray-200 dark:bg-gray-800'
                  : ''
              }
            >
              {marked && (
                <p className="pb-2 text-center text-xs font-semibold text-gray-900 dark:text-gray-100">
                  {highlightLabel}
                </p>
              )}
              <div className="grid gap-x-3" style={cols}>
                {columns.map((c) => (
                  <div
                    key={c.heading}
                    className={`rounded-md border px-2 py-2 text-center leading-snug sm:px-3 ${
                      marked
                        ? 'border-gray-400 bg-white font-semibold text-gray-900 dark:border-gray-500 dark:bg-gray-900 dark:text-gray-100'
                        : 'border-gray-300 bg-white text-gray-800 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-200'
                    }`}
                  >
                    {c.layers[row] ?? ''}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default LayerParallel
