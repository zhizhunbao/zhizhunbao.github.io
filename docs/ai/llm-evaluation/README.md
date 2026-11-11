# LLM Evaluation: sources, licenses and checklist

Not published (`docfx.json` excludes `**/README.md`). Entry added 2026-11-10 at the user's request (choosing local models and reading leaderboards); placement chosen by the user the same day: one entry, LLM Evaluation, holding the six evaluation sites, under a new AI menu group Model Evaluation after AI Platforms. The AI Overview figure (`docs/ai/media/ai.png`) and its Glossary have no row for the group yet (another session had uncommitted edits to both); add them once the skeleton is confirmed. No figures yet (skeleton rule).

Rule for this entry: methods and concepts only, never scores or rankings (they change weekly).

Pages cached 2026-11-10 in `references/official-docs` (`urls_kb_llm_evaluation.txt`, `_2`, `_3` (`--plain`), `_4`; the LiveBench `#/` pages and the two Arena blog posts saved from Playwright `innerText`, see the cache README).

## Licenses (checked 2026-11-10) and form used

| Source | License or terms | Form |
|---|---|---|
| Artificial Analysis methodology pages | Website Terms of Use v1.0 (2024-04-28, `cache/pdf/artificialanalysis-terms-of-use.pdf`): personal noncommercial use only; no copying or republishing; no scraping | Summary |
| LiveBench GitHub README and changelog | `LICENSE` of `LiveBench/LiveBench`: Apache 2.0 (code from FastChat) followed by MIT (LiveCodeBench) | Quoted |
| livebench.ai (Methodology, LiveBench v1) | No license stated | Summary |
| LiveBench paper (arXiv:2406.19314) | arXiv non-exclusive distribution license | Summary |
| LMArena / Arena site, FAQ, How It Works, blog | Terms of Use (2026-02-23): content protected by copyright, no open license | Summary |
| Arena-Rank README (`lmarena/arena-rank`, now `Arena-OSS/arena-rank`) | Apache 2.0 | Quoted |
| Hugging Face Leaderboards documentation | Repository `huggingface/leaderboards` has no LICENSE file | Summary |
| MTEB documentation (docs.mteb.org) | `embeddings-benchmark/mteb`: Apache 2.0 | Quoted |
| MMTEB paper (arXiv:2502.13595) | CC BY 4.0 | Quoted |
| MTEB paper (arXiv:2210.07316) | arXiv non-exclusive distribution license | Not used |
| HELM documentation (crfm-helm.readthedocs.io) | `stanford-crfm/helm`: Apache 2.0 | Quoted |
| HELM paper (arXiv:2211.09110) | CC BY 4.0 | Quoted |
| crfm.stanford.edu/helm (leaderboard site) | No license stated | Not used |

## Notes

- LiveBench: the site's current board is LiveBench 2.0 (seven suites: Agentic, Reasoning, Coding, Browser Use, Data Analysis, Research, Design), and Instruction Following is not one of them. Instruction Following belongs to LiveBench 1 (the README's six categories, the site's "LiveBench v1" with seven categories, last release 2026-06-25); its definition and scoring come from the paper (section 2.5, appendix A.3.5). The README says questions are released monthly; the v1 page says the tasks were refreshed every six months.
- LMArena now calls itself Arena (FAQ, Terms of Use title); the page keeps the name LMArena, which the user and the URL use.
- Open LLM Leaderboard: the Leaderboards index describes it in the past tense; v1 was archived in June 2024. The About page still lists the six v2 benchmarks.
- HELM entered maintenance mode on June 1, 2026: no new evaluations will be added to its leaderboards.
- Left out: Artificial Analysis's evaluation-by-evaluation descriptions (AA-Briefcase, GDP.pdf and the others), its Capability, Cyber, Decision and other indexes; LiveBench's subcategory lists; HELM's 16 core scenarios and the metric classes of its Metrics reference page (code API); MTEB's per-task lists and model lists; LMArena's research papers. Each is a candidate for a later page, one at a time.

## Checklist

| Page | Source | Form | Status |
|---|---|---|---|
| Overview (`index.md`) | the six sites | Glossary + Comparison (own words) | written 2026-11-10 |
| Artificial Analysis | methodology, intelligence-benchmarking | Summary | written 2026-11-10 |
| HELM | docs index, maintenance mode, paper | Quoted | written 2026-11-10 |
| LiveBench | README, changelog (quoted); methodology, v1 release, paper (Summary) | Mixed | written 2026-11-10 |
| LMArena | How It Works, FAQ, policy, style control (Summary); Arena-Rank (quoted) | Mixed | written 2026-11-10 |
| MTEB | docs index, overview, MMTEB paper | Quoted | written 2026-11-10 |
| Open LLM Leaderboard | Leaderboards docs: index, About, v1 archive | Summary | written 2026-11-10 |
