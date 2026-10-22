---
id: test-revision-revise-jsonld-with-summary
tags:
- knowledge
keywords:
- seo-jev
- test_revision
- summary
- json-ld
- description
- metadata score
scope: blog
status: active
provenance: observed
checked: '2026-10-22'
created: '2026-10-22'
updated: '2026-10-22'
---
When testing a post summary change with seo-jev test_revision, revise the JSON-LD description too; the blog copies the summary into it, and leaving it stale inflates the predicted metadata score.

## Context
22 Oct 2026, stage 1 post SEO pass 1: predicted 2.99 to 4.29, measured live 3.05 to 3.44. The stale JSON-LD still carried 'Agentic Engineering' from the old summary.
