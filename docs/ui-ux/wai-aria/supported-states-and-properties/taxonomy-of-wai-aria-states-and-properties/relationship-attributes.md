---
title: "6.6.4 Relationship Attributes"
description: "WAI-ARIA 1.2, 6.6.4 Relationship Attributes: aria-activedescendant, aria-colcount, aria-colindex, aria-colspan, aria-controls, aria-describedby, aria-details, aria-errormessage, aria-flowto, aria-labelledby, aria-owns, aria-posinset, aria-rowcount, aria-rowindex, aria-rowspan, aria-setsize."
ms.date: 2026-11-03
---

# 6.6.4 Relationship Attributes

## Classification

![6.6.4 Relationship Attributes: aria-activedescendant, aria-colcount, aria-colindex, aria-colspan, aria-controls, aria-describedby, aria-details, aria-errormessage, aria-flowto, aria-labelledby, aria-owns, aria-posinset, aria-rowcount, aria-rowindex, aria-rowspan, aria-setsize.](media/relationship-attributes.png)

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **6.6.4 Relationship Attributes**<br>关系属性 | "This section lists attributes that indicate **relationships or associations between elements** which cannot be readily determined from the document structure." | 本节列出指示**元素之间的关系或关联**的属性，这些关系无法从文档结构中直接确定。 | [World Wide Web Consortium, 2023, section 6.6.4](https://www.w3.org/TR/wai-aria-1.2/) |
| **aria-activedescendant**<br>当前活动后代 | "Identifies the **currently active element** when DOM focus is on a composite widget, combobox, textbox, group, or application." | 当 DOM 焦点在复合控件、组合框、文本框、组或应用上时，标识**当前活动的元素**。 | [World Wide Web Consortium, 2023, section 6.7, aria-activedescendant](https://www.w3.org/TR/wai-aria-1.2/#aria-activedescendant) |
| **aria-colcount**<br>列总数 | "Defines the **total number of columns** in a table, grid, or treegrid." | 定义表格、网格或树形网格中的**列总数**。 | [World Wide Web Consortium, 2023, section 6.7, aria-colcount](https://www.w3.org/TR/wai-aria-1.2/#aria-colcount) |
| **aria-colindex**<br>列索引 | "Defines an element's **column index or position** with respect to the total number of columns within a table, grid, or treegrid." | 定义元素相对于表格、网格或树形网格列总数的**列索引或位置**。 | [World Wide Web Consortium, 2023, section 6.7, aria-colindex](https://www.w3.org/TR/wai-aria-1.2/#aria-colindex) |
| **aria-colspan**<br>跨列数 | "Defines the **number of columns spanned by a cell or gridcell** within a table, grid, or treegrid." | 定义表格、网格或树形网格中**单元格或网格单元格所跨的列数**。 | [World Wide Web Consortium, 2023, section 6.7, aria-colspan](https://www.w3.org/TR/wai-aria-1.2/#aria-colspan) |
| **aria-controls**<br>控制对象 | "Identifies the element (or elements) whose **contents or presence are controlled by the current element**." | 标识**内容或存在由当前元素控制**的元素。 | [World Wide Web Consortium, 2023, section 6.7, aria-controls](https://www.w3.org/TR/wai-aria-1.2/#aria-controls) |
| **aria-describedby**<br>描述来源 | "Identifies the element (or elements) that **describes the object**." | 标识**描述该对象**的元素。 | [World Wide Web Consortium, 2023, section 6.7, aria-describedby](https://www.w3.org/TR/wai-aria-1.2/#aria-describedby) |
| **aria-details**<br>详细描述来源 | "Identifies the element that provides a **detailed, extended description** for the object." | 标识为该对象提供**详细、扩展描述**的元素。 | [World Wide Web Consortium, 2023, section 6.7, aria-details](https://www.w3.org/TR/wai-aria-1.2/#aria-details) |
| **aria-errormessage**<br>错误消息来源 | "Identifies the element that provides an **error message for an object**." | 标识为对象提供**错误消息**的元素。 | [World Wide Web Consortium, 2023, section 6.7, aria-errormessage](https://www.w3.org/TR/wai-aria-1.2/#aria-errormessage) |
| **aria-flowto**<br>阅读流向 | "Identifies the next element (or elements) in an **alternate reading order of content** which, at the user's discretion, allows assistive technology to override the general default of reading in document source order." | 标识**替代阅读顺序**中的下一个元素，由用户决定，让辅助技术可以不按文档源顺序朗读的默认方式。 | [World Wide Web Consortium, 2023, section 6.7, aria-flowto](https://www.w3.org/TR/wai-aria-1.2/#aria-flowto) |
| **aria-labelledby**<br>标签来源 | "Identifies the element (or elements) that **labels the current element**." | 标识**标注当前元素**的元素。 | [World Wide Web Consortium, 2023, section 6.7, aria-labelledby](https://www.w3.org/TR/wai-aria-1.2/#aria-labelledby) |
| **aria-owns**<br>拥有对象 | "Identifies an element (or elements) in order to define a **visual, functional, or contextual parent/child relationship** between DOM elements where the DOM hierarchy cannot be used to represent the relationship." | 标识元素，以在 DOM 层次无法表示该关系时，定义 DOM 元素之间**视觉上、功能上或上下文上的父子关系**。 | [World Wide Web Consortium, 2023, section 6.7, aria-owns](https://www.w3.org/TR/wai-aria-1.2/#aria-owns) |
| **aria-posinset**<br>集合中的位置 | "Defines an element's **number or position in the current set** of listitems or treeitems." | 定义元素在当前列表项或树项**集合中的序号或位置**。 | [World Wide Web Consortium, 2023, section 6.7, aria-posinset](https://www.w3.org/TR/wai-aria-1.2/#aria-posinset) |
| **aria-rowcount**<br>行总数 | "Defines the **total number of rows** in a table, grid, or treegrid." | 定义表格、网格或树形网格中的**行总数**。 | [World Wide Web Consortium, 2023, section 6.7, aria-rowcount](https://www.w3.org/TR/wai-aria-1.2/#aria-rowcount) |
| **aria-rowindex**<br>行索引 | "Defines an element's **row index or position** with respect to the total number of rows within a table, grid, or treegrid." | 定义元素相对于表格、网格或树形网格行总数的**行索引或位置**。 | [World Wide Web Consortium, 2023, section 6.7, aria-rowindex](https://www.w3.org/TR/wai-aria-1.2/#aria-rowindex) |
| **aria-rowspan**<br>跨行数 | "Defines the **number of rows spanned by a cell or gridcell** within a table, grid, or treegrid." | 定义表格、网格或树形网格中**单元格或网格单元格所跨的行数**。 | [World Wide Web Consortium, 2023, section 6.7, aria-rowspan](https://www.w3.org/TR/wai-aria-1.2/#aria-rowspan) |
| **aria-setsize**<br>集合大小 | "Defines the **number of items in the current set** of listitems or treeitems." | 定义当前列表项或树项**集合中的项目数**。 | [World Wide Web Consortium, 2023, section 6.7, aria-setsize](https://www.w3.org/TR/wai-aria-1.2/#aria-setsize) |

## References

World Wide Web Consortium. (2023, June 6). *Accessible Rich Internet Applications (WAI-ARIA) 1.2* (W3C Recommendation). <https://www.w3.org/TR/wai-aria-1.2/>
