---
title: Construction Equipment Anomaly Detection
role: Lead Architect & Developer (team)
org: Korea Ministry of Land, Infrastructure and Transport (MOLIT)
dates: Jun 2026 – Aug 2026
order: 202605.9
summary: Detects construction-equipment anomalies from thermal, vibration and acoustic sensors and grades equipment health in four levels.
stack: [Python, PyTorch, PySide6, Payload CMS, Supabase]
award: Top grade in data quality certification for the high-risk construction equipment thermal-imaging dataset.
---

## What it does

Inspects construction equipment such as excavators and cranes with three sensors (thermal camera, vibration and acoustic) and gives each machine a 0–100 health score in four levels:

- **Normal** 80–100
- **Caution** 60–79
- **Warning** 40–59
- **Danger** 0–39

Analysis runs locally on the inspection PC. Only the results and an auto-generated PDF report go to the server.

![Inspection result in English: overall health 65.7, Caution, with a score per sensor and recommendations](/projects/molit/result-en.webp)

![The same screen in Korean, Chinese and English, dark and light themes](/projects/molit/ko-zh-en-themes.webp)

## Models

- Thermal and vibration: TCN autoencoders (same architecture, separate weights)
- Acoustic: PANNs CNN14 embeddings + Mahalanobis distance
- Overall score weights: thermal 40%, vibration 35%, acoustic 25%
- Thermal model: AUROC 0.81, F1 0.84 (evaluation of 2 Jun 2026)

## Recognition

The project's thermal-imaging dataset for high-risk construction equipment received the top grade in data quality certification.

Source code is private (client project).
