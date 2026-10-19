---
title: "Discovery and assessment"
description: "CST8913 Cloud Migration, lab 4: Discovery and assessment. Exam-style questions answered with my lab work."
ms.date: 2026-10-19
---

# Discovery and assessment

Lab 4 of CST8913 Cloud Migration (week 4): list the digital estate, choose how to discover it, map dependencies, check readiness, size and cost it, then prioritize and plan the migration. Each section asks one question about a concept the lab needs and answers it with what I wrote in my lab.

## Concepts to understand

- digital estate
- Azure Migrate
- appliance
- dependency analysis
- readiness
- sizing
- cost estimate
- migration wave

## 1. What is the digital estate?

The digital estate is everything IT runs today: servers, applications, data, and the connections between them. Here it is the five servers above and the applications and data on them.

Explained in [8. Prepare for cloud adoption with a data-driven plan](../lectures/prepare-for-cloud-adoption-with-a-data-driven-plan.md).

## 2. Why must you understand the digital estate before planning a migration?

Sizing, cost, and migration order all depend on knowing what exists and how it connects. The inventory here lists only roles and OS versions, so it is a starting point, not a full picture.

Explained in [8. Prepare for cloud adoption with a data-driven plan](../lectures/prepare-for-cloud-adoption-with-a-data-driven-plan.md).

## 3. What can go wrong if you migrate without discovery and assessment?

1. **Outages from missed dependencies.** For example, moving APP-01 without DB-01, or moving servers before DC-01 is reachable from Azure.
2. **Blockers found too late.** For example, finding at cutover that FILE-01's OS no longer gets security updates.
3. **Wrong size and cost.** Copying on-premises specs without usage data oversizes most VMs and may undersize DB-01.

Explained in [8. Prepare for cloud adoption with a data-driven plan](../lectures/prepare-for-cloud-adoption-with-a-data-driven-plan.md), [6. What is Azure Migrate?](../lectures/what-is-azure-migrate.md).

## 4. How does agentless discovery with Azure Migrate work?

Discovery is agentless:

1. Deploy the Azure Migrate appliance on vCenter.
2. The appliance reads each VM's data through vCenter and sends it to Azure Migrate.
3. Collect for about 30 days to capture peak usage.
4. Create assessments from the collected data.

Explained in [6. What is Azure Migrate?](../lectures/what-is-azure-migrate.md), [8. Prepare for cloud adoption with a data-driven plan](../lectures/prepare-for-cloud-adoption-with-a-data-driven-plan.md).

## 5. What does the Azure Migrate appliance do, and how does it connect to vCenter?

The appliance is a VM deployed on vCenter from an OVA template. It connects to vCenter Server with a read-only account on port 443 and reads VM configuration and performance through the vSphere APIs. With guest credentials, it can also read software inventory, SQL Server details, and network connections inside each VM. Nothing is installed on the five servers.

Explained in [6. What is Azure Migrate?](../lectures/what-is-azure-migrate.md).

## 6. What information does discovery collect?

- **Configuration:** vCPU, RAM, disks, NICs, OS version.
- **Performance:** CPU and memory use, disk IOPS and throughput, network traffic.
- **Software:** installed applications, SQL Server version, IIS sites.
- **Dependencies:** TCP connections between servers, with process and port.

Explained in [6. What is Azure Migrate?](../lectures/what-is-azure-migrate.md).

## 7. What is the difference between discovery and assessment?

Discovery collects facts: what servers exist and how they are configured, used, and connected. Assessment uses those facts to judge each server's Azure readiness, VM size, and monthly cost.

Explained in [6. What is Azure Migrate?](../lectures/what-is-azure-migrate.md).

## 8. What does dependency analysis find, and how does it confirm assumed dependencies?

Turn on agentless dependency analysis in Azure Migrate. It shows each server's TCP connections with process and port. For example, connections to DC-01 on ports 88, 389, or 53 would confirm A2. Then check the results with the application owners.

Explained in [6. What is Azure Migrate?](../lectures/what-is-azure-migrate.md).

## 9. Why does dependency analysis matter?

Servers that depend on each other are moved together, so nothing is left behind or cut off from what it needs.

Explained in [6. What is Azure Migrate?](../lectures/what-is-azure-migrate.md).

## 10. Which servers belong in the same migration group, and why?

**WEB-01 + APP-01 + DB-01.** They form one application and contain the only confirmed dependency (APP-01 → DB-01). Splitting them would send database traffic over the VPN, adding delay and a new point of failure. DC-01 and FILE-01 serve all servers, so they are handled separately.

Explained in [8. Prepare for cloud adoption with a data-driven plan](../lectures/prepare-for-cloud-adoption-with-a-data-driven-plan.md).

## 11. How do you classify each server's Azure readiness?

These are provisional judgments, to be confirmed by the Azure Migrate assessment.

| Server | Readiness Category | Justification and Missing Information | Remediation or Next Step |
|---|---|---|---|
| WEB-01 | Conditionally Ready | Windows Server 2019 and IIS run on Azure VMs. It is public-facing, so it needs a secure endpoint, certificate, and DNS change. **Missing:** app version, certificate, usage data. | Put it behind Application Gateway with WAF; migrate with group 1. |
| APP-01 | Conditionally Ready | Windows Server 2016 is supported until January 2027, and it must move with DB-01. **Missing:** application name, version, vendor support, usage data. | Confirm vendor support; plan an OS upgrade; migrate with group 1. |
| DB-01 | Insufficient Information | Mission-critical, but the SQL Server version is unknown, so its support status and size can't be judged. **Missing:** SQL version, database size, IOPS, RPO/RTO. | Run the SQL assessment and re-classify. |
| DC-01 | Conditionally Ready | AD DS runs on Azure VMs, but a domain controller shouldn't be lifted and shifted like a normal server. If it is the only DC (A4), it is a single point of failure. **Missing:** number of DCs, DNS role. | Build a new DC in Azure and let AD replicate; retire DC-01 later. |
| FILE-01 | Not Ready | Windows Server 2012 R2 is out of support, and its Extended Security Updates end on October 13, 2026. With no security patches after that, this is a blocker. **Missing:** share sizes, users. | Upgrade the OS during migration (Azure Migrate supports 2012 R2 → 2016/2019); test it first. |

Explained in [8. Prepare for cloud adoption with a data-driven plan](../lectures/prepare-for-cloud-adoption-with-a-data-driven-plan.md), [6. What is Azure Migrate?](../lectures/what-is-azure-migrate.md).

## 12. How does Azure Migrate produce VM sizes and cost estimates?

The Azure Migrate assessment uses the collected configuration and performance data to recommend a VM size and disk type for each server. It also estimates the monthly compute and storage cost for the chosen region and pricing options.

Explained in [6. What is Azure Migrate?](../lectures/what-is-azure-migrate.md).

## 13. What is the difference between performance-based sizing and as-is sizing?

- **Performance-based sizing** uses actual CPU, memory, and disk usage over time, so VMs are right-sized.
- **As-is sizing** copies the current on-premises specs without usage data, so VMs are often oversized.

Explained in [8. Prepare for cloud adoption with a data-driven plan](../lectures/prepare-for-cloud-adoption-with-a-data-driven-plan.md).

## 14. What factors change the estimated Azure operating cost?

1. **VM size and disk type.** This is the biggest part of the bill. DB-01 likely needs Premium SSD.
2. **Licensing.** Pay-as-you-go includes the licenses, while Azure Hybrid Benefit reuses existing ones.
3. **Commitment.** Reserved instances cost less than pay-as-you-go.

Explained in [6. What is Azure Migrate?](../lectures/what-is-azure-migrate.md).

## 15. How do you prioritize workloads in a migration plan?

- **Business criticality and migration risk:** move from lowest to highest risk, so the mission-critical DB-01 goes last, after the process has been proven on less critical servers.
- **Dependencies and migration groups:** the new DC comes first because every server depends on it. WEB-01, APP-01, and DB-01 move together as group 1 (Section 3).
- **Downtime constraints:** group 1 moves in one maintenance window. Azure Migrate replicates the servers while they keep running, so downtime is limited to the final sync and cutover.
- **Readiness and remediation:** FILE-01 moves only with its OS upgrade. Group 1 moves only after the SQL assessment re-classifies DB-01 from Insufficient Information to Ready or Conditionally Ready (Section 4).

Explained in [8. Prepare for cloud adoption with a data-driven plan](../lectures/prepare-for-cloud-adoption-with-a-data-driven-plan.md).

## 16. In what order would you migrate the workloads, and why?

1. **New DC in Azure:** every other server needs sign-in and DNS.
2. **FILE-01:** it has few dependencies and a security deadline.
3. **Group 1 (WEB-01, APP-01, DB-01), in one maintenance window:** it goes last because DB-01 is mission-critical and needs the most preparation, including the SQL assessment.
4. **Retire DC-01:** only after nothing uses it.

Explained in [8. Prepare for cloud adoption with a data-driven plan](../lectures/prepare-for-cloud-adoption-with-a-data-driven-plan.md).

## 17. When would you roll back a migration, and how?

- **Trigger:** a failed check that can't be fixed within the maintenance window, for example APP-01 can't reach DB-01.
- **Recovery:**
  1. Point DNS back to on-premises.
  2. Restart the original servers, which were shut down, not deleted.
  3. Stop the Azure VMs.

Explained in [8. Prepare for cloud adoption with a data-driven plan](../lectures/prepare-for-cloud-adoption-with-a-data-driven-plan.md).

## 18. How can you test a migration without disrupting production?

Azure Migrate's test migration creates a copy in an isolated Azure network while the original server keeps running, so users and dependent systems are not affected. After testing, the copy is cleaned up.

Explained in [9. Overview of application migration examples for Azure](../lectures/overview-of-application-migration-examples-for-azure.md).
