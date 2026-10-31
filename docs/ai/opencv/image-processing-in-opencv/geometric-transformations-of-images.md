---
title: "2.2 Geometric Transformations of Images"
description: "OpenCV, 2.2 Geometric Transformations of Images: Transformations."
ms.date: 2026-10-31
---

# 2.2 Geometric Transformations of Images

## Classification

![2.2 Geometric Transformations of Images: its parts from the official menu, each with the entries the menu lists under it, in OpenCV.](media/geometric-transformations-of-images.png)

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **2.2 Geometric Transformations of Images**<br>图像的几何变换 | (context) "Learn to apply **different geometric transformations to images like rotation, translation etc**." | （语境）学习对图像施加**各种几何变换，如旋转、平移等**。 | [OpenCV team, n.d.-b, "Image Processing in OpenCV", item 2](https://docs.opencv.org/4.x/d2/d96/tutorial_py_table_of_contents_imgproc.html) |
| **Transformations**<br>变换 | (context) "OpenCV provides **two transformation functions**, cv.warpAffine and cv.warpPerspective, with which you can perform all kinds of transformations." | （语境）OpenCV 提供**两个变换函数** cv.warpAffine 和 cv.warpPerspective，用它们可以完成各种变换。 | [OpenCV team, n.d.-a, "Transformations", para. 1](https://docs.opencv.org/4.x/da/d6e/tutorial_py_geometric_transformations.html#autotoc_md1374) |
| **Scaling**<br>缩放 | "Scaling is **just resizing of the image**." | 缩放**就是改变图像的大小**。 | [OpenCV team, n.d.-a, "Scaling", para. 1](https://docs.opencv.org/4.x/da/d6e/tutorial_py_geometric_transformations.html#autotoc_md1375) |
| **Translation**<br>平移 | "Translation is **the shifting of an object's location**." | 平移是**物体位置的移动**。 | [OpenCV team, n.d.-a, "Translation", para. 1](https://docs.opencv.org/4.x/da/d6e/tutorial_py_geometric_transformations.html#autotoc_md1376) |
| **Rotation**<br>旋转 | (context) "Rotation of an image for an angle θ is achieved by **the transformation matrix of the form**" | （语境）把图像旋转角度 θ 是通过**如下形式的变换矩阵**实现的 | [OpenCV team, n.d.-a, "Rotation", para. 1](https://docs.opencv.org/4.x/da/d6e/tutorial_py_geometric_transformations.html#autotoc_md1377) |
| **Affine Transformation**<br>仿射变换 | "In affine transformation, **all parallel lines in the original image will still be parallel in the output image**." | 在仿射变换中，**原图像中所有平行的直线在输出图像中仍然平行**。 | [OpenCV team, n.d.-a, "Affine Transformation", para. 1](https://docs.opencv.org/4.x/da/d6e/tutorial_py_geometric_transformations.html#autotoc_md1378) |
| **Perspective Transformation**<br>透视变换 | "For perspective transformation, you need a 3x3 transformation matrix. **Straight lines will remain straight even after the transformation**." | 透视变换需要一个 3×3 的变换矩阵。**变换之后直线仍然保持为直线**。 | [OpenCV team, n.d.-a, "Perspective Transformation", para. 1](https://docs.opencv.org/4.x/da/d6e/tutorial_py_geometric_transformations.html#autotoc_md1379) |

## References

OpenCV team. (n.d.-a). *Geometric Transformations of Images*. OpenCV-Python Tutorials (Version 4.13.0). Retrieved October 31, 2026, from <https://docs.opencv.org/4.x/da/d6e/tutorial_py_geometric_transformations.html>

OpenCV team. (n.d.-b). *Image Processing in OpenCV*. OpenCV-Python Tutorials (Version 4.13.0). Retrieved October 31, 2026, from <https://docs.opencv.org/4.x/d2/d96/tutorial_py_table_of_contents_imgproc.html>
