# Post plan: Moving out of CLAUDE.md and into skills

Status: first-pass shape, not a draft. Gaps you need to fill are marked **[NEED]**.

---

## 1. One post or a series?

**One post now. Keep a possible part two in reserve, but don't announce a series.**

Why:

- You have one complete arc: the file grew, it stopped working, you split it up, it got smaller. That's a story with a beginning and a middle.
- You don't have an ending yet. "Not sure skills trigger reliably" is an open question, not a finding. A series built on it would promise a part two you can't write until you've watched the skills run for a while.
- The open question is the most honest part of the post. Put it at the end as "what I don't know yet" (the same move as the "parts that are not right yet" section in *Implementing the Legal Framework*).
- If you later gather real evidence on triggering (skills that never fired, ones that fired on the wrong task, description wording that fixed it), that becomes a stand-alone follow-up: *"Do skills actually trigger? What I saw after N weeks."* It stands on its own, so it doesn't need a series around it.

Signals that would turn it into a series: if the "what stayed in CLAUDE.md" decision turns out to be a big topic of its own, or if you have enough on trigger reliability to fill a post before you publish this one.

---

## 2. The point (what the reader leaves with)

> CLAUDE.md is always loaded, so everything in it competes for attention all the time. Once it got big, the rules at the bottom quietly stopped counting. Moving whole workflows into skills, which load only when needed, got the root file back to rules that apply to every task. The cost is a new risk: now you're relying on the agent to pick up the right skill.

Short version: **always-loaded context has a budget. Skills move a workflow out of that budget, and in exchange you depend on the agent finding the skill.**

## 3. Reader

A developer (likely a Sitecore/XM Cloud dev like your usual reader) using Claude Code on a real client repo, whose CLAUDE.md has been growing with every "oh, and also remember to..." moment. They know what CLAUDE.md is. They may have heard of skills but haven't moved anything into one.

## 4. Tension

Putting everything in CLAUDE.md feels safe: the agent is guaranteed to see it. The bad surprise is that being seen isn't the same as being followed. Past a certain size, more rules made the agent follow *fewer* of them. Skills fix that, but they replace "always seen, sometimes ignored" with "followed when loaded, but sometimes not loaded". You've swapped one failure mode for another, and you're not yet sure the trade is fully worth it.

## 5. How it fits with existing posts (avoid repeating yourself)

- *Writing Agent Guidelines That Actually Work* already has "Three Layers, Not One Big File" and the **Encyclopedia** anti-pattern. This post shouldn't restate the theory. It's the **field report**: one real client repo, real line counts, a real symptom. Link back rather than re-explaining.
- *Three Dimensions of Agent Context* is about "what they should load". This post is that idea with a concrete before/after.
- *Agent Harness: The Legal Framework* says CLAUDE.md is good at prescription. You can tie in quickly: this is what happens when the prescription layer is overloaded.
- *Sub-Agents vs Personas vs Skills* defined skills as helper classes. One line can call back to it: "this is me actually extracting the helper classes."

## 6. Shape and size

- Type: experience post / field report, with a short practical section.
- Length: about 1,200 to 1,600 words. Shorter than the Three Dimensions post, about as long as Writing Agent Guidelines.
- One visual worth considering: a before/after bar (≈900 lines vs ≈120 lines plus 6 skills loaded on demand). It should use only numbers that appear in the post.

## 7. Arc (numbered beats)

1. **Cold open: the symptom.** The agent broke a rule you knew was in CLAUDE.md. You went and checked, and the rule was there, near the bottom of a ~900-line file. **[NEED: the specific rule and what the agent did instead. This one concrete example carries the whole post.]**
2. **How it got to 900 lines.** Nobody writes 900 lines at once. Every correction, every "remember to", every client quirk got added to the end. Show it as gradual. **[NEED: rough timeline, e.g. how many months or sprints; what kinds of things piled up: build steps, deploy steps, serialization, content migration, naming conventions?]**
3. **Turning point 1: being seen is not being followed.** The file was always loaded, and that was the problem. Everything in it competed for attention on every task, including tasks that had nothing to do with most of it. Rules near the bottom lost out. Present this as what you *observed*, not a claim about how the model works internally. **[NEED: how you noticed the pattern. Was it one rule, or several rules all in the lower part of the file?]**
4. **The sort: rules vs workflows.** The key decision was splitting "things true for every task" from "things you do sometimes". Workflows (step-by-step procedures for one kind of job) moved to skills. Standing rules stayed. **[NEED: what went in the 6 skills (names or a one-line description each, anonymised for the client); what made the cut for the remaining ~120 lines.]**
5. **The result.** ~900 → ~120 lines. What changed in behaviour since then. **[NEED: anything you've noticed improve, even anecdotally. If you haven't measured it, say so plainly.]**
6. **Turning point 2: the new failure mode.** A skill only helps if it gets loaded. CLAUDE.md is always seen; a skill is chosen by the agent based on its description. You're not yet sure that choice happens reliably. **[NEED: any case where a skill didn't fire when it should have, or fired when it shouldn't. If there are none, say "I haven't caught one yet, but I haven't been looking carefully either."]**
7. **What I'd tell you to do (short, practical).** A quick test for each block in your CLAUDE.md: *does this apply to every task in this repo?* If no, it's a skill candidate. Plus whatever you're doing to reduce the trigger risk. **[NEED: e.g. a one-line pointer in CLAUDE.md naming each skill and when to use it, or how you write skill descriptions. Only include what you actually did.]**
8. **Close: what I don't know yet.** Trigger reliability is the open question. Say what you'd need to see to call it solved, and that a follow-up will come if you get the evidence.

## 8. Working titles

- *I Stopped Putting Everything in CLAUDE.md*
- *CLAUDE.md Has a Budget*
- *From 900 Lines to 120: Moving Workflows Out of CLAUDE.md*
- *Agent Harness: When CLAUDE.md Gets Too Big* (only if you want it under the Agent Harness banner)

Draft summary line:
> My root CLAUDE.md on one client repo hit around 900 lines, and the agent started ignoring the rules near the bottom. Moving the workflows into six skills got it back to about 120. It works better, but I've traded one problem for another: now I need the skills to actually trigger.

Suggested tags: `['ai', 'agents', 'context-engineering', 'claude-code', 'skills']`

## 9. Things to check before drafting

- **Client confidentiality.** Anonymise the repo, and make sure the example rule and the skill names don't identify the client.
- **Don't overstate the cause.** "Rules near the bottom were ignored" is your observation. Keep it framed that way unless you've tested it (e.g. moved a rule to the top and watched it start being followed). If you *have* done that test, it's the strongest evidence you've got, so lead with it.
- **Line counts are approximate.** Keep the "~" or "around" in the text.
- **Claude Code specifics.** If you describe how skills get picked up (loaded based on their description), check it against the current Claude Code docs before publishing. This area changes fast.

## 10. Open questions for you (ranked by how much the post depends on them)

1. What was the rule the agent ignored, and what did it do instead?
2. What are the 6 skills, roughly (anonymised)?
3. What stayed in the 120 lines, and what was your test for keeping something?
4. Have you seen a skill fail to trigger, or trigger wrongly? Even one case helps.
5. Did you check whether moving a rule higher up changed anything?
6. Is this under the "Agent Harness" banner or a stand-alone post?
