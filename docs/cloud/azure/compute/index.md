---
title: "3. Compute"
description: "Microsoft Azure, 3. Compute: infrastructure as a service, platform as a service, functions as a service and specialty workloads."
ms.date: 2026-10-22
---

# 3. Compute

## Classification

![Compute sorted into four groups by hosting model: infrastructure as a service, platform as a service, functions as a service and specialty workloads, with the Azure services in each. Grey: not taught in a course yet.](media/compute.png)

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **Compute**<br>计算 | "The term **compute** refers to the **hosting model** for the **resources** that your **application runs on**." | **计算**这一术语指的是一种**托管模型**，用于托管**资源**，供你的**应用程序在其上运行**。 | [Microsoft, n.d., para. 1](https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/compute-decision-tree#:~:text=The%20term%20compute%20refers%20to%20the%20hosting%20model) |
| **[Infrastructure as a service (IaaS)](infrastructure-as-a-service.md)**<br>基础结构即服务 | "**Infrastructure as a service (IaaS)** lets you **provision VMs** along with the associated **networking and storage components**. You can then deploy **any software and applications** on those VMs." | **基础结构即服务 (IaaS)** 让你可以**预配 VM**，以及相关的**网络和存储组件**。然后你可以在这些 VM 上部署**任何软件和应用程序**。 | [Microsoft, n.d., "Understand the hosting models" section, list item 1](https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/compute-decision-tree#understand-the-hosting-models:~:text=Infrastructure%20as%20a%20service%20%28IaaS%29%20lets%20you%20provision%20VMs) |
| **[Platform as a service (PaaS)](platform-as-a-service.md)**<br>平台即服务 | "**Platform as a service (PaaS)** provides a **managed hosting environment** where you can **deploy your application** without the need to **manage VMs**." | **平台即服务 (PaaS)** 提供一个**托管的宿主环境**，你可以在其中**部署应用程序**，而无需**管理 VM**。 | [Microsoft, n.d., "Understand the hosting models" section, list item 2](https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/compute-decision-tree#understand-the-hosting-models:~:text=Platform%20as%20a%20service%20%28PaaS%29%20provides%20a%20managed%20hosting%20environment) |
| **[Functions as a service (FaaS)](functions-as-a-service.md)**<br>函数即服务 | "**Functions as a service (FaaS)** lets you **deploy your code** to the service, which **automatically runs it**." | **函数即服务 (FaaS)** 让你把**代码部署**到服务中，由服务**自动运行**它。 | [Microsoft, n.d., "Understand the hosting models" section, list item 3](https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/compute-decision-tree#understand-the-hosting-models:~:text=Functions%20as%20a%20service%20%28FaaS%29%20lets%20you%20deploy%20your%20code) |
| **[Specialty workloads](specialty-workloads.md)**<br>特殊工作负载 | "Some **workloads** have **specific requirements** and don't typically follow the **general recommendations** in this application platform selection guide." | 有些**工作负载**有**特定要求**，通常不遵循本应用程序平台选择指南中的**一般建议**。 | [Microsoft, n.d., "Specialty workloads" section, para. 1](https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/compute-decision-tree#specialty-workloads:~:text=Some%20workloads%20have%20specific%20requirements) |

## Coverage

| Certification | Skill area |
|---|---|
| AZ-900 Microsoft Azure Fundamentals | [Describe Azure architecture and services (35–40%)](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900#describe-azure-architecture-and-services-3540) |

**CST8911 Introduction to Cloud Computing**

| Week | Terms in the course |
|---|---|
| 1 | virtual machine (VM), serverless computing, Function as a Service (FaaS) |
| 2 | Virtual Machine Scale Sets, VM size (VM series), Spot Virtual Machines |
| 3 | Azure Functions, function app, App Service plan |
| 4 | Azure Functions |
| 6 | Azure Virtual Machines (Azure VMs), OpenShift, Function Platform (FaaS) |

**CST8912 Cloud Solution Architecture**

| Week | Terms in the course |
|---|---|
| 2 | compute service, hosting model, virtual machine (VM), Azure Virtual Machines, VM image, VM size, generation 2 VM (Gen2), burstable VM (B-series), Azure Spot Virtual Machines, VM extension, Virtual Machine Scale Sets (VMSS), Azure App Service, App Service plan, web app, Azure Kubernetes Service (AKS), Azure Container Apps (ACA), Azure Container Instances (ACI), Azure Red Hat OpenShift (ARO), Azure Batch, Azure Spring Apps, serverless, Azure Functions, Function as a Service (FaaS), Azure Service Fabric |
| 3 | VM size substitution |
| 6 | Azure Batch account |

**CST8913 Cloud Migration**

| Week | Terms in the course |
|---|---|
| 2 | virtual machine (VM), Azure Kubernetes Service (AKS) |
| 4 | Azure Virtual Machines, Azure VMware Solution node |
| 5 | Azure VMware Solution (AVS), Azure VMware Solution private cloud |
| 6 | Azure App Service, web app, Azure App Service Migration Assistant |

**CST8915 Full-stack Cloud-native Development**

| Week | Terms in the course |
|---|---|
| 1 | virtual machine (VM), serverless |
| 2 | VM size |
| 3 | dedicated VM, App Services, Azure Spring Apps, Function Apps |
| 4 | Azure App Service, Azure Web App (Web App), Azure Static Web Apps, Azure Functions, serverless function runtime |

**CST8916 Remote Data and Real-time Applications**

| Week | Terms in the course |
|---|---|
| 1 | virtual machine (VM), serverless function |
| 2 | VM option (IaaS), Azure App Service, serverless option |
| 3 | App Service plan |
| 5 | compute service, Azure App Service, Azure Functions, function (Azure Functions), Function as a Service (FaaS), serverless |
| 6 | Azure App Service, Azure Spring Apps, Azure Functions, function app |

## References

- Microsoft. (n.d.). *Choose an Azure compute service*. Azure Architecture Center. Retrieved October 22, 2026, from https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/compute-decision-tree
- Microsoft. (2026). *Study guide for Exam AZ-900: Microsoft Azure Fundamentals*. Microsoft Learn. https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900
