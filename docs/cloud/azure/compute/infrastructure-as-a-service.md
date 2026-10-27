---
title: "4.1 Infrastructure as a service (IaaS)"
description: "Microsoft Azure, 4.1 Infrastructure as a service (IaaS): Virtual Machines, Virtual Machine Scale Sets, Azure Spot Virtual Machines, Azure VMware Solution."
ms.date: 2026-10-26
---

# 4.1 Infrastructure as a service (IaaS)

Sources: [Azure documentation: Compute](https://learn.microsoft.com/en-us/azure/?product=compute); [Azure Architecture Center: Choose an Azure compute service](https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/compute-decision-tree); [Azure managed disks overview](https://learn.microsoft.com/en-us/azure/virtual-machines/managed-disks-overview).

## Classification

![Infrastructure as a service (IaaS), four terms: Virtual Machines and Azure VMware Solution, defined in Choose an Azure compute service, and Virtual Machine Scale Sets and Azure Spot Virtual Machines, described in the Compute list of the Azure documentation; Virtual Machines expanded into the temporary disk, from Azure managed disks overview.](media/infrastructure-as-a-service.png)

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **Virtual Machines**<br>虚拟机 | "Azure Virtual Machines is a service that you can use to **deploy and manage virtual machines** (VMs) inside an **Azure virtual network**." | Azure Virtual Machines 是一项服务，可用来**部署和管理虚拟机**（VM），这些虚拟机位于 **Azure 虚拟网络**中。 | [Microsoft, 2026b, "Understand the basic features" section, list item 1](https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/compute-decision-tree#:~:text=is%20a%20service%20that%20you%20can%20use%20to%20deploy%20and%20manage%20virtual%20machines) |
| **Temporary disk**<br>临时磁盘 | "Most VMs contain a temporary disk, which **isn't a managed disk**. The temporary disk provides **short-term storage for applications and processes**. It's intended for storing only data such as **page files, swap files, or SQL Server tempdb files**." | 大多数 VM 都包含一个临时磁盘，它**不是托管磁盘**。临时磁盘**为应用程序和进程提供短期存储**。它只用于存储**页面文件、交换文件或 SQL Server tempdb 文件**之类的数据。 | [Microsoft, 2026a, "Temporary disk" section, para. 1](https://learn.microsoft.com/en-us/azure/virtual-machines/managed-disks-overview#:~:text=Most%20VMs%20contain%20a%20temporary%20disk) |
| **Virtual Machine Scale Sets**<br>虚拟机规模集 | "**Manage and scale** up to **thousands of Linux and Windows virtual machines**" | **管理和扩展**多达**数千台 Linux 和 Windows 虚拟机**。 | [Microsoft, n.d., "Browse Azure products" section, Compute, item 19](https://learn.microsoft.com/en-us/azure/#:~:text=Manage%20and%20scale%20up%20to%20thousands) |
| **Azure Spot Virtual Machines**<br>Azure 竞价虚拟机 | "Provision **unused compute capacity** at **deep discounts** to run **interruptible workloads**" | 预配**未使用的计算容量**，享受**大幅折扣**，用来运行**可中断的工作负载**。 | [Microsoft, n.d., "Browse Azure products" section, Compute, item 11](https://learn.microsoft.com/en-us/azure/#:~:text=Provision%20unused%20compute%20capacity) |
| **Azure VMware Solution**<br>Azure VMware 解决方案 | "Azure VMware Solution is a **managed service** for **running VMware workloads natively on Azure**." | Azure VMware Solution 是一项**托管服务**，用于**在 Azure 上原生运行 VMware 工作负载**。 | [Microsoft, 2026b, "Understand the basic features" section, list item 9](https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/compute-decision-tree#:~:text=is%20a%20managed%20service%20for%20running%20VMware%20workloads) |

## References

- Microsoft. (n.d.). *Azure documentation*. Microsoft Learn. Retrieved October 26, 2026, from https://learn.microsoft.com/en-us/azure/
- Microsoft. (2026a, August 20). *Azure managed disks overview*. Microsoft Learn. https://learn.microsoft.com/en-us/azure/virtual-machines/managed-disks-overview
- Microsoft. (2026b, February 19). *Choose an Azure compute service*. Azure Architecture Center. https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/compute-decision-tree
