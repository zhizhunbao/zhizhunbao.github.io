# Microsoft Azure (folder azure): rules and allowed folders

This folder holds the shared glossary of every cloud course (CST8911, CST8912, CST8913, CST8915, CST8916). It is organised by official topic, not by course or week, so each term is written once. The course folders next to this one (`../cst8911/` and so on) keep only their week indexes and course-only pages (labs, presentations), and link here. This README is the contract for the folder; the build checks it. It is not published (`docfx.json` excludes `**/README.md`).

## Topics (level 1: folders)

Only the folders below may exist, in this order. The number is the learning order: a topic comes after the topics it builds on. Names are the official names, word for word: the AZ-900 learning path and module names, the product categories of the [Azure documentation](https://learn.microsoft.com/en-us/azure/) home page (checked on 2026-10-21), and the names of the three Microsoft documentation sets. A new folder needs a course that uses it and an official name from those sources.

| No. | Folder | Title | Figure | Source |
|---|---|---|---|---|
| 1 | `cloud-computing/` | Cloud computing | classification | [AZ-900 learning path: Describe cloud concepts](https://learn.microsoft.com/en-us/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/); [NIST SP 800-145, The NIST Definition of Cloud Computing](https://csrc.nist.gov/pubs/sp/800/145/final); [NIST SP 500-292, NIST Cloud Computing Reference Architecture](https://www.nist.gov/publications/nist-cloud-computing-reference-architecture) |
| 2 | `core-architectural-components/` | Core architectural components of Azure | classification | [AZ-900 module: Describe the core architectural components of Azure](https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/) |
| 3 | `compute/` | Compute | classification | [Azure documentation: Compute](https://learn.microsoft.com/en-us/azure/?product=compute) |
| 4 | `containers/` | Containers | classification | [Azure documentation: Containers](https://learn.microsoft.com/en-us/azure/?product=containers) |
| 5 | `networking/` | Networking | classification | [Azure documentation: Networking](https://learn.microsoft.com/en-us/azure/?product=networking) |
| 6 | `storage/` | Storage | classification | [Azure documentation: Storage](https://learn.microsoft.com/en-us/azure/?product=storage) |
| 7 | `databases/` | Databases | classification | [Azure documentation: Databases](https://learn.microsoft.com/en-us/azure/?product=databases); [Azure Architecture Center: Understand data models](https://learn.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/understand-data-store-models) |
| 8 | `integration/` | Integration | classification | [Azure documentation: Integration](https://learn.microsoft.com/en-us/azure/?product=integration); [Azure Integration Services](https://azure.microsoft.com/en-us/solutions/integration-services); [Compare messaging services](https://learn.microsoft.com/en-us/azure/service-bus-messaging/compare-messaging-services) |
| 9 | `analytics/` | Analytics | classification | [Azure documentation: Analytics](https://learn.microsoft.com/en-us/azure/?product=analytics); [Azure Architecture Center: Big data architectures](https://learn.microsoft.com/en-us/azure/architecture/databases/guide/big-data-architectures) |
| 10 | `internet-of-things/` | Internet of Things | classification | [Azure documentation: Internet of Things](https://learn.microsoft.com/en-us/azure/?product=iot); [Introduction to Azure IoT](https://learn.microsoft.com/en-us/azure/iot/iot-introduction) |
| 11 | `ai-machine-learning/` | AI + Machine Learning | classification | [Azure documentation: AI + Machine Learning](https://learn.microsoft.com/en-us/azure/?product=ai-machine-learning); [Azure Architecture Center: Get started with AI architecture design](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/ai-get-started) |
| 12 | `identity/` | Identity | classification | [Azure documentation: Identity](https://learn.microsoft.com/en-us/azure/?product=identity) |
| 13 | `security/` | Security | classification | [Azure documentation: Security](https://learn.microsoft.com/en-us/azure/?product=security) |
| 14 | `management-and-governance/` | Management and Governance | classification | [Azure documentation: Management and Governance](https://learn.microsoft.com/en-us/azure/?product=management-and-governance) |
| 15 | `devops/` | DevOps | classification | [Azure documentation: DevOps](https://learn.microsoft.com/en-us/azure/?product=devops) |
| 16 | `migration/` | Migration | classification | [Azure documentation: Migration](https://learn.microsoft.com/en-us/azure/?product=migration) |
| 17 | `well-architected-framework/` | Azure Well-Architected Framework | classification | [Azure Well-Architected Framework](https://learn.microsoft.com/en-us/azure/well-architected/) |
| 18 | `cloud-adoption-framework/` | Cloud Adoption Framework for Azure | classification | [Cloud Adoption Framework for Azure](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/) |
| 19 | `architecture-center/` | Azure Architecture Center | classification | [Azure Architecture Center](https://learn.microsoft.com/en-us/azure/architecture/) |

Not used by any course yet, so no folder: Developer Tools, Hybrid + multicloud, Media, Mixed Reality, Mobile, Virtual Desktop Infrastructure, Web (App Service sits under Compute, as in AZ-900).

## Files (level 2: inside a topic folder)

- `README.md`: the folder's own contract: the allowed sub-pages and, for each, its allowed sections.
- `index.md`: the topic overview. H1 is `<No.>. <Title>`. It opens with `## Classification` holding one big classification figure: an outer frame named after the topic (top left) holding its parts, grouped by kind in dashed groups, names only, no connecting lines and no section numbers. Inside a group the boxes follow one order you can name: small to large when the parts contain each other (datacenters, availability zones, regions, region pairs), otherwise the order of the official source. Parts taught in a course are blue; parts in the official sources but not taught yet are grey dashed. Architecture and process figures belong in the sub-pages. Right below the figure comes `## Glossary` with one term table, `Term | Definition | 中文翻译 | Source`, whose first row is the topic name framed at the top left of the figure, followed by one row per group in the figure, in figure order, each group linking to its sub-page: the official definition quoted with its key words bolded, the Chinese translation with the same key words bolded in the same order, and the source with section and paragraph. Then, in this order: `## Coverage` (`Certification | Skill area`, then for each course a bold line (`**<code> <course name>**`, not a heading) and a `Week | Group | Terms in the course | Source` table: one row per figure group the course touched that week (the week number only on its first row), the teacher's own terms as the course glossary records them, one term per line, only terms that match the figure (detail terms wait for the sub-pages), and the source of that group's terms, one source per line: the deck and its slides (`Lecture 5: slides 6, 7` when the deck is numbered, else the deck title; a week may use another week's deck), `Lab N: section` or `Reading: section`) and `## References` (the official sources, APA). No `## Contents` section: the left menu already lists the sub-pages.
- One file per sub-page, listed in the folder README. The sub-pages are the groups of the topic figure, one page per dashed group, in figure order, titled with the group name and numbered `<No.>.<n>` (for example `1.1 Deployment models`). The menu, the figure and the term table under it therefore show the same second level.
- `media/`: the figures, drawn by us in draw.io (no copied images).

Nothing else.

## Sections (level 3: inside a sub-page)

- H2 sections are the parts inside that group of the figure (the boxes), with their names and in figure order (`<No.>.<n>.<m> <name>`), as listed in the folder README. A page may leave a part out but may not add one; a new part is added to the figure first. Each sub-page lists its official sources under the H1.
- H3 is free, in sentence case.
- Each H2 has one figure and one term table: `Term | Definition | 中文解释 | Courses`. Definitions quote official documentation with section, paragraph and `#:~:text=` anchor; my own words only where no official definition exists. `Courses` names the course and week, such as `CST8911 W7`.
- A term appears in one place only in the whole folder. Other places link to it.
- Figures show names only, no section numbers; the table under the topic figure maps them to sub-pages. Green step circles only on process figures (see `figure_rules.md` in the cloud notes repo).
