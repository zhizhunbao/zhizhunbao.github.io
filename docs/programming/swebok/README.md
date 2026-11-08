# SWEBOK: allowed pages and term checklist

Not published (`docfx.json` excludes `**/README.md`). Source: Guide to the Software Engineering Body of Knowledge (SWEBOK Guide), editor Hironori Washizaki, IEEE Computer Society. Two cached forms:

- its table of contents, the "SWEBOK Guide V4.0 Topics" page (https://www.computer.org/education/bodies-of-knowledge/software-engineering/topics, anchors `#1` to `#18`), cached 2026-11-07 (`design-refs/official-docs/urls_kb_swebok.txt`): the source of the 18 chapter rows of the Overview;
- the Guide itself, v4.0a ("Released August 2026", 411 pages), downloaded by Frank on 2026-11-07 through the form on the V4 download page (https://www.computer.org/education/bodies-of-knowledge/software-engineering/v4), cached as `cache/pdf/swebok-v4.pdf`, with Chapter 1 as text in `cache/pdf/swebok-v4-ch01.txt` (PDF pages 43 to 62, printed pages 1-1 to 1-20): the source of every Chapter 1 page. Sources cite the chapter, section, paragraph and printed page, linked to the download page.

Status (2026-11-07): Chapter 1 written; asked for by Frank as the outline of requirements engineering (how to tell whether a product's features are complete), for his other sessions. Chapters 2 to 18 are rows of the entry Overview only, titles from the topics page, with no pages or menu entries until asked for. The Appendix on Standards has no row.

Names: the PDF titles Chapter 1 "Software Requirements" and 4.5 "Additional Attributes of Requirements", where the topics page has "Software Requirements Fundamentals" and "Additional Attributes of Requirement"; the pages follow the PDF.

## Chapter 1: what is a term

Terms are the words the chapter sets in italics as names of concepts, the subtopic titles (renamed to the term each defines), and the named items of its lists (the properties of requirements in 3.1, the elicitation techniques in 2.2, the stakeholders in 2.1). Each row quotes the sentence or list item that names it; a list item that only names a technique has "(No definition)".

| Page | Terms | Read |
|---|---|---|
| Chapter page (Introduction) | Software Requirements, Requirements Engineering, Incompleteness, Ambiguity, Defect, and the 8 topics | yes |
| 1. Software Requirements Fundamentals | 15 (1.8 "Why Categorize Requirements This Way?" names no term of its own: its terms are Divide and Conquer and Perfect Technology Filter) | yes |
| 2. Requirements Elicitation | 28 | yes |
| 3. Requirements Analysis | 23 | yes |
| 4. Requirements Specification | 26 | yes |
| 5. Requirements Validation | 5 | yes |
| 6. Requirements Management Activities | 6 | yes |
| 7. Practical Considerations | 11 | yes |
| 8. Software Requirements Tools | 4 | yes |

Left out, named in passing with no sentence of their own:

- Introduction: bug (another name in the Defect sentence); the life cycles (waterfall, Inception and Elaboration phases, Agile), which belong to the Software Engineering Process KA.
- 1.8: recursive design.
- 2.1: the other stakeholders of the list (subject matter experts, operations staff, first-level product support staff, professional bodies, regulatory agencies, special interest groups, developers) and the non-person sources (documentation, other systems, business context, computing environment).
- 2.2: the non-technique sources of the second list (previous versions, defect tracking database, interfacing systems, ISO/IEC 25010, security requirements, standards and regulations); brainstorming (inside the Meetings row).
- 3.1: the unnamed properties (represent true stakeholder needs, use stakeholder vocabulary, be acceptable to all stakeholders).
- 4.3: unit test, acceptance test, refactoring; Domain Testing, Boundary Value Analysis and Pairwise Testing (Software Testing KA).
- 4.4: UML, SysML, Z, VDM, SDL (named languages; UML has its own entry elsewhere).
- 4.5: the attributes of the list (tag, rationale, source, priority...).
- 6.2: product backlog.
- 7.2: the priority scales (enumerated, numerical, sorted lists).
- 8.2: theorem provers, model checkers.
