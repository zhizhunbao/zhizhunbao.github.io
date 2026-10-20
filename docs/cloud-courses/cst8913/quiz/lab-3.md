---
title: "IaaS and PaaS architecture (lab 3) quiz"
description: "CST8913 Cloud Migration: IaaS and PaaS architecture (lab 3) quiz, 8 scenario questions."
ms.date: 2026-10-20
---

# IaaS and PaaS architecture (lab 3) quiz

8 questions on [IaaS and PaaS architecture](../labs/iaas-and-paas-architecture.md), lab 3 of CST8913 Cloud Migration. Each question asks about a point the lab practises; pick the right answer. After you answer, the question in Chinese and a one-line explanation in English and Chinese show.

## Architecture

![IaaS target architecture: a public IP on the active HAProxy VM receives HTTPS requests and spreads them across two Nginx web VMs, which forward /api requests to an internal HAProxy load balancer and on to two Flask VMs; the Flask VMs use a PostgreSQL primary VM that replicates to a standby; jumpbox, monitoring, NAT, and backup VMs sit in a management subnet; every tier has its own subnet and two VMs in different availability zones](../labs/media/lab3-diagrams-iaas-architecture.png)

![PaaS target architecture: the browser sends every request to Azure Static Web Apps, which serves the React files and forwards /api requests to App Service, whose built-in load balancer spreads them across two instances in different zones; App Service reads a secret from Key Vault, sends telemetry to Application Insights, and reaches PostgreSQL Flexible Server in a private subnet through VNet integration; an administrator manages the services through the Azure portal or CLI](../labs/media/lab3-diagrams-paas-architecture.png)

## Quiz

[Start the quiz](lab-3.json)
