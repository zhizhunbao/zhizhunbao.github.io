---
title: "Cloud migration"
description: "CST8913 Cloud Migration study notes, weeks 1 to 6: what each week practises and where its concepts are."
ms.date: 2026-10-19
---

# Cloud migration

Study notes for CST8913 Cloud Migration (Algonquin College, Fall 2026), weeks 1 to 6 (the midterm). The lecture pages follow the Cloud Adoption Framework, one page per phase (Strategy, Plan, Ready, Adopt), with the basics and the tools on pages of their own: one figure per section with the key terms framed, and a table that defines exactly those terms in the same order. The lab pages say what each lab practises and which concepts it needs.

## The map

Every week fits one stage of the Cloud Adoption Framework journey: strategy, plan, ready, migrate. Cloud computing basics are the ground under all of it, and Git and GitHub are the tools used all term. The table under the map lists the lecture pages, their sections and the labs of each stage.

![Map: the four stages of cloud adoption with their concepts, the basics and the tools, each with its pages and labs](lectures/media/overview-1.png)

| Stage | Lecture pages and their sections | Labs |
|---|---|---|
| Cloud computing basics | [Describe cloud computing](lectures/describe-cloud-computing.md): [What is cloud computing](lectures/describe-cloud-computing.md#what-is-cloud-computing), [Describe the shared responsibility model](lectures/describe-cloud-computing.md#describe-the-shared-responsibility-model), [Define cloud models](lectures/describe-cloud-computing.md#define-cloud-models), [Describe the consumption-based model](lectures/describe-cloud-computing.md#describe-the-consumption-based-model)<br>[Describe cloud service types](lectures/describe-cloud-service-types.md): [Describe Infrastructure as a Service](lectures/describe-cloud-service-types.md#describe-infrastructure-as-a-service), [Describe Platform as a Service](lectures/describe-cloud-service-types.md#describe-platform-as-a-service), [Describe Software as a Service](lectures/describe-cloud-service-types.md#describe-software-as-a-service) | [Cloud resource comparison (lab 6)](labs/cloud-resource-comparison.md) |
| The whole framework | [Cloud Adoption Framework](lectures/cloud-adoption-framework.md) | None |
| 1. Strategy: why move | [Strategy](lectures/strategy.md): [Motivations](lectures/strategy.md#motivations), [Business outcomes](lectures/strategy.md#business-outcomes), [Financial considerations](lectures/strategy.md#financial-considerations), [Technical considerations](lectures/strategy.md#technical-considerations), [Timeline](lectures/strategy.md#timeline), [Business case](lectures/strategy.md#business-case) | [Levi Strauss & Co. migration case study (lab 2)](labs/levi-strauss-co-migration-case-study.md) |
| 2. Plan: what to move, how | [Plan](lectures/plan.md): [Rationalization](lectures/plan.md#rationalization), [Migration strategies](lectures/plan.md#migration-strategies), [Evaluate the digital estate](lectures/plan.md#evaluate-the-digital-estate), [Readiness and suitability](lectures/plan.md#readiness-and-suitability), [Team responsibilities](lectures/plan.md#team-responsibilities), [Prioritize workloads](lectures/plan.md#prioritize-workloads) | [Levi Strauss & Co. migration case study (lab 2)](labs/levi-strauss-co-migration-case-study.md)<br>[Discovery and assessment (lab 4)](labs/discovery-and-assessment.md) |
| 3. Ready: target environment | [Ready](lectures/ready.md): [Landing zones](lectures/ready.md#landing-zones)<br>[Azure Architecture Center](lectures/azure-architecture-center.md): [Architecture](lectures/azure-architecture-center.md#architecture), [Networking and load balancing](lectures/azure-architecture-center.md#networking-and-load-balancing), [Availability](lectures/azure-architecture-center.md#availability) | [IaaS and PaaS architecture (lab 3)](labs/iaas-and-paas-architecture.md) |
| 4. Adopt: migrate | [Adopt](lectures/adopt.md): [Migrate](lectures/adopt.md#migrate), [Azure Migrate](lectures/adopt.md#azure-migrate), [Rehost](lectures/adopt.md#rehost), [Refactor](lectures/adopt.md#refactor), [Azure VMware Solution](lectures/adopt.md#azure-vmware-solution), [Assess a web app](lectures/adopt.md#assess-a-web-app), [Migrate a web app](lectures/adopt.md#migrate-a-web-app) | [Rehosting to Azure (lab 5)](labs/rehosting-to-azure.md) |
| Tools | [Pro Git: getting started](lectures/pro-git-getting-started.md): [What is Git?](lectures/pro-git-getting-started.md#what-is-git)<br>[GitHub Docs: collaborating with pull requests](lectures/github-docs-collaborating.md): [About pull requests and forks](lectures/github-docs-collaborating.md#about-pull-requests-and-forks) | [Git, GitHub and Markdown (lab 1)](labs/git-github-and-markdown.md) |

## Lectures

| Week | Lecture pages |
|---|---|
| 1 | [1. Pro Git: getting started](lectures/pro-git-getting-started.md)<br>[2. GitHub Docs: collaborating with pull requests](lectures/github-docs-collaborating.md) |
| 2 | [3. Describe cloud computing](lectures/describe-cloud-computing.md)<br>[4. Describe cloud service types](lectures/describe-cloud-service-types.md)<br>[5. Cloud Adoption Framework](lectures/cloud-adoption-framework.md)<br>[6. Strategy](lectures/strategy.md)<br>[7. Plan](lectures/plan.md)<br>[8. Adopt](lectures/adopt.md) |
| 3 | [4. Describe cloud service types](lectures/describe-cloud-service-types.md)<br>[5. Cloud Adoption Framework](lectures/cloud-adoption-framework.md)<br>[6. Strategy](lectures/strategy.md)<br>[9. Ready](lectures/ready.md)<br>[10. Azure Architecture Center](lectures/azure-architecture-center.md) |
| 4 | [7. Plan](lectures/plan.md)<br>[8. Adopt](lectures/adopt.md) |
| 5 | [8. Adopt](lectures/adopt.md) |
| 6 | [8. Adopt](lectures/adopt.md) |

## Labs

| Week | Lab | Concepts to understand |
|---|---|---|
| 1 | [Git, GitHub and Markdown](labs/git-github-and-markdown.md) | Git and GitHub, working tree and staging area, commit, Git commands, branch, push, pull request, merge, fork |
| 2 | [Levi Strauss & Co. migration case study](labs/levi-strauss-co-migration-case-study.md) | motivations, discovery questions, stakeholders and RACI matrix, the five Rs, migration schedule, decision criteria, cloud models, service types |
| 3 | [IaaS and PaaS architecture](labs/iaas-and-paas-architecture.md) | IaaS, shared responsibility, VNet, subnets, NSGs and load balancers, availability zone, PaaS, IaaS or PaaS, SaaS |
| 4 | [Discovery and assessment](labs/discovery-and-assessment.md) | digital estate, discovery and assessment, Azure Migrate appliance, dependency analysis, readiness, sizing, cost estimate, migration plan, rollback, test migration |
| 5 | [Rehosting to Azure](labs/rehosting-to-azure.md) | business drivers, rehost (lift and shift), rehost or replatform, Azure VMware Solution, migration phases, migration waves, test migration, cutover, replication |
| 6 | [Cloud resource comparison](labs/cloud-resource-comparison.md) | service models, each provider's name for the same service, similarities and differences, unique capabilities, naming conventions |
