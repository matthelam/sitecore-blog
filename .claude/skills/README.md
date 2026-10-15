# Blog skills — bake-off (test phase)

These three skills exist to compare approaches for rewriting one post. They are an **experiment**,
not the production blog system. Full design: `.claude/plans/blog-skill-bakeoff.md`.

## The three arms

| Skill (trigger name) | Directory | What it is |
|---|---|---|
| `technical-writing-best-practices` | `technical-writing-best-practices/` | **Arm A — full external.** Xamfonos skill installed **verbatim** (SKILL.md + style guide), exactly as its author ships it. Original name kept on purpose. |
| `blog-rewrite-bespoke` | `blog-rewrite-bespoke/` | **Arm B — bespoke.** Authored from Matt's three posts + this repo. Voice-first. Ships a `voice-guide.md`. |
| `blog-rewrite-hybrid` | `blog-rewrite-hybrid/` | **Arm C — hybrid.** External craft (`craft-fragments.md`) gated by `voice-guide.md`; voice overrides on conflict. |

## How the test runs

Each arm is triggered via the `Skill` tool, then applied to the same post
(`data/blog/a-legal-framework-for-agent-context.mdx`) to produce one rewrite per arm as a readable
artifact, scored against the three source posts. Substance is frozen — rewrites change wording and
structure only, never claims.

## Teardown (choose the winner, delete the rest)

- Remove one losing arm: `rm -rf .claude/skills/<arm-directory>`
- Remove ALL three arms: `rm -rf .claude/skills/technical-writing-best-practices .claude/skills/blog-rewrite-bespoke .claude/skills/blog-rewrite-hybrid`
- Remove the whole experiment including the plan: also `rm .claude/plans/blog-skill-bakeoff.md`
  (and `rmdir .claude/skills .claude/plans .claude` if nothing else lives there).
- Because it all lives on branch `claude/friendly-ritchie-ujxr94`, a branch reset also reverts it.

After a winner is chosen, its arm is refactored into the real production skill set (content author /
proofreader / publisher) and the two losing arms are deleted.
