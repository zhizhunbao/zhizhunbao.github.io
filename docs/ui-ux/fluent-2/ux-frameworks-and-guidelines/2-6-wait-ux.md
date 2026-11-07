---
title: "2.6 Wait UX"
description: "Fluent 2, 2.6 Wait UX: 12 terms."
ms.date: 2026-11-06
---

# 2.6 Wait UX

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **Wait UX**<br>等待体验（Wait UX） | "Wait UX refers to **the design of user experiences** during **moments of delay**—when a system is processing, loading, or retrieving data." | 等待体验指**用户体验的设计**，针对的是**延迟的时刻**，即系统正在处理、加载或获取数据的时候。 | [Microsoft, n.d., "Wait UX"](https://fluent2.microsoft.design/wait-ux#:~:text=Wait%20UX%20refers%20to%20the%20design) |
| **Determinate indicators**<br>确定型指示器 | (context) "When possible, use **determinate indicators** to **show actual progress**." | （语境）尽可能使用**确定型指示器**来**显示实际进度**。 | [Microsoft, n.d., "Wait UX", Principles](https://fluent2.microsoft.design/wait-ux#:~:text=When%20possible%2C%20use%20determinate%20indicators%20to) |
| **Indeterminate indicators**<br>不确定型指示器 | (context) "If **progress cannot be measured**, use indeterminate indicators **only for short waits**." | （语境）如果**进度无法衡量**，就用不确定型指示器，但**只用于短暂等待**。 | [Microsoft, n.d., "Wait UX", Principles](https://fluent2.microsoft.design/wait-ux#:~:text=If%20progress%20cannot%20be%20measured%2C%20use) |
| **Perceived performance**<br>感知性能 | (context) "**Visual feedback** can reduce **the perceived duration of a delay**." | （语境）**视觉反馈**可以缩短**用户感觉到的延迟时长**。 | [Microsoft, n.d., "Wait UX", Principles](https://fluent2.microsoft.design/wait-ux#:~:text=Visual%20feedback%20can%20reduce%20the%20perceived) |
| **Spinner**<br>旋转指示器 | "Spinners are best used for **short, indeterminate waits**—typically **under three seconds**." | 旋转指示器最适合**短暂、无法确定时长的等待**，通常**不到三秒**。 | [Microsoft, n.d., "Wait UX", Visual patterns](https://fluent2.microsoft.design/wait-ux#:~:text=Spinners%20are%20best%20used%20for%20short%2C) |
| **Progress bar**<br>进度条 | "Progress bars are ideal for **longer waits** where **progress can be tracked**." | 进度条最适合**较长的等待**，且**进度可以追踪**。 | [Microsoft, n.d., "Wait UX", Visual patterns](https://fluent2.microsoft.design/wait-ux#:~:text=Progress%20bars%20are%20ideal%20for%20longer) |
| **Skeleton**<br>骨架屏 | "Skeleton screens are useful for **content rendering delays**. In AI-first experiences like Copilot, use **the Copilot gradient shimmer** to reinforce the theme and reassure users that content is loading." | 骨架屏适用于**内容渲染的延迟**。在 Copilot 这类以 AI 为主的体验里，用 **Copilot 渐变微光效果**来强化主题，并让用户放心内容正在加载。 | [Microsoft, n.d., "Wait UX", Visual patterns](https://fluent2.microsoft.design/wait-ux#:~:text=Skeleton%20screens%20are%20useful%20for%20content) |
| **Progress toast**<br>进度通知 | "Progress toasts are appropriate for **long back-end processes** that **affect current content**." | 进度通知适用于**耗时较长的后台处理**，且这些处理**会影响当前内容**。 | [Microsoft, n.d., "Wait UX", Visual patterns](https://fluent2.microsoft.design/wait-ux#:~:text=Progress%20toasts%20are%20appropriate%20for%20long) |
| **Morse code**<br>摩斯码动画 | "The morse code animation is used specifically in **AI-forward, Copilot scenarios**. It mimics **the typing dots animation** in human to human chat experiences" | 摩斯码动画专用于**以 AI 为主的 Copilot 场景**。它模仿人与人聊天里**正在输入的点点动画** | [Microsoft, n.d., "Wait UX", Visual patterns](https://fluent2.microsoft.design/wait-ux#:~:text=The%20morse%20code%20animation%20is%20used) |
| **Pulsing dot**<br>脉冲圆点 | "The pulsing dot animation is used in **Chain of Thought** as **a lighter-weight wait animation**." | 脉冲圆点动画用在**思维链（Chain of Thought）**中，作为**较轻量的等待动画**。 | [Microsoft, n.d., "Wait UX", Visual patterns](https://fluent2.microsoft.design/wait-ux#:~:text=The%20pulsing%20dot%20animation%20is%20used) |
| **Timing thresholds**<br>时间阈值 | (context) "For waits **between one and three seconds**, a spinner is appropriate. If the wait **exceeds three seconds**, switch to a progress bar or display a content string to reassure users that the process is active." | （语境）等待在**一到三秒之间**时，用旋转指示器合适。等待**超过三秒**，就换成进度条，或显示一段文字，让用户放心处理仍在进行。 | [Microsoft, n.d., "Wait UX", Behavior](https://fluent2.microsoft.design/wait-ux#:~:text=For%20waits%20between%20one%20and%20three) |
| **Fallback messaging**<br>兜底提示 | "When **progress details are unavailable**, fallback messages should **still offer reassurance**." | 当**拿不到进度细节**时，兜底提示也应当**让用户安心**。 | [Microsoft, n.d., "Wait UX", Behavior](https://fluent2.microsoft.design/wait-ux#:~:text=When%20progress%20details%20are%20unavailable%2C%20fallback) |
| **Hardcoded vs. generated strings**<br>固定文案与生成文案 | "In productivity apps like Outlook, **hardcoded strings** ensure consistency and clarity. In AI chat experiences, **dynamically generated strings** allow for more personalized and context-aware feedback." | 在 Outlook 这类办公应用里，**固定文案**保证一致和清楚。在 AI 聊天体验里，**动态生成的文案**能给出更个性化、更贴合情境的反馈。 | [Microsoft, n.d., "Wait UX", Behavior](https://fluent2.microsoft.design/wait-ux#:~:text=In%20productivity%20apps%20like%20Outlook%2C%20hardcoded) |

## References

Microsoft. (n.d.). *Fluent 2 Design System*. Retrieved November 6, 2026, from <https://fluent2.microsoft.design/>
