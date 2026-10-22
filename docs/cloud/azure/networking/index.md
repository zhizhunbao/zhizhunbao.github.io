---
title: "5. Networking"
description: "Microsoft Azure, 5. Networking: networking foundation, load balancing and content delivery, hybrid connectivity, network security, network management and monitoring, and container networking."
ms.date: 2026-10-22
---

# 5. Networking

## Classification

![Networking sorted into the six categories of the Azure networking services overview, with the services in each. Grey: not taught in a course yet.](media/networking.png)

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **Networking**<br>网络 | "You can think of an **Azure network** as an **extension of your on-premises network** with **resources that link other Azure resources**." | 你可以把 **Azure 网络**看作**本地网络的延伸**，其中包含**链接其他 Azure 资源的资源**。 | [Microsoft, n.d., "Describe Azure virtual networking" unit, para. 1](https://learn.microsoft.com/en-us/training/modules/describe-azure-networking-services/2-virtual-network#:~:text=You%20can%20think%20of%20an%20Azure%20network) |
| **[Networking foundation](networking-foundation.md)**<br>网络基础 | "**Networking foundation**: **Core connectivity** for your **resources in Azure**." | **网络基础**：提供**核心连接**，供你在 **Azure 中的资源**使用。 | [Microsoft, 2026a, para. 2, list item 1](https://learn.microsoft.com/en-us/azure/networking/fundamentals/networking-overview#:~:text=Core%20connectivity%20for%20your%20resources%20in%20Azure) |
| **[Load balancing and content delivery](load-balancing-and-content-delivery.md)**<br>负载均衡和内容分发 | "**Load balancing and content delivery**: **Manage, distribute, and optimize** your **applications and workloads**." | **负载均衡和内容分发**：**管理、分发和优化**你的**应用程序和工作负载**。 | [Microsoft, 2026a, para. 2, list item 2](https://learn.microsoft.com/en-us/azure/networking/fundamentals/networking-overview#:~:text=Manage%2C%20distribute%2C%20and%20optimize%20your%20applications) |
| **[Hybrid connectivity](hybrid-connectivity.md)**<br>混合连接 | "**Hybrid connectivity**: **Secure communication** to and from your **resources in Azure**." | **混合连接**：实现**安全通信**，连接进出你在 **Azure 中的资源**的流量。 | [Microsoft, 2026a, para. 2, list item 3](https://learn.microsoft.com/en-us/azure/networking/fundamentals/networking-overview#:~:text=Secure%20communication%20to%20and%20from%20your%20resources) |
| **[Network security](network-security.md)**<br>网络安全 | "**Network security**: **Protect** your **web applications and IaaS services** from **DDoS attacks** and malicious actors." | **网络安全**：**保护**你的 **Web 应用程序和 IaaS 服务**，使其免受 **DDoS 攻击**和恶意行为者的侵害。 | [Microsoft, 2026a, para. 2, list item 4](https://learn.microsoft.com/en-us/azure/networking/fundamentals/networking-overview#:~:text=Protect%20your%20web%20applications%20and%20IaaS%20services) |
| **[Network management and monitoring](network-management-and-monitoring.md)**<br>网络管理和监视 | "**Network management and monitoring**: **Manage and monitor** your **network resources**." | **网络管理和监视**：**管理和监视**你的**网络资源**。 | [Microsoft, 2026a, para. 2, list item 5](https://learn.microsoft.com/en-us/azure/networking/fundamentals/networking-overview#:~:text=Manage%20and%20monitor%20your%20network%20resources) |
| **[Container networking](container-networking.md)**<br>容器网络 | "**Container networking**: **Enhanced security and observability** for **containerized workloads** on **Azure Kubernetes Service (AKS)**." | **容器网络**：提供**增强的安全性和可观测性**，面向**容器化工作负载**（运行在 **Azure Kubernetes Service (AKS)** 上）。 | [Microsoft, 2026a, para. 2, list item 6](https://learn.microsoft.com/en-us/azure/networking/fundamentals/networking-overview#:~:text=Enhanced%20security%20and%20observability%20for%20containerized) |

## Coverage

| Certification | Skill area |
|---|---|
| AZ-900 Microsoft Azure Fundamentals | [Describe Azure architecture and services (35–40%)](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900#describe-azure-architecture-and-services-3540) |

**CST8911 Introduction to Cloud Computing**

| Week | Terms in the course | Source |
|---|---|---|
| 1 | **Load balancing and content delivery**: load balancer | Introduction to Cloud Computing (Lecture 1): slide 4 |
| 2 | **Networking foundation**: Azure Virtual Network (VNet), Domain Name System (DNS), Azure Traffic Manager<br>**Load balancing and content delivery**: Azure Load Balancer, Application Gateway<br>**Hybrid connectivity**: virtual private network gateway (VPN gateway), Azure ExpressRoute<br>**Network management and monitoring**: Azure Monitor | Introduction to Cloud Computing (Lecture 2): slides 7, 9<br>Week 2 readings: Virtual networks (readings: Networking services compared, What is Azure Virtual Network?, What is Amazon VPC?), Load balancing (Networking services compared) |

**CST8912 Cloud Solution Architecture**

| Week | Terms in the course | Source |
|---|---|---|
| 2 | **Networking foundation**: virtual network (VNet)<br>**Network management and monitoring**: Azure Monitor | Provisioning and Managing an Azure Virtual Machine (Lab 1): Disks and networking (Tasks 3–4), Power state and monitoring (Tasks 6–8) |
| 3 | **Networking foundation**: virtual network (VNet), Azure Private Link, Azure DNS, Azure Bastion, Azure Route Server, Azure NAT Gateway, Azure Traffic Manager<br>**Load balancing and content delivery**: Azure Load Balancer, Azure Application Gateway, Azure Front Door<br>**Hybrid connectivity**: Azure VPN Gateway, Azure ExpressRoute, Azure Virtual WAN<br>**Network security**: Azure Firewall, Azure Web Application Firewall (WAF), Azure DDoS Protection<br>**Network management and monitoring**: Azure Network Watcher, Azure Virtual Network Manager | Design Cloud Networking Solution: slides 9, 10, 11, 12, 14, 15, 16, 18<br>Azure Networking Products (reading: Azure product page): slide 22 |

**CST8913 Cloud Migration**

| Week | Terms in the course | Source |
|---|---|---|
| 2 | **Networking**: networking<br>**Hybrid connectivity**: ExpressRoute, virtual private network gateway (VPN gateway) | Introduction to Cloud Computing: slide 5<br>Cloud Adoption Framework (CAF) (Online Quiz reading module): Migrate, Modernize, and Cloud-native (Units 5–7) |
| 3 | **Networking foundation**: virtual network (VNet), Domain Name System (DNS, name resolution)<br>**Load balancing and content delivery**: Azure Load Balancer, Azure Application Gateway<br>**Network security**: Azure DDoS Protection<br>**Network management and monitoring**: Azure Monitor | Target Cloud Architecture: slides 6, 8 |

**CST8915 Full-stack Cloud-native Development**

| Week | Terms in the course | Source |
|---|---|---|
| 1 | **Load balancing and content delivery**: load balancer | Introduction to Cloud-Native Applications: slide 32 |
| 2 | **Networking foundation**: virtual network (VNet)<br>**Network management and monitoring**: Azure Monitor | Azure Virtual Machines and Networking (Lab 1 + announcement): Configure the Network Security Group (Step 2)<br>The Twelve-Factor Application: slide 40 |

**CST8916 Remote Data and Real-time Applications**

| Week | Terms in the course | Source |
|---|---|---|
| 1 | **Load balancing and content delivery**: load balancer | Introduction to Remote Data and Real-time Applications: slide 14 |
| 2 | **Networking foundation**: Domain Name System (DNS) | REST (Representational State Transfer): slide 6 |
| 5 | **Network management and monitoring**: Azure Monitor | Popular Cloud Services for Real-time Applications I: slide 22 |
| 6 | **Load balancing and content delivery**: front door | Popular Cloud Services for Real-time Applications II: slide 6 |

## References

- Microsoft. (n.d.). *Describe Azure networking services* [Training module]. Microsoft Learn. Retrieved October 22, 2026, from https://learn.microsoft.com/en-us/training/modules/describe-azure-networking-services/
- Microsoft. (2026a). *Azure networking services overview*. Microsoft Learn. https://learn.microsoft.com/en-us/azure/networking/fundamentals/networking-overview
- Microsoft. (2026b). *Study guide for Exam AZ-900: Microsoft Azure Fundamentals*. Microsoft Learn. https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900
