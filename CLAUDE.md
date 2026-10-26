# Knowledge base (DocFX)

Read README.md first. Write only Markdown and toc.yml; no HTML or components. Exceptions, both scripts in `docs/templates/kb/public/` that read JSON data, so pages stay Markdown (see README.md): `quiz.js` renders multiple-choice quizzes, and `marks.js` underlines (red, wavy) the verbs of term-table definitions and their translations from `media/<page>.grammar.json`. Follow the content rules in README.md. Figure sources are the other exception: HTML files in `figures/` at the repo root (outside `docs/`, never published), rendered to `media/*.png` with `figures/shot.py` (see README.md, "Figures").

Official pages are cached in `C:\Users\40270\Desktop\workspace\design-refs\official-docs\cache\` (outside this repo; see its `README.md`). Before answering any question about what an official source says, and before fetching one, grep `cache\md\` first; never answer from memory. Add newly used official pages with `cache_official.py`.
