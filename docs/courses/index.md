---
title: Courses
description: "Courses (temporary, until graduation): CST8913 Cloud Migration, the week concepts with my lab scenarios as keyword tables for the oral exam."
ms.date: 2026-11-01
---

# Courses

## CST8913 Cloud Migration

### Course map

![The Cloud Adoption Framework phases and sections; the parts taught in CST8913 are solid blue with their weeks, the rest grey dashed.](media/caf-coverage.png)

| Keyword | Description | 中文翻译 |
|---|---|---|
| **1 Strategy** | **Why** an organization adopts Azure. | 组织**为什么**采用 Azure。 |
| **1.1 Motivations, mission and objectives (W2, W3)** | W2 introduces the **cloud migration motivators** (Lab 2); W3 covers the **cloud adoption strategy**: **motivations**, **business outcomes**, **financial** and **technical considerations**, and the **adoption horizons**. | W2 讲**云迁移动机**（Lab 2）；W3 讲**云采用战略**：**动机**、**业务成果**、**财务**和**技术考量**，以及**采用阶段（horizons）**。 |
| **2 Plan** | Turns the strategy into an **actionable plan**. | 把战略变成**可执行的计划**。 |
| **2.1 Plan migration (W4)** | W4 covers **discovery and assessment** and the **migration plan**. | W4 讲**发现与评估**，以及**迁移计划**。 |
| **3 Ready** | Builds the **Azure landing zone**; not taught in W1 to W6. | 搭建 **Azure 着陆区**；W1 到 W6 没讲。 |
| **4 Adopt** | **Migrates, modernizes and builds** workloads. | **迁移、现代化和新建**工作负载。 |
| **4.1 Migration (W5)** | W5 moves workloads by **rehosting**. | W5 用**重新托管**迁移工作负载。 |
| **4.2 Modernization (W6)** | W6 improves workloads by **refactoring** them onto **PaaS**. | W6 通过**重构**把工作负载改到 **PaaS** 上。 |
| **5 Govern** | Sets **guardrails**; not taught in W1 to W6. | 设置**护栏**；W1 到 W6 没讲。 |
| **6 Secure** | Protects the **Azure cloud estate**; not taught in W1 to W6. | 保护 **Azure 云资产**；W1 到 W6 没讲。 |
| **7 Manage** | Operates Azure with **RAMP**; not taught in W1 to W6. | 用 **RAMP** 运营 Azure；W1 到 W6 没讲。 |

### Lab 1: Git, GitHub and Markdown (W1)

**Scenario:** Set up a **private GitHub repository** for the course and submit Lab 1, written in **Markdown**, through a **branch** and a **pull request**. **Git** records every change as a **commit**; **GitHub** hosts the repository for **sharing and review**.

![Lab 1 workflow: private repository, clone, branch, commit, push, pull request, merge.](media/lab1-git-workflow.png)

| Keyword | Description | 中文翻译 |
|---|---|---|
| **1 Private repository** | A **private repository** is visible only to invited **collaborators**, such as the instructor. | **私有仓库**只有受邀的**协作者**（比如老师）能看到。 |
| **2 Clone** | **Cloning** copies the repository, with its **full history**, to a **local copy** on the computer. | **克隆**把仓库连同**完整历史**复制到电脑上，成为**本地副本**。 |
| **3 Branch** | A **branch** such as **lab-01** keeps the work **off main** until it is reviewed. | 像 **lab-01** 这样的**分支**让作业在审阅之前**不进 main**。 |
| **4 Commit** | A **commit** records one stage of the work; Lab 1 was built in **five stages**. | 一次**提交**记录作业的一个阶段；Lab 1 分**五个阶段**完成。 |
| **5 Push** | A **push** sends the **branch to GitHub**. | **推送**把**分支发到 GitHub**。 |
| **6 Pull request** | A **pull request** asks to merge the branch, after a **review** of the changed files. | **拉取请求**在**审阅**改动的文件之后，请求合并这个分支。 |
| **7 Merge** | **Merging** brings the reviewed branch into **main**. | **合并**把审阅过的分支并入 **main**。 |

![Markdown elements in Lab 1: heading, text formatting, list, link, image, blockquote, inline code, fenced code block, table, task list, horizontal rule, each with its syntax.](media/lab1-markdown.png)

| Keyword | Description | 中文翻译 |
|---|---|---|
| **1 Heading** | A line starting with **#** signs; more signs make a **lower level**. | 以 **#** 开头的一行；# 越多，**级别越低**。 |
| **2 Text formatting** | **Two asterisks** around text make it **bold**; **one asterisk** makes it **italic**. | 文字两边加**两个星号**变**粗体**；加**一个星号**变**斜体**。 |
| **3 List** | Lines starting with a **dash** make a **bulleted list**; **numbers** make a **numbered list**. | 以**短横线**开头的行组成**无序列表**；以**数字**开头组成**有序列表**。 |
| **4 Link** | The **link text** in square brackets, then the **URL** in parentheses. | 方括号里写**链接文字**，后面圆括号里写 **URL**。 |
| **5 Image** | Like a link with an **exclamation mark** in front; the brackets hold the **alt text**. | 和链接一样，前面加一个**感叹号**；方括号里写**替代文字**。 |
| **6 Blockquote** | A line starting with **>** becomes a **quote**. | 以 **>** 开头的一行变成**引用**。 |
| **7 Inline code** | **Backticks** around a word show it as **code** inside a sentence. | 单词两边加**反引号**，在句子里显示成**代码**。 |
| **8 Fenced code block** | **Three backticks** above and below a block, with the **language** name, such as **bash**. | 代码块上下各加**三个反引号**，并写上**语言**名，比如 **bash**。 |
| **9 Table** | Cells separated by **vertical bars**, with a **dash row** under the header. | 单元格用**竖线**隔开，表头下面加一行**短横线**。 |
| **10 Task list** | A list item with **square brackets**; an **x** marks it **done**. | 带**方括号**的列表项；**x** 表示**已完成**。 |
| **11 Horizontal rule** | **Three dashes** on a line draw a **dividing line**. | 一行写**三个短横线**，画出一条**分隔线**。 |

### Lab 2: Levi Strauss migration case study (W2)

**CAF:** **Strategy > Motivations, mission and objectives** (motivations), **Plan > Plan migration** (discovery questions, migration strategies) and **Adopt > Migration** (schedule).

**Scenario:** **Levi Strauss & Co.** moves from several **datacenters**, about **160 applications** and **nine ERP systems** in **110 countries** to Azure, as it shifts to **direct-to-consumer** sales.

![Lab 2 case: five motivations and the seven areas of the discovery questions.](media/lab2-case.png)

| Keyword | Description | 中文翻译 |
|---|---|---|
| **1 Motivations** | The **business reasons** Levi Strauss moves to the cloud. | Levi Strauss 上云的**业务原因**。 |
| **1.1 Direct-to-consumer** | Becoming a **USD 10 billion DTC brand** needs **speed, automation and data**. | 要成为 **100 亿美元的直面消费者（DTC）品牌**，需要**速度、自动化和数据**。 |
| **1.2 Technical debt** | About **160 applications**, several datacenters, **nine ERP systems** and different processes in **110 countries**. | 大约 **160 个应用**、多个数据中心、**九套 ERP 系统**，**110 个国家**流程各不相同。 |
| **1.3 Datacenter cost** | Owning and operating datacenters became **too expensive**. | 自建和运营数据中心变得**太贵**。 |
| **1.4 Standardization** | **One global ERP** means **consistent processes and data**. | **一套全球 ERP** 意味着**统一的流程和数据**。 |
| **1.5 AI readiness** | **Unified data** on a standard platform is the foundation for **AI and agents**. | 标准平台上的**统一数据**是 **AI 和智能体**的基础。 |
| **2 Discovery questions** | The questions that complete the picture **before planning**. | **做计划之前**要问清楚的问题。 |
| **2.1 Applications** | Which applications are **business-critical**, and which could be **retired** or **replaced with SaaS**? | 哪些应用是**业务关键**的？哪些可以**下线**或**换成 SaaS**？ |
| **2.2 Servers** | How many servers, how **heavily used**, and which run an OS **near end of support**? | 有多少台服务器、**使用率多高**、哪些的操作系统**快到支持期结束**？ |
| **2.3 Data** | How much data the nine ERP systems hold, and how it **merges into one data model**. | 九套 ERP 系统有多少数据，怎样**合并成一个数据模型**。 |
| **2.4 Networking** | How stores, distribution centers and offices in 110 countries **connect**, and what **latency** they need. | 110 个国家的门店、配送中心和办公室怎样**连接**，需要多低的**延迟**。 |
| **2.5 Security** | How **identity** is managed, which **data-residency** laws apply, and the **RPO and RTO**. | **身份**怎样管理，适用哪些**数据驻留**法律，**RPO 和 RTO** 是多少。 |
| **2.6 Dependencies** | Which applications **depend on each other**, and so must move in the **same wave**. | 哪些应用**互相依赖**，因此必须在**同一批次**迁移。 |
| **2.7 Business requirements** | The acceptable **downtime**, the **retail peak periods** to avoid, and the **budget and deadline**. | 可接受的**停机时间**、要避开的**零售高峰期**，以及**预算和截止日期**。 |

![Lab 2 RACI matrix: seven activities by seven stakeholders, with one Accountable owner per activity.](media/lab2-raci.png)

| Keyword | Description | 中文翻译 |
|---|---|---|
| **R Responsible** | **Does the work**; the **migration** team for most activities. | **干活的人**；大多数活动由**迁移**团队负责。 |
| **A Accountable** | The **single owner** of an activity; the **infrastructure director** for discovery, landing zone, migration, cutover and optimization. | 一项活动的**唯一负责人**；发现、着陆区、迁移、切换和优化都由**基础设施总监**负责。 |
| **C Consulted** | **Gives input** before decisions, such as **security** and **business** leaders. | 决策前**提供意见**，比如**安全**和**业务**负责人。 |
| **I Informed** | **Kept up to date**, such as the **sponsor** after approval. | **随时知情**，比如批准之后的**发起人**。 |

![The eight cloud migration strategies of the Cloud Adoption Framework: Retire, Rehost, Replatform, Refactor, Rearchitect, Replace, Rebuild, Retain.](media/migration-strategies.png)

| Keyword | Description | 中文翻译 |
|---|---|---|
| **1 Retire** | **Decommissions** a workload with no business value, so it **does not move**; used for **applications no longer needed**. | **停用**没有业务价值的工作负载，所以它**不迁移**；用于**不再需要的应用**。 |
| **2 Rehost** | Moves the workload **like for like** with **minimal changes**, such as a server to an **Azure VM**; used for **most servers**. | **原样**迁移工作负载，**改动最少**，比如把服务器搬到 **Azure 虚拟机**；**大多数服务器**用这种方式。 |
| **3 Replatform** | Changes the **hosting environment** to **PaaS** with **minimal code changes**, such as **SQL Server on a VM** to **Azure SQL**; fits the **databases** (Azure SQL Managed Instance) and **third-party apps** (AKS), which the W2 slides and Lab 2 call Refactor. | 把**托管环境**换成 **PaaS**，**代码改动很少**，比如把**虚拟机上的 SQL Server** 换成 **Azure SQL**；符合**数据库**（Azure SQL Managed Instance）和**第三方应用**（AKS），W2 课件和 Lab 2 把它们叫作 Refactor。 |
| **4 Refactor** | Improves the **internal structure of the code** without adding features, to reduce **technical debt**. | 改进**代码的内部结构**，不增加新功能，以减少**技术债**。 |
| **5 Rearchitect** | Redesigns the **architecture and code**, such as splitting a **monolith into microservices**; too slow for 160 applications before the datacenter exit. | 重新设计**架构和代码**，比如把**单体应用拆成微服务**；在退出数据中心之前对 160 个应用这样做太慢。 |
| **6 Replace** | Swaps the workload for a **SaaS** product, so **no custom code** remains to maintain; the **nine ERP systems** become **one global ERP**. | 把工作负载换成 **SaaS** 产品，**不再有自定义代码**要维护；**九套 ERP 系统**变成**一套全球 ERP**。 |
| **7 Rebuild** | Develops the workload **again from the start** with **cloud-native** solutions, when the old system is too outdated to modernize. | 用**云原生**方案**从头重新开发**工作负载，适用于旧系统过于陈旧、无法现代化的情况。 |
| **8 Retain** | **Keeps the workload where it is**, when it is stable or **cannot be migrated**, for example because of regulations. | **工作负载留在原地**，适用于它运行稳定或**无法迁移**的情况，比如受法规限制。 |

![Lab 2 migration schedule: discover and assess, landing zone, pilot, waves, cutover and exit, optimize.](media/lab2-schedule.png)

| Keyword | Description | 中文翻译 |
|---|---|---|
| **1 Discover and assess** | **Months 1-2**: inventory with **Azure Migrate**, map **dependencies**, choose an approach per workload. | **第 1 到 2 个月**：用 **Azure Migrate** 盘点，梳理**依赖关系**，为每个工作负载选迁移方式。 |
| **2 Landing zone** | **Months 2-3**: **subscriptions, networking, identity, security and backup**. | **第 2 到 3 个月**：**订阅、网络、身份、安全和备份**。 |
| **3 Pilot** | **Month 3**: migrate **low-risk servers** to test **replication, cutover and rollback**. | **第 3 个月**：迁移**低风险服务器**，测试**复制、切换和回滚**。 |
| **4 Waves** | **Months 4-8**: move **dependent applications together**, avoiding **retail peak periods**. | **第 4 到 8 个月**：**互相依赖的应用一起迁**，避开**零售高峰期**。 |
| **5 Cutover and exit** | **Month 8**: final cutover in approved **downtime windows**, then **decommission the datacenters**. | **第 8 个月**：在批准的**停机窗口**内最终切换，然后**关停数据中心**。 |
| **6 Optimize** | **Month 9 onward**: **right-size**, track **cost**, test **disaster recovery**. | **第 9 个月起**：**调整规格**、跟踪**成本**、测试**灾难恢复**。 |

### Cloud Adoption Framework (W2, W3)

**CAF:** All seven phases.

![Azure adoption phases](../cloud/azure/cloud-adoption-framework/media/azure-adoption-phases.png)

| Keyword | Description | 中文翻译 |
|---|---|---|
| **Azure adoption phases** | The Cloud Adoption Framework has **seven Azure adoption phases**. | 云采用框架有**七个 Azure 采用阶段**。 |
| **1 Strategy** | **Strategy** sets **why** an organization adopts Azure: the **cloud adoption strategy**. | **战略**确定组织**为什么**采用 Azure：即**云采用战略**。 |
| **2 Plan** | **Plan** turns that strategy into an **actionable plan**: the **cloud adoption plan**. | **计划**把战略变成**可执行的计划**：即**云采用计划**。 |
| **3 Ready** | **Ready** builds the **Azure landing zone**. | **就绪**搭建 **Azure 着陆区**。 |
| **4 Adopt** | **Adopt** **migrates, modernizes and builds workloads**. | **采用**负责**迁移、现代化和新建工作负载**。 |
| **5 Govern** | **Govern** sets **guardrails**. | **治理**设置**护栏**。 |
| **6 Secure** | **Secure** protects the **Azure cloud estate**. | **安全**保护 **Azure 云资产**。 |
| **7 Manage** | **Manage** operates Azure with **RAMP**: **Ready, Administer, Monitor, Protect**. | **管理**用 **RAMP** 运营 Azure：**就绪、管理、监控、保护**。 |

### Lab 3: IaaS and PaaS architecture (W3)

**Scenario:** A web application with a **React** UI, a **Flask** web server and a **PostgreSQL** database is designed on Azure twice: once on **IaaS**, once on **PaaS**.

![Lab 3 application: React UI, Flask web server, PostgreSQL](media/lab3-app-architecture.png)

![Lab 3 IaaS architecture](media/lab3-iaas-architecture.png)

![Lab 3 PaaS architecture](media/lab3-paas-architecture.png)

| Keyword | Description | 中文翻译 |
|---|---|---|
| **1 IaaS** | In **IaaS**, the provider supplies **VMs, disks and network**; the team builds and maintains everything on them. | 在 **IaaS** 里，云服务商提供**虚拟机、磁盘和网络**；上面的一切由团队自己搭建和维护。 |
| **2 N-tier, subnets, NSGs** | In an **N-tier** architecture, each tier has its own **subnet**, and its **NSG** allows only traffic from the **tier in front of it**. | 在 **N 层**架构里，每一层有自己的**子网**，它的 **NSG（网络安全组）**只允许**前一层**的流量进来。 |
| **3 Availability zones** | **Availability zones** are separate datacenters in one region, so **one zone can fail**. | **可用区**是同一区域里相互独立的数据中心，所以**一个区坏了也没关系**。 |
| **4 Load balancer** | A **load balancer** spreads requests across servers and removes failed ones. | **负载均衡器**把请求分给多台服务器，并把坏掉的服务器移出去。 |
| **5 Replication** | Database **replication** keeps a **standby** in sync with the **primary**. | 数据库**复制**让**备用库**和**主库**保持同步。 |
| **6 Management VMs** | IaaS needs its own **jumpbox, monitoring, NAT and backup** servers. | IaaS 需要自己的**跳板机、监控、NAT 和备份**服务器。 |
| **7 PaaS** | In **PaaS**, each tier becomes a **managed service**, and the provider runs the servers, patching, scaling and backups. | 在 **PaaS** 里，每一层变成一个**托管服务**，服务器、打补丁、扩缩容和备份都由云服务商负责。 |
| **8 App Service** | **App Service** runs web apps on several **instances** behind a **built-in load balancer**, with **autoscale**. | **App Service** 在**内置负载均衡器**后面用多个**实例**运行 Web 应用，并支持**自动扩缩**。 |
| **9 VNet integration** | **VNet integration** lets App Service reach resources that accept **private connections only**. | **VNet 集成**让 App Service 能访问**只接受私有连接**的资源。 |
| **10 Key Vault, Application Insights** | **Key Vault** stores **secrets**; **Application Insights** collects **telemetry**. | **Key Vault** 保存**机密**；**Application Insights** 收集**遥测数据**。 |
| **11 IaaS or PaaS** | **IaaS** gives **full control** but more **operations work**; **PaaS** gives less control and **no servers to manage**. | **IaaS** 给你**完全的控制权**，但**运维工作**更多；**PaaS** 控制权少一些，但**没有服务器要管**。 |

### Migration phases (W4)

**CAF:** **Plan > Plan migration** (decide, plan) and **Adopt > Migration** (execute).

![Migration phases](../cloud/azure/migration/media/migration-phases.png)

| Keyword | Description | 中文翻译 |
|---|---|---|
| **1 Decide** | The first phase **identifies the workloads** and decides **whether to migrate**. | 第一阶段**识别工作负载**，并决定**是否迁移**。 |
| **1.1 Discovery** | **Discovery** identifies the workloads. | **发现**识别工作负载。 |
| **1.1.1 Azure Migrate appliance** | The **appliance** collects **configuration and performance data** and sends it to Azure Migrate. | **设备（appliance）**收集**配置和性能数据**，发送到 Azure Migrate。 |
| **1.1.2 Azure Migrate Collector** | The **Collector** takes a **snapshot** without continuous Azure connectivity. | **Collector** 在不需要持续连接 Azure 的情况下拍一张**快照**。 |
| **1.2 Business case** | A **business case** estimates the **costs and savings** of moving to Azure. | **业务案例**估算迁到 Azure 的**成本和节省**。 |
| **2 Plan** | The second phase **plans the migration in detail**. | 第二阶段**详细规划迁移**。 |
| **2.1 Assessment** | **Assessments** find the four results below. | **评估**得出下面四项结果。 |
| **2.1.1 Azure readiness** | Whether servers are **ready for migration** to Azure. | 服务器是否**可以迁移**到 Azure。 |
| **2.1.2 Right-sizing** | The **size** of the Azure VMs after migration. | 迁移后 Azure 虚拟机的**规格**。 |
| **2.1.3 Azure cost estimation** | The **cost** of running the servers in Azure. | 服务器在 Azure 上运行的**成本**。 |
| **2.1.4 Dependency analysis** | The **network dependencies** between servers. | 服务器之间的**网络依赖关系**。 |
| **2.2 Migration strategies** | The **strategy** chosen for **each workload**. | 为**每个工作负载**选定的**策略**。 |
| **3 Execute** | The third phase **performs the migration or modernization**. | 第三阶段**执行迁移或现代化**。 |
| **3.1 Replication** | **Replication** copies the VMs to Azure. | **复制**把虚拟机复制到 Azure。 |
| **3.2 Test migration** | A **test migration** **simulates the migration** in a **non-production network**. | **测试迁移**在**非生产网络**里**模拟迁移**。 |
| **3.3 Migrate VMs** | After the test works, the **source machines** are **migrated**. | 测试通过后，**迁移源机器**。 |
| **3.4 Complete migration** | Completing the migration **stops replication** and **cleans up** its state. | 完成迁移会**停止复制**，并**清理**复制状态。 |

### Lab 4: Discovery and assessment (W4)

**CAF:** **Plan > Plan migration**.

**Scenario:** Five on-premises **VMware** servers, **WEB-01, APP-01, DB-01, DC-01 and FILE-01**, move to **Azure VMs** with **minimal downtime**; a written simulation with **no CPU, memory or usage data**.

![Lab 4 discovery and assessment: digital estate, discovery, dependency analysis, readiness, sizing, migration plan.](media/lab4-assessment.png)

| Keyword | Description | 中文翻译 |
|---|---|---|
| **1 Digital estate** | **Everything IT runs today**; here the **five servers** and their applications and data. | **IT 现在运行的一切**；这里是**五台服务器**以及上面的应用和数据。 |
| **2 Discovery** | **Agentless**: the **Azure Migrate appliance** on **vCenter** reads each VM over **port 443** for about **30 days**. | **无代理**：装在 **vCenter** 上的 **Azure Migrate 设备**通过 **443 端口**读取每台虚拟机，持续大约 **30 天**。 |
| **3 Dependency analysis** | Shows each server's **TCP connections**; **WEB-01, APP-01 and DB-01** form one **migration group**. | 显示每台服务器的 **TCP 连接**；**WEB-01、APP-01 和 DB-01** 组成一个**迁移组**。 |
| **4 Readiness** | WEB-01, APP-01, DC-01 **conditionally ready**; DB-01 **insufficient information**; FILE-01 **not ready**, a **blocker** (Windows Server 2012 R2). | WEB-01、APP-01、DC-01 **有条件就绪**；DB-01 **信息不足**；FILE-01 **未就绪**，是一个**阻碍项**（Windows Server 2012 R2）。 |
| **5 Sizing** | **Performance-based** uses **real usage** and right-sizes; **as-is** **copies on-premises specs** and often oversizes. | **基于性能**按**实际使用量**调整规格；**按原样**照搬**本地配置**，常常配得过大。 |
| **6 Migration plan** | A **test migration** runs in an **isolated network**; **rollback** points **DNS back** to the **original servers**. | **测试迁移**在**隔离网络**里进行；**回滚**就是把 **DNS 指回原来的服务器**。 |

![Lab 4 migration order: new domain controller in Azure, FILE-01 pilot, group 1 (WEB-01, APP-01, DB-01), retire DC-01.](media/lab4-migration-order.png)

| Keyword | Description | 中文翻译 |
|---|---|---|
| **1 New DC in Azure** | Comes first, because every server needs **sign-in and DNS**. | 最先做，因为每台服务器都需要**登录和 DNS**。 |
| **2 FILE-01** | The **pilot**, with its **OS upgrade**, before the **October 13, 2026** security deadline. | **试点**，同时**升级操作系统**，赶在 **2026 年 10 月 13 日**安全支持截止之前。 |
| **3 Group 1** | **WEB-01, APP-01 and DB-01** move together in **one maintenance window**. | **WEB-01、APP-01 和 DB-01** 在**同一个维护窗口**里一起迁移。 |
| **4 Retire DC-01** | Only after **nothing uses it**. | 要等到**没有任何东西再用它**之后。 |

### Lab 5: Rehosting to Azure VMware Solution (W5)

**CAF:** **Adopt > Migration**.

**Scenario:** **Washington State L&I** migrates **more than 300 VMs** to **Azure VMware Solution** in **phases**, in **under nine months**, without disrupting daily operations.

![Lab 5 migration from on-premises VMware to Azure VMware Solution](media/lab5-avs-migration.png)

| Keyword | Description | 中文翻译 |
|---|---|---|
| **1 Rehost** | Moves VMs **without code changes**: the **fastest, lowest-risk** way to finish in **under nine months**. | **不改代码**迁移虚拟机：要在**九个月内**完成，这是**最快、风险最低**的方式。 |
| **2 Rehost vs replatform** | **Rehost** moves the VM **as is**; **replatform** makes **small changes** to use a **managed platform**. | **重新托管**把虚拟机**原样**搬过去；**重新平台化**做**少量修改**，用上**托管平台**。 |
| **3 Azure VMware Solution** | Runs **vCenter, NSX and vSAN** on **dedicated hosts** in Azure, so VMware VMs move **without conversion**. | 在 Azure 的**专用主机**上运行 **vCenter、NSX 和 vSAN**，所以 VMware 虚拟机**不用转换**就能迁过去。 |

![Lab 5 migration plan: prepare, discover and group, pilot wave, main waves, stabilize and decommission.](media/lab5-waves.png)

| Keyword | Description | 中文翻译 |
|---|---|---|
| **1 Prepare** | Deploy the **private cloud**, **ExpressRoute** with Global Reach, and **VMware HCX**, which keeps the VMs' **IP addresses**. | 部署**私有云**、带 Global Reach 的 **ExpressRoute**，以及能保留虚拟机 **IP 地址**的 **VMware HCX**。 |
| **2 Discover and group** | **Dependency analysis** puts each application and everything it calls in the **same wave**. | **依赖分析**把每个应用和它调用的所有东西放进**同一批次**。 |
| **3 Pilot wave** | **About 10 VMs** prove the tools, network and runbook. | **大约 10 台虚拟机**，验证工具、网络和操作手册。 |
| **4 Main waves** | **About 75 VMs each**, from **lowest to highest criticality**. | **每批大约 75 台虚拟机**，按**重要性从低到高**。 |
| **5 Stabilize and decommission** | **Proceed or roll back**: proceed after tests and **48 hours** stable; otherwise roll back to the **intact on-premises VMs**. | **继续还是回滚**：测试通过并稳定 **48 小时**后继续；否则回滚到**完好的本地虚拟机**。 |

### Refactoring (W6)

**CAF:** **Adopt > Modernization**.

![Refactoring a web app: App Service Migration Assistant assesses, then migrates the app to Azure App Service; the database moves to Azure SQL or stays on-premises through a hybrid connection.](media/w6-refactoring.png)

| Keyword | Description | 中文翻译 |
|---|---|---|
| **1 Assess** | The first step checks whether the app can move. | 第一步检查应用能不能迁。 |
| **1.1 IIS** | The **Windows web server** that hosts the **ASP.NET** app on premises. | 在本地托管 **ASP.NET** 应用的 **Windows Web 服务器**。 |
| **1.2 App Service Migration Assistant** | The tool that first **assesses** the app, then **migrates** it. | 先**评估**应用、再**迁移**它的工具。 |
| **2 Migrate** | The second step moves the app. | 第二步迁移应用。 |
| **2.1 Azure App Service** | Runs the app and handles **OS patching, scaling and load balancing**. | 运行应用，并负责**操作系统补丁、扩缩容和负载均衡**。 |
| **3 Database** | The third step moves or connects the database. | 第三步迁移或连接数据库。 |
| **3.1 Azure SQL Database** | A **managed** database in Azure. | Azure 上的**托管**数据库。 |
| **3.2 Azure SQL Managed Instance** | A managed SQL Server **instance**, closest to on-premises SQL Server. | 托管的 SQL Server **实例**，最接近本地的 SQL Server。 |
| **3.3 Hybrid connection** | Links the app to a database that **stays on premises**. | 把应用连到**留在本地**的数据库。 |

### Lab 6: AWS, Azure and Google Cloud services

**Scenario:** Name the equivalent **AWS**, **Azure** and **Google Cloud** service for **30 service descriptions**, then compare their **similarities**, **differences** and **naming**.

| # | Description | AWS | Azure | Google Cloud |
|---|---|---|---|---|
| 1 | A compute service that provides scalable virtual machines for running applications. | **Amazon EC2** | **Azure Virtual Machines** | **Compute Engine** |
| 2 | An object storage service used to store and retrieve data, commonly used for backups and static website content. | **Amazon S3** | **Azure Blob Storage** | **Cloud Storage** |
| 3 | A managed relational database service that supports multiple database engines like MySQL, PostgreSQL, and SQL Server. | **Amazon RDS** | **Azure SQL Database, Azure Database for MySQL, Azure Database for PostgreSQL** | **Cloud SQL** |
| 4 | A serverless compute service that allows you to run code in response to events without provisioning or managing servers. | **AWS Lambda** | **Azure Functions** | **Cloud Run functions** |
| 5 | A virtual private network service that allows you to create isolated networks within the cloud provider's infrastructure. | **Amazon VPC** | **Azure Virtual Network** | **Virtual Private Cloud (VPC)** |
| 6 | A content delivery network (CDN) service that delivers data, videos, applications, and APIs to customers around the world with low latency. | **Amazon CloudFront** | **Azure Front Door** | **Cloud CDN** |
| 7 | A managed NoSQL database service designed for low-latency, high-scale applications. | **Amazon DynamoDB** | **Azure Cosmos DB** | **Bigtable (Firestore for documents)** |
| 8 | A block storage service for use with virtual machines, offering persistent storage for data. | **Amazon EBS** | **Azure Managed Disks** | **Persistent Disk / Hyperdisk** |
| 9 | A managed container orchestration service based on Kubernetes. | **Amazon EKS** | **Azure Kubernetes Service (AKS)** | **Google Kubernetes Engine (GKE)** |
| 10 | A service for managing user access and encryption keys to secure cloud resources. | **AWS IAM + AWS KMS** | **Microsoft Entra ID + Azure RBAC + Azure Key Vault** | **Cloud IAM + Cloud KMS** |
| 11 | A platform that automates application deployment and scaling without needing to manage infrastructure. | **AWS Elastic Beanstalk** | **Azure App Service** | **App Engine** |
| 12 | A service that provides monitoring and logging of applications and infrastructure, offering insights into resource usage and performance. | **Amazon CloudWatch** | **Azure Monitor** | **Cloud Monitoring + Cloud Logging** |
| 13 | A domain name system (DNS) service that routes traffic globally and translates domain names to IP addresses. | **Amazon Route 53** | **Azure DNS** | **Cloud DNS** |
| 14 | A load balancing service that distributes incoming network traffic across multiple targets, improving application availability. | **Elastic Load Balancing** | **Azure Load Balancer (Layer 4), Azure Application Gateway (Layer 7)** | **Cloud Load Balancing** |
| 15 | A service that automatically scales your cloud infrastructure based on demand, ensuring resources are available as needed. | **Amazon EC2 Auto Scaling** | **Virtual Machine Scale Sets with Azure Autoscale** | **Compute Engine autoscaler (managed instance groups)** |
| 16 | A message queuing service that enables applications to send and receive messages between different components. | **Amazon SQS** | **Azure Queue Storage, Azure Service Bus** | **Cloud Tasks (Pub/Sub for publish/subscribe)** |
| 17 | A managed real-time data streaming service that collects and processes large amounts of data from various sources. | **Amazon Kinesis Data Streams** | **Azure Event Hubs** | **Pub/Sub** |
| 18 | A fully managed, highly scalable data warehouse service optimized for analytics and large-scale queries. | **Amazon Redshift** | **Azure Synapse Analytics** | **BigQuery** |
| 19 | A service that automates the execution of workflows and allows the integration of different cloud services in a sequence of steps. | **AWS Step Functions** | **Azure Logic Apps** | **Workflows** |
| 20 | A service that integrates multiple data sources and enables data migration, transformation, and movement across platforms. | **AWS Glue** | **Azure Data Factory** | **Cloud Data Fusion** |
| 21 | A data catalog and governance service that helps manage metadata across your data estate, supporting compliance and security. | **Amazon DataZone (AWS Glue Data Catalog)** | **Microsoft Purview** | **Knowledge Catalog** |
| 22 | A set of machine learning and AI services that provide pre-built models, APIs, and tools for developers to easily implement AI in their apps. | **AWS AI services (Rekognition, Comprehend, Translate) and Amazon SageMaker** | **Azure AI services (Vision, Language, Translator) and Azure Machine Learning** | **Vertex AI and Cloud AI APIs (Vision AI, Natural Language AI, Translation AI)** |
| 23 | A service that allows you to define and deploy infrastructure using code, automating the management of cloud resources. | **AWS CloudFormation** | **Azure Resource Manager templates / Bicep** | **Infrastructure Manager (Terraform)** |
| 24 | A fully managed CI/CD service that automates the building, testing, and deployment of applications to production environments. | **AWS CodePipeline (with CodeBuild, CodeDeploy)** | **Azure Pipelines (Azure DevOps)** | **Cloud Build (with Cloud Deploy)** |
| 25 | A desktop as a service (DaaS) offering that allows you to deploy virtual desktops in the cloud and access them remotely. | **Amazon WorkSpaces** | **Azure Virtual Desktop** | No first-party service (partner solutions) |
| 26 | A backup and disaster recovery service that helps to protect your data by creating backups and replicas of your cloud resources. | **AWS Backup, AWS Elastic Disaster Recovery** | **Azure Backup, Azure Site Recovery** | **Backup and DR Service** |
| 27 | A service designed for big data analytics, allowing organizations to store, process, and analyze large datasets in real time. | **Amazon EMR** | **Azure HDInsight, Azure Databricks** | **Managed Service for Apache Spark (formerly Dataproc)** |
| 28 | A file storage service for storing and sharing files with users, typically used in shared file systems across applications. | **Amazon EFS** | **Azure Files** | **Filestore** |
| 29 | A service that helps you transcode, process, and stream media content such as video and audio. | **AWS Elemental MediaConvert** | No first-party service (Azure Media Services retired in 2024; partner solutions) | **Transcoder API** |
| 30 | A real-time communication service used for sending notifications, emails, and text messages to users and devices. | **Amazon SNS (email: Amazon SES)** | **Azure Notification Hubs, Azure Communication Services** | **Firebase Cloud Messaging (push only)** |

| Keyword | Description | 中文翻译 |
|---|---|---|
| **1 Similarities** | Most services **match one to one**, and all three offer **VMs, PaaS, serverless and Kubernetes**. | 大多数服务**一一对应**，三家都提供**虚拟机、PaaS、无服务器和 Kubernetes**。 |
| **2 Differences** | **RDS** and **Cloud SQL** cover **several database engines in one service**, while Azure has **one per engine**; Azure **splits** load balancing and protection into several services. | **RDS** 和 **Cloud SQL** 用**一个服务支持多种数据库引擎**，而 Azure **每种引擎一个服务**；Azure 把负载均衡和防护**拆成**好几个服务。 |
| **3 Unique features** | Some services add capabilities their counterparts lack. | 有些服务提供了对手没有的功能。 |
| **4 Naming** | AWS uses **brand names and acronyms**, Azure says **"Azure" plus the function**, and Google says **"Cloud" plus the function**. | AWS 用**品牌名和缩写**，Azure 用 **"Azure" 加功能名**，Google 用 **"Cloud" 加功能名**。 |
