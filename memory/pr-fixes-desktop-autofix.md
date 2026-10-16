---
id: pr-fixes-desktop-autofix
tags:
- preference
keywords:
- auto-fix
- autofix
- auto-merge
- pull request
- PR
- CI
- failing checks
- GitHub Action
- claude-code-action
- agent
- merge
scope: repo
status: active
provenance: contractual
checked: '2026-10-16'
created: '2026-10-16'
updated: '2026-10-16'
source: Matt, 2026-10-16
---
Session-opened pull requests are bound, get the desktop app's Auto-fix (not a GitHub Action) and GitHub auto-merge, so they merge once all required checks pass.

## Context
Matt, 2026-10-16. Auto-fix chosen over the Claude GitHub Action: no stored credentials in a public repo, full local context and rules; it runs only while the app is open. Auto-merge is safe because the main ruleset requires checks, design-system, Vercel and CodeQL.
