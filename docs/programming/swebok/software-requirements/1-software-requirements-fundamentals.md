---
title: "1. Software Requirements Fundamentals"
description: "SWEBOK, Chapter 1: Software Requirements: 1. Software Requirements Fundamentals: 16 terms."
ms.date: 2026-11-07
---

# 1. Software Requirements Fundamentals

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **Software Requirements Fundamentals**<br>软件需求基础 | (No definition) | （无定义） | [Washizaki, 2026, Chapter 1, section 1, p. 1-2](https://www.computer.org/education/bodies-of-knowledge/software-engineering/v4) |
| **Software Requirement**<br>软件需求 | "At its most basic, a **software requirement** is a **property that must be exhibited to solve a real-world problem**." | 从最基本的层面说，**软件需求**是**为解决某个现实问题而必须表现出来的一种属性**。 | [Washizaki, 2026, Chapter 1, section 1.1, para. 3, p. 1-3](https://www.computer.org/education/bodies-of-knowledge/software-engineering/v4) |
| **Categories of Software Requirements**<br>软件需求的类别 | "Figure 1.2 shows the **categories of software requirements** defined in this KA and the **relationships among those categories**." | 图 1.2 展示了本知识领域定义的**软件需求类别**以及**这些类别之间的关系**。 | [Washizaki, 2026, Chapter 1, section 1.2, para. 1, p. 1-3](https://www.computer.org/education/bodies-of-knowledge/software-engineering/v4) |
| **Software Product Requirements**<br>软件产品需求 | "**Software product requirements** specify the **software’s expected form, fit or function**." | **软件产品需求**规定**软件预期的形式、适配或功能**。 | [Washizaki, 2026, Chapter 1, section 1.3, para. 1, p. 1-3](https://www.computer.org/education/bodies-of-knowledge/software-engineering/v4) |
| **Software Project Requirements**<br>软件项目需求 | "**Software project requirements** — also called process requirements or, sometimes business requirements — **constrain the project that constructs the software**." | **软件项目需求**（也叫过程需求，有时叫业务需求）**约束构建该软件的项目**。 | [Washizaki, 2026, Chapter 1, section 1.3, para. 1, p. 1-3](https://www.computer.org/education/bodies-of-knowledge/software-engineering/v4) |
| **Functional Requirements**<br>功能需求 | "**Functional requirements** specify **observable behaviors that the software is to provide** — policies to be enforced and processes to be carried out." | **功能需求**规定**软件要提供的可观察的行为**，即要执行的规则和要完成的流程。 | [Washizaki, 2026, Chapter 1, section 1.4, para. 1, p. 1-4](https://www.computer.org/education/bodies-of-knowledge/software-engineering/v4) |
| **Nonfunctional Requirements**<br>非功能需求 | "**Nonfunctional requirements** in some way **constrain the technologies to be used in the implementation**: ..." | **非功能需求**以某种方式**约束实现中要用的技术**：…… | [Washizaki, 2026, Chapter 1, section 1.5, para. 1, p. 1-4](https://www.computer.org/education/bodies-of-knowledge/software-engineering/v4) |
| **Technology Constraints**<br>技术约束 | "These requirements **mandate — or prohibit —** use of **specific, named automation technologies or defined infrastructures**." | 这类需求**强制使用或禁止使用**某些**特定的、点名的自动化技术或既定的基础设施**。 | [Washizaki, 2026, Chapter 1, section 1.6, para. 1, p. 1-4](https://www.computer.org/education/bodies-of-knowledge/software-engineering/v4) |
| **Quality of Service Constraints**<br>服务质量约束 | "These requirements **do not constrain the use of specific, named technologies**. Instead, these specify **acceptable performance levels** an automated solution must exhibit." | 这类需求**不约束特定、点名技术的使用**，而是规定自动化方案必须达到的**可接受的性能水平**。 | [Washizaki, 2026, Chapter 1, section 1.7, para. 1, p. 1-4](https://www.computer.org/education/bodies-of-knowledge/software-engineering/v4) |
| **Divide and Conquer**<br>分而治之 | "One large problem becomes **two smaller ones**. This is classic **divide and conquer** complexity management;" | 一个大问题变成**两个小问题**。这就是经典的**分而治之**式复杂度管理； | [Washizaki, 2026, Chapter 1, section 1.8, para. 2, item 1, p. 1-5](https://www.computer.org/education/bodies-of-knowledge/software-engineering/v4) |
| **Perfect Technology Filter**<br>完美技术过滤法 | "The **Perfect Technology Filter** originally described in [18, c1-4] but also explained in [8] and [9, c4] helps **separate functional from nonfunctional requirements**." | **完美技术过滤法**最早见于 [18, c1-4]，[8] 和 [9, c4] 也有解释，它帮助**把功能需求和非功能需求分开**。 | [Washizaki, 2026, Chapter 1, section 1.8, para. 3, p. 1-5](https://www.computer.org/education/bodies-of-knowledge/software-engineering/v4) |
| **System**<br>系统 | "The International Council on Systems Engineering (INCOSE) defines a **system** as “an **interacting combination of elements to accomplish a defined objective**. These include hardware, software, firmware, people, information, techniques, facilities, services, and other support elements” [24]." | 国际系统工程委员会（INCOSE）把**系统**定义为「**为实现既定目标而相互作用的要素组合**。这些要素包括硬件、软件、固件、人员、信息、技术、设施、服务和其他支持要素」[24]。 | [Washizaki, 2026, Chapter 1, section 1.9, para. 1, p. 1-5](https://www.computer.org/education/bodies-of-knowledge/software-engineering/v4) |
| **System Requirements**<br>系统需求 | "**System requirements** apply to **larger systems** — for example, an autonomous vehicle. Software requirements apply only to an element of software in that larger system." | **系统需求**适用于**更大的系统**，例如一辆自动驾驶汽车。软件需求只适用于这个更大系统中的软件要素。 | [Washizaki, 2026, Chapter 1, section 1.9, para. 2, p. 1-5](https://www.computer.org/education/bodies-of-knowledge/software-engineering/v4) |
| **Derived Requirement**<br>派生需求 | "The aerospace industry has long used the term **derived requirement** to mean a requirement that was **not made by a stakeholder external to the overall project** but that was **imposed inside the larger development team**." | 航空航天业长期使用**派生需求**一词，指一项需求**不是由整个项目之外的干系人提出的**，而是**在更大的开发团队内部施加的**。 | [Washizaki, 2026, Chapter 1, section 1.10, para. 2, p. 1-6](https://www.computer.org/education/bodies-of-knowledge/software-engineering/v4) |
| **Requirements Development**<br>需求开发 | "**Requirements development**, as a whole, can be thought of as “**reaching an agreement on what software is to be constructed**.”" | **需求开发**整体上可以看作「**就要构建什么软件达成共识**」。 | [Washizaki, 2026, Chapter 1, section 1.11, para. 2, p. 1-6](https://www.computer.org/education/bodies-of-knowledge/software-engineering/v4) |
| **Requirements Management**<br>需求管理 | "In contrast, **requirements management** can be considered “**maintaining that agreement over time**.”" | 相对地，**需求管理**可以看作「**随时间维护这一共识**」。 | [Washizaki, 2026, Chapter 1, section 1.11, para. 2, p. 1-6](https://www.computer.org/education/bodies-of-knowledge/software-engineering/v4) |

## References

IEEE Computer Society. (n.d.). *SWEBOK Guide V4.0 topics*. Retrieved November 7, 2026, from <https://www.computer.org/education/bodies-of-knowledge/software-engineering/topics>

Washizaki, H. (Ed.). (2026). *Guide to the software engineering body of knowledge (SWEBOK Guide), version 4.0a*. IEEE Computer Society. <https://www.computer.org/education/bodies-of-knowledge/software-engineering/v4>
