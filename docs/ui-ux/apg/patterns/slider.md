---
title: "1.6 Slider"
description: "ARIA Authoring Practices Guide, 1.6 Slider: slider thumb, Right Arrow, Up Arrow, Left Arrow, Down Arrow, Home, End, Page Up, Page Down, slider, aria-valuenow, aria-valuemin, aria-valuemax, aria-valuetext, aria-labelledby, aria-label, aria-orientation."
ms.date: 2026-11-16
---

# 1.6 Slider

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **1.6 Slider**<br>滑块 | "A slider is an **input** where the user **selects a value from within a given range**." | 滑块是一种**输入**，用户在其中**从给定范围内选择一个值**。 | [W3C Web Accessibility Initiative, n.d., "About This Pattern"](https://www.w3.org/WAI/ARIA/apg/patterns/slider/#:~:text=A%20slider%20is%20an%20input) |
| **slider thumb**<br>滑块手柄 | "Sliders typically have a **slider thumb** that can be moved along a bar, rail, or track to **change the value** of the slider." | 滑块通常有一个**滑块手柄**，它可以沿着条、轨道或滑道移动，以**改变滑块的值**。 | [W3C Web Accessibility Initiative, n.d., "About This Pattern"](https://www.w3.org/WAI/ARIA/apg/patterns/slider/#:~:text=Sliders%20typically%20have%20a%20slider%20thumb) |
| **Right Arrow**<br>右方向键 | "**Increase the value** of the slider by **one step**." | 把滑块的值**增加**，幅度为**一步**。 | [W3C Web Accessibility Initiative, n.d., "Keyboard Interaction"](https://www.w3.org/WAI/ARIA/apg/patterns/slider/#:~:text=Right%20Arrow) |
| **Up Arrow**<br>上方向键 | "**Increase the value** of the slider by **one step**." | 把滑块的值**增加**，幅度为**一步**。 | [W3C Web Accessibility Initiative, n.d., "Keyboard Interaction"](https://www.w3.org/WAI/ARIA/apg/patterns/slider/#:~:text=Up%20Arrow) |
| **Left Arrow**<br>左方向键 | "**Decrease the value** of the slider by **one step**." | 把滑块的值**减少**，幅度为**一步**。 | [W3C Web Accessibility Initiative, n.d., "Keyboard Interaction"](https://www.w3.org/WAI/ARIA/apg/patterns/slider/#:~:text=Left%20Arrow) |
| **Down Arrow**<br>下方向键 | "**Decrease the value** of the slider by **one step**." | 把滑块的值**减少**，幅度为**一步**。 | [W3C Web Accessibility Initiative, n.d., "Keyboard Interaction"](https://www.w3.org/WAI/ARIA/apg/patterns/slider/#:~:text=Down%20Arrow) |
| **Home**<br>Home 键 | "Set the slider to the **first allowed value** in its **range**." | 把滑块设为其范围内的**第一个允许值**，即**范围**的起点。 | [W3C Web Accessibility Initiative, n.d., "Keyboard Interaction"](https://www.w3.org/WAI/ARIA/apg/patterns/slider/#:~:text=Set%20the%20slider%20to%20the%20first) |
| **End**<br>End 键 | "Set the slider to the **last allowed value** in its **range**." | 把滑块设为其范围内的**最后一个允许值**，即**范围**的终点。 | [W3C Web Accessibility Initiative, n.d., "Keyboard Interaction"](https://www.w3.org/WAI/ARIA/apg/patterns/slider/#:~:text=Set%20the%20slider%20to%20the%20last) |
| **Page Up (Optional)**<br>Page Up 键（可选） | "**Increase the slider value** by an amount **larger than the step change** made by Up Arrow." | **增加滑块的值**，增加量**大于上方向键每次的步长**。 | [W3C Web Accessibility Initiative, n.d., "Keyboard Interaction"](https://www.w3.org/WAI/ARIA/apg/patterns/slider/#:~:text=Increase%20the%20slider%20value%20by%20an%20amount) |
| **Page Down (Optional)**<br>Page Down 键（可选） | "**Decrease the slider value** by an amount **larger than the step change** made by Down Arrow." | **减少滑块的值**，减少量**大于下方向键每次的步长**。 | [W3C Web Accessibility Initiative, n.d., "Keyboard Interaction"](https://www.w3.org/WAI/ARIA/apg/patterns/slider/#:~:text=Decrease%20the%20slider%20value%20by%20an%20amount) |
| **slider**<br>滑块角色 | "The element serving as the **focusable slider control** has **role slider**." | 充当**可聚焦滑块控件**的元素具有 **slider 角色**。 | [W3C Web Accessibility Initiative, n.d., "WAI-ARIA Roles, States, and Properties"](https://www.w3.org/WAI/ARIA/apg/patterns/slider/#:~:text=The%20element%20serving%20as%20the%20focusable) |
| **aria-valuenow**<br>当前值 | "The slider element has the aria-valuenow property set to a **decimal value** representing the **current value** of the slider." | 滑块元素的 aria-valuenow 属性设为一个**十进制数值**，表示滑块的**当前值**。 | [W3C Web Accessibility Initiative, n.d., "WAI-ARIA Roles, States, and Properties"](https://www.w3.org/WAI/ARIA/apg/patterns/slider/#:~:text=has%20the%20aria%2Dvaluenow%20property) |
| **aria-valuemin**<br>最小值 | "The slider element has the aria-valuemin property set to a **decimal value** representing the **minimum allowed value** of the slider." | 滑块元素的 aria-valuemin 属性设为一个**十进制数值**，表示滑块的**最小允许值**。 | [W3C Web Accessibility Initiative, n.d., "WAI-ARIA Roles, States, and Properties"](https://www.w3.org/WAI/ARIA/apg/patterns/slider/#:~:text=has%20the%20aria%2Dvaluemin%20property) |
| **aria-valuemax**<br>最大值 | "The slider element has the aria-valuemax property set to a **decimal value** representing the **maximum allowed value** of the slider." | 滑块元素的 aria-valuemax 属性设为一个**十进制数值**，表示滑块的**最大允许值**。 | [W3C Web Accessibility Initiative, n.d., "WAI-ARIA Roles, States, and Properties"](https://www.w3.org/WAI/ARIA/apg/patterns/slider/#:~:text=has%20the%20aria%2Dvaluemax%20property) |
| **aria-valuetext**<br>值的文字 | "If the value of aria-valuenow is **not user-friendly**, e.g., the day of the week is represented by a number, the aria-valuetext property is set to a string that **makes the slider value understandable**, e.g., "Monday"." | 如果 aria-valuenow 的值**对用户不友好**，例如星期几用数字表示，就把 aria-valuetext 属性设为一个**让滑块的值易于理解**的字符串，例如 "Monday"。 | [W3C Web Accessibility Initiative, n.d., "WAI-ARIA Roles, States, and Properties"](https://www.w3.org/WAI/ARIA/apg/patterns/slider/#:~:text=If%20the%20value%20of%20aria%2Dvaluenow%20is%20not) |
| **aria-labelledby**<br>由谁标注 | "If the slider has a **visible label**, it is referenced by **aria-labelledby** on the slider element." | 如果滑块有**可见的标签**，滑块元素上的 **aria-labelledby** 会引用这个标签。 | [W3C Web Accessibility Initiative, n.d., "WAI-ARIA Roles, States, and Properties"](https://www.w3.org/WAI/ARIA/apg/patterns/slider/#:~:text=If%20the%20slider%20has%20a%20visible%20label) |
| **aria-label**<br>标签 | "**Otherwise**, the slider element has a label provided by **aria-label**." | **否则**，滑块元素的标签由 **aria-label** 提供。 | [W3C Web Accessibility Initiative, n.d., "WAI-ARIA Roles, States, and Properties"](https://www.w3.org/WAI/ARIA/apg/patterns/slider/#:~:text=Otherwise%2C%20the%20slider%20element%20has) |
| **aria-orientation**<br>方向 | "If the slider is **vertically oriented**, it has aria-orientation set to vertical. The **default value** of aria-orientation for a slider is horizontal." | 如果滑块是**竖直方向**的，它的 aria-orientation 设为 vertical。滑块的 aria-orientation **默认值**是 horizontal。 | [W3C Web Accessibility Initiative, n.d., "WAI-ARIA Roles, States, and Properties"](https://www.w3.org/WAI/ARIA/apg/patterns/slider/#:~:text=If%20the%20slider%20is%20vertically%20oriented) |

## References

W3C Web Accessibility Initiative. (n.d.). *Slider pattern*. ARIA Authoring Practices Guide. Retrieved November 16, 2026, from <https://www.w3.org/WAI/ARIA/apg/patterns/slider/>
