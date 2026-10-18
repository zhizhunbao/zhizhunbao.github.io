---
title: GenAI Research Assistant
description: Designed and built a proof-of-concept generative AI research assistant for the City of Ottawa's Economic Development team, then continued it with City-side collaborators.
ms.date: '2026-10-18'
---

# GenAI Research Assistant

Designed and built a proof-of-concept generative AI research assistant for the City of Ottawa's Economic Development team, then continued it with City-side collaborators.

- **Role:** Architect & Developer (PoC)
- **Organization:** City of Ottawa
- **Dates:** Sep 2025 – Apr 2026
- **Stack:** Azure OpenAI, Azure AI Search, FastAPI, React, JWT auth, Docker, Render
- **Source code:** <https://github.com/zhizhunbao/ottawa-genai-research-assistant>

## What it does

Economic Development analysts ask questions in plain English and get grounded answers, summaries and charts from the City's Economic Development Update reports (Q1 2022 – Q4 2025), with a citation for every answer.

## How it's built

![Architecture: documents flow from Azure Blob Storage through Azure AI Search; queries go through FastAPI and a RAG orchestrator to Azure OpenAI](media/ottawa-genai/architecture.webp)

*Architecture: documents flow from Azure Blob Storage through Azure AI Search; queries go through FastAPI and a RAG orchestrator to Azure OpenAI*

- **Ingestion**: PDFs in Azure Blob Storage → indexer → Azure OpenAI embeddings → Azure AI Search vector index
- **Query**: FastAPI → RAG orchestrator → semantic cache → hybrid retrieval → GPT-4o with the retrieved context → answer with sources
- **Security**: keys in Azure Key Vault; Microsoft Entra ID sign-in on the front end; JWT with admin, researcher and viewer roles on the API
- **Local fallbacks**: SQLite hybrid search and Ollama, for running without Azure
- React + TypeScript + Vite + Tailwind front end; Docker Compose and GitHub Actions

## History

I designed and built the proof of concept (Sep 2025 – Feb 2026), then continued it with collaborators on the City side (Mar – Apr 2026).
