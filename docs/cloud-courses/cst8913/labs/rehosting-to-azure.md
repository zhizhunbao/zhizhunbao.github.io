---
title: "Rehosting to Azure"
description: "CST8913 Cloud Migration, lab 5: Rehosting to Azure. Exam-style questions answered with my lab work."
ms.date: 2026-10-19
---

# Rehosting to Azure

Lab 5 of CST8913 Cloud Migration (week 5): state the business drivers and the migration strategy, draw the target architecture, and plan the migration and its validation. Each section asks one question about a concept the lab needs and answers it with what I wrote in my lab.

## 1. Why did the organization move to the cloud?

1. **Aging on-premises infrastructure (F1, F2).** Over 400 servers and 200 applications built up over 45 years were costly to modernize, and the old technology made it hard to hire and keep IT staff.
2. **State legislation (F3).** The 2021 law encouraged agencies to use the cloud for efficiency, resiliency, better customer experience, and stronger cybersecurity.

Explained in [5. Cloud Adoption Framework for Azure](../lectures/cloud-adoption-framework-for-azure.md).

## 2. Why was rehosting (lift and shift) the right strategy?

- **Speed (F4).** Changing 200 applications one by one could not finish in nine months. Rehosting moves VMs without code changes.
- **No disruption (F4, F5).** Azure VMware Solution runs the same VMware stack, so VMs move without conversion, applications run unchanged, and the IT team keeps using the tools it knows.
- **Safe partial progress (F5, F6).** Waves of whole environments meant a half-finished migration still worked.
- **Modernize later (F7).** Once out of the datacenters, L&I improves applications one at a time.

Explained in [5. Cloud Adoption Framework for Azure](../lectures/cloud-adoption-framework-for-azure.md), [10. What is Azure VMware Solution?](../lectures/what-is-azure-vmware-solution.md).

## 3. How does rehosting differ from replatforming?

- **Rehosting** moves the VM as is: same operating system, same application, same configuration. Only where it runs changes.
- **Replatforming** makes small changes during the move so the workload can use a managed platform, without rewriting it. For example, a SQL Server database moves from a VM to Azure SQL Managed Instance, or an application moves into containers.
- Replatforming cuts more operations work but needs more testing for each application, so it is slower. L&I rehosted first for speed and is replatforming afterwards (F7).

Explained in [5. Cloud Adoption Framework for Azure](../lectures/cloud-adoption-framework-for-azure.md).

## 4. What does the target architecture for moving VMware to Azure VMware Solution look like?

![Migration from on-premises VMware to Azure VMware Solution: application, database, AD DS/DNS VMs and vCenter run in the on-premises vSphere datacenter; an ExpressRoute circuit with Global Reach links it privately to an Azure VMware Solution private cloud (vCenter Server, NSX and vSAN on dedicated bare-metal hosts); HCX Connector on premises and HCX Cloud Manager in Azure migrate the VMs in waves (a pilot of about 10 VMs, then about 75 per wave) and extend networks so VMs keep their IPs; the private cloud connects to an Azure virtual network with Azure Monitor and Azure Backup; dashed outlines mark assumed components](media/lab5-diagrams-avs-migration.png)

Explained in [10. What is Azure VMware Solution?](../lectures/what-is-azure-vmware-solution.md).

## 5. What do vCenter, ESXi, HCX, ExpressRoute Global Reach, NSX and vSAN do in that architecture?

| Term | Meaning |
|---|---|
| vCenter Server | Manages the ESXi hosts and the VMs on them. |
| ESXi host | A physical server that runs VMware's hypervisor and hosts VMs. |
| AD DS / DNS | Sign-in and name resolution that the applications depend on. |
| SQL Server | Microsoft's database server, running inside VMs here. |
| VMware HCX | Moves VMs to Azure VMware Solution and extends networks. The HCX Connector runs on premises; the HCX Cloud Manager runs in the private cloud. |
| ExpressRoute circuit | A private connection to Azure that does not use the public internet. |
| ExpressRoute Global Reach | Links the on-premises ExpressRoute circuit to the private cloud's circuit. |
| Azure VMware Solution private cloud | VMware clusters on dedicated bare-metal Azure hosts, run by Microsoft. |
| NSX | VMware's software-defined networking and firewall. |
| vSAN | Pools the hosts' local disks into shared storage. |
| Azure virtual network | A private network in Azure for Azure-native services. |
| Azure Monitor | Collects metrics and logs from the migrated VMs. |
| Azure Backup | Backs up the migrated VMs. |

Explained in [10. What is Azure VMware Solution?](../lectures/what-is-azure-vmware-solution.md).

## 6. What are the phases of a rehost migration?

1. **Prepare.** Deploy the Azure VMware Solution private cloud, ExpressRoute with Global Reach, and HCX (A3, A4). Record a baseline of each application's response time and resource use on premises.
2. **Discover and group.** Map dependencies and build migration waves (see Q3.2).
3. **Pilot wave.** Migrate about 10 low-risk VMs first, as L&I did (F6), to prove the tools, network, and runbook.
4. **Main waves.** Move about 75 VMs per wave (F6), in maintenance windows outside busy business cycles (F4). Leave the most critical systems, such as workers' compensation claims and payments, for later waves when the team has practice.
5. **Stabilize and decommission.** After each wave's stabilization period, retire the on-premises copies. Once all waves finish, modernize applications one at a time (F7).

Explained in [8. Prepare for cloud adoption with a data-driven plan](../lectures/prepare-for-cloud-adoption-with-a-data-driven-plan.md), [9. Overview of application migration examples for Azure](../lectures/overview-of-application-migration-examples-for-azure.md).

## 7. How do you group dependent workloads into migration waves?

- Use Azure Migrate dependency analysis plus application-owner interviews to see which VMs talk to each other.
- Put an application and everything it calls, such as its web, application, and database VMs, in the same wave, so no wave leaves a dependency on the other side of the link.
- Keep shared services (AD DS, DNS) reachable from both sides throughout (A5), and move them last.
- Order waves from lowest to highest business criticality.

Explained in [8. Prepare for cloud adoption with a data-driven plan](../lectures/prepare-for-cloud-adoption-with-a-data-driven-plan.md), [6. What is Azure Migrate?](../lectures/what-is-azure-migrate.md).

## 8. How do you test a migration wave before, at and after cutover?

- **Before cutover:** run a test migration into an isolated network segment in the private cloud, so production keeps running while the copy is checked.
- **At cutover, check:**
  - Every VM boots and keeps its IP address.
  - Applications reach their databases and AD DS.
  - Smoke tests pass.
  - Application owners sign off on key business tasks.
- **After cutover:** compare response time and resource use with the baseline, and confirm monitoring and backup cover the moved VMs.

Explained in [9. Overview of application migration examples for Azure](../lectures/overview-of-application-migration-examples-for-azure.md).

## 9. After cutover, how do you decide whether to proceed or roll back?

- **Proceed** to the next wave when all of these are true:
  - All smoke tests and owner sign-offs pass.
  - Performance is within about 10% of the baseline.
  - There are no critical incidents during a 48-hour stabilization period.
  - Backups of the moved VMs complete successfully.
- **Roll back** if any of these happens:
  - A critical application fails its tests and can't be fixed within the agreed window, for example 4 hours.
  - Data is lost or corrupted.
  - Performance is far below the baseline.
- **How to roll back:**
  1. Keep the on-premises VMs shut down but intact until the stabilization period ends.
  2. To roll back, migrate the VMs back with HCX or restart the originals.
  3. Point users back to them.
  4. Reconcile any data written in Azure after cutover.
- Fix the cause before trying the same wave again.

Explained in [9. Overview of application migration examples for Azure](../lectures/overview-of-application-migration-examples-for-azure.md), [8. Prepare for cloud adoption with a data-driven plan](../lectures/prepare-for-cloud-adoption-with-a-data-driven-plan.md).
