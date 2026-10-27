---
title: "3. Reliability"
description: "Microsoft Azure, 3. Reliability: Azure regions, Azure availability zones, reliability concepts."
ms.date: 2026-10-26
---

# 3. Reliability

## Classification

![Reliability sorted into three groups, as in the table of contents of the Azure reliability documentation (groups that only list links, Reliability guides for Azure services and Resources, are left out): Azure regions (region, geography, sovereign cloud, region pairs, nonpaired regions, nonregional services), Azure availability zones (availability zone, zone-redundant resources, zonal resources, zone-resilient, nonzonal deployment, physical zone, logical zone) and reliability concepts (high availability, fault tolerance, scalability and elasticity, Recovery Point Objective (RPO), Recovery Time Objective (RTO), redundancy, replication, backup).](media/reliability.png)

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **Reliability**<br>可靠性 | "*Reliability* is the **ability of a workload to keep meeting business expectations**, **even during failures or disruptions**." | 可靠性是工作负载**持续满足业务期望的能力**，**即使在发生故障或中断时**也是如此。 | [Microsoft, 2026a, para. 1](https://learn.microsoft.com/en-us/azure/reliability/overview#:~:text=is%20the%20ability%20of%20a%20workload%20to%20keep%20meeting%20business%20expectations) |
| **[Azure regions](azure-regions.md)**<br>Azure 区域 | "**Regions:** Azure operates in **over 70 regions worldwide**. This **geographic distribution** enables workloads to **withstand region-wide disruptions and outages** through planned failover capabilities, while following your data residency requirements." | **区域**：Azure 在**全球 70 多个区域**运营。这种**地理分布**使工作负载能够通过计划内的故障转移能力**承受区域范围的中断和停运**，同时遵循你的数据驻留要求。 | [Microsoft, 2026a, "Resilient foundations in Azure" section, item 2](https://learn.microsoft.com/en-us/azure/reliability/overview#:~:text=Azure%20operates%20in%20over%2070%20regions%20worldwide) |
| **[Azure availability zones](azure-availability-zones.md)**<br>Azure 可用区 | "**Availability zones:** Many Azure regions include **physically separate datacenters within the same region**. These availability zones are connected by **high-speed, low-latency networks**. Each zone has **independent power, cooling, and networking** to protect against datacenter-level failures while maintaining synchronous replication capabilities for many Azure services." | **可用区**：许多 Azure 区域包含**同一区域内物理上分开的数据中心**。这些可用区由**高速、低延迟的网络**连接。每个可用区都有**独立的电源、冷却和网络**，以防范数据中心级别的故障，同时为许多 Azure 服务保持同步复制能力。 | [Microsoft, 2026a, "Resilient foundations in Azure" section, item 3](https://learn.microsoft.com/en-us/azure/reliability/overview#:~:text=Many%20Azure%20regions%20include%20physically%20separate%20datacenters) |
| **[Reliability concepts](reliability-concepts.md)**<br>可靠性概念 | (context) "Azure provides platform capabilities that translate **reliability concepts** into **actionable building blocks** for your architecture." | （语境）Azure 提供平台能力，把**可靠性概念**转化为你的架构中**可落地的构建基块**。 | [Microsoft, 2026a, "Azure services that support your reliability" section, para. 1](https://learn.microsoft.com/en-us/azure/reliability/overview#:~:text=translate%20reliability%20concepts%20into%20actionable%20building%20blocks) |

## Coverage

| Certification | Skill area |
|---|---|
| AZ-104 Microsoft Azure Administrator | [Deploy and manage Azure compute resources (20–25%)](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-104#deploy-and-manage-azure-compute-resources-2025) |
| AZ-305 Designing Microsoft Azure Infrastructure Solutions | [Design business continuity solutions (15–20%)](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-305#design-business-continuity-solutions-1520) |
| AZ-900 Microsoft Azure Fundamentals | [Describe cloud concepts (25–30%)](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900#describe-cloud-concepts-2530)<br>[Describe Azure architecture and services (35–40%)](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900#describe-azure-architecture-and-services-3540) |

## References

- Microsoft. (n.d.). *Azure reliability documentation* [Table of contents]. Microsoft Learn. Retrieved October 26, 2026, from https://learn.microsoft.com/en-us/azure/reliability/
- Microsoft. (2026a, August 12). *Reliability in Azure*. Microsoft Learn. https://learn.microsoft.com/en-us/azure/reliability/overview
- Microsoft. (2026b). *Study guide for Exam AZ-104: Microsoft Azure Administrator*. Microsoft Learn. https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-104
- Microsoft. (2026c). *Study guide for Exam AZ-305: Designing Microsoft Azure Infrastructure Solutions*. Microsoft Learn. https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-305
- Microsoft. (2026d). *Study guide for Exam AZ-900: Microsoft Azure Fundamentals*. Microsoft Learn. https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900
