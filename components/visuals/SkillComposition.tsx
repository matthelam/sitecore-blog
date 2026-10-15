type Agent = {
  name: string
  // What makes this agent itself (its own specialist knowledge). Never counted as duplication.
  core: string
  // Capabilities the agent carries. An item carried by more than one agent is marked as duplicated.
  items?: string[]
}

type Panel = {
  title: string
  note: string
  agents: Agent[]
  // Skills held once, outside the agents, and loaded when a task needs them.
  library?: { title: string; items: string[]; edge: string }
}

type SkillCompositionProps = {
  label: string
  before: Panel
  after: Panel
  // Legend for the duplication marker, in the post's words.
  duplicateLegend: string
}

const DupIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" className="shrink-0">
    <rect
      x="1"
      y="3"
      width="7"
      height="8"
      rx="1"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <rect
      x="4"
      y="1"
      width="7"
      height="8"
      rx="1"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    />
  </svg>
)

const AgentCard = ({ agent, counts }: { agent: Agent; counts: Map<string, number> }) => (
  <div className="min-w-0 rounded-md border-2 border-gray-400 bg-white p-2 dark:border-gray-500 dark:bg-gray-900">
    <p className="mb-2 font-mono text-xs font-semibold text-gray-900 dark:text-gray-100">
      {agent.name}
    </p>
    <ul className="flex flex-col gap-1 text-xs">
      <li className="rounded bg-gray-800 px-2 py-1 leading-snug text-white dark:bg-gray-200 dark:text-gray-900">
        {agent.core}
      </li>
      {(agent.items ?? []).map((item) => {
        const dup = (counts.get(item) ?? 0) > 1
        return (
          <li
            key={item}
            className="flex items-center gap-1.5 rounded border border-gray-300 bg-gray-50 px-2 py-1 leading-snug text-gray-800 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
          >
            {dup && (
              <span className="text-gray-500 dark:text-gray-400">
                <DupIcon />
              </span>
            )}
            <span>{item}</span>
            {dup && <span className="sr-only">(duplicated)</span>}
          </li>
        )
      })}
    </ul>
  </div>
)

const PanelView = ({ panel, duplicateLegend }: { panel: Panel; duplicateLegend: string }) => {
  // How many agents carry each capability: the duplication is derived from the props, never stated.
  const counts = new Map<string, number>()
  panel.agents.forEach((a) =>
    (a.items ?? []).forEach((i) => counts.set(i, (counts.get(i) ?? 0) + 1))
  )
  const anyDup = [...counts.values()].some((n) => n > 1)

  return (
    <section className="flex min-w-0 flex-col gap-3 rounded-lg bg-gray-50 p-3 dark:bg-gray-800/50">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">{panel.title}</h4>
      <div className="grid grid-cols-2 gap-2">
        {panel.agents.map((a) => (
          <AgentCard key={a.name} agent={a} counts={counts} />
        ))}
      </div>
      {panel.library && (
        <>
          <div className="flex items-center justify-center gap-2 text-xs text-gray-500 italic dark:text-gray-400">
            <svg width="10" height="18" viewBox="0 0 10 18" aria-hidden="true">
              <line
                x1="5"
                y1="17"
                x2="5"
                y2="6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                className="text-gray-400"
              />
              <polygon points="1,7 9,7 5,1" className="fill-gray-400 dark:fill-gray-500" />
            </svg>
            {panel.library.edge}
          </div>
          <div className="rounded-md border-2 border-dashed border-gray-400 bg-white p-2 dark:border-gray-500 dark:bg-gray-900">
            <p className="mb-2 text-xs font-semibold text-gray-900 dark:text-gray-100">
              {panel.library.title}
            </p>
            <ul className="flex flex-wrap gap-1 text-xs">
              {panel.library.items.map((item) => (
                <li
                  key={item}
                  className="rounded border border-dashed border-gray-300 px-2 py-1 leading-snug text-gray-700 dark:border-gray-600 dark:text-gray-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
      <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-400">
        {anyDup && (
          <span className="mr-3 inline-flex items-center gap-1 whitespace-nowrap">
            <DupIcon /> {duplicateLegend}
          </span>
        )}
        {panel.note}
      </p>
    </section>
  )
}

// Before above after: capabilities carried inside every agent, against lean agents that load
// shared skills on demand. Stacked rather than side by side so each agent card has room.
const SkillComposition = ({ label, before, after, duplicateLegend }: SkillCompositionProps) => (
  <div role="group" aria-label={label} className="flex flex-col gap-4 font-sans">
    <PanelView panel={before} duplicateLegend={duplicateLegend} />
    <PanelView panel={after} duplicateLegend={duplicateLegend} />
  </div>
)

export default SkillComposition
