# Ollama: allowed pages and term checklist

Not published (`docfx.json` excludes `**/README.md`). Source: Ollama documentation (https://docs.ollama.com/), from its page list `https://docs.ollama.com/llms.txt` (saved as `design-refs/official-docs/ollama_llms.txt`) and the sidebar its pages serve, pages cached 2026-11-08 (`design-refs/official-docs/urls_kb_ollama.txt`, `--plain`).

License: MIT License (`LICENSE` of the `ollama/ollama` repository, checked 2026-11-08), so definitions are quoted word for word.

Status (2026-11-08): one definition per page, checked against the cache; the terms in each page's sections are still to be added (Read column: "subject only"). Chinese names are this site's own. Group names have no definition in the source. Modelfile is the term of the source's Modelfile Reference; the other titles are only put in title case.

Left out (no terms):

- Guide: Quickstart; the install pages Linux, macOS, Windows and Docker; Importing a Model; FAQ; Troubleshooting (how-to).
- Integrations: the 26 pages after its Overview (Claude Desktop, OpenClaw, Hermes Agent, Hermes Desktop, Claude Code, OpenCode, DeepSeek Harness, Cline CLI, Codex CLI, ChatGPT Desktop, Copilot CLI, Droid, Goose, Oh My Pi, Pi, Pool, VS Code, Cline, JetBrains, Roo Code, Xcode, Zed, Onyx, n8n, marimo, NemoClaw): how to connect each third-party tool.
- API Reference: the endpoint pages (15: generate, chat, embed, systemone, tags, ps, show, create, copy, pull, push, delete, version, usage, balance); endpoints are not terms on this site.

| Page | Sections (h2) | Read |
|---|---|---|
| 1.1.1 [Cloud](https://docs.ollama.com/cloud) | API Key; Ollama App or CLI; Models; Usage; Retirements; Data handling | subject only |
| 1.2.1 [Streaming](https://docs.ollama.com/capabilities/streaming) | Key streaming concepts; Handling streamed chunks | subject only |
| 1.2.2 [Thinking](https://docs.ollama.com/capabilities/thinking) | Discover a model’s thinking controls; Enable thinking in API calls; Stream the reasoning trace | subject only |
| 1.2.3 [Structured Outputs](https://docs.ollama.com/capabilities/structured-outputs) | Generating structured JSON; Generating structured JSON with a schema; Example: Extract structured data; Example: Vision with structured outputs; Tips for reliable structured outputs | subject only |
| 1.2.4 [Decision](https://docs.ollama.com/capabilities/decision) | Setup; Ask from the terminal; Choose a label; Judge an image; Use a cloud model; Question types; Ask multiple questions | subject only |
| 1.2.5 [Vision](https://docs.ollama.com/capabilities/vision) | Quick start; Usage with Ollama’s API | subject only |
| 1.2.6 [Embeddings](https://docs.ollama.com/capabilities/embeddings) | Generate embeddings; Generate a batch of embeddings; Tips | subject only |
| 1.2.7 [Speech](https://docs.ollama.com/capabilities/speech) | Setup; Speak from the terminal; Generate speech with the API | subject only |
| 1.2.8 [Tool Calling](https://docs.ollama.com/capabilities/tool-calling) | Calling a single tool; Parallel tool calling; Multi-turn tool calling (Agent loop); Tool calling with streaming; Using functions as tools with Ollama Python SDK | subject only |
| 1.2.9 [Web Search](https://docs.ollama.com/capabilities/web-search) | Authentication; Web search API; Web fetch API; Building a search agent; MCP Server | subject only |
| 1.3.1 [CLI Reference](https://docs.ollama.com/cli) | - | subject only |
| 1.3.2 [Modelfile](https://docs.ollama.com/modelfile) | Table of Contents; Format; Examples; Instructions; Model library; Notes | subject only |
| 1.3.3 [Context Length](https://docs.ollama.com/context-length) | Setting context length | full (2026-11-10) |
| 1.3.4 [Hardware Support](https://docs.ollama.com/gpu) | Nvidia; AMD Radeon; Metal (Apple GPUs); Vulkan GPU Support | full (2026-11-10) |
| 3.1 [Authentication](https://docs.ollama.com/api/authentication) | API keys; Signing in | subject only |
| 3.2 [Streaming](https://docs.ollama.com/api/streaming) | Disabling streaming; When to use streaming vs non-streaming | subject only |
| 3.3 [Usage](https://docs.ollama.com/api/usage) | Example response | subject only |
| 3.4 [Errors](https://docs.ollama.com/api/errors) | Status codes; Error messages; Errors that occur while streaming | subject only |
| 3.5 [OpenAI Compatibility](https://docs.ollama.com/api/openai-compatibility) | Direct cloud access; Local server usage; Endpoints; Models | subject only |
| 3.6 [Anthropic Compatibility](https://docs.ollama.com/api/anthropic-compatibility) | Direct cloud access; Local server usage; Using with Claude Code; Endpoints; Models; Differences from the Anthropic API | subject only |
