// Atom: the one connector used by every diagram. A line and a head, drawn in theme colours.
// - direction: which way it points (left and right are horizontal)
// - stretch: grow to fill the parent's free space (vertical arrows only), so lanes can align
// - dashed: for optional or on-demand links (the "advisory" convention)

type ArrowProps = {
  direction?: 'down' | 'up' | 'right' | 'left'
  stretch?: boolean
  dashed?: boolean
}

const Head = ({ direction }: { direction: 'down' | 'up' | 'right' | 'left' }) => {
  const points =
    direction === 'down'
      ? '0,0 8,0 4,6'
      : direction === 'up'
        ? '0,6 8,6 4,0'
        : direction === 'left'
          ? '6,0 6,8 0,4'
          : '0,0 0,8 6,4'
  const horizontal = direction === 'right' || direction === 'left'
  const box = horizontal ? { w: 6, h: 8 } : { w: 8, h: 6 }
  return (
    <svg
      width={box.w}
      height={box.h}
      viewBox={`0 0 ${box.w} ${box.h}`}
      className="fill-ds-line-strong shrink-0"
    >
      <polygon points={points} />
    </svg>
  )
}

const Arrow = ({ direction = 'down', stretch = false, dashed = false }: ArrowProps) => {
  const line = `${dashed ? 'border-dashed' : 'border-solid'} border-ds-line-strong`

  if (direction === 'right' || direction === 'left') {
    return (
      <div className="flex shrink-0 items-center self-center px-1" aria-hidden="true">
        {direction === 'left' && <Head direction="left" />}
        <div className={`w-3 border-t ${line}`} />
        {direction === 'right' && <Head direction="right" />}
      </div>
    )
  }

  return (
    <div
      className={`flex flex-col items-center py-1 ${stretch ? 'min-h-6 flex-1' : ''}`}
      aria-hidden="true"
    >
      {direction === 'up' && <Head direction="up" />}
      <div className={`border-l ${line} ${stretch ? 'flex-1' : 'h-3'}`} />
      {direction === 'down' && <Head direction="down" />}
    </div>
  )
}

export default Arrow
