---
title: "7.2 From Linear to General"
description: "7.2 From Linear to General, part of 7 First Steps With General Congruences in Number Theory: 2 terms."
ms.date: 2026-10-30
---

# 7.2 From Linear to General

## Classification

![7.2 From Linear to General: its 2 terms, in 7 First Steps With General Congruences.](media/7-2-from-linear-to-general.png)

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **7.2 From Linear to General**<br>从线性到一般 | (No definition) | （无定义） | [Crisman, 2024, section 7.2](https://math.gordon.edu/ntic/ntic/section-linear-to-gen.html) |
| **Hensel’s Lemma**<br>亨泽尔引理 | "For $p$ prime and $e\geq 2$, suppose you already know a solution equivalence class $x_{e-1}\text{ (mod }p^{e-1})$ of the (polynomial) congruence $f(x)\equiv 0\text{ (mod }p^{e-1})$ Assume the technical condition that $\gcd(p,f'(x_{e-1}))=1$. **Then there is also a solution to $f(x)\equiv 0\text{ (mod }p^e)$ of the form (and unique *of* this form) $x_{e}=x_{e-1}+kp^{e-1}$** where $k$ satisfies $\frac{f(x_{e-1})}{p^{e-1}}+k\cdot f'(x_{e-1})\equiv 0\text{ (mod }p\text{)}$." | 设 $p$ 为素数，$e\geq 2$，假设你已经知道（多项式）同余方程 $f(x)\equiv 0\text{ (mod }p^{e-1})$ 的一个解等价类 $x_{e-1}\text{ (mod }p^{e-1})$。假设技术性条件 $\gcd(p,f'(x_{e-1}))=1$ 成立。**则 $f(x)\equiv 0\text{ (mod }p^e)$ 也有一个形如 $x_{e}=x_{e-1}+kp^{e-1}$ 的解（且在*这种*形式中唯一）**，其中 $k$ 满足 $\frac{f(x_{e-1})}{p^{e-1}}+k\cdot f'(x_{e-1})\equiv 0\text{ (mod }p\text{)}$。 | [Crisman, 2024, Theorem 7.2.3](https://math.gordon.edu/ntic/ntic/section-linear-to-gen.html#theorem-hensel) |
| **Newton’s Method**<br>牛顿法 | "This is a very powerful technique. What is most interesting is that this is even **interpretable as Newton’s method in calculus**. How? Note that the result above can be rearranged as $x_{e}=x_{e-1}-\frac{f(x_{e-1})}{f'(x_{e-1})}$ since $p^{e-1}\mid f(x_{e-1})$ and the technical condition is tantamount to saying $f'(x_{e-1})$ has an inverse." | 这是一种非常强大的技巧。最有意思的是，它甚至可以**解释为微积分中的牛顿法**。怎么解释？注意上面的结果可以改写为 $x_{e}=x_{e-1}-\frac{f(x_{e-1})}{f'(x_{e-1})}$，因为 $p^{e-1}\mid f(x_{e-1})$，而那个技术性条件就等于说 $f'(x_{e-1})$ 有逆。 | [Crisman, 2024, subsection 7.2.2](https://math.gordon.edu/ntic/ntic/section-linear-to-gen.html#subsection-prime-powers-11) |

## References

Crisman, K.-D. (2024). *Number theory: In context and interactive* (June 26, 2024 edition). Gordon College. Retrieved October 29, 2026, from <https://math.gordon.edu/ntic/ntic/>
