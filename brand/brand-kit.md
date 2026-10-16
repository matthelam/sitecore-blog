# Brand kit: blog.matthelam.com

Draft for Matt to approve. Nothing in the repo has been changed. Every claim below comes from the site files, the author profile or the post inventory (frontmatter and headings only; post bodies were not read).

North star (Matt, verbatim): "my intent is for my blog to be known and findable for Agentic Sitecore Development in any of those combinations. and when they search for my name, Matt Lam, Matthelam, Matthew Lam, Aceik Matt - any of those combinations"

## 1. Reverse-engineered current state

- **Site title is `matthelam Sitecore Blog`** (`siteMetadata.js`); header text is `matthelam`; the configured author is `Matthew Lam`. "Matt Lam" and "Aceik" appear in no title or description. Aceik appears only in the author profile and the email domain.
- **Site description is poetic and backward-looking**: "Once a circumnavigation of the Sitecore-sphere, now a voyage into agentic systems: harnesses, knowledge, and the long work of persistent memory." It names no searchable topic: no "agentic", "Sitecore Agentic Studio", "SitecoreAI" or "AI", and "Sitecore-sphere" is not a phrase anyone searches.
- **The title leads with "Sitecore", the description with "agentic systems"**, and the description only joins them as a metaphor ("Sitecore-sphere" to "agentic systems"). The phrase "agentic Sitecore development" is not stated anywhere in site-level metadata.
- **Tag spread is wide and fragmented**: 40 distinct tags across 23 posts, 21 of them used once. Top tags: agents 18, sitecore 13, ai 13, context-engineering 12, claude-code 6, agentic-studio 6, sitecore-ai 6. Inconsistent forms exist (`sitecore ai` vs `sitecore-ai`, `entra id`, `xm cloud`, `cloud portal`, `content hub` with spaces; most other tags are hyphenated).
- **Content mix**: 6 Agentic Studio posts (one in Feb 2026, five in Aug 2026), 5 platform posts (4-part Entra ID SSO series from Oct 2025, one placeholders post), 2 other Sitecore-tagged agent posts (Sitecore documentation in AI, We Don't Build the Website), and 10 agent and context posts with no sitecore tag. The strongest on-intent cluster (Agentic Studio) is the newest and smallest, and its posts are short (199 to 886 words, except the 2,729-word lifecycle post).
- **Author page** (`default.mdx`): name `Matthew Lam`, occupation `Technical Architect - Sitecore`, company `https://aceik.com.au`, and a bio that says the writing is "shifting" towards AI, agentic systems and persistent memory. It does not use "Matt Lam" or the phrase "agentic Sitecore".
- **Listing pages are thin**: `/blog` is titled "Blog" (heading "All Posts"), `/tags` has the description "Things I blog about", `/about` has title "About" and no description, home shows the 5 latest posts. `/projects` is disabled (`notFound()`, hidden from the nav) and its preserved code renders template placeholder projects (a Google card and a "Time Machine" card).
- **Placeholder links**: the author file has `twitter: https://twitter.com/Twitter` and `siteMetadata.js` has `x: https://twitter.com/x`. These are template values, not Matt's profiles, and must not be published as sameAs links. LinkedIn and GitHub look real.

**Where it diverges from the intent**

- Topic: "agentic Sitecore development" is the target, but no site-level text says it. Only the lifecycle post title contains both "Sitecore" and "Agentic"; the other Studio titles say "Agentic Studio" without "Sitecore".
- Entity: searchers use Matt Lam, Matthew Lam, Matthelam and Aceik Matt. The site says `Matthew Lam` and `matthelam`; "Matt Lam" and any "Aceik" pairing with his name are absent from metadata.
- Audience signal: the site title says "Sitecore Blog" but 10 of 23 posts carry no sitecore tag.

## 2. Site intent (improved)

**Positioning (one line):** Practical field notes on agentic Sitecore development by Matt Lam of Aceik: Sitecore Agentic Studio, SitecoreAI, and the agent context and memory that AI work on Sitecore depends on.

**Audience**

- Sitecore developers and architects who are starting to use AI agents, Sitecore Agentic Studio or SitecoreAI and want working detail, not marketing.
- Sitecore teams and partners (including the Adelaide and South Australian community Matt says he wants to grow) looking for someone who has actually worked with these tools.
- Developers of any stack who are building agent context, memory and harnesses and will read a Sitecore-flavoured example.

**Content pillars** (each post has one primary pillar)

**Pillar 1: Agentic Sitecore in practice** (8 posts)

Sitecore Agentic Studio, SitecoreAI, and using Sitecore documentation and agent teams on real Sitecore work. This is the pillar to grow and to link everything else towards.

- `agentic-studio-agent-export-is-lossy`: Agentic Studio: Agent Export Drops These Fields
- `agentic-studio-builder-license`: Agentic Studio: Assign Yourself a Builder License First
- `agentic-studio-debug-pane-browser-caching`: Agentic Studio: Debugging Agents
- `agentic-studio-scoped-memory-space`: Agentic Studio: Keep a Memory of What You Learn
- `agentic-studio-widgets-do-not-export`: Agentic Studio: Widgets Do Not Export
- `the-ai-project-lifecycle-hiding-in-plain-sight-inside-sitecore-agentic-studio`: The AI Project Lifecycle Hiding in Plain Sight Inside Sitecore Agentic Studio
- `How-to-use-Sitecore-Documentation-in-AI-to-get-better-results`: How to use Sitecore Documentation in AI to get better results and save you heaps of time
- `we-dont-build-the-website`: We Don't Build the Website — What CMS Development Taught Me About Designing Agent Teams

**Pillar 2: Agent context and memory** (6 posts)

How to give agents the right context and a durable memory. Includes the Legal Framework series (posts one and two).

- `a-legal-framework-for-agent-context`: Agent Harness: Memory as Context - The Legal Framework
- `implementing-the-legal-framework`: Agent Harness: Implementing the Legal Framework
- `the-trinity-of-clarity-getting-the-results-you-want`: The Trinity of Clarity - Getting the Results You Want
- `three-dimensions-of-agent-context-from-over-engineering-to-orthogonal-design`: Three Dimensions of Agent Context: From Over-Engineering to Orthogonal Design
- `writing-agent-guidelines-that-actually-work`: Writing Agent Guidelines That Actually Work
- `first-principles-in-agent-conversations-when-to-stop-accommodating-and-start-reasoning`: First Principles in Agent Conversations: When to Stop Accommodating and Start Reasoning

**Pillar 3: Agent teams and design patterns** (4 posts)

How agents are composed, named and patterned, plus the agent-as-customer guide.

- `sub-agents-vs-personas-vs-skills-a-journey-through-code-architecture`: Sub-Agents vs Personas vs Skills - A Journey Through Code Architecture
- `composing-agent-teams-by-cognitive-profile`: Composing Agent Teams by Cognitive Profile, Not Function
- `emerging-pattern-in-agentic-systems`: An Emerging Pattern in Agentic Systems
- `the-agent-as-customer-a-practical-build-guide`: The Agent as Customer: A Practical Build Guide

**Pillar 4: Sitecore platform foundations** (5 posts)

The older XM Cloud, Cloud Portal, Content Hub SSO series and the placeholders post. Keep: it proves Sitecore depth and anchors the entity, but it is not the growth area.

- `01-SSO-Preparation`: Azure Entra ID SSO – Preparation Checklist
- `02-SSO-Entra-ID-Setup`: Azure Entra ID SSO – Setting up Azure Entra ID
- `03-SSO-Sitecore-Cloud-Portal-Setup`: Azure Entra ID SSO – Setting up Sitecore Cloud Portal
- `04-SSO-Content-Hub-Setup`: Azure Entra ID SSO – Setting up Sitecore Content Hub
- `The Leading Slash That Breaks Your Page Static vs Dynamic Placeholders in Sitecore`: The Leading Slash That Breaks Your Page, Static vs Dynamic Placeholders in Sitecore

**Entity block: Matt Lam** (facts from `default.mdx` and `siteMetadata.js` only)

| Field | Value |
|---|---|
| Canonical name | Matt Lam (proposed display name; the config currently says Matthew Lam, see open questions) |
| Alternate names | Matthew Lam; Matthelam (site handle, GitHub username, header text); Aceik Matt (a search phrasing Matt gave, not currently used anywhere on the site) |
| Role | Technical Architect, Sitecore (`Technical Architect - Sitecore` in the author profile) |
| Employer | Aceik, https://aceik.com.au |
| Location | Adelaide, South Australia (author page: "recently moved back to Adelaide"); started his Sitecore career in Brisbane |
| Site | https://blog.matthelam.com |
| Real profile links | LinkedIn https://www.linkedin.com/in/matthew-lam-47184416 ; GitHub https://github.com/matthelam ; repo https://github.com/matthelam/sitecore-blog |
| Placeholders, do not use | `https://twitter.com/Twitter` (author file), `https://twitter.com/x` (siteMetadata). **author to supply** a real X or Bluesky profile if one exists |
| Email in config | `matthewlam@aceik.com.au` is in both files. Not listed as a public profile; Matt to decide if it stays published |

## 3. Proposed site-level metadata (proposals for Matt to approve)

Lengths are characters. Descriptions are held to 160 or fewer, titles to about 60.

| Item | Current | Proposed | Len |
|---|---|---|---|
| Site title | matthelam Sitecore Blog | Matt Lam | Agentic Sitecore Development | 39 |
| Site description | Once a circumnavigation of the Sitecore-sphere, now a voyage into agentic systems: harnesses, knowledge, and the long work of persistent memory. | Field notes on agentic Sitecore development by Matt Lam: Sitecore Agentic Studio, SitecoreAI and agent context engineering. Technical Architect at Aceik. | 153 |
| Home title | (site title) | Agentic Sitecore Development by Matt Lam (Matthelam) | 52 |
| Home description | (site description) | Matt Lam writes about agentic Sitecore development: Sitecore Agentic Studio, SitecoreAI, AI-assisted Sitecore work and the agent context behind it. | 147 |
| /blog title | Blog | Blog: Agentic Sitecore Development and Agent Context | 52 |
| /blog description | (none) | Every post by Matt Lam on agentic Sitecore development, Sitecore Agentic Studio, agent context engineering, Claude Code and Sitecore SSO. | 137 |
| /projects | Projects (Disabled), 404 | Leave disabled. Currently disabled (returns 404). Description to be written only if real projects exist: **author to supply**. | n/a |
| /tags title | Tags | Topics: Agentic Sitecore, Agent Context and Sitecore SSO | 56 |
| /tags description | Things I blog about | Browse Matt Lam's posts by topic: Sitecore Agentic Studio, SitecoreAI, agent context engineering, agent memory, Sitecore XM Cloud and SSO. | 138 |
| /about title | About | About Matt Lam (Matthew Lam), Technical Architect at Aceik | 58 |
| /about description | (none) | Matt Lam (Matthew Lam, Matthelam) is a Sitecore Technical Architect at Aceik in Adelaide, writing about agentic Sitecore development and agent memory. | 150 |

Notes: keep `headerTitle: matthelam` (it carries the Matthelam variant). The /about description uses "Matt Lam", "Matthew Lam" and "Matthelam" together on purpose; "Aceik Matt" is covered by the title and the Aceik mention. The expected terms for home, /blog, /tags and /about assume these proposed titles, descriptions and a short visible intro on home and about are adopted; with the current copy several of those terms are not on the page. A Person JSON-LD block with `sameAs` set to the real LinkedIn and GitHub links (never the placeholders) would be the natural next step; that is a code change and is not part of this kit.

## 4. Tag taxonomy

**Current tags and counts** (40 distinct)

| Tag | Posts |
|---|---|
| agents | 18 |
| ai | 13 |
| sitecore | 13 |
| context-engineering | 12 |
| agentic-studio | 6 |
| claude-code | 6 |
| sitecore-ai | 6 |
| azure | 4 |
| setup | 4 |
| skills | 4 |
| sso | 4 |
| entra id | 3 |
| identity | 3 |
| memory | 3 |
| multi-agent | 3 |
| architecture | 2 |
| saml | 2 |
| strategy | 2 |
| xm cloud | 2 |
| agent-as-customer | 1 |
| api-design | 1 |
| campaigns | 1 |
| cloud portal | 1 |
| commerce | 1 |
| content hub | 1 |
| content migration | 1 |
| design-patterns | 1 |
| development | 1 |
| documentation | 1 |
| first-principles | 1 |
| mandates | 1 |
| mcp | 1 |
| placeholders | 1 |
| prompting | 1 |
| renderings | 1 |
| saas | 1 |
| search | 1 |
| sitecore ai | 1 |
| team-composition | 1 |
| workflow | 1 |

**Proposed rules:** lower-case, hyphenated, no spaces. Add one umbrella tag, `agentic-sitecore`, on the 8 Pillar 1 posts so the target phrase exists as a tag page. Retire `ai` where `agents` is already present (it is on every `ai` post: yes). Fold one-off tags into their nearest family.

**Mapping, old to new**

| Old | New | Note |
|---|---|---|
| ai | (retired) | every post tagged `ai` also has `agents` |
| api-design | agent-as-customer | |
| campaigns | agentic-studio | |
| cloud portal | cloud-portal | |
| commerce | agent-as-customer | |
| content hub | content-hub | |
| content migration | content-migration | |
| design-patterns | architecture | |
| development | (drop) | one post, not supported by that post's headings |
| entra id | entra-id | |
| first-principles | prompting | |
| mandates | agent-as-customer | |
| saas | agent-as-customer | |
| search | (drop) | one post, not supported by that post's headings |
| sitecore ai | sitecore-ai | |
| team-composition | multi-agent | |
| workflow | agentic-studio | |
| xm cloud | xm-cloud | |
| (new) | agentic-sitecore | added to the 8 Pillar 1 posts |

**Resulting set**

| Tag | Posts |
|---|---|
| agents | 18 |
| sitecore | 13 |
| context-engineering | 12 |
| agentic-sitecore | 8 |
| sitecore-ai | 7 |
| agentic-studio | 6 |
| claude-code | 6 |
| azure | 4 |
| multi-agent | 4 |
| setup | 4 |
| skills | 4 |
| sso | 4 |
| architecture | 3 |
| entra-id | 3 |
| identity | 3 |
| memory | 3 |
| saml | 2 |
| strategy | 2 |
| xm-cloud | 2 |
| agent-as-customer | 1 |
| cloud-portal | 1 |
| content-hub | 1 |
| content-migration | 1 |
| documentation | 1 |
| mcp | 1 |
| placeholders | 1 |
| prompting | 1 |
| renderings | 1 |

Result: 40 tags become 28. Changing tags changes tag URLs (`/tags/entra-id`), so old tag URLs need redirects or acceptance of a short-lived 404; that is a delivery decision for Matt.

## 5. Per-page table

Intent is the question a searcher or answer engine would ask that the page answers. Each page has exactly 10 expected terms; every term is in the site-wide `terms` list (100 entries). Slugs never change. The placeholders post slug contains spaces, so its URL is percent-encoded (`%20`).

| Path | Intent | Expected terms |
|---|---|---|
| `/` | Who is Matt Lam and where can I read about agentic Sitecore development? | Matt Lam; Matthew Lam; Matthelam; Aceik Matt; Technical Architect Sitecore; agentic Sitecore development; Sitecore Agentic Studio; SitecoreAI; AI-assisted Sitecore development; agent context engineering |
| `/blog` | Where can I find all of Matt Lam's posts on agentic Sitecore development and agent context? | Matt Lam; Matthelam; agentic Sitecore development; Sitecore Agentic Studio; SitecoreAI; Sitecore AI agents; agent context engineering; Claude Code; Azure Entra ID SSO for Sitecore; Sitecore XM Cloud |
| `/projects`  (disabled: 404, set `included: false`) | What agentic Sitecore tools and projects has Matt Lam built? | Matt Lam; agentic Sitecore development; agent harness; Legal Framework for agent context; Claude Code; agent skills; persistent agent memory; Sitecore Agentic Studio; agent context engineering; Common Law agent memory |
| `/tags` | What topics does Matt Lam write about across agentic Sitecore development? | agentic Sitecore development; Sitecore Agentic Studio; SitecoreAI; Sitecore AI agents; agent context engineering; Claude Code; persistent agent memory; multi-agent systems; Azure Entra ID SSO for Sitecore; Sitecore XM Cloud |
| `/about` | Who is Matt Lam, the Sitecore Technical Architect at Aceik, and what does he work on? | Matt Lam; Matthew Lam; Matthelam; Aceik Matt; Technical Architect Sitecore; Sitecore XM Cloud; persistent agent memory; agentic Sitecore development; Adelaide Sitecore community; agent harness |
| `/blog/01-SSO-Preparation` | What do I need to collect from Azure Entra ID before configuring SSO for Sitecore Cloud services? | Azure Entra ID SSO for Sitecore; Sitecore SSO preparation checklist; Azure Entra ID; Entra ID enterprise application; Azure security groups; role claims mapping; break-glass accounts; SAML single sign-on; SAML federation metadata; Sitecore Cloud Portal SSO |
| `/blog/02-SSO-Entra-ID-Setup` | How do I set up an Entra ID enterprise application with SAML and group claims for Sitecore SSO? | Azure Entra ID SSO for Sitecore; Azure Entra ID; Entra ID enterprise application; SAML single sign-on; Entra ID group claims; SAML signing certificate; SAML federation metadata; Azure security groups; Sitecore Cloud Portal SSO; role claims mapping |
| `/blog/03-SSO-Sitecore-Cloud-Portal-Setup` | How do I configure SAML SSO and role claims mapping in the Sitecore Cloud Portal? | Sitecore Cloud Portal SSO; Azure Entra ID SSO for Sitecore; SAML single sign-on; SAML federation metadata; role claims mapping; Entra ID group claims; SSO role mapping troubleshooting; Entra ID enterprise application; Sitecore XM Cloud; Azure Entra ID |
| `/blog/04-SSO-Content-Hub-Setup` | How do I configure Azure Entra ID SAML SSO and group-to-role mapping for Sitecore Content Hub? | Sitecore Content Hub SSO; Azure Entra ID SSO for Sitecore; SAML single sign-on; SAML federation metadata; Entra ID group claims; Content Hub service provider metadata; Content Hub portal configuration; Azure group to Content Hub role mapping; Content Hub login script; role claims mapping |
| `/blog/How-to-use-Sitecore-Documentation-in-AI-to-get-better-results` | How can Sitecore developers use official Sitecore documentation to give AI agents better context? | Sitecore documentation MCP; official Sitecore documentation as agent context; NotebookLM research; agent context engineering; AI-assisted Sitecore development; agentic Sitecore development; Sitecore AI agents; environment context; SitecoreAI; Claude Code |
| `/blog/The%20Leading%20Slash%20That%20Breaks%20Your%20Page%20Static%20vs%20Dynamic%20Placeholders%20in%20Sitecore` | Why does a dynamic placeholder in Sitecore need a leading slash, and how do I find the DynamicPlaceholderId? | Sitecore dynamic placeholders; Sitecore static placeholders; leading slash in placeholder path; DynamicPlaceholderId; nested placeholder paths; bulk content migration; Sitecore renderings; placeholder resolution; Sitecore XM Cloud; SitecoreAI |
| `/blog/a-legal-framework-for-agent-context` | How can a Constitution, Legislation and Common Law structure give AI agents memory of experience at the point of ambiguity? | Legal Framework for agent context; agent harness; Common Law agent memory; just-in-time memory recall; persistent agent memory; agent context engineering; Claude Code; Constitution and Legislation for agents; agent guidelines; agent operating loop |
| `/blog/agentic-studio-agent-export-is-lossy` | Why are Agent Type and Tags empty after exporting and importing an agent in Sitecore Agentic Studio? | Sitecore Agentic Studio; agentic Sitecore development; SitecoreAI; Sitecore AI agents; Agentic Studio agent export; Agentic Studio export and import; Agent Type and Tags fields; Agentic Studio export limitations; Agentic Studio path to Production; Agentic Studio setup |
| `/blog/agentic-studio-builder-license` | Why can't I create agents in Sitecore Agentic Studio, and how do I assign a Builder License? | Sitecore Agentic Studio Builder License; Sitecore Agentic Studio; agentic Sitecore development; SitecoreAI; Sitecore AI agents; Agentic Studio seat allocation; creating and modifying Sitecore agents; Agentic Studio license assignment; Agentic Studio setup; AI-assisted Sitecore development |
| `/blog/agentic-studio-debug-pane-browser-caching` | How do I open the debug console in Sitecore Agentic Studio? | Agentic Studio debug console; debug=true URL parameter; Sitecore agent debugging; Sitecore Agentic Studio; agentic Sitecore development; SitecoreAI; Sitecore AI agents; Agentic Studio setup; AI-assisted Sitecore development; browser cache hard refresh |
| `/blog/agentic-studio-scoped-memory-space` | How can I keep a persistent memory of what I learn about Sitecore Agentic Studio as it changes? | Agentic Studio scoped memory; persistent agent memory; Sitecore Agentic Studio; agentic Sitecore development; SitecoreAI; Sitecore AI agents; Sitecore documentation MCP; Claude Code; agent context engineering; AI-assisted Sitecore development |
| `/blog/agentic-studio-widgets-do-not-export` | Can I export widgets from Sitecore Agentic Studio to move them to Production? | Agentic Studio widgets; Agentic Studio widget export; Agentic Studio path to Production; Sitecore Agentic Studio; agentic Sitecore development; SitecoreAI; Sitecore AI agents; Agentic Studio export limitations; AI-assisted Sitecore development; Agentic Studio export and import |
| `/blog/composing-agent-teams-by-cognitive-profile` | How should I compose a team of AI agents by cognitive profile rather than by function? | agent teams by cognitive profile; multi-agent systems; agent orchestrator; agent personas; agent context engineering; Claude Code; agentic design patterns; agent skills; agent guidelines; agent architecture |
| `/blog/emerging-pattern-in-agentic-systems` | Is there a design principle that stabilises agentic systems the way patterns stabilised web development? | agentic design patterns; SOLID principles for agents; agent context engineering; agent skills; Claude Code; multi-agent systems; agent architecture; AI as a new medium; agent personas; agent guidelines |
| `/blog/first-principles-in-agent-conversations-when-to-stop-accommodating-and-start-reasoning` | How do I get an AI agent to stop accommodating and reason from first principles during design work? | first principles prompting; reasoning mode vs implementation mode; agent context engineering; prompting AI agents; AI agent accommodation; agent guidelines; agent personas; agentic design patterns; multi-agent systems; agent architecture |
| `/blog/implementing-the-legal-framework` | How is the Legal Framework for agent context built in Claude Code with tiers, scripts and a hook? | Legal Framework for agent context; agent harness; Common Law agent memory; persistent agent memory; Claude Code; agent skills; agent hooks; Constitution and Legislation for agents; agent context engineering; agent operating loop |
| `/blog/sub-agents-vs-personas-vs-skills-a-journey-through-code-architecture` | What is the difference between sub-agents, personas and skills in multi-agent systems? | sub-agents vs personas vs skills; multi-agent systems; agent skills; agent personas; agent context engineering; agentic design patterns; agent architecture; composable agent skills; Claude Code; agent orchestrator |
| `/blog/the-agent-as-customer-a-practical-build-guide` | What do I need to build when the next customer of my service is an AI agent rather than a person? | agent-as-customer; agentic commerce; agent mandates; agent-ready API design; SaaS for AI agents; agent purchase worked example; agentic design patterns; multi-agent systems; agent guidelines; agent architecture |
| `/blog/the-ai-project-lifecycle-hiding-in-plain-sight-inside-sitecore-agentic-studio` | What is the AI project lifecycle inside Sitecore Agentic Studio, from Signals to Spaces? | Sitecore Agentic Studio; agentic Sitecore development; AI project lifecycle; Agentic Studio Signals; Agentic Studio Brand Knowledge; Agentic Studio Briefs; Agentic Studio Campaigns; Agentic Studio Flows; SitecoreAI; Sitecore AI agents |
| `/blog/the-trinity-of-clarity-getting-the-results-you-want` | Why do my AI agents get it wrong, and how do agent context, environment context and strong interaction fix it? | Trinity of Clarity; agent context engineering; environment context; agent briefing pattern; multi-agent systems; AI-assisted Sitecore development; agentic Sitecore development; agent guidelines; agent personas; Sitecore AI agents |
| `/blog/three-dimensions-of-agent-context-from-over-engineering-to-orthogonal-design` | How should I structure agent context so agents load only what they need? | orthogonal agent context design; agent context engineering; environment context; multi-agent systems; agent architecture; agent skills; agent personas; agent guidelines; agentic design patterns; Claude Code |
| `/blog/we-dont-build-the-website` | What can CMS development teach me about designing teams of AI agents? | AI agent teams; skills vs subagents; multi-agent orchestration; single responsibility agents; human in the loop approval; agentic CMS; Sitecore workflow states; structured agent handoffs; orchestrator-workers pattern; composable CMS |
| `/blog/writing-agent-guidelines-that-actually-work` | How do I write agent guidelines that actually change agent behaviour? | agent guidelines; agent context engineering; Claude Code; multi-agent systems; agent personas; agent skills; agentic design patterns; agent hooks; orthogonal agent context design; prompting AI agents |

**Researched keywords (method v2).** `we-dont-build-the-website` uses keywords researched from its intent alone (web search across search results, official docs and community posts; each term seen in 2+ independent sources), approved by Matt on 2026-10-16. Research record: `brand/keyword-research/we-dont-build-the-website.json`. The site-wide `terms` list in `jev-profile.json` is capped at 100 by seo-jev, so pages with researched keywords are scored with their own term list (their 10 keywords first, then the shared list). Dropped for this page: "Claude Code subagents" (the post does not name Claude Code; content backlog) and "Sitecore Agentic Studio" (owned by other pages).

**Lower-confidence terms to verify against the post bodies** (picked from summary, tags and headings only, because bodies were not read): the three short Studio posts (agent export, debug, widgets) and first-principles-in-agent-conversations are 199 to 621 words with few or no headings, so their less specific terms (for example `Agentic Studio setup`, `Agentic Studio path to Production`, `agent architecture`, `prompting AI agents`) are the first to check. Also check `Claude Code` and `SitecoreAI` on the Sitecore documentation post, `agent architecture` on the agent-as-customer post, and `agent guidelines` on the emerging-pattern post.

## 5a. Technical findings from the brand-kit pass (for the tuning loop)

- **`/projects` is in the sitemap but returns 404.** The sitemap route list is hard-coded in `app/sitemap.ts`. Drop it (or re-enable the page).
- **`/about` is missing from the sitemap**, yet it is the page that answers the name searches (Matt Lam, Matthew Lam, Matthelam, Aceik Matt). Add it.
- **The placeholders post URL is written into the sitemap with raw spaces**, which makes it an invalid sitemap entry; seo-jev's `discover_pages` skipped it. Percent-encode it in the sitemap (the slug itself does not change).
- **No `Person` structured data anywhere.** The name variants need a `Person` JSON-LD with `name`, `alternateName`, `jobTitle`, `worksFor` (Aceik) and `sameAs` (LinkedIn, GitHub only).
- **`llms.txt` returns 404.**

## 6. Open questions for Matt

1. Canonical display name: "Matt Lam" (what searchers type) or keep "Matthew Lam" (what the config says)? The proposal uses Matt Lam with Matthew Lam as an alternate.
2. Is "Aceik Matt" a phrase people actually use for you? It appears nowhere on the site today. Fine to use "Matt Lam at Aceik" in the about copy to catch it?
3. Do you have a real X, Bluesky or other profile to replace the two placeholder Twitter links, or should they be removed?
4. Approve the site title, description and page-level metadata in section 3 (and a short visible intro on home and about so the terms are actually on the page)?
5. Tag normalisation changes tag URLs. OK to rename, or keep old tags and only add `agentic-sitecore`?
6. `/projects` is disabled and holds template content. Keep it off, or is there something real to put there?
7. Should `matthewlam@aceik.com.au` stay published in the site config?
8. The Pillar 1 posts are your strongest on-intent content and the shortest. Appetite for expanding the short Agentic Studio posts, or a pillar hub post that links them all?
