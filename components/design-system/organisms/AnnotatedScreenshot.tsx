import Eyebrow from '../atoms/Eyebrow'
import Marker from '../atoms/Marker'
import Surface from '../atoms/Surface'
import type { Callout } from '../types'

// Organism: a sanitised screenshot with numbered markers placed on it, and the same numbers as a
// list below, so the post can say "look at 2" without arrows painted into the PNG. Markers sit at
// a percentage of the image, so they stay put at every width. The markers on the image are
// decorative; the list carries the same information for screen readers.

type AnnotatedScreenshotProps = {
  // /static/images/<post-slug>/<name>.png, already sanitised (public/static/CLAUDE.md law 1).
  src: string
  alt: string
  // Intrinsic pixel size, so the frame reserves its height before the image loads.
  width: number
  height: number
  label: string
  callouts: Callout[]
}

const AnnotatedScreenshot = ({
  src,
  alt,
  width,
  height,
  label,
  callouts,
}: AnnotatedScreenshotProps) => (
  <div className="font-sans text-sm">
    <Surface tone="plain" pad="none" className="relative overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element -- a plain image, as Markdown images in posts are */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className="block h-auto w-full"
      />
      {callouts.map((c, i) => (
        <span
          key={`${i}-${c.label}`}
          aria-hidden="true"
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${c.x}%`, top: `${c.y}%` }}
        >
          <Marker n={i + 1} />
        </span>
      ))}
    </Surface>
    <div className="mt-4">
      <Eyebrow>{label}</Eyebrow>
      <ol className="mt-2 space-y-2">
        {callouts.map((c, i) => (
          <li key={`${i}-${c.label}`} className="flex items-start gap-2 leading-snug">
            <Marker n={i + 1} />
            <span className="pt-0.5">
              <span className="text-ds-ink font-semibold">{c.label}</span>
              {c.detail && <span className="text-ds-ink-muted block">{c.detail}</span>}
            </span>
          </li>
        ))}
      </ol>
    </div>
  </div>
)

export default AnnotatedScreenshot
