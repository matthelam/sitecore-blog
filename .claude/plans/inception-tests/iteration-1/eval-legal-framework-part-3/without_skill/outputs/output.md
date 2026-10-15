# Post plan: Legal Framework, part three

**Working title:** *Agent Harness: What One Key Fact Was Actually For*
**Alternates:** *Agent Harness: A Month on Hindsight* / *Agent Harness: The Format Was Never the Point*
**Series:** follows `a-legal-framework-for-agent-context` (28 Jun) and `implementing-the-legal-framework` (19 Aug)
**Status:** first-pass plan, not locked. Section 7 lists the open questions only you can answer.

---

## 1. Where the series left off

Post two set up post three directly. These are the threads it left open, and they're the ones readers will be waiting on:

- "Post three will cover whichever of those survives contact with reality."
- "I am still a fan of OKF as a format. I am much less confident that I needed to build the storage layer underneath it."
- "If it does what it says, the interesting question stops being 'how do I store this' and becomes 'what is worth remembering', which was always the harder half."
- Three unresolved problems: **tags aren't settled**, **there's no consolidation pass**, and **Claude's own memory isn't locked out**.
- Two forward threads: **keep tuning tags**, and **a global memory with per-space scoping**.
- An open call: "Come and tell me if you have solved the consolidation problem."

A month on Hindsight is the "contact with reality" that post two promised. The post should read as the payoff to those lines and not as a new topic.

## 2. The point (what the reader leaves with)

**My recommendation:**

> OKF's stated reason was retrieval, and Hindsight retrieves better without it. But one-fact-per-file was also doing a second, quieter job: it made me decide, at write time, what was worth remembering. That's the job I lost, and that's the one that matters.

Put another way: the storage layer was replaceable, and the discipline wasn't. It belongs at the moment of capture, not in the file format.

This answers your question, "does it matter anymore?", with "half of it doesn't, and the half that does was never really about files." It's honest about what you gave up, it doesn't defend the scripts out of sunk cost, and it lands on the "what is worth remembering" line you already promised.

**Two other points, if your month's evidence says otherwise:**

- **A. "It doesn't matter. Let the store be messy and let recall do the work."** Use this if, after a month, you can't name a case where the missing discipline hurt you. It's a clean, slightly brave post ("I built the wrong half"), but it skips the Legislation feedback loop, which is the framework's most distinctive part.
- **B. "It matters, and I've rebuilt it on top of Hindsight."** Use this only if you've actually built something, such as OKF-shaped retain calls, a capture skill that writes one sentence per retain, or tags mapped to your taxonomy. Don't write it as a plan for future work.

## 3. Why the discipline still matters: three jobs OKF did besides retrieval

This is the core of the post. Each job needs to be checked against your real month (section 7) before it goes in.

1. **The admission gate.** A single sentence under 240 characters forces you to decide what the fact *is* before you keep it. Post two named "what deserves to become a memory" as the unsolved question, and OKF was a partial answer to it. Without that constraint, does Hindsight retain *everything*, so the problem moves from "can I find it" to "is what I found any good"?
2. **Countable precedent for the feedback loop.** Post one's Legislation Review works by surfacing "the most frequently consulted rulings" and tuning Legislation from them. That needs rulings that can be counted and cited one at a time. With extracted, blended memories, can you still say "this fact was consulted 14 times, so promote it"? This is the strongest argument because it ties the format to the framework itself and not to taste.
3. **Supersede and provenance.** "A fact you can search, supersede and scope individually is a fact you can trust" (post two). When a Hindsight memory goes stale, how do you retire it, and can you see where it came from? The four provenance tiers in the Agentic Studio post (`observed` / `documented` / `contractual` / `unverified`) only work on a unit small enough to label.

Possibly a fourth: **the exchange layer.** `memory_exchange.py` exports and generalises facts one by one. Does that still work if the source is a Hindsight bank? Include it only if you've tried it.

## 4. Reader and tension

- **Reader:** someone who read posts one and two, or who runs their own agent memory (hand-rolled `MEMORY.md`, Claude Code memory, Hindsight or similar). They're weighing "build my own" against "adopt a product" and want an honest report from someone who did both.
- **Tension:** "I built a careful system. A product did the headline job better within a month. Was the care wasted?" Everyone who has hand-rolled infrastructure knows this feeling, which makes it the hook.

## 5. Shape and size

- **Shape:** a field report that turns into an argument. Lead with what happened, give a fair account of what got better and what got lost, then separate *format* from *discipline*.
- **Size:** about 1,300 to 1,600 words, matching post two. One table, one visual at most, and no new download unless you've built something (option B).
- **Tone:** same as post two. First person, admits what isn't right, no hype about Hindsight and no defensiveness about OKF.

## 6. Arc (numbered beats)

1. **Callback.** Post two ended with "whichever survives contact with reality." Open with: I switched my daily work to Hindsight for a month and stopped using my own scripts. *(~100 words)*
2. **What I actually changed.** Concretely: which spaces or repos, how banks are scoped, whether the hook and skills still fire, and what happened to `memory/`. Keep it short; readers need the setup before they can trust the verdict. *(~150 words)*
3. **Recall is better. Say so plainly.** Give one or two real moments where Hindsight surfaced something your keyword-and-tag search wouldn't have. Give it credit with no hedging. *(~200 words)*
   - **Turning point 1:** "So the storage layer I was unsure about in post two, I didn't need it. The scripts can go."
4. **What I lost.** The store isn't one fact per file any more. Describe what it looks like now, using a real example of a messy or blended memory. *(~150 words)*
5. **Did it matter?** Go through the three jobs from section 3 and give a verdict for each from your month: *hurt me*, *didn't notice*, or *haven't tested*. A small table fits here: Job, What OKF did, What happens on Hindsight, Verdict. *(~350 words)*
   - **Turning point 2:** "OKF's justification in post two was retrieval. That was the wrong justification. It was really an admission policy wearing a file format."
6. **Where the discipline goes now.** Move it from storage to capture: what a "retain" call should look like, and a one-sentence rule at write time even if the store doesn't enforce it. Explain how that keeps the Legislation feedback loop alive. Present it as a direction or a small experiment, not a finished build, unless you've built it. *(~200 words)*
7. **Check-in on post two's open items.** Give each one a line or two. *(~150 words)*
   - Tags: did Hindsight's ingest-time tagging and tag groups change your view?
   - Consolidation: does Reflect, or anything else, actually solve it? If not, say so and repeat the call for help.
   - Claude's own memory: still running alongside? Does a third memory make that worse?
   - Global memory with scoping: did per-bank scoping give you the cross-space memory you wanted?
8. **Close.** Point back to post one: the framework was about *when* and *what* context, not *where it lives*. Swapping the store proved that. Say what post four will cover. *(~100 words)*

## 7. Open questions to answer before drafting

Every factual claim in the post comes from your experience. I haven't assumed any of it. These are the gaps:

1. **Setup:** self-hosted or managed? One bank per repo, or something else? Did you keep the hooks and `memory-consult` / `memory-capture` skills and point them at Hindsight, or drop them?
2. **The recall win:** one or two concrete moments where recall clearly beat the old setup. These carry beat 3.
3. **The loss, concretely:** what does a typical retained memory look like now? Paste one or two (sanitised).
4. **Did the missing discipline ever bite you?** A wrong or stale memory surfacing, noise in recall, a duplicate, or a fact you couldn't retire. If nothing bit you, the honest answer is option A in section 2, not my recommendation.
5. **Feedback loop:** in the month, did you do any Legislation review? Could you find out how often a memory was recalled?
6. **Reflect:** did you use it? Did it do anything close to consolidation?
7. **Tags:** are you still using the six-tag taxonomy inside Hindsight, or did you let it tag freely?
8. **Your old `memory/` facts:** imported, left alone, or abandoned?
9. **Hindsight specifics:** any product behaviour described beyond what post two already says (Retain / Recall / Reflect, tagging at ingest, tag groups, scoping per user, project, team or channel) needs checking against their docs before publishing.

## 8. Risks to watch

- **Reading as an ad.** Balance the credit in beat 3 with the losses in beats 4 and 5. Post two already said you might be behind Hindsight; don't overcorrect into a product review.
- **Defending sunk cost.** If the evidence for section 3 is thin, cut the claim. A post that says "I was wrong about why OKF mattered" is stronger than one that strains to save it.
- **Promising a build.** Beat 6 shouldn't announce a v1.3 skill unless one exists.
- **Scope creep.** Claude's own memory and the global repo could each be a whole post. Keep them to a line each in beat 7.

## 9. Possible visual (optional)

A two-column "before and after" of the Common Law tier: OKF files plus `memory.py` plus `MEMORY.md` on the left, the Hindsight bank on the right. Below it, an arrow showing the "admission discipline" moving from the store to the capture step. Reuse the post-two architecture diagram style if you include it. Skip it if it's purely decorative.
