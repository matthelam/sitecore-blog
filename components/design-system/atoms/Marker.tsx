// Atom: a numbered circle. It points at one place in a screenshot and labels the same item in the
// list beside it, so the two match. Solid inverse fill, ringed in the surface colour so it stands
// out on light and dark screenshots alike. Never red (components/CLAUDE.md law 6). 20px on phones,
// 24px from the sm breakpoint.

type MarkerProps = {
  n: number
}

const Marker = ({ n }: MarkerProps) => (
  <span className="bg-ds-inverse-fill text-ds-inverse-ink ring-ds-surface inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] leading-none font-semibold ring-2 sm:h-6 sm:w-6 sm:text-xs">
    {n}
  </span>
)

export default Marker
