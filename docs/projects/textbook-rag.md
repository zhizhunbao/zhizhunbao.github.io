---
title: Textbook RAG
description: Retrieval-augmented question answering over course textbooks with hybrid retrieval (BM25 plus vector search).
ms.date: '2026-10-18'
---

# Textbook RAG

Retrieval-augmented question answering over course textbooks with hybrid retrieval (BM25 plus vector search).

- **Role:** Architect & Developer (Capstone, solo)
- **Organization:** Algonquin College
- **Dates:** Mar 2026 – Jun 2026
- **Stack:** Python, LlamaIndex, ChromaDB, FastAPI, Ollama, Azure OpenAI, Next.js
- **Source code:** <https://github.com/zhizhunbao/textbook-rag>

## What it does

Ask a question about a textbook and get an answer that cites the book, chapter and page, with the PDF open beside the chat.

## How it works

- **Hybrid retrieval**: BM25 and vector search fused with Reciprocal Rank Fusion (LlamaIndex QueryFusionRetriever); each chunk is tagged with the retriever that found it
- Cross-encoder reranking, ChromaDB vector store, all-MiniLM-L6-v2 embeddings
- Runs on a local LLM through Ollama by default, or on Azure OpenAI
- FastAPI backend, Next.js front end
- 83% test coverage (v1.0 test report)

The repository has since grown into a broader advisor platform built on the same retrieval engine.
