import Arrow from '../atoms/Arrow'
import Chip from '../atoms/Chip'
import Icon from '../atoms/Icon'
import Surface from '../atoms/Surface'
import AgentCard from '../molecules/AgentCard'
import type { SkillPanel } from '../types'

// Organism: before above after. Capabilities carried inside every agent, against lean agents
// that load shared skills on demand. Stacked so each agent card has room at every width.

type SkillCompositionProps = {
  label: string
  before: SkillPanel
  after: SkillPanel
  // Legend for the duplication marker, in the post's words.
  duplicateLegend: string
}

const Panel = ({ panel, duplicateLegend }: { panel: SkillPanel; duplicateLegend: string }) => {
  // How many agents carry each capability: derived from the props, never stated.
  const counts = new Map<string, number>()
  panel.agents.forEach((a) =>
    (a.items ?? []).forEach((i) => counts.set(i, (counts.get(i) ?? 0) + 1))
  )
  const anyDuplicated = [...counts.values()].some((n) => n > 1)

  return (
    <Surface tone="muted" pad="lg" className="flex min-w-0 flex-col gap-3 rounded-lg">
      <h4 className="text-sm font-semibold">{panel.title}</h4>
      <div className="grid grid-cols-2 gap-2">
        {panel.agents.map((a) => (
          <AgentCard key={a.name} agent={a} counts={counts} />
        ))}
      </div>
      {panel.library && (
        <>
          <div className="text-ds-ink-subtle flex items-center justify-center gap-2 text-xs italic">
            <Arrow direction="up" dashed />
            {panel.library.edge}
          </div>
          <Surface tone="advisory" pad="sm" className="border-2">
            <p className="text-ds-ink mb-2 text-xs font-semibold">{panel.library.title}</p>
            <ul className="flex flex-wrap gap-1">
              {panel.library.items.map((item) => (
                <li key={item}>
                  <Chip variant="dashed">{item}</Chip>
                </li>
              ))}
            </ul>
          </Surface>
        </>
      )}
      <p className="text-ds-ink-muted text-xs leading-relaxed">
        {anyDuplicated && (
          <span className="mr-3 inline-flex items-center gap-1 whitespace-nowrap">
            <Icon name="duplicate" /> {duplicateLegend}
          </span>
        )}
        {panel.note}
      </p>
    </Surface>
  )
}

const SkillComposition = ({ label, before, after, duplicateLegend }: SkillCompositionProps) => (
  <div role="group" aria-label={label} className="flex flex-col gap-4 font-sans">
    <Panel panel={before} duplicateLegend={duplicateLegend} />
    <Panel panel={after} duplicateLegend={duplicateLegend} />
  </div>
)

export default SkillComposition
