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

| Week | Group | Terms in the course | Source |
|---|---|---|---|
| 1 | IaaS | virtual machine (VM) | Lecture 1: slide 9 |
|  | FaaS | serverless computing<br>Function as a Service (FaaS) | Lecture 1: slides 11, 14 |
| 2 | IaaS | Virtual Machine Scale Sets<br>Spot Virtual Machines | Lecture 2: slide 5<br>Reading: Amazon EC2 and Azure Virtual Machines (product pages) |
| 3 | FaaS | Azure Functions | Lab 2: Function app and hosting plan (tasks 1–2) |
| 4 | FaaS | Azure Functions | Lecture 3: slide 9 |
| 6 | IaaS | Azure Virtual Machines (Azure VMs) | Lecture 5: slide 7 |
|  | PaaS | OpenShift | Lecture 5: slide 7 |
|  | FaaS | Function Platform (FaaS) | Lecture 5: slide 7 |

**CST8912 Cloud Solution Architecture**

| Week | Group | Terms in the course | Source |
|---|---|---|---|
| 2 | Compute | compute service<br>hosting model | Design Cloud Compute Solution: slides 4, 12 |
|  | IaaS | Azure Virtual Machines<br>Virtual Machine Scale Sets (VMSS)<br>Azure Spot Virtual Machines | Design Cloud Compute Solution: slides 6, 7<br>Lab 1: Virtual machine settings (Tasks 2, 5) |
|  | PaaS | Azure App Service<br>Azure Kubernetes Service (AKS)<br>Azure Container Apps (ACA)<br>Azure Container Instances (ACI)<br>Azure Red Hat OpenShift (ARO)<br>Azure Batch<br>Azure Spring Apps | Design Cloud Compute Solution: slides 9, 10, 11, 13 |
|  | FaaS | Azure Functions<br>Function as a Service (FaaS) | Design Cloud Compute Solution: slide 12 |
|  | Specialty workloads | Azure Service Fabric | Design Cloud Compute Solution: slide 13 |

**CST8913 Cloud Migration**

| Week | Group | Terms in the course | Source |
|---|---|---|---|
| 2 | IaaS | virtual machine (VM) | Introduction to Cloud Computing: slide 5 |
|  | PaaS | Azure Kubernetes Service (AKS) | Lab 2: Azure services (Lab 2 case study) |
| 4 | IaaS | Azure Virtual Machines<br>Azure VMware Solution node | Lab 4: Scenario and On-Premises Environment<br>Migration Assessment Process: slide 7 |
| 5 | IaaS | Azure VMware Solution (AVS) | Lab 5: Questions and submission |
| 6 | PaaS | Azure App Service | Refactoring Migration: slide 7 |

**CST8915 Full-stack Cloud-native Development**

| Week | Group | Terms in the course | Source |
|---|---|---|---|
| 1 | IaaS | virtual machine (VM) | Introduction to Cloud-Native Applications: slide 37 |
|  | FaaS | serverless | Introduction to Cloud-Native Applications: slide 33 |
| 3 | PaaS | App Services<br>Azure Spring Apps | Microservices: slides 32, 33 |
|  | FaaS | Function Apps | Microservices: slides 32, 33 |
| 4 | PaaS | Azure App Service<br>Azure Static Web Apps | Lab 3: Understanding Azure Web App and Azure Static Web Apps |
|  | FaaS | Azure Functions | Lab 3: Understanding Azure Web App and Azure Static Web Apps |

**CST8916 Remote Data and Real-time Applications**

| Week | Group | Terms in the course | Source |
|---|---|---|---|
| 1 | IaaS | virtual machine (VM) | Introduction to Remote Data and Real-time Applications: slide 8 |
|  | FaaS | serverless function | Introduction to Remote Data and Real-time Applications: slide 15 |
| 2 | IaaS | VM option (IaaS) | REST (Representational State Transfer): slides 43, 44, 45 |
|  | PaaS | Azure App Service | REST (Representational State Transfer): slides 43, 44, 45 |
| 5 | Compute | compute service | Popular Cloud Services for Real-time Applications I: slides 19, 20 |
|  | PaaS | Azure App Service | Popular Cloud Services for Real-time Applications I: slide 21 |
|  | FaaS | Azure Functions<br>Function as a Service (FaaS) | Popular Cloud Services for Real-time Applications I: slides 19, 20, 26 |
| 6 | PaaS | Azure App Service<br>Azure Spring Apps | Popular Cloud Services for Real-time Applications II: slides 3, 7 |
|  | FaaS | Azure Functions | Popular Cloud Services for Real-time Applications II: slide 3 |

## References

- Microsoft. (n.d.). *Choose an Azure compute service*. Azure Architecture Center. Retrieved October 22, 2026, from https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/compute-decision-tree
- Microsoft. (2026). *Study guide for Exam AZ-900: Microsoft Azure Fundamentals*. Microsoft Learn. https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900
