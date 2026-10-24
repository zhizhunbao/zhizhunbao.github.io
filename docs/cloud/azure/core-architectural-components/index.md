---
title: "2. Core architectural components of Azure"
description: "Microsoft Azure, 2. Core architectural components of Azure: physical infrastructure and management infrastructure."
ms.date: 2026-10-22
---

# 2. Core architectural components of Azure

## Classification

![Core architectural components of Azure sorted into two groups: physical infrastructure (datacenters, availability zones, regions, region pairs, sovereign regions) and management infrastructure (resources, resource groups, subscriptions, management groups, Azure account).](media/core-architectural-components.png)

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **Core architectural components of Azure**<br>Azure 核心体系结构组件 | "Azure's **core architectural components** can be broken down into **two main groupings**: the **physical infrastructure** and the **management infrastructure**." | Azure 的**核心体系结构组件**可以分为**两个主要分组**：**物理基础结构**和**管理基础结构**。 | [Microsoft, n.d., "Describe Azure physical infrastructure" unit, para. 1](https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/5-describe-azure-physical-infrastructure#:~:text=Azure%27s%20core%20architectural%20components%20can%20be%20broken%20down) |
| **[Physical infrastructure](physical-infrastructure.md)**<br>物理基础结构 | "The **physical infrastructure** for Azure starts with **datacenters**. These datacenters are facilities with **servers arranged in racks**, with dedicated **power, cooling, and networking infrastructure** ..." | Azure 的**物理基础结构**从**数据中心**开始。这些数据中心是一些设施，其中的**服务器排列在机架中**，并配有专用的**电源、冷却和网络基础结构**…… | [Microsoft, n.d., "Describe Azure physical infrastructure" unit, "Physical infrastructure" section, para. 1](https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/5-describe-azure-physical-infrastructure#:~:text=The%20physical%20infrastructure%20for%20Azure%20starts%20with%20datacenters) |
| **[Management infrastructure](management-infrastructure.md)**<br>管理基础结构 | "The **management infrastructure** includes Azure **resources and resource groups**, **subscriptions**, and **accounts**." | **管理基础结构**包括 Azure **资源和资源组**、**订阅**以及**帐户**。 | [Microsoft, n.d., "Describe Azure management infrastructure" unit, para. 1](https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/6-describe-azure-management-infrastructure#:~:text=The%20management%20infrastructure%20includes%20Azure%20resources) |

## Coverage

| Certification | Skill area |
|---|---|
| AZ-900 Microsoft Azure Fundamentals | [Describe Azure architecture and services (35–40%)](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900#describe-azure-architecture-and-services-3540) |

**CST8911 Introduction to Cloud Computing**

| Week | Group | Terms in the course | Source |
|---|---|---|---|
| 1 | Management infrastructure | subscription | Course Section Information (CSI): Azure subscription and budget |
| 2 | Physical infrastructure | region<br>availability zone (AZ) | Lecture 2: slide 5 |
|  | Management infrastructure | resource group | Lab 1: Resource groups and cleanup (task 8) |
| 3 | Management infrastructure | Azure resource | Lab 2: Cleanup (task 5) |
| 4 | Physical infrastructure | data center | Lecture 3: slide 3 |

**CST8912 Cloud Solution Architecture**

| Week | Group | Terms in the course | Source |
|---|---|---|---|
| 1 | Management infrastructure | subscription | How to connect to Azure (resource guide): slide 18 |
| 2 | Physical infrastructure | region<br>availability zone | Lab 1: Organizing resources (Prerequisites, Task 1), Virtual machine settings (Tasks 2, 5) |
|  | Management infrastructure | resource<br>resource group | Lab 1: Organizing resources (Prerequisites, Task 1) |
| 3 | Physical infrastructure | datacenter<br>region<br>availability zone | Design Cloud Networking Solution: slides 6, 8 |
| 4 | Physical infrastructure | region pair | Design Cloud Storage Solution: slide 13 |
| 6 | Management infrastructure | management group | Lab 5: Task 3: Implement Management Groups |

**CST8913 Cloud Migration**

| Week | Group | Terms in the course | Source |
|---|---|---|---|
| 2 | Physical infrastructure | datacenter<br>region | Introduction to Cloud Computing: slide 7<br>Lab 2: Migration execution and operations (Lab 2) |
|  | Management infrastructure | management group | Reading: Manage and Secure (Units 9–10) |
| 3 | Physical infrastructure | availability zone<br>data sovereignty | Target Cloud Architecture: slide 6<br>Cloud adoption strategy: slide 6 |
|  | Management infrastructure | resource group | Target Cloud Architecture: slide 6 |
| 6 | Management infrastructure | Azure account | Refactoring Migration: slide 8 |

**CST8915 Full-stack Cloud-native Development**

| Week | Group | Terms in the course | Source |
|---|---|---|---|
| 1 | Physical infrastructure | data center | Introduction to Cloud-Native Applications: slide 24 |
| 2 | Physical infrastructure | region | Lab 1: Subscriptions and resources |
|  | Management infrastructure | resource<br>resource group<br>subscription | Lab 1: Subscriptions and resources |
| 3 | Management infrastructure | subscription | Microservices: slide 31 |

**CST8916 Remote Data and Real-time Applications**

| Week | Group | Terms in the course | Source |
|---|---|---|---|
| 1 | Management infrastructure | resource<br>subscription | Introduction to Remote Data and Real-time Applications: slides 43, 44, 45 |
| 3 | Management infrastructure | Azure resource | Assignment 1: REST API Extension: Deploy to Azure App Service and Video Demo (Parts 4–5) |

## References

- Microsoft. (n.d.). *Describe the core architectural components of Azure* [Training module]. Microsoft Learn. Retrieved October 22, 2026, from https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/
- Microsoft. (2026). *Study guide for Exam AZ-900: Microsoft Azure Fundamentals*. Microsoft Learn. https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900
