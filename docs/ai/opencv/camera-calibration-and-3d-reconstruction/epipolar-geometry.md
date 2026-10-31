---
title: "4.3 Epipolar Geometry"
description: "OpenCV, 4.3 Epipolar Geometry: Basic Concepts."
ms.date: 2026-10-31
---

# 4.3 Epipolar Geometry

## Classification

![4.3 Epipolar Geometry: its parts from the official menu, each with the entries the menu lists under it, in OpenCV.](media/epipolar-geometry.png)

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **4.3 Epipolar Geometry**<br>对极几何 | (context) "Let's understand **epipolar geometry and epipolar constraint**." | （语境）让我们理解**对极几何和对极约束**。 | [OpenCV team, n.d.-a, "Camera Calibration and 3D Reconstruction", item 3](https://docs.opencv.org/4.x/d9/db7/tutorial_py_table_of_contents_calib3d.html) |
| **Basic Concepts**<br>基本概念 | (No definition) | （无定义） | [OpenCV team, n.d.-b, "Basic Concepts"](https://docs.opencv.org/4.x/da/de9/tutorial_py_epipolar_geometry.html#autotoc_md1219) |
| **stereo vision**<br>立体视觉 | "Our eyes works in similar way where **we use two cameras (two eyes)** which is called stereo vision." | 我们的眼睛以类似的方式工作，**使用两台相机（两只眼睛）**，这称为立体视觉。 | [OpenCV team, n.d.-b, "Basic Concepts", para. 1](https://docs.opencv.org/4.x/da/de9/tutorial_py_epipolar_geometry.html#autotoc_md1219) |
| **epiline**<br>极线 | "The projection of the different points on OX form **a line on right plane (line l′)**. We call it epiline corresponding to the point x." | OX 上不同点的投影在右平面上形成**一条直线（直线 l′）**。我们称它为点 x 对应的极线。 | [OpenCV team, n.d.-b, "Basic Concepts", para. 5](https://docs.opencv.org/4.x/da/de9/tutorial_py_epipolar_geometry.html#autotoc_md1219) |
| **Epipolar Constraint**<br>对极约束 | "It means, **to find the point x on the right image, search along this epiline**." | 这意味着，**要在右图中找到点 x，只需沿这条极线搜索**。 | [OpenCV team, n.d.-b, "Basic Concepts", para. 5](https://docs.opencv.org/4.x/da/de9/tutorial_py_epipolar_geometry.html#autotoc_md1219) |
| **Epipolar Plane**<br>对极平面 | "**The plane XOO′** is called Epipolar Plane." | **平面 XOO′** 称为对极平面。 | [OpenCV team, n.d.-b, "Basic Concepts", para. 5](https://docs.opencv.org/4.x/da/de9/tutorial_py_epipolar_geometry.html#autotoc_md1219) |
| **epipole**<br>极点 | "Epipole is **the point of intersection of line through camera centers and the image planes**." | 极点是**穿过两个相机中心的直线与像平面的交点**。 | [OpenCV team, n.d.-b, "Basic Concepts", para. 6](https://docs.opencv.org/4.x/da/de9/tutorial_py_epipolar_geometry.html#autotoc_md1219) |
| **Essential Matrix (E)**<br>本质矩阵（E） | "Essential Matrix contains **the information about translation and rotation, which describe the location of the second camera relative to the first in global coordinates**." | 本质矩阵包含**平移和旋转的信息，描述第二台相机在全局坐标中相对于第一台相机的位置**。 | [OpenCV team, n.d.-b, "Basic Concepts", para. 8](https://docs.opencv.org/4.x/da/de9/tutorial_py_epipolar_geometry.html#autotoc_md1219) |
| **Fundamental Matrix (F)**<br>基础矩阵（F） | "In simple words, Fundamental Matrix F, **maps a point in one image to a line (epiline) in the other image**." | 简单地说，基础矩阵 F **把一幅图像中的点映射为另一幅图像中的一条直线（极线）**。 | [OpenCV team, n.d.-b, "Basic Concepts", para. 9](https://docs.opencv.org/4.x/da/de9/tutorial_py_epipolar_geometry.html#autotoc_md1219) |

## References

OpenCV team. (n.d.-a). *Camera Calibration and 3D Reconstruction*. OpenCV-Python Tutorials (Version 4.13.0). Retrieved October 31, 2026, from <https://docs.opencv.org/4.x/d9/db7/tutorial_py_table_of_contents_calib3d.html>

OpenCV team. (n.d.-b). *Epipolar Geometry*. OpenCV-Python Tutorials (Version 4.13.0). Retrieved October 31, 2026, from <https://docs.opencv.org/4.x/da/de9/tutorial_py_epipolar_geometry.html>
