import Arrow from '../atoms/Arrow'
import Eyebrow from '../atoms/Eyebrow'
import Surface from '../atoms/Surface'
import type { CarryNode } from '../types'

// Organism: who carries the work when a person sits between a chat and the outside world. The
// chat and the person pass work back and forth; the person publishes to the live page; an
// outside instrument reads the live page and reports to the person only (dashed). On wide
// screens it reads left to right; on narrow screens it stacks and the arrows turn downwards.

type WhoCarriesProps = {
  label: string
  chat: CarryNode
  operator: CarryNode
  live: CarryNode
  instrument: CarryNode
  edges: { toOperator: string; toChat: string; publish: string; reads: string; report: string }
  note?: string
}

const Box = ({ node, tone }: { node: CarryNode; tone: 'plain' | 'emphasis' }) => (
  <Surface tone={tone} pad="lg" className="flex flex-col gap-1 text-center">
    <p className="text-ds-ink font-semibold">{node.name}</p>
    {node.lines.map((line) => (
      <p key={line} className="text-ds-ink-muted text-xs leading-snug">
        {line}
      </p>
    ))}
  </Surface>
)

// One labelled edge: forward points right (wide) or down (narrow); back points left or up.
const Edge = ({
  label,
  back = false,
  dashed = false,
}: {
  label: string
  back?: boolean
  dashed?: boolean
}) => (
  <div className="text-ds-ink-subtle flex items-center justify-center gap-1 text-xs">
    {back && (
      <span className="hidden sm:flex">
        <Arrow direction="left" dashed={dashed} />
      </span>
    )}
    {back && (
      <span className="flex sm:hidden">
        <Arrow direction="up" dashed={dashed} />
      </span>
    )}
    <span className="text-center">{label}</span>
    {!back && (
      <span className="hidden sm:flex">
        <Arrow direction="right" dashed={dashed} />
      </span>
    )}
    {!back && (
      <span className="flex sm:hidden">
        <Arrow direction="down" dashed={dashed} />
      </span>
    )}
  </div>
)

const WhoCarries = ({ label, chat, operator, live, instrument, edges, note }: WhoCarriesProps) => (
  <div role="img" aria-label={label} className="flex flex-col gap-4 font-sans text-sm">
    <div className="flex flex-col items-stretch gap-2 sm:grid sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center sm:gap-3">
      <Box node={chat} tone="plain" />
      <div className="flex flex-row justify-center gap-6 sm:flex-col sm:gap-3">
        <Edge label={edges.toOperator} />
        <Edge label={edges.toChat} back />
      </div>
      <Box node={operator} tone="emphasis" />
      <div className="flex flex-row justify-center gap-6 sm:flex-col sm:gap-10">
        <Edge label={edges.publish} />
        <Edge label={edges.report} back dashed />
      </div>
      <div className="flex flex-col gap-2">
        <Box node={live} tone="plain" />
        <div className="text-ds-ink-subtle flex items-center justify-center gap-1 text-xs">
          <Arrow direction="down" />
          <span>{edges.reads}</span>
        </div>
        <Box node={instrument} tone="plain" />
      </div>
    </div>
    {note && (
      <div className="flex justify-center">
        <Eyebrow align="center">{note}</Eyebrow>
      </div>
    )}
  </div>
)

export default WhoCarries
