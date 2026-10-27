---
title: "1.1 Sets, relations, functions, cardinality"
description: "CS2023 MSF-Discrete, 1.1 Sets, relations, functions, cardinality (CS Core): Set, Relation, Function, Cardinality, Finite set, Countable set, Uncountable set, Sum rule, Product rule, Inclusion-exclusion principle."
ms.date: 2026-10-27
---

# 1.1 Sets, relations, functions, cardinality

## Classification

![Sets, relations, functions, cardinality: its 10 terms. In one column, in CS2023 order: Set, Relation, Function, Cardinality. Set expands into a side group joined by a dashed curve: Finite set, Countable set, Uncountable set. Cardinality expands into a side group joined by a dashed curve: Sum rule, Product rule, Inclusion-exclusion principle.](media/sets-relations-functions-cardinality.png)

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **Set**<br>集合 | "A set is a finite or infinite **collection of objects** in which **order has no significance**, and multiplicity is generally also ignored (unlike a list or multiset)." | 集合是有限或无限的**对象的汇集**，其中**顺序没有意义**，重复次数通常也被忽略（不同于列表或多重集）。 | [Weisstein, n.d.-h, "Set" entry, para. 1](https://mathworld.wolfram.com/Set.html#:~:text=A%20set%20is%20a%20finite%20or%20infinite%20collection%20of%20objects) |
| **Relation**<br>关系 | "A relation is **any subset of a Cartesian product**." | 关系是**笛卡儿积的任意子集**。 | [Weisstein, n.d.-g, "Relation" entry, para. 1](https://mathworld.wolfram.com/Relation.html#:~:text=A%20relation%20is%20any%20subset%20of%20a%20Cartesian%20product) |
| **Function**<br>函数 | "A function is a relation that **uniquely associates members of one set** with **members of another set**." | 函数是一种关系，它把**一个集合的成员唯一地对应**到**另一个集合的成员**。 | [Weisstein, n.d.-d, "Function" entry, para. 1](https://mathworld.wolfram.com/Function.html#:~:text=A%20function%20is%20a%20relation%20that%20uniquely%20associates%20members%20of%20one%20set) |
| **Cardinality**<br>基数 | "In formal set theory, a cardinal number (also called 'the cardinality') is a **type of number** defined in such a way that **any method of counting sets using it gives the same result**." | 在形式集合论中，基数（也称为 cardinality）是一种**数的类型**，它的定义方式保证**用它计数集合的任何方法都得到相同的结果**。 | [Weisstein, n.d.-a, "Cardinal number" entry, para. 2](https://mathworld.wolfram.com/CardinalNumber.html#:~:text=is%20a%20type%20of%20number%20defined%20in%20such%20a%20way%20that%20any%20method%20of%20counting%20sets) |
| **Finite set**<br>有限集 | "A finite set is a set X **whose elements can be numbered through from 1 to n**, for **some positive integer n**." | 有限集是这样一个集合 X：**它的元素可以从 1 编号到 n**，其中 n 是**某个正整数**。 | [Weisstein, n.d.-c, "Finite set" entry, para. 1](https://mathworld.wolfram.com/FiniteSet.html#:~:text=A%20finite%20set%20is%20a%20set) |
| **Countable set**<br>可数集 | "A countable set is a set that is **either finite or denumerable**." | 可数集是**有限的或可列的**集合。 | [Weisstein, n.d.-b, "Countable set" entry, para. 1](https://mathworld.wolfram.com/CountableSet.html#:~:text=A%20countable%20set%20is%20a%20set%20that%20is%20either%20finite%20or%20denumerable) |
| **Uncountable set**<br>不可数集 | "The phrase 'uncountably infinite' describes **an infinite set**, such as the real numbers, which is **not countably infinite**." | “不可数无限”一词描述的是**一个无限集合**（例如实数集），它**不是可数无限的**。 | [Weisstein, n.d.-i, "Uncountably infinite" entry, para. 1](https://mathworld.wolfram.com/UncountablyInfinite.html#:~:text=describes%20an%20infinite%20set) |
| **Sum rule**<br>加法原理 | (context) "Let \|A\| denote the **cardinal number of set A**, then it follows immediately that **\|A ∪ B\| = \|A\| + \|B\| − \|A ∩ B\|**." | （语境）设 \|A\| 表示**集合 A 的基数**，则立即可得 **\|A ∪ B\| = \|A\| + \|B\| − \|A ∩ B\|**。 | [Weisstein, n.d.-e, "Inclusion-exclusion principle" entry, para. 1](https://mathworld.wolfram.com/Inclusion-ExclusionPrinciple.html#:~:text=denote%20the%20cardinal%20number%20of%20set) |
| **Product rule**<br>乘法原理 | "In particular, if **one choice can be made in m ways** and a second in n ways for each first choice, then **the pair of choices can be made in mn ways**." | 特别地，如果**第一个选择有 m 种做法**，而对每个第一个选择，第二个选择有 n 种做法，那么**这一对选择共有 mn 种做法**。 | [Weisstein, n.d.-f, "Multiplication principle" entry, para. 2](https://mathworld.wolfram.com/MultiplicationPrinciple.html#:~:text=if%20one%20choice%20can%20be%20made%20in) |
| **Inclusion-exclusion principle**<br>容斥原理 | "Let \|A\| denote the **cardinal number of set A**, then it follows immediately that **\|A ∪ B\| = \|A\| + \|B\| − \|A ∩ B\|**." | 设 \|A\| 表示**集合 A 的基数**，则立即可得 **\|A ∪ B\| = \|A\| + \|B\| − \|A ∩ B\|**。 | [Weisstein, n.d.-e, "Inclusion-exclusion principle" entry, para. 1](https://mathworld.wolfram.com/Inclusion-ExclusionPrinciple.html#:~:text=denote%20the%20cardinal%20number%20of%20set) |

## References

- Joint Task Force on Computing Curricula. (2024). *Computer science curricula 2023*. Association for Computing Machinery. <https://doi.org/10.1145/3664191>
- Weisstein, E. W. (n.d.-a). *Cardinal number*. MathWorld: A Wolfram Resource. Retrieved October 27, 2026, from <https://mathworld.wolfram.com/CardinalNumber.html>
- Weisstein, E. W. (n.d.-b). *Countable set*. MathWorld: A Wolfram Resource. Retrieved October 27, 2026, from <https://mathworld.wolfram.com/CountableSet.html>
- Weisstein, E. W. (n.d.-c). *Finite set*. MathWorld: A Wolfram Resource. Retrieved October 27, 2026, from <https://mathworld.wolfram.com/FiniteSet.html>
- Weisstein, E. W. (n.d.-d). *Function*. MathWorld: A Wolfram Resource. Retrieved October 27, 2026, from <https://mathworld.wolfram.com/Function.html>
- Weisstein, E. W. (n.d.-e). *Inclusion-exclusion principle*. MathWorld: A Wolfram Resource. Retrieved October 27, 2026, from <https://mathworld.wolfram.com/Inclusion-ExclusionPrinciple.html>
- Weisstein, E. W. (n.d.-f). *Multiplication principle*. MathWorld: A Wolfram Resource. Retrieved October 27, 2026, from <https://mathworld.wolfram.com/MultiplicationPrinciple.html>
- Weisstein, E. W. (n.d.-g). *Relation*. MathWorld: A Wolfram Resource. Retrieved October 27, 2026, from <https://mathworld.wolfram.com/Relation.html>
- Weisstein, E. W. (n.d.-h). *Set*. MathWorld: A Wolfram Resource. Retrieved October 27, 2026, from <https://mathworld.wolfram.com/Set.html>
- Weisstein, E. W. (n.d.-i). *Uncountably infinite*. MathWorld: A Wolfram Resource. Retrieved October 27, 2026, from <https://mathworld.wolfram.com/UncountablyInfinite.html>
