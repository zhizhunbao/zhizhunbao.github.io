---
title: "Cloud resource comparison"
description: "CST8913 Cloud Migration, lab 6: Cloud resource comparison. Exam-style questions answered with my lab work."
ms.date: 2026-10-19
---

# Cloud resource comparison

Lab 6 of CST8913 Cloud Migration (week 6): match the same kind of resource (compute, storage, databases, networking, identity, monitoring) across AWS, Azure and Google Cloud. Each concept below has its own section with the questions it raises, answered with what I wrote in my lab.

## Concepts to understand

| # | Concept | Explained in |
|---|---|---|
| 1 | [service models](#1-service-models) | [4. Describe cloud service types](../lectures/describe-cloud-service-types.md) |
| 2 | [each provider's name for the same service](#2-each-providers-name-for-the-same-service) | [4. Describe cloud service types](../lectures/describe-cloud-service-types.md) |
| 3 | [similarities and differences](#3-similarities-and-differences) | [4. Describe cloud service types](../lectures/describe-cloud-service-types.md) |
| 4 | [unique capabilities](#4-unique-capabilities) | None |
| 5 | [naming conventions](#5-naming-conventions) | None |

## 1. Service models

#### Which service models do AWS, Azure and Google Cloud all offer?

- All three offer the same service models: virtual machines (row 1), PaaS app hosting (row 11), serverless functions (row 4), and managed Kubernetes (row 9).

Explained in [4. Describe cloud service types](../lectures/describe-cloud-service-types.md).

## 2. Each provider's name for the same service

#### What is each provider's name for the same kind of service (compute, storage, databases, networking, identity, monitoring and more)?

| # | Description | AWS (Service Name) | Azure (Service Name) | Google Cloud (Service Name) |
|---|---|---|---|---|
| 1 | A compute service that provides scalable virtual machines for running applications. | Amazon EC2 | Azure Virtual Machines | Compute Engine |
| 2 | An object storage service used to store and retrieve data, commonly used for backups and static website content. | Amazon S3 | Azure Blob Storage | Cloud Storage |
| 3 | A managed relational database service that supports multiple database engines like MySQL, PostgreSQL, and SQL Server. | Amazon RDS | Azure SQL Database, Azure Database for MySQL, Azure Database for PostgreSQL | Cloud SQL |
| 4 | A serverless compute service that allows you to run code in response to events without provisioning or managing servers. | AWS Lambda | Azure Functions | Cloud Run functions |
| 5 | A virtual private network service that allows you to create isolated networks within the cloud provider's infrastructure. | Amazon VPC | Azure Virtual Network | Virtual Private Cloud (VPC) |
| 6 | A content delivery network (CDN) service that delivers data, videos, applications, and APIs to customers around the world with low latency. | Amazon CloudFront | Azure Front Door | Cloud CDN |
| 7 | A managed NoSQL database service designed for low-latency, high-scale applications. | Amazon DynamoDB | Azure Cosmos DB | Bigtable (Firestore for documents) |
| 8 | A block storage service for use with virtual machines, offering persistent storage for data. | Amazon EBS | Azure Managed Disks | Persistent Disk / Hyperdisk |
| 9 | A managed container orchestration service based on Kubernetes. | Amazon EKS | Azure Kubernetes Service (AKS) | Google Kubernetes Engine (GKE) |
| 10 | A service for managing user access and encryption keys to secure cloud resources. | AWS IAM + AWS KMS | Microsoft Entra ID + Azure RBAC + Azure Key Vault | Cloud IAM + Cloud KMS |
| 11 | A platform that automates application deployment and scaling without needing to manage infrastructure. | AWS Elastic Beanstalk | Azure App Service | App Engine |
| 12 | A service that provides monitoring and logging of applications and infrastructure, offering insights into resource usage and performance. | Amazon CloudWatch | Azure Monitor | Cloud Monitoring + Cloud Logging |
| 13 | A domain name system (DNS) service that routes traffic globally and translates domain names to IP addresses. | Amazon Route 53 | Azure DNS | Cloud DNS |
| 14 | A load balancing service that distributes incoming network traffic across multiple targets, improving application availability. | Elastic Load Balancing | Azure Load Balancer (Layer 4), Azure Application Gateway (Layer 7) | Cloud Load Balancing |
| 15 | A service that automatically scales your cloud infrastructure based on demand, ensuring resources are available as needed. | Amazon EC2 Auto Scaling | Virtual Machine Scale Sets with Azure Autoscale | Compute Engine autoscaler (managed instance groups) |
| 16 | A message queuing service that enables applications to send and receive messages between different components. | Amazon SQS | Azure Queue Storage, Azure Service Bus | Cloud Tasks (Pub/Sub for publish/subscribe) |
| 17 | A managed real-time data streaming service that collects and processes large amounts of data from various sources. | Amazon Kinesis Data Streams | Azure Event Hubs | Pub/Sub |
| 18 | A fully managed, highly scalable data warehouse service optimized for analytics and large-scale queries. | Amazon Redshift | Azure Synapse Analytics | BigQuery |
| 19 | A service that automates the execution of workflows and allows the integration of different cloud services in a sequence of steps. | AWS Step Functions | Azure Logic Apps | Workflows |
| 20 | A service that integrates multiple data sources and enables data migration, transformation, and movement across platforms. | AWS Glue | Azure Data Factory | Cloud Data Fusion |
| 21 | A data catalog and governance service that helps manage metadata across your data estate, supporting compliance and security. | Amazon DataZone (AWS Glue Data Catalog) | Microsoft Purview | Knowledge Catalog |
| 22 | A set of machine learning and AI services that provide pre-built models, APIs, and tools for developers to easily implement AI in their apps. | AWS AI services (Rekognition, Comprehend, Translate) and Amazon SageMaker | Azure AI services (Vision, Language, Translator) and Azure Machine Learning | Vertex AI and Cloud AI APIs (Vision AI, Natural Language AI, Translation AI) |
| 23 | A service that allows you to define and deploy infrastructure using code, automating the management of cloud resources. | AWS CloudFormation | Azure Resource Manager templates / Bicep | Infrastructure Manager (Terraform) |
| 24 | A fully managed CI/CD service that automates the building, testing, and deployment of applications to production environments. | AWS CodePipeline (with CodeBuild, CodeDeploy) | Azure Pipelines (Azure DevOps) | Cloud Build (with Cloud Deploy) |
| 25 | A desktop as a service (DaaS) offering that allows you to deploy virtual desktops in the cloud and access them remotely. | Amazon WorkSpaces | Azure Virtual Desktop | No first-party service (partner solutions) |
| 26 | A backup and disaster recovery service that helps to protect your data by creating backups and replicas of your cloud resources. | AWS Backup, AWS Elastic Disaster Recovery | Azure Backup, Azure Site Recovery | Backup and DR Service |
| 27 | A service designed for big data analytics, allowing organizations to store, process, and analyze large datasets in real time. | Amazon EMR | Azure HDInsight, Azure Databricks | Managed Service for Apache Spark (formerly Dataproc) |
| 28 | A file storage service for storing and sharing files with users, typically used in shared file systems across applications. | Amazon EFS | Azure Files | Filestore |
| 29 | A service that helps you transcode, process, and stream media content such as video and audio. | AWS Elemental MediaConvert | No first-party service (Azure Media Services retired in 2024; partner solutions) | Transcoder API |
| 30 | A real-time communication service used for sending notifications, emails, and text messages to users and devices. | Amazon SNS (email: Amazon SES) | Azure Notification Hubs, Azure Communication Services | Firebase Cloud Messaging (push only) |

Explained in [4. Describe cloud service types](../lectures/describe-cloud-service-types.md).

## 3. Similarities and differences

#### What are the key similarities and differences between equivalent services across the three providers?

Similarities:

- Most services match one to one, such as VMs, object storage, block storage, file storage, Kubernetes, and DNS (rows 1, 2, 8, 9, 13, 28).
- All three offer the same service models: virtual machines (row 1), PaaS app hosting (row 11), serverless functions (row 4), and managed Kubernetes (row 9).
- Several services run the same open-source engines, such as MySQL and PostgreSQL (row 3) and Apache Spark (row 27).

Differences:

- Amazon RDS and Cloud SQL cover several database engines in one service, while Azure has a separate service per engine (row 3).
- Azure splits some jobs into several services: load balancing into Load Balancer, Application Gateway, and Front Door (row 14), and protection into Azure Backup and Azure Site Recovery (row 26).
- Amazon SNS sends push notifications, email, and SMS from one service, while Google only offers push notifications through Firebase and uses partners such as SendGrid for email (row 30).
- Some services have no first-party match: Google has no desktop as a service (row 25), and Azure has no media transcoding service (row 29).

Explained in [4. Describe cloud service types](../lectures/describe-cloud-service-types.md).

## 4. Unique capabilities

#### Which services offer capabilities their counterparts lack?

- Azure Event Hubs has built-in Apache Kafka compatibility, so existing Kafka workloads run without code changes (row 17).
- AWS Step Functions can call over 9,000 API actions across more than 200 AWS services (row 19).
- Amazon WorkSpaces offers two modes: Personal for persistent desktops and Pools for non-persistent desktops (row 25).
- AWS has a separate file service for Windows, Amazon FSx for Windows File Server, with SMB and Active Directory support (row 28).

## 5. Naming conventions

#### How do the providers' naming conventions differ?

- AWS uses brand names and acronyms, such as EC2, S3, Route 53, and Redshift, so many names do not describe the job.
- Azure uses descriptive names, usually "Azure" plus the function, such as Azure Virtual Machines, Azure Files, and Azure Backup.
- Google Cloud uses plain names, often "Cloud" plus the function, such as Cloud Storage, Cloud SQL, and Cloud DNS.
- Names change over time: Azure Purview is now Microsoft Purview (row 21), and Dataproc is now Managed Service for Apache Spark (row 27).
