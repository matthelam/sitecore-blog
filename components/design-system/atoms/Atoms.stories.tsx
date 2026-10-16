import type { Meta, StoryObj } from '@storybook/nextjs'
import Arrow from './Arrow'
import Chip from './Chip'
import Eyebrow from './Eyebrow'
import Icon from './Icon'
import Surface, { type SurfaceTone } from './Surface'

// Every atom in every variant, on one page per atom. Sample text only.

const meta: Meta = { title: 'Design system/Atoms' }
export default meta
type Story = StoryObj

const tones: SurfaceTone[] = ['plain', 'muted', 'emphasis', 'negative', 'advisory', 'inverse']

export const Surfaces: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-3 font-sans text-sm sm:grid-cols-3">
      {tones.map((tone) => (
        <Surface key={tone} tone={tone}>
          {tone}
        </Surface>
      ))}
    </div>
  ),
}

export const Arrows: Story = {
  render: () => (
    <div className="flex items-start gap-8 font-sans text-sm">
      <div className="flex flex-col items-center">
        <Eyebrow>down</Eyebrow>
        <Arrow />
      </div>
      <div className="flex flex-col items-center">
        <Eyebrow>dashed</Eyebrow>
        <Arrow dashed />
      </div>
      <div className="flex flex-col items-center">
        <Eyebrow>up</Eyebrow>
        <Arrow direction="up" dashed />
      </div>
      <div className="flex items-center">
        <Eyebrow inline>right</Eyebrow>
        <Arrow direction="right" />
      </div>
      <div className="flex h-32 flex-col items-center">
        <Eyebrow>stretch</Eyebrow>
        <Arrow stretch />
      </div>
    </div>
  ),
}

export const Chips: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Chip>solid</Chip>
      <Chip variant="inverse">inverse</Chip>
      <Chip variant="dashed">dashed</Chip>
      <Chip icon="duplicate" srLabel="duplicated">
        with icon
      </Chip>
    </div>
  ),
}

export const Icons: Story = {
  render: () => (
    <div className="text-ds-ink flex gap-4">
      {(['pause', 'duplicate', 'check', 'cross'] as const).map((name) => (
        <span key={name} className="flex items-center gap-1 text-xs">
          <Icon name={name} /> {name}
        </span>
      ))}
    </div>
  ),
}

export const Eyebrows: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Eyebrow>left</Eyebrow>
      <Eyebrow align="center">center</Eyebrow>
    </div>
  ),
}
