import { defineConfig, devices } from '@playwright/test'

// Visual and layout tests for the design system, run against the built Storybook.
//   yarn build-storybook && yarn test:visual
// Every story is rendered in light and dark, at desktop and phone width, and compared with the
// committed screenshots. See tests/design-system.spec.ts.
export default defineConfig({
  testDir: 'tests',
  snapshotPathTemplate: '{testDir}/__screenshots__/{arg}-{projectName}{ext}',
  expect: { toHaveScreenshot: { maxDiffPixelRatio: 0.01 } },
  fullyParallel: true,
  reporter: [['list']],
  use: { baseURL: 'http://localhost:6007' },
  projects: [
    {
      name: 'desktop',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1024, height: 900 } },
    },
    { name: 'phone', use: { ...devices['Desktop Chrome'], viewport: { width: 390, height: 844 } } },
  ],
  webServer: {
    command: 'node scripts/serve-static.mjs storybook-static 6007',
    url: 'http://localhost:6007/index.json',
    reuseExistingServer: true,
  },
})
