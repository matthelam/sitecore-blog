There's a good post here. I've drafted a brief at `.claude/briefs/claude-md-to-skills.md`. It's a **Draft** and nothing is locked.

**My answer on one post or a series: one post, for now.** You have the evidence for one question, "what moves out of CLAUDE.md and why". You don't have it yet for the second, "do skills actually trigger reliably?". A part two on that today would mostly say "I'm not sure", so I've made it the open problem the post ends on. If you go and measure triggering later, that becomes part two and the pair works as a series.

**The point.** Pick one, or rewrite it:
- **A.** Your root CLAUDE.md is the one file the agent reads every time, so put in it only what has to apply every time, and move everything else to where it loads when needed. *(my pick)*
- **B.** Moving workflows into skills swapped a rule the agent stopped reading for a skill the agent might not load. That's a better problem, but still a problem. *(I'd use this as the turn in the middle of the post)*
- **C.** Past a certain length, every new CLAUDE.md rule weakens the ones already there. *(sharpest, but needs more than one repo behind it)*

**Arc.** I recommend a **build log**: the habit, the ignored rule, the sort, then 900 → 120 plus six skills, how it runs day to day, the trade-off, and what's not right yet. It uses the before/after moment from the single-insight pattern. I also considered:
- **Three attempts**, which is better *if* you tried something in between, like reordering, bolding or nested CLAUDE.md files.
- **Single insight**, a 500–700 word version if you'd rather ship something short.

**Where the reader's view should change:**
- seeing a rule buried at the bottom of a 900-line file
- seeing 900 lines split into a small "always" pile and a big "sometimes" pile
- seeing the failure *move* (ignored at the bottom) → (might not load), not disappear

**One thing to decide early:** this is close to your Legal Framework posts. The Constitution post already argues that the root CLAUDE.md should be short. This is field evidence for that. It could be Agent Harness post three, but post two promised post three would cover tags and global memory. Or it could be a standalone post that links back.

**What I need from you before this can lock.** None of these are in your notes, so I haven't filled them in:
1. One specific rule the agent ignored, roughly where it sat, and what it did instead.
2. How you know it was position or length and not a vague or conflicting rule. The whole post rests on this.
3. Was there a middle attempt before skills? And why skills rather than per-directory CLAUDE.md files? Readers of the framework posts will ask.
4. Your sorting rule for what stays and what goes, plus what's in the 120 lines and what the six skills are. Anonymise for the client as needed.
5. Did the move actually fix the ignored rules?
6. What makes you unsure skills trigger: a specific miss, or not being able to tell whether they fired?
7. Was it one repo only, or have you seen this elsewhere?

Pick a one-liner, settle the series question, and answer whichever of those you can. I'll update the brief and we can lock it.

*(Test run note: as instructed, the brief was saved to the test outputs folder as `brief.md`, not to `.claude/briefs/`.)*
