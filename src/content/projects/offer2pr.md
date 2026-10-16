---
title: Offer2PR
role: Founder & Full Stack Developer
org: offer2pr.com, Ottawa, ON
dates: Jun 2026 – Present
order: 202606
summary: A daily-updated Canadian job board with 24,000+ live postings from 30 sources across all 10 provinces, tagged with immigration signals; in English, Chinese and Korean.
stack: [TypeScript, Next.js, React, Payload CMS, PostgreSQL, Python, Docker, Render, Cloudflare]
url: https://offer2pr.com
repo: https://github.com/zhizhunbao/pnp-job-tracker
cover: /projects/offer2pr/jobs.webp
---

## What it does

A job board for people in Canada who need an employer offer or a provincial nomination on the way to permanent residence. Every posting carries immigration signals:

- a rough PNP eligibility flag (TEER 0–3 or a shortage list)
- pay compared with the median wage for the occupation
- whether the employer is designated or has LMIA history

The job board filters by province, occupation, pathway and experience. The employer board ranks employers and shows where they are hiring.

<figure>
  <img src="/projects/offer2pr/jobs.webp" alt="Job board on offer2pr.com" loading="lazy" />
  <figcaption>Job board on offer2pr.com</figcaption>
</figure>

<figure>
  <img src="/projects/offer2pr/employers.webp" alt="Employer board on offer2pr.com" loading="lazy" />
  <figcaption>Employer board on offer2pr.com</figcaption>
</figure>

## How it's built

- **Python ETL**: crawl → raw → processed → mart, then a loader fills PostgreSQL. Sources include Job Bank (all 10 provinces), Jobillico, Jobboom, GC Jobs, CareerBeacon and selected employer career sites. Jobs refresh every hour.
- **Operations**: the ETL runs unattended in Docker, one container per unit (60+), each reporting to a self-hosted healthchecks service.
- **Web**: Next.js + Payload CMS + PostgreSQL on Render, DNS on Cloudflare.
- **CI**: GitHub Actions type-checks and lints every push; a local pre-push hook adds Python lint, type checks and a build.
