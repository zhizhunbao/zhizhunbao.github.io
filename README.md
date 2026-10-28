# Peng Wang Knowledge Base

Source of <https://zhizhunbao.github.io>. Same setup as Microsoft Learn: Markdown in a GitHub repository, built with [DocFX](https://dotnet.github.io/docfx/), published by GitHub Actions to GitHub Pages.

## Repository

### Files

- Pages: `docs/**/*.md`, each with YAML metadata (`title`, `description`, `ms.date`).
- Navigation: `docs/toc.yml` is the top bar; each section folder has its own `toc.yml` for the left sidebar.
- Config: `docs/docfx.json`. Look: `docs/templates/kb/` (see Look and scripts).
- Figure sources: `figures/` (see Figures).

### Preview and publish

- Preview locally: double-click `start-knowledge-base.bat` (or run `python docs/templates/kb/watch.py`) and open <http://localhost:8080>.
- It rebuilds after any change under `docs/` (a full build, about a minute for 4,300 pages; docfx 2.81 has no incremental build) and the open page reloads itself (plain `docfx --serve` builds only once).
- The preview builds into `_site` at the repo root (ignored by git), outside `docs/`: built into `docs/_site` a full build took 390 s instead of about 55 s (measured 2026-10-25).
- The script writes `docs/docfx.build.json` (ignored by git): `docfx.json` plus each page's last commit time, shown as "Last updated on MM/DD/YYYY HH:MM:SS". Building `docs/docfx.json` directly still works, with the date from `ms.date` only. GitHub Actions does the same two steps.
- Publish: push to `main`; `.github/workflows/docfx.yml` builds and deploys.

## Look and scripts

### Page shell

- The page shell follows a Microsoft Learn article page (two header bars, TOC tree, breadcrumbs, In this article, Light/Dark/Auto) and is styled by the open-source Atlas Design System (`public/atlas.min.css`, MIT).
- `public/kb.css` holds the Learn-only bits measured from Learn; `public/kb.js` draws the navigation from DocFX toc.json and searches index.json.
- Header items that do not fit on one line go into a "More" menu at the end, as on Learn.
- Header buttons have no underline (Atlas's ::after line is switched off in kb.css); the current item is marked by bold only.
- A top-bar entry with no page of its own whose items are sections is drawn as a dropdown (Science); its subgroups (the OECD fields) are menu rows with a chevron that open their sections in a submenu beside it, as Learn's Products menu does, with no small headings; when the current section is inside it, the button is marked like an active section and the section is marked in the menu, and the section keeps its own second bar.
- In this article marks the last heading above the top of the window; at the bottom of the page, the heading just clicked (or else the last one on screen).
- Images under `media/` show at half their pixels (figures are exported at 2x), except `*@1x.png` figures, shown at full size, and `.webp` screenshots (project pages), which fill the article width.

### Term tables

- Term tables (`Term | Definition | 中文翻译 | Source`): the Chinese column translates the English definition.
- Key words are bold in the same order in both cells, and `kb.css` gives the n-th bold of each cell the same colour.
- Full-width punctuation (。，（）) stays outside the `**` markers (`**定义动机、使命和目标**。确立`, `**Microsoft 云采用框架**（CAF）`); otherwise Markdig pairs the bold wrongly and the colours no longer match.
- Chinese term names and translations are my own (no cached Chinese pages); brand names stay in English.
- Each row quotes its own source in full; no rows that only link to another page.
- A product's row quotes the opening definition of the product's own documentation (its "What is X?" or overview page), never the one-line tagline of a documentation home list.
- A row whose quote describes a related term rather than the term itself starts with "(context)" and its translation with "（语境）".
- `public/marks.js` (called from `kb.js`) puts the verb (谓语) of each English definition and of its Chinese translation with a red wavy underline, from `media/<page>.grammar.json` (`{ term: { "verbs": [[phrase, skip], ...], "zhVerbs": [[phrase, skip], ...] } }`: the verb phrases in order, `skip` passing over earlier matches, one Chinese entry per English one, contractions such as it's left out); quizzes use the same marks. The Git and GitHub pages under Programming carry such files (moved from the CST8913 pages on 2026-10-24).

### Quizzes

- Pages are Markdown only, with one exception for quizzes.
- A quiz page is a Markdown page whose paragraph `[Start the quiz](wN.json)` links a JSON file of questions (`{ "questions": [{ "stem", "zhStem", "options", "answer", "zhTerm", "definition", "zh", "keys", "verbs", "zhVerbs" }] }`: a scenario in my own words and its Chinese, the answer's official definition and its translation).
- `public/quiz.js` replaces that paragraph with the questions: click an option to check it, then the right option turns green (a wrong pick red), and the question in Chinese and the answer's definition in English and Chinese show, marked like the term tables. Without JavaScript the link still opens the data.
- No page uses it at the moment (the CST8913 quiz pages were removed with the course pages on 2026-10-24).

## Figures

### Sources and rendering

- Each `media/<name>.png` figure has its source in `figures/`, at the same path without `docs/` and `media/` (`docs/cloud/azure/migration/media/plan.png` comes from `figures/cloud/azure/migration/plan.html`).
- A source is one self-contained HTML file (inline CSS, no external assets; each box is one line).
- To change a figure, edit its source and render it from the repo root with `python figures/shot.py <source.html> <docs/.../media/name.png>` (Playwright Chromium, viewport 1400x900, scale 2, screenshot of `#fig`).
- `shot.py` shoots a figure taller than the viewport in slices and stitches them, at scale 1 past 4000 px, named `*@1x.png` so the site shows it at full size instead of half (`media/msc2020@1x.png`).
- `figures/` is outside `docs/`, so it is not built or published.
- All Azure figures and the section Overview figures have sources; other older figures, drawn in draw.io, have none yet.

### Layout

- Long group names are never shortened or wrapped.
- A figure too wide for one row splits its groups over two rows, in order, and all groups take the width of the widest group title (a short script at the end of the source sets it, as in `figures/networking/ccna/ccna.html`).
- A figure with many groups (since 2026-10-27, MSC2020) instead wraps its groups at the page width (1220 px), so the browser fits as many in each row as their content allows (`figures/math/msc2020/msc2020.html`).

### Boxes and groups

- Boxes and group titles are terms, never page titles ("What are Azure regions?") or category labels. A table-of-contents group with no terms of its own is left out of the figure, the menu and the sub-pages.
- Border colour: orange (#e8a317, like the frame and group names) for a term defined on this page; blue for a term whose definition lives on a sub-page.
- Sub-page figure: every term defined on the page is one box in a single column, in source order. A part without sub-items is a plain box, never an empty dashed group. A box with sub-terms gets a dashed group beside the column, titled with the same name and joined by a blue dashed curve from the box to the group title (template `figures/cloud/azure/cloud-adoption-framework/plan.html`; a plain column: `figures/cloud/azure/compute/specialty-workloads.html`).
- Overview figure: one dashed group per sub-page, with blue boxes; it does not show the sub-pages' own expansions.
- No floating boxes: never a single box above the column or the groups. A product that spans every group is not drawn; its parts sit in their groups.
- A third-level topic without several groups gets no list of fourth-level stub pages; its Overview Glossary holds every item.

## Navigation

Content has official sources; section names are the common names of the field.

### Top bar

- `docs/toc.yml`: Home, Projects and Sources first, then the sections in alphabetical order of their names.
- A section name is the common name of the field (AI, Algorithms, Security, UI/UX). It is not an official classification, so each section states the knowledge area of the ACM/IEEE-CS/AAAI Computer Science Curricula 2023, CS2023 ([Joint Task Force on Computing Curricula, 2024](https://doi.org/10.1145/3664191)), it maps to, as in the table under CS2023 entries.
- Courses get no top-level section. What a course teaches lands in the section of its field.

### Sources

- Sources (since 2026-10-27) is not a field: its Overview sorts every publisher and document the site cites into kinds (standards developing organizations, government agencies, learned societies, classification systems, curricula, reference works, certification bodies, companies, open-source projects), each kind defined from Cambridge Dictionary or the NIST CSRC glossary.
- Organizations are never second-level entries of a field.

### Science dropdown

- The sciences sit in one dropdown entry, Science, placed alphabetically like a section and grouped by the six broad fields of the OECD Frascati Manual 2015 (Table 2.2, Fields of R&D classification), in OECD's order and written in title case like every menu name:
  - Natural Sciences (Mathematical Sciences, Computer Science, Physical Sciences, Chemical Sciences, Earth and Related Environmental Sciences, Biological Sciences)
  - Engineering and Technology (Engineering and Technology: entries OECD Fields, OECD's own 11 fields 2.1 to 2.11, and OpenAlex; IEEE's Thesaurus needs a request form and is CC BY-NC-ND, so it is not published)
  - Medical and Health Sciences (Medical and Health Sciences)
  - Agricultural and Veterinary Sciences (Agricultural and Veterinary Sciences)
  - Social Sciences (Psychology and Cognitive Sciences, Economics and Business, Social Sciences)
  - Humanities and the Arts (Humanities and the Arts)
- Each science section has one entry, its field's official classification, titles only at first:
  - PhySH (American Physical Society; 17 disciplines, then the facets each uses)
  - CA Sections (CAS; 5 groups, 80 sections)
  - AGU Index Terms (50 categories in title case, without 9800 General or Miscellaneous and 9900 Corrections; their index terms later go on the category pages)
  - MeSH 2026 (NLM; 15 categories without V Publication Characteristics, then first-level headings)
  - JEL (American Economic Association; 19 letter classes without Y Miscellaneous Categories, then two-character classes)
- Where a field has no classification of its own, OpenAlex fills it (CC0; its fields and subfields come from Scopus ASJC, its LLM-named topics are not used), one entry named OpenAlex with its fields (third level) and subfields (fourth level): Biological Sciences (1.6), Agricultural and Veterinary Sciences (4), Psychology and Cognitive Sciences (5.1), Social Sciences (5.3 to 5.9), Humanities and the Arts (6), and beside the existing entries in Engineering and Technology (whose 11 OECD fields now sit under an entry OECD Fields) and Economics and Business (beside JEL).
- Medicine keeps MeSH alone.

### Second level

- Second bar: one entry per official source, benchmarked against `Microsoft Azure` under Cloud.
- An entry must pass three tests: (1) it has one official documentation set; (2) that set has its own classification, which the third level follows; (3) it carries the name people use for it. So it is a product or platform (PostgreSQL, Python) or a standard or framework (WCAG 2.2, NIST Cybersecurity Framework), never an organization (OWASP, ISTQB).
- For a technology the entry is named by the technology itself (Docker, Kubernetes, GraphQL, Claude, Linux, HTML, Arm, x86), not by its documentation set ("Docker Docs", "Claude Platform", "The Linux Kernel documentation", "HTML Standard") or a suffix ("Fluent 2 Design System"); the index page names the documentation set, word for word, as the official source.
- Standards and frameworks keep their full names, and Microsoft entries keep the Microsoft name (Microsoft Azure, Microsoft Foundry).
- Protocols defined in RFCs stay under RFC Series in Networking, one third-level page per RFC (RFC 9110 HTTP Semantics), with all its sections.
- Courses are not second-level entries either. A course decides which topics of a source get pages (only the ones I study, in the source's own order and titles), never their names, order or content. The course pages under Cloud (CST8912, CST8913, CST8914) were removed on 2026-10-24; only the two Git pages moved, to Programming.
- Alphabetical order, Overview first.
- Sources are current and cited in APA; not roadmap.sh or similar community sites, which cannot be cited.
- A planned section or second-level entry has only its index page (name, CS2023 mapping or official source) until content arrives.

### Third and fourth levels

- The third level follows that source's own classification and the fourth level its sub-classification, never alphabetical by our choice (only the top bar and the second level are alphabetical).
- Their order depends on the source:
  1. Numbered sources keep their numbers (WCAG 2.2, ISTQB CTFL, CCNA exam topics).
  2. Unnumbered sources whose lists have an order of their own keep it and get numbered in it (Dev.java Learn, APG Practices and About).
  3. Sources that only list alphabetically, as an index, get a logical order we choose for that source (a component library from simple to complex, a specification by dependency, tutorials in learning order), with no group level added, and the section's index page says how the source orders it, how we do and why (APG Patterns).
- Comparisons between sources come after.

### CS2023 entries

- Each section also has its CS2023 knowledge area as a second-level entry, `CS2023 <code>` (CS2023 AI, AL, AR, DM, FPL, GIT, HCI, MSF, NC, OS, PDC, SDF, SE, SEC, SEP, SF, SPD): the units in CS2023's order, numbered, and their topics with CS2023's numbering and parts, as the checklist of what the field covers.
- Topic pages carry no "Tier:" line (removed 2026-10-27); the tier (CS Core, KA Core, Non-core) stays only in each page's description, and CS2023's "See also:" cross-references stay as their own line.
- Where CS2023 numbers oddly (FPL-Analysis starts at 4, OS-Advanced-Files restarts at 1 for Non-core, SF-Evaluation has two topics 7), the numbers are kept.

The CS2023 knowledge areas, ordered by the CS2023 competency areas (Software, Systems, Applications, then the two that apply to all), with the section each one maps to:

| Competency area | Abbreviation | Knowledge area | 中文 | Section |
|---|---|---|---|---|
| Software | SDF | Software Development Fundamentals | 软件开发基础 | Programming |
| Software | AL | Algorithmic Foundations | 算法基础 | Algorithms |
| Software | FPL | Foundations of Programming Languages | 编程语言基础 | Programming |
| Software | SE | Software Engineering | 软件工程 | QA (SE-Validation); System Design (SE-Design) |
| Systems | AR | Architecture and Organization | 计算机体系结构与组成 | Hardware |
| Systems | OS | Operating Systems | 操作系统 | Operating Systems |
| Systems | NC | Networking and Communication | 网络与通信 | Networking |
| Systems | PDC | Parallel and Distributed Computing | 并行与分布式计算 | Cloud; System Design |
| Systems | SF | Systems Fundamentals | 系统基础 | System Design (SF-Design) |
| Systems | DM | Data Management | 数据管理 | Data; Cloud |
| Systems | SEC | Security | 安全 | Security |
| Applications | AI | Artificial Intelligence | 人工智能 | AI |
| Applications | GIT | Graphics and Interactive Techniques | 图形与交互技术 | Graphics |
| Applications | HCI | Human-Computer Interaction | 人机交互 | UI/UX |
| Applications | SPD | Specialized Platform Development | 专用平台开发 | Web Development (SPD-Web); Cloud (SPD-Web) |
| All | SEP | Society, Ethics, and the Profession | 社会、伦理与职业 | Ethics |
| All | MSF | Mathematical and Statistical Foundations | 数学与统计基础 | Mathematical Sciences |

### Mathematical Sciences

- Mathematical Sciences, like the other sections, has CS2023 MSF as its entry (since 2026-10-27; before, the MSF units were its second level in alphabetical order): its five units numbered in CS2023's order (1. Discrete Mathematics, 2. Probability, 3. Statistics, 4. Linear Algebra, 5. Calculus, from most to fewest CS Core hours), which is also the order to learn them in, and definitions quoted from Wolfram MathWorld (web sources only).
- Beside it, MSC2020 (the Mathematics Subject Classification, msc2020.org, kept by Mathematical Reviews and zbMATH) is the framework for the whole field, since mathematics has no single official documentation set.
- Because MSC classifies "the mathematical sciences literature", the section is named Mathematical Sciences (renamed from Math on 2026-10-27; the folder stays `docs/math`) and keeps all 63 MSC top classes, including the mathematical treatment of physics, chemistry, engineering, electronics and biology (70 to 86, 92, 93, 94); those subjects themselves would get sections of their own with their own classifications.
- Third level: the 63 top classes (MSC code and name, in MSC order); fourth level: their 534 subclasses, one page each, titles only at first.
- Left out: every class's fixed general codes (NN-00 to NN-11: reference works, textbooks, surveys, history, software, proceedings, computational methods, data) and the "other" classes ending in 99.
- The MSC2020 Overview's Glossary has a row per class quoting the class's term in Wolfram MathWorld, or in Eric Weisstein's World of Physics (scienceworld.wolfram.com) for physics classes MathWorld lacks, marked (context) when the entry defines a related term rather than the class itself; classes with neither (01, 70, 74, 82, 86, 97) have placeholder rows (definition pending) until a web source is found, such as the Encyclopedia of Mathematics.
- Terms are later hung under the MSC classes from web textbooks (one per CS2023 MSF unit), each citing its book and section; there is no separate textbook directory.

### Computer Science

- Computer Science (since 2026-10-27) is the whole-field framework for computing, as MSC2020 is for Mathematical Sciences: its one entry, ACM CCS, holds the 2012 ACM Computing Classification System (acm.org/publications/class-2012, full tree at dl.acm.org/ccs), its 13 classes (third level) and their subclasses (fourth level, one page each, titles only at first), numbered in ACM's own order since CCS has no codes.
- Left out: General and reference > Document types (surveys, reference works, proceedings and the like are document types, not topics).
- The other sections stay as they are; each keeps its CS2023 entry as the learning route, and ACM CCS shows what the whole field contains.

### Algorithms

- Algorithms, like AI, has CS2023 itself as an entry (CS2023 AL, its units in CS2023's order), next to the NIST Dictionary of Algorithms and Data Structures, the reference for definitions: its areas, each listing all its entries with their type (algorithm, data structure, classic problem, algorithmic technique, definition) and a link to the definition, not given pages of their own.

### Cloud

- Cloud is organised by the Azure documentation categories and certifications, and `docs/cloud/azure/README.md` lists the CS2023 knowledge units it maps to.

### New terms from a new documentation set

- A new term whose official source is a documentation set the site doesn't have yet:
  1. Cache the set's table of contents and the pages the term needs (`design-refs/official-docs`).
  2. In the entry's folder README, sort the table of contents into parts that hold terms and parts that don't (release notes, how-to, tutorials, reference lists, links), and number the term parts once (`N.`), grouped by concept where the official groups mix both.
  3. Add the term on the page where the source defines it.
- The plan is correct information, so every planned group is on the site from the start (figure group, menu entry, page naming the official parts its terms come from, "Not written yet" until a term arrives); the parts without terms stay only in the cached table of contents, and nothing useless is copied onto the site (first done for SQL Server, 2026-10-26).
- The table of contents lists articles, not terms: figures box only terms.

## Pages

### Overview pages

- A section's Overview (its `index.md`, Hardware first, 2026-10-25) follows the Azure topic overview (`docs/cloud/azure/README.md`). H1 is the section name, then:
  - `## Classification`: one figure in `media/`: the section name framed top left, its second-level entries grouped by kind in dashed groups, names only, no numbers.
  - `## Glossary`: the term table: first row the section name, then one row per group in figure order, group names exactly as in the figure; completing a figure completes these rows.
  - `## Coverage`, only where certifications cover the section: `Certification | Skill area`, one row per skill area of each exam, linked to its study guide anchor (AI: AI-901 and AI-103).
  - `## References`.
- No intro sentence and no list of sources: the figure and the references already give them.
- An Overview's Glossary has no rows for the items inside its groups; their rows live on the sub-pages.
- A written page has no "Sources:" line under the H1: `## References` is its only list of sources. An unwritten stub ("Not written yet.") keeps the line as its plan.

## Content rules (the site is public)

### Sources and copyright

- No lecture slide text, no lab answers.
- Definitions are quoted from official documentation (Microsoft Learn is CC BY 4.0) with an APA reference that names the section and paragraph and links the `#anchor`.
- Content that exists only in course materials is rewritten in my own words, without quotation marks.
- Sources are web pages a reader can open. Web editions of textbooks only check term coverage; they never set classification, order or definitions.
- The site aims at the complete official documentation, not one exam: certifications appear only in `## Coverage`, never as exam marks on terms.
- No plain-language Chinese explanation lines on pages.
- Cloud courses are in progress: no links to coursework code until grades are final. No student number anywhere.

### Writing

- Menu names and page titles are in title case, whatever the source's case (since 2026-10-27): every all-lowercase word gets a capital, small words (a, an, and, as, at, by, for, from, in, of, on, or, the, to, via, vs, with...) stay lowercase unless first or after a colon, and in a hyphenated word every part is capitalised except small words (Out-of-Order, Higher-Dimensional).
- Left as they are: codes and numbers at the start (05C, A01, 2.1), words with capitals, digits or code characters (macOS, torch.compile, pin_memory()), names that are lowercase on purpose (pip, pytest, scikit-learn, uv, Python keywords in the Python tutorial such as if, for, del), text in parentheses, and titles that are sentences ending with a period.
- Quotes inside glossary definitions are never changed.
- Never use the middle dot as a separator.
