---
title: Gangwon State Business Portal
role: Lead Architect & Developer (team)
org: Gangwon State, Korea
dates: Dec 2025 – Apr 2026
order: 202512
summary: A B2B performance-management portal where startups submit performance data and apply for government support programs.
stack: [FastAPI, SQLAlchemy, Supabase, React, Vite, Tailwind, Zustand]
repo: https://github.com/zhizhunbao/gangwon-business-portal
cover: /projects/gangwon-portal/home.webp
---

## What it does

A one-stop portal for startups in Gangwon State. Companies register, submit quarterly and annual performance data and apply for government support programs; administrators review and approve them in their own dashboard. It also handles notices, news, banners, in-site messages and statistics reports, in Korean and Chinese.

<figure>
  <img src="/projects/gangwon-portal/home.webp" alt="KNU-TOPS home page: program notices, announcements and the support guide" loading="lazy" />
  <figcaption>KNU-TOPS home page: program notices, announcements and the support guide</figcaption>
</figure>

## How it's built

- FastAPI with async SQLAlchemy 2, Alembic migrations, JWT auth and role-based access
- Supabase PostgreSQL and Storage
- Two React single-page apps (company portal and admin dashboard) with Vite, Tailwind, Zustand and React Query
- Deployed on Render (static front end + Python API); CI on GitHub Actions
