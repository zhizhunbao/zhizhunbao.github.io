# Cloud topics: rules and allowed folders

This folder holds the shared glossary of every cloud course (CST8911, CST8912, CST8913, CST8915, CST8916). It is organised by official topic, not by course or week, so each term is written once. The course folders next to this one (`../cst8911/` and so on) keep only their week indexes and course-only pages (labs, presentations), and link here. This README is the contract for the folder; the build checks it. It is not published (`docfx.json` excludes `**/README.md`).

## Topics (level 1: folders)

Only the folders below may exist, in this order. The number is the learning order: a topic comes after the topics it builds on. Names are the official names, word for word: the AZ-900 learning path and module names, the product categories of the [Azure documentation](https://learn.microsoft.com/en-us/azure/) home page (checked on 2026-10-21), and the names of the three Microsoft documentation sets. A new folder needs a course that uses it and an official name from those sources.

| No. | Folder | Title | Figure | Source |
|---|---|---|---|---|
| 1 | `01-cloud-concepts/` | Cloud concepts | architecture figure | [AZ-900 learning path: Describe cloud concepts](https://learn.microsoft.com/en-us/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/); [NIST SP 800-145, The NIST Definition of Cloud Computing](https://csrc.nist.gov/pubs/sp/800/145/final); [NIST SP 500-292, NIST Cloud Computing Reference Architecture](https://www.nist.gov/publications/nist-cloud-computing-reference-architecture) |
| 2 | `02-core-architectural-components/` | Core architectural components of Azure | architecture figure | [AZ-900 module: Describe the core architectural components of Azure](https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/) |
| 3 | `03-compute/` | Compute | architecture figure | [Azure documentation: Compute](https://learn.microsoft.com/en-us/azure/?product=compute) |
| 4 | `04-containers/` | Containers | architecture figure | [Azure documentation: Containers](https://learn.microsoft.com/en-us/azure/?product=containers) |
| 5 | `05-networking/` | Networking | architecture figure | [Azure documentation: Networking](https://learn.microsoft.com/en-us/azure/?product=networking) |
| 6 | `06-storage/` | Storage | architecture figure | [Azure documentation: Storage](https://learn.microsoft.com/en-us/azure/?product=storage) |
| 7 | `07-databases/` | Databases | architecture figure | [Azure documentation: Databases](https://learn.microsoft.com/en-us/azure/?product=databases) |
| 8 | `08-integration/` | Integration | architecture figure | [Azure documentation: Integration](https://learn.microsoft.com/en-us/azure/?product=integration) |
| 9 | `09-analytics/` | Analytics | architecture figure | [Azure documentation: Analytics](https://learn.microsoft.com/en-us/azure/?product=analytics) |
| 10 | `10-internet-of-things/` | Internet of Things | architecture figure | [Azure documentation: Internet of Things](https://learn.microsoft.com/en-us/azure/?product=iot) |
| 11 | `11-ai-machine-learning/` | AI + Machine Learning | architecture figure | [Azure documentation: AI + Machine Learning](https://learn.microsoft.com/en-us/azure/?product=ai-machine-learning) |
| 12 | `12-identity/` | Identity | architecture figure | [Azure documentation: Identity](https://learn.microsoft.com/en-us/azure/?product=identity) |
| 13 | `13-security/` | Security | architecture figure | [Azure documentation: Security](https://learn.microsoft.com/en-us/azure/?product=security) |
| 14 | `14-management-and-governance/` | Management and Governance | map figure | [Azure documentation: Management and Governance](https://learn.microsoft.com/en-us/azure/?product=management-and-governance) |
| 15 | `15-devops/` | DevOps | process figure | [Azure documentation: DevOps](https://learn.microsoft.com/en-us/azure/?product=devops) |
| 16 | `16-migration/` | Migration | process figure | [Azure documentation: Migration](https://learn.microsoft.com/en-us/azure/?product=migration) |
| 17 | `17-well-architected-framework/` | Azure Well-Architected Framework | map figure | [Azure Well-Architected Framework](https://learn.microsoft.com/en-us/azure/well-architected/) |
| 18 | `18-cloud-adoption-framework/` | Cloud Adoption Framework for Azure | map figure | [Cloud Adoption Framework for Azure](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/) |
| 19 | `19-architecture-center/` | Azure Architecture Center | architecture figure | [Azure Architecture Center](https://learn.microsoft.com/en-us/azure/architecture/) |

Not used by any course yet, so no folder: Developer Tools, Hybrid + multicloud, Media, Mixed Reality, Mobile, Virtual Desktop Infrastructure, Web (App Service sits under Compute, as in AZ-900).

## Files (level 2: inside a topic folder)

- `README.md`: the folder's own contract: the allowed sub-pages and, for each, its allowed sections.
- `index.md`: the topic overview. H1 is `<No.>. <Title>`. It opens with one big figure of the kind given in the table above, and each box on the figure carries the number of the sub-page or section that explains it. Below the figure: a table of the sub-pages.
- One file per sub-page, listed in the folder README. A sub-page is one official service or document (for example `virtual-network.md` for Azure Virtual Network), titled with its official name, numbered `<No.>.<n>` in official order.
- `media/`: the figures, drawn by us in draw.io (no copied images).

Nothing else.

## Sections (level 3: inside a sub-page)

- H2 sections are the parts of the sub-page's official documentation, word for word and in its order (`<No.>.<n>.<m> <name>`), as listed in the folder README. A page may leave a part out but may not add one.
- H3 is free, in sentence case.
- Each H2 has one figure and one term table: `Term | Definition | 中文解释 | Courses`. Definitions quote official documentation with section, paragraph and `#:~:text=` anchor; my own words only where no official definition exists. `Courses` names the course and week, such as `CST8911 W7`.
- A term appears in one place only in the whole folder. Other places link to it.
- Figure numbers on boxes are plain text. Green step circles only on process figures (see `figure_rules.md` in the cloud notes repo).
