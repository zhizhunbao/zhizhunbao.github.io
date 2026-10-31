---
title: "3.8 ORB (Oriented FAST and Rotated BRIEF)"
description: "OpenCV, 3.8 ORB (Oriented FAST and Rotated BRIEF): Theory."
ms.date: 2026-10-31
---

# 3.8 ORB (Oriented FAST and Rotated BRIEF)

## Classification

![3.8 ORB (Oriented FAST and Rotated BRIEF): its parts from the official menu, each with the entries the menu lists under it, in OpenCV.](media/orb-oriented-fast-and-rotated-brief.png)

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **3.8 ORB (Oriented FAST and Rotated BRIEF)**<br>ORB（定向 FAST 与旋转 BRIEF） | (context) "SIFT and SURF are good in what they do, but what if you have to pay a few dollars every year to use them in your applications? Yeah, **they are patented**!!!" | （语境）SIFT 和 SURF 本身很好，但如果每年要付钱才能在应用中使用它们呢？没错，**它们有专利**！！！ | [OpenCV team, n.d.-a, "Feature Detection and Description", item 8](https://docs.opencv.org/4.x/db/d27/tutorial_py_table_of_contents_feature2d.html) |
| **Theory**<br>理论 | "ORB is basically **a fusion of FAST keypoint detector and BRIEF descriptor with many modifications to enhance the performance**." | ORB 基本上是**FAST 关键点检测器与 BRIEF 描述子的融合，并做了许多改进以提升性能**。 | [OpenCV team, n.d.-b, "Theory", para. 2](https://docs.opencv.org/4.x/d1/d89/tutorial_py_orb.html#autotoc_md1274) |
| **rBRIEF**<br>rBRIEF | "To resolve all these, ORB runs **a greedy search among all possible binary tests to find the ones that have both high variance and means close to 0.5, as well as being uncorrelated**. The result is called rBRIEF." | 为解决这些问题，ORB **在所有可能的二进制测试中进行贪心搜索，找出方差高、均值接近 0.5 且互不相关的测试**。其结果称为 rBRIEF。 | [OpenCV team, n.d.-b, "Theory", para. 6](https://docs.opencv.org/4.x/d1/d89/tutorial_py_orb.html#autotoc_md1274) |

## References

OpenCV team. (n.d.-a). *Feature Detection and Description*. OpenCV-Python Tutorials (Version 4.13.0). Retrieved October 31, 2026, from <https://docs.opencv.org/4.x/db/d27/tutorial_py_table_of_contents_feature2d.html>

OpenCV team. (n.d.-b). *ORB (Oriented FAST and Rotated BRIEF)*. OpenCV-Python Tutorials (Version 4.13.0). Retrieved October 31, 2026, from <https://docs.opencv.org/4.x/d1/d89/tutorial_py_orb.html>
