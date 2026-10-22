---
title: "1. Cloud concepts"
description: "Microsoft Azure, 1. Cloud concepts: deployment models, service models, actors, essential characteristics, benefits and the consumption-based model."
ms.date: 2026-10-21
---

# 1. Cloud concepts

![Cloud concepts sorted into six groups: deployment models, service models, actors, essential characteristics, benefits and the consumption-based model. Predictability and manageability are grey: not taught in a course yet.](media/cloud-concepts.png)

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **[Deployment models](deployment-models.md)**<br>部署模型 | "**Deployment models** describe how cloud environments are **structured**, who **manages** them, and how they are **accessed**." | **部署模型**描述云环境如何**构建**、由谁**管理**，以及如何**访问**。 | [Microsoft, n.d.-b, "Types of cloud deployment models" section, para. 1](https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/types-of-cloud-computing#:~:text=Deployment%20models%20describe%20how%20cloud%20environments%20are%20structured) |
| **[Service models](service-models.md)**<br>服务模型 | "**Service models** describe how cloud resources are **delivered to users**. They determine how much **control** an organization has over infrastructure, platforms, or applications." | **服务模型**描述云资源如何**交付给用户**。它们决定组织对基础结构、平台或应用程序拥有多少**控制权**。 | [Microsoft, n.d.-b, "Types of cloud service models" section, para. 1](https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/types-of-cloud-computing#:~:text=Service%20models%20describe%20how%20cloud%20resources%20are%20delivered%20to%20users.%20They) |
| **[Actors](actors.md)**<br>参与者 | "... the NIST cloud computing reference architecture defines **five major actors**: cloud consumer, cloud provider, cloud carrier, cloud auditor and cloud broker. Each actor is an **entity (a person or an organization)** that **participates in a transaction or process** and/or performs tasks in cloud computing." | ……NIST 云计算参考架构定义了**五个主要参与者**：云使用者、云提供者、云运营商、云审计者和云代理。每个参与者都是一个**实体（个人或组织）**，它**参与事务或流程**，和/或在云计算中执行任务。 | [Liu et al., 2011, Section 2.1, para. 2](https://doi.org/10.6028/NIST.SP.500-292) |
| **[Essential characteristics](essential-characteristics.md)**<br>基本特征 | "This cloud model is composed of **five essential characteristics**, **three service models**, and **four deployment models**." | 这种云模型由**五个基本特征**、**三种服务模型**和**四种部署模型**组成。 | [Mell &amp; Grance, 2011, Section 2, para. 1](https://doi.org/10.6028/NIST.SP.800-145) |
| **[Benefits](benefits.md)**<br>优势 | "You learn how cloud computing can help you **meet variable demand** while providing a **good experience** for your customer. You also learn about **security**, **governance**, sustainability, and overall **manageability** in the cloud." | 你将了解云计算如何帮助你**满足可变需求**，同时为客户提供**良好的体验**。你还将了解云中的**安全性**、**治理**、可持续性和整体**可管理性**。 | [Microsoft, n.d.-a, "Introduction" unit of "Describe the benefits of using cloud services", para. 1](https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/1-introduction#:~:text=You%20learn%20how%20cloud%20computing%20can%20help%20you%20meet%20variable%20demand) |
| **[Consumption-based model](consumption-based-model.md)**<br>基于消耗的模型 | "Cloud computing operates on a **consumption-based model**. You **pay for the IT resources you use**, and nothing more." | 云计算采用**基于消耗的模型**。你**只为所使用的 IT 资源付费**，仅此而已。 | [Microsoft, n.d.-a, "Describe the consumption-based model" unit, para. 1](https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/6-describe-consumption-based-model#:~:text=Cloud%20computing%20operates%20on%20a%20consumption%2Dbased%20model) |

## Coverage

| Certification | Part of the exam |
|---|---|
| AZ-900 Microsoft Azure Fundamentals | [Describe cloud concepts (25–30%)](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900#describe-cloud-concepts-2530) |

| Course | Weeks | Groups |
|---|---|---|
| CST8911 Introduction to Cloud Computing | 1, 2, 4, 7 | Deployment models, service models, actors, essential characteristics, benefits, consumption-based model |
| CST8912 Cloud Solution Architecture | 1, 5, 6 | Deployment models, service models, actors, essential characteristics, benefits, consumption-based model |
| CST8913 Cloud Migration | 2, 3, 5 | Deployment models, service models, actors, benefits, consumption-based model |
| CST8915 Full-stack Cloud-native Development | 1, 2, 4, 6 | Deployment models, service models, essential characteristics, benefits |
| CST8916 Remote Data and Real-time Applications | 1, 5 | Deployment models, service models, benefits |

## References

- Liu, F., Tong, J., Mao, J., Bohn, R., Messina, J., Badger, L., & Leaf, D. (2011). *NIST cloud computing reference architecture* (NIST Special Publication 500-292). National Institute of Standards and Technology. https://doi.org/10.6028/NIST.SP.500-292
- Mell, P., & Grance, T. (2011). *The NIST definition of cloud computing* (NIST Special Publication 800-145). National Institute of Standards and Technology. https://doi.org/10.6028/NIST.SP.800-145
- Microsoft. (n.d.-a). *Microsoft Azure Fundamentals: Describe cloud concepts* [Learning path]. Microsoft Learn. Retrieved October 21, 2026, from https://learn.microsoft.com/en-us/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/
- Microsoft. (n.d.-b). *Types of cloud computing*. Microsoft Azure. Retrieved October 22, 2026, from https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/types-of-cloud-computing
- Microsoft. (2026). *Study guide for Exam AZ-900: Microsoft Azure Fundamentals*. Microsoft Learn. https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900
