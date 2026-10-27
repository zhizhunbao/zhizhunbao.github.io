---
title: "3.3 Reliability concepts"
description: "Microsoft Azure, 3.3 Reliability concepts: high availability, fault tolerance, redundancy, replication, backup."
ms.date: 2026-10-26
---

# 3.3 Reliability concepts

Sources: [Shared responsibility for reliability](https://learn.microsoft.com/en-us/azure/reliability/concept-shared-responsibility); [Business continuity, high availability, and disaster recovery](https://learn.microsoft.com/en-us/azure/reliability/concept-business-continuity-high-availability-disaster-recovery); [Redundancy, replication, and backup](https://learn.microsoft.com/en-us/azure/reliability/concept-redundancy-replication-backup); [Failover and failback](https://learn.microsoft.com/en-us/azure/reliability/concept-failover-failback); [Reliability and sovereignty in Azure](https://learn.microsoft.com/en-us/azure/reliability/concept-reliability-sovereignty); [How to read a service-level agreement (SLA)](https://learn.microsoft.com/en-us/azure/reliability/concept-service-level-agreements).

## Classification

![Reliability concepts, so far five terms: high availability and fault tolerance from What are business continuity, high availability, and disaster recovery?, and redundancy, replication and backup from What are redundancy, replication, and backup?](media/reliability-concepts.png)

## Glossary

| Term | Definition | 中文解释 | Source |
|---|---|---|---|
| **High availability**<br>高可用性 | "*High availability* is the state in which a specific workload can **maintain its necessary level of uptime on a day-to-day basis**, **even during transient faults and intermittent failures**." | 高可用性是指特定工作负载能够**日常保持所需正常运行时间水平**的状态，**即使在发生暂时性故障和间歇性失败时**也是如此。 | [Microsoft, 2025a, "High availability" section, para. 1](https://learn.microsoft.com/en-us/azure/reliability/concept-business-continuity-high-availability-disaster-recovery#:~:text=is%20the%20state%20in%20which%20a%20specific%20workload%20can%20maintain) |
| **Fault tolerance**<br>容错 | "*Fault tolerance* is the ability of a system to **continue operating, in some defined capacity, in the event of a failure**." | 容错是系统**在发生故障时仍能以某种既定能力继续运行**的能力。 | [Microsoft, 2025a, "Fault tolerance" section, para. 1](https://learn.microsoft.com/en-us/azure/reliability/concept-business-continuity-high-availability-disaster-recovery#:~:text=is%20the%20ability%20of%20a%20system%20to%20continue%20operating) |
| **Redundancy**<br>冗余 | "*Redundancy* is the ability to maintain **multiple identical copies of a service component**, and to use those copies in a way that prevents any one component from becoming a **single point of failure**." | 冗余是维护**服务组件的多个相同副本**的能力，并以某种方式使用这些副本，防止任何一个组件成为**单点故障**。 | [Microsoft, 2025b, para. 3](https://learn.microsoft.com/en-us/azure/reliability/concept-redundancy-replication-backup#:~:text=is%20the%20ability%20to%20maintain%20multiple%20identical%20copies%20of%20a%20service%20component) |
| **Replication**<br>复制 | "*Replication or data redundancy* is the ability to maintain **multiple copies of data**, called **replicas**." | 复制（或数据冗余）是维护**数据的多个副本**的能力，这些副本称为**副本（replica）**。 | [Microsoft, 2025b, para. 4](https://learn.microsoft.com/en-us/azure/reliability/concept-redundancy-replication-backup#:~:text=is%20the%20ability%20to%20maintain%20multiple%20copies%20of%20data%2C%20called%20replicas) |
| **Backup**<br>备份 | "*Backup* is the ability to maintain a **timestamped copy of data** that can be used to **restore data that has been lost**." | 备份是维护**带时间戳的数据副本**的能力，可用来**恢复已丢失的数据**。 | [Microsoft, 2025b, para. 5](https://learn.microsoft.com/en-us/azure/reliability/concept-redundancy-replication-backup#:~:text=is%20the%20ability%20to%20maintain%20a%20timestamped%20copy%20of%20data) |

## References

- Microsoft. (2025a, November 4). *What are business continuity, high availability, and disaster recovery?* Microsoft Learn. https://learn.microsoft.com/en-us/azure/reliability/concept-business-continuity-high-availability-disaster-recovery
- Microsoft. (2025b, February 26). *What are redundancy, replication, and backup?* Microsoft Learn. https://learn.microsoft.com/en-us/azure/reliability/concept-redundancy-replication-backup
