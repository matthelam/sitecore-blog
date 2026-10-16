# Legislation — .claude/skills/

The skills that run this blog. Two groups live here:

| Group                          | Skills                                                                                                                             | Role                                                                                |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Blog authoring                 | `blog-inception`                                                                                                                   | Creative stage: shapes an idea into a locked story-flow brief. No prose             |
|                                | `blog-rewrite-hybrid`                                                                                                              | Write-up stage: voice guide, concision, tone profiles, series conventions           |
|                                | `blog-visuals`                                                                                                                     | Diagrams, screenshots and interactive visuals as MDX components                     |
|                                | `blog-publish`                                                                                                                     | Delivery stage: preflight, branch, PR, preview, merge, and proof the change is live |
| Legal Framework operating loop | `memory-consult`, `memory-capture`, `task-sense-check`, `memory-promote`, `knowledge-export`, `knowledge-import`, `framework-lint` | Installed by the legal-framework skill (v1.4.1); fixed machinery                    |

`README.md` records how the authoring skills were chosen (the 2026-10-15 bake-off).

## Laws for this directory

1. **Inception, write-up and publish stay separate.** `blog-inception` decides what the story is and never
   writes body prose; the write-up skills turn a locked brief into wording; `blog-publish` ships
   what's finished and never changes the wording. None absorbs another's job, because shaping and wording done together end up hiding problems the shape should
   have solved.
2. **Authoring skill changes are tested.** A change to a blog skill's behaviour or description is
   checked with skill-creator: trigger queries against the installed skill, and output runs with
   and without the skill, graded against the checks in its `evals/`. The test records go under
   `.claude/plans/`.
3. **The voice guide is Matt's, anchored to his sentences.** Rules in `voice-guide.md` and
   `tone-profiles.md` change only on Matt's word, and each cites the post or correction it came
   from.
4. **The operating-loop skills are not edited locally.** They're shared across every Legal
   Framework install. Changes come through a legal-framework upgrade, never a local edit.
