---
title: "1.23 Tooltip"
description: "ARIA Authoring Practices Guide, 1.23 Tooltip: non-modal dialog, Escape, tooltip, aria-describedby."
ms.date: 2026-11-16
---

# 1.23 Tooltip

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **1.23 Tooltip**<br>工具提示 | "A tooltip is a **popup** that displays information related to an element when the element **receives keyboard focus** or the mouse hovers over it. It typically appears after a small delay and disappears when Escape is pressed or on mouse out." | 工具提示是一种**弹出层**，当某个元素**获得键盘焦点**或鼠标悬停在其上时，显示与该元素相关的信息。它通常在短暂延迟后出现，在按下 Escape 或鼠标移出时消失。 | [W3C Web Accessibility Initiative, n.d., "About This Pattern"](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/#:~:text=A%20tooltip%20is%20a%20popup) |
| **non-modal dialog**<br>非模态对话框 | (context) "Tooltip widgets **do not receive focus**. A hover that contains focusable elements can be made using a **non-modal dialog**." | （语境）工具提示控件**不会获得焦点**。包含可聚焦元素的悬停内容可以用**非模态对话框**来实现。 | [W3C Web Accessibility Initiative, n.d., "About This Pattern"](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/#:~:text=Tooltip%20widgets%20do%20not%20receive%20focus) |
| **Escape**<br>Esc 键 | "**Dismisses** the **Tooltip**." | **关闭**这个**工具提示**。 | [W3C Web Accessibility Initiative, n.d., "Keyboard Interaction"](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/#:~:text=Dismisses%20the%20Tooltip) |
| **tooltip**<br>工具提示角色 | "The element that serves as the **tooltip container** has **role tooltip**." | 充当**工具提示容器**的元素具有 **tooltip 角色**。 | [W3C Web Accessibility Initiative, n.d., "WAI-ARIA Roles, States, and Properties"](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/#:~:text=serves%20as%20the%20tooltip%20container) |
| **aria-describedby**<br>由谁描述 | "The element that **triggers the tooltip** references the tooltip element with **aria-describedby**." | **触发工具提示**的元素通过 **aria-describedby** 引用工具提示元素。 | [W3C Web Accessibility Initiative, n.d., "WAI-ARIA Roles, States, and Properties"](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/#:~:text=The%20element%20that%20triggers%20the%20tooltip) |

## References

W3C Web Accessibility Initiative. (n.d.). *Tooltip pattern*. ARIA Authoring Practices Guide. Retrieved November 16, 2026, from <https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/>
