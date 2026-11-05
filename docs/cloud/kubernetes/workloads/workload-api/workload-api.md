---
title: "4.5.0 Workload API"
description: "Kubernetes, 4.5.0 Workload API: 4.5.0.1 API structure."
ms.date: 2026-10-31
---

# 4.5.0 Workload API

## Classification

![4.5.0 Workload API: the sections of its page that hold terms, numbered here, each with its terms, in Kubernetes.](media/workloads-workload-api-workload-api.png)

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **4.5.0 Workload API**<br>Workload API | "The `Workload` API resource **defines the scheduling requirements and structure** of **a multi-Pod application**." | `Workload` API 资源**定义调度需求和结构**，面向**一个多 Pod 应用**。 | [The Kubernetes Authors, n.d., "Workload API", para. 1](https://kubernetes.io/docs/concepts/workloads/workload-api/#:~:text=The%20%60Workload%60%20API%20resource%20defines%20the%20scheduling) |
| **4.5.0.1 API structure**<br>API 结构 | "A `Workload` **consists of two fields**: a list of **`PodGroupTemplates`** and **an optional controller reference**." | `Workload` **由两个字段组成**：一个 **`PodGroupTemplates`** 列表和**一个可选的控制器引用**。 | [The Kubernetes Authors, n.d., "API structure", para. 1](https://kubernetes.io/docs/concepts/workloads/workload-api/#:~:text=A%20%60Workload%60%20consists%20of%20two%20fields%3A%20a) |
| **PodGroupTemplates**<br>PodGroupTemplates | "**The `spec.podGroupTemplates` list** defines **the distinct components of your workload**." | **`spec.podGroupTemplates` 列表**定义**工作负载的各个组成部分**。 | [The Kubernetes Authors, n.d., "PodGroupTemplates", para. 1](https://kubernetes.io/docs/concepts/workloads/workload-api/#:~:text=The%20%60spec.podGroupTemplates%60%20list%20defines%20the%20distinct%20components) |
| **CompositePodGroupTemplates**<br>CompositePodGroupTemplates | "**The `spec.compositePodGroupTemplates` field** defines **non-leaf templates** in **a group-template hierarchy tree**." | **`spec.compositePodGroupTemplates` 字段**定义**非叶模板**，位于**组模板层次树**中。 | [The Kubernetes Authors, n.d., "Structure and constraints", para. 1](https://kubernetes.io/docs/concepts/workloads/workload-api/#:~:text=The%20%60spec.compositePodGroupTemplates%60%20field%20defines%20non-leaf%20templates%20in) |

## References

The Kubernetes Authors. (n.d.). *Workload API*. Kubernetes Documentation. Retrieved October 31, 2026, from <https://kubernetes.io/docs/concepts/workloads/workload-api/>
