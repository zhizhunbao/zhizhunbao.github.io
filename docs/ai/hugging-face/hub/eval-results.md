---
title: "Eval Results"
description: "Hub, Eval Results: benchmark datasets, evaluation scores stored in model repos, and the verified, community, leaderboard and source badges; terms quoted from the Hub documentation."
ms.date: 2026-11-10
---

# Eval Results

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **Evaluation Results**<br>评测结果 | "The Hub provides **a decentralized system** for **tracking model evaluation results**." | Hub 提供**一个去中心化的系统**，用于**跟踪模型评测结果**。 | [Hugging Face, n.d., "Evaluation Results", para. 1](https://huggingface.co/docs/hub/eval-results#evaluation-results) |
| **Benchmark**<br>基准 | (context) "These display **a “Benchmark” tag** and automatically aggregate evaluation results from model repos across the Hub and **display a leaderboard of top models**." | （语境）它们显示 **Benchmark 标签**，自动汇总 Hub 上各模型仓库的评测结果，并**显示顶尖模型的排行榜**。 | [Hugging Face, n.d., "Benchmark Datasets", para. 1](https://huggingface.co/docs/hub/eval-results#benchmark-datasets) |
| **.eval_results Folder**<br>.eval_results 文件夹 | (context) "Evaluation scores are stored in model repos as **YAML files** in **the `.eval_results/` folder**." | （语境）评测分数以 **YAML 文件**的形式存放在模型仓库的 **`.eval_results/` 文件夹**里。 | [Hugging Face, n.d., "Model Evaluation Results", para. 1](https://huggingface.co/docs/hub/eval-results#model-evaluation-results) |
| **verifyToken**<br>verifyToken | (context) "**Cryptographic proof** of **auditable evaluation**" | （语境）**密码学证明**，证明这是**可审计的评测**。 | [Hugging Face, n.d., "Adding Evaluation Results", YAML example](https://huggingface.co/docs/hub/eval-results#adding-evaluation-results) |
| **Verified Badge**<br>已验证徽章 | (context) "A **verifyToken is valid** (evaluation ran in **HF Jobs with inspect-ai**)" | （语境）**verifyToken 有效**（评测在**带 inspect-ai 的 HF Jobs** 中运行）。 | [Hugging Face, n.d., "Adding Evaluation Results", badge table, verified](https://huggingface.co/docs/hub/eval-results#adding-evaluation-results) |
| **Community Badge**<br>社区徽章 | (context) "Result submitted via **open PR** (**not merged** to main)" | （语境）结果通过**未关闭的 PR** 提交（**未合并**到 main）。 | [Hugging Face, n.d., "Adding Evaluation Results", badge table, community](https://huggingface.co/docs/hub/eval-results#adding-evaluation-results) |
| **Leaderboard Badge**<br>排行榜徽章 | (context) "**Links** to **the benchmark dataset**" | （语境）**链接**到**基准数据集**。 | [Hugging Face, n.d., "Adding Evaluation Results", badge table, leaderboard](https://huggingface.co/docs/hub/eval-results#adding-evaluation-results) |
| **Source Badge**<br>来源徽章 | (context) "Links to **evaluation logs** or **external source**" | （语境）链接到**评测日志**或**外部来源**。 | [Hugging Face, n.d., "Adding Evaluation Results", badge table, source](https://huggingface.co/docs/hub/eval-results#adding-evaluation-results) |
| **Community Contributions**<br>社区贡献 | (context) "Anyone can submit **evaluation results** to **any model** via Pull Request" | （语境）任何人都可以通过拉取请求提交**评测结果**，对象可以是**任何模型**。 | [Hugging Face, n.d., "Community Contributions", para. 1](https://huggingface.co/docs/hub/eval-results#community-contributions) |
| **Disputed Score**<br>有争议的分数 | (context) "If **a score is disputed**, the model author can **close the PR to remove it**." | （语境）如果**某个分数有争议**，模型作者可以**关闭该 PR 来移除它**。 | [Hugging Face, n.d., "Community Contributions", note](https://huggingface.co/docs/hub/eval-results#community-contributions) |
| **Hiding Models from a Leaderboard**<br>从排行榜隐藏模型 | (context) "Benchmark maintainers can **hide a model from their leaderboard**, for instance if they **dispute its reported results**" | （语境）基准维护者可以**把某个模型从其排行榜上隐藏**，例如当他们**对其报告的结果有异议**时。 | [Hugging Face, n.d., "Hiding Models from a Leaderboard", para. 1](https://huggingface.co/docs/hub/eval-results#hiding-models-from-a-leaderboard) |
| **eval.yaml**<br>eval.yaml | (context) "Add **an `eval.yaml` file** to the repo root with **your benchmark configuration**" | （语境）在仓库根目录添加**一个 `eval.yaml` 文件**，写入**你的基准配置**。 | [Hugging Face, n.d., "Registering a Benchmark", list item 2](https://huggingface.co/docs/hub/eval-results#registering-a-benchmark) |
| **Benchmark Task**<br>基准任务 | (context) "A single benchmark can define **several tasks**, each producing **its own leaderboard**." | （语境）一个基准可以定义**多个任务**，每个任务产生**自己的排行榜**。 | [Hugging Face, n.d., "Eval.yaml specification", tasks, id](https://huggingface.co/docs/hub/eval-results#evalyaml-specification) |

## References

Hugging Face. (n.d.). Evaluation results. In *Hugging Face Hub documentation*. Retrieved November 10, 2026, from <https://huggingface.co/docs/hub/eval-results>
