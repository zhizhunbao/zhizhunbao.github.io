---
title: "2.5 Morphological Transformations"
description: "OpenCV, 2.5 Morphological Transformations: Theory."
ms.date: 2026-10-31
---

# 2.5 Morphological Transformations

## Classification

![2.5 Morphological Transformations: its parts from the official menu, each with the entries the menu lists under it, in OpenCV.](media/morphological-transformations.png)

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **2.5 Morphological Transformations**<br>形态学变换 | (context) "Learn about **morphological transformations like Erosion, Dilation, Opening, Closing etc**" | （语境）学习**形态学变换，如腐蚀、膨胀、开运算、闭运算等** | [OpenCV team, n.d.-a, "Image Processing in OpenCV", item 5](https://docs.opencv.org/4.x/d2/d96/tutorial_py_table_of_contents_imgproc.html) |
| **Theory**<br>理论 | "Morphological transformations are **some simple operations based on the image shape**." | 形态学变换是**基于图像形状的一些简单操作**。 | [OpenCV team, n.d.-b, "Theory", para. 1](https://docs.opencv.org/4.x/d9/d61/tutorial_py_morphological_ops.html#autotoc_md1427) |
| **structuring element**<br>结构元素 | "It needs two inputs, one is our original image, second one is called structuring element or kernel which **decides the nature of operation**." | 它需要两个输入，一个是原图像，第二个称为结构元素或卷积核，它**决定操作的性质**。 | [OpenCV team, n.d.-b, "Theory", para. 1](https://docs.opencv.org/4.x/d9/d61/tutorial_py_morphological_ops.html#autotoc_md1427) |
| **Erosion**<br>腐蚀 | "The basic idea of erosion is just like soil erosion only, **it erodes away the boundaries of foreground object**" | 腐蚀的基本思想就像土壤侵蚀一样，**它侵蚀掉前景物体的边界** | [OpenCV team, n.d.-b, "1. Erosion", para. 1](https://docs.opencv.org/4.x/d9/d61/tutorial_py_morphological_ops.html#autotoc_md1428) |
| **Dilation**<br>膨胀 | "It is just opposite of erosion. Here, **a pixel element is '1' if at least one pixel under the kernel is '1'**." | 它与腐蚀正好相反。这里，**只要卷积核下至少有一个像素为“1”，该像素元素就为“1”**。 | [OpenCV team, n.d.-b, "2. Dilation", para. 1](https://docs.opencv.org/4.x/d9/d61/tutorial_py_morphological_ops.html#autotoc_md1429) |
| **Opening**<br>开运算 | "Opening is just another name of **erosion followed by dilation**." | 开运算只是**先腐蚀后膨胀**的另一个名字。 | [OpenCV team, n.d.-b, "3. Opening", para. 1](https://docs.opencv.org/4.x/d9/d61/tutorial_py_morphological_ops.html#autotoc_md1430) |
| **Closing**<br>闭运算 | "Closing is reverse of Opening, **Dilation followed by Erosion**." | 闭运算与开运算相反，**先膨胀后腐蚀**。 | [OpenCV team, n.d.-b, "4. Closing", para. 1](https://docs.opencv.org/4.x/d9/d61/tutorial_py_morphological_ops.html#autotoc_md1431) |
| **Morphological Gradient**<br>形态学梯度 | "It is **the difference between dilation and erosion of an image**." | 它是**图像膨胀与腐蚀之差**。 | [OpenCV team, n.d.-b, "5. Morphological Gradient", para. 1](https://docs.opencv.org/4.x/d9/d61/tutorial_py_morphological_ops.html#autotoc_md1432) |
| **Top Hat**<br>顶帽 | "It is **the difference between input image and Opening of the image**." | 它是**输入图像与该图像开运算结果之差**。 | [OpenCV team, n.d.-b, "6. Top Hat", para. 1](https://docs.opencv.org/4.x/d9/d61/tutorial_py_morphological_ops.html#autotoc_md1433) |
| **Black Hat**<br>黑帽 | "It is **the difference between the closing of the input image and input image**." | 它是**输入图像的闭运算结果与输入图像之差**。 | [OpenCV team, n.d.-b, "7. Black Hat", para. 1](https://docs.opencv.org/4.x/d9/d61/tutorial_py_morphological_ops.html#autotoc_md1434) |

## References

OpenCV team. (n.d.-a). *Image Processing in OpenCV*. OpenCV-Python Tutorials (Version 4.13.0). Retrieved October 31, 2026, from <https://docs.opencv.org/4.x/d2/d96/tutorial_py_table_of_contents_imgproc.html>

OpenCV team. (n.d.-b). *Morphological Transformations*. OpenCV-Python Tutorials (Version 4.13.0). Retrieved October 31, 2026, from <https://docs.opencv.org/4.x/d9/d61/tutorial_py_morphological_ops.html>
