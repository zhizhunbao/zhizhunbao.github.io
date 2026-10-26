# 3. Compute: allowed sub-pages

Follows `../README.md`. Figure on `index.md`: classification (see `../README.md`). Source: [Azure documentation: Compute](https://learn.microsoft.com/en-us/azure/?product=compute).

## Sub-pages

| No. | File | Title (group name in the figure) | Sources | Allowed sections (the groups of the sub-page figure, in figure order) |
|---|---|---|---|---|
| 3.1 | `infrastructure-as-a-service.md` | Infrastructure as a service (IaaS) | [Azure Architecture Center: Choose an Azure compute service](https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/compute-decision-tree) | 3.1.1 Virtual Machines, 3.1.2 Virtual Machine Scale Sets, 3.1.3 Azure Spot Virtual Machines, 3.1.4 Azure VMware Solution |
| 3.2 | `platform-as-a-service.md` | Platform as a service (PaaS) | [Azure Architecture Center: Choose an Azure compute service](https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/compute-decision-tree) | 3.2.1 Azure App Service, 3.2.2 Azure Kubernetes Service (AKS), 3.2.3 Azure Kubernetes Fleet Manager, 3.2.4 Azure Container Apps, 3.2.5 Azure Container Instances, 3.2.6 Azure Red Hat OpenShift, 3.2.7 Azure Batch, 3.2.8 Azure Static Web Apps, 3.2.9 Azure Spring Apps, 3.2.10 Azure Cloud Services (extended support) |
| 3.3 | `functions-as-a-service.md` | Functions as a service (FaaS) | [Azure Architecture Center: Choose an Azure compute service](https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/compute-decision-tree) | 3.3.1 Azure Functions |
| 3.4 | `specialty-workloads.md` | Specialty workloads | [Azure Architecture Center: Choose an Azure compute service](https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/compute-decision-tree) | 3.4.1 Azure CycleCloud, 3.4.2 Azure Service Fabric, 3.4.3 Azure Quantum, 3.4.4 Azure Virtual Desktop, 3.4.5 Azure Dedicated Host |

The container services (AKS, Container Apps, Container Instances, Red Hat OpenShift) are PaaS hosting here; `../containers/` covers containers themselves and links back for these services. SaaS is a service model (`../cloud-computing/`), not a compute hosting model.
