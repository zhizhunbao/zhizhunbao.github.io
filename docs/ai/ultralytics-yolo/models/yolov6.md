---
title: "3.8 YOLOv6"
description: "Ultralytics YOLO, 3.8 YOLOv6: Key Features."
ms.date: 2026-10-31
---

# 3.8 YOLOv6

## Classification

![3.8 YOLOv6: its parts from the official menu, each with the entries the menu lists under it, in Ultralytics YOLO.](media/yolov6.png)

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **3.8 YOLOv6**<br>YOLOv6 | "Meituan YOLOv6, released in 2022, **offers a strong balance between speed and accuracy**, making it a popular choice for real-time applications." | 美团 YOLOv6 于 2022 年发布，**在速度和精度之间取得了很好的平衡**，因此常用于实时应用。 | [Ultralytics, n.d., "Meituan YOLOv6", para. 1](https://docs.ultralytics.com/models/yolov6/#meituan-yolov6) |
| **Key Features**<br>主要特性 | (No definition) | （无定义） | [Ultralytics, n.d., "Key Features"](https://docs.ultralytics.com/models/yolov6/#key-features) |
| **Bidirectional Concatenation (BiC) Module**<br>双向拼接（BiC）模块 | "Bidirectional Concatenation (BiC) Module: YOLOv6 introduces a BiC module in the neck of the detector, **enhancing localization signals** and delivering performance gains with negligible speed degradation." | 双向拼接（BiC）模块：YOLOv6 在检测器的颈部引入 BiC 模块，以此**增强定位信号**，并以几乎可以忽略的速度损失带来性能提升。 | [Ultralytics, n.d., "Key Features", item 1](https://docs.ultralytics.com/models/yolov6/#key-features) |
| **Anchor-Aided Training (AAT) Strategy**<br>锚框辅助训练（AAT）策略 | "Anchor-Aided Training (AAT) Strategy: This model proposes AAT **to enjoy the benefits of both anchor-based and anchor-free paradigms without compromising inference efficiency**." | 锚框辅助训练（AAT）策略：该模型提出 AAT，以便**在不影响推理效率的前提下兼得基于锚框和无锚框两种范式的好处**。 | [Ultralytics, n.d., "Key Features", item 2](https://docs.ultralytics.com/models/yolov6/#key-features) |
| **Enhanced Backbone and Neck Design**<br>增强的骨干与颈部设计 | "Enhanced Backbone and Neck Design: By **deepening YOLOv6 to include another stage in the backbone and neck**, this model achieved strong performance on the COCO dataset at high-resolution input when released." | 增强的骨干与颈部设计：通过**加深 YOLOv6，在骨干网络和颈部各增加一个阶段**，该模型发布时在高分辨率输入下于 COCO 数据集上取得了强劲的性能。 | [Ultralytics, n.d., "Key Features", item 3](https://docs.ultralytics.com/models/yolov6/#key-features) |
| **Self-Distillation Strategy**<br>自蒸馏策略 | "Self-Distillation Strategy: A new self-distillation strategy is implemented **to boost the performance of smaller models of YOLOv6**, enhancing the auxiliary regression branch during training and removing it at inference to avoid a marked speed decline." | 自蒸馏策略：实现了一种新的自蒸馏策略，它**用来提升 YOLOv6 较小模型的性能**，训练时增强辅助回归分支，推理时去掉它以避免明显的速度下降。 | [Ultralytics, n.d., "Key Features", item 4](https://docs.ultralytics.com/models/yolov6/#key-features) |

## References

Ultralytics. (n.d.). *Meituan YOLOv6*. Ultralytics YOLO Docs (ultralytics 8.4.194). Retrieved October 31, 2026, from <https://docs.ultralytics.com/models/yolov6/>
