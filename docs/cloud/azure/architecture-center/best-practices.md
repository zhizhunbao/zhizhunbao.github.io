---
title: "27.2 Best Practices"
description: "Microsoft Azure, 27.2 Best practices: API design, API implementation, Autoscaling, Background jobs, Caching, Content Delivery Network, Data partitioning, Host name preservation, Message encoding considerations, Monitoring and diagnostics, Transient fault handling."
ms.date: 2026-10-27
---

# 27.2 Best Practices

## Classification

![Best practices, 11 terms from Best practices in cloud applications, in its order: API design, API implementation, Autoscaling, Background jobs, Caching, Content Delivery Network, Data partitioning, Host name preservation, Message encoding considerations, Monitoring and diagnostics, Transient fault handling.](media/best-practices.png)

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **API design**<br>API 设计 | "Design web APIs to **support platform independence** by using **standard protocols and agreed-upon data formats**." | 设计 Web API，**支持平台独立性**，方法是使用**标准协议和商定的数据格式**。 | [Microsoft, 2026, "Practice" table, row 1](https://learn.microsoft.com/en-us/azure/architecture/best-practices/index-best-practices#:~:text=Design%20web%20APIs%20to%20support%20platform%20independence) |
| **API implementation**<br>API 实现 | "Implement **RESTful web APIs** with **HTTP method semantics, request validation, and safe retry behavior**." | 实现 **RESTful Web API**，具备 **HTTP 方法语义、请求验证和安全的重试行为**。 | [Microsoft, 2026, "Practice" table, row 2](https://learn.microsoft.com/en-us/azure/architecture/best-practices/index-best-practices#:~:text=Implement%20RESTful%20web%20APIs) |
| **Autoscaling**<br>自动缩放 | "Design apps to **dynamically allocate and deallocate resources** to **satisfy performance requirements and minimize costs**." | 设计应用以**动态分配和释放资源**，从而**满足性能要求并尽量降低成本**。 | [Microsoft, 2026, "Practice" table, row 3](https://learn.microsoft.com/en-us/azure/architecture/best-practices/index-best-practices#:~:text=Design%20apps%20to%20dynamically%20allocate%20and%20deallocate%20resources) |
| **Background jobs**<br>后台作业 | "Implement **batch jobs, processing tasks, and workflows** as **background jobs**." | 把**批处理作业、处理任务和工作流**实现为**后台作业**。 | [Microsoft, 2026, "Practice" table, row 4](https://learn.microsoft.com/en-us/azure/architecture/best-practices/index-best-practices#:~:text=Implement%20batch%20jobs%2C%20processing%20tasks%2C%20and%20workflows%20as%20background%20jobs) |
| **Caching**<br>缓存 | "Improve performance by **copying data to fast storage** that's **close to apps**." | 通过**把数据复制到快速存储**来提高性能，这种存储**靠近应用**。 | [Microsoft, 2026, "Practice" table, row 5](https://learn.microsoft.com/en-us/azure/architecture/best-practices/index-best-practices#:~:text=Improve%20performance%20by%20copying%20data%20to%20fast%20storage) |
| **Content Delivery Network**<br>内容分发网络 | "Use content delivery networks (CDNs) to **efficiently deliver web content to users** and **reduce load on web apps**." | 使用内容分发网络 (CDN) **高效地向用户交付 Web 内容**，并**减轻 Web 应用的负载**。 | [Microsoft, 2026, "Practice" table, row 6](https://learn.microsoft.com/en-us/azure/architecture/best-practices/index-best-practices#:~:text=Use%20content%20delivery%20networks%20%28CDNs%29%20to%20efficiently%20deliver%20web%20content) |
| **Data partitioning**<br>数据分区 | "Partition data to **improve scalability, availability, and performance** and to **reduce contention and data storage costs**." | 对数据进行分区，以**提高可伸缩性、可用性和性能**，并**减少争用和数据存储成本**。 | [Microsoft, 2026, "Practice" table, row 7](https://learn.microsoft.com/en-us/azure/architecture/best-practices/index-best-practices#:~:text=Partition%20data%20to%20improve%20scalability%2C%20availability%2C%20and%20performance) |
| **Host name preservation**<br>主机名保留 | "Learn why it's important to **preserve the original HTTP host name** between a **reverse proxy and its back-end web application** and how to implement this recommendation for the most common Azure services." | 了解为什么要**保留原始 HTTP 主机名**，范围是**反向代理与其后端 Web 应用程序**之间，以及如何在最常用的 Azure 服务中实现这项建议。 | [Microsoft, 2026, "Practice" table, row 8](https://learn.microsoft.com/en-us/azure/architecture/best-practices/index-best-practices#:~:text=preserve%20the%20original%20HTTP%20host%20name) |
| **Message encoding considerations**<br>消息编码注意事项 | "Choose the **payload structure, encoding format, and serialization library** for **asynchronous messages** exchanged between system components." | 选择**有效负载结构、编码格式和序列化库**，用于系统组件之间交换的**异步消息**。 | [Microsoft, 2026, "Practice" table, row 9](https://learn.microsoft.com/en-us/azure/architecture/best-practices/index-best-practices#:~:text=Choose%20the%20payload%20structure%2C%20encoding%20format%2C%20and%20serialization%20library) |
| **Monitoring and diagnostics**<br>监视和诊断 | "Track **system health, usage, and performance** by using a **monitoring and diagnostics pipeline**." | 跟踪**系统运行状况、使用情况和性能**，方法是使用**监视和诊断管道**。 | [Microsoft, 2026, "Practice" table, row 10](https://learn.microsoft.com/en-us/azure/architecture/best-practices/index-best-practices#:~:text=Track%20system%20health%2C%20usage%2C%20and%20performance) |
| **Transient fault handling**<br>暂时性故障处理 | "Handle **transient faults** caused by **unavailable networks or resources**." | 处理**暂时性故障**，这些故障由**不可用的网络或资源**引起。 | [Microsoft, 2026, "Practice" table, row 11](https://learn.microsoft.com/en-us/azure/architecture/best-practices/index-best-practices#:~:text=Handle%20transient%20faults%20caused%20by%20unavailable%20networks) |

## References

- Microsoft. (2026, October 27). *Best practices in cloud applications*. Azure Architecture Center. https://learn.microsoft.com/en-us/azure/architecture/best-practices/index-best-practices
