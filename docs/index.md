---
title: Peng Wang
description: "Peng Wang: experience, education and skills, with links to projects and course notes."
ms.date: 2026-10-24
---

<div class="kb-profile">

![Peng Wang](images/photo.jpg)

<div class="kb-profile-text">

# Peng Wang

**Full-stack developer: from code to production**

I started as a Java developer, then spent seven years architecting, building and running a big data platform that handled over a billion smart-TV records a day. Now I build and operate AI agents: [offer2pr.com](https://offer2pr.com) is written with coding agents behind my own guardrails and runs about 60 containers in production. I am studying Cloud Development and Operations at Algonquin College in Ottawa.

</div>
</div>

Ottawa, ON. Open to AI agent, DevOps, cloud and data roles.

## Highlights

- 2,600+ commits on offer2pr since June 2026, 1,500+ of them written with Claude.
- 1 billion+ smart-TV device records processed a day.
- Infrastructure cost cut by 35% after the cloud migration.
- 24,000+ live postings on offer2pr.com.

## Experience

### Founder: AI Agent Development & Operations

offer2pr.com, Ottawa, ON. June 2026 to present.

- Built and run a daily-updated Canadian job board with 24,000+ live postings.
- Build with coding agents: 2,600+ commits since June 2026, 1,500+ co-authored with Claude, behind 47 custom lint rules and pre-push gates.
- Shipped a tool-calling advisor agent (9 tools; every number must come from a tool result; output gate; 24-case gold evaluation), later replaced by a simpler two-step guide on Claude Haiku with daily quotas.
- Python ETL in Docker (about 60 containers, hourly refresh) with self-hosted health checks and daily backups; Next.js, Payload CMS and PostgreSQL on Render, DNS on Cloudflare.

### Senior Big Data Architect: Architecture, Development & Operations

Guangzhou Huan Technology (HuanTV), Guangzhou. April 2015 to September 2022.

- Ran a platform processing 1+ billion smart-TV device records a day with sub-second queries (ClickHouse, Spark).
- Led the migration of self-managed CDH Hadoop clusters on Tencent Cloud VMs to Alibaba Cloud EMR (VPC and VPN, security groups, auto-scaling); infrastructure cost down 35%.
- Built monitoring and alerting for Hadoop, NGINX, Tomcat and databases.

### Java Developer

Beijing Haitian Wanglian, Beijing. October 2012 to March 2015.

- Spring MVC and MyBatis applications for clients including Mercedes-Benz and BMW.
- Built an OA system used by 200+ staff.

## Education

- **Cloud Development and Operations (Co-op)**, Algonquin College, Ottawa. September 2026 to present.
- **AI Software Development, Graduate Certificate**, Algonquin College, Ottawa. 2025 to 2026.
- **BEng, Telecommunications Engineering**, Hubei University of Technology. 2008 to 2012.

## Certification

- NGINX Accredited Administrator (2022).

## How I build with AI agents

- **A constitution before code.** Every project starts with a CLAUDE.md the agent must follow: principles, naming, the decision ladder. offer2pr's runs to 259 lines and became my starter template.
- **Guardrails, not trust.** 47 custom ESLint rules, a pre-commit type check and a pre-push gate (ruff, pyrefly, structure check, file whitelist) catch what an agent gets wrong. Skipping hooks is banned, and the lint baseline can only shrink.
- **Names come from a catalogue.** Folder and domain names must be registered in each layer's README table; a lint rule reads the table and fails on anything unregistered, so agents can't invent structure.
- **Skills for repeated work.** Five project skills on offer2pr, including a production audit loop that screenshots the live site on desktop and mobile, checks it, fixes and re-checks, plus a first-time-user walkthrough. A batch subagent handles bulk mechanical edits.
- **Ground every number.** In product and in docs, numbers must come from a tool result, a database or an official source. My advisor agent was told it never computes or ranks; tools are the only source of facts.
- **Simplify first.** The shortest form that carries the point. When a nine-tool advisor agent was more than the job needed, I replaced it with a two-step guide.

## Skills

| Area | Skills |
|---|---|
| AI agents | Claude Code, agent skills and subagents, tool calling, grounding and guardrails, LLM-as-judge evaluation, RAG (LlamaIndex), Anthropic API, Ollama |
| Cloud and infrastructure | Alibaba Cloud EMR, VPC and VPN, security groups, auto-scaling, Azure OpenAI, Azure AI Search, Cloudflare, Docker |
| Data | Hadoop (CDH), Spark, ClickHouse, PostgreSQL, Supabase, ChromaDB |
| Operations | Monitoring and alerting, NGINX, Tomcat, database monitoring |
| Backend | Java, Spring MVC, MyBatis, Python, FastAPI, SQLAlchemy |
| Frontend | TypeScript, Next.js, React, Payload CMS, Tailwind |
| Machine learning | PyTorch, scikit-learn, Keras |

## Contact

- LinkedIn: <https://www.linkedin.com/in/peng-wang-2156b438a/>
- GitHub: <https://github.com/zhizhunbao>
- Email: <wang1059@algonquinlive.com>
