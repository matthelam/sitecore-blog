---
name: task-sense-check
description: >
  End-of-task sense check, run BEFORE reporting substantive work complete. Use
  when you are about to conclude a task, land a change, or say "done": confirm
  every dimension is covered and surface any known issues with the
  implementation, cross-referenced against Repository Memory. Answers two
  questions explicitly and honestly — are all dimensions covered? are there
  known pitfalls that apply here and are they handled?
---

# Sense-check before concluding

A final pass that catches the gap you'd otherwise ship. Two parts: dimension
coverage, and known-issue recall from memory.

## 1. Dimensions — are they all covered?

Walk the dimensions that apply to what you changed and mark each covered / not /
n-a, in one line each:

- **Correctness** — does it do what was asked, including edge cases?
- **The point** — for content: does every section serve the post's locked one-liner, and does the post come back to it on purpose? (Value 1)
- **Voice and honesty** — calibrated claims and admissions kept; nothing sounds more certain than the author is. (Value 3)
- **No invented claims** — every fact, number, anecdote and quote is the author's or from a published post; quotes are verbatim; gaps marked "author to supply". (Constitution law 2)
- **Professional content** — no unprofessional language or images; work-appropriate humour only. (Constitution law 1)
- **No external sends** — nothing emailed, posted or sent to subscribers. (Constitution law 3)
- **Delivered** — on a feature branch with a PR, the build green, and, when the author asked to ship, merged and confirmed live with the URL. (Constitution law 4)
- **Renders** — `yarn build` passes, links resolve (never to a draft), and visuals read in light, dark and at 390px. (Value 6)
- **Tests** — new behaviour covered; suites green.
- **Privacy** — nothing personal/secret staged (Constitution law 1).
- **Docs / memory** — Legislation and memory updated if the change is durable.

If a dimension that applies is NOT covered, say so plainly — do not round up to
"done."

## 2. Known issues — does memory warn about this?

Query the experience layer for pitfalls touching this work:

    python scripts/memory.py search "<area keywords>" --tags issue,fix,verification

For each relevant hit: does the pitfall apply here, and is it handled? List any
that apply and are NOT yet addressed as an explicit caveat in your final report.

## Output

A short checklist (dimensions ✓/✗, applicable known-issues + status) and a
one-line verdict: genuinely complete, or complete-with-caveats (named). Never
silently omit a known gap.
