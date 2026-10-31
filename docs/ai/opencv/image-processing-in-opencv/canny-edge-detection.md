---
title: "2.7 Canny Edge Detection"
description: "OpenCV, 2.7 Canny Edge Detection: Theory."
ms.date: 2026-10-31
---

# 2.7 Canny Edge Detection

## Classification

![2.7 Canny Edge Detection: its parts from the official menu, each with the entries the menu lists under it, in OpenCV.](media/canny-edge-detection.png)

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **2.7 Canny Edge Detection**<br>Canny 边缘检测 | (context) "Learn to **find edges with Canny Edge Detection**" | （语境）学习**用 Canny 边缘检测寻找边缘** | [OpenCV team, n.d.-b, "Image Processing in OpenCV", item 7](https://docs.opencv.org/4.x/d2/d96/tutorial_py_table_of_contents_imgproc.html) |
| **Theory**<br>理论 | "Canny Edge Detection is **a popular edge detection algorithm**." | Canny 边缘检测是**一种常用的边缘检测算法**。 | [OpenCV team, n.d.-a, "Theory", para. 1](https://docs.opencv.org/4.x/da/d22/tutorial_py_canny.html#autotoc_md1314) |
| **Noise Reduction**<br>降噪 | "Noise Reduction Since edge detection is susceptible to noise in the image, **first step is to remove the noise in the image with a 5x5 Gaussian filter**." | Noise Reduction 由于边缘检测容易受图像噪声影响，**第一步是用 5×5 高斯滤波器去除图像中的噪声**。 | [OpenCV team, n.d.-a, "Theory", item 1](https://docs.opencv.org/4.x/da/d22/tutorial_py_canny.html#autotoc_md1314) |
| **Finding Intensity Gradient of the Image**<br>计算图像的强度梯度 | "Finding Intensity Gradient of the Image Smoothened image is then **filtered with a Sobel kernel in both horizontal and vertical direction to get first derivative in horizontal direction ( Gx) and vertical direction ( Gy)**." | Finding Intensity Gradient of the Image 然后**用 Sobel 卷积核在水平和垂直两个方向上对平滑后的图像滤波，得到水平方向（Gx）和垂直方向（Gy）的一阶导数**。 | [OpenCV team, n.d.-a, "Theory", item 2](https://docs.opencv.org/4.x/da/d22/tutorial_py_canny.html#autotoc_md1314) |
| **Non-maximum Suppression**<br>非极大值抑制 | "Non-maximum Suppression After getting gradient magnitude and direction, **a full scan of image is done to remove any unwanted pixels which may not constitute the edge**." | Non-maximum Suppression 得到梯度幅值和方向之后，**对图像做一次完整扫描，去除所有可能不构成边缘的多余像素**。 | [OpenCV team, n.d.-a, "Theory", item 3](https://docs.opencv.org/4.x/da/d22/tutorial_py_canny.html#autotoc_md1314) |
| **Hysteresis Thresholding**<br>滞后阈值化 | "Hysteresis Thresholding This stage **decides which are all edges are really edges and which are not**." | Hysteresis Thresholding 这一阶段**判定哪些边缘是真正的边缘，哪些不是**。 | [OpenCV team, n.d.-a, "Theory", item 4](https://docs.opencv.org/4.x/da/d22/tutorial_py_canny.html#autotoc_md1314) |

## References

OpenCV team. (n.d.-a). *Canny Edge Detection*. OpenCV-Python Tutorials (Version 4.13.0). Retrieved October 31, 2026, from <https://docs.opencv.org/4.x/da/d22/tutorial_py_canny.html>

OpenCV team. (n.d.-b). *Image Processing in OpenCV*. OpenCV-Python Tutorials (Version 4.13.0). Retrieved October 31, 2026, from <https://docs.opencv.org/4.x/d2/d96/tutorial_py_table_of_contents_imgproc.html>
