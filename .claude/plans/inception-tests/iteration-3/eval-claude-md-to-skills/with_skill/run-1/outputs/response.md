There's a post here, and I think it's **one post, not a series**, at least for now.

**Why one post:** a series needs every part to stand on its own. The part you can write now is
"my CLAUDE.md got too long, here's what I moved and how". The obvious second part, "do skills
actually trigger reliably?", has no evidence behind it yet. Your notes say you're not sure. So
end this post on that open question. If you test triggering properly later, that becomes its own
follow-up, possibly as an Agent Harness entry.

**What I think the point is (provisional):**

> Moving workflows out of CLAUDE.md and into skills fixed the rules being ignored, but it swapped
> one risk for another: context that's always loaded but not followed, for context that might
> never load.

I picked this one because it's the only phrasing where "still not sure skills trigger reliably"
is part of the point rather than a caveat. It's also the angle your earlier posts don't cover:
`three-dimensions` and the Legal Framework posts already argue for lean, selectively loaded
context. Two other phrasings are in the brief, with what each would include and leave out:
a "what stays vs what moves" sorting rule, and a short "long CLAUDE.md files stop being followed"
tip.

**Recommended arc: Build log** (like `implementing-the-legal-framework`): the repo → the symptom
→ what moved and what stayed (turning point) → ~900 → ~120 → how it runs now → **do skills
trigger reliably?** (the second turning point, not a footnote) → links to earlier posts → close.
Single insight and Three attempts are laid out as alternatives. Three attempts only works if you
tried something before skills.

**What I need from you most.** The post lives or dies on these:

1. **How did you see the agent ignoring rules near the bottom?** Which rules, and what did it do
   instead? I've kept "near the bottom" as your observation only. I haven't claimed it was about
   position rather than length.
2. **Did moving to skills actually fix it?** Your notes say what you moved, not what changed after.
3. **What's behind "not sure skills trigger reliably"?** A skill that failed to load, one that
   loaded at the wrong time, or just no way to check?
4. **How did you decide what stayed in the ~120 lines?** That's the takeaway readers can use.
5. Which point wording do you want? Nothing locks until you choose it.

The full brief has the beats with evidence status, turning points, honesty beats, hooks and the
rest of the open questions:
`.claude/plans/inception-tests/iteration-3/eval-claude-md-to-skills/with_skill/run-1/outputs/brief.md`
(in normal use this would be `.claude/briefs/claude-md-to-skills.md`). Status: **Draft**.
