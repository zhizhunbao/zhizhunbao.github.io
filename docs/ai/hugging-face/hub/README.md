# Hub: notes

Not published (`docfx.json` excludes `**/README.md`). Source: Hugging Face Hub documentation (https://huggingface.co/docs/hub/index), cached 2026-11-08 (`design-refs/official-docs/urls_kb_huggingface_hub.txt`, `--plain`).

License: Apache License 2.0 (the `LICENSE` file of the `huggingface/hub-docs` repository, checked 2026-11-08), so definitions are quoted word for word.

GGUF page (`gguf.md`, 2026-11-10, user's request, written ahead of the Hub skeleton): Hub navigation Models > Advanced Topics > GGUF (from `docs/hub/_toctree.yml` of `huggingface/hub-docs`); its number comes when the Hub skeleton is built. Rows quote the Hub GGUF page (every type of its Quantization Types table, legacy types included) and the llama.cpp `tools/quantize/README.md` (MIT). The `_S`, `_M`, `_L` mixes are defined only in the description of llama.cpp pull request 1684 (k-quants, 2023), which has no license of its own, so those rows are Summary rows; the letters S, M and L are never spelled out in any of these sources. The four GGUF usage pages (llama.cpp, LM Studio, GPT4All, Ollama) are how-to and have no page.

Model Cards and Eval Results pages (`model-cards.md`, `eval-results.md`, 2026-11-10, user's request: reading the evaluation table on a model page): Hub navigation Models > Model Cards and Models > Eval Results, cached the same day (`urls_kb_hub_model_cards.txt`, `--plain`), quoted word for word. Model Cards keeps the sections about base model, license, library, new version and evaluation results; the how-to sections (metadata UI, YAML editing, dataset, bucket, task, CO2, paper links, FAQ) hold no terms. Eval Results keeps every badge of its table. No figures yet: the Hub skeleton comes first.
