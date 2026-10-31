---
title: "8. MuJoCo XLA"
description: "MuJoCo, 8. MuJoCo XLA: 8.1 MJX Implementations, 8.2 Feature Parity, 8.3 API."
ms.date: 2026-10-31
---

# 8. MuJoCo XLA

## Classification

![8. MuJoCo XLA: its 3 entries from the official menu, in menu order and numbered here, each with the entries the menu lists under it, in MuJoCo.](media/mujoco-xla.png)

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **8 MuJoCo XLA**<br>MuJoCo XLA | "MuJoCo XLA (MJX) provides **a JAX API for various implementations of MuJoCo**." | MuJoCo XLA（MJX）提供**一个面向 MuJoCo 多种实现的 JAX API**。 | [Google DeepMind, n.d.-b, "MuJoCo XLA (MJX)", para. 1](https://mujoco.readthedocs.io/en/stable/mjx.html#mujoco-xla-mjx) |
| **[8.1 MJX Implementations](mjx-implementations.md)**<br>MJX 实现 | "MJX currently supports **two implementations of MuJoCo: a pure JAX and a Warp implementation**." | MJX 目前支持 **MuJoCo 的两种实现：纯 JAX 实现和 Warp 实现**。 | [Google DeepMind, n.d.-b, "MJX Implementations", para. 1](https://mujoco.readthedocs.io/en/stable/mjx.html#mjx-implementations) |
| **[8.2 Feature Parity](feature-parity.md)**<br>功能对等 | (context) "MJX supports **most of the main simulation features of MuJoCo for execution on hardware-accelerated devices**." | （语境）MJX 支持 **MuJoCo 的大部分主要仿真功能，可在硬件加速设备上运行**。 | [Google DeepMind, n.d.-b, "Feature Parity", para. 1](https://mujoco.readthedocs.io/en/stable/mjx.html#feature-parity) |
| **[8.3 API](api.md)**<br>API | (No definition) | （无定义） | [Google DeepMind, n.d.-a, "MJX API"](https://mujoco.readthedocs.io/en/stable/mjx_api.html#module-mujoco.mjx) |
| **In-depth usage**<br>深入用法 | (No definition) | （无定义） | [Google DeepMind, n.d.-b, "In-depth usage"](https://mujoco.readthedocs.io/en/stable/mjx.html#in-depth-usage) |
| **Structs**<br>结构体 | (context) "Before running MJX functions on an accelerator device, **structs must be copied onto the device via the mjx.put_model and mjx.put_data functions**." | （语境）在加速设备上运行 MJX 函数之前，**必须通过 mjx.put_model 和 mjx.put_data 函数把结构体复制到设备上**。 | [Google DeepMind, n.d.-b, "Structs", para. 1](https://mujoco.readthedocs.io/en/stable/mjx.html#structs) |
| **Enums and constants**<br>枚举与常量 | (context) "MJX enums are available as **mjx.EnumType.ENUM_VALUE**, for example mjx.JointType.FREE." | （语境）MJX 枚举以 **mjx.EnumType.ENUM_VALUE** 的形式提供，例如 mjx.JointType.FREE。 | [Google DeepMind, n.d.-b, "Enums and constants", para. 1](https://mujoco.readthedocs.io/en/stable/mjx.html#enums-and-constants) |

## References

Google DeepMind. (n.d.-a). *MJX API*. MuJoCo Documentation (Version 3.17.0). Retrieved October 31, 2026, from <https://mujoco.readthedocs.io/en/stable/mjx_api.html>

Google DeepMind. (n.d.-b). *MuJoCo XLA (MJX)*. MuJoCo Documentation (Version 3.17.0). Retrieved October 31, 2026, from <https://mujoco.readthedocs.io/en/stable/mjx.html>
