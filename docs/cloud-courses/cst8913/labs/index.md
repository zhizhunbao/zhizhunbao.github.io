---
title: "Labs overview"
description: "CST8913 Cloud Migration labs 1 to 6: one map per lab with a table of the terms on it."
ms.date: 2026-10-19
---

# Labs overview

One map per lab: the whole lab on one figure, in the order the lab uses its concepts; the framed boxes are the concepts each lab page explains. The table under each map defines the terms on it, in the same order: official definitions where a lecture page has one, otherwise in my own words (lab 6: the descriptions of its comparison table). Each has a Chinese translation whose key words have the same colour as in the English, and the main verb of each sentence has a red wavy underline.

## Lab 1: Git, GitHub and Markdown

[Git, GitHub and Markdown](git-github-and-markdown.md), week 1: create a private repository, work on a branch, commit, push, open a pull request and write Markdown.

![Overview of lab 1: a branch, then the working tree, the staging area and a commit in Git; a push, a pull request and a merge on GitHub; a fork can also open a pull request](media/lab-1.png)

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **Git**<br>Git 版本控制 | "**Git** is a **free and open source** **distributed version control system** designed to handle everything from small to very large projects with **speed and efficiency**." | **Git** 是一个**免费且开源**的**分布式版本控制系统**，旨在处理从小型到超大型的各种项目，并做到**快速、高效**。 | [Git, n.d., para. 1](https://git-scm.com/#:~:text=Git%20is%20a%20free%20and%20open%20source%20distributed%20version) |
| **GitHub**<br>GitHub 平台 | "**GitHub** is a **platform** that supports your **entire software development process**, from **planning work** to deploying and operating software." | **GitHub** 是一个**平台**，支持你的**整个软件开发流程**，从**规划工作**到部署和运营软件。 | [GitHub, n.d., para. 1](https://docs.github.com/en/get-started/start-your-journey/what-is-github#:~:text=GitHub%20is%20a%20platform%20that%20supports%20your%20entire%20software) |
| **branch**<br>分支 | "A "**branch**" is a **line of development**. The **most recent commit** on a branch is referred to as the **tip** of that branch." | “**分支**”是一条**开发线**。分支上**最近的一次提交**被称为该分支的**末端**（tip）。 | [Git, n.d., "branch" entry](https://git-scm.com/docs/gitglossary#Documentation/gitglossary.txt-aiddefbranchabranch:~:text=A%20%22branch%22%20is%20a%20line%20of%20development.%20The%20most%20recent) |
| **working tree**<br>工作区 | "The **working tree** is a **single checkout** of one version of the project. These files are pulled out of the **compressed database** in the Git directory and **placed on disk** for you to use or modify." | **工作区**是项目某一版本的**单次检出**。这些文件从 Git 目录中的**压缩数据库**中提取出来，**放在磁盘上**供你使用或修改。 | [Chacon, 2014, "The Three States" section, para. 3](https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F#_the_three_states:~:text=The%20working%20tree%20is%20a%20single%20checkout%20of%20one%20version) |
| **staging area (index)**<br>暂存区 | "The **staging area** is a file, generally contained in your **Git directory**, that stores information about what will go into your **next commit**. Its technical name in Git parlance is the "**index**"..." | **暂存区**是一个文件，通常位于你的 **Git 目录**中，存储着有关**下一次提交**将包含哪些内容的信息。用 Git 的术语来说，它的技术名称是“**索引**”…… | [Chacon, 2014, "The Three States" section, para. 4](https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F#_the_three_states:~:text=The%20staging%20area%20is%20a%20file%2C%20generally%20contained%20in%20your) |
| **commit**<br>提交 | "With Git, every time you **commit**, or **save the state** of your project, Git basically **takes a picture** of what all your files look like at that moment and stores a reference to that **snapshot**." | 在 Git 中，每当你**提交**，或者说**保存你的项目状态**时，Git 基本上会为你所有文件在那一刻的样子**拍一张照片**，并存储对该**快照**的一个引用。 | [Chacon, 2014, "Snapshots, Not Differences" section, para. 2](https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F#_snapshots_not_differences:~:text=With%20Git%2C%20every%20time%20you%20commit%2C%20or%20save%20the) |
| **push**<br>推送 | "When you have **your project** at a point that you want to **share**, you have to **push it upstream**." | 当**你的项目**进展到你想要**分享**的程度时，你必须将它**推送到上游**。 | [Chacon, 2014, "Pushing to Your Remotes" section, para. 1](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes#_pushing_remotes:~:text=When%20you%20have%20your%20project%20at%20a%20point%20that) |
| **pull request**<br>拉取请求（PR） | "**Pull requests** are **proposals** to merge **code changes** into a **project**." | **拉取请求**是一种**提议**：将**代码更改**合并到一个**项目**中。 | [GitHub, n.d., para. 1](https://docs.github.com/en/pull-requests/reference/pull-requests#:~:text=Pull%20requests%20are%20proposals%20to%20merge%20code%20changes%20into) |
| **merge**<br>合并 | "**Merging** takes the changes from **one branch** (in the same repository or from a **fork**), and **applies them into another**." | **合并**会获取来自**一个分支**（位于同一仓库中或来自某个**复刻**）的更改，并将其**应用到另一个分支**中。 | [GitHub, n.d., "merge" section, para. 1](https://docs.github.com/en/get-started/learning-about-github/github-glossary#merge:~:text=Merging%20takes%20the%20changes%20from%20one%20branch%20%28in%20the%20same) |
| **fork**<br>复刻（Fork） | "A **fork** is a **separate repository** with its **own settings** and **collaboration space**." | **复刻**是一个**独立的仓库**，拥有**自己的设置**和**协作空间**。 | [GitHub, n.d., "What makes forks distinct from branches" section, para. 1](https://docs.github.com/en/pull-requests/reference/forks#what-makes-forks-distinct-from-branches:~:text=A%20fork%20is%20a%20separate%20repository%20with%20its%20own) |

## Lab 2: Levi Strauss & Co. migration case study

[Levi Strauss & Co. migration case study](levi-strauss-co-migration-case-study.md), week 2: explain why a company moves to the cloud, choose a migration approach per workload, and decide who is responsible for what.

![Overview of lab 2: motivations, discovery questions, stakeholders and RACI matrix, the five Rs and the migration schedule, with decision criteria (informed by cloud models and service types) feeding the five Rs](media/lab-2.png)

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **motivation**<br>动机 | "Various **motivations** can drive **business transformations** that are supported by cloud adoption. Several motivations likely apply **at the same time**." | 各种**动机**可以推动由云采用所支持的**业务转型**。可能**同时**有多个动机适用。 | [Microsoft, 2022, October 18, "Motivations" section, para. 1](https://github.com/MicrosoftDocs/cloud-adoption-framework/blob/a5351162040659171fbb4f5674ce36ac9259deb3/docs/strategy/motivations.md#motivations:~:text=Various%20motivations%20can%20drive%20business%20transformations%20that%20are) |
| **Discovery questions**<br>调研问题 | Discovery questions are questions you ask the **business and technical owners** to learn about **workloads**, goals and **constraints** before you plan a migration. | 调研问题是在规划迁移之前向**业务和技术负责人**提出的问题，用于了解**工作负载**、目标和**约束**。 | My own words |
| **RACI matrix**<br>RACI 责任分配矩阵 | "**Align responsibilities** by developing a **cross-team matrix** that identifies **responsible, accountable, consulted, and informed (RACI**) parties." | **协调职责**：制定一个**跨团队矩阵**，用于确定**负责、批准、咨询和知情（RACI**）的各方。 | [Microsoft, n.d., para. 1](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/organize/raci-alignment#:~:text=Align%20responsibilities%20by%20developing%20a%20cross%2Dteam%20matrix%20that) |
| **The five Rs**<br>五个 R（合理化策略） | The five Rs are the rationalization options in the Cloud Adoption Framework (**rehost**, refactor, rearchitect, rebuild and **replace**) for deciding how each **workload** moves to the cloud. | 五个 R 是云采用框架中的合理化选项（**重新托管**、重构、重新架构、重建和**替换**），用于决定每个**工作负载**如何迁移到云。 | My own words |
| **Migration schedule**<br>迁移时间表 | A migration schedule sets the **order and dates** in which workloads move to the cloud, usually grouped into **waves**. | 迁移时间表规定工作负载迁移到云的**顺序和日期**，通常按**迁移波次**分组。 | My own words |
| **Decision criteria**<br>决策标准 | Decision criteria are the **business and technical factors** used to choose a **migration approach** for each workload. | 决策标准是一组**业务和技术因素**，用来为每个工作负载选择**迁移方法**。 | My own words |
| **Cloud models**<br>云部署模型 | Cloud models are the ways to deploy cloud resources, such as **public cloud**, **private cloud** and **hybrid cloud**, based on where they run and who controls them. | 云模型是部署云资源的方式，例如**公有云**、**私有云**和**混合云**，取决于资源在哪里运行以及由谁控制。 | My own words |
| **Service types**<br>云服务类型 | Service types are the cloud service models, **IaaS**, PaaS and **SaaS**, which differ in how much of the stack the **provider** manages for you. | 服务类型是云服务模型，即 **IaaS**、PaaS 和 **SaaS**，它们的区别在于**提供商**替你管理多少技术栈。 | My own words |

## Lab 3: IaaS and PaaS architecture

[IaaS and PaaS architecture](iaas-and-paas-architecture.md), week 3: design the same application once on IaaS and once on PaaS, and say when each fits.

![Overview of lab 3: the same app on IaaS (load balancer, web, app and database VMs in two availability zones inside a VNet with subnets and NSGs; you manage the OS and up) and on PaaS (Static Web Apps, App Service, Azure Database for PostgreSQL; Azure manages the OS and runtime), with SaaS beyond](media/lab-3.png)

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **IaaS or PaaS**<br>IaaS 还是 PaaS | IaaS or PaaS is the hosting choice between running the app on **virtual machines** you manage and running it on **managed platform services**. | IaaS 还是 PaaS 是一种托管选择：在你自己管理的**虚拟机**上运行应用，还是在**托管的平台服务**上运行应用。 | My own words |
| **Infrastructure as a Service (IaaS)**<br>基础设施即服务 | "**Infrastructure as a service (IaaS**) is the **most flexible** category of cloud services, as it provides you the **maximum amount of control** for your cloud resources." | **基础设施即服务（IaaS**）是**最灵活**的云服务类别，因为它为你提供对云资源的**最大控制权**。 | [Microsoft, n.d., para. 1](https://web.archive.org/web/20250108115137/https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/2-describe-infrastructure-service#:~:text=Infrastructure%20as%20a%20service%20%28IaaS%29%20is%20the%20most%20flexible) |
| **VNet, subnets, NSGs and load balancers**<br>虚拟网络、子网、网络安全组和负载均衡器 | These are the Azure networking pieces of an IaaS design: a **virtual network** with subnets, **network security groups** that filter traffic, and **load balancers** that spread requests across VMs. | 这些是 IaaS 设计中的 Azure 网络组件：带子网的**虚拟网络**、筛选流量的**网络安全组**，以及在虚拟机之间分配请求的**负载均衡器**。 | My own words |
| **availability zone**<br>可用区 | "Many Azure regions provide **availability zones**, which are **separated groups of datacenters** within a region. Each availability zone has **independent power, cooling, and networking infrastructure**..." | 许多 Azure 区域都提供**可用区**，即区域内**彼此分隔的数据中心组**。每个可用区都有**独立的电源、冷却和网络基础结构**…… | [Microsoft, n.d., para. 1](https://learn.microsoft.com/en-us/azure/reliability/availability-zones-overview#:~:text=Many%20Azure%20regions%20provide%20availability%20zones%2C%20which%20are%20separated%20groups) |
| **Load balancer VM**<br>负载均衡虚拟机 | A load balancer VM is a virtual machine that receives **incoming requests** and spreads them across the **web servers** behind it. | 负载均衡虚拟机是一台接收**传入请求**并将其分发到后端 **Web 服务器**的虚拟机。 | My own words |
| **Web VM**<br>Web 虚拟机 | A web VM is a virtual machine in the **web tier** that serves the pages of the site and passes requests to the **app tier**. | Web 虚拟机是 **Web 层**中的一台虚拟机，负责提供网站页面并将请求转发到**应用层**。 | My own words |
| **App VM**<br>应用虚拟机 | An app VM is a virtual machine in the **business tier** that runs the **application logic** between the web tier and the database. | 应用虚拟机是**业务层**中的一台虚拟机，在 Web 层和数据库之间运行**应用逻辑**。 | My own words |
| **Database VM**<br>数据库虚拟机 | A database VM is a virtual machine in the **data tier** that runs the **database server** and stores the data of the application. | 数据库虚拟机是**数据层**中的一台虚拟机，运行**数据库服务器**并存储应用的数据。 | My own words |
| **shared responsibility model**<br>责任共担模型 | "With the **shared responsibility model**, these responsibilities get shared between the **cloud provider** and the **consumer**." | 在**责任共担模型**中，这些责任由**云提供商**和**使用者**共同承担。 | [Microsoft, n.d., para. 3](https://web.archive.org/web/20250108163106/https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/4-describe-shared-responsibility-model#:~:text=With%20the%20shared%20responsibility%20model%2C%20these%20responsibilities%20get%20shared) |
| **Platform as a Service (PaaS)**<br>平台即服务 | "**Platform as a service (PaaS**) is a **middle ground** between **renting space in a datacenter** (infrastructure as a service) and paying for a **complete and deployed solution** (software as a service)." | **平台即服务（PaaS**）是一种**折中方案**，介于**在数据中心租用空间**（基础设施即服务）与为**完整且已部署的解决方案**付费（软件即服务）之间。 | [Microsoft, n.d., para. 1](https://web.archive.org/web/20250109030533/https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/3-describe-platform-service#:~:text=Platform%20as%20a%20service%20%28PaaS%29%20is%20a%20middle%20ground) |
| **Azure Static Web Apps**<br>Azure 静态 Web 应用 | Azure Static Web Apps is a service that hosts **static web front ends**, such as HTML, CSS and JavaScript files, and builds and deploys them from a **code repository**. | Azure 静态 Web 应用是一项服务，用于托管**静态 Web 前端**（例如 HTML、CSS 和 JavaScript 文件），并从**代码存储库**构建和部署它们。 | My own words |
| **Azure App Service**<br>Azure 应用服务 | "**Azure App Service** is a **fully managed platform** for your web apps. You can use it to **run and scale** your web apps with minimal setup. Microsoft manages the **infrastructure**, operating system updates, load balancing, and scale-up/scale-down logic as needed." | **Azure 应用服务**是适用于 Web 应用的**完全托管平台**。你可以使用它以最少的设置**运行和缩放** Web 应用。Microsoft 根据需要管理**基础结构**、操作系统更新、负载均衡以及纵向扩展/纵向缩减逻辑。 | [Microsoft, 2022, "Why move a web application to Azure App Service?" section, para. 1](https://web.archive.org/web/20221202123525/https://learn.microsoft.com/en-us/training/modules/migrate-app-service-migration-assistant/3-understand-assessment#why-move-a-web-application-to-azure-app-service:~:text=Azure%20App%20Service%20is%20a%20fully%20managed%20platform%20for) |
| **Azure Database for PostgreSQL**<br>Azure PostgreSQL 托管数据库 | Azure Database for PostgreSQL is a **managed database service** that runs PostgreSQL while Azure handles patching, **backups** and **high availability**. | Azure Database for PostgreSQL 是一项**托管数据库服务**，运行 PostgreSQL，并由 Azure 负责修补、**备份**和**高可用性**。 | My own words |
| **Software as a Service (SaaS)**<br>软件即服务 | "With **SaaS**, you’re essentially **renting or using** a **fully developed application**." | 借助 **SaaS**，你实质上是在**租用或使用**一个**完全开发好的应用程序**。 | [Microsoft, n.d., para. 1](https://web.archive.org/web/20250108145750/https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/4-describe-software-service#:~:text=renting%20or%20using%20a%20fully%20developed%20application) |

## Lab 4: Discovery and assessment

[Discovery and assessment](discovery-and-assessment.md), week 4: list the digital estate, choose how to discover it, map dependencies, check readiness, size and cost it, then prioritize and plan the migration.

![Overview of lab 4: digital estate, discovery and assessment (with the Azure Migrate appliance), dependency analysis, readiness, sizing, cost estimate and the migration plan with test migration and rollback](media/lab-4.png)

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **digital estate**<br>数字资产 | "For each of these outcomes, the first step starts with a **clear understanding** of the **assets** (applications, data, and VMs) you are responsible for today. Those assets collectively are referred to as your **digital estate**." | 对于上述每种结果，第一步都是**清楚了解**你目前负责的**资产**（应用程序、数据和虚拟机）。这些资产统称为你的**数字资产**。 | [Microsoft, 2022, "Understand your digital estate" section, para. 1](https://web.archive.org/web/20220804114917/https://docs.microsoft.com/en-us/learn/modules/cloud-adoption-framework-plan/4-exercise-digital-estate-assessment#understand-your-digital-estate:~:text=For%20each%20of%20these%20outcomes%2C%20the%20first%20step%20starts) |
| **Discovery and assessment**<br>发现和评估 | Discovery and assessment is the Azure Migrate step that finds your **on-premises servers** and then checks their Azure **readiness**, right size and **monthly cost**. | 发现和评估是 Azure Migrate 中的一个步骤：先找出**本地服务器**，再检查它们的 Azure **就绪情况**、合适大小和**每月成本**。 | My own words |
| **dependency analysis**<br>依赖分析 | "**Dependency analysis**: Understand the **network dependencies** between servers in your datacenter so that you can make **high-confidence migration plans** without missing any **critical dependency**." | **依赖分析**：了解数据中心内服务器之间的**网络依赖关系**，以便制定**高可信度的迁移计划**，而不会遗漏任何**关键依赖关系**。 | [Microsoft, n.d., "Plan" section, bullet 4](https://learn.microsoft.com/en-us/azure/migrate/migrate-services-overview#plan:~:text=Dependency%20analysis%3A%20Understand%20the%20network%20dependencies%20between%20servers) |
| **readiness**<br>就绪性（Azure 就绪度） | "**Azure readiness**: Assess whether **on-premises servers**, SQL servers, and **web apps** are **ready for migration** to Azure." | **Azure 就绪度**：评估**本地服务器**、SQL 服务器和 **Web 应用**是否已**准备好迁移**到 Azure。 | [Microsoft, n.d., "Plan" section, bullet 1](https://learn.microsoft.com/en-us/azure/migrate/migrate-services-overview#plan:~:text=Azure%20readiness%3A%20Assess%20whether%20on%2Dpremises%20servers%2C%20SQL%20servers) |
| **sizing**<br>规格估算（合理定型） | "**Right-sizing**: Estimate the **size of Azure virtual machines (VMs**), the **Azure SQL configuration**, and the number of **Azure VMware Solution nodes** after migration." | **合理定型**：估算 **Azure 虚拟机（VM）的大小**、**Azure SQL 配置**，以及迁移后 **Azure VMware Solution 节点**的数量。 | [Microsoft, n.d., "Plan" section, bullet 2](https://learn.microsoft.com/en-us/azure/migrate/migrate-services-overview#plan:~:text=Right%2Dsizing%3A%20Estimate%20the%20size%20of%20Azure%20virtual%20machines) |
| **cost estimate**<br>成本估算 | "**Azure cost estimation**: Estimate costs for running **on-premises servers** in Azure." | **Azure 成本估算**：估算在 Azure 中运行**本地服务器**的成本。 | [Microsoft, n.d., "Plan" section, bullet 3](https://learn.microsoft.com/en-us/azure/migrate/migrate-services-overview#plan:~:text=Azure%20cost%20estimation%3A%20Estimate%20costs%20for%20running%20on%2Dpremises%20servers) |
| **migration plan**<br>迁移计划 | "Create an effective **cloud migration plan** that includes detailed information about the applications you want to migrate, **application and database availability**, **downtime constraints**, and **migration milestones**." | 制定有效的**云迁移计划**，其中包括有关要迁移的应用程序的详细信息、**应用程序和数据库可用性**、**停机时间限制**以及**迁移里程碑**。 | [Microsoft, 2022, "Finalize the migration plan" section, para. 2](https://web.archive.org/web/20220804114917/https://docs.microsoft.com/en-us/learn/modules/cloud-adoption-framework-plan/4-exercise-digital-estate-assessment#finalize-the-migration-plan:~:text=Create%20an%20effective%20cloud%20migration%20plan%20that%20includes%20detailed) |
| **Azure Migrate appliance**<br>Azure Migrate 设备（发现用虚拟机） | "The **Azure Migrate appliance** is a **virtual appliance** that can be deployed on a server in your datacenter. The appliance collects the **configuration and performance data** for your servers and **continually sends** it to the Azure Migrate service." | **Azure Migrate 设备**是一种**虚拟设备**，可部署在你数据中心的服务器上。该设备收集服务器的**配置和性能数据**，并**持续将其发送**到 Azure Migrate 服务。 | [Microsoft, n.d., "Decide" section, para. 2](https://learn.microsoft.com/en-us/azure/migrate/migrate-services-overview#decide:~:text=The%20Azure%20Migrate%20appliance%20is%20a%20virtual%20appliance%20that%20can) |
| **test migration**<br>测试迁移 | "**Test migration** **simulates the migration** by creating an Azure VM using **replicated data** (usually migrating to a **non-production VNet** in your Azure subscription)." | **测试迁移**会**模拟迁移**，方法是使用**复制的数据**创建 Azure 虚拟机（通常迁移到你 Azure 订阅中的**非生产虚拟网络**）。 | [Microsoft, n.d., "Run a test migration" section, bullet 2](https://learn.microsoft.com/en-us/azure/migrate/tutorial-migrate-vmware#run-a-test-migration:~:text=Test%20migration%20simulates%20the%20migration%20by%20creating%20an%20Azure%20VM) |
| **Rollback**<br>回滚 | A rollback is the planned way to return a **workload** to its **original on-premises environment** if a migration fails or causes problems. | 回滚是在迁移失败或引发问题时，将**工作负载**恢复到**原始本地环境**的预定方案。 | My own words |

## Lab 5: Rehosting to Azure

[Rehosting to Azure](rehosting-to-azure.md), week 5: state the business drivers and the migration strategy, draw the target architecture, and plan the migration and its validation.

![Overview of lab 5: business drivers, rehost (lift and shift, or replatform), Azure VMware Solution, then the migration phases replication, test migration and cutover, repeated in migration waves](media/lab-5.png)

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **business driver**<br>业务驱动因素 | "A **business driver** defines why a **workload** needs to **change** in order to support a **specific business goal**." | **业务驱动因素**定义了**工作负载**为何需要**变更**，以支持**特定业务目标**。 | [Microsoft, n.d., "Determine business drivers before migration" section, para. 1](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/plan/select-cloud-migration-strategy#determine-business-drivers-before-migration:~:text=A%20business%20driver%20defines%20why%20a%20workload%20needs%20to%20change) |
| **Rehost**<br>重新托管 | "Also known as a **lift and shift migration**, a **rehost effort** moves a **current state asset** to the chosen cloud provider with **minimal change** to the overall architecture." | 也称为**直接迁移（lift and shift**）的**重新托管工作**，会将**当前状态的资产**迁移到所选的云提供商，并对整体架构做**最小的更改**。 | [Microsoft, 2023, March 1, "Rehost" section, para. 1](https://github.com/MicrosoftDocs/cloud-adoption-framework/blob/e29e30c4ebd52d8446d00f5dfdee5742328c2c11/docs/digital-estate/5-rs-of-rationalization.md#rehost:~:text=Also%20known%20as%20a%20lift%20and%20shift%20migration%2C%20a%20rehost%20effort) |
| **Azure VMware Solution (AVS)**<br>Azure VMware 解决方案 | "**Azure VMware Solution** provides **private clouds** that contain **VMware vSphere clusters** built from **dedicated bare-metal Azure infrastructure**." | **Azure VMware 解决方案**提供**私有云**，其中包含 **VMware vSphere 群集**，这些群集基于**专用裸机 Azure 基础结构**构建。 | [Microsoft, n.d., para. 1](https://learn.microsoft.com/en-us/azure/azure-vmware/introduction#:~:text=Azure%20VMware%20Solution%20provides%20private%20clouds%20that%20contain%20VMware%20vSphere) |
| **Migration phases**<br>迁移阶段 | Migration phases are the ordered stages of a migration, from **assessing** and **replicating** workloads to testing, **cutting over** and optimizing them in Azure. | 迁移阶段是迁移的有序步骤，从**评估**和**复制**工作负载，到测试、**切换**以及在 Azure 中优化它们。 | My own words |
| **replication**<br>复制 | "During **initial replication**, a **VM snapshot** is created. Disk data from the snapshot is replicated to **replica managed disks (seed disks**) in Azure. After initial replication finishes, **delta replication** begins." | 在**初始复制**期间，会创建**虚拟机快照**。快照中的磁盘数据会复制到 Azure 中的**副本托管磁盘（种子磁盘**）。初始复制完成后，**增量复制**开始。 | [Microsoft, n.d., "Track migrations" section, bullet 2 ("Replication occurs as follows"), sub-bullet 2](https://learn.microsoft.com/en-us/azure/migrate/tutorial-migrate-vmware#track-migrations:~:text=During%20initial%20replication%2C%20a%20VM%20snapshot%20is%20created.%20Disk%20data) |
| **test migration**<br>测试迁移 | "**Test migration** **simulates the migration** by creating an Azure VM using **replicated data** (usually migrating to a **non-production VNet** in your Azure subscription)." | **测试迁移**会**模拟迁移**，方法是使用**复制的数据**创建 Azure 虚拟机（通常迁移到你 Azure 订阅中的**非生产虚拟网络**）。 | [Microsoft, n.d., "Run a test migration" section, bullet 2](https://learn.microsoft.com/en-us/azure/migrate/tutorial-migrate-vmware#run-a-test-migration:~:text=Test%20migration%20simulates%20the%20migration%20by%20creating%20an%20Azure%20VM) |
| **cutover**<br>切换 | "You can perform **final migrations (Cutover**) for these servers. ... By default Azure Migrate **shuts down the source** (on-premises or AVS) VM, and runs an **on-demand replication** to **synchronize** any VM changes that occurred since the last replication occurred." | 你可以对这些服务器执行**最终迁移（切换**）。……默认情况下，Azure Migrate 会**关闭源**（本地或 AVS）虚拟机，并运行**按需复制**，以**同步**自上次复制以来发生的任何虚拟机更改。 | [Microsoft, n.d., "Track migrations" section, bullet 3 ("Completion"), sub-bullet 1](https://learn.microsoft.com/en-us/azure/migrate/tutorial-migrate-vmware#track-migrations:~:text=You%20can%20perform%20final%20migrations%20%28Cutover%29%20for%20these%20servers) |
| **Rehost or replatform**<br>重新托管还是平台重构 | Rehost or replatform is the choice between moving a workload to Azure VMs **unchanged** and moving it with **small changes** so it can use **managed services**. | 重新托管还是平台重构是一种选择：将工作负载**原样**迁移到 Azure 虚拟机，还是做**少量修改**后迁移以使用**托管服务**。 | My own words |
| **migration wave**<br>迁移批次（波次） | "To improve your odds of success, plan a series of subsequent **waves of migrations**. Identify a **small set of prioritized workloads** to migrate, test, and release to production in a **two-week sprint**." | 为了提高成功几率，请规划一系列后续的**迁移波次**。确定**一小组优先工作负载**，在为期**两周的冲刺**中完成迁移、测试并发布到生产环境。 | [Microsoft, 2022, "Output of the exercise" section, para. 3](https://web.archive.org/web/20220804114917/https://docs.microsoft.com/en-us/learn/modules/cloud-adoption-framework-plan/4-exercise-digital-estate-assessment#output-of-the-exercise:~:text=To%20improve%20your%20odds%20of%20success%2C%20plan%20a%20series%20of) |

## Lab 6: Cloud resource comparison

[Cloud resource comparison](cloud-resource-comparison.md), week 6: match the same kind of resource (compute, storage, databases, networking, identity, monitoring) across AWS, Azure and Google Cloud.

### Compute

![Lab 6, compute: the AWS, Azure and Google Cloud names for virtual machines, serverless functions, managed kubernetes, paas app hosting, autoscaling, virtual desktops](media/lab-6-1.png)

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **Virtual machines**<br>虚拟机 | A **compute service** that provides scalable **virtual machines** for running **applications**. | 一种**计算服务**，提供可扩展的**虚拟机**，用于运行**应用程序**。 | Lab 6 comparison table, row 1 |
| **Serverless functions**<br>无服务器函数 | A **serverless** compute service that allows you to run **code** in response to **events** without provisioning or managing **servers**. | 一种**无服务器**计算服务，让你可以运行**代码**来响应**事件**，无需预配或管理**服务器**。 | Lab 6 comparison table, row 4 |
| **Managed Kubernetes**<br>托管 Kubernetes | A managed **container orchestration** service based on **Kubernetes**. | 一种托管的**容器编排**服务，基于 **Kubernetes**。 | Lab 6 comparison table, row 9 |
| **PaaS app hosting**<br>PaaS 应用托管 | A platform that automates **application deployment** and **scaling** without needing to manage **infrastructure**. | 一种平台，自动执行**应用程序部署**和**缩放**，无需管理**基础结构**。 | Lab 6 comparison table, row 11 |
| **Autoscaling**<br>自动缩放 | A service that automatically scales your **cloud infrastructure** based on demand, ensuring **resources** are available as needed. | 一种服务，根据需求自动缩放你的**云基础结构**，确保**资源**在需要时可用。 | Lab 6 comparison table, row 15 |
| **Virtual desktops**<br>虚拟桌面 | A **desktop as a service** (DaaS) offering that allows you to deploy **virtual desktops** in the **cloud** and access them remotely. | 一种**桌面即服务**（DaaS）产品，让你可以将**虚拟桌面**部署在**云**中，并远程访问它们。 | Lab 6 comparison table, row 25 |

### Storage

![Lab 6, storage: the AWS, Azure and Google Cloud names for object storage, block storage, file storage, backup and disaster recovery](media/lab-6-2.png)

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **Object storage**<br>对象存储 | An **object storage** service used to store and retrieve **data**, commonly used for **backups** and **static website content**. | 一种**对象存储**服务，用于存储和检索**数据**，通常用于**备份**和**静态网站内容**。 | Lab 6 comparison table, row 2 |
| **Block storage**<br>块存储 | A **block storage** service for use with **virtual machines**, offering **persistent storage** for data. | 一种**块存储**服务，供**虚拟机**使用，为数据提供**持久性存储**。 | Lab 6 comparison table, row 8 |
| **File storage**<br>文件存储 | A **file storage** service for storing and sharing files with **users**, typically used in **shared file systems** across **applications**. | 一种**文件存储**服务，用于存储文件并与**用户**共享文件，通常用于**共享文件系统**，跨**应用程序**使用。 | Lab 6 comparison table, row 28 |
| **Backup and disaster recovery**<br>备份和灾难恢复 | A backup and **disaster recovery** service that helps to protect your **data** by creating **backups** and **replicas** of your cloud resources. | 一种备份和**灾难恢复**服务，帮助保护你的**数据**，方式是创建云资源的**备份**和**副本**。 | Lab 6 comparison table, row 26 |

### Data

![Lab 6, data: the AWS, Azure and Google Cloud names for relational database, nosql database, data warehouse, big data analytics, data integration, data catalog and governance](media/lab-6-3.png)

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **Relational database**<br>关系数据库 | A managed **relational database** service that supports multiple **database engines** like **MySQL**, PostgreSQL, and SQL Server. | 一种托管的**关系数据库**服务，支持多种**数据库引擎**，如 **MySQL**、PostgreSQL 和 SQL Server。 | Lab 6 comparison table, row 3 |
| **NoSQL database**<br>NoSQL 数据库 | A managed **NoSQL database** service designed for **low-latency**, high-scale **applications**. | 一种托管的 **NoSQL 数据库**服务，设计用于**低延迟**、高规模的**应用程序**。 | Lab 6 comparison table, row 7 |
| **Data warehouse**<br>数据仓库 | A **fully managed**, highly scalable **data warehouse** service optimized for **analytics** and **large-scale queries**. | 一种**完全托管**、高度可扩展的**数据仓库**服务，针对**分析**和**大规模查询**进行了优化。 | Lab 6 comparison table, row 18 |
| **Big data analytics**<br>大数据分析 | A service designed for **big data analytics**, allowing **organizations** to store, process, and analyze **large datasets** in real time. | 一种服务，设计用于**大数据分析**，让**组织**能够实时存储、处理和分析**大型数据集**。 | Lab 6 comparison table, row 27 |
| **Data integration**<br>数据集成 | A service that integrates multiple **data sources** and enables **data migration**, **transformation**, and movement across **platforms**. | 一种服务，集成多个**数据源**，并支持**数据迁移**、**转换**和跨**平台**移动。 | Lab 6 comparison table, row 20 |
| **Data catalog and governance**<br>数据目录和治理 | A **data catalog** and governance service that helps manage **metadata** across your **data estate**, supporting **compliance** and security. | 一种**数据目录**和治理服务，帮助管理**元数据**，范围覆盖整个**数据资产**，并支持**合规性**和安全性。 | Lab 6 comparison table, row 21 |

### Networking

![Lab 6, networking: the AWS, Azure and Google Cloud names for virtual network, content delivery network, dns, load balancing](media/lab-6-4.png)

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **Virtual network**<br>虚拟网络 | A **virtual private network** service that allows you to create **isolated networks** within the **cloud provider**'s **infrastructure**. | 一种**虚拟专用网络**服务，让你可以创建**隔离的网络**，这些网络位于**云提供商**的**基础结构**内。 | Lab 6 comparison table, row 5 |
| **Content delivery network**<br>内容分发网络 | A **content delivery network** (CDN) service that delivers **data**, videos, applications, and APIs to **customers** around the world with **low latency**. | 一种**内容分发网络**（CDN）服务，将**数据**、视频、应用程序和 API 分发给全球各地的**客户**，并具有**低延迟**。 | Lab 6 comparison table, row 6 |
| **DNS**<br>域名系统 | A **domain name system** (DNS) service that routes **traffic** globally and translates **domain names** to **IP addresses**. | 一种**域名系统**（DNS）服务，在全球范围内路由**流量**，并将**域名**转换为 **IP 地址**。 | Lab 6 comparison table, row 13 |
| **Load balancing**<br>负载均衡 | A **load balancing** service that distributes incoming **network traffic** across **multiple targets**, improving **application availability**. | 一种**负载均衡**服务，将传入的**网络流量**分配到**多个目标**，从而提高**应用程序可用性**。 | Lab 6 comparison table, row 14 |

### Security, monitoring and DevOps

![Lab 6, security, monitoring and devops: the AWS, Azure and Google Cloud names for identity and keys, monitoring and logging, infrastructure as code, ci/cd](media/lab-6-5.png)

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **Identity and keys**<br>身份和密钥管理 | A service for managing **user access** and **encryption keys** to secure **cloud resources**. | 一种用于管理**用户访问**和**加密密钥**的服务，以保护**云资源**。 | Lab 6 comparison table, row 10 |
| **Monitoring and logging**<br>监视和日志 | A service that provides **monitoring** and **logging** of applications and infrastructure, offering insights into **resource usage** and **performance**. | 一种服务，提供对应用程序和基础结构的**监视**和**日志记录**，并提供对**资源使用情况**和**性能**的见解。 | Lab 6 comparison table, row 12 |
| **Infrastructure as code**<br>基础结构即代码 | A service that allows you to define and deploy **infrastructure** using code, automating the management of **cloud resources**. | 一种服务，让你通过代码定义和部署**基础结构**，自动执行**云资源**的管理。 | Lab 6 comparison table, row 23 |
| **CI/CD**<br>持续集成和持续交付 | A fully managed **CI/CD** service that automates the building, **testing**, and **deployment** of applications to **production environments**. | 一种完全托管的 **CI/CD** 服务，自动执行构建、**测试**以及将应用程序**部署**到**生产环境**的过程。 | Lab 6 comparison table, row 24 |

### Integration, AI and media

![Lab 6, integration, ai and media: the AWS, Azure and Google Cloud names for message queue, data streaming, workflow automation, ai and machine learning, media transcoding, notifications](media/lab-6-6.png)

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **Message queue**<br>消息队列 | A **message queuing** service that enables **applications** to send and receive **messages** between **different components**. | 一种**消息队列**服务，使**应用程序**能够发送和接收**消息**，这些消息在**不同组件**之间传递。 | Lab 6 comparison table, row 16 |
| **Data streaming**<br>数据流 | A managed **real-time data streaming** service that collects and processes **large amounts of data** from **various sources**. | 一种托管的**实时数据流式处理**服务，收集并处理**大量数据**，这些数据来自**各种来源**。 | Lab 6 comparison table, row 17 |
| **Workflow automation**<br>工作流自动化 | A service that automates the execution of **workflows** and allows the integration of different **cloud services** in a sequence of **steps**. | 一种服务，自动执行**工作流**，并允许集成不同的**云服务**，按一系列**步骤**进行。 | Lab 6 comparison table, row 19 |
| **AI and machine learning**<br>AI 和机器学习 | A set of **machine learning** and AI services that provide **pre-built models**, APIs, and tools for **developers** to easily implement AI in their **apps**. | 一组**机器学习**和 AI 服务，提供**预构建模型**、API 和工具，让**开发人员**能够轻松地在其**应用**中实现 AI。 | Lab 6 comparison table, row 22 |
| **Media transcoding**<br>媒体转码 | A service that helps you transcode, process, and stream **media content** such as **video** and **audio**. | 一种服务，帮助你转码、处理和流式传输**媒体内容**，例如**视频**和**音频**。 | Lab 6 comparison table, row 29 |
| **Notifications**<br>通知 | A **real-time communication** service used for sending **notifications**, emails, and **text messages** to users and **devices**. | 一种**实时通信**服务，用于发送**通知**、电子邮件和**短信**给用户和**设备**。 | Lab 6 comparison table, row 30 |

### Comparing the providers

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **Each provider's name for the same service**<br>各提供商对同一服务的命名 | Each **cloud provider** gives its **own product name** to services that do the same job, such as running virtual machines or storing objects. | 每个**云提供商**都会为功能相同的服务起**自己的产品名称**，例如运行虚拟机或存储对象的服务。 | My own words |
| **Service models**<br>服务模型 | Service models are the **IaaS**, PaaS and **SaaS** levels of cloud service, which differ in how much of the stack you manage and how much the **provider** manages. | 服务模型是 **IaaS**、PaaS 和 **SaaS** 这几个云服务层级，区别在于你管理多少技术栈、**提供商**管理多少。 | My own words |
| **Similarities and differences**<br>相同点和不同点 | Similarities and differences are the points where **equivalent services** from different providers match or diverge, such as features, **pricing** and **limits**. | 相同点和不同点是指不同提供商的**对等服务**在哪些方面一致或不同，例如功能、**定价**和**限制**。 | My own words |
| **Unique capabilities**<br>独有功能 | Unique capabilities are features that **only one provider** offers and that can make it the better fit for a **workload**. | 独有功能是**只有一个提供商**提供的功能，可能使它更适合某个**工作负载**。 | My own words |
| **Naming conventions**<br>命名约定 | Naming conventions are the **patterns** each provider uses to name its products, such as the **Azure prefix** or the Amazon and AWS prefixes. | 命名约定是各提供商为其产品命名时使用的**模式**，例如 **Azure 前缀**，或 Amazon 和 AWS 前缀。 | My own words |
