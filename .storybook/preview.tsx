import type { Preview } from '@storybook/nextjs'
import { withThemeByClassName } from '@storybook/addon-themes'
import '../css/tailwind.css'

// The site's own CSS and its .dark class, so stories render exactly as on the blog.
// Switch theme from the toolbar; the Playwright tests render each story in both.
const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: { light: '', dark: 'dark' },
      defaultTheme: 'light',
      parentSelector: 'html',
    }),
    (Story) => (
      <div className="bg-ds-surface text-ds-ink min-h-screen p-6">
        <Story />
      </div>
    ),
  ],
  parameters: { layout: 'fullscreen' },
}

export default preview
