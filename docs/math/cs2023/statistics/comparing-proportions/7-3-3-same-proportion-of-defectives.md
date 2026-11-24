---
title: "7.3.3 Same Proportion of Defectives"
description: "7.3.3 Same Proportion of Defectives, part of 24 Comparing Proportions: 3 terms from the NIST/SEMATECH e-Handbook of Statistical Methods."
ms.date: 2026-11-24
---

# 7.3.3 Same Proportion of Defectives

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **7.3.3 Same Proportion of Defectives**<br>两过程不合格比例是否相同 | (No definition) | （无定义） | [NIST/SEMATECH, n.d., section 7.3.3](https://www.itl.nist.gov/div898/handbook/prc/section3/prc33.htm) |
| **Z Statistic for Equal Proportions**<br>比例相等的 z 统计量 | "If the samples are reasonably large we can use the **normal approximation to the binomial** to develop **a test similar to testing whether two normal means are equal**. Let sample 1 have $x_1$ defects out of $n_1$ and sample 2 have $x_2$ defects out of $n_2$. Calculate the proportion of defects for each sample and the $z$ statistic below: $z = \frac{\hat{p}_1 - \hat{p}_2}{\sqrt{ \hat{p}(1-\hat{p})(1/n_1 + 1/n_2) }} \, ,$ where $\hat{p} = \frac{n_1 \hat{p}_1 + n_2 \hat{p}_2}{n_1 + n_2} = \frac{x_1 + x_2}{n_1 + n_2} \, .$" | 如果样本相当大，我们可以用**二项分布的正态近似**，构造一个**类似于检验两个正态均值是否相等的检验**。设样本 1 在 $n_1$ 个中有 $x_1$ 个不合格，样本 2 在 $n_2$ 个中有 $x_2$ 个不合格。算出每个样本的不合格比例与下面的 $z$ 统计量：$z = \frac{\hat{p}_1 - \hat{p}_2}{\sqrt{ \hat{p}(1-\hat{p})(1/n_1 + 1/n_2) }}$，其中 $\hat{p} = \frac{n_1 \hat{p}_1 + n_2 \hat{p}_2}{n_1 + n_2} = \frac{x_1 + x_2}{n_1 + n_2}$。 | [NIST/SEMATECH, n.d., section 7.3.3, Case 1](https://www.itl.nist.gov/div898/handbook/prc/section3/prc33.htm) |
| **Fisher Exact Probability Test**<br>Fisher 精确概率检验 | "The **Fisher Exact Probability Test** is an excellent nonparametric technique for **analyzing discrete data** (either nominal or ordinal), when the two independent samples are small in size." | **Fisher 精确概率检验**是一种出色的非参数方法，用于在两个独立样本都很小时**分析离散数据**（名义或有序）。 | [NIST/SEMATECH, n.d., section 7.3.3, Case 2](https://www.itl.nist.gov/div898/handbook/prc/section3/prc33.htm) |
| **Tocher's Modification**<br>Tocher 修正 | "Tocher (1950) showed that **a slight modification of the Fisher test** makes it **a more useful test**." | Tocher（1950）表明，对 **Fisher 检验作一个小的修正**，可以使它成为**更有用的检验**。 | [NIST/SEMATECH, n.d., section 7.3.3, "Tocher's Modification"](https://www.itl.nist.gov/div898/handbook/prc/section3/prc33.htm) |

## References

NIST/SEMATECH. (n.d.). *7.3.3. How can we determine whether two processes produce the same proportion of defectives?* In *NIST/SEMATECH e-Handbook of Statistical Methods*. National Institute of Standards and Technology. Retrieved November 24, 2026, from <https://www.itl.nist.gov/div898/handbook/prc/section3/prc33.htm>
