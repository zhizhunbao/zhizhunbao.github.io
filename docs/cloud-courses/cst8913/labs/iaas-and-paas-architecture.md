---
title: "IaaS and PaaS architecture"
description: "CST8913 Cloud Migration, lab 3: IaaS and PaaS architecture. Exam-style questions answered with my lab work."
ms.date: 2026-10-19
---

# IaaS and PaaS architecture

Lab 3 of CST8913 Cloud Migration (week 3): design the same application once on IaaS and once on PaaS, and say when each fits. Each concept below has its own section with the questions it raises, answered with what I wrote in my lab.

## Concepts to understand

1. [IaaS](#1-iaas)
2. [shared responsibility](#2-shared-responsibility)
3. [VNet, subnets, NSGs and load balancers](#3-vnet-subnets-nsgs-and-load-balancers)
4. [availability zone](#4-availability-zone)
5. [PaaS](#5-paas)
6. [IaaS or PaaS](#6-iaas-or-paas)
7. [SaaS](#7-saas)

## 1. IaaS

#### How would you deploy a three-tier web application on IaaS?

![IaaS target architecture: a public IP on the active HAProxy VM receives HTTPS requests and spreads them across two Nginx web VMs, which forward /api requests to an internal HAProxy load balancer and on to two Flask VMs; the Flask VMs use a PostgreSQL primary VM that replicates to a standby; jumpbox, monitoring, NAT, and backup VMs sit in a management subnet; every tier has its own subnet and two VMs in different availability zones](media/lab3-diagrams-iaas-architecture.png)

Every piece of software runs on virtual machines that we build and maintain; Azure provides only the VMs, their disks, and the network. Following the lecture's N-tier reference architecture, each tier has its own subnet and two VMs in different availability zones.

Explained in [4. Describe cloud service types](../lectures/describe-cloud-service-types.md), [7. Windows N-tier application on Azure](../lectures/windows-n-tier-application-on-azure.md).

## 2. Shared responsibility

#### On IaaS, what do you manage yourself and what does the cloud provider supply?

Every piece of software runs on virtual machines that we build and maintain; Azure provides only the VMs, their disks, and the network.

Explained in [3. Describe cloud computing](../lectures/describe-cloud-computing.md), [4. Describe cloud service types](../lectures/describe-cloud-service-types.md).

## 3. VNet, subnets, NSGs and load balancers

#### How are the virtual network, subnets, network security groups and load balancers used in the IaaS design?

| Component | Role |
|---|---|
| **Virtual network, subnets, NSGs** | One subnet per tier; each subnet's network security group allows only traffic from the tier in front of it |
| **LB VMs (HAProxy + keepalived)** | Public entry point: the active VM holds the public IP and spreads HTTPS requests across the web VMs; the standby takes over the IP if it fails |
| **Web VMs (Nginx)** | Serve the React files and forward `/api` requests to the internal load balancer |
| **Internal LB VMs (HAProxy + keepalived)** | Spread `/api` requests across the Flask VMs through one private IP |

Explained in [7. Windows N-tier application on Azure](../lectures/windows-n-tier-application-on-azure.md).

## 4. Availability zone

#### How does the design use availability zones?

Following the lecture's N-tier reference architecture, each tier has its own subnet and two VMs in different availability zones.

Explained in [7. Windows N-tier application on Azure](../lectures/windows-n-tier-application-on-azure.md).

## 5. PaaS

#### How would you deploy the same application on PaaS?

![PaaS target architecture: the browser sends every request to Azure Static Web Apps, which serves the React files and forwards /api requests to App Service, whose built-in load balancer spreads them across two instances in different zones; App Service reads a secret from Key Vault, sends telemetry to Application Insights, and reaches PostgreSQL Flexible Server in a private subnet through VNet integration; an administrator manages the services through the Azure portal or CLI](media/lab3-diagrams-paas-architecture.png)

Each tier is replaced by a managed Azure service, so Azure runs the servers, patching, scaling, and backups. As in the IaaS design, the browser talks to one public entry point, and the Flask API is never called directly.

Explained in [4. Describe cloud service types](../lectures/describe-cloud-service-types.md).

#### Which managed services replace each tier in the PaaS design?

| Component | Role |
|---|---|
| **Azure Static Web Apps (Standard)** | Serves the React build from a global CDN and forwards `/api` requests to the linked App Service |
| **Azure App Service (Premium v3)** | Runs the Flask API on at least two instances in different zones; its built-in load balancer spreads the requests, and autoscale adds instances |
| **Azure Database for PostgreSQL – Flexible Server** | Managed PostgreSQL (General Purpose tier) with zone-redundant high availability and automatic backups |
| **Virtual network + VNet integration** | The database accepts private connections only; App Service reaches it through VNet integration, and an NSG allows port 5432 from the app only |
| **Azure Key Vault + managed identity** | Stores the database connection string, so no password is kept in code |
| **Application Insights** | Collects request logs, errors, and performance metrics from the Flask API |
| **Azure portal / CLI** | Administrators sign in with Microsoft Entra ID; Azure RBAC controls what each person can change |

Explained in [4. Describe cloud service types](../lectures/describe-cloud-service-types.md).

## 6. IaaS or PaaS

#### How do IaaS and PaaS differ in control and operations work, and when would you choose PaaS?

| | IaaS | PaaS |
|---|---|---|
| **Control** | Full control of the OS and every server setting | Limited to the settings each service exposes |
| **Servers we manage** | 14 VMs | None |
| **Operations work** | We patch, scale, monitor, and back up every VM | Azure does it |

PaaS is the better fit here: all three parts of the application run as managed services, so the team can focus on the code.

Explained in [4. Describe cloud service types](../lectures/describe-cloud-service-types.md), [3. Describe cloud computing](../lectures/describe-cloud-computing.md).

## 7. SaaS

My lab does not cover this. See [4. Describe cloud service types](../lectures/describe-cloud-service-types.md).
