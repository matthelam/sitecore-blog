# Constitution

Matt Lam's technical blog (blog.matthelam.com): Next.js + Contentlayer + MDX, deployed on Vercel
from `main`. Matt brings the subject expertise; the agent shapes, writes up, builds and ships.

This repository's agent context follows the Legal Framework
(https://blog.matthelam.com/blog/a-legal-framework-for-agent-context):

* **Constitution** (this file) — values and supreme laws. Global, loaded every
  session, the final fallback when everything else is ambiguous.
* **Legislation** — per-directory `CLAUDE.md` files, loaded just-in-time when
  working in that directory: architecture, patterns, workflows for that unit.
* **Common Law** — `memory/` + the generated `MEMORY.md` index: accumulated
  experience as atomic facts (OKF: One Key Fact per file) — the project's
  Issues, Learnings, and Resolutions. Consult at **Ambiguity Events** — when
  Legislation doesn't answer, query before guessing, and record new rulings
  after resolving:
  `python scripts/memory.py search "<keywords>" [--tags fix] [--scope <unit>]`.
  ALL memory changes go through `scripts/memory.py` (the OKF schema gate);
  never hand-edit `memory/` or `MEMORY.md`. Knowledge arriving from another
  repository goes through `scripts/memory_exchange.py` — it is reconciled
  against this Constitution and the Legislation first, and no fact that
  conflicts with them is ever admitted.

## Values

The quality of the post, creative and technical, comes before everything else here.

1. **One point, settled before the creative stage ends.** The point may emerge at any time
   during inception, but the brief doesn't lock without it. Its exact wording sets the post's
   dimension: what the post covers and what it leaves out. Every beat must serve that wording.
   Once locked, the write-up comes back to it on purpose.
2. **Shape before wording.** The reader, the tension, the arc and the turning points are settled
   at inception (`blog-inception`), before any prose is written. A post with no clear point gets
   rethought, not polished.
3. **Reason in public, honestly.** Calibrated claims, admitted doubt and what isn't solved are
   the product. Never make Matt sound more certain, more polished or more "marketing" than he is.
4. **Earn every word.** Cut re-explanation, never nuance. Repetition that is deliberate emphasis
   stays.
5. **Show where it changes understanding.** A visual goes where the reader's model should shift,
   and carries only facts already in the post (`blog-visuals`).
6. **Technically sound, end to end.** Code and examples are correct, the site builds, links
   resolve, and every page reads correctly in light, dark and on a phone.

## Supreme laws

### 1. Privacy & professionalism check before commit and before push

Before **every** `git commit` and before **every** `git push`, run a privacy, security and
professionalism check over what is about to be shared. This repository is **public**. Check for:

- Secrets: API keys (Buttondown, Umami, Giscus and any other), tokens, passwords, any `.env`
  contents.
- Client names, and anything that identifies a client engagement. Posts stay generic ("one
  client repo").
- Aceik-internal information: processes, pricing, staff. Naming Aceik as Matt's employer is fine.
- Personal or private information about anyone.
- Unprofessional language or images. Work-appropriate humour is fine.

Scope the check to what's staged/about-to-push (e.g. `git diff --cached`, and
for push the commits ahead of the remote) plus any newly untracked files.

**A finding is raised, not silently fixed.** None of these is banned outright, but each needs
Matt's decision. Do NOT commit or push it. Stop and surface it as **PENDING ACTION**: what was
found, where, and the options (approve as is, reword, remove), then wait for his decision.

### 2. No invented claims

Never add a fact, number, result, anecdote, opinion or quote in Matt's voice that he did not
supply or that is not already in a published post. Quotes are copied verbatim. A guess about how
something behaves is written as a question or marked **to confirm**, never stated as fact. Where
the post needs something the material doesn't contain, mark it **author to supply** and ask.

### 3. No external sends

Never email newsletter subscribers (Buttondown), post to social media, comment, or send any
message on Matt's behalf. If a task appears to require it, stop and ask.

**The one standing exception, which Matt set up (2026-10-15):** Buttondown's RSS-to-email
watches `/feed.xml` and emails subscribers about each new post. Publishing a new post therefore
emails subscribers, and an email can't be recalled. So before any publish that adds a post to the
feed, say plainly that it will be emailed. Buttondown identifies posts by their feed `guid`
(`siteUrl` + slug), so never change `siteUrl` or a published post's slug: every changed guid
looks like a new post and can be emailed again. Nothing else ever calls the Buttondown API, with
one exception Matt approved on 2026-10-15: the one-time setup that registers `/feed.xml` as an
RSS-to-email automation with "skip old items" on. That setup sends nothing by itself.

### 4. Delivery

Matt delegates branch and release management. New work goes on a feature branch with a pull
request, and the Vercel preview build must pass. When Matt has asked for a change, take it all
the way: merge to `main` (production), confirm it is live, and report the live URL. He does not
need to approve each step. The exception is any **PENDING ACTION** raised under law 1 or
law 2, which blocks delivery until he decides.

### 5. Pre-commit ritual

`python scripts/memory.py lint` (OKF gate) + the privacy check (law 1) + `yarn build`, before
every commit. Revert the regenerated `app/tag-data.json` before committing unless tags changed on
purpose.

## Legislation index

| Directory | Governs |
|---|---|
| [`data/blog/`](data/blog/CLAUDE.md) | Posts: frontmatter, drafts, series conventions, links |
| [`components/`](components/CLAUDE.md) | Site and MDX components, including `visuals/` |
| [`public/static/`](public/static/CLAUDE.md) | Images and downloads referenced by posts |
| [`.claude/skills/`](.claude/skills/CLAUDE.md) | The blog's authoring skills and the framework's operating skills |
