'use client'

import { useEffect, useRef } from 'react'

// Organism: a YouTube video, embedded with Google's IFrame Player API
// (https://developers.google.com/youtube/iframe_api_reference). The API script loads once per
// page, and YT.Player replaces a placeholder with the player. The placeholder is created here,
// outside React's tree, because the API swaps it out of the DOM. Player settings go through
// playerVars (https://developers.google.com/youtube/player_parameters). Google requires a
// player viewport of at least 200 by 200 pixels, hence the minimum height on narrow screens.

type YouTubePlayerProps = {
  videoId: string
  // Accessible name for the player, e.g. the video's title.
  title: string
  // Optional start time in seconds.
  start?: number
}

type YTPlayer = { destroy: () => void; getIframe: () => HTMLIFrameElement }
type YTNamespace = {
  Player: new (
    element: HTMLElement,
    options: {
      videoId: string
      width: string
      height: string
      playerVars: Record<string, string | number>
      events: { onReady: (event: { target: YTPlayer }) => void }
    }
  ) => YTPlayer
}
type YTWindow = Window & { YT?: YTNamespace; onYouTubeIframeAPIReady?: () => void }

const API_SRC = 'https://www.youtube.com/iframe_api'
let apiReady: Promise<YTNamespace> | undefined

// Loads the API script once and resolves when the API calls onYouTubeIframeAPIReady.
const loadApi = () => {
  if (apiReady) return apiReady
  apiReady = new Promise((resolve) => {
    const w = window as YTWindow
    const previous = w.onYouTubeIframeAPIReady
    w.onYouTubeIframeAPIReady = () => {
      previous?.()
      if (w.YT) resolve(w.YT)
    }
    const tag = document.createElement('script')
    tag.src = API_SRC
    tag.async = true
    document.head.appendChild(tag)
  })
  return apiReady
}

const YouTubePlayer = ({ videoId, title, start }: YouTubePlayerProps) => {
  const frameRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const frame = frameRef.current
    if (!frame) return
    let player: YTPlayer | undefined
    let cancelled = false
    const placeholder = document.createElement('div')
    frame.appendChild(placeholder)

    loadApi().then((YT) => {
      if (cancelled) return
      player = new YT.Player(placeholder, {
        videoId,
        width: '100%',
        height: '100%',
        playerVars: {
          playsinline: 1,
          rel: 0,
          origin: window.location.origin,
          ...(start ? { start } : {}),
        },
        events: {
          onReady: (event) => {
            event.target.getIframe().title = title
          },
        },
      })
    })

    return () => {
      cancelled = true
      player?.destroy()
      frame.replaceChildren()
    }
  }, [videoId, title, start])

  const watchUrl = `https://www.youtube.com/watch?v=${encodeURIComponent(videoId)}${
    start ? `&t=${start}s` : ''
  }`

  return (
    <div className="font-sans text-sm">
      <div
        ref={frameRef}
        className="bg-ds-surface-muted border-ds-line relative aspect-video min-h-[202px] w-full overflow-hidden rounded-md border [&_iframe]:absolute [&_iframe]:inset-0 [&_iframe]:h-full [&_iframe]:w-full"
      />
      <p className="text-ds-ink-subtle mt-2">
        <a
          href={watchUrl}
          className="!text-ds-ink-muted hover:!text-ds-ink underline underline-offset-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch “{title}” on YouTube
        </a>
      </p>
    </div>
  )
}

export default YouTubePlayer
