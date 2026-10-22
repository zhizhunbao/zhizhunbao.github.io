# CST8912 glossary: allowed topics

Every page in this folder groups its terms under H2 topics. A topic must come from the catalogue below, word for word, and each page may use only the topics listed for it. `build_public_glossary.py` (in the cloud notes repo) reads this file and refuses to build a page that uses any other topic. Topics appear on a page in catalogue order. Sub-topics (H3) are free, in sentence case.

This README is not published (`docfx.json` excludes `**/README.md`).

## Catalogue

| Topic | Source |
|---|---|
| Describe cloud computing | [Microsoft Learn, AZ-900 Part 1 module](https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/) |
| Describe the benefits of using cloud services | [Microsoft Learn, AZ-900 Part 1 module](https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/) |
| Describe cloud service types | [Microsoft Learn, AZ-900 Part 1 module](https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/) |
| Describe the core architectural components of Azure | [Microsoft Learn, AZ-900 Part 2 module](https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/) |
| Describe Azure compute services | [Microsoft Learn, AZ-900 Part 2 module](https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/) |
| Describe Azure networking services | [Microsoft Learn, AZ-900 Part 2 module](https://learn.microsoft.com/en-us/training/modules/describe-azure-networking-services/) |
| Describe Azure storage services | [Microsoft Learn, AZ-900 Part 2 module](https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/) |
| Describe Azure identity, access, and security | [Microsoft Learn, AZ-900 Part 2 module](https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/) |
| Describe cost management in Azure | [Microsoft Learn, AZ-900 Part 3 module](https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/) |
| Describe features and tools in Azure for governance and compliance | [Microsoft Learn, AZ-900 Part 3 module](https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/) |
| Describe features and tools for managing and deploying Azure resources | [Microsoft Learn, AZ-900 Part 3 module](https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/) |
| Describe monitoring tools in Azure | [Microsoft Learn, AZ-900 Part 3 module](https://learn.microsoft.com/en-us/training/modules/describe-monitoring-tools-azure/) |
| Azure Well-Architected Framework | [Microsoft Learn documentation set](https://learn.microsoft.com/en-us/azure/well-architected/) |
| Cloud Adoption Framework for Azure | [Microsoft Learn documentation set](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/) |
| Azure Architecture Center | [Microsoft Learn documentation set](https://learn.microsoft.com/en-us/azure/architecture/) |

The AZ-900 modules are the three learning paths of *Introduction to Cloud Infrastructure* (course AZ-900T00), checked on 2026-10-19.

## Topics per page

| Page | Allowed topics |
|---|---|
| `introduction-to-cloud-solution-architecture.md` (week 1) | Describe cloud computing; Describe the benefits of using cloud services; Describe cloud service types; Describe the core architectural components of Azure; Describe Azure identity, access, and security; Describe cost management in Azure; Describe features and tools for managing and deploying Azure resources; Azure Well-Architected Framework; Cloud Adoption Framework for Azure |
| `design-a-cloud-compute-solution.md` (week 2) | Describe the core architectural components of Azure; Describe Azure compute services; Describe Azure networking services; Describe Azure storage services; Describe Azure identity, access, and security; Describe features and tools in Azure for governance and compliance; Describe features and tools for managing and deploying Azure resources; Describe monitoring tools in Azure; Azure Architecture Center |
