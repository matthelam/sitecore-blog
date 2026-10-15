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
    <rect x="1" y="1" width="3" height="8" className="fill-primary-600 dark:fill-primary-400" />
    <rect x="6" y="1" width="3" height="8" className="fill-primary-600 dark:fill-primary-400" />
  </svg>
)

const Chevron = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    aria-hidden="true"
    className="ml-4 shrink-0 rotate-90 sm:ml-0 sm:rotate-0 sm:self-center"
  >
    <path
      d="M4 2 L10 7 L4 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="text-gray-400"
    />
  </svg>
)

// Workflows drawn as lanes of steps, with gates marked where the work pauses and is checked.
// Lanes run top to bottom on phones and left to right, wrapping, from the sm breakpoint; gates are marked by an icon and the word "gate", not colour alone.
const GatedFlow = ({ label, lanes }: GatedFlowProps) => (
  <div role="group" aria-label={label} className="flex flex-col gap-5 font-sans text-sm">
    {lanes.map((lane) => (
      <div key={lane.label}>
        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
          {lane.label}
        </p>
        <ol className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-x-1 sm:gap-y-2">
          {lane.steps.map((step, i) => (
            <li
              key={step.label}
              className="flex flex-col items-start gap-1 sm:flex-row sm:items-stretch"
            >
              {i > 0 && <Chevron />}
              {step.gate ? (
                <div className="border-primary-500 bg-primary-50 dark:bg-primary-950/40 flex max-w-[11rem] flex-col justify-center rounded-md border-2 px-2 py-1.5">
                  <span className="text-primary-700 dark:text-primary-300 flex items-center gap-1.5 text-[0.65rem] font-semibold tracking-wide uppercase">
                    <PauseIcon />
                    Gate
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    {step.label}
                  </span>
                  {step.detail && (
                    <span className="text-xs leading-snug text-gray-600 dark:text-gray-400">
                      {step.detail}
                    </span>
                  )}
                </div>
              ) : (
                <div className="flex items-center rounded-md border border-gray-300 bg-white px-3 py-1.5 text-gray-800 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-200">
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
