# blog-visuals trigger test: screenshot path (2026-10-16)

Queries: `.claude/skills/blog-visuals/evals/trigger-evals.json` (14: 9 should trigger, 5 should not).
Runner: `trigger.py`, 3 runs per query. skill-creator's `run_eval.py` can't run on Windows
(`select()` on pipes fails with WinError 10038), so this harness runs `claude -p` in plan mode
(read-only) and stops at the first skill load or after 5 tool calls. A trigger is a Skill-tool call
or a Read of the skill's `SKILL.md`: in this repo the model mostly loads project skills by reading
the file, the path the 2026-10-15 bake-off notes also describe.

| Run                                                                      | Result                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| New description (`results.json`)                                         | 11/14. All five negatives pass; five of six screenshot queries pass |
| Old description, the 3 failing queries (`baseline-old-description.json`) | 0/3: redact 0/3, chart 1/3, organism 1/3                            |

The chart and new-organism misses predate this change (same rate on the old description). The
redact query improved from 0/3 to 1/3; in the misses the model looks for the image file first and
reaches the skill later than the 5-call cutoff.

Not run: output runs with and without the skill (no `evals.json` for blog-visuals yet).
