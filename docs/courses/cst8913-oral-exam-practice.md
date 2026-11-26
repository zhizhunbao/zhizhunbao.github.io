---
title: "CST8913 Oral Exam Practice: EuroRetail Case"
description: "CST8913 oral exam practice: the professor's sample case EuroRetail, headings in the order of its contents page, descriptions in his own words. Local review page, not for publishing."
ms.date: 2026-11-24
---

# CST8913 Oral Exam Practice: EuroRetail Case

教授 2026-11-23 在 Brightspace 发的样例案例。标题按原件目录的层级编号，Description 列是原件原话。公告原话：“Please note that this is only a sample and is not the actual oral exam we will use this year.”

## 1. Case Study – EuroRetail Group Cloud Migration

### 1.1 Organization overview

| Keyword | Description | 中文翻译 | 缩写 |
|---|---|---|---|
| **Company** | EuroRetail Group (ERG) is a **mid-sized omnichannel retail company** headquartered in **Frankfurt, Germany** | EuroRetail 集团（ERG）是一家**中型全渠道零售公司**，总部在**德国法兰克福**。 | ERG 即 EuroRetail Group，EuroRetail 集团。 |
| **Headquarters** | 1 **main headquarters & data center** (**Frankfurt**) | 1 个**总部兼数据中心**，在**法兰克福**。 |  |
| **Regional offices** | 2 **regional offices** (**Paris**, France; **Milan**, Italy) | 2 个**地区办公室**：法国**巴黎**和意大利**米兰**。 |  |
| **Stores** | **120 physical stores** across Germany, France, Italy, Spain, and the Netherlands | **120 家实体店**，分布在德国、法国、意大利、西班牙和荷兰**五个国家**。 |  |
| **E-commerce** | An **e-commerce platform** that serves customers **across the EU** | 一个**电商平台**，服务**全欧盟**的客户。 | EU 即 European Union，欧盟。 |
| **Products** | EuroRetail sells **consumer electronics** and **home appliances** | EuroRetail 卖**消费电子**和**家用电器**。 |  |
| **Acquisitions** | has grown through **acquisitions**. Each acquired company brought its own IT systems and processes, leading to a **fragmented environment**. | 靠**收购**扩张。每家被收购的公司都带来了自己的 IT 系统和流程，导致**环境碎片化**。 | IT 即 information technology，信息技术。 |
| **Program** | The Board has approved a **2.5-year digital transformation program** with a major pillar being **migration from on-premises to public cloud** (e.g., Azure, AWS, or GCP in EU regions). | 董事会批准了一个 **2.5 年的数字化转型计划**，主要支柱是**从本地迁到公有云**（例如欧盟区域的 Azure、AWS 或 GCP）。 | AWS 即 Amazon Web Services，亚马逊云服务；GCP 即 Google Cloud Platform，谷歌云平台；EU 即 European Union，欧盟。 |

### 1.2 Current IT Landscape (On-Premises)

#### 1.2.1 Data Centers & Infrastructure

| Keyword | Description | 中文翻译 | 缩写 |
|---|---|---|---|
| **ESXi hosts** | Primary data center in Frankfurt: **10 VMware ESXi hosts** on **two aging clusters** | 法兰克福主数据中心：**10 台 VMware ESXi 主机**，分属**两个老化的集群**。 | ESXi 是 VMware 的虚拟化主机系统。 |
| **SAN arrays** | **2 SAN arrays** reaching **end-of-support in 18 months** | **2 套 SAN 阵列**，**18 个月后停止厂商支持**。 | SAN 即 Storage Area Network，存储区域网络。 |
| **VMs** | ~**160 VMs** (**Windows + Linux**) | 约 **160 台虚拟机**，有 **Windows 也有 Linux**。 | VM 即 virtual machine，虚拟机。 |
| **Paris and Milan server rooms** | Smaller server rooms in Paris and Milan: **2–3 ESXi hosts each**, **local storage** | 巴黎和米兰各有一个较小的机房：**每处 2 到 3 台 ESXi 主机**，用**本地存储**。 | ESXi 是 VMware 的虚拟化主机系统。 |
| **Local apps** | Host local apps (**point-of-sale integration**, **regional reporting**) | 跑本地应用：**销售终端集成**和**地区报表**。 |  |
| **Backups** | **Nightly backups to disk**, **weekly tape backups** stored offsite in Germany | **每晚备份到磁盘**，**每周磁带备份**，磁带存放在德国境内的异地。 |  |
| **DR** | **No secondary data center**; DR relies on **restoring from backups** | **没有备用数据中心**；灾难恢复只能靠**从备份还原**。 | DR 即 disaster recovery，灾难恢复。 |

#### 1.2.2 Network

| Keyword | Description | 中文翻译 | 缩写 |
|---|---|---|---|
| **MPLS WAN** | **MPLS WAN** connects **HQ, regional offices, and major stores** | **MPLS 广域网**连接**总部、地区办公室和大型门店**。 | MPLS 即 Multiprotocol Label Switching，多协议标签交换；WAN 即 wide area network，广域网；HQ 即 headquarters，总部。 |
| **VPN** | **Smaller stores** use **VPN over the public internet** | **小门店**通过**公网 VPN** 连接。 | VPN 即 virtual private network，虚拟专用网络。 |
| **Internet breakout** | **Single internet breakout at HQ** with **basic firewall appliances** | **只有总部一个互联网出口**，配的是**基础的防火墙设备**。 | HQ 即 headquarters，总部。 |
| **No SD-WAN** | **No SD-WAN**; **limited visibility** into store traffic | **没有 SD-WAN**；对门店流量**看不清楚**。 | SD-WAN 即 Software-Defined Wide Area Network，软件定义广域网。 |

#### 1.2.3 Identity & Access

| Keyword | Description | 中文翻译 | 缩写 |
|---|---|---|---|
| **AD forest** | Single **Active Directory** forest: **corp.euroretail.local** | 只有一个 **Active Directory** 林：**corp.euroretail.local**。 | AD 即 Active Directory，活动目录；林是它最大的管理边界。 |
| **Separate directories** | Some acquired systems still have **separate local domains** or **standalone LDAP directories** | 一些被收购来的系统仍然有**各自的本地域**或**独立的 LDAP 目录**。 | LDAP 即 Lightweight Directory Access Protocol，轻量目录访问协议。 |
| **SSO** | A few SaaS apps use a **basic SAML/OIDC SSO integration**, but many line-of-business apps still use **separate credentials** | 少数 SaaS 应用接了**基础的 SAML/OIDC 单点登录**，但很多业务应用仍然用**各自的账号密码**。 | SSO 即 single sign-on，单点登录；SaaS 即 Software as a Service，软件即服务；SAML 即 Security Assertion Markup Language，安全断言标记语言；OIDC 即 OpenID Connect，一种基于 OAuth 2.0 的登录协议；SAML 和 OIDC 是两种单点登录协议。 |

### 1.3 Key Applications

#### 1.3.1 Core ERP System

| Keyword | Description | 中文翻译 | 缩写 |
|---|---|---|---|
| **3-tier** | On-premises, **Windows-based**, running on a **3-tier architecture** (web, app, DB) | 本地部署，**基于 Windows**，**三层架构**（Web 层、应用层、数据库层）。 | DB 即 database，数据库。 |
| **SQL Server cluster** | Backend: **Microsoft SQL Server cluster** | 后端是 **Microsoft SQL Server 集群**。 | SQL 即 Structured Query Language，结构化查询语言。 |
| **Functions** | Handles **purchasing, inventory, finance**, and **supply chain** | 负责**采购、库存、财务**和**供应链**。 |  |
| **Critical** | **Critical for daily operations** in **all countries** | 对**所有国家**的**日常运营至关重要**。 |  |

#### 1.3.2 Point-of-Sale (POS) & Store Systems

| Keyword | Description | 中文翻译 | 缩写 |
|---|---|---|---|
| **Local store servers** | Hybrid environment: **Local store servers** for **offline transactions** | 混合环境：**门店本地服务器**处理**离线交易**。 |  |
| **Central back-office** | **Central back-office systems** in **HQ data center** | **中央后台系统**放在**总部数据中心**。 | HQ 即 headquarters，总部。 |
| **Overnight batch** | Store data is **batch-uploaded to HQ** **overnight** | 门店数据**每晚批量上传到总部**。 | HQ 即 headquarters，总部。 |
| **Legacy code** | Some **legacy C++ applications**, some **.NET services** | 一些**老旧的 C++ 应用**，一些 **.NET 服务**。 |  |

#### 1.3.3 E-Commerce Platform

| Keyword | Description | 中文翻译 | 缩写 |
|---|---|---|---|
| **Linux VMs** | Runs on **Linux VMs** in the **Frankfurt data center** | 跑在**法兰克福数据中心**的 **Linux 虚拟机**上。 | VM 即 virtual machine，虚拟机。 |
| **Tech stack** | Technology: **Nginx + PHP** + some **Node.js microservices** | 技术栈：**Nginx 加 PHP**，加上一些 **Node.js 微服务**。 | PHP 即 PHP: Hypertext Preprocessor，一种网页编程语言。 |
| **MySQL cluster** | **MySQL database cluster** on **dedicated VMs** | **MySQL 数据库集群**跑在**专用虚拟机**上。 | VM 即 virtual machine，虚拟机。 |
| **Peak capacity** | **Capacity issues** on **peak shopping days** (Black Friday, holiday sales) | **购物高峰日**（黑色星期五、节日促销）会出现**容量不足**。 |  |

#### 1.3.4 Customer Loyalty & CRM System

| Keyword | Description | 中文翻译 | 缩写 |
|---|---|---|---|
| **Windows VMs** | Hosted on **Windows VMs** in **HQ** | 跑在**总部**的 **Windows 虚拟机**上。 | VM 即 virtual machine，虚拟机；HQ 即 headquarters，总部。 |
| **4 million customers** | Stores **personal and behavioral data** for ~**4 million customers** across the EU | 存着全欧盟约 **400 万客户**的**个人数据和行为数据**。 | EU 即 European Union，欧盟。 |
| **Integration** | **Tight integration** with both **POS and e-commerce** | 和 **POS 及电商**都**紧密集成**。 | POS 即 Point-of-Sale，销售终端。 |
| **Sensitive data** | Contains **highly sensitive personal data** (names, contact info, **purchase history**, preferences) | 含有**高度敏感的个人数据**（姓名、联系方式、**购买记录**、偏好）。 |  |

#### 1.3.5 BI & Reporting

| Keyword | Description | 中文翻译 | 缩写 |
|---|---|---|---|
| **Data warehouse** | **On-premises data warehouse** (**SQL Server**) | **本地数据仓库**（**SQL Server**）。 | SQL 即 Structured Query Language，结构化查询语言。 |
| **ETL** | **ETL tools** pulling from **ERP, CRM, and e-commerce DBs** | **ETL 工具**从 **ERP、CRM 和电商数据库**里抽数据。 | ETL 即 Extract, Transform, Load，抽取、转换、加载；ERP 即 Enterprise Resource Planning，企业资源计划；CRM 即 Customer Relationship Management，客户关系管理；DB 即 database，数据库。 |
| **Nightly batch** | **Heavy nightly batch jobs** cause **contention on production systems** | **繁重的夜间批处理**和**生产系统抢资源**。 |  |

#### 1.3.6 Collaboration & File Shares

| Keyword | Description | 中文翻译 | 缩写 |
|---|---|---|---|
| **Microsoft 365** | On-prem **Exchange** already migrated to **Microsoft 365** | 本地 **Exchange** 邮件已经迁到 **Microsoft 365**。 |  |
| **File servers** | **File servers** in HQ and regional offices still host **department shares** | 总部和地区办公室的**文件服务器**仍然放着**部门共享文件夹**。 | HQ 即 headquarters，总部。 |
| **Shadow IT** | Some departments use **ad-hoc cloud storage** solutions, creating **shadow IT** | 一些部门自己随意用**云存储**，形成了**影子 IT**，即没经过 IT 部门批准私自使用的系统。 | IT 即 information technology，信息技术。 |

#### 1.3.7 Security, Compliance & Regulations

| Keyword | Description | 中文翻译 | 缩写 |
|---|---|---|---|
| **GDPR** | EuroRetail operates across **multiple EU countries** and must comply with: **GDPR** (General Data Protection Regulation) | EuroRetail 在**多个欧盟国家**运营，必须遵守 **GDPR**。 | GDPR 即 General Data Protection Regulation，通用数据保护条例；EU 即 European Union，欧盟。 |
| **Local authorities** | **Local data protection authorities** in **Germany, France, Italy**, etc. | 还要遵守**德国、法国、意大利**等国**本地数据保护机构**的要求。 |  |
| **GDPR principles** | Personal data of EU citizens must follow **GDPR principles** (lawfulness, transparency, purpose limitation, **data minimization**, storage limitation, integrity and confidentiality). | 欧盟公民的个人数据必须遵守 **GDPR 原则**：合法、透明、目的限制、**数据最小化**、存储期限限制、完整性和保密性。 | GDPR 即 General Data Protection Regulation，通用数据保护条例；EU 即 European Union，欧盟。 |
| **Data location** | Data must be stored in **EU/EEA regions** or in countries **deemed adequate** by the EU. | 数据必须存放在**欧盟或欧洲经济区的区域**，或者欧盟**认定保护水平足够**的国家。 | EU 即 European Union，欧盟；EEA 即 European Economic Area，欧洲经济区。 |
| **Logging and DSARs** | **Detailed logging** and the ability to respond to **Data Subject Access Requests** (DSARs). | 要有**详细的日志**，并且能响应**数据主体访问请求**。 | DSAR 即 Data Subject Access Request，指个人要求公司说明持有自己哪些数据。 |

#### 1.3.8 Current issues:

| Keyword | Description | 中文翻译 | 缩写 |
|---|---|---|---|
| **Patching** | **Inconsistent patching** across **data centers**. | 各**数据中心**的**补丁不一致**。 |  |
| **Segmentation** | **Limited network segmentation**; **lateral movement** is possible if a server is compromised. | **网络分段不够**；一台服务器被攻破后，攻击者可以**横向移动**到别的服务器。 |  |
| **Central logging** | **Limited central logging**; **forensic investigations** are difficult. | **集中日志不够**；出事后**取证调查**很难。 |  |
| **Manual DSARs** | **Manual processes** for handling **DSARs** and **data retention/deletion**. | 处理 **DSAR** 和**数据保留与删除**都靠**手工流程**。 | DSAR 即 Data Subject Access Request，指个人要求公司说明持有自己哪些数据。 |

#### 1.3.9 Operations & IT Organization

| Keyword | Description | 中文翻译 | 缩写 |
|---|---|---|---|
| **IT team** | **IT team of 20 people** | **IT 团队共 20 人**。 | IT 即 information technology，信息技术。 |
| **Infrastructure admins** | **5 infrastructure admins** (**VMware**, Windows, Linux, storage, backups) | **5 名基础设施管理员**，负责 **VMware**、Windows、Linux、存储和备份。 |  |
| **Network engineers** | **4 network engineers** | **4 名网络工程师**。 |  |
| **Database admins** | **3 database admins** (**SQL Server, MySQL**) | **3 名数据库管理员**，负责 **SQL Server 和 MySQL**。 | SQL 即 Structured Query Language，结构化查询语言。 |
| **Security specialists** | **3 security and compliance specialists** | **3 名安全与合规专员**。 |  |
| **App support and DevOps** | **5 application support/DevOps engineers** | **5 名应用支持和 DevOps 工程师**。 | DevOps 指开发和运维一体化。 |
| **Monitoring** | **Multiple monitoring tools** for servers, network, and apps (**no single pane of glass**) | 服务器、网络和应用各用**不同的监控工具**，**没有统一视图**。 |  |
| **Manual deployments** | **Manual deployments** for **ERP and POS** systems | **ERP 和 POS** 系统靠**手工部署**。 | ERP 即 Enterprise Resource Planning，企业资源计划；POS 即 Point-of-Sale，销售终端。 |
| **Limited CI/CD** | **Limited CI/CD** for **e-commerce** and some newer microservices | 只有**电商**和一些较新的微服务有**少量 CI/CD**。 | CI/CD 即 continuous integration and continuous delivery，持续集成和持续交付。 |
| **Slow provisioning** | **Slow provisioning** of new environments (**weeks or months**) | 开新环境**很慢**，要**几周甚至几个月**。 |  |
| **Batch impact** | **Nightly batch jobs** for BI/reporting **impact production systems** | BI 和报表的**夜间批处理**会**影响生产系统**。 | BI 即 Business Intelligence，商业智能。 |
| **Risky changes** | Difficulty **rolling out changes quickly and safely** during **peak retail periods** | 在**零售高峰期**很难**快速又安全地上线变更**。 |  |

#### 1.3.10 Business Drivers for Cloud Migration

| Keyword | Description | 中文翻译 | 缩写 |
|---|---|---|---|
| **Cost Optimization & Flexibility** | Avoid **large CapEx** for new SAN and hardware; Move toward **OpEx and pay-as-you-go** for seasonal peaks; Improve ability to scale during peak shopping periods | 避免为新 SAN 和硬件投入**大笔资本支出**；转向**运营支出和按用量付费**来应对季节性高峰；提升购物高峰期的扩展能力。 | CapEx 即 capital expenditure，资本支出；SAN 即 Storage Area Network，存储区域网络；OpEx 即 operating expenditure，运营支出。 |
| **Improved Resilience & DR** | Current DR strategy is **tape-based only**; Need for **multi-region resilience** to ensure e-commerce and core systems remain available during outages | 现在的灾备**只靠磁带**；需要**多区域的韧性**，保证故障时电商和核心系统仍然可用。 | DR 即 disaster recovery，灾难恢复。 |
| **Scalability for E-Commerce** | Online business **growing faster** than physical retail; Need to handle **traffic spikes** (Black Friday, Cyber Monday, promotions) without performance degradation | 线上业务比实体零售**增长更快**；需要扛住**流量高峰**（黑色星期五、网络星期一、促销）而不降低性能。 |  |
| **Data & Analytics** | Desire to use **modern analytics** and possibly machine learning for pricing, forecasting, and personalized offers; Current on-prem DW is **at capacity** | 希望用**现代分析**，也可能用机器学习来做定价、预测和个性化优惠；现在的本地数据仓库**已经满负荷**。 | DW 即 data warehouse，数据仓库。 |
| **Standardization & Modernization** | Reduce **technology sprawl** inherited from acquisitions; Standardize on a cloud platform and **modern deployment practices** (IaC, CI/CD) | 减少收购带来的**技术杂乱**；统一到一个云平台和**现代部署方式**（IaC、CI/CD）。 | IaC 即 Infrastructure as Code，基础设施即代码；CI/CD 即 continuous integration and continuous delivery，持续集成和持续交付。 |
| **Regulatory & Security Posture** | Strengthen **GDPR compliance**, logging, and security controls; Simplify **audits and incident response** across multiple EU jurisdictions | 加强 **GDPR 合规**、日志和安全控制；简化跨多个欧盟司法辖区的**审计和事件响应**。 | GDPR 即 General Data Protection Regulation，通用数据保护条例；EU 即 European Union，欧盟。 |

#### 1.3.11 Migration Goals & Scope

| Keyword | Description | 中文翻译 | 缩写 |
|---|---|---|---|
| **Approved plan** | The Executive Committee has approved a plan to move **a majority of workloads** to **EU-based cloud regions** within **30 months**. | 执行委员会批准了一个计划：**30 个月**内把**大部分工作负载**迁到**欧盟境内的云区域**。 | EU 即 European Union，欧盟。 |
| **Goal: decommission** | **Decommission the Frankfurt data center** (or drastically reduce its footprint) within **3 years**. | **3 年**内**关闭法兰克福数据中心**，或者大幅缩小它的规模。 |  |
| **Goal: e-commerce and CRM** | Improve **availability and scalability** of the **e-commerce platform and CRM**. | 提高**电商平台和 CRM** 的**可用性和扩展性**。 | CRM 即 Customer Relationship Management，客户关系管理。 |
| **Goal: DR** | Introduce robust **multi-region DR** for **critical business systems**. | 为**关键业务系统**建立可靠的**多区域灾备**。 | DR 即 disaster recovery，灾难恢复。 |
| **Goal: logging** | Implement a **central logging and security framework** for **all cloud workloads**. | 为**所有云上工作负载**建立**集中的日志和安全框架**。 |  |
| **Goal: analytics** | Enable **modern analytics** capabilities on consolidated data, with proper **GDPR controls**. | 在整合后的数据上实现**现代分析**能力，并配上合适的 **GDPR 控制**。 | GDPR 即 General Data Protection Regulation，通用数据保护条例。 |
| **In scope** | **ERP system** (core financials, inventory, supply chain); **E-commerce platform** (web front-end, APIs, MySQL DB); CRM & loyalty platform (sensitive personal data); Data warehouse and BI/reporting workloads; Store integration services (batch + near-real-time); File shares and internal collaboration tools (beyond what is already in M365) | 在迁移范围内：**ERP 系统**（核心财务、库存、供应链）；**电商平台**（Web 前端、API、MySQL 数据库）；CRM 和会员平台（敏感个人数据）；数据仓库和 BI 报表；门店集成服务（批量加近实时）；文件共享和内部协作工具（M365 已有的除外）。 | ERP 即 Enterprise Resource Planning，企业资源计划；API 即 application programming interface，应用程序接口；DB 即 database，数据库；CRM 即 Customer Relationship Management，客户关系管理；BI 即 Business Intelligence，商业智能；M365 即 Microsoft 365。 |
| **Out of scope** | **Very old local tools** to be retired; Some specialized store systems tied to **legacy hardware** that will be replaced over time | 不在范围内或放到后期：**很老的本地工具**直接退役；一些绑定**老旧硬件**的专用门店系统，以后逐步替换。 |  |

#### 1.3.12 Constraints & Challenges

| Keyword | Description | 中文翻译 | 缩写 |
|---|---|---|---|
| **Data residency: EU regions** | Personal data must reside in **EU regions only** (e.g., **Germany West Central**, France Central, etc.). | 个人数据**只能放在欧盟区域**（例如 **Germany West Central**、France Central 等）。 | EU 即 European Union，欧盟。 |
| **Data residency: legal basis** | Cloud provider regions must be **clearly EU-based**; no data processing outside EU **without legal basis**. | 云服务商的区域必须**明确在欧盟境内**；**没有法律依据**不能在欧盟以外处理数据。 | EU 即 European Union，欧盟。 |
| **GDPR: consent** | Need robust **consent tracking** and **data minimization** in CRM and analytics. | CRM 和分析里需要可靠的**同意记录**和**数据最小化**。 | GDPR 即 General Data Protection Regulation，通用数据保护条例；CRM 即 Customer Relationship Management，客户关系管理。 |
| **GDPR: DSARs** | Must support **DSARs**, **right to erasure**, and data retention policies across new cloud platforms. | 新的云平台必须支持 **DSAR**、**被遗忘权**和数据保留策略。 | GDPR 即 General Data Protection Regulation，通用数据保护条例；DSAR 即 Data Subject Access Request，指个人要求公司说明持有自己哪些数据。 |
| **Downtime: ERP** | ERP: **Planned downtime of up to 6 hours** is acceptable, but **only during weekends**. | ERP：可以接受**最多 6 小时的计划停机**，但**只能在周末**。 | ERP 即 Enterprise Resource Planning，企业资源计划。 |
| **Downtime: e-commerce** | E-commerce: Prefer **near-zero downtime**; minimal impact during **off-peak hours**. | 电商：希望**接近零停机**；在**非高峰时段**影响要最小。 |  |
| **Downtime: CRM** | CRM: **Short maintenance windows** possible, but **loyalty features** affect customer experience if unavailable. | CRM：可以有**短的维护窗口**，但**会员功能**不可用会影响客户体验。 | CRM 即 Customer Relationship Management，客户关系管理。 |
| **Multi-country: tax** | Different **tax rules** and **reporting requirements** per country. | 每个国家的**税务规则**和**报表要求**都不一样。 |  |
| **Multi-country: latency** | Local teams in each country need to access systems with **low latency** and **high reliability**. | 各国本地团队访问系统时需要**低延迟**和**高可靠性**。 |  |
| **Skill gaps** | Team has **basic knowledge of cloud** but limited experience with **Infrastructure as Code, CI/CD, and cloud security**. | 团队**懂一点云**，但在**基础设施即代码、CI/CD 和云安全**方面经验有限。 | CI/CD 即 continuous integration and continuous delivery，持续集成和持续交付。 |
| **New roles** | Need **training** and potentially **new roles** (e.g., Cloud Architect, Cloud Security Engineer). | 需要**培训**，可能还要设**新岗位**（例如云架构师、云安全工程师）。 |  |
| **Change: regional IT** | **Regional IT teams** worry about **losing control** when systems move to cloud. | **地区 IT 团队**担心系统上云后自己**失去控制权**。 | IT 即 information technology，信息技术。 |
| **Change: business** | **Business stakeholders** fear **disruption** during key retail periods. | **业务相关方**担心在关键零售时期出现**业务中断**。 |  |

#### 1.3.13 Target Cloud Architecture (High-Level Vision)

##### 1.3.13.1 Landing Zone & Governance

| Keyword | Description | 中文翻译 | 缩写 |
|---|---|---|---|
| **Management groups** | Use a landing zone with: **Management groups** for **Prod, Non-Prod, Shared Services** | 用一个着陆区，包含：按**生产、非生产、共享服务**划分的**管理组**。 |  |
| **Subscriptions** | **Separate subscriptions/accounts** per environment and/or **per domain** (ERP, e-commerce, data & analytics) | 按环境和/或**按业务域**（ERP、电商、数据与分析）**分开订阅或账户**；Azure 叫订阅，AWS 叫账户。 | ERP 即 Enterprise Resource Planning，企业资源计划；AWS 即 Amazon Web Services，亚马逊云服务。 |
| **Policy: regions** | Centralized security and policy enforcement: **Restrict regions to EU** | 集中的安全和策略管控：**只允许欧盟区域**。 | EU 即 European Union，欧盟。 |
| **Policy: encryption, logging, tagging** | Enforce **encryption**, **logging**, and tagging | 强制**加密**、**日志**和标签。 |  |
| **Policy: SKUs** | Enforce **allowed SKUs** and **services** | 强制只用**允许的 SKU** 和**服务**。 | SKU 即 stock keeping unit，指产品的规格或档位。 |

##### 1.3.13.2 Identity & Access

| Keyword | Description | 中文翻译 | 缩写 |
|---|---|---|---|
| **Entra ID** | Integrate **on-prem Active Directory** with **cloud identity** (e.g., Entra ID/Azure AD). | 把**本地 Active Directory** 和**云身份**集成（例如 Entra ID，原名 Azure AD）。 | AD 即 Active Directory，活动目录。 |
| **SSO** | Use **SSO** for users across **ERP, CRM, and e-commerce admin consoles**. | 用户登录 **ERP、CRM 和电商管理后台**都用**单点登录**。 | SSO 即 single sign-on，单点登录；ERP 即 Enterprise Resource Planning，企业资源计划；CRM 即 Customer Relationship Management，客户关系管理。 |
| **RBAC** | Implement **RBAC** and **least-privilege** for admins and operators. | 对管理员和运维人员实行 **RBAC** 和**最小权限**。 | RBAC 即 role-based access control，基于角色的访问控制。 |
| **MFA and conditional access** | Introduce **MFA** and **conditional access** policies for remote and privileged access. | 对远程访问和特权访问启用 **MFA** 和**条件访问**策略。 | MFA 即 multifactor authentication，多重身份验证。 |

##### 1.3.13.3 Networking

| Keyword | Description | 中文翻译 | 缩写 |
|---|---|---|---|
| **Hub** | Build a hub-and-spoke network: **Hub VNet/VPC** for **shared services** (firewalls, DNS, logging, monitoring) | 建中心辐射型网络：**中心 VNet 或 VPC** 放**共享服务**（防火墙、DNS、日志、监控）。 | VNet 即 virtual network，虚拟网络；VPC 即 Virtual Private Cloud，AWS 的虚拟私有云；DNS 即 Domain Name System，域名系统。 |
| **Spokes** | **Spokes** for **ERP, e-commerce, CRM, data & analytics, store integration services** | **ERP、电商、CRM、数据与分析、门店集成服务**各有一个**辐射网络**。 | ERP 即 Enterprise Resource Planning，企业资源计划；CRM 即 Customer Relationship Management，客户关系管理。 |
| **VPN then ExpressRoute** | Hybrid connectivity with **VPN initially** and **ExpressRoute/Direct Connect** for long-term, low-latency, secure connectivity. | 混合连接**先用 VPN**，长期用 **ExpressRoute 或 Direct Connect** 实现低延迟、安全的连接。 | VPN 即 virtual private network，虚拟专用网络；ExpressRoute 是 Azure 的专线，Direct Connect 是 AWS 的专线。 |
| **SD-WAN** | **SD-WAN strategy** for stores to reach **both cloud and on-prem** resources. | 用 **SD-WAN 方案**让门店能同时访问**云上和本地**的资源。 | SD-WAN 即 Software-Defined Wide Area Network，软件定义广域网。 |

##### 1.3.13.4 Application Migration & Modernization (6/7 Rs)

| Keyword | Description | 中文翻译 | 缩写 |
|---|---|---|---|
| **ERP: Rehost** | Phase 1: **Rehost** the existing 3-tier ERP on **IaaS VMs** in EU regions. | 第一阶段：把现有的三层 ERP **重新托管**到欧盟区域的 **IaaS 虚拟机**上。 | ERP 即 Enterprise Resource Planning，企业资源计划；IaaS 即 Infrastructure as a Service，基础设施即服务；VM 即 virtual machine，虚拟机；EU 即 European Union，欧盟。 |
| **ERP: Replatform** | Phase 2: Explore partial **Replatform** (**managed DB service**) and integration improvements. | 第二阶段：探索部分**换平台**（改用**托管数据库服务**）和集成改进。 | ERP 即 Enterprise Resource Planning，企业资源计划；DB 即 database，数据库。 |
| **POS: Rehost and re-architect** | **Rehost** integration components, but **re-architect data flows** to support near-real-time updates to central systems instead of nightly batches. | 集成组件**重新托管**，但**重新设计数据流**，让门店数据近实时更新到中央系统，取代每晚批处理。 | POS 即 Point-of-Sale，销售终端。 |
| **E-commerce: cloud-native** | Move to **cloud-native architecture**: Web front-end on managed web apps or containers; Managed DB service for MySQL; **Autoscaling** based on traffic; CDN for static content | 改成**云原生架构**：Web 前端放在托管 Web 应用或容器上；MySQL 用托管数据库服务；按流量**自动扩缩**；静态内容走 CDN。 | DB 即 database，数据库；CDN 即 content delivery network，内容分发网络。 |
| **CRM: Rehost then Refactor** | **Rehost** in short term, then **Refactor** for better segmentation of personal data, consent management, and APIs. | 短期先**重新托管**，之后**重构**，更好地隔离个人数据，改进同意管理和 API。 | CRM 即 Customer Relationship Management，客户关系管理；API 即 application programming interface，应用程序接口。 |
| **CRM: data protection** | Introduce strong **data retention** and **masking/pseudonymization** patterns. | 引入严格的**数据保留**以及**脱敏和假名化**模式。 | CRM 即 Customer Relationship Management，客户关系管理。 |
| **Data: cloud DW** | Migrate DW to a **cloud-based data warehouse or lakehouse** in **EU region**. | 把数据仓库迁到**欧盟区域**的**云数据仓库或湖仓**。 | DW 即 data warehouse，数据仓库；EU 即 European Union，欧盟。 |
| **Data: pipelines** | Use **ETL/ELT pipelines** into cloud data platform, with clear governance and **data classification**. | 用 **ETL 或 ELT 管道**把数据送进云数据平台，配上清晰的治理和**数据分类**。 | ETL 即 Extract, Transform, Load，抽取、转换、加载；ELT 即 Extract, Load, Transform，先加载后转换。 |

##### 1.3.13.5 Security & Compliance

| Keyword | Description | 中文翻译 | 缩写 |
|---|---|---|---|
| **Encryption** | Enforce **encryption at rest** and **in transit** for all services. | 所有服务强制**静态加密**和**传输加密**。 |  |
| **Key Vault** | Use **Key Management Service / Key Vault** to manage encryption keys; sensitive keys may need **HSM-backed storage**. | 用 **Key Management Service 或 Key Vault** 管理加密密钥；敏感密钥可能需要**放在 HSM 里**。 | HSM 即 hardware security module，硬件安全模块；Key Management Service 是 AWS 的，Key Vault 是 Azure 的。 |
| **SIEM** | **Centralize logging** into a **SIEM** for security analytics. | 把日志**集中**到 **SIEM** 做安全分析。 | SIEM 即 security information and event management，安全信息和事件管理。 |
| **DLP and CASB** | Implement **DLP**, **CASB**, and data classification for personal and sensitive data. | 对个人和敏感数据实施 **DLP**、**CASB** 和数据分类。 | DLP 即 data loss prevention，数据防泄漏；CASB 即 cloud access security broker，云访问安全代理。 |
| **Testing** | Regular **security assessments** and **penetration testing**. | 定期做**安全评估**和**渗透测试**。 |  |

##### 1.3.13.6 Operations & Automation

| Keyword | Description | 中文翻译 | 缩写 |
|---|---|---|---|
| **IaC** | Use **Infrastructure as Code** (**Terraform/Bicep/CloudFormation**) for networking, compute, and platform services. | 网络、计算和平台服务都用**基础设施即代码**（**Terraform、Bicep 或 CloudFormation**）。 | IaC 即 Infrastructure as Code，基础设施即代码。 |
| **CI/CD** | Implement **CI/CD pipelines** for **e-commerce** and eventually for ERP/CRM deployments. | 先为**电商**建 **CI/CD 管道**，最终也用于 ERP 和 CRM 的部署。 | CI/CD 即 continuous integration and continuous delivery，持续集成和持续交付；ERP 即 Enterprise Resource Planning，企业资源计划；CRM 即 Customer Relationship Management，客户关系管理。 |
| **Automation** | Introduce automation for: **Patch management**; **Backup and restore**; Scale up/down during peak seasons | 自动化以下工作：**补丁管理**；**备份和还原**；高峰季扩容和缩容。 |  |

##### 1.3.13.7 Cost Management

| Keyword | Description | 中文翻译 | 缩写 |
|---|---|---|---|
| **Budgets** | Use **cost management tools**, **budgets**, and alerts. | 用**成本管理工具**、**预算**和告警。 |  |
| **Tags** | **Tag resources** with **cost centers**, environments, and owners. | 给**资源打标签**，标明**成本中心**、环境和负责人。 |  |
| **Scaling** | Implement **autoscaling** and **schedule-based scaling** for non-prod workloads. | 对非生产工作负载做**自动扩缩**和**按计划扩缩**。 |  |
| **Storage tiers** | For analytics and storage-heavy workloads, use appropriate **storage tiers** and **lifecycle policies**. | 分析类和存储量大的工作负载，用合适的**存储层**和**生命周期策略**。 |  |

### 1.4 Migration Phases (Example Roadmap)

#### 1.4.1 Phase 0 – Assessment & Readiness

| Keyword | Description | 中文翻译 | 缩写 |
|---|---|---|---|
| **Assessment** | Detailed **application and infrastructure assessment** | 详细的**应用和基础设施评估**。 |  |
| **GDPR impact assessment** | **GDPR impact assessment** for **migration** | 针对**迁移**做 **GDPR 影响评估**。 | GDPR 即 General Data Protection Regulation，通用数据保护条例。 |
| **Training plan** | **Skills and training plan** for **IT teams** | 为 **IT 团队**制定**技能和培训计划**。 | IT 即 information technology，信息技术。 |
| **Communication plan** | **Business alignment** and **communication plan** | **和业务对齐**，制定**沟通计划**。 |  |

#### 1.4.2 Phase 1 – Landing Zone & Connectivity

| Keyword | Description | 中文翻译 | 缩写 |
|---|---|---|---|
| **Landing zone** | Build **landing zone** with governance, **identity integration**, and basic security controls | 搭建**着陆区**，包括治理、**身份集成**和基础安全控制。 |  |
| **Connectivity** | Establish **VPN** + plan for **ExpressRoute/Direct Connect** | 建立 **VPN**，并规划 **ExpressRoute 或 Direct Connect**。 | VPN 即 virtual private network，虚拟专用网络。 |
| **Central frameworks** | Set up **central logging**, monitoring, and **backup frameworks** | 建立**集中日志**、监控和**备份框架**。 |  |

#### 1.4.3 Phase 2 – Non-Critical Workloads & Pilots

| Keyword | Description | 中文翻译 | 缩写 |
|---|---|---|---|
| **Dev/test** | Migrate **dev/test environments** for **ERP, CRM, and e-commerce** | 迁移 **ERP、CRM 和电商**的**开发和测试环境**。 | ERP 即 Enterprise Resource Planning，企业资源计划；CRM 即 Customer Relationship Management，客户关系管理。 |
| **Internal apps** | Move some **internal apps**, **file shares**, and BI prototypes | 迁移一些**内部应用**、**文件共享**和 BI 原型。 | BI 即 Business Intelligence，商业智能。 |
| **Validation** | Validate **performance, security, and cost models** | 验证**性能、安全和成本模型**。 |  |

#### 1.4.4 Phase 3 – E-Commerce & Analytics

| Keyword | Description | 中文翻译 | 缩写 |
|---|---|---|---|
| **E-commerce** | Migrate and **modernize e-commerce** to **cloud-native architecture** | 迁移并**现代化电商**，改成**云原生架构**。 |  |
| **Analytics** | Implement **cloud-based data warehouse/lakehouse** and **analytics tools** | 上线**云数据仓库或湖仓**和**分析工具**。 |  |
| **Peak scaling** | Prove ability to **scale for seasonal peaks** | 证明能**扛住季节性高峰**。 |  |

#### 1.4.5 Phase 4 – ERP & CRM Migration

| Keyword | Description | 中文翻译 | 缩写 |
|---|---|---|---|
| **Rehost ERP and CRM** | **Rehost ERP and CRM** in EU cloud regions with **robust cutover plans** | 在欧盟云区域**重新托管 ERP 和 CRM**，配上**可靠的切换计划**。 | ERP 即 Enterprise Resource Planning，企业资源计划；CRM 即 Customer Relationship Management，客户关系管理；EU 即 European Union，欧盟。 |
| **POS integration** | **Re-architect POS integration** for **near-real-time data flows** | **重新设计 POS 集成**，实现**近实时数据流**。 | POS 即 Point-of-Sale，销售终端。 |
| **CRM controls** | Introduce improved **consent and retention controls** in **CRM** | 在 **CRM** 中加强**同意和保留控制**。 | CRM 即 Customer Relationship Management，客户关系管理。 |

#### 1.4.6 Phase 5 – Optimization, DR, and Decommission

| Keyword | Description | 中文翻译 | 缩写 |
|---|---|---|---|
| **Multi-region DR** | Implement full **multi-region DR** for **critical systems** | 为**关键系统**实现完整的**多区域灾备**。 | DR 即 disaster recovery，灾难恢复。 |
| **Tuning** | Tune performance and cost (**right-sizing**, **reserved instances**, storage tiers) | 调优性能和成本（**调整规格**、**预留实例**、存储层）。 |  |
| **Decommission** | **Decommission on-prem hardware** and reduce **Frankfurt data center footprint** | **淘汰本地硬件**，缩小**法兰克福数据中心的规模**。 |  |
| **Operating model** | Finalize updated **operating model** and **governance** | 定下更新后的**运营模式**和**治理**。 |  |
