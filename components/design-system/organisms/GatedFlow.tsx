import Arrow from '../atoms/Arrow'
import Eyebrow from '../atoms/Eyebrow'
import FlowNode from '../molecules/FlowNode'
import type { Lane } from '../types'

// Organism: workflows as columns that read top to bottom, side by side when there is room, so
// each step and gate gets the column's full width. A shorter lane's arrows stretch so both lanes
// start and end level. Columns collapse to one below ~29rem of figure width.

type GatedFlowProps = {
  label: string
  lanes: Lane[]
}

const GatedFlow = ({ label, lanes }: GatedFlowProps) => (
  <div
    role="group"
    aria-label={label}
    className="grid gap-6 font-sans text-sm sm:gap-4"
    style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(14rem, 1fr))' }}
  >
    {lanes.map((lane) => (
      <div key={lane.label} className="flex min-w-0 flex-col gap-2">
        <Eyebrow align="center">{lane.label}</Eyebrow>
        <ol className="flex flex-1 flex-col">
          {lane.steps.map((step, i) => (
            <li key={step.label} className={i > 0 ? 'flex flex-1 flex-col' : 'flex flex-col'}>
              {i > 0 && <Arrow stretch />}
              <FlowNode step={step} />
            </li>
          ))}
        </ol>
      </div>
    ))}
  </div>
)

export default GatedFlow
