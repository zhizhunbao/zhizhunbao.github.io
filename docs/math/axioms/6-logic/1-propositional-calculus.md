---
title: "Propositional Calculus"
description: "Axioms, Logic, Propositional Calculus: its 4 axioms, each with its statement and a Chinese reading."
ms.date: 2026-10-29
---

# Propositional Calculus

## Classification

![Propositional Calculus in the 6 Logic frame: its 4 axioms in the source's order.](media/1-propositional-calculus.png)

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **[6 Logic](index.md)**<br>逻辑 | (No definition) | （无定义） | [Megill, 2026, "The Axioms" section](https://us.metamath.org/mpeuni/mmset.html#axioms) |
| **[Propositional Calculus](1-propositional-calculus.md)**<br>命题演算 | "Our system of **propositional calculus** consists of **three axioms and the modus ponens inference rule**." | 我们的**命题演算**系统由**三条公理和肯定前件推理规则**组成。 | [Megill, 2026, "The Axioms" section](https://us.metamath.org/mpeuni/mmset.html#axioms) |
| **[Axiom Simp](https://us.metamath.org/mpeuni/ax-1.html)**<br>简化公理 | "⊢ (𝜑 → (𝜓 → 𝜑))" | 若 𝜑 成立，则无论 𝜓 如何，𝜑 都成立。 | [Megill, 2026, "The Axioms" section](https://us.metamath.org/mpeuni/mmset.html#axioms) |
| **[Axiom Frege](https://us.metamath.org/mpeuni/ax-2.html)**<br>弗雷格公理 | "⊢ ((𝜑 → (𝜓 → 𝜒)) → ((𝜑 → 𝜓) → (𝜑 → 𝜒)))" | 蕴涵对蕴涵可以分配：若 𝜑 推出“𝜓 推出 𝜒”，则“𝜑 推出 𝜓”推出“𝜑 推出 𝜒”。 | [Megill, 2026, "The Axioms" section](https://us.metamath.org/mpeuni/mmset.html#axioms) |
| **[Axiom Transp](https://us.metamath.org/mpeuni/ax-3.html)**<br>换位公理 | "⊢ ((¬ 𝜑 → ¬ 𝜓) → (𝜓 → 𝜑))" | 若“非 𝜑”推出“非 𝜓”，则 𝜓 推出 𝜑（逆否）。 | [Megill, 2026, "The Axioms" section](https://us.metamath.org/mpeuni/mmset.html#axioms) |
| **[Rule of Modus Ponens](https://us.metamath.org/mpeuni/ax-mp.html)**<br>肯定前件规则 | "⊢ 𝜑 & ⊢ (𝜑 → 𝜓) ⇒ ⊢ 𝜓" | 由 𝜑 和“𝜑 推出 𝜓”，得到 𝜓。 | [Megill, 2026, "The Axioms" section](https://us.metamath.org/mpeuni/mmset.html#axioms) |

## References

Megill, N. (2026). *Metamath Proof Explorer home page* (last updated January 19, 2026). Metamath. Retrieved October 29, 2026, from <https://us.metamath.org/mpeuni/mmset.html>
