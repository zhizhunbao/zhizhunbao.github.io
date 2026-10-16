---
title: ECG Viewer Modernization
role: Lead Architect & Developer (team)
org: Healthcare client, Korea
dates: May 2026 – Jun 2026
order: 202605
summary: Rebuilt a legacy ECG desktop viewer with no source code available on a tight timeline, then added real-time ECG over Bluetooth LE.
stack: [Python, PySide6, Bluetooth LE]
cover: /projects/ecg-viewer/main.webp
---

## What it does

A Windows desktop viewer for a single-channel ECG recorder, rebuilt from scratch because the original source code was not available.

- Password login; patient records in SQLite with search and edit
- Signal view: 10 or 5 mm/mV gain, 30 or 60 seconds per page, paging and side-by-side comparison
- Print preview and printing with page ranges
- Decoded the legacy recording format (verified on 200 of 200 sample files)
- Added real-time ECG from the device over Bluetooth LE (100 Hz), with a live waveform, BPM and recording

<figure>
  <img src="/projects/ecg-viewer/main.webp" alt="Main window: patient records and the entry to real-time ECG (test patients only)" loading="lazy" />
  <figcaption>Main window: patient records and the entry to real-time ECG (test patients only)</figcaption>
</figure>

<figure>
  <img src="/projects/ecg-viewer/device.webp" alt="The portable single-channel ECG recorder the viewer connects to" loading="lazy" />
  <figcaption>The portable single-channel ECG recorder the viewer connects to</figcaption>
</figure>

## How it's built

- Python + PySide6; Bluetooth LE with bleak
- Packaged as Windows installers with PyInstaller and NSIS
- 46 UI checks and 37 end-to-end tests

Source code is private (client project).
