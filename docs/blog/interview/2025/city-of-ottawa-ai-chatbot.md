---
title: "Interview: The City of Ottawa AI Chatbot"
description: "The interview version of the City of Ottawa AI chatbot: problem, what I did, result and the questions it answers."
ms.date: 2026-11-06
---

# Interview: The City of Ottawa AI Chatbot

The full story is in [The City of Ottawa AI Chatbot](../../projects/2025/city-of-ottawa-ai-chatbot.md).

## Interview Version

| Step | Description | 中文翻译 |
|---|---|---|
| **Problem** | In another course, my team built a **proof-of-concept AI chatbot** for the City of Ottawa. We started with four people, and one left. A classmate with strong English handled the emails and the client, so in practice **I was the only one developing**. | 在另一门课上，我们团队给 City of Ottawa 做了一个 **AI 聊天机器人概念验证**。团队一开始四个人，后来走了一个。一位英语好的同学负责邮件和对接客户，所以实际上**只有我一个人在开发**。 |
| **What I did** | I owned the **architecture**, the front end and back end, and the **technology choices**. I used React and Python FastAPI. For the RAG part, I compared LangChain and LlamaIndex. I **read their source code** and chose LlamaIndex because it was much cleaner. I used MinerU to parse PDFs into titles, text and images, stored them in a vector database, and used **hybrid search**, vector plus BM25. | 我负责**整体架构**、前端和后端，以及**技术选型**。我用了 React 和 Python FastAPI。RAG 部分我比较了 LangChain 和 LlamaIndex，**读了它们的源代码**，选了写得清楚得多的 LlamaIndex。我用 MinerU 把 PDF 解析成标题、正文和图片，存进向量数据库，并用了向量检索加 BM25 的**混合检索**。 |
| **Result** | My open-source version could already answer questions with RAG. The **City's development team** continued from my code, and my team built the two hardest parts: **locating answers in the PDF** down to the exact paragraph, line and words, and **generating charts** for answers about data. I later rebuilt it on Payload and presented it at **HUBBUB 2026** at the University of Ottawa. | 我的开源版本已经能做 RAG 问答。**市政府的开发团队**在我的代码基础上接着做，最难的两部分由我们做：**在 PDF 里定位答案**，精确到哪一段、哪一行、哪几个字，以及给数据类的回答**生成图表**。后来我又基于 Payload 重写了一版，在 University of Ottawa 的 **HUBBUB 2026** 上展示。 |
| **Answers** | Questions about **teamwork**, leadership, **technical decisions** and changing requirements. | 用来回答关于**团队合作**、领导力、**技术决策**和需求变化的提问。 |
