---
title: "1.1 Cloud Native"
description: "Architecting Cloud Native .NET Applications for Azure, 1.1 Cloud Native (What is Cloud Native?): 1.1.1 The pillars of cloud native, 1.1.2 The cloud, 1.1.3 Modern design, 1.1.4 Microservices, 1.1.5 Containers, 1.1.6 Backing services, 1.1.7 Automation."
ms.date: 2026-11-11
---

# 1.1 Cloud Native

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **1.1 Cloud Native**<br>云原生 | "**Cloud-native architecture and technologies** are an approach to **designing, constructing, and operating workloads** that are built in the cloud and **take full advantage of the cloud computing model**." | **云原生架构和技术**是一种**设计、构建和运行工作负载**的方法，这些工作负载在云中构建，并**充分利用云计算模型**。 | [Microsoft, 2023, "What is Cloud Native?", para. 3](https://learn.microsoft.com/en-us/dotnet/architecture/cloud-native/definition#:~:text=Cloud%2Dnative%20architecture%20and%20technologies%20are%20an%20approach) |
| **1.1.1 The pillars of cloud native**<br>云原生的支柱 | (Definition pending) | （定义待补） | [Microsoft, 2023, "The pillars of cloud native"](https://learn.microsoft.com/en-us/dotnet/architecture/cloud-native/definition#the-pillars-of-cloud-native) |
| **1.1.2 The cloud**<br>云 | (Definition pending) | （定义待补） | [Microsoft, 2023, "The cloud"](https://learn.microsoft.com/en-us/dotnet/architecture/cloud-native/definition#the-cloud) |
| **1.1.3 Modern design**<br>现代设计 | (Definition pending) | （定义待补） | [Microsoft, 2023, "Modern design"](https://learn.microsoft.com/en-us/dotnet/architecture/cloud-native/definition#modern-design) |
| **1.1.4 Microservices**<br>微服务 | (Definition pending) | （定义待补） | [Microsoft, 2023, "Microservices"](https://learn.microsoft.com/en-us/dotnet/architecture/cloud-native/definition#microservices) |
| **1.1.5 Containers**<br>容器 | (Definition pending) | （定义待补） | [Microsoft, 2023, "Containers"](https://learn.microsoft.com/en-us/dotnet/architecture/cloud-native/definition#containers) |
| **1.1.6 Backing services**<br>支撑服务 | "**Cloud-native systems depend upon many different ancillary resources**, such as data stores, message brokers, monitoring, and identity services. These services are known as **backing services**." | **云原生系统依赖许多不同的辅助资源**，例如数据存储、消息代理、监控和身份服务。这些服务被称为**支撑服务**。 | [Microsoft, 2023, "Backing services", para. 1](https://learn.microsoft.com/en-us/dotnet/architecture/cloud-native/definition#:~:text=Cloud%2Dnative%20systems%20depend%20upon%20many%20different) |
| **managed backing services**<br>托管支撑服务 | "**Cloud providers** offer a rich assortment of ***managed backing services.*** Instead of **owning the service**, you simply **consume it**." | **云提供商**提供丰富多样的***托管支撑服务***。你不必**拥有这项服务**，只需**使用它**。 | [Microsoft, 2023, "Backing services", para. 4](https://learn.microsoft.com/en-us/dotnet/architecture/cloud-native/definition#:~:text=Cloud%20providers%20offer%20a%20rich%20assortment%20of) |
| **attached resource**<br>附加资源 | "A best practice is to treat **a backing service** as an **attached resource**, dynamically bound to a microservice with **configuration information** (a URL and credentials) stored in an external configuration." | 最佳做法是把**支撑服务**当作**附加资源**，通过存放在外部配置中的**配置信息**（URL 和凭据）动态绑定到微服务。 | [Microsoft, 2023, "Backing services", para. 6](https://learn.microsoft.com/en-us/dotnet/architecture/cloud-native/definition#:~:text=A%20best%20practice%20is%20to%20treat%20a) |
| **Statelessness**<br>无状态 | (context) "On a final thought, **backing services** also promote **the Statelessness principle** from the Twelve-Factor Application, discussed earlier in the chapter." | （语境）最后，**支撑服务**还促进了十二要素应用中的**无状态原则**，本章前面已经讨论过。 | [Microsoft, 2023, "Backing services", para. 10](https://learn.microsoft.com/en-us/dotnet/architecture/cloud-native/definition#:~:text=On%20a%20final%20thought%2C%20backing%20services%20also) |
| **1.1.7 Automation**<br>自动化 | (Definition pending) | （定义待补） | [Microsoft, 2023, "Automation"](https://learn.microsoft.com/en-us/dotnet/architecture/cloud-native/definition#automation) |

## References

Microsoft. (2023, December 14). *What is Cloud Native?* Microsoft Learn. Retrieved November 11, 2026, from <https://learn.microsoft.com/en-us/dotnet/architecture/cloud-native/definition>
