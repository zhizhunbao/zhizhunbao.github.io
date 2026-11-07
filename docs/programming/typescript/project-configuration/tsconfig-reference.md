---
title: "9.3 TSConfig Reference"
description: "TypeScript, 9. Project Configuration: 9.3 TSConfig Reference; started 2026-11-07 with the options behind tsc build time (Incremental, TS Build Info File, Skip Lib Check) and No Unchecked Indexed Access, under their sections; the other options are added when the page is read."
ms.date: 2026-11-07
---

# 9.3 TSConfig Reference

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **TSConfig Reference**<br>TSConfig 参考 | (Definition pending) | （定义待补） | [Microsoft, n.d., "TSConfig Reference"](https://www.typescriptlang.org/tsconfig/) |
| **Type Checking**<br>类型检查 | (Definition pending) | （定义待补） | [Microsoft, n.d., "Compiler Options", "Type Checking" section](https://www.typescriptlang.org/tsconfig/#Type_Checking_6248) |
| **No Unchecked Indexed Access**<br>未检查的索引访问（noUncheckedIndexedAccess） | "Turning on noUncheckedIndexedAccess will **add undefined** to any **un-declared field in the type**." | 开启 noUncheckedIndexedAccess 会**加上 undefined**，作用于**类型中任何未声明的字段**。 | [Microsoft, n.d., "Type Checking", "No Unchecked Indexed Access", para. 2](https://www.typescriptlang.org/tsconfig/#noUncheckedIndexedAccess) |
| **Projects**<br>项目 | (Definition pending) | （定义待补） | [Microsoft, n.d., "Compiler Options", "Projects" section](https://www.typescriptlang.org/tsconfig/#Projects_6255) |
| **Incremental**<br>增量编译（incremental） | "Tells TypeScript to **save information about the project graph** from the last compilation to **files stored on disk**." | 让 TypeScript 把上一次编译的**项目依赖图信息保存下来**，写入**磁盘上的文件**。 | [Microsoft, n.d., "Projects", "Incremental", para. 1](https://www.typescriptlang.org/tsconfig/#incremental) |
| **TS Build Info File**<br>增量编译信息文件（tsBuildInfoFile） | "This setting lets you **specify a file for storing incremental compilation information** as a part of composite projects which **enables faster building** of larger TypeScript codebases." | 这个设置让你**指定一个文件来存放增量编译信息**，作为复合项目的一部分，从而**加快构建**较大的 TypeScript 代码库。 | [Microsoft, n.d., "Projects", "TS Build Info File", para. 1](https://www.typescriptlang.org/tsconfig/#tsBuildInfoFile) |
| **Completeness**<br>完整性 | (Definition pending) | （定义待补） | [Microsoft, n.d., "Compiler Options", "Completeness" section](https://www.typescriptlang.org/tsconfig/#Completeness_6257) |
| **Skip Lib Check**<br>跳过库检查（skipLibCheck） | "**Skip type checking of declaration files**. This can **save time during compilation** at the expense of type-system accuracy." | **跳过声明文件的类型检查**。这能**节省编译时间**，代价是类型系统的准确性。 | [Microsoft, n.d., "Completeness", "Skip Lib Check", paras. 1–2](https://www.typescriptlang.org/tsconfig/#skipLibCheck) |

## References

Microsoft. (n.d.). *TSConfig reference*. Retrieved November 7, 2026, from <https://www.typescriptlang.org/tsconfig/>
