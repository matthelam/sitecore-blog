# Live check

Production is whatever is on `main`, deployed by Vercel. The site is served at
`https://matthelam.com` (custom domain, and `siteMetadata.siteUrl`). `blog.matthelam.com`,
`www.matthelam.com` and the vercel.app production aliases redirect to it permanently (308), so
check `matthelam.com` itself; a check against the other hosts only proves the redirect.

## Network access

This cloud environment needs `matthelam.com` and `*.vercel.app` in its Allowed domains
(the environment's Network access settings). If a check fails with
`CONNECT tunnel failed, response 403`, the host isn't allowed. That's an environment setting,
not a site fault. Tell Matt which host was refused and that he fixes it in the environment's
Network access settings. Don't report the change as live until a real fetch has succeeded.

## Checks after merge

Vercel usually deploys within a few minutes. Poll every 30 seconds for up to 10 minutes, running the loop as a background command (the session blocks a foreground `sleep`). Stop at
the first pass, and treat the time limit as a failure to report:

```bash
URL="https://matthelam.com/blog/<slug>"
for i in $(seq 1 20); do
  body=$(curl -sS --max-time 20 "$URL") && echo "$body" | grep -qF "<expected text>" && { echo LIVE; break; }
  sleep 30
done
```

| Change | `<expected text>` and extra checks |
|---|---|
| Publish | The post title, on the post URL. The post also appears on `/blog`, and `/feed.xml` contains `<guid isPermaLink="false">https://blog.matthelam.com/blog/<slug></guid>` (guids stay on the old host on purpose: `feedGuidBase`) |
| Update | A phrase that only exists in the new version |
| Unpublish | The post URL returns 404 (`curl -s -o /dev/null -w '%{http_code}'`), and it's gone from `/blog` |
| Site change | Whatever the change makes visible, or the changed asset's URL returns 200 |

Then report: the live URL, what was checked, and the time it took to go live.
