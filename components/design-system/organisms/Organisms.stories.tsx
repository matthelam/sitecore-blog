import type { Meta, StoryObj } from '@storybook/nextjs'
import Figure from '../templates/Figure'
import AnnotatedScreenshot from './AnnotatedScreenshot'
import CountCheck from './CountCheck'
import FieldSets from './FieldSets'
import GatedFlow from './GatedFlow'
import LayerParallel from './LayerParallel'
import MandateCheckout from './MandateCheckout'
import PerspectiveTabs from './PerspectiveTabs'
import PromptAnatomy from './PromptAnatomy'
import ProfileMatrix from './ProfileMatrix'
import SeriesOverview from './SeriesOverview'
import SkillComposition from './SkillComposition'
import StepThrough from './StepThrough'
import TeamProfiles from './TeamProfiles'
import WhoCarries from './WhoCarries'
import YouTubePlayer from './YouTubePlayer'

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

export const ProfileMatrixStory: Story = {
  name: 'ProfileMatrix (How to Compose AI Agent Teams by Cognitive Profile)',
  render: () => (
    <Figure caption="Drag the dot. Names label regions, not a taxonomy: the twelve dimensions shift continuously, and the mapping onto Business Chemistry is illustrative. The behaviour is real; the trait behind it is not.">
      <ProfileMatrix
        label="Business Chemistry matrix: drag or click to profile an agent and see how it weighs what it reads"
        styles={[
          {
            name: 'Pioneer',
            gist: 'possibility, big picture',
            thinks: [
              'Should this exist at all, and what else could it be?',
              'What is this really for, and where will it be in a year?',
            ],
            asSecondary: 'It also keeps one eye on a bigger possibility than the brief.',
            leanings: {
              'Attention Granularity': 0.2,
              'Entropy Tolerance': 0.9,
              'Causal Depth': 0.8,
              'Temporal Horizon': 0.9,
              'Assertion Drive': 0.6,
              'Reversibility Sensitivity': 0.2,
              'Coherence Need': 0.3,
              'Compression Instinct': 0.5,
              'Initiation Threshold': 0.2,
              'Completion Drive': 0.3,
              'Pattern Projection': 0.2,
              'Relational Awareness': 0.4,
            },
          },
          {
            name: 'Driver',
            gist: 'challenge, results',
            thinks: [
              "What's the fastest path to done?",
              'What decision is blocking us, and can I make it now?',
            ],
            asSecondary: 'It also pushes to close the work rather than leave it open.',
            leanings: {
              'Attention Granularity': 0.4,
              'Entropy Tolerance': 0.6,
              'Causal Depth': 0.4,
              'Temporal Horizon': 0.3,
              'Assertion Drive': 0.9,
              'Reversibility Sensitivity': 0.2,
              'Coherence Need': 0.5,
              'Compression Instinct': 0.8,
              'Initiation Threshold': 0.2,
              'Completion Drive': 0.9,
              'Pattern Projection': 0.6,
              'Relational Awareness': 0.2,
            },
          },
          {
            name: 'Guardian',
            gist: 'stability, detail',
            thinks: [
              'What exactly does the spec say, and does this match it?',
              'What could this break, and can we undo it?',
            ],
            asSecondary: 'It also checks the detail before it lets anything through.',
            leanings: {
              'Attention Granularity': 0.9,
              'Entropy Tolerance': 0.2,
              'Causal Depth': 0.6,
              'Temporal Horizon': 0.5,
              'Assertion Drive': 0.3,
              'Reversibility Sensitivity': 0.9,
              'Coherence Need': 0.9,
              'Compression Instinct': 0.4,
              'Initiation Threshold': 0.8,
              'Completion Drive': 0.5,
              'Pattern Projection': 0.8,
              'Relational Awareness': 0.4,
            },
          },
          {
            name: 'Integrator',
            gist: 'connection, consensus',
            thinks: [
              'Who else does this touch, and are they on board?',
              'Which of us is best placed to take the next step?',
            ],
            asSecondary: 'It also considers who else the work affects.',
            leanings: {
              'Attention Granularity': 0.4,
              'Entropy Tolerance': 0.6,
              'Causal Depth': 0.4,
              'Temporal Horizon': 0.6,
              'Assertion Drive': 0.2,
              'Reversibility Sensitivity': 0.6,
              'Coherence Need': 0.4,
              'Compression Instinct': 0.2,
              'Initiation Threshold': 0.6,
              'Completion Drive': 0.3,
              'Pattern Projection': 0.4,
              'Relational Awareness': 0.9,
            },
          },
        ]}
        dimensions={[
          {
            name: 'Attention Granularity',
            low: 'broad strokes, big picture',
            high: 'pixel-level detail, line by line',
          },
          {
            name: 'Entropy Tolerance',
            low: 'demands clarity before acting',
            high: 'works productively in mess',
          },
          {
            name: 'Causal Depth',
            low: 'surface cause, fix the symptom',
            high: 'root cause chains, fix the system',
          },
          {
            name: 'Temporal Horizon',
            low: 'immediate task only',
            high: 'long-term consequences, historical patterns',
          },
          {
            name: 'Assertion Drive',
            low: 'hedges, qualifies, asks',
            high: 'declares, commits, decides',
          },
          {
            name: 'Reversibility Sensitivity',
            low: 'acts boldly, fixes forward',
            high: 'prefers reversible steps, cautious commits',
          },
          {
            name: 'Coherence Need',
            low: 'tolerates contradictions',
            high: 'flags every inconsistency',
          },
          {
            name: 'Compression Instinct',
            low: 'preserves nuance and detail',
            high: 'terse, dense output',
          },
          {
            name: 'Initiation Threshold',
            low: 'moves fast, asks forgiveness',
            high: 'plans thoroughly, asks permission',
          },
          {
            name: 'Completion Drive',
            low: 'comfortable leaving work in progress',
            high: 'pushes to close, ships aggressively',
          },
          {
            name: 'Pattern Projection',
            low: 'treats each situation as novel',
            high: 'fast pattern-matching, reuses solutions',
          },
          {
            name: 'Relational Awareness',
            low: 'focuses on its own deliverable',
            high: 'considers ripple effects across systems',
          },
        ]}
        names={{
          Pioneer: 'Research Spike agent',
          'Pioneer|Driver': 'Software Architect',
          'Pioneer|Integrator': 'Product Designer',
          Driver: 'Delivery Lead',
          'Driver|Pioneer': 'Prototype Builder',
          'Driver|Guardian': 'Release Manager',
          Guardian: 'Test Engineer',
          'Guardian|Driver': 'Frontend Developer',
          'Guardian|Integrator': 'Code Reviewer',
          Integrator: 'Orchestrator',
          'Integrator|Guardian': 'Technical Writer',
          'Integrator|Pioneer': 'Business Analyst',
        }}
        balanced={{
          name: 'Balanced: no strong default',
          note: 'Every style pulls about equally, so nothing dominates. An agent like this needs a very clear brief, because it has no default way to resolve a hard call.',
        }}
      />
    </Figure>
  ),
}

export const PerspectiveTabsStory: Story = {
  name: 'PerspectiveTabs (How to Compose AI Agent Teams by Cognitive Profile)',
  render: () => (
    <Figure caption="The same skill and the same prompt, read by four profiles. The responses are illustrative, written to show each profile's default thinking.">
      <PerspectiveTabs
        label="One skill, one prompt, four cognitive profiles"
        context={[
          { label: 'Skill', value: 'Build atomic components with Radix UI and Tailwind' },
          { label: 'Prompt', value: 'Add a Tooltip atom for the icon buttons.' },
        ]}
        perspectives={[
          {
            name: 'Frontend Developer',
            tag: 'Guardian–Driver',
            rows: [
              { label: 'Reads it as', text: 'A build task with a clear spec.' },
              {
                label: 'First move',
                text: 'Drills into the Radix Tooltip primitive, wraps it as an atom on the theme tokens, adds the variants and a story.',
              },
              { label: "Doesn't ask", text: 'Whether a tooltip should be there at all.' },
            ],
          },
          {
            name: 'Software Architect',
            tag: 'Pioneer–Driver',
            rows: [
              { label: 'Reads it as', text: 'A design decision hiding inside a build task.' },
              {
                label: 'First move',
                text: 'Asks whether the icon buttons need tooltips, or whether visible labels or accessible names would serve better, and whether a tooltip belongs at the atom layer.',
              },
              {
                label: "Doesn't ask",
                text: 'Which Tailwind classes to use. That detail is for later, or for someone else.',
              },
            ],
          },
          {
            name: 'Code Reviewer',
            tag: 'Guardian–Integrator',
            rows: [
              { label: 'Reads it as', text: 'A change to an existing family of atoms.' },
              {
                label: 'First move',
                text: 'Checks the new atom against the existing ones: API shape, naming, tokens and stories, and flags anything that drifts from the agreed patterns.',
              },
              {
                label: "Doesn't ask",
                text: 'Whether the design system needs a tooltip in the first place.',
              },
            ],
          },
          {
            name: 'Security Auditor',
            tag: 'Guardian with a Driver secondary',
            rows: [
              { label: 'Reads it as', text: 'A new place where content gets rendered.' },
              {
                label: 'First move',
                text: 'Traces what the tooltip can display, checks it never renders untrusted HTML, finds little risk, and says so.',
              },
              {
                label: "Doesn't ask",
                text: 'How it looks, or whether it matches the other atoms.',
              },
            ],
          },
        ]}
        note="Illustrative: written to show each profile's default thinking, not recorded agent output."
      />
    </Figure>
  ),
}

export const TeamProfilesStory: Story = {
  name: 'TeamProfiles (How to Compose AI Agent Teams by Cognitive Profile)',
  render: () => (
    <Figure caption="A scrum team profiled on the matrix above. Each role's profile is taken from its point on the matrix, simplified to what it thinks first, what it prioritises and what it defocuses.">
      <TeamProfiles
        label="A scrum team by cognitive profile"
        hint="Hover, focus or tap a role to see its profile."
        thinksLabel="Thinks first"
        prioritisesLabel="Prioritises"
        defocusesLabel="Defocuses"
        groups={[
          {
            name: 'Product Owner',
            roles: [
              {
                name: 'Product Owner',
                profile: 'Product Designer (Pioneer–Integrator)',
                thinks: 'Should this exist at all, and what else could it be?',
                prioritises: ['working in ambiguity', 'the long view', 'root causes'],
                defocuses: ['detail', 'reusing patterns', 'finishing'],
              },
            ],
          },
          {
            name: 'Scrum Master',
            roles: [
              {
                name: 'Scrum Master',
                profile: 'Orchestrator (strongly Integrator)',
                thinks: 'Who else does this touch, and are they on board?',
                prioritises: ['ripple effects', 'the long view', 'working in ambiguity'],
                defocuses: ['brevity', 'making the call', 'finishing'],
              },
            ],
          },
          {
            name: 'Developers',
            roles: [
              {
                name: 'Architect',
                profile: 'Software Architect (Pioneer–Driver)',
                thinks: 'Should this exist at all, and what else could it be?',
                prioritises: ['working in ambiguity', 'making the call', 'brevity'],
                defocuses: ['planning first', 'reversible steps', 'ripple effects'],
              },
              {
                name: 'Frontend Developer',
                profile: 'Guardian, leaning Driver',
                thinks: 'What exactly does the spec say, and does this match it?',
                prioritises: ['consistency', 'reusing patterns', 'detail'],
                defocuses: ['ripple effects', 'working in ambiguity', 'the long view'],
              },
              {
                name: 'Code Reviewer',
                profile: 'Guardian–Integrator',
                thinks: 'What exactly does the spec say, and does this match it?',
                prioritises: ['reversible steps', 'planning first', 'consistency'],
                defocuses: ['making the call', 'brevity', 'working in ambiguity'],
              },
              {
                name: 'Tester',
                profile: 'Test Engineer (strongly Guardian)',
                thinks: 'What exactly does the spec say, and does this match it?',
                prioritises: ['consistency', 'reversible steps', 'detail'],
                defocuses: ['working in ambiguity', 'making the call', 'brevity'],
              },
              {
                name: 'Security',
                profile: 'Security Auditor (Guardian, with a Driver secondary)',
                thinks: 'What could this break, and can we undo it?',
                prioritises: ['consistency', 'detail', 'reversible steps'],
                defocuses: ['working in ambiguity', 'ripple effects', 'making the call'],
              },
            ],
          },
        ]}
      />
    </Figure>
  ),
}

export const YouTubePlayerStory: Story = {
  name: 'YouTubePlayer (Agentic Studio, stage 1)',
  render: () => (
    <Figure caption="The recorded stage 1 run: seven prompts in a plain Agentic Studio chat.">
      <YouTubePlayer
        videoId="Nkhjg0PifeQ"
        title="Sitecore AI - Agentic Studio SEO Agent, Stage 1: Prompt"
      />
    </Figure>
  ),
}

export const SeriesOverviewStory: Story = {
  name: 'SeriesOverview (Agentic Studio, stage 1)',
  render: () => (
    <Figure caption="The task is the same at every stage. Only the machinery around it changes.">
      <SeriesOverview
        label="The five stages of the series"
        stages={[
          {
            number: '1',
            name: 'Prompt',
            status: 'This post',
            rows: [
              { label: 'Quality it adds', text: 'Actionable' },
              {
                label: 'What gets built',
                text: 'A plain chat: no agent, no tools ticked, no MCP.',
              },
            ],
          },
          {
            number: '2',
            name: 'Context',
            status: 'Planned',
            rows: [
              { label: 'Quality it adds', text: 'Quality' },
              {
                label: 'What gets built',
                text: 'The same chat, grounded on the Boulderfest brand kit, with the page fetched through tools.',
              },
            ],
          },
        ]}
        constant={{
          eyebrow: 'The task, identical at every stage',
          headline: 'How much does a casual bouldering session cost in Adelaide?',
          rows: [{ label: 'Page', text: '/climb/casual-entry' }],
        }}
      />
    </Figure>
  ),
}

export const PromptAnatomyStory: Story = {
  name: 'PromptAnatomy (Agentic Studio, stage 1)',
  render: () => (
    <Figure caption="A prompt with its craft and its guardrails marked.">
      <PromptAnatomy
        label="A stage 1 prompt with marks"
        views={[
          { kind: 'craft', label: 'What makes it work' },
          { kind: 'guardrail', label: 'Guardrails', countLabel: 'words are guardrail text' },
        ]}
        rounds={[
          {
            round: '2',
            title: 'Round 2: Analyse',
            prompt:
              'Act as an SEO specialist. Assess each of the five fields. Do not propose new values yet.',
            marks: [
              { text: 'Act as an SEO specialist.', kind: 'craft', note: 'A role.' },
              {
                text: 'Do not propose new values yet.',
                kind: 'guardrail',
                note: 'A guardrail, typed into this prompt by hand.',
              },
            ],
          },
        ]}
      />
    </Figure>
  ),
}

export const FieldSetsStory: Story = {
  name: 'FieldSets (Agentic Studio, stage 1)',
  render: () => (
    <Figure caption="One page item, two sets of SEO fields.">
      <FieldSets
        label="Two sets of fields on one item"
        item="/climb/casual-entry: one content item"
        renderedLabel="Rendered on the live page"
        notRenderedLabel="Not rendered"
        sets={[
          {
            heading: 'Page Meta Properties and OpenGraph',
            rendered: true,
            fields: [{ name: 'Page title', output: '<title>' }],
          },
          {
            heading: 'Metadata and Open Graph',
            rendered: false,
            fields: [{ name: 'Metadata Title' }],
            flag: 'Round 6 read this set.',
          },
        ]}
      />
    </Figure>
  ),
}

export const CountCheckStory: Story = {
  name: 'CountCheck (Agentic Studio, stage 1)',
  render: () => (
    <Figure caption="Edit either value to see the count change.">
      <CountCheck
        label="Title and description with live counts"
        claimedLabel="The chat said"
        passLabel="Meets the rule"
        failLabel="Breaks the rule"
        resetLabel="Reset"
        fields={[
          {
            label: 'Title',
            value: 'Casual Bouldering $28 in Adelaide | Boulderfest',
            claimed: '44, then 46 on recount',
            max: 60,
            rule: '60 characters or fewer',
          },
          {
            label: 'Description',
            value:
              'Casual bouldering costs $28 for adults in Adelaide. Includes unlimited climbing for the day across six zones, the training area and yoga corner. Plan your visit.',
            claimed: '160',
            min: 150,
            max: 160,
            rule: '150 to 160 characters',
            multiline: true,
          },
        ]}
      />
    </Figure>
  ),
}

export const WhoCarriesStory: Story = {
  name: 'WhoCarries (Agentic Studio, stage 1)',
  render: () => (
    <Figure caption="The score goes to the person, never back into the chat.">
      <WhoCarries
        label="The operator between the chat, the live page and the scorer"
        chat={{ name: 'Studio chat', lines: ['Analyses, proposes, writes'] }}
        operator={{ name: 'Operator', lines: ['Approves, publishes'] }}
        live={{ name: 'Live page', lines: ['Served through a cache'] }}
        instrument={{ name: 'seo-jev-analyzer', lines: ['Separate window'] }}
        edges={{
          toOperator: 'proposals',
          toChat: 'rules, feedback',
          publish: 'publish',
          reads: 'reads',
          report: 'score',
        }}
        note="The chat never sees the score"
      />
    </Figure>
  ),
}
