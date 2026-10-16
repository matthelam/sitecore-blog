import type { Meta, StoryObj } from '@storybook/nextjs'
import AgentCard from './AgentCard'
import FlowNode from './FlowNode'

// Molecules in their states. Sample text only.

const meta: Meta = { title: 'Design system/Molecules' }
export default meta
type Story = StoryObj

export const FlowNodes: Story = {
  render: () => (
    <div className="grid max-w-md gap-3 font-sans text-sm">
      <FlowNode step={{ label: 'A step' }} />
      <FlowNode step={{ label: 'A gate', gate: true }} />
      <FlowNode step={{ label: 'A gate with detail', gate: true, detail: 'What gets checked.' }} />
    </div>
  ),
}

export const AgentCards: Story = {
  render: () => {
    const counts = new Map([
      ['Shared capability', 2],
      ['Own capability', 1],
    ])
    return (
      <div className="grid max-w-md grid-cols-2 gap-2 font-sans">
        <AgentCard
          agent={{
            name: 'agent-one',
            core: 'Core',
            items: ['Shared capability', 'Own capability'],
          }}
          counts={counts}
        />
        <AgentCard agent={{ name: 'agent-two', core: 'Core' }} counts={counts} />
      </div>
    )
  },
}
