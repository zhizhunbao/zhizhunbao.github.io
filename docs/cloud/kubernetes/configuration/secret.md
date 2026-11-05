---
title: "7.2 Secrets"
description: "Kubernetes, 7.2 Secrets: 7.2.1 Types of Secret, 7.2.2 Working with Secrets, 7.2.3 Immutable Secrets."
ms.date: 2026-10-31
---

# 7.2 Secrets

## Classification

![7.2 Secrets: the sections of its page that hold terms, numbered here, each with its terms, in Kubernetes.](media/configuration-secret.png)

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **7.2 Secrets**<br>Secret | "**A Secret** is an object that contains **a small amount of sensitive data** such as **a password, a token, or a key**." | **Secret** 是一个对象，包含**少量敏感数据**，例如**密码、令牌或密钥**。 | [The Kubernetes Authors, n.d., "Secrets", para. 1](https://kubernetes.io/docs/concepts/configuration/secret/#:~:text=A%20Secret%20is%20an%20object%20that%20contains) |
| **7.2.1 Types of Secret**<br>Secret 的类型 | (No definition) | （无定义） | [The Kubernetes Authors, n.d., "Types of Secret"](https://kubernetes.io/docs/concepts/configuration/secret/#types-of-secret) |
| **Opaque Secrets**<br>Opaque Secret | "**`Opaque`** is **the default Secret type** if you **don't explicitly specify a type** in a Secret manifest." | **`Opaque`** 是**默认的 Secret 类型**，用于你**未显式指定类型**的 Secret 清单。 | [The Kubernetes Authors, n.d., "Opaque Secrets", para. 1](https://kubernetes.io/docs/concepts/configuration/secret/#:~:text=%60Opaque%60%20is%20the%20default%20Secret%20type%20if) |
| **ServiceAccount token Secrets**<br>ServiceAccount 令牌 Secret | "**A `kubernetes.io/service-account-token` type of Secret** is used to **store a token credential** that **identifies a ServiceAccount**." | **`kubernetes.io/service-account-token` 类型的 Secret** 用于**存储令牌凭据**，它**标识某个 ServiceAccount**。 | [The Kubernetes Authors, n.d., "ServiceAccount token Secrets", para. 1](https://kubernetes.io/docs/concepts/configuration/secret/#:~:text=A%20%60kubernetes.io%2Fservice-account-token%60%20type%20of%20Secret%20is%20used) |
| **Docker config Secrets**<br>Docker 配置 Secret | (context) "If you are creating a Secret to **store credentials for accessing a container image registry**, you must use **one of the following `type` values** for that Secret:" | （语境）如果你创建 Secret 来**存储访问容器镜像仓库的凭据**，必须为该 Secret 使用**以下 `type` 值之一**： | [The Kubernetes Authors, n.d., "Docker config Secrets", para. 1](https://kubernetes.io/docs/concepts/configuration/secret/#:~:text=If%20you%20are%20creating%20a%20Secret%20to) |
| **Basic authentication Secret**<br>基本认证 Secret | "**The `kubernetes.io/basic-auth` type** is provided for **storing credentials** needed for **basic authentication**." | **`kubernetes.io/basic-auth` 类型**用于**存储凭据**，供**基本认证**所需。 | [The Kubernetes Authors, n.d., "Basic authentication Secret", para. 1](https://kubernetes.io/docs/concepts/configuration/secret/#:~:text=The%20%60kubernetes.io%2Fbasic-auth%60%20type%20is%20provided%20for%20storing) |
| **SSH authentication Secrets**<br>SSH 认证 Secret | "**The builtin type `kubernetes.io/ssh-auth`** is provided for **storing data** used in **SSH authentication**." | **内置类型 `kubernetes.io/ssh-auth`** 用于**存储数据**，供 **SSH 认证**使用。 | [The Kubernetes Authors, n.d., "SSH authentication Secrets", para. 1](https://kubernetes.io/docs/concepts/configuration/secret/#:~:text=The%20builtin%20type%20%60kubernetes.io%2Fssh-auth%60%20is%20provided%20for) |
| **TLS Secrets**<br>TLS Secret | "**The `kubernetes.io/tls` Secret type** is for storing **a certificate and its associated key** that are **typically used for TLS**." | **`kubernetes.io/tls` Secret 类型**用于存储**证书及其关联的密钥**，它们**通常用于 TLS**。 | [The Kubernetes Authors, n.d., "TLS Secrets", para. 1](https://kubernetes.io/docs/concepts/configuration/secret/#:~:text=The%20%60kubernetes.io%2Ftls%60%20Secret%20type%20is%20for%20storing) |
| **Bootstrap token Secrets**<br>启动引导令牌 Secret | "**The `bootstrap.kubernetes.io/token` Secret type** is for **tokens** used during **the node bootstrap process**." | **`bootstrap.kubernetes.io/token` Secret 类型**用于**令牌**，这些令牌用于**节点启动引导过程**。 | [The Kubernetes Authors, n.d., "Bootstrap token Secrets", para. 1](https://kubernetes.io/docs/concepts/configuration/secret/#:~:text=The%20%60bootstrap.kubernetes.io%2Ftoken%60%20Secret%20type%20is%20for%20tokens) |
| **7.2.2 Working with Secrets**<br>使用 Secret | (No definition) | （无定义） | [The Kubernetes Authors, n.d., "Working with Secrets"](https://kubernetes.io/docs/concepts/configuration/secret/#working-with-secrets) |
| **Optional Secrets**<br>可选 Secret | "When you **reference a Secret in a Pod**, you can **mark the Secret as *optional***, such as in the following example." | **在 Pod 中引用 Secret** 时，你可以**把它标记为可选**，如下例所示。 | [The Kubernetes Authors, n.d., "Optional Secrets", para. 1](https://kubernetes.io/docs/concepts/configuration/secret/#:~:text=When%20you%20reference%20a%20Secret%20in%20a) |
| **image pull Secrets**<br>镜像拉取 Secret | (context) "You can **configure *image pull Secrets*** to **make this possible**." | （语境）你可以**配置镜像拉取 Secret** 来**实现这一点**。 | [The Kubernetes Authors, n.d., "Container image pull Secrets", para. 1](https://kubernetes.io/docs/concepts/configuration/secret/#:~:text=You%20can%20configure%20%2Aimage%20pull%20Secrets%2A%20to) |
| **7.2.3 Immutable Secrets**<br>不可变 Secret | "Kubernetes lets you **mark specific Secrets (and ConfigMaps)** as ***immutable***." | Kubernetes 允许你**把特定的 Secret（和 ConfigMap）** 标记为**不可变**。 | [The Kubernetes Authors, n.d., "Immutable Secrets", para. 1](https://kubernetes.io/docs/concepts/configuration/secret/#:~:text=Kubernetes%20lets%20you%20mark%20specific%20Secrets%20%28and) |

## References

The Kubernetes Authors. (n.d.). *Secrets*. Kubernetes Documentation. Retrieved October 31, 2026, from <https://kubernetes.io/docs/concepts/configuration/secret/>
