---
title: "10.2 Infrastructure as Code"
description: "Architecting Cloud Native .NET Applications for Azure, 10.2 Infrastructure as Code: 10.2.1 Azure Resource Manager templates, 10.2.2 Terraform, 10.2.3 Azure CLI Scripts and Tasks."
ms.date: 2026-11-25
---

# 10.2 Infrastructure as Code

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **10.2 Infrastructure as Code**<br>基础设施即代码 | "Modern cloud-native applications embrace the widely accepted practice of **Infrastructure as Code**, or IaC. With IaC, you **automate platform provisioning**." | 现代云原生应用采用被广泛接受的**基础设施即代码**实践，简称 IaC。有了 IaC，你可以**自动完成平台置备**。 | [Microsoft, 2022, "Infrastructure as code", para. 2](https://learn.microsoft.com/en-us/dotnet/architecture/cloud-native/infrastructure-as-code#:~:text=Modern%20cloud%2Dnative%20applications%20embrace%20the%20widely) |
| **10.2.1 Azure Resource Manager templates**<br>Azure Resource Manager 模板 | "**Azure Resource Manager templates** are **a JSON-based language** for defining various resources in Azure." | **Azure Resource Manager 模板**是**一种基于 JSON 的语言**，用来定义 Azure 中的各种资源。 | [Microsoft, 2022, "Azure Resource Manager templates", para. 2](https://learn.microsoft.com/en-us/dotnet/architecture/cloud-native/infrastructure-as-code#:~:text=Azure%20Resource%20Manager%20templates%20are%20a%20JSON) |
| **Azure Resource Manager (ARM)**<br>Azure 资源管理器 | "ARM stands for Azure Resource Manager. It's **an API provisioning engine** that is built into Azure and **exposed as an API service**." | ARM 即 Azure Resource Manager。它是**一个 API 置备引擎**，内置于 Azure 中，并**以 API 服务的形式公开**。 | [Microsoft, 2022, "Azure Resource Manager templates", para. 1](https://learn.microsoft.com/en-us/dotnet/architecture/cloud-native/infrastructure-as-code#:~:text=ARM%20stands%20for%20Azure%20Resource%20Manager) |
| **10.2.2 Terraform**<br>Terraform | "**Terraform** is **a commercial templating tool** that can provision cloud-native applications across all the major cloud players: Azure, Google Cloud Platform, AWS, and AliCloud." | **Terraform** 是**一个商业模板工具**，可以在所有主要云厂商上置备云原生应用：Azure、Google Cloud Platform、AWS 和 AliCloud。 | [Microsoft, 2022, "Terraform", para. 2](https://learn.microsoft.com/en-us/dotnet/architecture/cloud-native/infrastructure-as-code#:~:text=is%20a%20commercial%20templating%20tool) |
| **cloud agnostic**<br>与云无关 | "Cloud-native applications are often constructed to be **cloud agnostic**. Being so means the application **isn't tightly coupled to a particular cloud vendor** and can be deployed to any public cloud." | 云原生应用常被构建为**与云无关**。这意味着应用**不与某一家云厂商紧密耦合**，可以部署到任何公有云。 | [Microsoft, 2022, "Terraform", para. 1](https://learn.microsoft.com/en-us/dotnet/architecture/cloud-native/infrastructure-as-code#:~:text=Cloud%2Dnative%20applications%20are%20often%20constructed%20to%20be) |
| **HCL**<br>HCL 配置语言 | "Instead of using **JSON** as the template definition language, it uses the slightly more terse **HCL** (Hashicorp Configuration Language)." | 它不用 **JSON** 作模板定义语言，而是用稍微更简洁的 **HCL**（Hashicorp Configuration Language）。 | [Microsoft, 2022, "Terraform", para. 2](https://learn.microsoft.com/en-us/dotnet/architecture/cloud-native/infrastructure-as-code#:~:text=Instead%20of%20using%20JSON%20as%20the%20template%20definition) |
| **10.2.3 Azure CLI Scripts and Tasks**<br>Azure CLI 脚本和任务 | "Finally, you can leverage **Azure CLI** to **declaratively script your cloud infrastructure**." | 最后，你可以利用 **Azure CLI** 来**以声明方式编写云基础设施脚本**。 | [Microsoft, 2022, "Azure CLI Scripts and Tasks", para. 1](https://learn.microsoft.com/en-us/dotnet/architecture/cloud-native/infrastructure-as-code#:~:text=Finally%2C%20you%20can%20leverage%20Azure%20CLI) |

## References

Microsoft. (2022, April 6). *Infrastructure as code*. Microsoft Learn. Retrieved November 25, 2026, from <https://learn.microsoft.com/en-us/dotnet/architecture/cloud-native/infrastructure-as-code>
