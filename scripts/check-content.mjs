// Content rules for posts, checked on the lines a change adds (so older posts are not blocked):
//   node scripts/check-content.mjs [base-ref]   (default: origin/main)
// 1. No em dashes in post content (data/blog/CLAUDE.md law 7).
// 2. Frontmatter title/summary are plain ASCII apart from the en dash: Contentlayer silently drops
//    a post whose frontmatter has curly quotes or em dashes.
// 3. No CRLF line endings in posts: they break Contentlayer's frontmatter parsing.
import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'

const base = process.argv[2] ?? 'origin/main'
const git = (...args) => execFileSync('git', args, { encoding: 'utf8' })
const changed = git('diff', '--name-only', '--diff-filter=AM', `${base}...HEAD`)
  .split('\n')
  .filter((f) => /^data\/blog\/.*\.mdx$/.test(f) && existsSync(f))

const problems = []
for (const file of changed) {
  const raw = readFileSync(file, 'utf8')
  if (raw.includes('\r\n')) problems.push(`${file}: CRLF line endings (use LF)`)

  const fm = raw.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? ''
  for (const line of fm.split('\n')) {
    if (!/^(title|summary):/.test(line)) continue
    const bad = [...line].filter((c) => c.charCodeAt(0) > 127 && c !== '–')
    if (bad.length)
      problems.push(`${file}: frontmatter "${line.slice(0, 40)}..." has ${bad.join('')}`)
  }

  const added = git('diff', '-U0', `${base}...HEAD`, '--', file)
    .split('\n')
    .filter((l) => l.startsWith('+') && !l.startsWith('+++'))
  added.forEach((l) => {
    if (l.includes('—')) problems.push(`${file}: em dash in added line "${l.slice(1, 70)}"`)
  })
}

if (problems.length) {
  console.error(`Content check failed (${problems.length}):\n  ${problems.join('\n  ')}`)
  process.exit(1)
}
console.log(`Content check passed (${changed.length} changed post(s)).`)
