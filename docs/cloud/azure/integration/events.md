---
title: "10.4 Events"
description: "Microsoft Azure, 10.4 Events: Azure Event Grid, Azure Event Hubs, Azure Web PubSub."
ms.date: 2026-11-13
---

# 10.4 Events

## Classification

![Events, 3 services, each defined in its own overview: Azure Event Grid, Azure Event Hubs, Azure Web PubSub; Azure Event Hubs expands into its core components (Producer applications, Namespace, Event hub / Kafka topic, Partitions, Consumer applications, Consumer group) and Capture.](media/events.png)

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **Azure Event Grid**<br>Azure 事件网格 | "Azure Event Grid is a **highly scalable and fully managed publish-subscribe service** for **message distribution**." | Azure 事件网格是一种**高度可扩展、完全托管的发布-订阅服务**，用于**消息分发**。 | [Microsoft, 2026a, para. 1](https://learn.microsoft.com/en-us/azure/event-grid/overview#:~:text=is%20a%20highly%20scalable%20and%20fully%20managed%20publish-subscribe%20service) |
| **Azure Event Hubs**<br>Azure 事件中心 | "Azure Event Hubs is a **fully managed, real-time data streaming platform** that can **ingest millions of events per second** with low latency." | Azure 事件中心是一个**完全托管的实时数据流式处理平台**，能够以低延迟**每秒引入数百万个事件**。 | [Microsoft, 2026b, para. 1](https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-about#:~:text=is%20a%20fully%20managed%2C%20real-time%20data%20streaming%20platform) |
| **Producer applications**<br>生产者应用程序 | "Applications that **send events to Event Hubs** using **Event Hubs SDKs, Kafka producer clients, or HTTPS**" | **向事件中心发送事件**的应用程序，使用**事件中心 SDK、Kafka 生产者客户端或 HTTPS** | [Microsoft, 2026b, "How it works", Core components table, row 1](https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-about#:~:text=Applications%20that%20send%20events%20to%20Event%20Hubs) |
| **Namespace**<br>命名空间 | "**Management container** for one or more event hubs. Handles **streaming capacity, network security, and geo-disaster recovery** at the namespace level" | 一个或多个事件中心的**管理容器**。在命名空间级别处理**流式处理容量、网络安全和异地灾难恢复** | [Microsoft, 2026b, "How it works", Core components table, row 2](https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-about#:~:text=Management%20container%20for%20one%20or%20more%20event%20hubs) |
| **Event hub / Kafka topic**<br>事件中心 / Kafka 主题 | "An **append-only distributed log** that organizes events. Contains **one or more partitions** for parallel processing" | 一个组织事件的**只追加分布式日志**。包含**一个或多个分区**，用于并行处理 | [Microsoft, 2026b, "How it works", Core components table, row 3](https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-about#:~:text=An%20append-only%20distributed%20log%20that%20organizes%20events) |
| **Partitions**<br>分区 | "**Ordered sequences of events** used to **scale throughput**. Think of partitions as lanes on a freeway—more partitions enable higher throughput" | **有序的事件序列**，用于**扩展吞吐量**。可以把分区看作高速公路上的车道：分区越多，吞吐量越高 | [Microsoft, 2026b, "How it works", Core components table, row 4](https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-about#:~:text=Ordered%20sequences%20of%20events%20used%20to%20scale%20throughput) |
| **Consumer applications**<br>使用者应用程序 | "Applications that **read events** by **tracking their position (offset)** in each partition. Can use Event Hubs SDKs or Kafka consumer clients" | **读取事件**的应用程序，方式是**跟踪自己在每个分区中的位置**（偏移量）。可以使用事件中心 SDK 或 Kafka 使用者客户端 | [Microsoft, 2026b, "How it works", Core components table, row 5](https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-about#:~:text=Applications%20that%20read%20events%20by%20tracking%20their%20position) |
| **Consumer group**<br>使用者组 | "A **logical view of the event hub** that enables multiple consumer applications to **read the same stream independently**, each maintaining its own position" | 事件中心的一个**逻辑视图**，让多个使用者应用程序**各自独立地读取同一个流**，每个应用程序维护自己的位置 | [Microsoft, 2026b, "How it works", Core components table, row 6](https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-about#:~:text=A%20logical%20view%20of%20the%20event%20hub) |
| **Capture**<br>捕获 | (context) "Capture your streaming data **in near real time** to **Azure Blob Storage or Azure Data Lake Storage** for long-term retention or batch analytics." | （语境）将流式数据**近实时地**捕获到 **Azure Blob 存储或 Azure Data Lake Storage**，用于长期保留或批量分析。 | [Microsoft, 2026b, "Key capabilities", "Capture", para. 1](https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-about#:~:text=your%20streaming%20data%20in%20near%20real%20time) |
| **Azure Web PubSub**<br>Azure Web PubSub | "Azure Web PubSub is a **fully managed service** for **building applications that deliver updates in real time**." | Azure Web PubSub 是一种**完全托管的服务**，用于**构建实时推送更新的应用程序**。 | [Microsoft, 2026c, para. 1](https://learn.microsoft.com/en-us/azure/azure-web-pubsub/overview#:~:text=is%20a%20fully%20managed%20service%20for%20building%20applications%20that%20deliver%20updates) |

## References

- Microsoft. (2026a, July 23). *What is Azure Event Grid?* Microsoft Learn. https://learn.microsoft.com/en-us/azure/event-grid/overview
- Microsoft. (2026b, January 28). *What is Azure Event Hubs?* Microsoft Learn. https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-about
- Microsoft. (2026c, August 6). *What is Azure Web PubSub service?* Microsoft Learn. https://learn.microsoft.com/en-us/azure/azure-web-pubsub/overview
