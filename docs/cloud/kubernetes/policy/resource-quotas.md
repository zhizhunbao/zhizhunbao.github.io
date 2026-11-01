---
title: "9.2 Resource Quotas"
description: "Kubernetes, 9.2 Resource Quotas: 9.2.1 Types of resource quota, 9.2.2 Quota scopes."
ms.date: 2026-10-31
---

# 9.2 Resource Quotas

## Classification

![9.2 Resource Quotas: the sections of its page that hold terms, numbered here, each with its terms, in Kubernetes.](media/policy-resource-quotas.png)

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **9.2 Resource Quotas**<br>资源配额 | (context) "*Resource quotas* are **a tool for administrators to address this concern**." | （语境）*资源配额*是**管理员用来解决这一问题的工具**。 | [The Kubernetes Authors, n.d., "Resource Quotas", para. 2](https://kubernetes.io/docs/concepts/policy/resource-quotas/#:~:text=%2AResource%20quotas%2A%20are%20a%20tool%20for%20administrators) |
| **9.2.1 Types of resource quota**<br>资源配额的类型 | "The ResourceQuota mechanism **lets you enforce different kinds of limits**." | ResourceQuota 机制**让你执行不同种类的限制**。 | [The Kubernetes Authors, n.d., "Types of resource quota", para. 1](https://kubernetes.io/docs/concepts/policy/resource-quotas/#:~:text=The%20ResourceQuota%20mechanism%20lets%20you%20enforce%20different) |
| **Quota for infrastructure resources**<br>基础设施资源配额 | "You can **limit the total sum of [compute resources](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/) that can be requested in a given namespace**." | 你可以**限制在给定命名空间中可请求的[计算资源](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/)总和**。 | [The Kubernetes Authors, n.d., "Quota for infrastructure resources", para. 1](https://kubernetes.io/docs/concepts/policy/resource-quotas/#:~:text=You%20can%20limit%20the%20total%20sum%20of) |
| **Quota for storage**<br>存储配额 | "You can **limit the total sum of [storage](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) for volumes that can be requested in a given namespace**." | 你可以**限制在给定命名空间中可为卷请求的[存储](https://kubernetes.io/docs/concepts/storage/persistent-volumes/)总和**。 | [The Kubernetes Authors, n.d., "Quota for storage", para. 1](https://kubernetes.io/docs/concepts/policy/resource-quotas/#:~:text=You%20can%20limit%20the%20total%20sum%20of) |
| **Quota on object count**<br>对象数量配额 | "You can set quota for ***the total number of one particular [resource](https://kubernetes.io/docs/reference/using-api/api-concepts/#standard-api-terminology) kind* in the Kubernetes API**" | 你可以为 **Kubernetes API 中*某种特定[资源](https://kubernetes.io/docs/reference/using-api/api-concepts/#standard-api-terminology)类型的总数*** 设置配额 | [The Kubernetes Authors, n.d., "Quota on object count", para. 1](https://kubernetes.io/docs/concepts/policy/resource-quotas/#:~:text=You%20can%20set%20quota%20for%20%2Athe%20total) |
| **9.2.2 Quota scopes**<br>配额作用域 | "Each quota can have **an associated set of `scopes`**." | 每个配额都可以有**一组关联的 `scopes`**。 | [The Kubernetes Authors, n.d., "Quota scopes", para. 1](https://kubernetes.io/docs/concepts/policy/resource-quotas/#:~:text=Each%20quota%20can%20have%20an%20associated%20set) |
| **match expressions**<br>匹配表达式 | "You define one or more *match expressions* **that specify an `operators` and, if relevant, a set of `values` to match**." | 你定义一个或多个*匹配表达式*，**指定一个 `operators`，必要时再指定一组要匹配的 `values`**。 | [The Kubernetes Authors, n.d., "Quota scopes", para. 13](https://kubernetes.io/docs/concepts/policy/resource-quotas/#:~:text=You%20define%20one%20or%20more%20%2Amatch%20expressions%2A) |
| **Terminating Pods scope**<br>终止中 Pod 作用域 | (context) "A Pod is considered as *terminating* **if the `.spec.activeDeadlineSeconds` field is set to any number**." | （语境）**如果 `.spec.activeDeadlineSeconds` 字段被设为任意数值**，Pod 就被视为*终止中*。 | [The Kubernetes Authors, n.d., "Terminating Pods scope", para. 2](https://kubernetes.io/docs/concepts/policy/resource-quotas/#:~:text=A%20Pod%20is%20considered%20as%20%2Aterminating%2A%20if) |
| **PriorityClass scope**<br>PriorityClass 作用域 | "A ResourceQuota with a PriorityClass scope **only matches Pods that have a particular [priority class](https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/)**" | 带有 PriorityClass 作用域的 ResourceQuota **只匹配具有特定[优先级类](https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/)的 Pod** | [The Kubernetes Authors, n.d., "PriorityClass scope", para. 1](https://kubernetes.io/docs/concepts/policy/resource-quotas/#:~:text=A%20ResourceQuota%20with%20a%20PriorityClass%20scope%20only) |

## References

The Kubernetes Authors. (n.d.). *Resource Quotas*. Kubernetes Documentation. Retrieved October 31, 2026, from <https://kubernetes.io/docs/concepts/policy/resource-quotas/>
