import type { Meta, StoryObj } from '@storybook/nextjs'
import Figure from '../templates/Figure'
import GatedFlow from './GatedFlow'
import LayerParallel from './LayerParallel'
import MandateCheckout from './MandateCheckout'
import SkillComposition from './SkillComposition'
import StepThrough from './StepThrough'

// Organisms inside their Figure, with the props the published posts pass. The stories copy
// those props; the posts stay the source of the facts.

const meta: Meta = { title: 'Design system/Organisms' }
export default meta
type Story = StoryObj

export const LayerParallelStory: Story = {
  name: 'LayerParallel (We Don’t Build the Website)',
  render: () => (
    <Figure caption="One layer tailors the experience; the next layer does the work.">
      <LayerParallel
        label="Two parallel stacks with the design surface marked."
        columns={[
          {
            heading: 'CMS world',
            layers: [
              'CMS developer',
              'Components and the authoring experience',
              'Content author builds the page',
              'The website',
            ],
          },
          {
            heading: 'Agent world',
            layers: [
              'You, the agent designer',
              'Capability surface: skills, workflows, constraints',
              'Agents build the application',
              'The application',
            ],
          },
        ]}
        highlight={1}
        highlightLabel="What you actually design"
      />
    </Figure>
  ),
}

export const SkillCompositionStory: Story = {
  name: 'SkillComposition (We Don’t Build the Website)',
  render: () => (
    <Figure caption="Baked in against composable.">
      <SkillComposition
        label="Skills baked into agents against shared skills loaded on demand."
        before={{
          title: 'Before: skills baked in',
          note: 'Permanently loaded, whether needed or not. Duplication, drift risk, token cost.',
          agents: [
            {
              name: 'frontend-dev',
              core: 'Specialist knowledge',
              items: [
                'Research a codebase',
                'Verify against acceptance criteria',
                'Commit code',
                'Work items off a Jira board',
              ],
            },
            {
              name: 'content-writer',
              core: 'Specialist knowledge',
              items: [
                'Research a codebase',
                'Verify against acceptance criteria',
                'Commit code',
                'Work items off a Jira board',
              ],
            },
          ],
        }}
        after={{
          title: 'After: composable skills',
          note: 'Each skill is defined once, tested once, maintained in one place, and loaded only when the task requires it.',
          agents: [
            { name: 'frontend-dev', core: 'Specialist knowledge' },
            { name: 'content-writer', core: 'Specialist knowledge' },
          ],
          library: {
            title: 'Skills, defined once',
            items: [
              'Commit code',
              'Search Jira backlog',
              'Run verification against acceptance criteria',
            ],
            edge: 'loaded on demand',
          },
        }}
        duplicateLegend="the same logic, duplicated across agents"
      />
    </Figure>
  ),
}

export const GatedFlowStory: Story = {
  name: 'GatedFlow (We Don’t Build the Website)',
  render: () => (
    <Figure caption="The gates sit at the transitions, not inside the work.">
      <GatedFlow
        label="Sitecore workflow beside the agent delivery engine."
        lanes={[
          {
            label: 'Sitecore workflow',
            steps: [
              { label: 'Draft' },
              {
                label: 'Awaiting Approval',
                gate: true,
                detail: 'An editor reviews it. A compliance check runs.',
              },
              { label: 'Published' },
            ],
          },
          {
            label: 'Agent delivery engine',
            steps: [
              { label: 'Brief' },
              { label: 'Human review', gate: true, detail: 'Before planning begins.' },
              { label: 'Plan' },
              { label: 'Plan approved', gate: true },
              { label: 'Execute' },
              {
                label: 'Verification',
                gate: true,
                detail: 'Output checked against acceptance criteria.',
              },
              { label: 'Done' },
            ],
          },
        ]}
      />
    </Figure>
  ),
}

export const StepThroughStory: Story = {
  name: 'StepThrough (sample)',
  render: () => (
    <Figure caption="A sample sequence.">
      <StepThrough
        label="A sample three-step sequence."
        steps={[
          { node: 'First', detail: 'What happens first.', edge: 'then' },
          { node: 'Second', detail: 'What happens next.' },
          { node: 'Third', detail: 'Where it ends.' },
        ]}
      />
    </Figure>
  ),
}

export const MandateCheckoutStory: Story = {
  name: 'MandateCheckout (sample)',
  render: () => (
    <Figure caption="A sample mandate: move the slider past the ceiling to see the rejection.">
      <MandateCheckout
        mandateId="mandate-sample"
        ceilingAud={100}
        unitPriceAud={30}
        itemLabel="boxes"
        maxQuantity={6}
      />
    </Figure>
  ),
}
