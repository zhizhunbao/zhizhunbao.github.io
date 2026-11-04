---
title: "8.6 Data Management"
description: "Microsoft Azure, 8.6 Data management: Azure Storage Discovery, Azure Storage Actions, Azure Data Share, Azure Backup, Azure HPC Cache."
ms.date: 2026-11-04
---

# 8.6 Data Management

## Classification

![Data management, the five tools and services that the Azure Storage documentation lists under "Data management", in its order: Azure Storage Discovery, Azure Storage Actions, Azure Data Share, Azure Backup, Azure HPC Cache. Azure Backup expands to its key components and backup types: Recovery Services vault, Backup vault, Backup policies, Backup extension or agent, Snapshot-based backup, Vaulted backup, Operational + vaulted backup, Vault-archive tier.](media/data-management.png)

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **Azure Storage Discovery**<br>Azure 存储发现 | "Azure Storage Discovery is a **fully managed service** that provides **enterprise-wide visibility into your Azure Blob Storage and Azure Data Lake Storage estate**." | Azure 存储发现是一项**完全托管的服务**，提供**对 Azure Blob 存储和 Azure Data Lake Storage 资产的企业级可见性**。 | [Microsoft, 2025c, para. 1](https://learn.microsoft.com/en-us/azure/storage-discovery/overview#:~:text=is%20a%20fully%20managed%20service%20that%20provides%20enterprise-wide%20visibility) |
| **Azure Storage Actions**<br>Azure 存储操作 | "Azure Storage Actions is a **fully managed platform** designed to **automate data management tasks** for Azure Blob Storage and Azure Data Lake Storage." | Azure 存储操作是一个**完全托管的平台**，旨在为 Azure Blob 存储和 Azure Data Lake Storage **自动执行数据管理任务**。 | [Microsoft, 2025b, para. 1](https://learn.microsoft.com/en-us/azure/storage-actions/overview#:~:text=is%20a%20fully%20managed%20platform%20designed%20to%20automate%20data%20management%20tasks) |
| **Azure Data Share**<br>Azure 数据共享 | "Azure Data Share enables organizations to **securely share data** with **multiple customers and partners**." | Azure 数据共享让组织能够**安全地共享数据**，共享对象是**多个客户和合作伙伴**。 | [Microsoft, 2026a, para. 1](https://learn.microsoft.com/en-us/azure/data-share/overview#:~:text=enables%20organizations%20to%20securely%20share%20data) |
| **Azure Backup**<br>Azure 备份 | "Azure Backup is a **native Azure service** that helps you **protect your data and restore it when required**." | Azure 备份是一项**原生 Azure 服务**，帮助你**保护数据并在需要时还原数据**。 | [Microsoft, 2026b, para. 1](https://learn.microsoft.com/en-us/azure/backup/backup-overview#:~:text=is%20a%20native%20Azure%20service%20that%20helps%20you%20protect%20your%20data) |
| **Recovery Services vault**<br>恢复服务保管库 | "**Recovery Services vault** or **Backup vault**: **Stores backup data and recovery points**, and **acts as a security boundary**." | **恢复服务保管库**或**备份保管库**：**存放备份数据和恢复点**，并**充当安全边界**。 | [Microsoft, 2026b, "Key components in Azure Backup" section, list item 1](https://learn.microsoft.com/en-us/azure/backup/backup-overview#:~:text=Stores%20backup%20data%20and%20recovery%20points) |
| **Backup vault**<br>备份保管库 | "**Recovery Services vault** or **Backup vault**: **Stores backup data and recovery points**, and **acts as a security boundary**." | **恢复服务保管库**或**备份保管库**：**存放备份数据和恢复点**，并**充当安全边界**。 | [Microsoft, 2026b, "Key components in Azure Backup" section, list item 1](https://learn.microsoft.com/en-us/azure/backup/backup-overview#:~:text=Stores%20backup%20data%20and%20recovery%20points) |
| **Backup policies**<br>备份策略 | "**Backup policies**: **Define when backups run and how long data is retained**." | **备份策略**：**规定备份何时运行、数据保留多久**。 | [Microsoft, 2026b, "Key components in Azure Backup" section, list item 2](https://learn.microsoft.com/en-us/azure/backup/backup-overview#:~:text=Define%20when%20backups%20run) |
| **Backup extension or agent**<br>备份扩展或代理 | "**Backup extension or agent**: **Enables workload-aware or file-level backups**." | **备份扩展或代理**：**实现感知工作负载的备份或文件级备份**。 | [Microsoft, 2026b, "Key components in Azure Backup" section, list item 3](https://learn.microsoft.com/en-us/azure/backup/backup-overview#:~:text=Enables%20workload-aware%20or%20file-level%20backups) |
| **Snapshot-based backup**<br>基于快照的备份 | "Snapshot-based backup – **Fast backups and restores** for supported workloads." | 基于快照的备份：为受支持的工作负载提供**快速的备份和还原**。 | [Microsoft, 2026b, "Backup types and tiers" section, list item 1](https://learn.microsoft.com/en-us/azure/backup/backup-overview#:~:text=Fast%20backups%20and%20restores%20for%20supported%20workloads) |
| **Vaulted backup**<br>保管库备份 | "Vaulted backup – **Copies data to a vault for durability and isolation**." | 保管库备份：**把数据复制到保管库，以获得持久性和隔离**。 | [Microsoft, 2026b, "Backup types and tiers" section, list item 2](https://learn.microsoft.com/en-us/azure/backup/backup-overview#:~:text=Copies%20data%20to%20a%20vault%20for%20durability) |
| **Operational + vaulted backup**<br>操作备份 + 保管库备份 | "Operational + vaulted backup (for some services) – **Combines fast restore and long-term retention**." | 操作备份 + 保管库备份（部分服务）：**兼得快速还原和长期保留**。 | [Microsoft, 2026b, "Backup types and tiers" section, list item 3](https://learn.microsoft.com/en-us/azure/backup/backup-overview#:~:text=Combines%20fast%20restore%20and%20long-term%20retention) |
| **Vault-archive tier**<br>保管库存档层 | "Vault-archive tier – **Stores backup data in archived state for long-term retention**, enabling cost-efficient storage of infrequently accessed recovery points that are retained primarily to meet compliance requirements." | 保管库存档层：**把备份数据以存档状态保存，用于长期保留**，让主要为满足合规要求而保留、很少访问的恢复点存得更省钱。 | [Microsoft, 2026b, "Backup types and tiers" section, list item 4](https://learn.microsoft.com/en-us/azure/backup/backup-overview#:~:text=Stores%20backup%20data%20in%20archived%20state) |
| **Azure HPC Cache**<br>Azure HPC 缓存 | "Azure HPC Cache **speeds access to your data** for **high-performance computing (HPC) tasks**." | Azure HPC 缓存**加快数据访问速度**，用于**高性能计算 (HPC) 任务**。 | [Microsoft, 2025a, para. 1](https://learn.microsoft.com/en-us/azure/hpc-cache/hpc-cache-overview#:~:text=speeds%20access%20to%20your%20data%20for%20high-performance%20computing) |

## References

- Microsoft. (2025a, September 30). *What is Azure HPC Cache?* Microsoft Learn. https://learn.microsoft.com/en-us/azure/hpc-cache/hpc-cache-overview
- Microsoft. (2025b, August 1). *What is Azure Storage Actions*. Microsoft Learn. https://learn.microsoft.com/en-us/azure/storage-actions/overview
- Microsoft. (2025c, October 9). *What is Azure Storage Discovery?* Microsoft Learn. https://learn.microsoft.com/en-us/azure/storage-discovery/overview
- Microsoft. (2026a, January 9). *What is Azure Data Share?* Microsoft Learn. https://learn.microsoft.com/en-us/azure/data-share/overview
- Microsoft. (2026b, September 16). *What is the Azure Backup service?* Microsoft Learn. https://learn.microsoft.com/en-us/azure/backup/backup-overview
