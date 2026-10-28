---
title: "27.3 Cloud Design Patterns"
description: "Microsoft Azure, 27.3 Cloud design patterns: Cache-Aside, Circuit Breaker, Competing Consumers, Event Sourcing, Gateway Aggregation, Gateway Offloading, Gateway Routing, Publisher-Subscriber, Queue-Based Load Leveling, Retry, Sharding."
ms.date: 2026-10-27
---

# 27.3 Cloud Design Patterns

## Classification

![Cloud design patterns, 11 terms from Cloud design patterns, in its order: Cache-Aside, Circuit Breaker, Competing Consumers, Event Sourcing, Gateway Aggregation, Gateway Offloading, Gateway Routing, Publisher-Subscriber, Queue-Based Load Leveling, Retry, Sharding.](media/cloud-design-patterns.png)

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **Cache-Aside**<br>缓存端 | "**Load data on demand** into a **cache** from a **data store**." | **按需加载数据**到**缓存**中，数据来自**数据存储**。 | [Microsoft, 2026, "Catalog of patterns" table, "Cache-Aside" row](https://learn.microsoft.com/en-us/azure/architecture/patterns/#:~:text=Load%20data%20on%20demand%20into%20a%20cache%20from%20a%20data%20store) |
| **Circuit Breaker**<br>断路器 | "Handle **faults that might take a variable amount of time to fix** when an application **connects to a remote service or resource**." | 处理**修复所需时间可能不确定的故障**，这类故障发生在应用程序**连接到远程服务或资源**时。 | [Microsoft, 2026, "Catalog of patterns" table, "Circuit Breaker" row](https://learn.microsoft.com/en-us/azure/architecture/patterns/#:~:text=Handle%20faults%20that%20might%20take%20a%20variable%20amount%20of%20time%20to%20fix) |
| **Competing Consumers**<br>竞争使用者 | "Enable **multiple concurrent consumers** to **process messages** that they receive on the **same messaging channel**." | 让**多个并发使用者**能够**处理消息**，这些消息来自**同一个消息通道**。 | [Microsoft, 2026, "Catalog of patterns" table, "Competing Consumers" row](https://learn.microsoft.com/en-us/azure/architecture/patterns/#:~:text=Enable%20multiple%20concurrent%20consumers%20to%20process%20messages) |
| **Event Sourcing**<br>事件溯源 | "Use an **append-only store** to **record a full series of events** that describe actions taken on data in a domain." | 使用**仅追加存储**来**记录一系列完整的事件**，这些事件描述对某个域中数据执行的操作。 | [Microsoft, 2026, "Catalog of patterns" table, "Event Sourcing" row](https://learn.microsoft.com/en-us/azure/architecture/patterns/#:~:text=Use%20an%20append-only%20store%20to%20record%20a%20full%20series%20of%20events) |
| **Gateway Aggregation**<br>网关聚合 | "Use a **gateway** to **aggregate multiple individual requests into a single request**." | 使用**网关**，**把多个单独的请求聚合为一个请求**。 | [Microsoft, 2026, "Catalog of patterns" table, "Gateway Aggregation" row](https://learn.microsoft.com/en-us/azure/architecture/patterns/#:~:text=Use%20a%20gateway%20to%20aggregate%20multiple%20individual%20requests) |
| **Gateway Offloading**<br>网关卸载 | "**Offload shared or specialized service functionality** to a **gateway proxy**." | **把共享或专用的服务功能卸载**到**网关代理**。 | [Microsoft, 2026, "Catalog of patterns" table, "Gateway Offloading" row](https://learn.microsoft.com/en-us/azure/architecture/patterns/#:~:text=Offload%20shared%20or%20specialized%20service%20functionality) |
| **Gateway Routing**<br>网关路由 | "**Route requests to multiple services** by using a **single endpoint**." | **把请求路由到多个服务**，使用的是**单个终结点**。 | [Microsoft, 2026, "Catalog of patterns" table, "Gateway Routing" row](https://learn.microsoft.com/en-us/azure/architecture/patterns/#:~:text=Route%20requests%20to%20multiple%20services%20by%20using%20a%20single%20endpoint) |
| **Publisher-Subscriber**<br>发布服务器-订阅服务器 | "Enable an application to **announce events to multiple consumers asynchronously**, **without coupling senders to receivers**." | 让应用程序能够**异步地向多个使用者发布事件**，**而不把发送方和接收方耦合在一起**。 | [Microsoft, 2026, "Catalog of patterns" table, "Publisher-Subscriber" row](https://learn.microsoft.com/en-us/azure/architecture/patterns/#:~:text=Enable%20an%20application%20to%20announce%20events%20to%20multiple%20consumers) |
| **Queue-Based Load Leveling**<br>基于队列的负载均衡 | "Use a **queue** that **creates a buffer between a task and a service** to **smooth intermittent heavy loads**." | 使用**队列**，**在任务和服务之间创建缓冲区**，以**平滑间歇性的重负载**。 | [Microsoft, 2026, "Catalog of patterns" table, "Queue-Based Load Leveling" row](https://learn.microsoft.com/en-us/azure/architecture/patterns/#:~:text=Use%20a%20queue%20that%20creates%20a%20buffer%20between%20a%20task%20and%20a%20service) |
| **Retry**<br>重试 | "Enable applications to **handle anticipated temporary failures** by **retrying failed operations**." | 让应用程序能够**处理预期的暂时性故障**，方法是**重试失败的操作**。 | [Microsoft, 2026, "Catalog of patterns" table, "Retry" row](https://learn.microsoft.com/en-us/azure/architecture/patterns/#:~:text=Enable%20applications%20to%20handle%20anticipated%20temporary%20failures) |
| **Sharding**<br>分片 | "Divide a **data store** into a set of **horizontal partitions or shards**." | 把**数据存储**划分为一组**水平分区或分片**。 | [Microsoft, 2026, "Catalog of patterns" table, "Sharding" row](https://learn.microsoft.com/en-us/azure/architecture/patterns/#:~:text=Divide%20a%20data%20store%20into%20a%20set%20of%20horizontal%20partitions%20or%20shards) |

## References

- Microsoft. (2026, June 3). *Cloud design patterns*. Azure Architecture Center. https://learn.microsoft.com/en-us/azure/architecture/patterns/
