---
title: "1.3.4 Hardware Support"
description: "Ollama, 1. Guide: 1.3.4 Hardware Support; terms quoted from the documentation."
ms.date: 2026-11-10
---

# 1.3.4 Hardware Support

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **Hardware Support**<br>硬件支持 | (context) "Ollama supports **Nvidia GPUs** with **compute capability 5.0+ and driver version 550 and newer**." | （语境）Ollama 支持 **Nvidia GPU**，要求**计算能力 5.0+ 且驱动版本为 550 及以上**。 | [Ollama, n.d., "Hardware Support", "Nvidia", para. 1](https://docs.ollama.com/gpu) |
| **GPU Selection**<br>GPU 选择 | (context) "If you have **multiple NVIDIA GPUs** in your system and want to limit Ollama to use a subset, you can set **`CUDA_VISIBLE_DEVICES`** to a comma separated list of GPUs." | （语境）如果系统里有**多块 NVIDIA GPU**，又想让 Ollama 只用其中一部分，可以把 **`CUDA_VISIBLE_DEVICES`** 设为以逗号分隔的 GPU 列表。 | [Ollama, n.d., "Hardware Support", "Nvidia", "GPU Selection", para. 1](https://docs.ollama.com/gpu) |
| **AMD Radeon**<br>AMD Radeon | (context) "Ollama supports the following **AMD GPUs** via **the ROCm library**:" | （语境）Ollama 支持下列 **AMD GPU**，通过 **ROCm 库**实现： | [Ollama, n.d., "Hardware Support", "AMD Radeon", para. 1](https://docs.ollama.com/gpu) |
| **Metal**<br>Metal | (context) "Ollama supports **GPU acceleration on Apple devices** via **the Metal API**." | （语境）Ollama 支持**在 Apple 设备上进行 GPU 加速**，通过 **Metal API** 实现。 | [Ollama, n.d., "Hardware Support", "Metal (Apple GPUs)", para. 1](https://docs.ollama.com/gpu) |
| **Vulkan GPU Support**<br>Vulkan GPU 支持 | (context) "**Additional GPU support** on Windows and Linux is provided via **Vulkan**." | （语境）Windows 与 Linux 上的**额外 GPU 支持**由 **Vulkan** 提供。 | [Ollama, n.d., "Hardware Support", "Vulkan GPU Support", para. 1](https://docs.ollama.com/gpu) |
| **Ollama Scheduler**<br>Ollama 调度器 | (context) "The Ollama scheduler leverages **available VRAM data** reported by the GPU libraries to make **optimal scheduling decisions**." | （语境）Ollama 调度器利用 GPU 库报告的**可用显存数据**，作出**最优的调度决策**。 | [Ollama, n.d., "Hardware Support", "Vulkan GPU Support", para. 2](https://docs.ollama.com/gpu) |

## References

Ollama. (n.d.). *Ollama documentation*. Retrieved November 8, 2026, from <https://docs.ollama.com/>
