# Peng Wang Knowledge Base

Source of <https://zhizhunbao.github.io>. Same setup as Microsoft Learn: Markdown in a GitHub repository, built with [DocFX](https://dotnet.github.io/docfx/), published by GitHub Actions to GitHub Pages.

- Pages: `docs/**/*.md`, each with YAML metadata (`title`, `description`, `ms.date`).
- Navigation: `docs/toc.yml` is the top bar; each section folder has its own `toc.yml` for the left sidebar.
- Config: `docs/docfx.json`. Look: `docs/templates/kb/`: the page shell follows a Microsoft Learn article page (two header bars, TOC tree, breadcrumbs, In this article, Light/Dark/Auto) and is styled by the open-source Atlas Design System (`public/atlas.min.css`, MIT); `public/kb.css` holds the Learn-only bits measured from Learn, `public/kb.js` draws the navigation from DocFX toc.json and searches index.json.
- Preview locally: `python docs/templates/kb/git_times.py`, then `docfx docs/docfx.build.json --serve`, and open <http://localhost:8080>. The script writes `docs/docfx.build.json` (ignored by git): `docfx.json` plus each page's last commit time, shown as "Last updated on MM/DD/YYYY HH:MM:SS". Building `docs/docfx.json` directly still works, with the date from `ms.date` only. GitHub Actions does the same two steps.
- Publish: push to `main`; `.github/workflows/docfx.yml` builds and deploys.

## Content rules (the site is public)

- No lecture slide text, no lab questions, no lab answers.
- Definitions are quoted from official documentation (Microsoft Learn is CC BY 4.0) with an APA reference that names the section and paragraph and links the `#anchor`.
- Content that exists only in course materials is rewritten in my own words, without quotation marks.
- Cloud courses are in progress: no links to coursework code until grades are final. No student number anywhere.
- Never use the middle dot as a separator.
