# Facts supplied by Matt, 2026-10-15

Matt supplied these in chat on 2026-10-15, answering the "author to supply" questions raised by the
Agentic Studio post expansions. They may be used in posts (Constitution law 2: Matt supplied them).
Labels as Matt gave them: **observed** = seen in the tenant; **documented** = stated in Sitecore's
documentation; unlabelled = Matt's own statement.

## Agent export drops fields (agentic-studio-agent-export-is-lossy)
- The support ticket was closed with a general response suggesting it won't be fixed, or that the
  behaviour is intentional. For now you have to live with it.

## Debug pane (agentic-studio-debug-pane-browser-caching)
- Sitecore Support verified that the problem was a real issue.
- Recent releases have resolved it, and the agent now runs normally.
- Learning about the debug panel is still valuable.

## Widgets (agentic-studio-widgets-do-not-export)
- Widgets cannot be imported, so you can only work hard on a strongly outlined prompt and hope for
  the same or similar results serving the same goals. (Already in the post.)

## Builder License (agentic-studio-builder-license)
- Without the licence you only have the ability to edit.
- Verdict: there is a good record of what the Builder licence unlocked and almost none of what it
  looked like without one. The clear signs people can check come from the "with licence" side, plus
  the admin page that states it directly.

What was seen, without licence (24 to 28 July) vs with licence and Editor role (29 July onward):
- Prebuilt agent (AEO/SEO Researcher), without licence: shown as Installed, with no more-actions
  menu and no Edit option; Schemas, Parameters, HTML Templates and Workflow could not be reached
  (observed). With licence: the original prebuilt was never reopened to check.
- Duplicate of that prebuilt, with licence: a fully editable Workflow canvas with Add Step, delete
  and Run; it has a Workflow ID and saves via Update Workflow (observed).
- Custom agent, with licence: one was created (Page Metadata Editor, 30 July) with editable
  Instructions, Tools, Sitecore Page Tools, Allowed Items, Brand kit and Schemas (observed).
- Schemas: not reachable on the prebuilt without licence; with licence, an Add Schema screen,
  including a Business Context selector that appears on Add only, not on Edit (observed).
- Multi-step flow: without licence, built as chained plain chats passing artifacts, because the
  workflow editor is gated; with licence, the Workflow canvas is available.

The trap: "no Edit on a prebuilt" had two possible causes that were never told apart: no licence,
or vendor-published agents are locked regardless of licence. Do not teach "no Edit button means no
licence".

Checks people can run themselves, strongest evidence first:
1. Agentic > User permissions (admins only): your row reads Builder in the Builder License column
   (documented).
2. Agents page: a way to create a custom standard or workflow agent (documented; the absence of this
   option without a licence was never observed).
3. Any agent's card or menu: Duplicate (documented as a permission; only used while licensed).
4. Open a duplicate, then the Workflow tab: Add Step, delete and Run on the canvas, and saving reads
   Update Workflow (observed while licensed).
5. Create a space: the create flow opens (documented as needing the Builder licence; never tested).

Caveats:
- The licence and the role are separate gates. A Builder licence lets you create agents; editing an
  existing prebuilt agent also needs the Editor role. Someone with only one of the two sees a partial
  set of the signs above. (The docs' permissions table lists this split, but each cell could not be
  confirmed.)
- Only admins can see the User permissions page. Non-admins can't tell whether seats exist or whether
  one is assigned to them; they can only use checks 2 to 5. Seats can sit unassigned while a team
  concludes the tenant has none.
