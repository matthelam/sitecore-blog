import Chip from '../atoms/Chip'
import type { Agent } from '../types'

// Molecule: an agent and what it carries. Its core is drawn inverse; a capability that another
// agent also carries (count > 1) gets the duplicate icon.

type AgentCardProps = {
  agent: Agent
  // How many agents in the same comparison carry each capability. Derived by the organism.
  counts: Map<string, number>
}

const AgentCard = ({ agent, counts }: AgentCardProps) => (
  <div className="border-ds-line-strong bg-ds-surface min-w-0 rounded-md border-2 p-2">
    <p className="text-ds-ink mb-2 font-mono text-xs font-semibold">{agent.name}</p>
    <ul className="flex flex-col gap-1">
      <li>
        <Chip variant="inverse">{agent.core}</Chip>
      </li>
      {(agent.items ?? []).map((item) => {
        const duplicated = (counts.get(item) ?? 0) > 1
        return (
          <li key={item}>
            <Chip
              icon={duplicated ? 'duplicate' : undefined}
              srLabel={duplicated ? 'duplicated' : undefined}
            >
              {item}
            </Chip>
          </li>
        )
      })}
    </ul>
  </div>
)

export default AgentCard
