# blog-publish step 6 (Preview): with and without the change

Date: 2026-11-07. Description unchanged, so trigger evals (`evals/trigger-evals.json`) are
unaffected; this records the output runs for the behaviour change.

Task given to both arms: follow only step 6 for PR lammp/sitecore-blog#99, treating it as a
site change whose visible result is the homepage text "Agentic Sitecore Development". Read-only.

| Check | Old step 6 | New step 6 |
|---|---|---|
| Found the preview URL | No | Yes, from the GitHub deployment's `environment_url` |
| Read the preview's content | No ("can't be read") | Yes, `vercel curl` returned 200, no login page |
| Evidence the change is on the page | None | Expected text present in title and body |
| Verdict | May merge, on the build status alone | May merge, on status + 200 + content |
| Turned off protection | No | No |

Findings fed back into the wording:
- The new arm added `--scope`, which `vercel curl` passes to curl and breaks. Step 6 now says
  not to.
- The expected text was already on production, so it proved nothing about this PR. Step 6 now
  asks for text only the new version has.
- The fetch example only showed `/blog/<slug>`; it now covers wherever a site change shows.
