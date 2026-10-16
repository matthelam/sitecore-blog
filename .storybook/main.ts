import type { StorybookConfig } from '@storybook/nextjs'

// Storybook previews and tests the design system (components/design-system/): every atom,
// molecule and organism, in light and dark. See components/CLAUDE.md.
const config: StorybookConfig = {
  stories: ['../components/design-system/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-themes'],
  framework: { name: '@storybook/nextjs', options: {} },
  staticDirs: ['../public'],
}

export default config
