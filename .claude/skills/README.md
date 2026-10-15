# Blog skills

## Decision: Hybrid won the bake-off (2026-10-15)

The three-way rewrite bake-off is resolved. **Arm C — Hybrid — is the chosen approach**:
external technical-writing craft gated by the author's voice guide, voice overriding on every
conflict. See the comparison and scorecard under `.claude/plans/bakeoff-rewrites/`.

The two losing arms have been removed:
- `blog-rewrite-external/` (full external Xamfonos skill) — removed.
- `blog-rewrite-bespoke/` (voice-only) — removed; its `voice-guide.md` lives on inside the hybrid.

The surviving `blog-rewrite-hybrid/` is self-contained (`SKILL.md` + `voice-guide.md` +
`craft-fragments.md`). It will be refactored into the production skill set (content author /
proofreader / publisher) when that system is scoped.

## Teardown (if ever needed)

- Remove the winner too: `rm -rf .claude/skills/blog-rewrite-hybrid`
- The external skill's full 25-principle style guide remains recoverable from git history.
