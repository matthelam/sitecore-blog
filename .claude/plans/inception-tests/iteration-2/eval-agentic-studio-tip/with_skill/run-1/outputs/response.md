Yes, I think it's worth a post. It's a tip, the same size as the debug-pane and export-is-lossy ones. It also fits that run nicely, and it cuts against something the lifecycle post says: that every flow picks up the brand kit automatically.

I've drafted a brief: `.claude/briefs/agentic-studio-flow-rename-brand-kit.md`.

**Proposed point:** *"Name the flow before you build it. Renaming one afterwards loses its brand kit context."*
If re-selecting the brand kit after a rename fixes it, I'd switch to *"After you rename a flow, check its brand kit."* It's more useful and more honest.

**Arc:** Tip: hook (you give a working flow its proper name) → the quirk → how you spotted it → the trap → the rule → what's not known yet → imperative close. I've also laid out two alternatives:
- A before/after "single insight" version. Stronger if you have output from the same flow with and without the kit.
- A "what doesn't survive" roundup with the export and widget posts. That's a later post, not this one.

**What I need from you before this can lock.** Most of the post depends on these:
1. What does "lose" mean exactly? Is the kit shown as unset on the flow, does a different kit get used, or does the setting look fine while the output goes off-brand?
2. How did you notice: settings, the output, or the debug pane?
3. Does it warn or error, or just keep running? I haven't assumed it fails silently.
4. Does re-selecting the brand kit after the rename fix it?
5. Is it reproducible, and is it custom flows only or OOTB ones too? Have you logged a ticket?
6. Is a before/after screenshot available?

Answer those, even briefly, and I'll tighten it up. The brief stays Draft until you say lock.
