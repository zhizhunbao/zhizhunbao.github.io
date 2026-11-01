---
title: "6.10 CSI Volume Cloning"
description: "Kubernetes, 6.10 CSI Volume Cloning."
ms.date: 2026-10-31
---

# 6.10 CSI Volume Cloning

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **6.10 CSI Volume Cloning**<br>CSI 卷克隆 | "The [CSI](https://kubernetes.io/docs/concepts/storage/volumes/#csi) Volume Cloning feature **adds support for specifying existing [PVC](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims)s in the `dataSource` field to indicate a user would like to clone a [Volume](https://kubernetes.io/docs/concepts/storage/volumes/)**." | [CSI](https://kubernetes.io/docs/concepts/storage/volumes/#csi) 卷克隆功能**支持在 `dataSource` 字段中指定现有的 [PVC](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims)，表示用户想要克隆一个[卷](https://kubernetes.io/docs/concepts/storage/volumes/)**。 | [The Kubernetes Authors, n.d., "Introduction", para. 1](https://kubernetes.io/docs/concepts/storage/volume-pvc-datasource/#:~:text=The%20%5BCSI%5D%28https%3A%2F%2Fkubernetes.io%2Fdocs%2Fconcepts%2Fstorage%2Fvolumes%2F%23csi%29%20Volume%20Cloning%20feature%20adds%20support) |

## References

The Kubernetes Authors. (n.d.). *CSI Volume Cloning*. Kubernetes Documentation. Retrieved October 31, 2026, from <https://kubernetes.io/docs/concepts/storage/volume-pvc-datasource/>
