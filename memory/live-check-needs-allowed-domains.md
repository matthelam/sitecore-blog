---
id: live-check-needs-allowed-domains
tags:
- knowledge
keywords:
- live
- network
- '403'
- allowed-domains
- vercel
- curl
scope: repo
status: active
provenance: observed
checked: '2026-10-16'
created: '2026-10-15'
updated: '2026-10-16'
---
Live checks from the cloud session need matthelam.com, *.vercel.app and vercel.com in the environment's Allowed domains; without them curl fails with 'CONNECT tunnel failed, response 403'.
