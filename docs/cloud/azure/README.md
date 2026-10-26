# Microsoft Azure (folder azure): rules and allowed folders

This README is the contract for the folder. It is not published (`docfx.json` excludes `**/README.md`).

## 1. Purpose

- The aim is the complete official Azure documentation, not one course or one exam.
- Content is organised by official topic, never by course or week, so each term is written once in the whole folder. Other places link to it.
- It is built one term at a time (section 6), so some parts stay unfinished for a while; the figures show which (section 4).

## 2. Sources

- Two kinds of official source, both listed for each sub-page in the folder README ("Sources"):
  - Microsoft Learn training units (for example the AZ-900 units). They are short.
  - The matching product documentation (for example the Azure reliability documentation for regions and availability zones). It gives the full definitions.
- A page uses only its own listed sources. A new source is added to the folder README first.
- Where a training unit only mentions a term, the Definition quotes the product documentation, and the Source cites both.
- Check the official docs cache before fetching a page (`design-refs/official-docs`, see CLAUDE.md); add any new official page to it.
- Every quote cites section and paragraph with a `#:~:text=` anchor. No words of my own. `## References` lists the sources in APA.

## 3. Topics (level 1: folders)

Only the folders below may exist, in this order. The number is the learning order: a topic comes after the topics it builds on. Names are the official names, word for word: the AZ-900 learning path and module names, the product categories of the [Azure documentation](https://learn.microsoft.com/en-us/azure/) home page (checked on 2026-10-21), and the names of the three Microsoft documentation sets. A new folder needs an official name from those sources.

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
| 12 | `identity/` | Identity | classification | [Azure documentation: Identity](https://learn.microsoft.com/en-us/azure/?product=identity); [AZ-900 module: Describe Azure identity, access, and security](https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/) |
| 13 | `security/` | Security | classification | [Azure documentation: Security](https://learn.microsoft.com/en-us/azure/?product=security); [AZ-900 module: Describe Azure identity, access, and security](https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/) |
| 14 | `management-and-governance/` | Management and Governance | classification | [Azure documentation: Management and Governance](https://learn.microsoft.com/en-us/azure/?product=management-and-governance); [AZ-900 learning path: Describe Azure management and governance](https://learn.microsoft.com/en-us/training/paths/describe-azure-management-governance/) |
| 15 | `devops/` | DevOps | classification | [Azure documentation: DevOps](https://learn.microsoft.com/en-us/azure/?product=devops); [What is DevOps?](https://learn.microsoft.com/en-us/devops/what-is-devops) |
| 16 | `migration/` | Migration | classification | [Azure documentation: Migration](https://learn.microsoft.com/en-us/azure/?product=migration); [About Azure Migrate](https://learn.microsoft.com/en-us/azure/migrate/migrate-services-overview); [Select your cloud migration strategies](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/plan/select-cloud-migration-strategy) |
| 17 | `well-architected-framework/` | Azure Well-Architected Framework | classification | [Azure Well-Architected Framework](https://learn.microsoft.com/en-us/azure/well-architected/) |
| 18 | `cloud-adoption-framework/` | Cloud Adoption Framework for Azure | classification | [Cloud Adoption Framework for Azure](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/) |
| 19 | `architecture-center/` | Azure Architecture Center | classification | [Azure Architecture Center](https://learn.microsoft.com/en-us/azure/architecture/); [Azure application architecture fundamentals](https://learn.microsoft.com/en-us/azure/architecture/guide/) |

No folder yet: Developer Tools, Hybrid + multicloud, Media, Mixed Reality, Mobile, Virtual Desktop Infrastructure, Web (App Service sits under Compute, as in AZ-900).

A topic folder holds only:

- `README.md`: the folder's contract: its sub-pages and, for each, its sources and allowed sections (the groups of the sub-page figure, in figure order).
- `index.md`: the topic overview (section 4).
- One file per sub-page (section 5), listed in the folder README.
- `media/`: the figures (section 7).

## 4. Topic overview (`index.md`)

- H1: `<No.>. <Title>`. Then these H2s, in this order: `## Classification`, `## Glossary`, `## Coverage`, `## References`. No `## Contents`: the left menu already lists the sub-pages.
- `## Classification`: one classification figure.
  - An outer frame named after the topic (top left) holds its parts, grouped by kind in dashed groups. Names only, no connecting lines, no section numbers.
  - Inside a group the boxes follow one order you can name: small to large when the parts contain each other (datacenters, availability zones, regions, region pairs), otherwise the order of the official source.
  - Blue solid box: the part is complete: its sub-page has a box and a table row for every term its listed sources present as a component or kind of it. Grey dashed box: still to be filled in (sub-page not written, or written in part, for example after a new source was listed). Grey boxes are the to-do list.
- `## Glossary`: one table, `Term | Definition | 中文翻译 | Source`.
  - First row: the topic name framed at the top left of the figure. Then one row per group in the figure, in figure order, each group linking to its sub-page.
  - Definition: the official definition quoted, key words bolded. 中文翻译: the Chinese translation, the same key words bolded in the same order. Source: section and paragraph.
- `## Coverage`: `Certification | Skill area`, the certifications whose skill areas cover the topic, each skill area linked to its study guide anchor. This is the only place certifications appear: they do not decide what goes in, and terms are not marked by exam. The certifications used:

  | Certification | Skills measured as of | Study guide |
  |---|---|---|
  | AI-103 Developing AI Apps and Agents on Azure | April 16, 2026 | [Study guide for Exam AI-103](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-103) |
  | AI-901 Microsoft Azure AI Fundamentals | April 15, 2026 | [Study guide for Exam AI-901](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-901) |
  | AZ-104 Microsoft Azure Administrator | April 17, 2026 | [Study guide for Exam AZ-104](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-104) |
  | AZ-204 Developing Solutions for Microsoft Azure | January 14, 2026 | [Study guide for Exam AZ-204](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-204) |
  | AZ-305 Designing Microsoft Azure Infrastructure Solutions | April 17, 2026 | [Study guide for Exam AZ-305](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-305) |
  | AZ-400 Designing and Implementing Microsoft DevOps Solutions | July 27, 2026 | [Study guide for Exam AZ-400](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-400) |
  | AZ-500 Microsoft Azure Security Technologies | January 22, 2026 | [Study guide for Exam AZ-500](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-500) |
  | AZ-900 Microsoft Azure Fundamentals | July 20, 2026 | [Study guide for Exam AZ-900](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900) |
  | DP-900 Microsoft Azure Data Fundamentals | July 21, 2026 | [Study guide for Exam DP-900](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-900) |
  | SC-300 Microsoft Identity and Access Administrator | October 28, 2026 (the study guide also lists the version before that date) | [Study guide for Exam SC-300](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-300) |

  In alphabetical order; dates checked on 2026-10-25 in the cached study guides. When a study guide gets a new "Skills measured as of" date, update its row and the Coverage rows that link to it.
- `## References`: the official sources, APA.

## 5. Sub-pages

- The sub-pages are the groups of the topic figure, one page per dashed group, in figure order, titled with the group name and numbered `<No.>.<n>` (for example `1.1 Deployment models`). The menu, the topic figure and its table therefore show the same second level.
- A sub-page: the H1, its official sources under it, then `## Classification` (one figure), `## Glossary` (one table) and `## References` (APA). No other H2, no H3.
- The figure: an outer frame named after the sub-page (top left), and one dashed group per part listed for it in the folder README ("Allowed sections"), with the part's name and in that order, without its `<No.>.<n>.<m>` number. A new part is added to the folder README first.
- The boxes in a group: every noun that the page's listed sources present as a component or a kind of that part, in the source's words (never shortened) and in the source's order. A word is not left out for looking ordinary: in context it has its own meaning ("dedicated power, cooling, and networking").
- The table: one row per box, in figure order, `Term | Definition | 中文解释 | Source`. Where the source defines the term, the Definition quotes that definition; where it only mentions the term, it quotes the sentence where the term appears, marked "(context)". The Source gives section, paragraph and `#:~:text=` anchor.
- Default cases (follow them without asking; ask only about a case not listed):
  - Where the source gives a part no components or kinds, the parts themselves are the boxes inside the outer frame (16.1 to 16.4).
  - A list of what a part does or when to use it is not boxed, except for a term added under section 6.
  - A definition found in another section of the same source is quoted with its real section.
  - A term defined elsewhere in the folder keeps its box, and its table row only links there.
  - Double quotes inside a quote become single quotes.
  - The Chinese term names are my translation, without a note.

## 6. Adding a term

When I meet a new term (in a lecture, a slide, a lab):

1. I search the site. If it is there, I read it.
2. If not, find the sentence in the official sources (the cache first).
3. Add a box and a table row on the sub-page whose listed source contains it, at its place in that source, quoting it (a definition, or "(context)"). It is added even when it sits in a list of what a part does (Data-residency in 2.1, from "Additional advantages of region pairs").
4. When only a source not yet listed for any page has it, propose that source for the folder README first.

## 7. Figures

- `media/`: the figures, drawn by us (no copied images). Each has an HTML source in `figures/` at the repo root, rendered to PNG with `figures/shot.py` (see the repository README, "Figures"). Older figures were drawn in draw.io and have no source yet.
- Names only, no section numbers; the table under the topic figure maps them to sub-pages.
- Green step circles only on process figures (see `figure_rules.md` in the cloud notes repo).

## 8. Place in the knowledge base

Cloud spans several CS2023 knowledge areas (see the navigation rules in the repository README). Its topics map to these CS2023 knowledge units (Joint Task Force on Computing Curricula, 2024, <https://doi.org/10.1145/3664191>):

| CS2023 knowledge unit | What CS2023 says | Azure topics here |
|---|---|---|
| PDC-Programs | "Clusters, clouds; elastic provisioning" | Compute, Containers |
| DM-Distributed | Distributed Databases/Cloud Computing | Storage, Databases, Analytics |
| NC-Applications | Distributed application paradigms: client/server, peer-to-peer, cloud, edge, fog | Networking, Internet of Things |
| SPD-Web | Web platforms: cloud services; deploy, scale and manage applications on AWS, Azure, Google Cloud | Compute, Integration, DevOps |
| OS-Virtualization | Virtualization, containers compared with virtual machines | Compute, Containers |
| SEC-Foundations, SEC-Governance | Security mindset for web, cloud and mobile; cloud storage and services | Identity, Security |
| SF-Design | Criteria of system design: liveness, safety, robustness, scalability, security | Azure Well-Architected Framework, Azure Architecture Center |
