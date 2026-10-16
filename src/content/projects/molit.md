---
title: Construction Equipment Anomaly Detection
role: Lead Architect & Developer (team)
org: Korea Ministry of Land, Infrastructure and Transport (MOLIT)
dates: Jun 2026 – Aug 2026
order: 202605.9
summary: Detects construction-equipment anomalies from thermal, vibration and acoustic sensors and grades equipment health in four levels.
stack: [Python, PyTorch, PySide6, Payload CMS, Supabase]
award: Top grade in data quality certification for the high-risk construction equipment thermal-imaging dataset.
cover: /projects/molit/hero.webp
---

## What it does

Inspects construction equipment such as excavators and cranes with three sensors (thermal camera, vibration and acoustic) and gives each machine a 0–100 health score in four levels:

- **Normal** 80–100
- **Caution** 60–79
- **Warning** 40–59
- **Danger** 0–39

Two Windows programs work as a pair: a tablet inspection app for the inspector and an analysis server that runs the models. Only results and an auto-generated PDF report leave the site.

<figure>
  <img src="/projects/molit/hero.webp" alt="Analysis server (left) and tablet inspection app (right) running together on a fault-injected set: 34.4, Danger" loading="lazy" />
  <figcaption>Analysis server (left) and tablet inspection app (right) running together on a fault-injected set: 34.4, Danger</figcaption>
</figure>

## Models

- Thermal and vibration: TCN autoencoders (same architecture, separate weights)
- Acoustic: PANNs CNN14 embeddings + Mahalanobis distance
- Overall score weights: thermal 40%, vibration 35%, acoustic 25%
- Thermal model: AUROC 0.81, F1 0.84 (evaluation of 2 Jun 2026)

## Inspection app

<figure>
  <img src="/projects/molit/app-job-files.webp" alt="An inspection job: one thermal, sound and vibration capture for an excavator hydraulic motor" loading="lazy" />
  <figcaption>An inspection job: one thermal, sound and vibration capture for an excavator hydraulic motor</figcaption>
</figure>

<figure>
  <img src="/projects/molit/app-result-normal.webp" alt="Normal set: thermal 100, vibration 100, sound 94, overall 98.5 Normal" loading="lazy" />
  <figcaption>Normal set: thermal 100, vibration 100, sound 94, overall 98.5 Normal</figcaption>
</figure>

<figure>
  <img src="/projects/molit/app-result-anomaly.webp" alt="Fault-injected set: 46.5, 27.5 and 24.8, overall 34.4 Danger, with a recommendation per sensor" loading="lazy" />
  <figcaption>Fault-injected set: 46.5, 27.5 and 24.8, overall 34.4 Danger, with a recommendation per sensor</figcaption>
</figure>

<figure>
  <img src="/projects/molit/app-result-anomaly-evidence.webp" alt="Evidence image: mel spectrogram of the sound with the verdict and score overlaid" loading="lazy" />
  <figcaption>Evidence image: mel spectrogram of the sound with the verdict and score overlaid</figcaption>
</figure>

<figure>
  <img src="/projects/molit/ko-zh-en-themes.webp" alt="The same screen in Korean, Chinese and English, dark and light themes" loading="lazy" />
  <figcaption>The same screen in Korean, Chinese and English, dark and light themes</figcaption>
</figure>

## Analysis server

<figure>
  <img src="/projects/molit/server-history.webp" alt="Inspection history from every tablet, with job detail: files, scores and recommendations" loading="lazy" />
  <figcaption>Inspection history from every tablet, with job detail: files, scores and recommendations</figcaption>
</figure>

<figure>
  <img src="/projects/molit/server-models.webp" alt="AI model coverage per machine, component and sensor, with hold-out status" loading="lazy" />
  <figcaption>AI model coverage per machine, component and sensor, with hold-out status</figcaption>
</figure>

## Recognition

The project's thermal-imaging dataset for high-risk construction equipment received the top grade in data quality certification.

Source code is private (client project). Screenshots from the team's demo run.
