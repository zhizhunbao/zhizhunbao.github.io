---
title: "3.10 Feature Matching + Homography to find Objects"
description: "OpenCV, 3.10 Feature Matching + Homography to find Objects: Basics."
ms.date: 2026-10-31
---

# 3.10 Feature Matching + Homography to find Objects

## Classification

![3.10 Feature Matching + Homography to find Objects: its parts from the official menu, each with the entries the menu lists under it, in OpenCV.](media/feature-matching-homography-to-find-objects.png)

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **3.10 Feature Matching + Homography to find Objects**<br>特征匹配与单应性寻找物体 | (context) "Let's mix it up with calib3d module **to find objects in a complex image**." | （语境）让我们把它和 calib3d 模块结合起来，**在复杂图像中寻找物体**。 | [OpenCV team, n.d.-a, "Feature Detection and Description", item 10](https://docs.opencv.org/4.x/db/d27/tutorial_py_table_of_contents_feature2d.html) |
| **Basics**<br>基础 | (context) "If we pass the set of points from both the images, it will **find the perspective transformation of that object**." | （语境）如果传入两幅图像中的点集，它会**求出该物体的透视变换**。 | [OpenCV team, n.d.-b, "Basics", para. 2](https://docs.opencv.org/4.x/d1/de0/tutorial_py_feature_homography.html#autotoc_md1257) |
| **inliers**<br>内点 | "So **good matches which provide correct estimation** are called inliers and remaining are called outliers." | 因此，**提供正确估计的良好匹配**称为内点，其余的称为外点。 | [OpenCV team, n.d.-b, "Basics", para. 3](https://docs.opencv.org/4.x/d1/de0/tutorial_py_feature_homography.html#autotoc_md1257) |
| **outliers**<br>外点 | "So good matches which provide correct estimation are called inliers and **remaining** are called outliers." | 因此，提供正确估计的良好匹配称为内点，**其余的**称为外点。 | [OpenCV team, n.d.-b, "Basics", para. 3](https://docs.opencv.org/4.x/d1/de0/tutorial_py_feature_homography.html#autotoc_md1257) |

## References

OpenCV team. (n.d.-a). *Feature Detection and Description*. OpenCV-Python Tutorials (Version 4.13.0). Retrieved October 31, 2026, from <https://docs.opencv.org/4.x/db/d27/tutorial_py_table_of_contents_feature2d.html>

OpenCV team. (n.d.-b). *Feature Matching + Homography to find Objects*. OpenCV-Python Tutorials (Version 4.13.0). Retrieved October 31, 2026, from <https://docs.opencv.org/4.x/d1/de0/tutorial_py_feature_homography.html>
