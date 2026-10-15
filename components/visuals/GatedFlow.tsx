type FlowStep = {
  label: string
  // A gate is a point where the workflow pauses and checks before moving on.
  gate?: boolean
  detail?: string
}

type GatedFlowProps = {
  label: string
  lanes: { label: string; steps: FlowStep[] }[]
}

const PauseIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" className="shrink-0">
    <rect x="1" y="1" width="3" height="8" className="fill-gray-700 dark:fill-gray-300" />
    <rect x="6" y="1" width="3" height="8" className="fill-gray-700 dark:fill-gray-300" />
  </svg>
)

// Grows to fill its lane, so a short workflow spans the same height as a long one beside it.
const Arrow = () => (
  <div className="flex min-h-6 flex-1 flex-col items-center py-1" aria-hidden="true">
    <div className="w-px flex-1 bg-gray-400 dark:bg-gray-500" />
    <svg width="10" height="6" viewBox="0 0 10 6" className="shrink-0">
      <polygon points="1,0 9,0 5,6" className="fill-gray-400 dark:fill-gray-500" />
    </svg>
  </div>
)

// Workflows drawn as columns that read top to bottom, side by side when there is room, so each
// step and gate gets the column's full width. A shorter lane's arrows stretch so both lanes start
// and end level. Gates are marked by an icon and the word
// "gate", not colour alone.
const GatedFlow = ({ label, lanes }: GatedFlowProps) => (
  <div
    role="group"
    aria-label={label}
    className="grid gap-6 font-sans text-sm sm:gap-4"
    style={{ gridTemplateColumns: `repeat(auto-fit, minmax(14rem, 1fr))` }}
  >
    {lanes.map((lane) => (
      <div key={lane.label} className="flex min-w-0 flex-col">
        <p className="pb-2 text-center text-xs font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
          {lane.label}
        </p>
        <ol className="flex flex-1 flex-col">
          {lane.steps.map((step, i) => (
            <li key={step.label} className={i > 0 ? 'flex flex-1 flex-col' : 'flex flex-col'}>
              {i > 0 && <Arrow />}
              {step.gate ? (
                <div className="rounded-md border-2 border-gray-800 bg-gray-100 px-3 py-2 dark:border-gray-200 dark:bg-gray-800">
                  <span className="flex items-center gap-1.5 text-[0.65rem] font-semibold tracking-wide text-gray-700 uppercase dark:text-gray-300">
                    <PauseIcon />
                    Gate
                  </span>
                  <span className="block font-semibold text-gray-900 dark:text-gray-100">
                    {step.label}
                  </span>
                  {step.detail && (
                    <span className="mt-0.5 block text-xs leading-snug text-gray-600 dark:text-gray-400">
                      {step.detail}
                    </span>
                  )}
                </div>
              ) : (
                <div className="rounded-md border border-gray-300 bg-white px-3 py-2 text-center text-gray-800 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-200">
                  {step.label}
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    ))}
  </div>
)

export default GatedFlow
