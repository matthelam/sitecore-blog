---
id: hook-relative-path-fails-in-subfolder
tags:
- issue
keywords:
- hook
- settings
- path
- subfolder
- cwd
- exit-2
scope: repo
status: active
provenance: observed
checked: '2026-10-15'
created: '2026-10-15'
updated: '2026-10-15'
---
Hooks written as 'python scripts/memory_hook.py' fail with exit 2 once the session's working directory is a subfolder, which blocks UserPromptSubmit and PreToolUse.
