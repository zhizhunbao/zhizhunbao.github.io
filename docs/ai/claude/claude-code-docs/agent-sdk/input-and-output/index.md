---
title: "7.3 Input and Output"
description: "Claude Code Docs: 7.3 Input and Output, 4 entries; definitions in this site's own words."
ms.date: 2026-11-08
---

# 7.3 Input and Output

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **7.3 Input and Output**<br>输入与输出 | (Summary) How **messages reach the agent** and **results come back**, streamed or structured. | （概述）**消息如何传给代理**、**结果如何返回**，可以是流式或结构化的。 | [Anthropic, n.d., "Input and Output"](https://code.claude.com/docs/en/agent-sdk/streaming-vs-single-mode) |
| **[7.3.1 Streaming Input](7-3-1-streaming-input.md)**<br>流式输入 | (Summary) The **long-lived, interactive way of sending messages** to an agent, as opposed to **one-shot queries**. | （概述）向代理发送消息的**长期交互方式**，区别于**一次性查询**。 | [Anthropic, n.d., "Streaming Input"](https://code.claude.com/docs/en/agent-sdk/streaming-vs-single-mode) |
| **[7.3.2 Approvals and User Input](7-3-2-handle-approvals-and-user-input.md)**<br>审批与用户输入 | (Summary) The **points where an agent pauses for a person**, either to **approve a tool or answer a question**. | （概述）**代理暂停等待人工**的时刻，用于**批准工具调用或回答问题**。 | [Anthropic, n.d., "Handle Approvals and User Input"](https://code.claude.com/docs/en/agent-sdk/user-input) |
| **[7.3.3 Output Streaming](7-3-3-stream-responses-in-real-time.md)**<br>输出流 | (Summary) An option that **delivers text and tool calls in pieces** as they are generated, rather than **one finished block at a time**. | （概述）一个选项，**分段传送文本和工具调用**，而不是**每次传送一个完整的内容块**。 | [Anthropic, n.d., "Stream Responses in Real-Time"](https://code.claude.com/docs/en/agent-sdk/streaming-output) |
| **[7.3.4 Structured Outputs](7-3-4-get-structured-output-from-agents.md)**<br>结构化输出 | (Summary) Results **checked against a JSON Schema you supply**, with the agent **asked again if they do not match**. | （概述）**按你提供的 JSON Schema 校验**的结果，**不匹配时会要求代理重新生成**。 | [Anthropic, n.d., "Get Structured Output from Agents"](https://code.claude.com/docs/en/agent-sdk/structured-outputs) |

## References

Anthropic. (n.d.). *Claude Code Docs*. Retrieved November 8, 2026, from <https://code.claude.com/docs/en/overview>
