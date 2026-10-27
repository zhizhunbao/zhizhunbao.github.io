# 9. Databases: allowed sub-pages

Follows `../README.md`. Figure on `index.md`: classification (see `../README.md`). Source: [Understand data models](https://learn.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/understand-data-store-models) (Azure Architecture Center).

## Sub-pages

| No. | File | Title (group name in the figure) | Sources | Allowed sections (the groups of the sub-page figure, in figure order) |
|---|---|---|---|---|
| 9.1 | `relational-data-stores.md` | Relational data stores | [Understand data models: Relational data stores](https://learn.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/understand-data-store-models#relational-data-stores) | 9.1.1 SQL Database, 9.1.2 Azure SQL Managed Instance, 9.1.3 SQL Database (Hyperscale), 9.1.4 Azure Database for PostgreSQL, 9.1.5 Azure Database for MySQL, 9.1.6 SQL Database in Fabric |
| 9.2 | `document-data-stores.md` | Document data stores | [Understand data models: Document data stores](https://learn.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/understand-data-store-models#document-data-stores-); [Azure Cosmos DB overview](https://learn.microsoft.com/en-us/azure/cosmos-db/overview) | 9.2.1 Azure Cosmos DB for NoSQL, 9.2.2 Azure DocumentDB, 9.2.3 Azure Cosmos DB in Fabric |
| 9.3 | `column-family-data-stores.md` | Column-family data stores | [Understand data models: Column-family data stores](https://learn.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/understand-data-store-models#column-family-data-stores-); [Azure Cosmos DB overview](https://learn.microsoft.com/en-us/azure/cosmos-db/overview) | 9.3.1 Azure Managed Instance for Apache Cassandra, 9.3.2 Apache HBase on Azure HDInsight, 9.3.3 Azure Data Explorer (Kusto) |
| 9.4 | `key-value-data-stores.md` | Key-value data stores | [Understand data models: Key-value data stores](https://learn.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/understand-data-store-models#key-value-data-stores-) | 9.4.1 Azure Managed Redis, 9.4.2 Azure Cosmos DB for Table, 9.4.3 Azure Cosmos DB for NoSQL |
| 9.5 | `graph-data-stores.md` | Graph data stores | [Understand data models: Graph data stores](https://learn.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/understand-data-store-models#graph-data-stores-); [Azure Cosmos DB overview](https://learn.microsoft.com/en-us/azure/cosmos-db/overview) | 9.5.1 SQL Server graph extensions |
| 9.6 | `time-series-data-stores.md` | Time-series data stores | [Understand data models: Time-series data stores](https://learn.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/understand-data-store-models#time-series-data-stores-) | 9.6.1 Azure Data Explorer, 9.6.2 Eventhouse in Microsoft Fabric |

Boxes follow the current "Select an Azure service" lists of Understand data models (checked 2026-10-27); each row quotes the guide. A service listed under two models (Azure Cosmos DB for NoSQL, Azure Data Explorer) has a full row in each. Object, search, vector and analytics data stores, in the same guide, belong to 8. Storage, 11. Analytics and 13. AI + Machine Learning.
