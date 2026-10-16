# profile 站计划

> 2026-10-06 立。现阶段只做盘点和计划,开工排在 offer2pr 之后(Frank:「优先还是我的 offer2pr 这个项目」)。

## 已完成

- Astro 7 骨架:首页 6 张项目卡 + 项目详情页,push main 自动发布到 <https://zhizhunbao.github.io>
- 项目卡只放已核实的事实;ECG 写含糊(Healthcare client, Korea,只说时间紧、没有源码)

## 待办(按顺序)

1. ~~**整站视觉重做**~~ 已完成(10-15,0175066):选了方向 B Console(浅灰绿底、翠绿强调、等宽标签),不用「·」;个人事实在 `src/data/profile.ts`。原记录::Frank「现在这个也太难看了」。先出几个方向的效果图(375px 手机 + 桌面)挑一个,点头再改代码
2. ~~**Coursework 页**~~ 已完成(10-16):`/coursework/`,Cloud 只放卡片;AI 暂不放代码链接(公开仓库 zhizhunbao/aisd 里有学号,清理后再补)。原记录:**Coursework 页**:按「课程 → 一门课一组 → 每个 lab / assignment 一张卡」排,卡上写做了什么、用了什么技术、有公开代码才附链接
3. ~~**项目详情页正文**~~ 已完成(10-16,b4036db):六页正文 + 截图 + 源码链接;MOLIT / ECG 客户项目不附源码,ECG 不放截图。原记录:**项目详情页正文**:六个项目各补正文
4. **简历联系行加站点网址**(五份简历,`workspace/resume/scripts/build_direction_resumes.py`)

## Coursework 发布规则(Frank 10-06 点头)

- **AI 课程已结业 → 可以全放**(卡片 + 公开代码链接)
- **Cloud 课程本学期在上 → 先只放卡片,不放代码链接**;成绩出来后再补链接(学术诚信 + 防抄)
- 学校账号下私有的仓库不链接;文件名里的学号不上站

## 盘点(2026-10-06)

### AI Software Development(已结业,资料在 `workspace/aisd/courses/`)

| 课程 | Labs | Assignments | Project |
|---|---|---|---|
| CST8506 机器学习(ml) | Lab1 PCA、Lab2 SVM、Lab3 CNN、Lab4 | Assignment 1、2 | 期末项目(第 8 组,notebook + 演示) |
| CST8508 机器视觉(mv) | Lab1、Lab2、Lab3 ORB 特征 / 视觉基础、Lab4、Lab5 | Assignment 1、2 | 期末项目(与 HyeRan Yoo 合作,摄像头实时识别) |
| CST8507 自然语言处理(nlp) | Lab 1–4 | Assignment 1、2 | 期末项目(ROS2 相关;代码仓库在同学账号 LannieYoo/nlp_project) |
| CST8509 强化学习(rl) | Lab1 CliffWalking、Lab2 Gymnasium、Lab3 Gazebo、Lab4 Actor、Lab5 Docker | Assn1 BlocksWorld、Assn2 Create3 RedBall | — |
| 数学(math) | 笔记:微积分、线代、优化、概率、统计 | — | — |
| 毕业项目(pj) | — | — | Ottawa EcDev RAG(已在项目卡) |

GitHub 已公开的相关仓库:cst8502-ml-project-final-project、cst8502-ml-midterm-practice-project、cst8504-aat-midterm-practice-project、ethical-ai-tool-analysis、python-data-basics、textbook-rag

> 课程号待核:仓库名用 cst8502 / cst8504,课程目录里是 CST8506 / 8507 / 8508 / 8509,上站前逐门对一下

### Cloud Development and Operations(在读,资料在 `workspace/cloud/courses/`,作业仓库在学校账号 peng2026-cloud)

| 课程 | Labs | Assignments / Project | 仓库可见性 |
|---|---|---|---|
| CST8911 云计算导论 | lab01 存储、lab02 Azure Functions | assignment01 云服务 | 只在本地 |
| CST8912 云方案架构 | lab01 Azure 虚拟机、lab02、lab03 | 小组研究作业、小组期末项目 | 私有 |
| CST8913 云迁移 | lab01 Git/Markdown、lab02 Levi Strauss 案例、lab03 IaaS/PaaS 架构、lab04 发现评估 | — | 私有 |
| CST8914 无障碍设计 | Lab1、Lab2 Web 基础与辅助技术、Lab4、Lab5 | Assignment1 屏幕阅读器测试 | lab2 公开 |
| CST8915 全栈云原生 | lab01 宠物店上 Azure VM、lab02 十二要素重构、lab03 Azure PaaS 部署 | — | lab1 公开 |
| CST8916 远程数据与实时应用 | lab01 Flask REST API | assignment01 REST API 扩展 | 私有 |
