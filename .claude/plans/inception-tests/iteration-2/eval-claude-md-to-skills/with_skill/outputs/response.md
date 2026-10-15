There's a post here, and I think it's **one post, not a series**. You have evidence for one question: what happened when you moved workflows out of CLAUDE.md. The second question, whether skills trigger reliably, has no evidence yet. It could become a follow-up post once you've collected some. For now it's the honest "what's not right yet" beat in this post.

I've drafted the brief (draft, not locked). Here's the short version.

**Recommended point:**
> "Moving workflows out of CLAUDE.md into skills fixed the rules that were being ignored, but it swapped 'ignored' for 'maybe never loaded', and that second failure is quieter."

Two other candidates are in the brief: a "what belongs where" rule of thumb, and a hook-sized "the rules at the bottom just stop counting".

**Recommended arc: Build log.** The beats are: the file that grew, how it broke, the sorting decision (the turning point), 6 skills and ~120 lines, whether it worked, what's not right yet (triggering), and the close. I also laid out **Three attempts**, which is better if you tried other fixes before skills (reordering, emphasis, per-directory files). And **Single insight**, which is shorter but has less room for the triggering doubt.

**It might also fit the Agent Harness series.** The Legal Framework post already says the root CLAUDE.md should be concise, and this is field evidence for that from a client repo. Your call whether it's part three or a standalone post that links back.

**Before this can lock, I need these from you:**
1. **Did the move fix the ignoring?** Your notes say the file shrank, not that the rules started being followed. The point depends on this.
2. **How did you notice rules near the bottom being ignored?** Which rules? Did you check whether position was the cause? Right now that's my inference, not your claim.
3. **Where did the other ~780 lines go?** All into the 6 skills, deleted, or into per-directory files?
4. **What have you actually seen with skill triggering?** A specific miss, or just no way to verify?
5. **What's your rule for "stays in CLAUDE.md" vs "becomes a skill"?** It's probably the most reusable thing in the post.
6. **How much can you say about the client repo?** And what are the 6 skills, anonymised?

The full brief, with the beat table, turning points, emphasis plan, honesty beats and opening hooks, is in `brief.md`. If you answer 1 and 2, I can firm up the point and the arc.
