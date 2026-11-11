---
title: "1.2 Capabilities"
description: "Ollama: 1.2 Capabilities, 9 pages."
ms.date: 2026-11-08
---

# 1.2 Capabilities

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **1.2 Capabilities**<br>能力 | (No definition) | （无定义） | [Ollama, n.d., "Capabilities"](https://docs.ollama.com/capabilities/streaming) |
| **[1.2.1 Streaming](1-2-1-streaming.md)**<br>流式传输 | "Streaming allows you to **render text** as **it is produced by the model**." | 流式传输让你能够**渲染文本**，随着**模型生成内容**同步显示。 | [Ollama, n.d., "Streaming", para. 1](https://docs.ollama.com/capabilities/streaming) |
| **[1.2.2 Thinking](1-2-2-thinking.md)**<br>思考 | "Thinking-capable models emit a `thinking` field that **separates their reasoning trace** from **the final answer**." | 支持思考的模型会输出 `thinking` 字段，用于**分离其推理过程**与**最终答案**。 | [Ollama, n.d., "Thinking", para. 1](https://docs.ollama.com/capabilities/thinking) |
| **[1.2.3 Structured Outputs](1-2-3-structured-outputs.md)**<br>结构化输出 | "Structured outputs let you **enforce a JSON schema** on **model responses** so you can reliably extract structured data, describe images, or keep every reply consistent." | 结构化输出让你能够**强制使用 JSON schema** 来约束**模型响应**，从而可靠地提取结构化数据、描述图像或保持每次回复一致。 | [Ollama, n.d., "Structured Outputs", para. 1](https://docs.ollama.com/capabilities/structured-outputs) |
| **[1.2.4 Decision](1-2-4-decision.md)**<br>判定 | (context) "Use **System One** to **classify text, answer yes/no questions, or score text against a rubric**." | （语境）使用 **System One** 来**对文本分类、回答是非问题，或按评分标准给文本打分**。 | [Ollama, n.d., "Decision", para. 1](https://docs.ollama.com/capabilities/decision) |
| **[1.2.5 Vision](1-2-5-vision.md)**<br>视觉 | "Vision models **accept images alongside text** so the model can **describe, classify, and answer questions about what it sees**." | 视觉模型**同时接受图像和文本**，使模型能够**描述、分类并回答关于所见内容的问题**。 | [Ollama, n.d., "Vision", para. 1](https://docs.ollama.com/capabilities/vision) |
| **[1.2.6 Embeddings](1-2-6-embeddings.md)**<br>嵌入 | "Embeddings turn text into **numeric vectors** you can **store in a vector database, search with cosine similarity, or use in RAG pipelines**." | 嵌入将文本转换为**数值向量**，你可以**存入向量数据库、用余弦相似度搜索，或用于 RAG 流水线**。 | [Ollama, n.d., "Embeddings", para. 1](https://docs.ollama.com/capabilities/embeddings) |
| **[1.2.7 Speech](1-2-7-speech.md)**<br>语音 | "Speech models **read text aloud**." | 语音模型**朗读文本**。 | [Ollama, n.d., "Speech", para. 1](https://docs.ollama.com/capabilities/speech) |
| **[1.2.8 Tool Calling](1-2-8-tool-calling.md)**<br>工具调用 | "Ollama supports tool calling (also known as function calling) which allows a model to **invoke tools** and **incorporate their results into its replies**." | Ollama 支持工具调用（也称函数调用），使模型能够**调用工具**并**将结果纳入回复**。 | [Ollama, n.d., "Tool Calling", para. 1](https://docs.ollama.com/capabilities/tool-calling) |
| **[1.2.9 Web Search](1-2-9-web-search.md)**<br>网页搜索 | "Ollama’s web search API can be used to **augment models with the latest information** to **reduce hallucinations and improve accuracy**." | Ollama 的网页搜索 API 可用于**用最新信息增强模型**，以**减少幻觉并提高准确性**。 | [Ollama, n.d., "Web Search", para. 1](https://docs.ollama.com/capabilities/web-search) |

## References

Ollama. (n.d.). *Ollama documentation*. Retrieved November 8, 2026, from <https://docs.ollama.com/>
