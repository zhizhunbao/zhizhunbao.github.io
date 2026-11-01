---
title: "5.5 EndpointSlices"
description: "Kubernetes, 5.5 EndpointSlices: 5.5.1 EndpointSlice API."
ms.date: 2026-10-31
---

# 5.5 EndpointSlices

## Classification

![5.5 EndpointSlices: the sections of its page that hold terms, numbered here, each with its terms, in Kubernetes.](media/services-networking-endpoint-slices.png)

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **5.5 EndpointSlices**<br>EndpointSlice | "In Kubernetes, an EndpointSlice **contains references to a set of network endpoints**." | 在 Kubernetes 中，EndpointSlice **包含对一组网络端点的引用**。 | [The Kubernetes Authors, n.d., "EndpointSlice API", para. 1](https://kubernetes.io/docs/concepts/services-networking/endpoint-slices/#:~:text=In%20Kubernetes%2C%20an%20EndpointSlice%20contains%20references%20to) |
| **5.5.1 EndpointSlice API**<br>EndpointSlice API | (No definition) | （无定义） | [The Kubernetes Authors, n.d., "EndpointSlice API"](https://kubernetes.io/docs/concepts/services-networking/endpoint-slices/#endpointslice-api) |
| **Address types**<br>地址类型 | "EndpointSlices **support two address types**:" | EndpointSlice **支持两种地址类型**： | [The Kubernetes Authors, n.d., "Address types", para. 1](https://kubernetes.io/docs/concepts/services-networking/endpoint-slices/#:~:text=EndpointSlices%20support%20two%20address%20types%3A) |
| **Serving**<br>Serving | "The `serving` condition **indicates that the endpoint is currently serving responses**, and so it should be used as a target for Service traffic." | `serving` 状况**表示端点当前正在提供响应**，因此应把它用作 Service 流量的目标。 | [The Kubernetes Authors, n.d., "Serving", para. 1](https://kubernetes.io/docs/concepts/services-networking/endpoint-slices/#:~:text=The%20%60serving%60%20condition%20indicates%20that%20the%20endpoint) |
| **Terminating**<br>Terminating | "The `terminating` condition **indicates that the endpoint is terminating**." | `terminating` 状况**表示端点正在终止**。 | [The Kubernetes Authors, n.d., "Terminating", para. 1](https://kubernetes.io/docs/concepts/services-networking/endpoint-slices/#:~:text=The%20%60terminating%60%20condition%20indicates%20that%20the%20endpoint) |
| **Ready**<br>Ready | "The `ready` condition is **essentially a shortcut for checking "`serving` and not `terminating`"**" | `ready` 状况**本质上是检查“`serving` 且非 `terminating`”的简写** | [The Kubernetes Authors, n.d., "Ready", para. 1](https://kubernetes.io/docs/concepts/services-networking/endpoint-slices/#:~:text=The%20%60ready%60%20condition%20is%20essentially%20a%20shortcut) |
| **EndpointSlice mirroring**<br>EndpointSlice 镜像 | (context) "The EndpointSlice API is **a replacement for the older Endpoints API**." | （语境）EndpointSlice API 是**旧版 Endpoints API 的替代品**。 | [The Kubernetes Authors, n.d., "EndpointSlice mirroring", para. 1](https://kubernetes.io/docs/concepts/services-networking/endpoint-slices/#:~:text=The%20EndpointSlice%20API%20is%20a%20replacement%20for) |

## References

The Kubernetes Authors. (n.d.). *EndpointSlices*. Kubernetes Documentation. Retrieved October 31, 2026, from <https://kubernetes.io/docs/concepts/services-networking/endpoint-slices/>
