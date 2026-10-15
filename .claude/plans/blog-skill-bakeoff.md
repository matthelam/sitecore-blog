# Blog Skills Bake-Off — Plan & Scope

Status: **SKILLS INSTALLED — awaiting your Claude Desktop restart, then I run the tests.**
Nothing in the production blog system is built yet. Branch: `claude/friendly-ritchie-ujxr94`.
Everything is reversible (see `.claude/skills/README.md` teardown).

Correction to §1: the earlier "Unknown skill" failure was a malformed probe file (closing `---`
not on its own line), **not** proof that mid-session skills can't register. In fact all three arms
registered in-session once written correctly. Restarting Desktop remains the reliable guarantee that
they load for the test run.

---

## 0. The one decision this plan needs from you

**How should the skills be "truly triggered"?** I verified a hard constraint (see §1) that
forces a choice between two honest mechanisms. Pick one before I run the bake-off:

- **Option R1 — Fresh-session trigger (literal Skill-tool invocation).** Install each skill,
  commit it, then spawn a *new* Claude Code session on this branch. That session sees the skill
  in its registered list and fires it via the `Skill` tool for real. This is the only way to
  literally watch the Skill tool trigger *our own* skill. Cost: outputs come back asynchronously
  and it's more moving parts.
- **Option R2 — In-session faithful application (verbatim load).** Install each skill file, then
  `Read` its full verbatim text into context and execute every instruction literally, stating
  plainly which file drove the output. This is exactly what the Skill tool injects under the
  hood — same text, same application — the only difference is the trigger path is `Read`, not the
  `Skill` button. Faster, fully in this session, but you won't see the literal `Skill` tool call.

My recommendation: **R1 for the final proof** (it's what you asked for — "I want to see the skills
triggered"), optionally with **R2 as a fast first pass** so you can read drafts sooner. Decide in §8.

---

## 1. Verified finding: what "triggering a skill" can honestly mean here

I tested it rather than assuming. I wrote a real `.claude/skills/trigger-test/SKILL.md` and called
`Skill(skill="trigger-test")`. Result: **`Unknown skill: trigger-test`.**

- **Verified:** The harness builds the triggerable-skill list when a session *starts*. A skill
  authored mid-session is **not** invocable via the `Skill` tool in that same session.
- **Verified:** Every skill currently triggerable in this session was present at session start.
- **Inferred (high confidence):** A skill committed to `.claude/skills/` **is** picked up by a
  *new* session at its startup — that is how all listed skills got registered. Hence Option R1.

This is the integrity pivot: I will not stage a fake `Skill`-tool call. "Triggered" means either a
genuine fresh-session invocation (R1) or a transparent verbatim-load-and-apply (R2). No emulation.

---

## 2. What we are testing — three approaches, one post

Input for all three: `data/blog/a-legal-framework-for-agent-context.mdx` (rewrite only — preserve
the substance and every claim; no new domain content invented). Each approach is its own isolated
skill directory so it installs and uninstalls cleanly.

### A — Full external skill (installed verbatim, unmodified)
- **Skill:** `Xamfonos/technical-writing-best-practices` — its real `SKILL.md` + the full
  `technical-writing-style-guide.md` (26 principles). Both already fetched in full; nothing of mine
  mixed in. This is the strongest *complete* external skill that targets technical blog writing.
- **Installed as:** `.claude/skills/blog-rewrite-external/` (verbatim copy of the two files).
- **Predicted effect (to be confirmed by running it):** tightens argument and cuts filler, but its
  explicit rules — kill hedging, cut tangents that don't serve the thesis, "conclusions that extend,
  not summarize," no preamble — will fight your actual voice: your `<aside>` reflections, your
  deliberate "I believe / I feel," and your "In Summary" close. Expect a sharper, more generic,
  less *you* post. The bake-off is to see exactly how much.

### B — Bespoke skill (what I think is correct)
- **Authored by me** from your three posts (voice ground truth) + this repo (platform truth).
- **Installed as:** `.claude/skills/blog-rewrite-bespoke/`.
- **Encodes:** your voice fingerprint (first-person exploratory, coined+capitalised concepts, em-dash
  rhythm, `<aside>` tangents that admit struggle, problem-open / "In Summary"-close, the essay vs.
  worked-guide modes); correctness/clarity fixes that **preserve** voice (your live post ships
  "heirarchy", "Consitution", "the our Common Law"); and platform validity (frontmatter schema,
  MDX components, image/diagram conventions). You bring topic and substance; it never invents claims.

### C — Hybrid skill
- **Installed as:** `.claude/skills/blog-rewrite-hybrid/`.
- **Encodes:** the transferable external craft — thesis spine, sentence-craft/filler cuts, the
  "no AI tells" rule (ban "it's not X, it's Y", "no X, no Y, no Z") — **with the bespoke voice guide
  as the override layer**: on any conflict, voice wins. This is the "best of both" candidate.

---

## 3. The controlled rewrite protocol (apply, don't emulate)

1. Same input file, same length ballpark, same section skeleton unless the skill's own rules demand
   restructuring (if they do, that's a finding, not a cheat).
2. **Substance is frozen.** Rewriting is wording/structure/clarity only. No new facts, no removed
   claims, no invented data. Any claim in equals the same claim out.
3. Each run states up front *which installed file(s)* drove it, then applies them literally.
4. Output of each run:
   - the real rewritten **`.mdx`** (valid frontmatter + components) under a scratch path, and
   - a **readable Artifact** rendering that rewrite so you can read and compare without a build.
5. The three artifacts are visually parallel (same template) so differences are content, not styling.

## 4. Evaluation rubric — scored against your 3 posts as ground truth

Each rewrite scored 1–5 on:

| Dimension | What it measures |
|---|---|
| **Voice fidelity** | Does it still read like you? (coinages, asides, rhythm, honesty, "In Summary") |
| **Correctness** | Typos/grammar fixed; no new errors introduced |
| **Argument & structure** | Thesis clarity, transitions, earned conclusions |
| **Platform validity** | Valid MDX, frontmatter schema intact, your components used correctly |
| **Substance integrity** | Every original claim preserved; nothing hallucinated or dropped |

Deliverable alongside the three artifacts: a one-screen scorecard + my verdict on which approach to
promote into the production system.

## 5. Reversibility / teardown (so we keep the winner, delete the rest)

- Each approach is a self-contained directory: `.claude/skills/blog-rewrite-{external,bespoke,hybrid}/`.
- Undo one approach: delete its directory. Undo the whole experiment:
  `rm -rf .claude/skills/blog-rewrite-*` and delete the scratch `.mdx` outputs + artifacts.
- All of it lives on `claude/friendly-ritchie-ujxr94`, so a branch reset also reverts cleanly.
- The chosen winner's skill is later renamed/refactored into the real production skill set (§6);
  the two losers are removed. Nothing touches `main` or `data/blog/` until you say so.

## 6. Out of scope for THIS phase (deferred until a winner is chosen)

The production system we discussed — **blog-author**, **blog-proofreader**, **blog-publisher**
skills, plus the `voice-guide.md` + `platform-guide.md` references and a governance root — is **not**
built now. We pick the winning *approach* from the bake-off first, then scope and build that system.

## 7. Grounding already gathered (so execution is friction-free)

- Platform facts: frontmatter schema (`contentlayer.config.ts`), `yarn dev` preview, `draft` flag,
  tag-slug auto-count, image/diagram conventions, Vercel prod via PR→`main` (last point still to be
  hard-confirmed when we build the publisher).
- Voice facts: read from the source MDX of the Legal Framework essay + the Agent-as-Customer guide.
- Full source of the external skill (SKILL.md + 25KB style guide) and of the harvested fragments
  (copy-editing Sweeps 1–2, filler/plain-English lists, "no AI tells").

## 8. Open decisions for you

1. **Trigger mechanism:** R1 (fresh-session, literal), R2 (in-session, verbatim), or R1-with-R2-preview.
2. **External skill choice for A:** accept `Xamfonos/technical-writing-best-practices` as "the full
   external skill," or name a different one.
3. **Go / adjust:** approve this plan as written, or change the test design before I run it.
