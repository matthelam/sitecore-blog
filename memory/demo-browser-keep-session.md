---
id: demo-browser-keep-session
tags:
- preference
keywords:
- playwright
- chrome
- session
- sign-in
- login
- cdp
- demo
- harness
- explore
- boulderfest
scope: blog
status: active
provenance: contractual
checked: '2026-10-28'
created: '2026-10-28'
updated: '2026-10-28'
source: Matt, 28 Oct 2026
---
For Boulderfest demo scripts, keep one Chrome on the demo profile running with a debugging port and attach to it, so SitecoreAI stays signed in instead of Matt signing in on every relaunch.

## Context
Matt: 'you know you can actually hold the session each time you restart, you've done it before.. save me a lot of time'. demo/stage-2/browser.mjs attach() starts Chrome on port 9333 with %USERPROFILE%\.boulderfest-demo\chrome-profile once and connects over CDP; scripts detach without closing it. Stage 1's recording runs launch their own context for video and end with a forced Chrome stop to keep cookies.
