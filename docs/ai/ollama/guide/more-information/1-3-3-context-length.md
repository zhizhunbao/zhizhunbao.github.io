---
title: "1.3.3 Context Length"
description: "Ollama, 1. Guide: 1.3.3 Context Length; terms quoted from the documentation."
ms.date: 2026-11-10
---

# 1.3.3 Context Length

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **Context Length**<br>上下文长度 | "Context length is **the maximum number of tokens** that **the model has access to in memory**." | 上下文长度是**令牌的最大数量**，即**模型在内存中可访问的数量**。 | [Ollama, n.d., "Context Length", para. 1](https://docs.ollama.com/context-length) |
| **Default Context Length**<br>默认上下文长度 | (context) "**Ollama defaults** to the following context lengths **based on VRAM**: &lt; 24 GiB VRAM: 4k context; 24-48 GiB VRAM: 32k context; &gt;= 48 GiB VRAM: 256k context" | （语境）**Ollama 默认**采用以下上下文长度，**依据显存而定**：显存小于 24 GiB 为 4k 上下文；24 至 48 GiB 为 32k 上下文；不少于 48 GiB 为 256k 上下文。 | [Ollama, n.d., "Context Length", para. 1 and list](https://docs.ollama.com/context-length) |
| **Setting Context Length**<br>设置上下文长度 | (context) "Setting a larger context length will **increase the amount of memory** required to run a model. Ensure you have **enough VRAM available** to increase the context length." | （语境）设置更大的上下文长度会**增加所需的内存量**，即运行模型所需的内存。要增大上下文长度，请确保有**足够的可用显存**。 | [Ollama, n.d., "Context Length", "Setting context length", para. 1](https://docs.ollama.com/context-length) |
| **Model Offloading**<br>模型卸载 | (context) "For best performance, use **the maximum context length** for a model, and **avoid offloading the model to CPU**. Verify the split under `PROCESSOR` using `ollama ps`." | （语境）要获得最佳性能，请使用模型的**最大上下文长度**，并**避免把模型卸载到 CPU**。用 `ollama ps` 查看 `PROCESSOR` 一栏的分配比例。 | [Ollama, n.d., "Context Length", "Check allocated context length and model offloading", para. 1](https://docs.ollama.com/context-length) |

## References

Ollama. (n.d.). *Ollama documentation*. Retrieved November 8, 2026, from <https://docs.ollama.com/>
