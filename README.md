# Peng Wang Knowledge Base

Source of <https://zhizhunbao.github.io>. Same setup as Microsoft Learn: Markdown in a GitHub repository, built with [DocFX](https://dotnet.github.io/docfx/), published by GitHub Actions to GitHub Pages.

- Pages: `docs/**/*.md`, each with YAML metadata (`title`, `description`, `ms.date`).
- Navigation: `docs/toc.yml` is the top bar; each section folder has its own `toc.yml` for the left sidebar.
- Config: `docs/docfx.json`. Look: `docs/templates/kb/` (Learn-style CSS in `public/main.css`, "Last updated on" line from `ms.date` via `conceptual.extension.js` + `public/main.js`; `layout/_master.tmpl` is the modern master plus one meta tag).
- Preview locally: `docfx docs/docfx.json --serve`, then open <http://localhost:8080>.
- Publish: push to `main`; `.github/workflows/docfx.yml` builds and deploys.

## Content rules (the site is public)

- No lecture slide text, no lab questions, no lab answers.
- Definitions are quoted from official documentation (Microsoft Learn is CC BY 4.0) with an APA reference that names the section and paragraph and links the `#anchor`.
- Content that exists only in course materials is rewritten in my own words, without quotation marks.
- Cloud courses are in progress: no links to coursework code until grades are final. No student number anywhere.
- Never use the middle dot as a separator.
