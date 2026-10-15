# First-pass draft: Agentic Studio flows lose brand kit context on rename

**Verdict:** Yes, worth a post. It's the same kind of post as *Debugging Agents* and *Agent Export Drops These Fields*: a short, specific trap you only find by hitting it, with a one-line check the reader can do. It also fits the running Agentic Studio quirks series (export drops fields, widgets don't export, debug pane caching).

**Why it earns a post:** Sitecore's docs say the opposite. The [Create a space](https://doc.sitecore.com/sai/en/users/sitecoreai/working-with-agentic-studio/understanding-spaces/create-a-space.html) page says flows **"Maintain context - carry data and decisions through every stage for consistent results"**, and [Rename a space](https://doc.sitecore.com/sai/en/users/sitecoreai/working-with-agentic-studio/understanding-spaces/rename-a-space.html) says **"Renaming a space does not affect its contents, collaborators, or history."** If renaming quietly drops the brand kit, the output still looks fine. It just stops being on-brand, and nothing tells you why. That gap is the point of the post.

**Size:** About 250–350 words. Same shape as the debug-pane post.

---

## Facts I need from you before this is publishable

I've marked these `[TODO]` in the draft. I haven't guessed any of them.

1. **What exactly did you rename?** A custom flow's definition, or the space a flow runs in (you rename that from the Spaces page or the space header)? The docs only describe renaming a *space*, and that difference changes the headline.
2. **How did you see the loss?** Did the brand kit selector come back empty, did the output go off-brand, or did the debug pane show no brand kit retrieval?
3. **Fix / workaround:** Does re-selecting the brand kit after the rename fix it? Does renaming *before* the first run avoid it?
4. **Scope:** Every flow or just one (e.g. ABM Campaign)? Brand kit only, or does brand context (the separate feature) drop too?
5. **Support ticket:** Logged? If so, I'll add the same "will update when I hear back" line as the export post.
6. **When:** Roughly when you hit it (month), since Agentic Studio changes quickly.

---

## Draft

```mdx
---
title: 'Agentic Studio: Renaming a Flow Drops the Brand Kit'
date: '2026-10-15'
tags: ['agentic-studio', 'sitecore-ai', 'agents', 'sitecore', 'brand-kit']
draft: true
summary: 'Rename an Agentic Studio flow after you create it and the brand kit context goes with it. The output still looks fine. It just is not on-brand anymore. Check the brand kit after any rename.'
---

Another small one from working in Agentic Studio. If you rename a flow after you've created it, it loses the brand kit context you gave it.

[TODO: one or two sentences on the exact steps. For example: create the flow/space, select the brand kit, rename it from <where>, then <what you saw>.]

What makes this one easy to miss is that nothing breaks. The flow still runs, the agents still hand over to each other, and you still get output. It's just not grounded in your brand kit anymore, so tone, dos and don'ts and glossary terms quietly drift. [TODO: confirm this is how it showed up for you.]

It also goes against what the documentation says. [Create a space](https://doc.sitecore.com/sai/en/users/sitecoreai/working-with-agentic-studio/understanding-spaces/create-a-space.html) says flows "maintain context" and "carry data and decisions through every stage", and [Rename a space](https://doc.sitecore.com/sai/en/users/sitecoreai/working-with-agentic-studio/understanding-spaces/rename-a-space.html) says renaming "does not affect its contents, collaborators, or history." A rename feels cosmetic, so it's the last thing you'd suspect.

> A rename shouldn't change behaviour. Here, it does.

**What to do about it:** [TODO: confirmed workaround. For example: after any rename, open the context and re-select the brand kit before you run it again. Or settle the name before you attach the brand kit.]

If you want proof rather than a feeling, the [debug pane](/blog/agentic-studio-debug-pane-browser-caching) is the quickest way to see what context a run actually used. [TODO: keep this only if the debug pane does show brand kit retrieval. Otherwise cut it.]

[TODO: support ticket line, if logged. For example: "I've logged this with Sitecore and will update this post when I hear back."]

Not a big deal once you know about it. Name it, then brand it, and check again if you ever rename.

## References

- [Create a space](https://doc.sitecore.com/sai/en/users/sitecoreai/working-with-agentic-studio/understanding-spaces/create-a-space.html) — Sitecore documentation
- [Rename a space](https://doc.sitecore.com/sai/en/users/sitecoreai/working-with-agentic-studio/understanding-spaces/rename-a-space.html) — Sitecore documentation
- [Brand kits](https://doc.sitecore.com/sai/en/users/sitecoreai/design-components/brand-kits/brand-kits.html) — Sitecore documentation
```

---

## Notes

- **Proposed filename:** `data/blog/agentic-studio-flow-rename-drops-brand-kit.mdx` (matches the `agentic-studio-*` naming).
- **Title alternatives:** "Agentic Studio: Name the Flow Before You Brand It" / "Agentic Studio: A Rename That Isn't Cosmetic".
- **Draft is `draft: true`** until the TODOs are filled.
- **Possible link:** the lifecycle post (`the-ai-project-lifecycle-hiding-in-plain-sight-inside-sitecore-agentic-studio.mdx`) says "every agent, every flow, every brief generation automatically picks up those constraints". This quirk is a real exception to that line. It could get a one-line note, or a link back from here.
