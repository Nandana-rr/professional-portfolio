<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Project rules
- All portfolio text lives in `src/content/profile.ts`; pages only render it. Why: the owner edits one file to update the site, and `null` values render as visible placeholders instead of invented facts.
- Each portfolio section is its own route; `sections` in profile.ts drives the menu, home contents and "next" links. Why: one list keeps navigation consistent.
- The site must stay fully static: no server functions, server routes or backend. Why: it is hosted on GitHub Pages, which only serves files; `.github/workflows/deploy.yml` builds with `GITHUB_PAGES=true`, which prerenders every route and prefixes links with the repository path.
- Import images as bundled files from `src/assets` and build root-relative URLs from `import.meta.env.BASE_URL`. Why: `/__l5e/...` asset pointers and hardcoded `/` paths break under the GitHub Pages repository sub-path.
