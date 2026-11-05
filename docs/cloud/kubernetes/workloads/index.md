---
title: "4 Workloads"
description: "Kubernetes, 4 Workloads: 4.0 Workloads, 4.1 Pods, 4.2 Workload Management, 4.3 Managing Workloads, 4.4 Autoscaling Workloads, 4.5 Workload API, 4.6 PodGroup API, 4.7 CompositePodGroup API."
ms.date: 2026-10-31
---

# 4 Workloads

## Classification

![4 Workloads: its pages, numbered here, each with the sections of its page that hold terms, in Kubernetes.](media/workloads.png)

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **4 Workloads**<br>工作负载 | "**A workload** is **an application running on Kubernetes**." | **工作负载**是**运行在 Kubernetes 上的应用程序**。 | [The Kubernetes Authors, n.d.-h, "Workloads", para. 2](https://kubernetes.io/docs/concepts/workloads/#:~:text=A%20workload%20is%20an%20application%20running%20on%20Kubernetes) |
| **[4.0 Workloads](workloads.md)**<br>工作负载 | "**A workload** is **an application running on Kubernetes**." | **工作负载**是**运行在 Kubernetes 上的应用程序**。 | [The Kubernetes Authors, n.d.-h, "Workloads", para. 2](https://kubernetes.io/docs/concepts/workloads/#:~:text=A%20workload%20is%20an%20application%20running%20on%20Kubernetes) |
| **[4.1 Pods](pods/index.md)**<br>Pod | "***Pods*** are **the smallest deployable units of computing** that you can **create and manage in Kubernetes**." | ***Pod*** 是**最小的可部署计算单元**，可供你**在 Kubernetes 中创建和管理**。 | [The Kubernetes Authors, n.d.-e, "Pods", para. 1](https://kubernetes.io/docs/concepts/workloads/pods/#:~:text=%2APods%2A%20are%20the%20smallest%20deployable%20units%20of) |
| **[4.2 Workload Management](controllers/index.md)**<br>工作负载管理 | (context) "Kubernetes provides **several built-in APIs** for **declarative management of your workloads** and the components of those workloads." | （语境）Kubernetes 提供**若干内置 API**，用于**声明式地管理你的工作负载**及其组件。 | [The Kubernetes Authors, n.d.-g, "Workload Management", para. 1](https://kubernetes.io/docs/concepts/workloads/controllers/#:~:text=Kubernetes%20provides%20several%20built-in%20APIs%20for%20declarative) |
| **[4.3 Managing Workloads](management.md)**<br>管理工作负载 | (context) "Kubernetes provides **a number of tools** to help you **manage your application deployment**, including **scaling and updating**." | （语境）Kubernetes 提供**多种工具**，帮助你**管理应用部署**，包括**扩缩容和更新**。 | [The Kubernetes Authors, n.d.-c, "Managing Workloads", para. 1](https://kubernetes.io/docs/concepts/workloads/management/#:~:text=Kubernetes%20provides%20a%20number%20of%20tools%20to) |
| **[4.4 Autoscaling Workloads](autoscaling/index.md)**<br>自动扩缩工作负载 | "With **autoscaling**, you can **automatically update your workloads** in one way or another." | 借助**自动扩缩**，你可以通过某种方式**自动更新工作负载**。 | [The Kubernetes Authors, n.d.-a, "Autoscaling Workloads", para. 1](https://kubernetes.io/docs/concepts/workloads/autoscaling/#:~:text=With%20autoscaling%2C%20you%20can%20automatically%20update%20your) |
| **[4.5 Workload API](workload-api/index.md)**<br>Workload API | "The `Workload` API resource **defines the scheduling requirements and structure** of **a multi-Pod application**." | `Workload` API 资源**定义调度需求和结构**，面向**一个多 Pod 应用**。 | [The Kubernetes Authors, n.d.-f, "Workload API", para. 1](https://kubernetes.io/docs/concepts/workloads/workload-api/#:~:text=The%20%60Workload%60%20API%20resource%20defines%20the%20scheduling) |
| **[4.6 PodGroup API](podgroup-api/index.md)**<br>PodGroup API | (context) "A **PodGroup** is **a runtime object** that represents **a group of Pods scheduled together as a single unit**." | （语境）**PodGroup** 是**一个运行时对象**，代表**作为单个单元一起调度的一组 Pod**。 | [The Kubernetes Authors, n.d.-d, "PodGroup API", para. 3](https://kubernetes.io/docs/concepts/workloads/podgroup-api/#:~:text=A%20PodGroup%20is%20a%20runtime%20object%20that) |
| **[4.7 CompositePodGroup API](compositepodgroup-api/index.md)**<br>CompositePodGroup API | (context) "A **`CompositePodGroup`** is **a runtime object** that represents **a non-leaf node in a multi-level workload hierarchy**." | （语境）**`CompositePodGroup`** 是**一个运行时对象**，代表**多级工作负载层次结构中的非叶节点**。 | [The Kubernetes Authors, n.d.-b, "CompositePodGroup API", para. 3](https://kubernetes.io/docs/concepts/workloads/compositepodgroup-api/#:~:text=A%20%60CompositePodGroup%60%20is%20a%20runtime%20object%20that) |

## References

The Kubernetes Authors. (n.d.-a). *Autoscaling Workloads*. Kubernetes Documentation. Retrieved October 31, 2026, from <https://kubernetes.io/docs/concepts/workloads/autoscaling/>

The Kubernetes Authors. (n.d.-b). *CompositePodGroup API*. Kubernetes Documentation. Retrieved October 31, 2026, from <https://kubernetes.io/docs/concepts/workloads/compositepodgroup-api/>

The Kubernetes Authors. (n.d.-c). *Managing Workloads*. Kubernetes Documentation. Retrieved October 31, 2026, from <https://kubernetes.io/docs/concepts/workloads/management/>

The Kubernetes Authors. (n.d.-d). *PodGroup API*. Kubernetes Documentation. Retrieved October 31, 2026, from <https://kubernetes.io/docs/concepts/workloads/podgroup-api/>

The Kubernetes Authors. (n.d.-e). *Pods*. Kubernetes Documentation. Retrieved October 31, 2026, from <https://kubernetes.io/docs/concepts/workloads/pods/>

The Kubernetes Authors. (n.d.-f). *Workload API*. Kubernetes Documentation. Retrieved October 31, 2026, from <https://kubernetes.io/docs/concepts/workloads/workload-api/>

The Kubernetes Authors. (n.d.-g). *Workload Management*. Kubernetes Documentation. Retrieved October 31, 2026, from <https://kubernetes.io/docs/concepts/workloads/controllers/>

The Kubernetes Authors. (n.d.-h). *Workloads*. Kubernetes Documentation. Retrieved October 31, 2026, from <https://kubernetes.io/docs/concepts/workloads/>
