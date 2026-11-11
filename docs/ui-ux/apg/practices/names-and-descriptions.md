---
title: "2.3 Providing Accessible Names and Descriptions"
description: "ARIA Authoring Practices Guide, 2.3 Providing Accessible Names and Descriptions: accessible name, accessible description, aria-label, aria-labelledby, aria-describedby."
ms.date: 2026-11-09
---

# 2.3 Providing Accessible Names and Descriptions

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **2.3 Providing Accessible Names and Descriptions**<br>提供可访问名称和描述 | "Providing elements with accessible names, and where appropriate, accessible descriptions, is one of the **most important responsibilities** authors have when **developing accessible web experiences**." | 为元素提供可访问名称，并在合适时提供可访问描述，是作者**最重要的职责**之一，这项职责出现在**开发无障碍网页体验**时。 | [W3C Web Accessibility Initiative, n.d., "Introduction"](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/#:~:text=Providing%20elements%20with%20accessible%20names) |
| **Accessible Names and Descriptions**<br>可访问名称和描述 | "Assistive technologies **present names differently** from descriptions. For instance, screen readers typically **announce the name and role** of an element first" | 辅助技术**呈现名称的方式不同于**描述。例如，屏幕阅读器通常先**读出元素的名称和角色** | [W3C Web Accessibility Initiative, n.d., "What ARE Accessible Names and Descriptions?"](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/#:~:text=Assistive%20technologies%20present%20names%20differently) |
| **accessible name**<br>可访问名称 | "An accessible name is a **short string**, typically 1 to 3 words, that authors **associate with an element** to provide users of assistive technologies with a label for the element." | 可访问名称是一个**简短的字符串**，通常为 1 到 3 个词，由作者**与元素关联**，为辅助技术用户提供该元素的标签。 | [W3C Web Accessibility Initiative, n.d., "What ARE Accessible Names and Descriptions?"](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/#:~:text=An%20accessible%20name%20is%20a%20short%20string) |
| **accessible description**<br>可访问描述 | "An accessible description is also an **author-provided string** that is **rendered by assistive technologies**." | 可访问描述同样是一个**由作者提供的字符串**，它**由辅助技术呈现**。 | [W3C Web Accessibility Initiative, n.d., "What ARE Accessible Names and Descriptions?"](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/#:~:text=An%20accessible%20description%20is%20also) |
| **Naming with a String Attribute Via aria-label**<br>通过 aria-label 用字符串属性命名 | "The aria-label property enables authors to **name an element with a string** that is **not visually rendered**." | aria-label 属性让作者能够**用字符串为元素命名**，该字符串**不会在视觉上呈现**。 | [W3C Web Accessibility Initiative, n.d., "Naming with a String Attribute Via aria-label"](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/#:~:text=property%20enables%20authors%20to%20name%20an%20element) |
| **Naming with Referenced Content Via aria-labelledby**<br>通过 aria-labelledby 用引用内容命名 | "The aria-labelledby property enables authors to **reference other elements on the page** to **define an accessible name**." | aria-labelledby 属性让作者能够**引用页面上的其他元素**来**定义可访问名称**。 | [W3C Web Accessibility Initiative, n.d., "Naming with Referenced Content Via aria-labelledby"](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/#:~:text=enables%20authors%20to%20reference%20other%20elements) |
| **Describing by referencing content with aria-describedby**<br>通过 aria-describedby 引用内容来描述 | "The `aria-describedby` property **works similarly** to the `aria-labelledby` property. For example, a button could be **described by a sibling paragraph**." | `aria-describedby` 属性的**工作方式类似于** `aria-labelledby` 属性。例如，按钮可以**由相邻的段落来描述**。 | [W3C Web Accessibility Initiative, n.d., "Describing by referencing content with aria-describedby"](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/#:~:text=could%20be%20described%20by%20a%20sibling%20paragraph) |

## References

W3C Web Accessibility Initiative. (n.d.). *Providing Accessible Names and Descriptions*. ARIA Authoring Practices Guide. Retrieved October 19, 2026, from <https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/>
