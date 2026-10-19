---
title: "What is Azure VMware Solution?"
description: "Cloud Migration study notes on What is Azure VMware Solution?: one figure per part, key terms framed, official definitions and Chinese notes."
ms.date: 2026-10-19
---

# What is Azure VMware Solution?

Study notes on [Azure VMware Solution documentation](https://learn.microsoft.com/en-us/azure/azure-vmware/introduction), which CST8913 Cloud Migration (Algonquin College, Fall 2026) uses in week 5. Each section follows one part of the source. Start from the figure: the framed terms are the ones to learn, and the table below it defines them in the same order, each with a citation linked to the passage.

## [Private clouds, clusters and hosts](https://learn.microsoft.com/en-us/azure/azure-vmware/introduction#hosts-clusters-and-private-clouds)

![Diagram: Private clouds, clusters and hosts](media/what-is-azure-vmware-solution-1.png)

| Term | Definition | 中文解释 | Source |
|---|---|---|---|
| **Azure ExpressRoute** (ExpressRoute 专线) | "ExpressRoute lets you extend your on-premises networks into the Microsoft cloud over a private connection with the help of a connectivity provider." | ExpressRoute 是本地机房到 Azure 的私有专线，不走公网，更稳、更快、更安全。 | [Microsoft, n.d., para. 1](https://learn.microsoft.com/en-us/azure/expressroute/expressroute-introduction#:~:text=ExpressRoute%20lets%20you%20extend%20your%20on%2Dpremises%20networks%20into%20the) |
| **Azure VMware Solution (AVS)** (Azure VMware 解决方案) | "Azure VMware Solution provides private clouds that contain VMware vSphere clusters built from dedicated bare-metal Azure infrastructure." | 在 Azure 的专用物理机上跑 VMware 环境；VMware 虚拟机可以原样搬过去，不用改格式。 | [Microsoft, n.d., para. 1](https://learn.microsoft.com/en-us/azure/azure-vmware/introduction#:~:text=Azure%20VMware%20Solution%20provides%20private%20clouds%20that%20contain%20VMware%20vSphere) |
| **Azure VMware Solution private cloud** (AVS 私有云) | "Azure VMware Solution private cloud: Offers compute, networking, and storage resources by using VMware software, including vCenter Server, NSX software-defined networking, vSAN software-defined storage, and Azure bare-metal ESXi hosts." *Note: The general term private cloud is defined on the Describe cloud computing page.* | AVS 私有云是微软在 Azure 专用物理机上替你搭好的一整套 VMware 环境（vCenter、NSX、vSAN、ESXi 主机）；本地的 VMware 虚拟机可以直接搬进去运行。 | [Microsoft, n.d., second list, bullet 4](https://learn.microsoft.com/en-us/azure/azure-vmware/architecture-private-clouds#:~:text=Offers%20compute%2C%20networking%2C%20and%20storage%20resources%20by%20using%20VMware%20software) |
| **vCenter Server** (vCenter 服务器) | "VMware vCenter Server for managing ESXi and vSAN." | vCenter Server 是 VMware 的集中管理平台，用来管理所有 ESXi 主机和 vSAN 存储；在 AVS 私有云里它已经装好，你照旧用它管虚拟机。 | [Microsoft, n.d., bullet 2](https://learn.microsoft.com/en-us/azure/azure-vmware/architecture-private-clouds#:~:text=VMware%20vCenter%20Server%20for%20managing%20ESXi%20and%20vSAN) |
| **VMware NSX** (NSX 网络) | "VMware NSX software-defined networking for vSphere workload virtual machines (VMs)." | NSX 是 VMware 的软件定义网络，用软件给虚拟机建网段、路由和防火墙。 | [Microsoft, n.d., bullet 3](https://learn.microsoft.com/en-us/azure/azure-vmware/architecture-private-clouds#:~:text=VMware%20NSX%20software%2Ddefined%20networking%20for%20vSphere%20workload%20virtual%20machines) |
| **cluster** (集群) | "Azure VMware Solution clusters are based on a hyperconverged infrastructure. ... An Azure VMware Solution cluster requires a minimum number of three hosts." *Note: The same page gives the maximum: 16 hosts per cluster.* | 集群是一组 ESXi 主机，它们的计算、内存和硬盘合在一起使用（超融合）；AVS 的每个集群至少 3 台、最多 16 台主机，主机多了就能放更多虚拟机。 | [Microsoft, n.d., "Hosts, clusters, and private clouds" section, para. 1 and para. 2](https://learn.microsoft.com/en-us/azure/azure-vmware/introduction#hosts-clusters-and-private-clouds:~:text=Azure%20VMware%20Solution%20clusters%20are%20based%20on%20a%20hyperconverged%20infrastructure) |
| **ESXi host** (ESXi 主机) | "Dedicated bare-metal server hosts provisioned with VMware vSphere Hypervisor (ESXi)." | ESXi 是装在物理服务器上的 VMware 虚拟化软件；AVS 私有云由这些专用裸金属主机组成。 | [Microsoft, n.d., bullet 1](https://learn.microsoft.com/en-us/azure/azure-vmware/architecture-private-clouds#:~:text=Dedicated%20bare%2Dmetal%20server%20hosts%20provisioned%20with%20VMware%20vSphere%20Hypervisor) |
| **VMware vSAN** (vSAN 存储) | "VMware vSAN datastore for vSphere workload VMs." | vSAN 把各主机的本地硬盘合成一个共享存储，给虚拟机用。 | [Microsoft, n.d., bullet 4](https://learn.microsoft.com/en-us/azure/azure-vmware/architecture-private-clouds#:~:text=VMware%20vSAN%20datastore%20for%20vSphere%20workload%20VMs) |
