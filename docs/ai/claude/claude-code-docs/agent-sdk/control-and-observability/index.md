---
title: "7.6 Control and Observability"
description: "Claude Code Docs: 7.6 Control and Observability, 6 entries; definitions in this site's own words."
ms.date: 2026-11-08
---

# 7.6 Control and Observability

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **7.6 Control and Observability**<br>控制与可观测性 | (Summary) How to **limit what an agent may do** and **see what it did**. | （概述）如何**限制代理能做的事**，并**查看它做了什么**。 | [Anthropic, n.d., "Control and Observability"](https://code.claude.com/docs/en/agent-sdk/permissions) |
| **[7.6.1 Permissions](7-6-1-configure-permissions.md)**<br>权限 | (Summary) The **modes, rules and callback** that **decide which tool calls may run**. | （概述）**模式、规则和回调**，它们**决定哪些工具调用可以执行**。 | [Anthropic, n.d., "Configure Permissions"](https://code.claude.com/docs/en/agent-sdk/permissions) |
| **[7.6.2 Hooks](7-6-2-intercept-and-control-agent-behavior-with-hooks.md)**<br>钩子 | (Summary) **Your own callbacks triggered by agent events**, used to **block, log or rewrite actions**. | （概述）**由代理事件触发的自定义回调**，用于**拦截、记录或改写操作**。 | [Anthropic, n.d., "Intercept and Control Agent Behavior with Hooks"](https://code.claude.com/docs/en/agent-sdk/hooks) |
| **[7.6.3 File Checkpointing](7-6-3-rewind-file-changes-with-checkpointing.md)**<br>文件检查点 | (Summary) A record of **edits made through file tools**, from which you can **restore earlier versions**; shell edits are not covered. | （概述）对**通过文件工具所做修改**的记录，可以**恢复到之前的版本**；shell 命令的修改不在其内。 | [Anthropic, n.d., "Rewind File Changes with Checkpointing"](https://code.claude.com/docs/en/agent-sdk/file-checkpointing) |
| **[7.6.4 Cost and Usage Tracking](7-6-4-track-cost-and-usage.md)**<br>成本与用量跟踪 | (Summary) The **token figures reported for each interaction**, plus a cost that is **only an estimate on the client side**. | （概述）**每次交互报告的令牌数**，以及**仅为客户端估算**的费用。 | [Anthropic, n.d., "Track Cost and Usage"](https://code.claude.com/docs/en/agent-sdk/cost-tracking) |
| **[7.6.5 Observability with OpenTelemetry](7-6-5-observability-with-opentelemetry.md)**<br>用 OpenTelemetry 实现可观测性 | (Summary) Export of an agent's **traces, metrics and logs** to **any OTLP-compatible backend**. | （概述）把代理的**追踪、指标和日志**导出到**任何兼容 OTLP 的后端**。 | [Anthropic, n.d., "Observability with OpenTelemetry"](https://code.claude.com/docs/en/agent-sdk/observability) |
| **[7.6.6 Todo Tracking](7-6-6-track-todos.md)**<br>待办跟踪 | (Summary) A **written task list kept by Claude** during multi-step work, **offered only on certain models**. | （概述）Claude 在多步骤工作中**维护的书面任务清单**，**仅部分模型提供**。 | [Anthropic, n.d., "Track Todos"](https://code.claude.com/docs/en/agent-sdk/todo-tracking) |

## References

Anthropic. (n.d.). *Claude Code Docs*. Retrieved November 8, 2026, from <https://code.claude.com/docs/en/overview>
