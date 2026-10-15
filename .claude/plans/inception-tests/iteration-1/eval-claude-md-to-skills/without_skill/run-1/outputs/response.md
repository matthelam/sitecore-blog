I think this is one post, not a series. At least not yet.

You have a complete arc: CLAUDE.md grew to ~900 lines, the agent started ignoring the rules near the bottom, you moved the workflows into 6 skills, and it's now ~120 lines. What you don't have is an ending for the skills part. "Not sure they trigger reliably" is an open question, not a finding. I'd make that the closing section of this post ("what I don't know yet"), the same way the Legal Framework implementation post ended on the parts that weren't right. If you later collect real evidence on triggering, that's a natural stand-alone follow-up. You don't need to promise a series to get there.

**The point I'd build it around:** CLAUDE.md is always loaded, so everything in it competes for attention all the time. Past a certain size, adding rules meant the agent followed fewer of them. Skills take workflows out of that always-loaded file. The cost is that you now depend on the agent picking the right skill. You traded "always seen, sometimes ignored" for "followed when loaded, sometimes not loaded."

**One thing to watch:** *Writing Agent Guidelines That Actually Work* already covers "Three Layers, Not One Big File" and the Encyclopedia anti-pattern. So this one should be a field report: one real repo, real numbers, a real symptom. Link back for the theory instead of repeating it.

The plan has the point, reader, tension, an 8-beat arc, title options, a draft summary and suggested tags. The beats that need your input are marked [NEED]. The most important is:

1. **The specific rule the agent ignored, and what it did instead.** The whole post rests on this one example.
2. What the 6 skills are, roughly (anonymised for the client).
3. What stayed in the 120 lines, and how you decided.
4. Any case where a skill didn't fire, or fired at the wrong time.
5. Whether you tried moving an ignored rule higher up to see if it was the position. If you did, that's your strongest evidence. If not, I'd describe "rules near the bottom were ignored" as something you noticed, not a proven cause.

Send me those and I'll turn the plan into a draft.
