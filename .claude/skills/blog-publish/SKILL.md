---
name: blog-publish
description: Take a finished post or site change on Matt Lam's blog from the working tree to live in production and prove it's live - pre-publish checks, feature branch, PR, Vercel preview, merge to main, then a check against the live site with the live URL reported. Use whenever Matt wants something on the blog to go live or come down - "publish this", "ship it", "put it live", "push it to prod", "make the post live", "release the series", "take the draft flag off", "unpublish that post", "is it live yet?", "update the published post" - and whenever a write-up or fix he asked for is ready to deliver. Not for shaping an idea (blog-inception), writing or rewriting the words (blog-rewrite-hybrid) or building visuals (blog-visuals); and never for emailing subscribers or posting to social media.
---

# Blog Publish — from the working tree to live, proven

This is the delivery stage, and Constitution law 4 describes it: Matt delegates branch and
release management, so once he asks for a change it is taken all the way to production and
**confirmed live**. "Merged" isn't the finish line. A merge that never deployed, or deployed a
broken page, looks identical from GitHub. The job ends with a live URL that has been fetched and
shown to contain the change.

## What blocks a publish

Stop, raise a **PENDING ACTION** and wait for Matt only when one of these comes up. Everything
else is yours to resolve.

- Constitution law 1: a privacy or professionalism finding in what's about to be shared.
- Constitution law 2: a claim, number or quote in the post that you can't trace to Matt or to a
  published post. Quotes from other posts are checked word for word against the source.
- A preflight ERROR you can't fix without changing Matt's words (for example a missing image he
  has to supply).
- Anything that would send something outward (law 3). See the newsletter note below.

## Process

1. **Pin down what's going live.** Which post(s), and which kind of change:
   - **publish**: a draft goes live (`draft: true` → `draft: false`, or the field removed);
   - **update**: a published post changes (only the change Matt asked for; Legislation
     `data/blog/` law 1);
   - **unpublish**: a live post comes down (`draft: true`). Check what links to it first
     (`grep -rn "/blog/<slug>" data/`), because those links break in production;
   - **site change**: components, config or anything else under the site.

   For a publish, ask Matt whether `date` should become today's date, unless he has said. Don't
   change it silently: the date is part of how readers place the post.

2. **Run the preflight** on every post the change touches:
   `python .claude/skills/blog-publish/scripts/preflight.py <slug> [...]`
   It checks frontmatter, lowercase tags, that every `/static/` asset exists, that every
   `/blog/` link resolves and doesn't point at a draft, that images have alt text, and that series
   pointers are linked. Fix ERRORs that don't touch Matt's wording (paths, tag case, links).
   Report WARNs and decide with the author's intent in mind.

3. **Series knock-ons.** Publishing a series part is when its neighbours' forward pointers turn
   into links ("In the next article…" → `[next article](/blog/<slug>)`), in the same change.
   Unpublishing reverses that. The preflight's "unlinked series pointer" warnings show where.

4. **Constitution checks** before every commit (law 5): `python scripts/memory.py lint`, the law 1
   scan over `git diff --cached` plus untracked files, and `yarn build` (run Yarn as
   `node .yarn/releases/yarn-3.6.1.cjs`). Revert the regenerated `app/tag-data.json`.

5. **Branch, commit, PR.** Work on the session's feature branch; if its previous PR is already
   merged, restart the branch from `origin/main` first. Commit with a message that says what goes
   live, push, and open a PR whose title says the same.

6. **Preview.** Wait for the Vercel status on the PR head to be `success` (the GitHub status on
   the PR, context "Vercel"). Then fetch the preview URL from the Vercel bot comment and check
   the page returns 200 and contains the post's title. A red preview is fixed and pushed before
   anything merges.

7. **Merge and confirm live.** Merge the PR (merge commit), then poll the live site until the
   change shows. See `references/live-check.md` for the exact checks and the time limit. Report
   the live URL to Matt. Delivery isn't complete until this step passes.

8. **If production is broken after merge**, revert through a PR (`git revert -m 1 <merge sha>`
   on a fresh branch), take that through steps 4 to 7, and tell Matt what happened. Never
   force-push `main`.

## The newsletter

The site's newsletter is Buttondown (`data/siteMetadata.js`), and the site publishes an RSS
feed. **To confirm with Matt:** whether Buttondown is set to email subscribers automatically from
the RSS feed. If it is, publishing a post sends an email, which makes publishing an outward send
under law 3. Until he answers, say so whenever a new post goes live. Never call the Buttondown
API.

## What this skill doesn't do

- Change the wording of a post. Wording problems go back to blog-rewrite-hybrid, or to Matt.
- Publish a post Matt hasn't asked to publish, or skip the live check because the merge
  succeeded.
- Treat "the build passed" as "it's live".
