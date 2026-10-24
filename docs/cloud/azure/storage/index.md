---
title: "6. Storage"
description: "Microsoft Azure, 6. Storage: storage accounts, storage redundancy, storage services, data migration options and file movement options."
ms.date: 2026-10-22
---

# 6. Storage

## Classification

![Storage sorted into the five units of the AZ-900 storage module: storage accounts, storage redundancy, storage services, data migration options and file movement options. Grey: not taught in a course yet.](media/storage.png)

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **Storage**<br>存储 | "**Cloud storage** is a way of **saving data on remote servers** where it can be **accessed online** instead of on **local computers or physical hard drives**." | **云存储**是一种**把数据保存在远程服务器上**的方式，数据可以**在线访问**，而不是保存在**本地计算机或物理硬盘**上。 | [Microsoft, n.d.-b, para. 1](https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-cloud-storage#:~:text=Cloud%20storage%20is%20a%20way%20of%20saving%20data) |
| **[Storage accounts](storage-accounts.md)**<br>存储帐户 | "A **storage account** provides a **unique namespace** for your **Azure Storage data** that's **accessible from anywhere in the world** over HTTP or HTTPS." | **存储帐户**提供一个**唯一的命名空间**，用于存放你的 **Azure 存储数据**，可以通过 HTTP 或 HTTPS **从世界任何地方访问**。 | [Microsoft, n.d.-a, "Describe Azure storage accounts" unit, para. 1](https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/2-accounts#:~:text=A%20storage%20account%20provides%20a%20unique%20namespace) |
| **[Storage redundancy](storage-redundancy.md)**<br>存储冗余 | "**Azure Storage** keeps **multiple copies of data** to **protect against** hardware failures, outages, and **regional disasters**." | **Azure 存储**会保留**多个数据副本**，以**防范**硬件故障、服务中断和**区域性灾难**。 | [Microsoft, n.d.-a, "Describe Azure storage redundancy" unit, para. 1](https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/3-redundancy#:~:text=Azure%20Storage%20keeps%20multiple%20copies%20of%20data) |
| **[Storage services](storage-services.md)**<br>存储服务 | "**Azure Storage** includes these **core data services**: Azure Blobs ... Azure Files ... Azure Queues ... Azure Disks ... Azure Tables ..." | **Azure 存储**包括以下**核心数据服务**：Azure Blobs……Azure Files……Azure Queues……Azure Disks……Azure Tables…… | [Microsoft, n.d.-a, "Describe Azure storage services" unit, para. 1](https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/4-describe-azure-storage-services#:~:text=Azure%20Storage%20includes%20these%20core%20data%20services) |
| **[Data migration options](data-migration-options.md)**<br>数据迁移选项 | "Azure supports both **real-time migration** of infrastructure, applications, and data using **Azure Migrate** as well as **asynchronous migration** of data using **Azure Data Box**." | Azure 既支持对基础结构、应用程序和数据进行**实时迁移**（使用 **Azure Migrate**），也支持对数据进行**异步迁移**（使用 **Azure Data Box**）。 | [Microsoft, n.d.-a, "Identify Azure data migration options" unit, para. 1](https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/6-identify-azure-data-migration-options#:~:text=Azure%20supports%20both%20real-time%20migration) |
| **[File movement options](file-movement-options.md)**<br>文件移动选项 | "... Azure also has **tools** designed to help you **move or interact with individual files** or **small file groups**." | ……Azure 还提供一些**工具**，帮助你**移动或处理单个文件**或**小型文件组**。 | [Microsoft, n.d.-a, "Identify Azure file movement options" unit, para. 1](https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/7-identify-azure-file-movement-options#:~:text=Azure%20also%20has%20tools%20designed%20to%20help%20you) |

## Coverage

| Certification | Skill area |
|---|---|
| AZ-900 Microsoft Azure Fundamentals | [Describe Azure architecture and services (35–40%)](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900#describe-azure-architecture-and-services-3540) |

**CST8911 Introduction to Cloud Computing**

| Week | Group | Terms in the course | Source |
|---|---|---|---|
| 1 | Storage | cloud storage<br>storage | Lecture 1: slides 3, 12 |
|  | Storage services | Azure Blob Storage<br>Azure Disk Storage (managed disks) | Lecture 1: slide 12 |
| 2 | Storage accounts | storage account<br>general-purpose v2 (StorageV2)<br>endpoint | Lab 1: Storage account and redundancy (task 1), Command-line tools (before you start) |
|  | Storage redundancy | redundancy<br>locally redundant storage (LRS)<br>zone-redundant storage (ZRS)<br>geo-redundant storage (GRS) | Lab 1: Storage account and redundancy (task 1) |
|  | Storage services | file share | Lab 1: Containers and file shares (tasks 2–3) |
|  | File movement options | AzCopy | Lab 1: Command-line tools (before you start) |
| 6 | Storage | cloud storage (cloud component) | Lecture 5: slide 5 |
|  | Storage services | Azure Files<br>Azure Queue Storage | Lecture 5: slide 10 |

**CST8912 Cloud Solution Architecture**

| Week | Group | Terms in the course | Source |
|---|---|---|---|
| 1 | Storage | storage | Introduction to Cloud Solution Architecture: slides 6, 7, 8 |
|  | Storage redundancy | redundancy | Introduction to Cloud Solution Architecture: slide 18 |
| 2 | Storage redundancy | locally redundant storage (LRS) | Lab 1: Disks and networking (Tasks 3–4) |
|  | Storage services | managed disk | Lab 1: Disks and networking (Tasks 3–4) |
| 4 | Storage accounts | storage account<br>general-purpose v2 account (StorageV2)<br>storage account type | Design Cloud Storage Solution: slides 14, 23 |
|  | Storage redundancy | storage redundancy options<br>Azure Storage redundancy<br>locally redundant storage (LRS)<br>zone-redundant storage (ZRS)<br>geo-redundant storage (GRS)<br>geo-zone-redundant storage (GZRS)<br>read-access geo-redundant storage (RA-GRS) | Design Cloud Storage Solution: slides 4, 10, 11, 12, 13, 23 |
|  | Storage services | Azure Blob Storage<br>Azure Files<br>Azure Queue Storage<br>Azure Table storage<br>Azure Disk Storage | Design Cloud Storage Solution: slides 15, 16, 17, 18, 19 |

**CST8913 Cloud Migration**

| Week | Group | Terms in the course | Source |
|---|---|---|---|
| 2 | Storage | storage | Introduction to Cloud Computing: slide 5 |
|  | Data migration options | Azure Migrate<br>Azure Data Box | Lab 2: Azure services (Lab 2 case study)<br>Reading: Migrate, Modernize, and Cloud-native (Units 5–7) |
| 3 | Storage accounts | storage account | Target Cloud Architecture: slide 6 |
| 4 | Storage services | managed disk | Migration Assessment Process: slide 12 |

**CST8915 Full-stack Cloud-native Development**

| Week | Group | Terms in the course | Source |
|---|---|---|---|
| 3 | Storage services | Blob storage | Microservices: slides 32, 33 |

**CST8916 Remote Data and Real-time Applications**

| Week | Group | Terms in the course | Source |
|---|---|---|---|
| 6 | Storage | storage | Popular Cloud Services for Real-time Applications II: slide 29 |
|  | Storage services | Azure Blob Storage | Popular Cloud Services for Real-time Applications II: slide 7 |

## References

- Microsoft. (n.d.-a). *Describe Azure storage services* [Training module]. Microsoft Learn. Retrieved October 22, 2026, from https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/
- Microsoft. (n.d.-b). *What is cloud storage?* Microsoft Azure. Retrieved October 22, 2026, from https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-cloud-storage
- Microsoft. (2026a). *Introduction to Azure Storage*. Microsoft Learn. https://learn.microsoft.com/en-us/azure/storage/common/storage-introduction
- Microsoft. (2026b). *Study guide for Exam AZ-900: Microsoft Azure Fundamentals*. Microsoft Learn. https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900
