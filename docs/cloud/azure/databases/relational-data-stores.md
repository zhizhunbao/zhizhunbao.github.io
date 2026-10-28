---
title: "9.1 Relational Data Stores"
description: "Microsoft Azure, 9.1 Relational data stores: SQL Database, Azure SQL Managed Instance, SQL Database (Hyperscale), Azure Database for PostgreSQL, Azure Database for MySQL, SQL Database in Fabric."
ms.date: 2026-10-27
---

# 9.1 Relational Data Stores

## Classification

![Relational data stores, 6 Azure services from "Select an Azure service for relational data stores" in Understand data models: SQL Database, Azure SQL Managed Instance, SQL Database (Hyperscale), Azure Database for PostgreSQL, Azure Database for MySQL, SQL Database in Fabric.](media/relational-data-stores.png)

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **SQL Database**<br>SQL 数据库 | "SQL Database is a **managed relational database** for **modern cloud applications** that use the **SQL Server engine**." | SQL 数据库是一种**托管关系数据库**，面向**现代云应用程序**，使用的是 **SQL Server 引擎**。 | [Microsoft, 2025, "Select an Azure service for relational data stores" section, list item 1](https://learn.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/understand-data-store-models#:~:text=is%20a%20managed%20relational%20database%20for%20modern%20cloud%20applications) |
| **Azure SQL Managed Instance**<br>Azure SQL 托管实例 | "Azure SQL Managed Instance is a **near-complete SQL Server environment in the cloud** that's ideal for **lift-and-shift migrations**." | Azure SQL 托管实例是**云中近乎完整的 SQL Server 环境**，非常适合**直接迁移**（lift-and-shift）。 | [Microsoft, 2025, "Select an Azure service for relational data stores" section, list item 2](https://learn.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/understand-data-store-models#:~:text=is%20a%20near-complete%20SQL%20Server%20environment%20in%20the%20cloud) |
| **SQL Database (Hyperscale)**<br>SQL 数据库（超大规模） | "SQL Database (Hyperscale) is a **highly scalable SQL tier** designed for **massive workloads** with fast autoscaling and rapid backups." | SQL 数据库（超大规模）是一种**高度可扩展的 SQL 层级**，专为**海量工作负载**设计，具有快速自动缩放和快速备份能力。 | [Microsoft, 2025, "Select an Azure service for relational data stores" section, list item 3](https://learn.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/understand-data-store-models#:~:text=is%20a%20highly%20scalable%20SQL%20tier%20designed%20for%20massive%20workloads) |
| **Azure Database for PostgreSQL**<br>Azure Database for PostgreSQL | "Azure Database for PostgreSQL is a **managed PostgreSQL service** that supports **open-source extensions** and **flexible deployment options**." | Azure Database for PostgreSQL 是一种**托管 PostgreSQL 服务**，支持**开源扩展**和**灵活的部署选项**。 | [Microsoft, 2025, "Select an Azure service for relational data stores" section, list item 4](https://learn.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/understand-data-store-models#:~:text=is%20a%20managed%20PostgreSQL%20service%20that%20supports%20open-source%20extensions) |
| **Azure Database for MySQL**<br>Azure Database for MySQL | "Azure Database for MySQL is a **managed MySQL database** for **web apps and open-source workloads**." | Azure Database for MySQL 是一种**托管 MySQL 数据库**，用于 **Web 应用和开源工作负载**。 | [Microsoft, 2025, "Select an Azure service for relational data stores" section, list item 5](https://learn.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/understand-data-store-models#:~:text=is%20a%20managed%20MySQL%20database%20for%20web%20apps) |
| **SQL Database in Fabric**<br>Fabric 中的 SQL 数据库 | "SQL Database in Fabric is a **developer-friendly transactional database**, based on SQL Database, that you can use to **easily create an operational database in Fabric**." | Fabric 中的 SQL 数据库是一种**对开发人员友好的事务数据库**，基于 SQL 数据库，你可以用它**在 Fabric 中轻松创建操作数据库**。 | [Microsoft, 2025, "Select an Azure service for relational data stores" section, list item 6](https://learn.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/understand-data-store-models#:~:text=is%20a%20developer-friendly%20transactional%20database) |

## References

- Microsoft. (2025, September 23). *Understand data models*. Azure Architecture Center. https://learn.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/understand-data-store-models
