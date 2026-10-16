import { expect, test } from '@playwright/test'
import { readFileSync } from 'node:fs'

// For every story in the built Storybook, in light and dark (per project width):
// - no console errors
// - nothing wider than the viewport (no horizontal scroll at 390px)
// - matches the committed screenshot (update with: yarn test:visual --update-snapshots).
//   CI sets SKIP_SCREENSHOTS because the baselines are rendered on Windows.

type Entry = { id: string; type: string; title: string; name: string }
const index = JSON.parse(readFileSync('storybook-static/index.json', 'utf8')) as {
  entries: Record<string, Entry>
}
const stories = Object.values(index.entries).filter((e) => e.type === 'story')

for (const story of stories) {
  for (const theme of ['light', 'dark'] as const) {
    test(`${story.title} / ${story.name} (${theme})`, async ({ page }) => {
      const errors: string[] = []
      page.on('console', (m) => m.type() === 'error' && errors.push(m.text()))
      page.on('pageerror', (e) => errors.push(e.message))

      await page.goto(`/iframe.html?id=${story.id}&viewMode=story&globals=theme:${theme}`)
      await page.waitForSelector('#storybook-root > *')
      await page.emulateMedia({ reducedMotion: 'reduce' })

      expect(errors, 'console errors').toEqual([])
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth
      )
      expect(overflow, 'horizontal overflow (px)').toBeLessThanOrEqual(0)
      if (!process.env.SKIP_SCREENSHOTS) {
        await expect(page).toHaveScreenshot(`${story.id}-${theme}.png`, { fullPage: true })
      }
    })
  }
}
