---
title: "Levi Strauss & Co. migration case study"
description: "CST8913 Cloud Migration, lab 2: Levi Strauss & Co. migration case study. Exam-style questions answered with my lab work."
ms.date: 2026-10-19
---

# Levi Strauss & Co. migration case study

Lab 2 of CST8913 Cloud Migration (week 2): explain why a company moves to the cloud, choose a migration approach per workload, and decide who is responsible for what. Each section asks one question about a concept the lab needs and answers it with what I wrote in my lab.

## Concepts to understand

- cloud models
- service types
- motivations
- the five Rs
- RACI matrix

## 1. What motivated Levi Strauss & Co. to move to the cloud?

- **New business model.** Moving from wholesale to direct-to-consumer (DTC), with a goal of becoming a USD 10 billion DTC brand, requires speed, automation, and data.
- **Technical debt.** About 160 applications, several datacenters, nine ERP systems, and different processes across 110 countries made the business hard to change.
- **Datacenter cost.** Owning and operating datacenters had become too expensive; leaving them brings significant yearly savings.
- **Standardization.** One global ERP platform means consistent processes and consistent data.
- **AI readiness.** Unified data on a standard platform is the foundation for scaling AI and agents.

Explained in [5. Cloud Adoption Framework for Azure](../lectures/cloud-adoption-framework-for-azure.md).

## 2. What would you ask before a migration to understand a company's existing infrastructure, applications, data, security and business requirements?

| Area | Questions |
|---|---|
| Applications | Which of the ~160 applications are business-critical, and which could be retired or replaced with SaaS? |
| Servers | How many servers are there, how heavily are they used, and which run operating systems near end of support? |
| Data | How much data do the nine ERP systems hold, and how will it be merged into one data model? |
| Networking | How are stores, distribution centers, and offices in 110 countries connected, and what latency do they need? |
| Security | How is identity managed, which data-residency laws apply, and what are the backup and recovery targets (RPO and RTO)? |
| Dependencies | Which applications depend on each other or on the ERP systems, and so must move in the same wave? |
| Business requirements | How much downtime is acceptable, which retail peak periods must be avoided, and what are the budget and deadline? |

Explained in [6. What is Azure Migrate?](../lectures/what-is-azure-migrate.md).

## 3. Who are the migration stakeholders, and how does a RACI matrix divide the work between them?

Titles are from the case study; the responsibilities are my proposal.

| Column | Stakeholder | Main responsibility |
|---|---|---|
| Sponsor | Jason Gowans, Chief Digital & Technology Officer | Business case, budget, and scope |
| ERP | Saravana Ramaratnam, VP, Global ERP and Enterprise Platforms | Consolidating the nine ERP systems |
| Infra | Michael Womack, Sr. Director, Global Infrastructure and Engineering | Datacenter exit and the Azure environment |
| Migration | Shawn Harris, Sr. Director, Enterprise Platform Services | Migration team and Azure Migrate |
| Security | Security and compliance team | Security, identity, and compliance controls |
| Business | Business, finance, and regional leaders | Downtime approval, process validation, and savings |
| Microsoft | Cloud provider | Platform, tooling, and expert support |

| Activity | Sponsor | ERP | Infra | Migration | Security | Business | Microsoft |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Approve strategy, budget, and timeline | **A** | R | R | C | C | C | I |
| Discover and assess the estate | I | C | **A** | R | C | C | C |
| Design the Azure landing zone and security | I | C | **A** | R | R | I | C |
| Migrate servers and databases in waves | I | C | **A** | R | C | I | C |
| Standardize processes on the global ERP | I | **A** | C | C | C | R | I |
| Cut over and decommission the datacenters | I | C | **A** | R | C | C | I |
| Optimize cost, performance, and resilience | I | C | **A** | R | C | C | C |

Explained in [5. Cloud Adoption Framework for Azure](../lectures/cloud-adoption-framework-for-azure.md).

## 4. Which migration approach (of the five Rs) fits each kind of workload at Levi Strauss & Co.?

**Recommendation: rehost first, then refactor selectively**, choosing the approach for each workload:

| Workload | Approach | Reason |
|---|---|---|
| Most servers and applications | **Rehost** (lift and shift) | Fastest, lowest-risk way out of the costly datacenters; Azure Migrate handles replication |
| Databases | **Refactor** to Azure SQL Managed Instance | No patching; latency improved 2x and max IOPS by 60% |
| Third-party applications | **Refactor** onto Azure Kubernetes Service | Less server overhead, and it scales on demand |
| Nine regional ERP systems | **Replace** with one global ERP platform | Standard processes and unified data are the main goal |
| Applications no longer needed | **Retire** | Less to migrate, secure, and pay for |

Explained in [5. Cloud Adoption Framework for Azure](../lectures/cloud-adoption-framework-for-azure.md).

## 5. Which migration approach did you recommend first, and why?

**Why rehost first:**

1. Every month on-premises costs money. The case study shows the approach works: the datacenter exit shrank from a nine-month plan to about six months, saving 2–3 hours per server.
2. Rearchitecting 160 applications before moving would delay both the exit and the savings. Improvements can follow one workload at a time once everything runs on Azure.

Explained in [5. Cloud Adoption Framework for Azure](../lectures/cloud-adoption-framework-for-azure.md).

## 6. What does a high-level migration schedule look like?

| Phase | Timing | Key activities |
|---|---|---|
| 1. Discover and assess | Months 1–2 | Inventory with Azure Migrate, map dependencies, choose an approach per workload, estimate cost |
| 2. Prepare the landing zone | Months 2–3 | Subscriptions, networking, identity, zero-trust security, and backup; Azure Arc for remaining on-premises servers |
| 3. Pilot | Month 3 | Migrate low-risk servers to test replication, cutover, and rollback |
| 4. Migrate in waves | Months 4–8 | Move dependent applications together; rehost servers and move databases, avoiding retail peak periods |
| 5. Cut over and exit | Month 8 | Final cutover in approved downtime windows, then decommission the datacenters |
| 6. Optimize | Month 9 onward | Right-size resources, track cost, test disaster recovery, and build AI on the unified data |

The migration (months 3–8) matches the roughly six-month datacenter exit in the case study, while ERP consolidation continues within the company's seven-year digital transformation.

Explained in [8. Prepare for cloud adoption with a data-driven plan](../lectures/prepare-for-cloud-adoption-with-a-data-driven-plan.md).

## 7. What business and technical criteria should guide migration decisions?

| Business criteria | Technical criteria |
|---|---|
| **Cost:** Azure compared with owning datacenters | **Compatibility:** can a workload be rehosted as-is? |
| **Speed:** how soon the datacenters can close | **Security and compliance:** zero trust, identity, data residency |
| **Continuity:** acceptable downtime for stores and online sales | **Performance:** latency, and regions close to customers |
| **Strategic fit:** the DTC model, standard processes, and AI | **Resilience:** backup, disaster recovery, and cross-region replication |
| | **Operability:** managed services and infrastructure as code |

Explained in [5. Cloud Adoption Framework for Azure](../lectures/cloud-adoption-framework-for-azure.md).
