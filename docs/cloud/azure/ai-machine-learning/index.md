---
title: "11. AI + Machine Learning"
description: "Microsoft Azure, 11. AI + Machine Learning: AI development platforms, prebuilt AI services, data platforms for AI and enterprise intelligence layers."
ms.date: 2026-10-24
---

# 11. AI + Machine Learning

## Classification

![AI + Machine Learning sorted into the four kinds of Azure services for AI in the Architecture Center's getting-started guide: AI development platforms, prebuilt AI services, data platforms for AI and enterprise intelligence layers. Grey: not taught in a course yet.](media/ai-machine-learning.png)

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **AI + Machine Learning**<br>AI 和机器学习 | "**AI** enables machines to **analyze data, generate content, synthesize speech, make predictions, and support decision-making** across industries." | **AI** 让机器能够在各个行业中**分析数据、生成内容、合成语音、做出预测并辅助决策**。 | [Microsoft, 2026c, para. 1](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/ai-get-started#:~:text=AI%20enables%20machines%20to%20analyze%20data) |
| **[AI development platforms](ai-development-platforms.md)**<br>AI 开发平台 | "**Microsoft Foundry**: A **unified platform as a service (PaaS)** for **developing and deploying generative AI applications and agents**." | **Microsoft Foundry**：一个**统一的平台即服务（PaaS）**，用于**开发和部署生成式 AI 应用和智能体**。 | [Microsoft, 2026c, "AI development platforms" section, list item 1](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/ai-get-started#:~:text=A%20unified%20platform%20as%20a%20service%20(PaaS)) |
| **[Prebuilt AI services](prebuilt-ai-services.md)**<br>预构建 AI 服务 | "**Foundry Tools**: A suite of **prebuilt and customizable APIs and models** for **adding intelligent features to applications**." | **Foundry Tools**：一套**预构建、可自定义的 API 和模型**，用于**给应用程序添加智能功能**。 | [Microsoft, 2026c, "Prebuilt AI services" section, list item 1](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/ai-get-started#:~:text=A%20suite%20of%20prebuilt%20and%20customizable%20APIs) |
| **[Data platforms for AI](data-platforms-for-ai.md)**<br>面向 AI 的数据平台 | "**Microsoft Fabric**: An **end-to-end analytics and data platform** that covers **data ingestion, transformation, real-time event routing, and reporting**." | **Microsoft Fabric**：一个**端到端的分析和数据平台**，涵盖**数据引入、转换、实时事件路由和报表**。 | [Microsoft, 2026c, "Data platforms for AI" section, list item 1](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/ai-get-started#:~:text=An%20end-to-end%20analytics%20and%20data%20platform) |
| **[Enterprise intelligence layers](enterprise-intelligence-layers.md)**<br>企业智能层 | "AI architecture at Microsoft introduces **three complementary intelligence layers** or **IQs** that represent **key sources of context for AI systems**." | 微软的 AI 架构引入了**三个互补的智能层**，也就是 **IQ**，它们代表 **AI 系统的关键上下文来源**。 | [Microsoft, 2026c, "Enterprise Intelligence Layers" section, para. 1](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/ai-get-started#:~:text=AI%20architecture%20at%20Microsoft%20introduces%20three) |

## Coverage

| Certification | Skill area |
|---|---|
| AI-901 Microsoft Azure AI Fundamentals | [Identify AI concepts and capabilities (40–45%)](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-901#identify-ai-concepts-and-capabilities-4045)<br>[Implement AI solutions by using Microsoft Foundry (55–60%)](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-901#implement-ai-solutions-by-using-microsoft-foundry-5560) |
| AI-103 Developing AI Apps and Agents on Azure | [Plan and manage an Azure AI solution (25–30%)](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-103#plan-and-manage-an-azure-ai-solution-2530)<br>[Implement generative AI and agentic solutions (30–35%)](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-103#implement-generative-ai-and-agentic-solutions-3035) |

**CST8911 Introduction to Cloud Computing**

| Week | Group | Terms in the course | Source |
|---|---|---|---|
| 4 | AI + Machine Learning | chatbot | Lecture 3: slide 6 |
| 6 | Prebuilt AI services | Azure speech to text<br>Azure OpenAI Service | Lecture 5: slide 9 |

**CST8912 Cloud Solution Architecture**

| Week | Group | Terms in the course | Source |
|---|---|---|---|
| 2 | AI + Machine Learning | model (machine learning) | Design Cloud Compute Solution: slides 14, 15 |
|  | AI development platforms | Azure Machine Learning | Design Cloud Compute Solution: slides 14, 15 |
|  | Data platforms for AI | Azure Databricks | Design Cloud Compute Solution: slides 14, 15 |

**CST8913 Cloud Migration**

| Week | Group | Terms in the course | Source |
|---|---|---|---|
| 2 | AI + Machine Learning | machine learning (ML)<br>artificial intelligence (AI) | Introduction to Cloud Computing: slide 5 |
|  | Data platforms for AI | Microsoft Fabric | Lab 2: Azure services (Lab 2 case study) |
| 3 | AI development platforms | Azure Machine Learning | Target Cloud Architecture: slide 10 |
|  | Data platforms for AI | Azure Databricks<br>Azure Data Lake Storage | Target Cloud Architecture: slides 8, 10 |

**CST8915 Full-stack Cloud-native Development**

| Week | Group | Terms in the course | Source |
|---|---|---|---|
| 3 | Data platforms for AI | Azure Databricks<br>Data Lake Storage Gen2 | Microservices: slides 32, 33 |

**CST8916 Remote Data and Real-time Applications**

| Week | Group | Terms in the course | Source |
|---|---|---|---|
| 1 | AI + Machine Learning | computer vision<br>AI model training | Introduction to Remote Data and Real-time Applications: slides 24, 30 |
| 6 | AI + Machine Learning | built-in machine learning<br>large language model (LLM)<br>chatbot | Popular Cloud Services for Real-time Applications II: slides 13, 26, 27 |
|  | AI development platforms | Azure Machine Learning (Azure ML)<br>Azure AI Foundry<br>Azure AI Foundry portal | Popular Cloud Services for Real-time Applications II: slides 12, 24, 25 |
|  | Prebuilt AI services | OpenAI<br>Azure OpenAI<br>Azure AI Search<br>content safety | Popular Cloud Services for Real-time Applications II: slides 24, 25, 26 |
|  | Data platforms for AI | Azure Databricks<br>Data Lake Storage Gen2 | Popular Cloud Services for Real-time Applications II: slide 7 |

## References

- Microsoft. (2026a). *Study guide for Exam AI-103: Developing AI apps and agents on Azure*. Microsoft Learn. https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-103
- Microsoft. (2026b). *Study guide for Exam AI-901: Microsoft Azure AI Fundamentals*. Microsoft Learn. https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-901
- Microsoft. (2026c). *Get started with AI architecture design*. Azure Architecture Center. https://learn.microsoft.com/en-us/azure/architecture/ai-ml/ai-get-started
