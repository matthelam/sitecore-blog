'use client'

import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react'

// Organism: an (i) button that sits inline in a paragraph and opens a short note with optional
// source links. Opens on click or Enter (so it works on phones), closes on Escape, a second
// click or a click outside. Built from spans only, because it lives inside a <p>. The note is
// nudged sideways so it stays inside the viewport. Every word and link comes from the post.

type InfoTipProps = {
  // Accessible name for the button, e.g. "Why these five fields?"
  label: string
  title: string
  body: string[]
  links?: { label: string; href: string }[]
}

const InfoTip = ({ label, title, body, links = [] }: InfoTipProps) => {
  const [open, setOpen] = useState(false)
  const [shift, setShift] = useState(0)
  const id = useId()
  const wrapRef = useRef<HTMLSpanElement>(null)
  const noteRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const onDown = (event: PointerEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onDown)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onDown)
    }
  }, [open])

  // Keep the note inside the viewport: measure it centred once it opens, then nudge it sideways.
  useLayoutEffect(() => {
    const note = noteRef.current
    if (!open || !note) return
    note.style.transform = 'translateX(-50%)'
    const rect = note.getBoundingClientRect()
    const gutter = 12
    const overRight = rect.right - (window.innerWidth - gutter)
    const overLeft = gutter - rect.left
    setShift(overRight > 0 ? -overRight : overLeft > 0 ? overLeft : 0)
  }, [open])

  return (
    <span ref={wrapRef} className="relative inline-block align-baseline">
      <button
        type="button"
        aria-label={label}
        aria-expanded={open}
        aria-controls={`${id}-note`}
        data-infotip-button=""
        onClick={() => setOpen(!open)}
        className={`focus-visible:outline-ds-emphasis-line ml-0.5 inline-flex h-[1.15em] w-[1.15em] translate-y-[0.1em] items-center justify-center rounded-full border font-sans text-[0.7em] leading-none font-semibold not-italic transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none ${
          open
            ? 'border-ds-emphasis-line bg-ds-emphasis-fill text-ds-ink'
            : 'border-ds-line-strong text-ds-ink-muted hover:border-ds-emphasis-line hover:text-ds-ink'
        }`}
      >
        i
      </button>
      <span
        ref={noteRef}
        id={`${id}-note`}
        role="note"
        hidden={!open}
        style={{ transform: `translateX(calc(-50% + ${shift}px))` }}
        className="border-ds-line bg-ds-surface text-ds-ink absolute top-full left-1/2 z-20 mt-2 block w-[min(22rem,calc(100vw-24px))] rounded-md border p-3 text-left font-sans text-sm leading-relaxed font-normal not-italic shadow-md"
      >
        <span className="text-ds-ink-subtle mb-1 block text-xs font-semibold tracking-wide uppercase">
          {title}
        </span>
        {body.map((text) => (
          <span key={text} className="mt-1.5 block first-of-type:mt-0">
            {text}
          </span>
        ))}
        {links.length > 0 && (
          <span className="border-ds-line mt-2 block border-t pt-2 text-xs">
            {links.map((link, index) => (
              <span key={link.href}>
                {index > 0 && <span aria-hidden="true"> · </span>}
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!text-ds-ink-muted hover:!text-ds-ink underline underline-offset-2"
                >
                  {link.label}
                  <span aria-hidden="true"> {'↗︎'}</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </span>
            ))}
          </span>
        )}
      </span>
    </span>
  )
}

export default InfoTip
