---
title: "5.2 Characteristics of Roles"
description: "WAI-ARIA 1.2, 5.2 Characteristics of Roles: Abstract Roles, Required States and Properties, Supported States and Properties, Inherited States and Properties, Prohibited States and Properties, Required Owned Elements, Required Context Role, Accessible Name Calculation, Presentational Children, Implicit Value for Role."
ms.date: 2026-11-03
---

# 5.2 Characteristics of Roles

## Classification

![5.2 Characteristics of Roles, in its 10 subsections: 5.2.1 Abstract Roles, 5.2.2 Required States and Properties, 5.2.3 Supported States and Properties, 5.2.4 Inherited States and Properties, 5.2.5 Prohibited States and Properties, 5.2.6 Required Owned Elements, 5.2.7 Required Context Role, 5.2.8 Accessible Name Calculation, 5.2.9 Presentational Children, 5.2.10 Implicit Value for Role.](media/characteristics-of-roles.png)

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **5.2 Characteristics of Roles**<br>角色的特征 | "Roles are **defined and described by their characteristics**." | 角色**由其特征来定义和描述**。 | [World Wide Web Consortium, 2023, section 5.2](https://www.w3.org/TR/wai-aria-1.2/) |
| **[5.2.1 Abstract Roles](abstract-roles.md)**<br>抽象角色 | "Abstract roles are the **foundation upon which all other WAI-ARIA roles are built**." | 抽象角色是**所有其他 WAI-ARIA 角色赖以构建的基础**。 | [World Wide Web Consortium, 2023, section 5.2.1](https://www.w3.org/TR/wai-aria-1.2/) |
| **[5.2.2 Required States and Properties](required-states-and-properties.md)**<br>必需的状态和属性 | "States and properties **specifically required for the role and subclass roles**." | **该角色及其子类角色特别要求**的状态和属性。 | [World Wide Web Consortium, 2023, section 5.2.2](https://www.w3.org/TR/wai-aria-1.2/) |
| **[5.2.3 Supported States and Properties](supported-states-and-properties.md)**<br>支持的状态和属性 | "States and properties **specifically applicable to the role and child roles**." | **特别适用于该角色及其子角色**的状态和属性。 | [World Wide Web Consortium, 2023, section 5.2.3](https://www.w3.org/TR/wai-aria-1.2/) |
| **[5.2.4 Inherited States and Properties](inherited-states-and-properties.md)**<br>继承的状态和属性 | "Informative list of properties that are **inherited by a role from superclass roles**." | 信息性列表，列出角色**从超类角色继承**的属性。 | [World Wide Web Consortium, 2023, section 5.2.4](https://www.w3.org/TR/wai-aria-1.2/) |
| **[5.2.5 Prohibited States and Properties](prohibited-states-and-properties.md)**<br>禁止的状态和属性 | "List of states and properties that are **prohibited on a role**." | **在某角色上被禁止**的状态和属性的列表。 | [World Wide Web Consortium, 2023, section 5.2.5](https://www.w3.org/TR/wai-aria-1.2/) |
| **[5.2.6 Required Owned Elements](required-owned-elements.md)**<br>必需的从属元素 | "Any element that **will be owned by the element with this role**." | **将被具有此角色的元素所拥有**的任何元素。 | [World Wide Web Consortium, 2023, section 5.2.6](https://www.w3.org/TR/wai-aria-1.2/) |
| **[5.2.7 Required Context Role](required-context-role.md)**<br>必需的上下文角色 | "The required context role defines the **owning container where this role is allowed**." | 必需的上下文角色定义**允许此角色出现的拥有容器**。 | [World Wide Web Consortium, 2023, section 5.2.7](https://www.w3.org/TR/wai-aria-1.2/) |
| **[5.2.8 Accessible Name Calculation](accessible-name-calculation.md)**<br>可访问名称计算 | (context) "author: **name comes from values provided by the author** in explicit markup features such as the aria-label attribute, the aria-labelledby attribute, or the host language labeling mechanism, such as the alt or title attributes in HTML, with HTML title attribute having the lowest precedence for specifying a text alternative." | （语境）author：**名称来自作者提供的值**，通过显式标记特性给出，例如 aria-label 属性、aria-labelledby 属性，或宿主语言的标注机制（如 HTML 的 alt 或 title 属性），其中 HTML 的 title 属性在指定文本替代时优先级最低。 | [World Wide Web Consortium, 2023, section 5.2.8](https://www.w3.org/TR/wai-aria-1.2/) |
| **[5.2.9 Presentational Children](presentational-children.md)**<br>呈现性子元素 | "The **DOM descendants are presentational**. User agents SHOULD NOT **expose descendants of this element** through the platform accessibility API." | **DOM 后代是呈现性的**。用户代理不应通过平台无障碍 API **公开此元素的后代**。 | [World Wide Web Consortium, 2023, section 5.2.9](https://www.w3.org/TR/wai-aria-1.2/) |
| **[5.2.10 Implicit Value for Role](implicit-value-for-role.md)**<br>角色的隐式值 | "Roles that **require a state or property to have a non-standard default value** indicate this in the "Implicit Value for Role"." | **要求某个状态或属性具有非标准默认值**的角色，在“角色的隐式值”中注明这一点。 | [World Wide Web Consortium, 2023, section 5.2.10](https://www.w3.org/TR/wai-aria-1.2/) |

## References

World Wide Web Consortium. (2023, June 6). *Accessible Rich Internet Applications (WAI-ARIA) 1.2* (W3C Recommendation). <https://www.w3.org/TR/wai-aria-1.2/>
