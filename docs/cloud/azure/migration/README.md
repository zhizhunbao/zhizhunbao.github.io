# 24. Migration: allowed sub-pages

Follows `../README.md`. Figure on `index.md`: classification (see `../README.md`). Sources: [Select your cloud migration strategies](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/plan/select-cloud-migration-strategy) (Cloud Adoption Framework) and [About Azure Migrate](https://learn.microsoft.com/en-us/azure/migrate/migrate-services-overview) (its migration phases).

## Sub-pages

| No. | File | Title (group name in the figure) | Sources | Allowed sections (the groups of the sub-page figure, in figure order) |
|---|---|---|---|---|
| 24.1 | `migration-strategies.md` | Migration strategies | [Select your cloud migration strategies](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/plan/select-cloud-migration-strategy) | 24.1.1 Retire, 24.1.2 Rehost, 24.1.3 Replatform, 24.1.4 Refactor, 24.1.5 Rearchitect, 24.1.6 Replace, 24.1.7 Rebuild, 24.1.8 Retain |
| 24.2 | `decide.md` | Decide | [About Azure Migrate: Decide](https://learn.microsoft.com/en-us/azure/migrate/migrate-services-overview#decide); [Quickstart: Create an Azure Migrate project using portal](https://learn.microsoft.com/en-us/azure/migrate/quickstart-create-project?view=migrate) | 24.2.1 Azure Migrate project, 24.2.2 Discovery, 24.2.3 Azure Migrate appliance, 24.2.4 Azure Migrate Collector, 24.2.5 Business case |
| 24.3 | `plan.md` | Plan | [About Azure Migrate: Plan](https://learn.microsoft.com/en-us/azure/migrate/migrate-services-overview#plan); [Assessment overview (migrate to Azure VMs)](https://learn.microsoft.com/en-us/azure/migrate/concepts-assessment-calculation?view=migrate-classic) | 24.3.1 Discovery and Assessment, 24.3.2 Movere, 24.3.3 Assessment, 24.3.4 Azure readiness (24.3.4.1 Ready for Azure, 24.3.4.2 Conditionally ready for Azure, 24.3.4.3 Not ready for Azure, 24.3.4.4 Readiness unknown), 24.3.5 Right-sizing, 24.3.6 Azure cost estimation, 24.3.7 Dependency analysis |
| 24.4 | `execute.md` | Execute | [About Azure Migrate: Execute](https://learn.microsoft.com/en-us/azure/migrate/migrate-services-overview#execute) | 24.4.1 Azure Migrate, 24.4.2 Azure Migrate and Modernize, 24.4.3 Agentless migration, 24.4.4 Agent-based migration, 24.4.5 Azure Database Migration Service, 24.4.6 Data Migration Assistant, 24.4.7 Azure App Service Migration Assistant, 24.4.8 Azure Data Box |

Azure Migrate as a whole is defined here (24.4.1; 8.4.1 links here). Azure Data Box is defined in `../storage/` (8.4.2); 24.4.8 links there. Total cost of ownership is defined in 20.1.1; 24.2.5 links there. The Cloud Adoption Framework's own phases are 18. The CST8913 rehost and refactor processes are process figures on 24.4.
