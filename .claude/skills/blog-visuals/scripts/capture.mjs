// Capture a public page with Playwright at fixed widths and themes, for a post screenshot.
//   node .claude/skills/blog-visuals/scripts/capture.mjs <url> <out-prefix> [css-selector]
// Writes <out-prefix>-<width>-<theme>.png for widths 1280 and 390, light and dark, at device
// scale 2. With a selector, captures only that element and prints its size in image pixels.
// Write <out-prefix> to the scratchpad, never the repo: these are raw captures.
// Public pages only. Logged-in tools are captured with Claude in Chrome (references/screenshots.md).
import { chromium } from '@playwright/test'

const [url, prefix, selector] = process.argv.slice(2)
if (!url || !prefix) {
  console.error('usage: capture.mjs <url> <out-prefix> [css-selector]')
  process.exit(1)
}

const WIDTHS = [1280, 390]
const THEMES = ['light', 'dark']
const SCALE = 2

const browser = await chromium.launch()
for (const width of WIDTHS) {
  for (const colorScheme of THEMES) {
    const page = await browser.newPage({
      viewport: { width, height: 900 },
      colorScheme,
      deviceScaleFactor: SCALE,
      reducedMotion: 'reduce',
    })
    await page.goto(url, { waitUntil: 'networkidle' })
    const file = `${prefix}-${width}-${colorScheme}.png`
    if (selector) {
      const target = page.locator(selector).first()
      await target.screenshot({ path: file })
      const box = await target.boundingBox()
      console.log(
        `${file}  element ${Math.round(box.width * SCALE)}x${Math.round(box.height * SCALE)}`
      )
    } else {
      await page.screenshot({ path: file })
      console.log(file)
    }
    await page.close()
  }
}
await browser.close()
