'use client'

import { useId, useState } from 'react'
import Chip from '../atoms/Chip'
import Eyebrow from '../atoms/Eyebrow'
import Surface from '../atoms/Surface'
import type { TeamGroup } from '../types'

// Organism: a team as groups of roles. Hovering, focusing or tapping a role shows its simplified
// profile: what it thinks first, what it prioritises and what it defocuses. Every role's card
// stays in the DOM (inactive ones hidden), so the page carries all of them. The groups sit side
// by side as equals, not as a hierarchy; the active role uses the emphasis role.

type TeamProfilesProps = {
  label: string
  groups: TeamGroup[]
  hint: string
  thinksLabel: string
  prioritisesLabel: string
  defocusesLabel: string
}

const TeamProfiles = ({
  label,
  groups,
  hint,
  thinksLabel,
  prioritisesLabel,
  defocusesLabel,
}: TeamProfilesProps) => {
  const roles = groups.flatMap((group) => group.roles)
  const [active, setActive] = useState(0)
  const id = useId()
  let index = -1

  return (
    <div role="group" aria-label={label} className="flex flex-col gap-4 font-sans text-sm">
      <div className="flex flex-wrap gap-3">
        {groups.map((group) => (
          // Each group's width scales with its number of roles, so a large group never gets cramped beside small ones.
          <div
            key={group.name}
            className="flex min-w-40"
            style={{ flex: `${group.roles.length} 1 ${group.roles.length * 6}rem` }}
          >
            <Surface tone="muted" pad="md" className="flex w-full flex-col gap-2">
              <Eyebrow>{group.name}</Eyebrow>
              <div className="flex flex-wrap gap-2">
                {group.roles.map((role) => {
                  index += 1
                  const i = index
                  return (
                    <button
                      key={role.name}
                      type="button"
                      aria-pressed={i === active}
                      aria-controls={`${id}-card-${i}`}
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      className={`focus-visible:outline-ds-emphasis-line rounded-md border-2 px-3 py-1.5 text-left transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none ${
                        i === active
                          ? 'border-ds-emphasis-line bg-ds-emphasis-fill text-ds-ink font-semibold'
                          : 'border-ds-line bg-ds-surface text-ds-ink-muted hover:border-ds-line-strong'
                      }`}
                    >
                      {role.name}
                    </button>
                  )
                })}
              </div>
            </Surface>
          </div>
        ))}
      </div>

      <p className="text-ds-ink-subtle text-xs">{hint}</p>

      {roles.map((role, i) => (
        <div key={role.name} id={`${id}-card-${i}`} hidden={i !== active}>
          <Surface pad="lg" className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <p className="text-base font-semibold">{role.name}</p>
              <Chip>{role.profile}</Chip>
            </div>
            <dl className="flex flex-col gap-3">
              <div className="flex flex-col gap-0.5">
                <dt>
                  <Eyebrow>{thinksLabel}</Eyebrow>
                </dt>
                <dd className="leading-relaxed">{role.thinks}</dd>
              </div>
              <div className="flex flex-col gap-0.5">
                <dt>
                  <Eyebrow>{prioritisesLabel}</Eyebrow>
                </dt>
                <dd className="leading-relaxed">{role.prioritises.join(' · ')}</dd>
              </div>
              <div className="flex flex-col gap-0.5">
                <dt>
                  <Eyebrow>{defocusesLabel}</Eyebrow>
                </dt>
                <dd className="text-ds-ink-muted leading-relaxed">{role.defocuses.join(' · ')}</dd>
              </div>
            </dl>
          </Surface>
        </div>
      ))}
    </div>
  )
}

export default TeamProfiles
