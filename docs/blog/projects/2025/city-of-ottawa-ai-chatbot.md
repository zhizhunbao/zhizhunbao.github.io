---
title: The City of Ottawa AI Chatbot
description: "I built most of a proof-of-concept AI chatbot for the City of Ottawa on my own, then handed the code to the City's team for Azure, September 2025 to April 2026."
ms.date: 2026-11-06
---

# The City of Ottawa AI Chatbot

- **Time:** September 2025 to April 2026
- **Topic:** Projects
- **My role:** architecture, front end and back end, technology selection

In a course project for the City of Ottawa, I built most of a proof-of-concept AI chatbot on my own, chose its RAG components after reading their source code, and later handed the code to the City's development team, who adapted it to Azure.

在给 City of Ottawa 做的课程项目里，AI chatbot 概念验证的大部分是我一个人做的。RAG 组件是我读过源代码后选定的；后来我把代码交给市政府的开发团队，由他们适配到 Azure。

## What Happened

### The Project

Another course had us build a proof of concept for the City of Ottawa: an AI chatbot. At first the city gave us no clear technology stack, so we wrote it entirely with open-source components. The front end was React and the back end was Python FastAPI.

另一门课要给 City of Ottawa 做一个概念验证 POC：一个 AI chatbot。前期他们没有给我们明确的技术栈，所以一开始我们完全用开源方案来写。前端用的是 React，后端用的是 Python FastAPI。

### The Team

The team had four people; one dropped out last semester, leaving three. A classmate with good English but no software development background replied to emails and worked with the client. The other classmate felt the course load was too heavy and had no time to develop. We had no time to discuss splitting the work, so I did basically all of the early work: the overall architecture, front end and back end, technology selection and functional analysis.

团队一开始有四个人，上学期一个人退了，剩下三个人。一位英语好的同学没有软件开发基础，负责回复邮件和对接客户。另一位同学觉得课程压力比较大，没有时间开发。我们也没有时间讨论分工，所以前期基本上都是我一个人在做：整体架构、前后端开发、技术选型和功能分析。

### Choosing the Components

We chose LlamaIndex, not LangChain. I read LangChain's source code and found it very messy; LlamaIndex was written much more clearly.

我们没有选 LangChain，选的是 LlamaIndex。因为我看了 LangChain 的源代码，写得非常乱，不如 LlamaIndex 清晰。

RAG projects were very popular last year. We used MinerU to scan the PDFs: it identified which parts were titles, body text and images, tagged them and built an index, turning them into text that could be stored in our vector database. That made RAG retrieval and BM25 retrieval straightforward afterwards.

去年 RAG 相关的项目非常火。我们用 MinerU 扫描 PDF，识别出哪些是标题、哪些是正文、哪些是图片，打上标记并建立索引，把它们转成文本，这样就能存进我们的向量数据库。之后再做 RAG 检索和 BM25 检索就比较方便。

I did all of this research by myself. The Chinese-language internet has a very active AI community, so in my free time I kept reading AI news and posts there, learning and researching on my own, and worked these choices out step by step.

这些调研都是我一个人做的。中文互联网的 AI 社区非常活跃，我休息的时候没事就刷相关的 AI 信息，自己学习、自己研究，一点点摸索出了这些方案。

### Moving to Azure

Later, in the next semester, the city required Azure services. The City of Ottawa has a small development team of its own; we shared our code with them, and they added features and fine-tuned it for Azure. The open-source components that had Azure equivalents were replaced with Azure services.

后来到了下学期，他们强制要求用 Azure 相关的服务。City of Ottawa 那边也有一个小的开发团队，我们把之前写的代码分享给他们，他们在我们的基础上加了一些功能，做了微调，用于适配 Azure。可以用 Azure 服务替代的开源组件都被换掉了。

## Reflections

Not written yet.
