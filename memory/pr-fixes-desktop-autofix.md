---
id: pr-fixes-desktop-autofix
tags:
- preference
keywords:
- auto-fix
- autofix
- pull request
- PR
- CI
- failing checks
- GitHub Action
- claude-code-action
- agent
scope: repo
status: active
provenance: contractual
checked: '2026-10-16'
created: '2026-10-16'
updated: '2026-10-16'
source: Matt, 2026-10-16
---
Failing pull requests are fixed through the Claude desktop app's Auto-fix on a session-bound PR, not a GitHub Action; every PR a session opens is bound and has Auto-fix turned on.

## Context
Chosen over the Claude GitHub Action: no stored credentials in a public repo, and full local context and rules. Trade-off: it runs only while the app is open.
