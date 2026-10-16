import type { Meta, StoryObj } from '@storybook/nextjs'
import Figure from '../templates/Figure'
import AnnotatedScreenshot from './AnnotatedScreenshot'
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

// A generated placeholder screen: grey bars only, no real text or data. No post uses
// AnnotatedScreenshot yet, so its props here are sample ones.
const bar = (x: number, y: number, w: number, h: number, fill: string, r = 4) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}"/>`
const rows = Array.from(
  { length: 6 },
  (_, i) =>
    bar(280, 290 + i * 64, 180, 14, '#9ca3af') +
    bar(560, 290 + i * 64, 240, 14, '#d1d5db') +
    bar(900, 286 + i * 64, 110, 22, '#e5e7eb', 11) +
    bar(1120, 293 + i * 64, 24, 8, '#9ca3af') +
    bar(260, 330 + i * 64, 910, 1, '#e5e7eb', 0)
).join('')
const placeholderScreen = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="720" viewBox="0 0 1200 720">` +
    bar(0, 0, 1200, 720, '#ffffff', 0) +
    bar(0, 0, 1200, 56, '#f3f4f6', 0) +
    bar(24, 18, 120, 20, '#9ca3af') +
    bar(1080, 16, 96, 24, '#d1d5db', 12) +
    bar(0, 56, 220, 664, '#f9fafb', 0) +
    [0, 1, 2, 3, 4, 5]
      .map((i) => bar(24, 96 + i * 44, i === 2 ? 150 : 120, 14, i === 2 ? '#6b7280' : '#d1d5db'))
      .join('') +
    bar(260, 90, 260, 26, '#4b5563') +
    bar(260, 140, 320, 36, '#f3f4f6', 8) +
    bar(260, 216, 910, 40, '#f9fafb', 0) +
    bar(280, 230, 90, 12, '#9ca3af') +
    bar(560, 230, 90, 12, '#9ca3af') +
    bar(900, 230, 120, 12, '#4b5563') +
    rows +
    `</svg>`
)}`

export const AnnotatedScreenshotStory: Story = {
  name: 'AnnotatedScreenshot (sample)',
  render: () => (
    <Figure caption="Sample caption: the claim the screenshot makes.">
      <AnnotatedScreenshot
        src={placeholderScreen}
        alt="A placeholder admin screen with a navigation sidebar and a table of six rows"
        width={1200}
        height={720}
        label="Sample callouts"
        callouts={[
          { x: 16, y: 25.5, label: 'Sidebar item', detail: 'The third entry in the navigation.' },
          { x: 73.5, y: 32.8, label: 'Column header' },
          { x: 91.8, y: 41.2, label: 'Row menu', detail: 'One per row.' },
        ]}
      />
    </Figure>
  ),
}
