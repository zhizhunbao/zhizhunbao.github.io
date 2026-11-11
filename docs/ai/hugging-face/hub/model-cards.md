---
title: "Model Cards"
description: "Hub, Model Cards: what a model card holds and the metadata that shows the base model, license and evaluation results; terms quoted from the Hub documentation."
ms.date: 2026-11-10
---

# Model Cards

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **Model Card**<br>模型卡 | "Model cards are **files that accompany the models** and provide **handy information**." | 模型卡是**伴随模型的文件**，提供**便利的信息**。 | [Hugging Face, n.d., "What are Model Cards?", para. 1](https://huggingface.co/docs/hub/model-cards#what-are-model-cards) |
| **Intended Uses and Limitations**<br>预期用途与局限 | (context) "its **intended uses & potential limitations**, including **biases and ethical considerations** as detailed in Mitchell, 2018" | （语境）它的**预期用途与潜在局限**，包括 Mitchell（2018）所详述的**偏见与伦理考量**。 | [Hugging Face, n.d., "What are Model Cards?", list item 2](https://huggingface.co/docs/hub/model-cards#what-are-model-cards) |
| **Model Card Metadata**<br>模型卡元数据 | (context) "The model card is **a Markdown file**, with **a YAML section at the top** that contains metadata about the model." | （语境）模型卡是**一个 Markdown 文件**，**顶部有一个 YAML 段**，存放关于模型的元数据。 | [Hugging Face, n.d., "Model card metadata", para. 1](https://huggingface.co/docs/hub/model-cards#model-card-metadata) |
| **Library Name**<br>库名称 | (context) "You can specify **the supported libraries** in **the model card metadata section**." | （语境）你可以指定**支持的库**，写在**模型卡的元数据段**里。 | [Hugging Face, n.d., "Specifying a library", para. 1](https://huggingface.co/docs/hub/model-cards#specifying-a-library) |
| **Base Model**<br>基础模型 | (context) "If your model is **a fine-tune, an adapter, or a quantized version** of a base model, you can specify the base model in **the model card metadata section**." | （语境）如果你的模型是某个基础模型的**微调版、适配器或量化版**，你可以在**模型卡的元数据段**里指定这个基础模型。 | [Hugging Face, n.d., "Specifying a base model", para. 1](https://huggingface.co/docs/hub/model-cards#specifying-a-base-model) |
| **New Version**<br>新版本 | (context) "If **a new version of your model** is available in the Hub, you can specify it in **a `new_version` field**." | （语境）如果 Hub 上有**你的模型的新版本**，你可以在 **`new_version` 字段**里指明它。 | [Hugging Face, n.d., "Specifying a new version", para. 1](https://huggingface.co/docs/hub/model-cards#specifying-a-new-version) |
| **License**<br>许可证 | (context) "The license will be **displayed on the model page** and users will be able to **filter models by license**." | （语境）许可证会**显示在模型页面上**，用户可以**按许可证筛选模型**。 | [Hugging Face, n.d., "Specifying a license", para. 1](https://huggingface.co/docs/hub/model-cards#specifying-a-license) |
| **Model Card Evaluation Results**<br>模型卡评测结果 | (context) "You can specify your **model’s evaluation results** in a structured way in the model card metadata. Results are parsed by the Hub and **displayed in a widget on the model page**." | （语境）你可以在模型卡元数据里以结构化的方式写明**模型的评测结果**。Hub 会解析这些结果，并**以小部件显示在模型页面上**。 | [Hugging Face, n.d., "Evaluation Results", para. 1](https://huggingface.co/docs/hub/model-cards#evaluation-results) |
| **model-index**<br>model-index | (context) "The **initial metadata spec** was based on **Papers with code’s model-index specification**." | （语境）**最初的元数据规范**基于 **Papers with Code 的 model-index 规范**。 | [Hugging Face, n.d., "Evaluation Results", para. 2](https://huggingface.co/docs/hub/model-cards#evaluation-results) |
| **Model Card Text**<br>模型卡正文 | (context) "Details on how to fill out **the human-readable portion of the model card** (so that it may be printed out, cut+pasted, etc.) is available in **the Annotated Model Card**." | （语境）如何填写**模型卡中给人阅读的部分**（以便打印、剪贴等），详见**带注释的模型卡**。 | [Hugging Face, n.d., "Model Card text", para. 1](https://huggingface.co/docs/hub/model-cards#model-card-text) |

## References

Hugging Face. (n.d.). Model cards. In *Hugging Face Hub documentation*. Retrieved November 10, 2026, from <https://huggingface.co/docs/hub/model-cards>
