---
title: "3.6 FAST Algorithm for Corner Detection"
description: "OpenCV, 3.6 FAST Algorithm for Corner Detection: Theory."
ms.date: 2026-10-31
---

# 3.6 FAST Algorithm for Corner Detection

## Classification

![3.6 FAST Algorithm for Corner Detection: its parts from the official menu, each with the entries the menu lists under it, in OpenCV.](media/fast-algorithm-for-corner-detection.png)

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **3.6 FAST Algorithm for Corner Detection**<br>用于角点检测的 FAST 算法 | (context) "But they are not fast enough to work in real-time applications like SLAM. There comes **the FAST algorithm**, which is really "FAST"." | （语境）但它们不够快，无法用于 SLAM 等实时应用。于是有了 **FAST 算法**，它真的很“快”。 | [OpenCV team, n.d.-b, "Feature Detection and Description", item 6](https://docs.opencv.org/4.x/db/d27/tutorial_py_table_of_contents_feature2d.html) |
| **Theory**<br>理论 | (context) "**As a solution to this**, FAST (Features from Accelerated Segment Test) algorithm was proposed by Edward Rosten and Tom Drummond in their paper "Machine learning for high-speed corner detection" in 2006 (Later revised it in 2010)." | （语境）**作为解决办法**，Edward Rosten 和 Tom Drummond 在 2006 年的论文“Machine learning for high-speed corner detection”中提出了 FAST（加速分段测试特征）算法（2010 年修订）。 | [OpenCV team, n.d.-a, "Theory", para. 2](https://docs.opencv.org/4.x/df/d0c/tutorial_py_fast.html#autotoc_md1249) |
| **Feature Detection using FAST**<br>用 FAST 检测特征 | "Now the pixel p is a corner if **there exists a set of n contiguous pixels in the circle (of 16 pixels) which are all brighter than Ip+t, or all darker than Ip−t**." | 如果**圆周（16 个像素）上存在一组 n 个连续像素，它们都比 Ip+t 亮，或都比 Ip−t 暗**，则像素 p 是角点。 | [OpenCV team, n.d.-a, "Feature Detection using FAST", item 4](https://docs.opencv.org/4.x/df/d0c/tutorial_py_fast.html#autotoc_md1250) |
| **high-speed test**<br>高速测试 | "A high-speed test was proposed to **exclude a large number of non-corners**." | 提出了一种高速测试，用来**排除大量非角点**。 | [OpenCV team, n.d.-a, "Feature Detection using FAST", item 5](https://docs.opencv.org/4.x/df/d0c/tutorial_py_fast.html#autotoc_md1250) |
| **Machine Learning a Corner Detector**<br>用机器学习构造角点检测器 | (context) "First 3 points are addressed with **a machine learning approach**." | （语境）前 3 点用**机器学习方法**来解决。 | [OpenCV team, n.d.-a, "Feature Detection using FAST", para. 2](https://docs.opencv.org/4.x/df/d0c/tutorial_py_fast.html#autotoc_md1250) |
| **ID3 algorithm**<br>ID3 算法 | "Use the ID3 algorithm (decision tree classifier) to **query each subset using the variable Kp for the knowledge about the true class**." | 使用 ID3 算法（决策树分类器），**用变量 Kp 查询每个子集，以获得关于真实类别的知识**。 | [OpenCV team, n.d.-a, "Machine Learning a Corner Detector", item 7](https://docs.opencv.org/4.x/df/d0c/tutorial_py_fast.html#autotoc_md1251) |
| **Non-maximal Suppression**<br>非极大值抑制 | (context) "**Detecting multiple interest points in adjacent locations** is another problem. It is solved by using Non-maximum Suppression." | （语境）**在相邻位置检测到多个兴趣点**是另一个问题。它用非极大值抑制来解决。 | [OpenCV team, n.d.-a, "Non-maximal Suppression", para. 1](https://docs.opencv.org/4.x/df/d0c/tutorial_py_fast.html#autotoc_md1252) |

## References

OpenCV team. (n.d.-a). *FAST Algorithm for Corner Detection*. OpenCV-Python Tutorials (Version 4.13.0). Retrieved October 31, 2026, from <https://docs.opencv.org/4.x/df/d0c/tutorial_py_fast.html>

OpenCV team. (n.d.-b). *Feature Detection and Description*. OpenCV-Python Tutorials (Version 4.13.0). Retrieved October 31, 2026, from <https://docs.opencv.org/4.x/db/d27/tutorial_py_table_of_contents_feature2d.html>
