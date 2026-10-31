# MuJoCo: allowed pages

Source: the MuJoCo Documentation, version 3.17.0 (stable) (https://mujoco.readthedocs.io/en/stable/). Its full menu is in the cached Overview page (`design-refs/official-docs/cache/html/mujoco-en-stable-overview-html.html`), so nothing here copies it.

The site lists the official menu as it stands, names and order unchanged, with the parts that hold no terms removed (the ROS 2 layout). The menu has one level of chapters; a chapter's entries are its sub-pages, and for a chapter that is a single long page, its sections (the user's choice, 2026-10-30), followed by its sub-pages.

| No. | Folder and page | Entries (official names, menu order) |
|---|---|---|
| 1 | `overview/` Overview | Model elements |
| 2 | `computation/` Computation | Soft contact model, General framework, Constraint model, Constraint solver, Collision detection, Sleeping islands, Simulation pipeline, Derivatives, Fluid forces |
| 3 | `modeling/` Modeling | MJCF Mechanisms |
| 4 | `xml-reference/` XML Reference | MJCF Reference |
| 5 | `programming/` Programming | Header files, Versions and compatibility, Naming convention, Simulation, Visualization, Rendering, User Interface, Model Editing, Extensions |
| 6 | `api-reference/` API Reference | Types, Functions, Globals |
| 7 | `python/` Python | Interactive viewer, Model editing, Modules, Utilities |
| 8 | `mujoco-xla/` MuJoCo XLA | MJX Implementations, Feature Parity, API |
| 9 | `mujoco-warp/` MuJoCo Warp | Feature Parity, Batched Model Fields, Batch Rendering, Differences from MuJoCo, API |
| 10 | `unity-plug-in/` Unity Plug-in | Design principles, Implementation notes |
| 11 | `openusd/` OpenUSD | What is OpenUSD?, USD support overview, mjcPhysics, File Format Plugin, Importing, Exporting |
| 12 | `model-gallery/` Model Gallery | MuJoCo Menagerie |

Left out (no terms): the Changelog chapter (version entries); in every chapter, the Introduction sections and the sections on installation, building and documentation (Getting started, Building from source, Building with Bazel, Building the docs, Installation, Installation instructions, Building), tutorial notebooks and examples (Tutorial notebook, Minimal example, Basic usage, Basic Usage, Using the plug-in, In-depth usage, Code samples), tuning and troubleshooting (Performance Tuning, Frequently Asked Questions, MJX-JAX - The Sharp Bits, Clarifications, Tips and tricks), migration (mujoco-py migration), questions (When To Use MJWarp?, Why do we care about OpenUSD?, Where do I learn more about USD?) and Computation's References.

Rows: a section or page whose opening sentence describes the thing without defining it is marked (context); one with no such sentence has (No definition).
