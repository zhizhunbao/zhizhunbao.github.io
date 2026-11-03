---
title: "6.6.1 Widget Attributes"
description: "WAI-ARIA 1.2, 6.6.1 Widget Attributes: aria-autocomplete, aria-checked, aria-disabled, aria-errormessage, aria-expanded, aria-haspopup, aria-hidden, aria-invalid, aria-label, aria-level, aria-modal, aria-multiline, aria-multiselectable, aria-orientation, aria-placeholder, aria-pressed, aria-readonly, aria-required, aria-selected, aria-sort, aria-valuemax, aria-valuemin, aria-valuenow, aria-valuetext."
ms.date: 2026-11-03
---

# 6.6.1 Widget Attributes

## Classification

![6.6.1 Widget Attributes: aria-autocomplete, aria-checked, aria-disabled, aria-errormessage, aria-expanded, aria-haspopup, aria-hidden, aria-invalid, aria-label, aria-level, aria-modal, aria-multiline, aria-multiselectable, aria-orientation, aria-placeholder, aria-pressed, aria-readonly, aria-required, aria-selected, aria-sort, aria-valuemax, aria-valuemin, aria-valuenow, aria-valuetext.](media/widget-attributes.png)

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **6.6.1 Widget Attributes**<br>控件属性 | "This section contains attributes specific to **common user interface elements** found on GUI systems or in rich internet applications which **receive user input and process user actions**." | 本节包含专用于 GUI 系统或富互联网应用中**常见用户界面元素**的属性，这些元素**接收用户输入并处理用户操作**。 | [World Wide Web Consortium, 2023, section 6.6.1](https://www.w3.org/TR/wai-aria-1.2/) |
| **aria-autocomplete**<br>自动补全 | "Indicates whether inputting text could **trigger display of one or more predictions** of the user's intended value for a combobox, searchbox, or textbox and specifies **how predictions would be presented** if they were made." | 指示在组合框、搜索框或文本框中输入文本是否会**触发显示一个或多个对用户意图值的预测**，并指定**预测将如何呈现**。 | [World Wide Web Consortium, 2023, section 6.7, aria-autocomplete](https://www.w3.org/TR/wai-aria-1.2/#aria-autocomplete) |
| **aria-checked**<br>选中状态 | "Indicates the current "**checked**" state of checkboxes, radio buttons, and other widgets." | 指示复选框、单选按钮和其他控件当前的“**选中**”状态。 | [World Wide Web Consortium, 2023, section 6.7, aria-checked](https://www.w3.org/TR/wai-aria-1.2/#aria-checked) |
| **aria-disabled**<br>禁用 | "Indicates that the element is **perceivable but disabled**, so it is **not editable or otherwise operable**." | 指示元素**可感知但已禁用**，因此**不可编辑或以其他方式操作**。 | [World Wide Web Consortium, 2023, section 6.7, aria-disabled](https://www.w3.org/TR/wai-aria-1.2/#aria-disabled) |
| **aria-errormessage**<br>错误消息来源 | "Identifies the element that provides an **error message for an object**." | 标识为对象提供**错误消息**的元素。 | [World Wide Web Consortium, 2023, section 6.7, aria-errormessage](https://www.w3.org/TR/wai-aria-1.2/#aria-errormessage) |
| **aria-expanded**<br>展开状态 | "Indicates whether a **grouping element owned or controlled by this element** is **expanded or collapsed**." | 指示**此元素拥有或控制的分组元素**是**展开还是折叠**。 | [World Wide Web Consortium, 2023, section 6.7, aria-expanded](https://www.w3.org/TR/wai-aria-1.2/#aria-expanded) |
| **aria-haspopup**<br>有弹出层 | "Indicates the **availability and type of interactive popup element**, such as menu or dialog, that can be triggered by an element." | 指示元素可以触发的**交互式弹出元素是否存在及其类型**，例如菜单或对话框。 | [World Wide Web Consortium, 2023, section 6.7, aria-haspopup](https://www.w3.org/TR/wai-aria-1.2/#aria-haspopup) |
| **aria-hidden**<br>隐藏 | "Indicates whether the element is **exposed to an accessibility API**." | 指示元素是否**向无障碍 API 公开**。 | [World Wide Web Consortium, 2023, section 6.7, aria-hidden](https://www.w3.org/TR/wai-aria-1.2/#aria-hidden) |
| **aria-invalid**<br>无效 | "Indicates the entered value **does not conform to the format expected by the application**." | 指示输入的值**不符合应用所期望的格式**。 | [World Wide Web Consortium, 2023, section 6.7, aria-invalid](https://www.w3.org/TR/wai-aria-1.2/#aria-invalid) |
| **aria-label**<br>标签 | "Defines a **string value that labels the current element**." | 定义**标注当前元素的字符串值**。 | [World Wide Web Consortium, 2023, section 6.7, aria-label](https://www.w3.org/TR/wai-aria-1.2/#aria-label) |
| **aria-level**<br>层级 | "Defines the **hierarchical level of an element within a structure**." | 定义**元素在结构中的层级**。 | [World Wide Web Consortium, 2023, section 6.7, aria-level](https://www.w3.org/TR/wai-aria-1.2/#aria-level) |
| **aria-modal**<br>模态 | "Indicates whether an element is **modal when displayed**." | 指示元素在**显示时是否为模态**。 | [World Wide Web Consortium, 2023, section 6.7, aria-modal](https://www.w3.org/TR/wai-aria-1.2/#aria-modal) |
| **aria-multiline**<br>多行 | "Indicates whether a text box accepts **multiple lines of input or only a single line**." | 指示文本框接受**多行输入还是只接受单行**。 | [World Wide Web Consortium, 2023, section 6.7, aria-multiline](https://www.w3.org/TR/wai-aria-1.2/#aria-multiline) |
| **aria-multiselectable**<br>可多选 | "Indicates that the user may **select more than one item** from the current selectable descendants." | 指示用户可以从当前可选的后代中**选择多于一项**。 | [World Wide Web Consortium, 2023, section 6.7, aria-multiselectable](https://www.w3.org/TR/wai-aria-1.2/#aria-multiselectable) |
| **aria-orientation**<br>方向 | "Indicates whether the element's orientation is **horizontal, vertical, or unknown/ambiguous**." | 指示元素的方向是**水平、垂直，还是未知/不明确**。 | [World Wide Web Consortium, 2023, section 6.7, aria-orientation](https://www.w3.org/TR/wai-aria-1.2/#aria-orientation) |
| **aria-placeholder**<br>占位提示 | "Defines a **short hint** (a word or short phrase) intended to **aid the user with data entry** when the control has no value." | 定义一个**简短提示**（一个词或短语），在控件没有值时**帮助用户输入数据**。 | [World Wide Web Consortium, 2023, section 6.7, aria-placeholder](https://www.w3.org/TR/wai-aria-1.2/#aria-placeholder) |
| **aria-pressed**<br>按下状态 | "Indicates the current "**pressed**" state of **toggle buttons**." | 指示**切换按钮**当前的“**按下**”状态。 | [World Wide Web Consortium, 2023, section 6.7, aria-pressed](https://www.w3.org/TR/wai-aria-1.2/#aria-pressed) |
| **aria-readonly**<br>只读 | "Indicates that the element is **not editable, but is otherwise operable**." | 指示元素**不可编辑，但其他方面可操作**。 | [World Wide Web Consortium, 2023, section 6.7, aria-readonly](https://www.w3.org/TR/wai-aria-1.2/#aria-readonly) |
| **aria-required**<br>必填 | "Indicates that **user input is required** on the element before a form may be submitted." | 指示在表单可以提交之前，该元素上**需要用户输入**。 | [World Wide Web Consortium, 2023, section 6.7, aria-required](https://www.w3.org/TR/wai-aria-1.2/#aria-required) |
| **aria-selected**<br>选定状态 | "Indicates the current "**selected**" state of **various widgets**." | 指示**各种控件**当前的“**选定**”状态。 | [World Wide Web Consortium, 2023, section 6.7, aria-selected](https://www.w3.org/TR/wai-aria-1.2/#aria-selected) |
| **aria-sort**<br>排序 | "Indicates if items in a table or grid are **sorted in ascending or descending order**." | 指示表格或网格中的项目是**按升序还是降序排序**。 | [World Wide Web Consortium, 2023, section 6.7, aria-sort](https://www.w3.org/TR/wai-aria-1.2/#aria-sort) |
| **aria-valuemax**<br>最大值 | "Defines the **maximum allowed value** for a range widget." | 定义范围控件**允许的最大值**。 | [World Wide Web Consortium, 2023, section 6.7, aria-valuemax](https://www.w3.org/TR/wai-aria-1.2/#aria-valuemax) |
| **aria-valuemin**<br>最小值 | "Defines the **minimum allowed value** for a range widget." | 定义范围控件**允许的最小值**。 | [World Wide Web Consortium, 2023, section 6.7, aria-valuemin](https://www.w3.org/TR/wai-aria-1.2/#aria-valuemin) |
| **aria-valuenow**<br>当前值 | "Defines the **current value** for a range widget." | 定义范围控件的**当前值**。 | [World Wide Web Consortium, 2023, section 6.7, aria-valuenow](https://www.w3.org/TR/wai-aria-1.2/#aria-valuenow) |
| **aria-valuetext**<br>值的文本 | "Defines the **human readable text alternative of aria-valuenow** for a range widget." | 定义范围控件 **aria-valuenow 的人类可读文本替代**。 | [World Wide Web Consortium, 2023, section 6.7, aria-valuetext](https://www.w3.org/TR/wai-aria-1.2/#aria-valuetext) |

## References

World Wide Web Consortium. (2023, June 6). *Accessible Rich Internet Applications (WAI-ARIA) 1.2* (W3C Recommendation). <https://www.w3.org/TR/wai-aria-1.2/>
