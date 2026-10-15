---
id: hook-path-anchored-to-project-dir
tags:
- fix
keywords:
- hook
- settings
- path
- CLAUDE_PROJECT_DIR
- cwd
scope: repo
status: active
provenance: observed
checked: '2026-10-15'
created: '2026-10-15'
updated: '2026-10-15'
resolves: hook-relative-path-fails-in-subfolder
---
Hook commands in .claude/settings.json use exec form with ${CLAUDE_PROJECT_DIR}/scripts/memory_hook.py so they resolve from the project root whatever the working directory.
