# SQL Server: allowed pages

Source: the SQL Server documentation (https://learn.microsoft.com/en-us/sql/sql-server/). Its full table of contents is cached in `design-refs/official-docs/cache/sql-toc.json`, so nothing here copies it.

The official table of contents mixes concepts with release notes, how-to steps, tutorials, reference lists and links. Only the parts that hold terms get pages, grouped by concept in the order below. Every planned group has a page from the start (the plan is part of the site); a page without terms yet says "Not written yet" and names the official parts its terms will come from.

| No. | Folder and page | Fourth level, from the official table of contents (part: entries, in their order) |
|---|---|---|
| 1 | `database-engine/` Database Engine | Overview (The Microsoft SQL Database Engine, Editions and features); Internals & architecture (Ghost row cleanup process, Index architecture and design, Page and extent architecture, Query processing architecture, SQL Server I/O fundamentals, Security cache, Thread & task architecture, Transaction log architecture & management guide, Transaction locking & row versioning guide, Optimized locking, Deadlocks guide, Memory management architecture) |
| 2 | `database-design/` Database design | Database design (Hierarchical Data, Collation, Databases, Event notification, FILESTREAM, FileTable & BLOB, Indexes, SQL Graph, Sequence numbers, Service Broker, Spatial data, Stored procedures, Tables, Compare change tracking with CDC, Triggers, User-defined functions, Views, XML data) |
| 3 | `query-data/` Query data | Query data (Cursors, Joins, Scripting, Subqueries, Data virtualization (PolyBase), Linked servers, Full-Text Search, Synonyms) |
| 4 | `development/` Development | Development (Common Language Runtime (CLR), Extended stored procedures, Express Local DB, JSON, Fuzzy string match, Regular expressions, Language Extensions, SQL Server Native Client, Native Client OLE DB, Native Client ODBC, Server Management Objects (SMO), SQLXML, Windows Management Instrumentation (WMI)) |
| 5 | `business-continuity/` Business continuity | Business continuity (Backup & restore, Always On availability groups, Always On failover cluster instance, Database mirroring, Log shipping) |
| 6 | `security/` Security | Security > Concepts (Protecting SQL Server Intellectual Property, Authentication Access, Encryption, Auditing, Ledger) |
| 7 | `data-movement/` Data movement | Migrate & load data (SQL Server Integration Services (SSIS), Data Quality Services (DQS), Replication, SQL Server Migration Assistant (SSMA)) |
| 8 | `reporting-and-analytics/` Reporting & Analytics | Reporting & Analytics (Azure Synapse Link for SQL, Fabric Databases, Machine Learning Services, SQL Server Analysis Services (SSAS), SQL Server Reporting Services (SSRS), Master Data Services) |
| 9 | `ai/` AI | AI (Intelligent applications and AI, Vectors and embeddings) |
| 10 | `tools/` Tools | Tools (Database Tuning Advisor (DTA), Distributed Replay, SQL Server Configuration Manager, BCP (bulk copy utility), SQLCMD, SSB Diagnose, SQL Server Data Tools (SSDT), SQL Server Management Studio (SSMS), SQL projects, SqlPackage, SQL Server Profiler, Visual Studio Code extensions) |

Left out (no terms): What is SQL Server? (its term, SQL Server, is the first row of the overview), Installation, Tutorials, Resources, Reference, Microsoft Learn, SQL Server on Linux, SQL on Azure (covered under Cloud > Microsoft Azure), SQL Server on Azure Local, Big Data Clusters (retired), and in every group What's new, Release notes, Known issues, How-to, Quickstarts, Tutorials, FAQ. Manage, monitor, & tune is not placed yet: its next level has to be read first. "Data movement" is our name; the other group names are the official ones.

## Fourth-level pages: one at a time

Each fourth-level page is handled on its own, in this order:

1. Cache the article the table of contents links to (`urls_kb_sql_server_level4.txt`).
2. Read its body and find the term it defines and the definition sentence.
3. Rename the box and the page to that term (an article that defines two terms becomes two entries, for example change tracking and change data capture); give the page its figure and Glossary row, quoting the sentence.
4. If the body defines no term, drop the entry.
5. Mark it done here.

| No. (as planned) | Entry (official title) | Article | Term(s) | Status |
|---|---|---|---|---|
| 1.1 | The Microsoft SQL Database Engine | https://learn.microsoft.com/en-us/sql/database-engine/sql-database-engine | SQL Database Engine | done |
| 1.2 | Editions and features | https://learn.microsoft.com/en-us/sql/sql-server/editions-and-components-of-sql-server-2025 | SQL Server editions | done |
| 1.3 | Ghost row cleanup process | https://learn.microsoft.com/en-us/sql/relational-databases/ghost-row-cleanup-process-guide | Ghost cleanup | done |
| 1.4 | Index architecture and design | https://learn.microsoft.com/en-us/sql/relational-databases/sql-server-index-design-guide | Index | done |
| 1.5 | Page and extent architecture | https://learn.microsoft.com/en-us/sql/relational-databases/pages-and-extents-architecture-guide | Page; Extent | done (split) |
| 1.6 | Query processing architecture | https://learn.microsoft.com/en-us/sql/relational-databases/query-processing-architecture-guide | Query processing | done |
| 1.7 | SQL Server I/O fundamentals | https://learn.microsoft.com/en-us/sql/relational-databases/sql-server-storage-guide | Disk I/O | done |
| 1.8 | Security cache | https://learn.microsoft.com/en-us/sql/relational-databases/security-cache | Security cache | done |
| 1.9 | Thread & task architecture | https://learn.microsoft.com/en-us/sql/relational-databases/thread-and-task-architecture-guide | Thread; Task | done (split) |
| 1.10 | Transaction log architecture & management guide | https://learn.microsoft.com/en-us/sql/relational-databases/sql-server-transaction-log-architecture-and-management-guide | Transaction log | done |
| 1.11 | Transaction locking & row versioning guide | https://learn.microsoft.com/en-us/sql/relational-databases/sql-server-transaction-locking-and-row-versioning-guide | Locking | done |
| 1.12 | Optimized locking | https://learn.microsoft.com/en-us/sql/relational-databases/performance/optimized-locking | Optimized locking | done |
| 1.13 | Deadlocks guide | https://learn.microsoft.com/en-us/sql/relational-databases/sql-server-deadlocks-guide | Deadlock | done |
| 1.14 | Memory management architecture | https://learn.microsoft.com/en-us/sql/relational-databases/memory-management-architecture-guide | Memory management | done |
| 2.1 | Hierarchical Data | https://learn.microsoft.com/en-us/sql/relational-databases/hierarchical-data-sql-server | Hierarchical data | done |
| 2.2 | Collation | https://learn.microsoft.com/en-us/sql/relational-databases/collations/collation-and-unicode-support | Collation | done |
| 2.3 | Databases | https://learn.microsoft.com/en-us/sql/relational-databases/databases/databases | Database | done |
| 2.4 | Event notification | https://learn.microsoft.com/en-us/sql/relational-databases/service-broker/event-notifications | Event notification | done |
| 2.5 | FILESTREAM, FileTable & BLOB | https://learn.microsoft.com/en-us/sql/relational-databases/blob/binary-large-object-blob-data-sql-server | FILESTREAM; FileTable | done (split) |
| 2.6 | Indexes | https://learn.microsoft.com/en-us/sql/relational-databases/indexes/indexes | — | dropped: Page is only a table of index types (Hash, Clustered, Nonclustered, Unique, Columnstore, Filtered, Spatial, XML, Full-text) with no definition of 'index' itself; if an entry is wanted use 'Clustered index' (table row): A clustered index sorts and stores the data rows of the table or view in order based on the clustered index key. |
| 2.7 | SQL Graph | https://learn.microsoft.com/en-us/sql/relational-databases/graphs/sql-graph-overview | Graph database | done |
| 2.8 | Sequence numbers | https://learn.microsoft.com/en-us/sql/relational-databases/sequence-numbers/sequence-numbers | Sequence | done |
| 2.9 | Service Broker | https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/sql-server-service-broker | Service Broker | done |
| 2.10 | Spatial data | https://learn.microsoft.com/en-us/sql/relational-databases/spatial/spatial-data-sql-server | Spatial data | done |
| 2.11 | Stored procedures | https://learn.microsoft.com/en-us/sql/relational-databases/stored-procedures/stored-procedures-database-engine | Stored procedure | done |
| 2.12 | Tables | https://learn.microsoft.com/en-us/sql/relational-databases/tables/tables | Table | done |
| 2.13 | Compare change tracking with CDC | https://learn.microsoft.com/en-us/sql/relational-databases/track-changes/track-data-changes-sql-server | Change data capture; Change tracking | done (split) |
| 2.14 | Triggers | https://learn.microsoft.com/en-us/sql/relational-databases/triggers/logon-triggers | Logon trigger | done |
| 2.15 | User-defined functions | https://learn.microsoft.com/en-us/sql/relational-databases/user-defined-functions/user-defined-functions | User-defined function | done |
| 2.16 | Views | https://learn.microsoft.com/en-us/sql/relational-databases/views/views | View | done |
| 2.17 | XML data | https://learn.microsoft.com/en-us/sql/relational-databases/xml/xml-data-sql-server | xml data type | done |
| 3.1 | Cursors | https://learn.microsoft.com/en-us/sql/relational-databases/cursors | Cursor | done |
| 3.2 | Joins | https://learn.microsoft.com/en-us/sql/relational-databases/performance/joins | Join | done |
| 3.3 | Scripting | https://learn.microsoft.com/en-us/sql/ssms/scripting/database-engine-scripting | Database Engine scripting | done |
| 3.4 | Subqueries | https://learn.microsoft.com/en-us/sql/relational-databases/performance/subqueries | Subquery | done |
| 3.5 | Data virtualization (PolyBase) | https://learn.microsoft.com/en-us/sql/relational-databases/polybase/overview | PolyBase | done |
| 3.6 | Linked servers | https://learn.microsoft.com/en-us/sql/relational-databases/linked-servers/linked-servers-database-engine | Linked server | done |
| 3.7 | Full-Text Search | https://learn.microsoft.com/en-us/sql/relational-databases/search/full-text-search | Full-Text Search | done |
| 3.8 | Synonyms | https://learn.microsoft.com/en-us/sql/relational-databases/synonyms/synonyms-database-engine | Synonym | done |
| 4.1 | Common Language Runtime (CLR) | https://learn.microsoft.com/en-us/sql/relational-databases/clr-integration/common-language-runtime-integration-overview | Common language runtime (CLR) | done |
| 4.2 | Extended stored procedures | https://learn.microsoft.com/en-us/sql/relational-databases/extended-stored-procedures-programming/database-engine-extended-stored-procedures-programming | Extended stored procedure | done |
| 4.3 | Express Local DB | https://learn.microsoft.com/en-us/sql/relational-databases/express-localdb-error-messages/sql-server-express-localdb-reference-error-messages | — | dropped: Only an intro line and a table of LOCALDB_ERROR_* messages; no definition of LocalDB. |
| 4.4 | JSON | https://learn.microsoft.com/en-us/sql/relational-databases/json/json-data-sql-server | JSON | done |
| 4.5 | Fuzzy string match | https://learn.microsoft.com/en-us/sql/relational-databases/fuzzy-string-match/overview | Fuzzy string matching | done |
| 4.6 | Regular expressions | https://learn.microsoft.com/en-us/sql/relational-databases/regular-expressions/overview | Regular expression | done |
| 4.7 | Language Extensions | https://learn.microsoft.com/en-us/sql/language-extensions/language-extensions-overview | Language Extensions | done |
| 4.8 | SQL Server Native Client | https://learn.microsoft.com/en-us/sql/relational-databases/native-client/sql-server-native-client | SQL Server Native Client (SNAC) | done |
| 4.9 | Native Client OLE DB | https://learn.microsoft.com/en-us/sql/relational-databases/native-client/ole-db/sql-server-native-client-ole-db | SQL Server Native Client OLE DB provider (SQLNCLI) | done |
| 4.10 | Native Client ODBC | https://learn.microsoft.com/en-us/sql/relational-databases/native-client/odbc/sql-server-native-client-odbc | ODBC | done |
| 4.11 | Server Management Objects (SMO) | https://learn.microsoft.com/en-us/sql/relational-databases/server-management-objects-smo/overview-smo | SQL Server Management Objects (SMO) | done |
| 4.12 | SQLXML | https://learn.microsoft.com/en-us/sql/relational-databases/sqlxml/sqlxml-4-0-programming-concepts | SQLXML | done |
| 4.13 | Windows Management Instrumentation (WMI) | https://learn.microsoft.com/en-us/sql/relational-databases/wmi-provider-configuration/wmi-provider-for-configuration-management | WMI provider | done |
| 5.1 | Backup & restore | https://learn.microsoft.com/en-us/sql/relational-databases/backup-restore/back-up-and-restore-of-sql-server-databases | Backup; Restore | done (split) |
| 5.2 | Always On availability groups | https://learn.microsoft.com/en-us/sql/database-engine/availability-groups/windows/overview-of-always-on-availability-groups-sql-server | Always On availability groups | done |
| 5.3 | Always On failover cluster instance | https://learn.microsoft.com/en-us/sql/sql-server/failover-clusters/windows/always-on-failover-cluster-instances-sql-server | Always On failover cluster instance | done |
| 5.4 | Database mirroring | https://learn.microsoft.com/en-us/sql/database-engine/database-mirroring/database-mirroring-sql-server | Database mirroring | done |
| 5.5 | Log shipping | https://learn.microsoft.com/en-us/sql/database-engine/log-shipping/about-log-shipping-sql-server | Log shipping | done |
| 6.1 | Protecting SQL Server Intellectual Property | https://learn.microsoft.com/en-us/sql/relational-databases/security/protecting-your-sql-server-intellectual-property | — | dropped: Article gives legal and deployment guidance for protecting intellectual property; no term is defined. |
| 6.2 | Authentication Access | https://learn.microsoft.com/en-us/sql/relational-databases/security/authentication-access/getting-started-with-database-engine-permissions | Permission; Security principal | done (split) |
| 6.3 | Encryption | https://learn.microsoft.com/en-us/sql/relational-databases/security/encryption/sql-server-encryption | Encryption | done |
| 6.4 | Auditing | https://learn.microsoft.com/en-us/sql/relational-databases/security/auditing/sql-server-audit-database-engine | Auditing; Audit | done (split) |
| 6.5 | Ledger | https://learn.microsoft.com/en-us/sql/relational-databases/security/ledger/ledger-overview | Ledger | done |
| 7.1 | SQL Server Integration Services (SSIS) | https://learn.microsoft.com/en-us/sql/integration-services/sql-server-integration-services | SQL Server Integration Services (SSIS) | done |
| 7.2 | Data Quality Services (DQS) | https://learn.microsoft.com/en-us/sql/data-quality-services/data-quality-services | Data Quality Services (DQS) | done |
| 7.3 | Replication | https://learn.microsoft.com/en-us/sql/relational-databases/replication/sql-server-replication | Replication | done |
| 7.4 | SQL Server Migration Assistant (SSMA) | https://learn.microsoft.com/en-us/sql/ssma/sql-server-migration-assistant | SQL Server Migration Assistant (SSMA) | done |
| 8.1 | Azure Synapse Link for SQL | https://learn.microsoft.com/en-us/azure/synapse-analytics/synapse-link/sql-server-2022-synapse-link | Azure Synapse Link for SQL | done |
| 8.2 | Fabric Databases | https://learn.microsoft.com/en-us/fabric/database/hub/ | Database Hub | done |
| 8.3 | Machine Learning Services | https://learn.microsoft.com/en-us/sql/machine-learning/ | SQL machine learning | done |
| 8.4 | SQL Server Analysis Services (SSAS) | https://learn.microsoft.com/en-us/analysis-services/analysis-services-overview | SQL Server Analysis Services (SSAS) | done |
| 8.5 | SQL Server Reporting Services (SSRS) | https://learn.microsoft.com/en-us/sql/reporting-services/create-deploy-and-manage-mobile-and-paginated-reports | SQL Server Reporting Services (SSRS) | done |
| 8.6 | Master Data Services | https://learn.microsoft.com/en-us/sql/master-data-services/master-data-services-overview-mds | Master Data Services (MDS) | done |
| 9.1 | Intelligent applications and AI | https://learn.microsoft.com/en-us/sql/sql-server/ai/artificial-intelligence-intelligent-applications | Intelligent application; Retrieval-Augmented Generation (RAG) | done (split) |
| 9.2 | Vectors and embeddings | https://learn.microsoft.com/en-us/sql/sql-server/ai/vectors | Vector; Embedding | done (split) |
| 10.1 | Database Tuning Advisor (DTA) | https://learn.microsoft.com/en-us/sql/tools/dta/dta-utility | dta utility | done |
| 10.2 | Distributed Replay | https://learn.microsoft.com/en-us/sql/tools/distributed-replay/sql-server-distributed-replay | Distributed Replay | done |
| 10.3 | SQL Server Configuration Manager | https://learn.microsoft.com/en-us/sql/tools/configuration-manager/sql-server-configuration-manager | SQL Server Configuration Manager | done |
| 10.4 | BCP (bulk copy utility) | https://learn.microsoft.com/en-us/sql/tools/bcp/bcp-utility | bulk copy program utility (bcp) | done |
| 10.5 | SQLCMD | https://learn.microsoft.com/en-us/sql/tools/sqlcmd/sqlcmd-utility | sqlcmd utility | done |
| 10.6 | SSB Diagnose | https://learn.microsoft.com/en-us/sql/tools/ssbdiagnose/ssbdiagnose-utility-service-broker | ssbdiagnose utility | done |
| 10.7 | SQL Server Data Tools (SSDT) | https://learn.microsoft.com/en-us/sql/ssdt/sql-server-data-tools | SQL Server Data Tools (SSDT) | done |
| 10.8 | SQL Server Management Studio (SSMS) | https://learn.microsoft.com/en-us/sql/ssms | SQL Server Management Studio (SSMS) | done |
| 10.9 | SQL projects | https://learn.microsoft.com/en-us/sql/tools/sql-database-projects/sql-database-projects | SQL database project | done |
| 10.10 | SqlPackage | https://learn.microsoft.com/en-us/sql/tools/sqlpackage/sqlpackage | SqlPackage | done |
| 10.11 | SQL Server Profiler | https://learn.microsoft.com/en-us/sql/tools/sql-server-profiler/sql-server-profiler | SQL Server Profiler | done |
| 10.12 | Visual Studio Code extensions | https://learn.microsoft.com/en-us/sql/tools/visual-studio-code-extensions/mssql/mssql-extension-visual-studio-code | MSSQL extension for Visual Studio Code | done |
