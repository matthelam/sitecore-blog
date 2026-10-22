import Eyebrow from '../atoms/Eyebrow'
import Icon from '../atoms/Icon'
import Surface from '../atoms/Surface'
import type { FieldSet } from '../types'

// Organism: sets of fields on one item, side by side, each marked as rendered or not. A flag
// marks a set that something read by mistake: it is a genuinely failed step, so it uses the
// negative role, with the cross and words.

type FieldSetsProps = {
  label: string
  item: string
  sets: FieldSet[]
  renderedLabel: string
  notRenderedLabel: string
}

const FieldSets = ({ label, item, sets, renderedLabel, notRenderedLabel }: FieldSetsProps) => (
  <div role="group" aria-label={label} className="flex flex-col gap-3 font-sans text-sm">
    <Eyebrow>{item}</Eyebrow>
    <div className="grid gap-3 sm:grid-cols-2">
      {sets.map((set) => (
        <Surface
          key={set.heading}
          tone={set.rendered ? 'emphasis' : 'advisory'}
          pad="lg"
          className="flex flex-col gap-3"
        >
          <div className="flex flex-col gap-1">
            <span className="text-ds-ink-muted flex items-center gap-1.5 text-xs font-semibold">
              <Icon name={set.rendered ? 'check' : 'cross'} />
              {set.rendered ? renderedLabel : notRenderedLabel}
            </span>
            <p className="text-ds-ink text-base font-semibold">{set.heading}</p>
          </div>
          <ul className="flex flex-col gap-1.5">
            {set.fields.map((field) => (
              <li key={field.name} className="flex flex-wrap items-baseline gap-x-2">
                <span className="text-ds-ink">{field.name}</span>
                {field.output && (
                  <span className="text-ds-ink-subtle font-mono text-xs">→ {field.output}</span>
                )}
              </li>
            ))}
          </ul>
          {set.note && <p className="text-ds-ink-muted text-xs leading-relaxed">{set.note}</p>}
          {set.flag && (
            <Surface tone="negative" pad="md" className="flex items-start gap-2 text-xs">
              <span className="pt-0.5">
                <Icon name="cross" />
              </span>
              <span className="font-semibold">{set.flag}</span>
            </Surface>
          )}
        </Surface>
      ))}
    </div>
  </div>
)

export default FieldSets
