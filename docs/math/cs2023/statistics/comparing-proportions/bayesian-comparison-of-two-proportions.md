---
title: "Bayesian Comparison of Two Proportions"
description: "Bayesian Comparison of Two Proportions, part of 24 Comparing Proportions: 2 terms, the Beta posterior of a proportion and the probability that one proportion beats another."
ms.date: 2026-11-24
---

# Bayesian Comparison of Two Proportions

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **Bayesian Comparison of Two Proportions**<br>两个比例的贝叶斯比较 | (No definition) | （无定义） | [Miller, 2015, "A/B testing: binary outcomes"](https://www.evanmiller.org/bayesian-ab-testing.html#binary_ab) |
| **Beta Posterior of a Proportion**<br>比例的 Beta 后验 | (No definition) | （无定义） | [Miller, 2015, "A/B testing: binary outcomes"](https://www.evanmiller.org/bayesian-ab-testing.html#binary_ab) |
| **Probability That B Beats A**<br>B 优于 A 的概率 | (No definition) | （无定义） | [Miller, 2015, "A/B testing: binary outcomes"](https://www.evanmiller.org/bayesian-ab-testing.html#binary_ab) |

## Formulas and Conditions

Written in my own words; the source page is not openly licensed and is linked, not quoted.

1. Beta posterior of a proportion. Conditions: $n$ independent trials, each a success with the same unknown probability $p$; prior $\mathrm{Beta}(1, 1)$, the flat prior of [11.4 Estimating Posterior Distributions](../bayesian-statistics/11-4-estimating-posterior-distributions.md). After $k$ successes the posterior is $\mathrm{Beta}(\alpha, \beta)$ with $\alpha = 1 + k$ and $\beta = 1 + n - k$, because the binomial likelihood $p^k (1-p)^{n-k}$ times the Beta density keeps the Beta form. Its mean is $\frac{1 + k}{2 + n}$.
2. Probability that B beats A. Conditions: groups A and B are independent, each with a Beta posterior as in 1, and $\alpha_B$ and $\beta_B$ are whole numbers (they are, since they count successes plus one and failures plus one). Then $P(p_B > p_A) = \sum_{i=0}^{\alpha_B - 1} \frac{B(\alpha_A + i, \, \beta_A + \beta_B)}{(\beta_B + i) \, B(1 + i, \, \beta_B) \, B(\alpha_A, \, \beta_A)}$, where $B$ is the beta function.
3. Derivation of 2. $P(p_B > p_A) = \int_0^1 f_A(x) \, P(p_B > x) \, dx$. For whole-number $\alpha_B$ and $\beta_B$, $P(p_B > x)$ is a finite binomial sum, $\sum_{i=0}^{\alpha_B - 1} \binom{\alpha_B + \beta_B - 1}{i} x^i (1-x)^{\alpha_B + \beta_B - 1 - i}$. Multiplying by $f_A(x) = \frac{x^{\alpha_A - 1} (1-x)^{\beta_A - 1}}{B(\alpha_A, \beta_A)}$ and integrating term by term turns each term into a beta function, so the probability is a finite sum of beta functions; writing the binomial coefficients as beta functions and simplifying gives the form in 2 (the source's Derivation section shows the steps).
4. Checks: equal data in both groups gives $\frac{1}{2}$; $\mathrm{Beta}(2, 1)$ against $\mathrm{Beta}(1, 1)$ gives $\frac{2}{3}$; $\mathrm{Beta}(2, 1)$ against $\mathrm{Beta}(1, 2)$ gives $\frac{5}{6}$.

## References

Miller, E. (2015, October 1). *Formulas for Bayesian A/B testing*. Retrieved November 24, 2026, from <https://www.evanmiller.org/bayesian-ab-testing.html>
