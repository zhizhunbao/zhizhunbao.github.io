---
title: "7.2.4.1 Confidence Intervals"
description: "7.2.4.1 Confidence Intervals, part of 24 Comparing Proportions: 5 terms from the NIST/SEMATECH e-Handbook of Statistical Methods."
ms.date: 2026-11-24
---

# 7.2.4.1 Confidence Intervals

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **7.2.4.1 Confidence Intervals**<br>置信区间 | (No definition) | （无定义） | [NIST/SEMATECH, n.d., section 7.2.4.1](https://www.itl.nist.gov/div898/handbook/prc/section2/prc241.htm) |
| **Wilson Method**<br>Wilson 法 | "The **Wilson method** for calculating confidence intervals for proportions (introduced by Wilson (1927), recommended by Brown, Cai and DasGupta (2001) and Agresti and Coull (1998) ) is based on **inverting the hypothesis test** given in Section 7.2.4 ." | 计算比例置信区间的 **Wilson 法**（由 Wilson（1927）提出，Brown、Cai 和 DasGupta（2001）以及 Agresti 和 Coull（1998）推荐）基于**对第 7.2.4 节所给假设检验的反演**。 | [NIST/SEMATECH, n.d., section 7.2.4.1, "Confidence intervals using the method of Agresti and Coull"](https://www.itl.nist.gov/div898/handbook/prc/section2/prc241.htm) |
| **Wilson Interval Limits**<br>Wilson 区间上下限 | "$\large \begin{eqnarray} \mbox{U.L. } & = & \frac{\hat{p} + \frac{z^2_{1-\alpha/2}}{2n} + z_{1-\alpha/2} \sqrt{ \frac{\hat{p}(1-\hat{p})}{n} + \frac{z^2_{1-\alpha/2}}{4n^2} }} {1 + \frac{z^2_{1-\alpha/2}}{n}} \\ & & \\ & & \\ \mbox{L.L. } & = & \frac{\hat{p} + \frac{z^2_{\alpha/2}}{2n} + z_{\alpha/2} \sqrt{ \frac{\hat{p}(1-\hat{p})}{n} + \frac{z^2_{\alpha/2}}{4n^2} }} {1 + \frac{z^2_{\alpha/2}}{n}} \, . \end{eqnarray}$" | "$\large \begin{eqnarray} \mbox{U.L. } & = & \frac{\hat{p} + \frac{z^2_{1-\alpha/2}}{2n} + z_{1-\alpha/2} \sqrt{ \frac{\hat{p}(1-\hat{p})}{n} + \frac{z^2_{1-\alpha/2}}{4n^2} }} {1 + \frac{z^2_{1-\alpha/2}}{n}} \\ & & \\ & & \\ \mbox{L.L. } & = & \frac{\hat{p} + \frac{z^2_{\alpha/2}}{2n} + z_{\alpha/2} \sqrt{ \frac{\hat{p}(1-\hat{p})}{n} + \frac{z^2_{\alpha/2}}{4n^2} }} {1 + \frac{z^2_{\alpha/2}}{n}} \, . \end{eqnarray}$"（U.L. 为上限，L.L. 为下限。） | [NIST/SEMATECH, n.d., section 7.2.4.1, "Formulas for the confidence intervals"](https://www.itl.nist.gov/div898/handbook/prc/section2/prc241.htm) |
| **One-Sided Confidence Interval**<br>单侧置信区间 | "A **one-sided confidence interval** can also be constructed simply by **replacing each** $z_{\alpha/2}$ by $z_{\alpha}$ in the expression for the lower or upper limit, whichever is desired." | **单侧置信区间**也可以这样构造：在所需的下限或上限表达式中，**把每个** $z_{\alpha/2}$ 换成 $z_{\alpha}$。 | [NIST/SEMATECH, n.d., section 7.2.4.1, "One-sided confidence intervals"](https://www.itl.nist.gov/div898/handbook/prc/section2/prc241.htm) |
| **Exact Confidence Interval**<br>精确置信区间 | "The interval $(p_L, \, p_U)$ is an **exact** $100(1-\alpha)$ % **confidence interval** for $p$." | 区间 $(p_L, \, p_U)$ 是 $p$ 的一个 $100(1-\alpha)$ % **精确**的**置信区间**。 | [NIST/SEMATECH, n.d., section 7.2.4.1, "Note"](https://www.itl.nist.gov/div898/handbook/prc/section2/prc241.htm) |
| **Agresti-Coull Method**<br>Agresti-Coull 法 | "However, common practice in the statistics literature is to refer to the method given here as the Wilson method and **a similar, but different, method** described in Brown, Cai, and DasGupta as the **Agresti-Coull method** (the Agresti-Coull paper refers to this as the "adjusted Wald" method)." | 不过，统计文献的通行做法是把这里给出的方法称为 Wilson 法，而把 Brown、Cai 和 DasGupta 描述的**一种相似但不同的方法**称为 **Agresti-Coull 法**（Agresti 与 Coull 的论文称之为“调整的 Wald”法）。 | [NIST/SEMATECH, n.d., section 7.2.4.1, "Terminology Note"](https://www.itl.nist.gov/div898/handbook/prc/section2/prc241.htm) |

## References

NIST/SEMATECH. (n.d.). *7.2.4.1. Confidence intervals*. In *NIST/SEMATECH e-Handbook of Statistical Methods*. National Institute of Standards and Technology. Retrieved November 24, 2026, from <https://www.itl.nist.gov/div898/handbook/prc/section2/prc241.htm>
