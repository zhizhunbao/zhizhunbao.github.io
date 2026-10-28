# Knowledge base (DocFX): how to work here

README.md holds the site's rules (what the site looks like and why); this file holds only how to work. Read README.md first, and `docs/cloud/azure/README.md` before touching Azure pages. A rule is written in one of the two files, never both.

## What to write

- Write only Markdown and toc.yml; no HTML or components. Exceptions: the scripts in `docs/templates/kb/` (site code), and figure sources, HTML files in `figures/` rendered with `figures/shot.py` (README, "Figures").
- Add only what the user asked for. Anything else (an extra section, figure, term, entry or row) is suggested in one line and written only when the user says so; when a request is ambiguous, ask instead of filling in. One exception: when a page's boxes are already planned (folder README, Overview figure), fill all of them at once.
- Before writing a deep page, check every Overview above it (top bar, second level, third level). Write any unfinished one first, top down (figure plus a Glossary row per group); the big picture comes first.
- New terms come one at a time: search the site; if the term is missing, find the official sentence, then add the box and the row on the page where the source names it.
- Place a term where it actually appears in the page's own listed source, never where it seems to belong; never pull groups, terms or definitions from another document into a page whose source is named. Keep names and quotes as the source words them.
- Terms must not be missed: list every concept the source sentences name, and tell the user which named words were left out and why instead of dropping them silently.
- A new documentation set: follow README, "New terms from a new documentation set". Fourth-level entries start as table-of-contents titles; cache each article, read it, rename the entry to the term it defines (split if two, drop if none), one page at a time with a checklist in the folder README, not by batch script.

## Official sources

- Official pages are cached in `C:\Users\40270\Desktop\workspace\design-refs\official-docs\cache\` (outside this repo; read its `README.md`). Before answering any question about what an official source says, and before fetching one, grep `cache\md\` first; never answer from memory.
- Add newly used pages from the `pnp-job-tracker` root: `.venv/Scripts/python.exe ../design-refs/official-docs/cache_official.py <urls file> ../design-refs/official-docs/cache [--plain]` (`--plain` for sites that challenge the automated browser). One `urls_kb_*.txt` per batch, noted in that README with the date and anything odd. PDFs go in `cache/pdf/`, registered in `index.json` with a `pdf` field.
- Every quote is checked against the cached page before it goes on the site (exact words; only `**` added).
- A site that blocks scripts or the crawler (403, CAPTCHA, bot check, rate limit) is not worked around and not retried in a loop: open it in the user's own Chrome (Claude in Chrome, the user's standing instruction since 2026-10-27), in a new tab of Claude's group. A verification page there is the user's to pass by hand; never click it. Read the main text, save it by hand as `cache/md/<slug>.md` with `source`, `title`, `fetched` and a `method` line saying it was read in the user's Chrome, add the `index.json` entry, note it in the cache README, and close the tab. w3.org challenges the crawler's automated Chrome every time, so read w3.org pages this way too.

## Checking

- Never run a separate `docfx build` and never start another server. Make all edits for a change first, then wait once for the user's 8080 preview (`start-knowledge-base.bat` / `watch.py`, building `_site` at the repo root) and check the generated HTML in `_site`: table rows, bold pairs (no stray `**`), headings, images. If 8080 looks stale, ask the user to restart it. Stale files of deleted pages stay in `_site` until removed by hand.

## Git

- Another session may be editing this checkout. Before committing, check `git status` and stage only my own files and hunks; don't revert or comment on the other session's edits.
- Commit messages carry no Co-Authored-By line (the repository's contributors are the user alone). Push, and anything that rewrites published history, only when the user says so.
