# 4. Containers: allowed sub-pages

Follows `../README.md`. Figure on `index.md`: classification (see `../README.md`). Source: [Azure documentation: Containers](https://learn.microsoft.com/en-us/azure/?product=containers).

## Sub-pages

| No. | File | Title (group name in the figure) | Sources | Allowed sections (H2 = the parts in the figure, in figure order) |
|---|---|---|---|---|
| 4.1 | `docker.md` | Docker | [Docker terminology](https://learn.microsoft.com/en-us/dotnet/architecture/microservices/container-docker-introduction/docker-terminology) | 4.1.1 Container image, 4.1.2 Dockerfile, 4.1.3 Build, 4.1.4 Volumes, 4.1.5 Tag, 4.1.6 Multi-stage build, 4.1.7 Repository, 4.1.8 Registry, 4.1.9 Multi-arch image, 4.1.10 Docker Hub, 4.1.11 Compose |
| 4.2 | `kubernetes.md` | Kubernetes | [Core Kubernetes concepts for Azure Kubernetes Service (AKS)](https://learn.microsoft.com/en-us/azure/aks/core-aks-concepts) | 4.2.1 Cluster, 4.2.2 Control plane, 4.2.3 Nodes, 4.2.4 Pods, 4.2.5 Node pools, 4.2.6 Namespaces |
| 4.3 | `azure-container-services.md` | Azure container services | [Containers on Azure](https://azure.microsoft.com/en-us/products/category/containers) | 4.3.1 Azure Kubernetes Service (AKS), 4.3.2 Azure Container Apps, 4.3.3 Azure Red Hat OpenShift, 4.3.4 Azure Container Registry, 4.3.5 Azure Container Storage, 4.3.6 Azure Container Instances, 4.3.7 Azure Kubernetes Fleet Manager, 4.3.8 Azure Service Fabric, 4.3.9 Web App for Containers |

The container hosting services (AKS, Container Apps, Container Instances, Red Hat OpenShift, Fleet Manager, Service Fabric) are defined in `../compute/`; 4.3 links there and defines only Azure Container Registry, Azure Container Storage and Web App for Containers.
