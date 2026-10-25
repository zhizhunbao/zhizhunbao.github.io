---
title: "7. Databases"
description: "Microsoft Azure, 7. Databases: relational, document, column-family, key-value, graph and time-series data stores."
ms.date: 2026-10-24
---

# 7. Databases

## Classification

![Databases sorted into the six database models of the Architecture Center's data models guide: relational, document, column-family, key-value, graph and time-series data stores, with the Azure services for each. Grey: not taught in a course yet.](media/databases.png)

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **Databases**<br>数据库 | "A **database** is a **structured system** for **storing, managing, and retrieving data**, enabling everything from simple recordkeeping to powering complex applications and services." | **数据库**是一种**结构化系统**，用于**存储、管理和检索数据**，用途从简单的记录保存到驱动复杂的应用程序和服务。 | [Microsoft, n.d., para. 1](https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-are-databases#:~:text=A%20database%20is%20a%20structured%20system) |
| **[Relational data stores](relational-data-stores.md)**<br>关系数据存储 | "**Relational database management systems** organize data into **normalized tables** by using **schema-on-write**." | **关系数据库管理系统**使用**写入时架构**，把数据组织成**规范化的表**。 | [Microsoft, 2025, "Relational data stores" section, para. 1](https://learn.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/understand-data-store-models#:~:text=Relational%20database%20management%20systems%20organize%20data) |
| **[Document data stores](document-data-stores.md)**<br>文档数据存储 | "Use **document data stores** to store **semi-structured documents**, often in **JSON format**, where each document includes **named fields and data**." | 使用**文档数据存储**来存放**半结构化文档**，通常是 **JSON 格式**，每个文档都包含**命名字段和数据**。 | [Microsoft, 2025, "Document data stores" section, para. 1](https://learn.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/understand-data-store-models#:~:text=Use%20document%20data%20stores%20to%20store) |
| **[Column-family data stores](column-family-data-stores.md)**<br>列族数据存储 | "A **column-family database**, also known as a **wide-column database**, stores **sparse data into rows** and organizes **dynamic columns into column families** to support co-access." | **列族数据库**也叫**宽列数据库**，它把**稀疏数据存成行**，并把**动态列组织成列族**，以便一起访问。 | [Microsoft, 2025, "Column-family data stores" section, para. 1](https://learn.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/understand-data-store-models#:~:text=A%20column-family%20database%2C%20also%20known%20as) |
| **[Key-value data stores](key-value-data-stores.md)**<br>键值数据存储 | "A **key-value data store** associates **each data value** with a **unique key**." | **键值数据存储**把**每个数据值**和一个**唯一的键**关联起来。 | [Microsoft, 2025, "Key-value data stores" section, para. 1](https://learn.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/understand-data-store-models#:~:text=A%20key-value%20data%20store%20associates%20each) |
| **[Graph data stores](graph-data-stores.md)**<br>图数据存储 | "A **graph database** stores information as **nodes and edges**." | **图数据库**把信息存成**节点和边**。 | [Microsoft, 2025, "Graph data stores" section, para. 1](https://learn.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/understand-data-store-models#:~:text=A%20graph%20database%20stores%20information) |
| **[Time-series data stores](time-series-data-stores.md)**<br>时间序列数据存储 | "**Time-series data stores** manage a **set of values** organized **by time**." | **时间序列数据存储**管理一组**按时间**组织的**值**。 | [Microsoft, 2025, "Time-series data stores" section, para. 1](https://learn.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/understand-data-store-models#:~:text=Time-series%20data%20stores%20manage%20a%20set) |

## Coverage

| Certification | Skill area |
|---|---|
| DP-900 Microsoft Azure Data Fundamentals | [Identify considerations for relational data on Azure (20–25%)](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-900#identify-considerations-for-relational-data-on-azure-2025)<br>[Describe considerations for working with non-relational data on Azure (15–20%)](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-900#describe-considerations-for-working-with-non-relational-data-on-azure-1520) |

**CST8911 Introduction to Cloud Computing**

| Week | Group | Terms in the course | Source |
|---|---|---|---|
| 7 | Databases | database | Lecture 6: slide 11 |

**CST8912 Cloud Solution Architecture**

| Week | Group | Terms in the course | Source |
|---|---|---|---|
| 2 | Document data stores | Azure Cosmos DB | Design Cloud Compute Solution: slides 14, 15 |
| 4 | Databases | NoSQL | Design Cloud Storage Solution: slide 17 |
|  | Relational data stores | relational database<br>Structured Query Language (SQL)<br>Azure SQL Database | Design Cloud Storage Solution: slides 7, 22 |
|  | Document data stores | document | Design Cloud Storage Solution: slide 8 |
|  | Key-value data stores | key-value store<br>Azure Cosmos DB for Table | Design Cloud Storage Solution: slides 8, 17 |
|  | Graph data stores | graph database | Design Cloud Storage Solution: slide 8 |
| 5 | Databases | database service<br>multi-model database<br>cloud database | Design Cloud Database Solution: slides 4, 6<br>Lab 4: Introduction and purpose |
|  | Relational data stores | relational<br>Azure SQL Database<br>Azure SQL Managed Instance<br>Azure Database for MySQL<br>Azure Database for PostgreSQL | Design Cloud Database Solution: slides 8, 12, 13, 14, 15<br>Lab 4: Azure SQL Database (Steps 1–6) |
|  | Document data stores | Azure Cosmos DB<br>Azure Cosmos DB for NoSQL (SQL API)<br>Azure Cosmos DB for MongoDB | Design Cloud Database Solution: slide 6 |
|  | Column-family data stores | Azure Cosmos DB for Apache Cassandra (Cassandra API) | Design Cloud Database Solution: slide 6 |
|  | Key-value data stores | in-memory database<br>Redis | Design Cloud Database Solution: slide 15 |
|  | Graph data stores | Azure Cosmos DB for Apache Gremlin (Gremlin API) | Design Cloud Database Solution: slide 6 |
|  | Time-series data stores | time series | Design Cloud Database Solution: slide 15 |

**CST8913 Cloud Migration**

| Week | Group | Terms in the course | Source |
|---|---|---|---|
| 2 | Databases | database | Introduction to Cloud Computing: slide 5 |
|  | Relational data stores | Azure SQL Managed Instance | Lab 2: Azure services (Lab 2 case study) |
| 3 | Document data stores | Azure Cosmos DB | Target Cloud Architecture: slide 8 |
| 6 | Databases | database management system (DBMS)<br>nonrelational database | Refactoring Migration: slides 4, 5 |
|  | Relational data stores | relational database<br>Azure Database for MySQL<br>Azure Database for PostgreSQL | Refactoring Migration: slide 5 |

**CST8915 Full-stack Cloud-native Development**

| Week | Group | Terms in the course | Source |
|---|---|---|---|
| 1 | Databases | managed database<br>not only SQL database (NoSQL database) | Introduction to Cloud-Native Applications: slides 33, 42 |
|  | Relational data stores | relational database | Introduction to Cloud-Native Applications: slide 42 |
|  | Key-value data stores | Redis | Introduction to Cloud-Native Applications: slide 42 |
| 3 | Relational data stores | Azure SQL | Microservices: slides 32, 33 |
|  | Document data stores | Azure Cosmos DB | Microservices: slides 32, 33 |

**CST8916 Remote Data and Real-time Applications**

| Week | Group | Terms in the course | Source |
|---|---|---|---|
| 1 | Databases | managed database | Introduction to Remote Data and Real-time Applications: slide 15 |
| 3 | Relational data stores | relational database | GraphQL: slides 17, 18, 19 |
| 6 | Relational data stores | Azure SQL | Popular Cloud Services for Real-time Applications II: slide 7 |
|  | Document data stores | Azure Cosmos DB | Popular Cloud Services for Real-time Applications II: slide 7 |

## References

- Microsoft. (n.d.). *What is a database?* Microsoft Azure. Retrieved October 24, 2026, from https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-are-databases
- Microsoft. (2025). *Understand data models*. Azure Architecture Center. https://learn.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/understand-data-store-models
- Microsoft. (2026a). *Study guide for Exam DP-900: Microsoft Azure Data Fundamentals*. Microsoft Learn. https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-900
- Microsoft. (2026b). *Unified AI database: Azure Cosmos DB*. Microsoft Learn. https://learn.microsoft.com/en-us/azure/cosmos-db/overview
