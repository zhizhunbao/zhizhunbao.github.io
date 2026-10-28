---
title: "3.1 Azure Regions"
description: "Microsoft Azure, 3.1 Azure regions: Region, Geography, Sovereign cloud, Region pairs, Asymmetrical region pairs, Nonpaired regions, Nonregional services, Global services, Geographic services."
ms.date: 2026-10-27
---

# 3.1 Azure Regions

## Classification

![Azure regions: Region, Geography, Sovereign cloud, Region pairs (expanded into Asymmetrical region pairs), Nonpaired regions, Nonregional services (expanded into Global services, Geographic services).](media/azure-regions.png)

## Glossary

| Term | Definition | 中文解释 | Source |
|---|---|---|---|
| **Region**<br>区域 | "Each region is a **set of physical facilities** that include **datacenters and networking infrastructure**." | 每个区域都是一组**物理设施**，包括**数据中心和网络基础设施**。 | [Microsoft, 2026c, para. 1](https://learn.microsoft.com/en-us/azure/reliability/regions-overview#:~:text=Each%20region%20is%20a%20set%20of%20physical%20facilities) |
| **Geography**<br>地理区域 | "Each geography represents a **data residency boundary**, for example the United States, or Europe, and **may contain one or more regions**." | 每个地理区域代表一个**数据驻留边界**，例如美国或欧洲，并且**可以包含一个或多个区域**。 | [Microsoft, 2026c, para. 1](https://learn.microsoft.com/en-us/azure/reliability/regions-overview#:~:text=Each%20geography%20represents%20a%20data%20residency%20boundary%2C%20for) |
| **Sovereign cloud**<br>主权云 | "However, some regions belong to *sovereign cloud* geographies. Customers in specific geographic areas with **stringent data residency regulations** can access these regions." | 但是，某些区域属于主权云地理区域。位于特定地理区域、受**严格数据驻留法规**约束的客户可以访问这些区域。 | [Microsoft, 2026c, "Understand Azure regions and geographies" section, Note](https://learn.microsoft.com/en-us/azure/reliability/regions-overview#:~:text=However%2C%20some%20regions%20belong%20to%20sovereign%20cloud%20geographies.) |
| **Region pairs**<br>区域对 | "Microsoft **pairs some Azure regions with another Azure region** to form *region pairs*." | Microsoft **把一些 Azure 区域与另一个 Azure 区域配对**，形成区域对。 | [Microsoft, 2026c, "Paired and nonpaired regions" section, para. 1](https://learn.microsoft.com/en-us/azure/reliability/regions-overview#:~:text=Microsoft%20pairs%20some%20Azure%20regions%20with%20another%20Azure) |
| **Asymmetrical region pairs**<br>非对称区域对 | "*Asymmetrical region pairs* involve **regions that aren't bidirectionally paired**." | 非对称区域对指**不是双向配对的区域**。 | [Microsoft, 2026b, "Asymmetrically paired regions" section, para. 1](https://learn.microsoft.com/en-us/azure/reliability/regions-paired#:~:text=involve%20regions%20that%20aren) |
| **Nonpaired regions**<br>非配对区域 | "Many newer regions **aren't paired**, and instead **use availability zones as their primary means of redundancy**." | 许多较新的区域**没有配对**，而是**以可用区作为主要的冗余手段**。 | [Microsoft, 2026c, "Paired and nonpaired regions" section, para. 2](https://learn.microsoft.com/en-us/azure/reliability/regions-overview#:~:text=Many%20newer%20regions%20aren%27t%20paired%2C%20and%20instead%20use) |
| **Nonregional services**<br>非区域服务 | "Microsoft deploys nonregional services **across two or more regions**." | Microsoft 把非区域服务**部署在两个或更多区域中**。 | [Microsoft, 2026c, "Nonregional services" section, para. 1](https://learn.microsoft.com/en-us/azure/reliability/regions-overview#:~:text=Microsoft%20deploys%20nonregional%20services%20across%20two%20or%20more) |
| **Global services**<br>全局服务 | "**Global services** are **deployed to many Azure regions worldwide**." | **全局服务**会**部署到全球许多 Azure 区域**。 | [Microsoft, 2026a, "Types of nonregional services" section, list item 1](https://learn.microsoft.com/en-us/azure/reliability/regions-nonregional-services#:~:text=are%20deployed%20to%20many%20Azure%20regions%20worldwide) |
| **Geographic services**<br>地理服务 | "**Geographic services** are **deployed to a geographic area**, and **not a specific Azure region**." | **地理服务**会**部署到某个地理区域**，而**不是某个特定的 Azure 区域**。 | [Microsoft, 2026a, "Types of nonregional services" section, list item 2](https://learn.microsoft.com/en-us/azure/reliability/regions-nonregional-services#:~:text=are%20deployed%20to%20a%20geographic%20area) |

## References

- Microsoft. (2026a, January 22). *Azure nonregional services*. Microsoft Learn. https://learn.microsoft.com/en-us/azure/reliability/regions-nonregional-services
- Microsoft. (2026b, October 15). *Azure region pairs and nonpaired regions*. Microsoft Learn. https://learn.microsoft.com/en-us/azure/reliability/regions-paired
- Microsoft. (2026c, June 26). *What are Azure regions?* Microsoft Learn. https://learn.microsoft.com/en-us/azure/reliability/regions-overview
