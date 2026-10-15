# Hand-off: Legal Framework skill repo + blog link (for a local Claude Code session)

Written 2026-10-15 by the cloud session. Paste the prompt at the bottom into Claude Code on your
own machine (desktop app in local mode, or `claude` in a terminal), from your local clone of
`matthelam/sitecore-blog`. A local session uses your own `gh` login, which can do the
repo-admin steps the cloud session couldn't.

## Goal

1. The Legal Framework skill lives in its own repo, `matthelam/legal-framework-setup-skill`,
   with v1.4.1 published as a GitHub release.
2. The repo is locked down: only Matt and approved collaborators can change it, and every
   change to `main` needs Matt's approval.
3. The blog post `implementing-the-legal-framework` links to the latest release instead of a
   bundled zip.

## State right now (verified at hand-off)

| Item | State |
|---|---|
| `matthelam/legal-framework-setup-skill` | Public. Matt is the only collaborator (admin). `main` has only GitHub's placeholder README |
| PR [legal-framework-setup-skill#1](https://github.com/matthelam/legal-framework-setup-skill/pull/1) | **Open, not merged.** Branch `add-skill-v1.4.1`. Contains the skill (`legal-framework/`, byte-identical to the installed 1.4.1 bundle), README, CHANGELOG (1.1.0–1.4.1, from the skill's migration ledger), `.github/workflows/release.yml`, `.github/CODEOWNERS` (`* @matthelam`), `.github/dependabot.yml`, CONTRIBUTING.md, SECURITY.md |
| Release workflow | On a `vX.Y.Z` tag push: refuses if the tag doesn't match `Framework version:` in `SKILL.md` and `FRAMEWORK_VERSION` in `assets/memory.py`, zips `legal-framework/`, publishes the release with that version's CHANGELOG section. Least-privilege token, `actions/checkout` pinned to the v4.3.1 SHA. Dry-run locally: passes for v1.4.1, rejects a bad tag |
| Release v1.4.1 | **Not created yet** (needs PR #1 merged, then the tag) |
| Blog branch `claude/friendly-ritchie-ujxr94` (sitecore-blog) | 2 commits ahead of `main`: the post's link now points to `https://github.com/matthelam/legal-framework-setup-skill/releases/latest`, and `public/static/downloads/legal-framework-skill-v1.2.0.zip` is deleted. Build passes. **No PR yet**, held so the live link never 404s |
| PR [sitecore-blog#45](https://github.com/matthelam/sitecore-blog/pull/45) | Open. Replaces the zip with a v1.4.1 zip. **Superseded** by the release approach; close it once the blog change is live |
| Repo settings (rulesets, security, interaction limits, Actions) | **Not set.** The cloud session's GitHub App can't change repository settings |

## Steps

### 1. Merge the skill PR and publish v1.4.1

```bash
gh pr merge 1 --repo matthelam/legal-framework-setup-skill --merge
git clone https://github.com/matthelam/legal-framework-setup-skill /tmp/lfss && cd /tmp/lfss
git tag v1.4.1 && git push origin v1.4.1
gh run watch --repo matthelam/legal-framework-setup-skill        # the Release workflow
gh release view v1.4.1 --repo matthelam/legal-framework-setup-skill   # must list legal-framework-v1.4.1.zip
```

If the workflow fails, read the log (`gh run view --log-failed`), fix it on a branch with a PR,
and re-tag only after deleting the failed tag (`git push --delete origin v1.4.1`).

### 2. Lock the repo down

All via `gh api` against `repos/matthelam/legal-framework-setup-skill`. Check each endpoint against
GitHub's REST docs before running, and confirm each one in the Settings UI afterwards.

- **Ruleset on `main`:** restrict deletions, block force pushes, require a PR with 1 approval,
  Code Owner review, stale approvals dismissed. Bypass for the repository admin role, because
  GitHub won't let Matt approve his own PRs (and PRs Claude opens appear under his name).

  ```bash
  gh api -X POST repos/matthelam/legal-framework-setup-skill/rulesets --input - <<'JSON'
  {
    "name": "Protect main",
    "target": "branch",
    "enforcement": "active",
    "conditions": { "ref_name": { "include": ["~DEFAULT_BRANCH"], "exclude": [] } },
    "bypass_actors": [ { "actor_id": 5, "actor_type": "RepositoryRole", "bypass_mode": "always" } ],
    "rules": [
      { "type": "deletion" },
      { "type": "non_fast_forward" },
      { "type": "pull_request", "parameters": {
          "required_approving_review_count": 1,
          "require_code_owner_review": true,
          "dismiss_stale_reviews_on_push": true,
          "require_last_push_approval": false,
          "required_review_thread_resolution": false } }
    ]
  }
  JSON
  ```
  (`actor_id` 5 is the built-in Admin repository role.)
- **Tag ruleset** so only admins can create, move or delete `v*` tags (the release trigger):
  same endpoint, `"target": "tag"`, `ref_name.include: ["refs/tags/v*"]`, rules `creation`,
  `update` and `deletion`, same bypass actor.
- **Security:** private vulnerability reporting
  (`PUT .../private-vulnerability-reporting`); secret scanning and push protection
  (`PATCH repos/...` with `security_and_analysis.secret_scanning.status=enabled` and
  `security_and_analysis.secret_scanning_push_protection.status=enabled`).
- **Interaction limits:** `PUT .../interaction-limits` with `limit=collaborators_only`,
  `expiry=six_months`. On a public repo this is the only way to stop strangers opening issues and
  PRs. It lapses after 6 months, so note the renewal date.
- **Actions:** default workflow token read-only
  (`PUT .../actions/permissions/workflow`, `default_workflow_permissions=read`). The release job
  requests write access itself. Require approval for fork PR workflows from all external
  contributors (Settings → Actions → General).
- **Repo features:** turn off Wiki and Projects if unused.

### 3. Ship the blog change (sitecore-blog)

Follow the repo's own rules: root `CLAUDE.md` (Constitution, law 4 delivery) and the
`blog-publish` skill.

1. Confirm the link resolves:
   `curl -sI https://github.com/matthelam/legal-framework-setup-skill/releases/latest` should
   redirect to `/releases/tag/v1.4.1`.
2. `git fetch origin && git checkout claude/friendly-ritchie-ujxr94`, merge `origin/main` if it
   has moved, and run
   `python .claude/skills/blog-publish/scripts/preflight.py implementing-the-legal-framework`.
3. Run the pre-commit routine (`python scripts/memory.py lint`, the privacy check, `yarn build`),
   open the PR, wait for the Vercel status to be green, merge.
4. Live check: `https://blog.matthelam.com/blog/implementing-the-legal-framework` contains
   `legal-framework-setup-skill/releases/latest`, and the old zip URL returns 404.
5. Close sitecore-blog#45 as superseded by the release.

### 4. Decisions Matt still owes

- **Licence** for the skill repo: MIT, other, or none. Without one, nobody may legally reuse
  or adapt it. If one is chosen, add `LICENSE` via a PR before or after the release; it doesn't
  need a new version.
- **Version note in the post:** the post describes the v1.2.0 build (line counts and so on), but
  the link now gives readers 1.4.1. Add a one-line note, or leave it?
- **Vercel Agent:** Matt asked Vercel's agent to add `@vercel/analytics`, which is already live
  (sitecore-blog#50). If a PR from it appears, don't merge it: a second `<Analytics />` would
  double-count visits.

## Prompt to paste into the local session

> Run `git fetch origin && git checkout claude/friendly-ritchie-ujxr94`, then read
> `.claude/plans/handoff-legal-framework-repo.md` and carry it out from step 1.
> Verify the "State right now" table against GitHub before acting, because it may have moved on.
> Ask me the questions in "Decisions Matt still owes" when you reach them. Report what you
> changed and the live URLs at the end.
