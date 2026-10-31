---
title: "6.2 Image Inpainting"
description: "OpenCV, 6.2 Image Inpainting: Basics."
ms.date: 2026-10-31
---

# 6.2 Image Inpainting

## Classification

![6.2 Image Inpainting: its parts from the official menu, each with the entries the menu lists under it, in OpenCV.](media/image-inpainting.png)

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **6.2 Image Inpainting**<br>图像修复 | (context) "Let's try to restore them with **a technique called image inpainting**." | （语境）让我们用**一种叫图像修复的技术**来恢复它们。 | [OpenCV team, n.d.-a, "Computational Photography", item 2](https://docs.opencv.org/4.x/d0/d07/tutorial_py_table_of_contents_photo.html) |
| **Basics**<br>基础 | (No definition) | （无定义） | [OpenCV team, n.d.-b, "Basics"](https://docs.opencv.org/4.x/df/d3d/tutorial_py_inpainting.html#autotoc_md1511) |
| **image inpainting**<br>图像修复 | "In these cases, a technique called image inpainting is used. The basic idea is simple: **Replace those bad marks with its neighbouring pixels so that it looks like the neighbourhood**." | 这时会使用一种称为图像修复的技术。基本思想很简单：**用邻近像素替换那些坏痕迹，使其看起来与邻域一致**。 | [OpenCV team, n.d.-b, "Basics", para. 1](https://docs.opencv.org/4.x/df/d3d/tutorial_py_inpainting.html#autotoc_md1511) |
| **Fast Marching Method**<br>快速行进法 | "FMM ensures **those pixels near the known pixels are inpainted first**" | FMM 确保**靠近已知像素的那些像素先被修复** | [OpenCV team, n.d.-b, "Basics", para. 3](https://docs.opencv.org/4.x/df/d3d/tutorial_py_inpainting.html#autotoc_md1511) |
| **Navier-Stokes, Fluid Dynamics, and Image and Video Inpainting**<br>基于 Navier-Stokes 的修复算法 | "This algorithm is **based on fluid dynamics and utilizes partial differential equations**." | 这个算法**基于流体力学并利用偏微分方程**。 | [OpenCV team, n.d.-b, "Basics", para. 4](https://docs.opencv.org/4.x/df/d3d/tutorial_py_inpainting.html#autotoc_md1511) |
| **isophotes**<br>等照度线 | "It continues isophotes (**lines joining points with same intensity**, just like contours joins points with same elevation)" | 它延续等照度线（**连接相同强度点的线**，就像等高线连接相同海拔的点一样） | [OpenCV team, n.d.-b, "Basics", para. 4](https://docs.opencv.org/4.x/df/d3d/tutorial_py_inpainting.html#autotoc_md1511) |

## References

OpenCV team. (n.d.-a). *Computational Photography*. OpenCV-Python Tutorials (Version 4.13.0). Retrieved October 31, 2026, from <https://docs.opencv.org/4.x/d0/d07/tutorial_py_table_of_contents_photo.html>

OpenCV team. (n.d.-b). *Image Inpainting*. OpenCV-Python Tutorials (Version 4.13.0). Retrieved October 31, 2026, from <https://docs.opencv.org/4.x/df/d3d/tutorial_py_inpainting.html>
