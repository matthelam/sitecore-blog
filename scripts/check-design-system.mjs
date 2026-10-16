// Enforces the design-system rules (components/CLAUDE.md) so they cannot drift:
// 1. Only theme roles: no palette colours (gray-500, red-600, primary-...) and no dark: variants
//    anywhere in components/design-system. Colour and dark mode live in css/design-system.css.
// 2. Layering: atoms import nothing from molecules/organisms/templates; molecules import nothing
//    from organisms/templates; organisms import nothing from templates.
// Runs before every build; exits non-zero with the offending lines.
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative, sep } from 'node:path'

const ROOT = 'components/design-system'
const PALETTE =
  /\b(?:bg|text|border|fill|stroke|outline|accent|ring|divide|from|via|to|decoration|shadow)-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|primary|secondary|white|black)(?:-\d{2,3})?\b/
const DARK = /\bdark:/
const ORDER = ['atoms', 'molecules', 'organisms', 'templates']

const files = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) return name === 'stories' ? [] : files(path)
    return /\.(tsx?|jsx?)$/.test(name) && !/\.stories\./.test(name) ? [path] : []
  })

const problems = []
for (const file of files(ROOT)) {
  const layer = relative(ROOT, file).split(sep)[0]
  const rank = ORDER.indexOf(layer)
  readFileSync(file, 'utf8')
    .split('\n')
    .forEach((line, i) => {
      const where = `${file.replaceAll(sep, '/')}:${i + 1}`
      if (PALETTE.test(line))
        problems.push(`${where} palette colour; use a theme role (bg-ds-*, text-ds-*...)`)
      if (DARK.test(line))
        problems.push(`${where} dark: variant; dark mode belongs in css/design-system.css`)
      const imp = line.match(/from ['"]\.\.\/(atoms|molecules|organisms|templates)\//)
      if (rank >= 0 && imp && ORDER.indexOf(imp[1]) > rank)
        problems.push(`${where} ${layer} must not import from ${imp[1]}`)
    })
}

if (problems.length) {
  console.error(`Design system check failed (${problems.length}):\n  ${problems.join('\n  ')}`)
  process.exit(1)
}
console.log('Design system check passed.')
