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
- A top-bar entry with no page of its own whose items are sections is drawn as a dropdown (Science); its items are sections, one menu row each (subgroups, if ever added, are rows with a chevron that open their sections in a submenu beside it, as Learn's Products menu does); when the current section is inside it, the button is marked like an active section and the section is marked in the menu, and the section keeps its own second bar.
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
- Boxes are not forced into one column when the space to their right would stay empty: a group of short boxes (symbols, codes) flows them in rows, left to right in source order, wrapping at the page width, an exception to the single column of a sub-page figure (since 2026-10-29, `figures/math/green-book/3-functions.html`).

### Boxes and groups

- Boxes and group titles are terms, never page titles ("What are Azure regions?") or category labels. A table-of-contents group with no terms of its own is left out of the figure, the menu and the sub-pages.
- Border colour: orange (#e8a317, like the frame and group names) for a term defined on this page; blue for a term whose definition lives on a sub-page.
- Sub-page figure: every term defined on the page is one box in a single column, in source order. A part without sub-items is a plain box, never an empty dashed group. A box with sub-terms gets a dashed group beside the column, titled with the same name and joined by a blue dashed curve from the box to the group title (template `figures/cloud/azure/cloud-adoption-framework/plan.html`; a plain column: `figures/cloud/azure/compute/specialty-workloads.html`).
- Overview figure: one dashed group per sub-page, with blue boxes; it does not show the sub-pages' own expansions.
- Every box of a figure, the frame and group titles included, has its row in the Glossary below it: a sub-page's Glossary starts with the row of the frame (the entry) and the row of its group, then the rows of the boxes (since 2026-10-29).
- No floating boxes: never a single box above the column or the groups. A product that spans every group is not drawn; its parts sit in their groups.
- A third-level topic without several groups gets no list of fourth-level stub pages; its Overview Glossary holds every item.

## Navigation

Content has official sources; section names are the common names of the field.

### Top bar

- `docs/toc.yml`: Home, Projects and Sources first, then the sections in alphabetical order of their names.
- A section name is the common name of the field (AI, Algorithms, Security, UI/UX). It is not an official classification, so each section states the knowledge area of the ACM/IEEE-CS/AAAI Computer Science Curricula 2023, CS2023 ([Joint Task Force on Computing Curricula, 2024](https://doi.org/10.1145/3664191)), it maps to, as in the table under CS2023 entries.
- Courses get no top-level section. What a course teaches lands in the section of its field.

### Projects

- Projects (since 2026-10-28) are grouped by industry: the 20 sectors of NAICS Canada 2022 Version 1.0 (Statistics Canada), all of them in the menu in NAICS order, each with its own page quoting the first sentence of the sector's official definition; a sector without projects says "No projects yet."
- A project goes under the industry of the organization it was built for (NAICS classifies establishments): Offer2PR under 56 (561310, "Internet job listing services"), the ECG viewer under 31-33 (its client makes the ECG recorder), Textbook RAG under 61, and the MOLIT, Gangwon and City of Ottawa projects under 91.
- Project pages stay at `docs/projects/<name>.md` (their links are shared) and are listed under their sector in the menu; the Overview keeps the full project table, newest first.

### Sources

- Sources (since 2026-10-27) is not a field: its Overview sorts every publisher and document the site cites into kinds (standards developing organizations, government agencies, learned societies, classification systems, curricula, reference works, certification bodies, companies, open-source projects), each kind defined from Cambridge Dictionary or the NIST CSRC glossary.
- Organizations are never second-level entries of a field.
- Order: by importance first, alphabetical within a tie. The kinds are numbered from the most formal source to product documentation (standards developing organizations, government agencies, learned societies, then the documents: classification systems, curricula, reference works, then certification bodies, companies, open-source projects); the members of a kind are equally important, so they are alphabetical (case ignored).

### Science dropdown

- The sciences sit in one dropdown entry, Science, placed alphabetically like a section; it lists its sections with no subgroups (OECD's grouping was dropped on 2026-10-28), ordered by relevance to my work (software, cloud, data, AI), most relevant first (since 2026-10-28): Computer Science, Mathematical Sciences, Engineering and Technology (one entry, IEEE Thesaurus), Economics and Business, Social Sciences and Humanities (one section since 2026-10-28, as in SSHRC and UNESCO's 'Social and human sciences': entries ELSST and UNESCO Thesaurus), Medical and Health Sciences, Physical Sciences, Chemical Sciences, Agricultural and Veterinary Sciences, Earth and Related Environmental Sciences. This is the one menu ordered by relevance rather than alphabetically.
- There are no Biological Sciences or Psychology and Cognitive Sciences sections (removed 2026-10-28): both are read in Medical and Health Sciences, whose MeSH holds B Organisms, G Phenomena and Processes and H01.158 Biological Science Disciplines for biology, and F Psychiatry and Psychology for psychology (psychology as MeSH sees it, from the medical side; the APA Thesaurus is open only inside paid databases).
- Each science section has one entry, its field's official classification, titles only at first:
  - PhySH (American Physical Society; 17 disciplines, then the facets each uses)
  - CA Sections (CAS; 5 groups, 80 sections)
  - AGU Index Terms (50 categories in title case, without 9800 General or Miscellaneous and 9900 Corrections; their index terms later go on the category pages)
  - MeSH 2026 (NLM; 15 categories without V Publication Characteristics, then first-level headings)
  - WHO ATC classification (WHO Collaborating Centre for Drug Statistics Methodology, atcddd.fhi.no; since 2026-10-28) next to MeSH in Medical and Health Sciences, for drugs: its 14 anatomical main groups (1st level, one folder each) and their therapeutic subgroups (2nd level, one page each), titles only at first; levels 3 to 5 come with content. Its terms forbid changing the material and require a reference to the Centre, so codes and names are exactly as WHO writes them (capitals at levels 1 and 2, no title case), in WHO's order, and the ATC index page carries the reference and the copyright link. Chinese names next to them are this site's own translations and the index page says so. ATC gives no definitions.
  - MedlinePlus (NLM; since 2026-10-28) next to MeSH and ATC in Medical and Health Sciences, for plain explanations of health topics: its 5 Health Topics categories (Body Location/Systems, Disorders and Conditions, Diagnosis and Therapy, Demographic Groups, Health and Wellness; one folder each) and their 44 groups (one page each), in the order of medlineplus.gov/healthtopics.html, titles only at first; the topics come with content, from the official health topics XML. Health topic summaries are US government works and may be quoted; A.D.A.M. Medical Encyclopedia articles are copyrighted and are only linked.
  - JEL (American Economic Association; 19 letter classes without Y Miscellaneous Categories, then two-character classes)
  - IEEE Thesaurus (July 2026; its 52 top terms, then their narrower terms; obtained through IEEE's access form, filled in by me). It is CC BY-NC-ND 4.0, so it is shared unaltered: terms exactly as IEEE writes them (no title case), in IEEE's own alphabetical order, no numbering, and its index page carries IEEE's attribution line and the license link. Chinese names next to its terms are this site's own translations and the index page says so; deeper levels are added when a direction is studied.
  - AGROVOC (FAO, CC BY 4.0, with official Chinese labels) for Agricultural and Veterinary Sciences: its 25 top concepts, then their narrower concepts, in this site's title case.
  - ELSST (CESSDA, version 7, CC BY-SA 4.0) for the social sciences in Social Sciences and Humanities: its 259 top concepts (it has no groups), then their narrower concepts; labels are in capitals at the source and in title case here, and the entry is shared under the same license.
  - UNESCO Thesaurus (CC BY-SA 3.0 IGO) for the humanities and the arts in Social Sciences and Humanities: domain 3, Culture, its 13 subject thesauri with UNESCO's notation (3.05 to 3.65), then their top concepts; shared under the same license.
- OpenAlex is no longer used (2026-10-28): it filled the fields without a classification until each got a professional vocabulary (IEEE Thesaurus, AGROVOC, ELSST, UNESCO Thesaurus, MeSH), and Economics and Business keeps JEL alone.
- Medicine has MeSH for its concepts, the WHO ATC classification for drugs and MedlinePlus for explanations (since 2026-10-28), and nothing else.
- MeSH has its own depth rule (since 2026-10-28), since its tree goes 13 levels deep with 65,361 nodes where MSC2020 and ACM CCS stop at a few levels: pages follow the MeSH tree down until a page holds at most 300 nodes. A heading with more than 300 nodes below it gets an Overview (figure of its narrower headings as groups listing theirs, a Glossary row per narrower heading) and a page or folder for each narrower heading, checked the same way. A heading with 300 or fewer nodes below it is one page: its figure shows up to three levels, and its Glossary lists every node below it in tree order, the full tree number before each name, the definition quoted from the MeSH scope note. A descriptor in several places has a row in each.

### Second level

- Second bar: one entry per official source, benchmarked against `Microsoft Azure` under Cloud.
- An entry must pass three tests: (1) it has one official documentation set; (2) that set has its own classification, which the third level follows; (3) it carries the name people use for it. So it is a product or platform (PostgreSQL, Python) or a standard or framework (WCAG 2.2, NIST Cybersecurity Framework), never an organization (OWASP, ISTQB).
- For a technology the entry is named by the technology itself (Docker, Kubernetes, GraphQL, Claude, Linux, HTML, Arm, x86), not by its documentation set ("Docker Docs", "Claude Platform", "The Linux Kernel documentation", "HTML Standard") or a suffix ("Fluent 2 Design System"); the index page names the documentation set, word for word, as the official source.
- Standards and frameworks keep their full names, and Microsoft entries keep the Microsoft name (Microsoft Azure, Microsoft Foundry).
- Protocols defined in RFCs stay under RFC Series in Networking, grouped by the seven IETF areas (third level, in the order of ietf.org/topics/areas), each RFC under the area of the working group that produced it as the IETF Datatracker records it (fourth level: RFC 6455 under Applications and Real-Time, RFC 9110 under Web and Internet Transport), with all its sections (fifth level).
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

- Mathematical Sciences, like the other sections, has MSF (Mathematical and Statistical Foundations; named "CS2023 MSF" until 2026-10-28, when its units began to follow web textbooks) as its entry (since 2026-10-27; before, the MSF units were its second level in alphabetical order): its five units numbered in CS2023's order (1. Discrete Mathematics, 2. Probability, 3. Statistics, 4. Linear Algebra, 5. Calculus, from most to fewest CS Core hours), which is also the order to learn them in, and definitions quoted from Wolfram MathWorld (web sources only).
- Inside an MSF unit (Discrete Mathematics, Probability and Statistics since 2026-10-28, Linear Algebra and Calculus since 2026-10-29), the pages are the chapters of one web textbook, the whole book (Discrete Mathematics: Doerr and Levasseur, *Applied Discrete Structures*; Probability: Pishro-Nik, *Introduction to Probability, Statistics, and Random Processes*, whose terms are the words it bolds in running text plus its boxes, and whose chapters that define no term, the simulation and recursion chapters, have no page; Statistics, since 2026-10-29: *Online Statistics Education* (onlinestatbook.com, Rice University and others), whose terms are its glossary, each placed in the section that treats it, plus, for the chapters its glossary leaves out, the topics its sections name; it replaced Çetinkaya-Rundel and Hardin, *Introduction to Modern Statistics*, whose terms tables are teaching vocabulary and whose sections are lessons; Linear Algebra: Austin, *Understanding Linear Algebra* (2023 update), whose terms are its Index, each placed where the entry links, plus the Definition boxes and titled results the Index misses and the words its running text emphasizes as names of concepts, each quoted from the sentence that names it; Calculus: Strang and Herman, *Calculus* volumes 1 to 3 (OpenStax), whose terms are each chapter's Key Terms, each placed in the section whose text marks it as a term and quoted from the Key Terms entry, plus the words a section marks as terms that Key Terms leaves out, quoted from the sentence that marks them; the three volumes repeat three chapters, which appear once, and the 17 chapters are numbered 1 to 17 in book order, each chapter page naming its volume and chapter), numbered with the book's own chapter numbers (Calculus excepted) (1 to 16, so the section numbers in the figures, 1.1, 1.2..., are the book's); a gap against the CS2023 topic list is filled from a second book as one more page, numbered after the last chapter (17 Asymptotic Notation, from *Mathematics for Computer Science* section 14.7; in Statistics 20 to 23: bootstrapping, logistic regression and cross-validation from *Introduction to Modern Statistics*, Bayesian statistics from Poldrack, *Statistical Thinking for the 21st Century*; in Linear Algebra 8 Bézier Curves, from MathWorld). Since 2026-10-29 the units have a fifth level, so no page shows more than one section's terms: a chapter is a folder whose `index.md` has a figure of its sections (one group each, listing its terms) and a Glossary with the chapter row, any terms of the chapter itself and a linked row per section; each section of the book has its own page in that folder (a section that defines no terms too, so the map matches the book's table of contents) (`<number>-<title>.md`), whose figure is the chapter frame holding the section's group of terms; a chapter without sections stays one page; the unit Overview figure lists each chapter's sections. All three figures use the MSC figure format: group titles in the orange box, their items in the blue box (thin blue border, light blue fill); each figure shows two levels, a group and its items, and a figure with one group lays its items out in rows. A book numbered in three levels (Probability: chapter 1, section 1.2, subsection 1.2.1) keeps them all: the section is the page and its subsections are the groups of its figure, so no level is skipped. A section page has a Glossary row per term the section defines (every titled Definition, Theorem, Algorithm... box, extracted by script; named theorems, corollaries, laws and axioms are terms too, including the named rows of the book's tables of laws), each linking to its box; definitions are pending until quoted. The unit's folder README is the term checklist (every extracted box with its decision). Terms kept from the earlier CS2023 topic pages stay, with their MathWorld definitions, in the section that covers them.
- Beside it, MSC2020 (the Mathematics Subject Classification, msc2020.org, kept by Mathematical Reviews and zbMATH) is the framework for the whole field, since mathematics has no single official documentation set.
- Because MSC classifies "the mathematical sciences literature", the section is named Mathematical Sciences (renamed from Math on 2026-10-27; the folder stays `docs/math`) and keeps all 63 MSC top classes, including the mathematical treatment of physics, chemistry, engineering, electronics and biology (70 to 86, 92, 93, 94); those subjects themselves would get sections of their own with their own classifications.
- Third level: the 63 top classes (MSC code and name, in MSC order); fourth level: their 534 subclasses, one page each (since 2026-10-28 every class has an Overview whose groups list its subclasses' five-digit classes, and every subclass page a figure and a Glossary row per five-digit class: code and name from the cached MSC2020 CSV, TeX turned into plain text, a standard Chinese name, and "(No definition)" since MSC gives none).
- Left out: every class's fixed general codes (NN-00 to NN-11: reference works, textbooks, surveys, history, software, proceedings, computational methods, data) and the "other" classes ending in 99.
- The MSC2020 Overview's Glossary has a row per class quoting the class's term in Wolfram MathWorld, or in Eric Weisstein's World of Physics (scienceworld.wolfram.com) for physics classes MathWorld lacks, marked (context) when the entry defines a related term rather than the class itself; classes with neither (01, 70, 74, 82, 86, 97) have placeholder rows (definition pending) until a web source is found, such as the Encyclopedia of Mathematics.
- Terms are later hung under the MSC classes from web textbooks (one per MSF unit), each citing its book and section; there is no separate textbook directory.
- Mathematical symbols (since 2026-10-29) are the third entry, IUPAC Green Book (*Quantities, Units and Symbols in Physical Chemistry*, 3rd edition, free PDF at iupac.org), chapter 4, section 4.2 "Symbols, operators, and functions": its 7 groups in the book's order, one page each, whose figure is the Green Book frame holding the group (each item is the symbol alone, with every form the Glossary row's Symbol shows; its description is in the Glossary), with a row per symbol (Symbol rendered, the book's description quoted with its note if any, a Chinese translation, the book page). ISO 80000-2, the international standard for mathematical symbols, is not used because its text is paid; national standards (GB/T 3102.11) are not used either. Groups have no definition in the book ("(No definition)").
- Axioms (since 2026-10-29) are the fourth entry, Axioms, since no standard lists axioms: one group per branch, numbered in learning order (1 Arithmetic, 2 Geometry, 3 Algebra, 4 Probability, 5 Analysis, 6 Logic, 7 Set Theory), then 8 Symbols. A group holds one subgroup per axiom system, named as its source names it (Peano's Axioms from Wolfram MathWorld; Postulates and Common Notions from Euclid's Elements Book I in D. E. Joyce's edition; Groups I to V and the Axiom of Completeness from Hilbert, The Foundations of Geometry, Townsend's 1902 translation on Project Gutenberg, typos kept as printed and named in the Chinese column; Group, Ring (its required conditions 1 to 6), Field Axioms, Vector Space and Probability Axioms from Wolfram MathWorld; The 22 Axioms for Complex Numbers (for Analysis, since MathWorld states no completeness axiom) from the Metamath Proof Explorer's mmcomplex.html, numbered as there; Propositional Calculus, Predicate Calculus, ZFC and the Tarski–Grothendieck axiom from the 4 tables of the "The Axioms" section of the Metamath Proof Explorer, us.metamath.org/mpeuni/mmset.html, by Norman Megill, public domain). A row per axiom: its name (linked to its Metamath page there), a Chinese name, its statement quoted as the source shows it (a `|` escaped), a Chinese reading of the statement; each subgroup row quotes the source's sentence introducing it; groups have "(No definition)". 8 Symbols has a row per symbol of the axioms that the IUPAC Green Book lacks (⊢, →, ↔, ∀, ∃, ⊆, ≈, ℂ, ℝ, <ℝ, ∅), quoting the Metamath sentence that reads it (mmset.html, mmcomplex.html, or the df-ss, df-en and df-nul pages). Metamath's middle-dot times sign is written ⋅. A group with several axiom systems (Geometry, Algebra, Logic, Set Theory) is a folder: its index lists the systems (the group as the frame, one box per system), and each system has its own page, the fourth level, whose figure is the group frame holding the system with its axioms in a column (three levels at most). A group with a single system (Arithmetic, Probability, Analysis, Symbols) is one page, its axioms drawn straight in the group frame, and its Glossary gives the group row that system's sentence. Left out: Metamath's labels (`ax-1`), its auxiliary predicate-calculus schemes (`ax-c4` and others, redundant), the theory of classes and the definitions.
- Proof Techniques (since 2026-10-30) is the fifth entry, after Axioms (axioms are where reasoning starts, proofs how it goes on): the whole of one web textbook, Sundstrom, *Mathematical Reasoning: Writing and Proof* (version 2.1, in the GVSU PreTeXt web edition), chosen from the proofs textbooks of the AIM Approved Textbooks list as the only one with a web edition, and taken whole because every chapter is written from the point of view of proof. It is laid out like an MSF unit (chapter folders, a page per section, the chapter summaries and appendix A too, figures in the MSC format); its terms are the book's Index, each placed where its link points, plus the titled results the Index misses; sub-entries are named in natural order (Domain of a Function), and people, publications and other index forms of a kept term are left out. The entry's folder README is the term checklist.

### Computer Science

- Computer Science (since 2026-10-27) is the whole-field framework for computing, as MSC2020 is for Mathematical Sciences: its one entry, ACM CCS, holds the 2012 ACM Computing Classification System (acm.org/publications/class-2012, full tree at dl.acm.org/ccs), its 13 classes (third level) and their subclasses (fourth level, one page each; since 2026-10-28 each has a figure of its classes with their narrower classes in groups and a Glossary row per class, "(No definition)" since ACM gives none), numbered in ACM's own order since CCS has no codes.
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

### Formulas

- Math and chemistry are LaTeX inside `$...$` (`$$...$$` for a block), rendered by MathJax 3, which `public/kb.js` loads only on pages that have a formula (since 2026-10-28); chemistry uses the mhchem extension, `$\ce{H2O}$`, `$\ce{2H2 + O2 -> 2H2O}$`.
- A quoted definition keeps its source's TeX exactly (`\(...\)` written as `$...$`); the Chinese translation copies the same `$...$`, dropping only a `	ext{.}` or `	ext{,}` at its end in favour of full-width punctuation.
- Spacing (Markdig only reads `$...$` as math this way): a space between a formula and the letters or Chinese characters around it, none just inside the `$`; letters glued to a formula (the "th" of "$i$th") go inside it as `	ext{th}`.
- Bold goes on words, never on a span that starts or ends with a formula (`**$x$**` is not read as bold): "**there exists a constant** $c \ge 0$".
- In tables, a vertical bar inside a formula is `\vert` or `\mid`, never `|`, which would split the cell.
- Term names, menu names and figures stay plain text (no LaTeX), so they can be searched and drawn.
