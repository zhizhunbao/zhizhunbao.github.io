# ESLint: allowed pages and term checklist

Not published (`docfx.json` excludes `**/README.md`). Source: ESLint documentation, version 10.14.0 (https://eslint.org/docs/latest/, OpenJS Foundation), its left navigation (`#docs-index`), cached 2026-11-07 (`design-refs/official-docs/urls_kb_eslint.txt`, 31 pages, `--plain`).

Status (2026-11-07): skeleton. Groups and pages follow the navigation: 1. Use ESLint in Your Project (7 pages, two of them with child pages: 1.1 Core Concepts with 1.1.1 Glossary, 1.2 Configure ESLint with 7), 2. Extend ESLint (6, 2.2 Create Plugins with 3), 3. Integrate ESLint (1), 4. Contribute to ESLint (1). Each page has one row, its own subject, as a table-of-contents title; its terms are added when the page is read (repository README, "New terms from a new documentation set"). Exception: 1.1.1 Glossary is the source's own term list, so its 32 terms are rows from the start (definitions pending). The ESLint row will quote Core Concepts, "What is ESLint?".

Left out (no terms):

- Use ESLint in Your Project: Getting Started (tutorial), Configuration Migration Guide and Migrate to v10.x (migration notes), Debug Your Configuration (how-to), MCP Server Setup (how-to), Integrations (a list of links), Version Support (a policy page on eslint.org), Troubleshooting and its two pages (how-to).
- Extend ESLint: Custom Rule Tutorial (tutorial), Migration to Flat Config (migration notes).
- Integrate ESLint: Integrate with the Node.js API Tutorial (tutorial).
- Contribute to ESLint: every page but Architecture (process: code of conduct, bug reports, proposals, development setup, tests, pull requests, governance, security reports).
- Maintain ESLint, the whole group (process).

Not in this documentation set: `import-x/no-cycle` (eslint-plugin-import-x) and typed linting (typescript-eslint) have their own documentation and would be entries of their own.

| Page | Sections (h2) | Read |
|---|---|---|
| [Core Concepts](https://eslint.org/docs/latest/use/core-concepts/) | What is ESLint?; Rules; Configuration Files; Shareable Configurations; Plugins; Parsers; Custom Processors; Formatters; Integrations; CLI & Node.js API | no |
| [Glossary](https://eslint.org/docs/latest/use/core-concepts/glossary) | A to V (letters); 32 terms as h3 | no |
| [Configure ESLint](https://eslint.org/docs/latest/use/configure/) | Table of Contents | no |
| [Configuration Files](https://eslint.org/docs/latest/use/configure/configuration-files) | Configuration File; Configuration Objects; Configuration File Resolution; TypeScript Configuration Files | no |
| [Configure Language Options](https://eslint.org/docs/latest/use/configure/language-options) | Specify JavaScript Options; Specify Parser Options; Specify Globals | no |
| [Configure Rules](https://eslint.org/docs/latest/use/configure/rules) | Rule Severities; Rules from Plugins; Disable Rules | no |
| [Configure Plugins](https://eslint.org/docs/latest/use/configure/plugins) | Configure Plugins; Use Plugin Rules; Specify a Processor; Specify a Language; Common Problems | no |
| [Configure a Parser](https://eslint.org/docs/latest/use/configure/parser) | Configure a Custom Parser; Configure Parser Options | no |
| [Combine Configs](https://eslint.org/docs/latest/use/configure/combine-configs) | Apply a Config Object; Apply a Config Array | no |
| [Ignore Files](https://eslint.org/docs/latest/use/configure/ignore) | Ignore Files; Ignore Directories; Unignore Files and Directories; Glob Pattern Resolution; Name the Global Ignores Config; Ignored File Warnings; Include .gitignore Files | no |
| [Command Line Interface Reference](https://eslint.org/docs/latest/use/command-line-interface) | Run the CLI; Pass Multiple Values to an Option; Options; Exit Codes | no |
| [Rules Reference](https://eslint.org/docs/latest/rules/) | - | no |
| [Feature Flags](https://eslint.org/docs/latest/flags/) | Flag Prefixes; Active Flags; Inactive Flags; How to Use Feature Flags | no |
| [Formatters Reference](https://eslint.org/docs/latest/use/formatters/) | Example Source; Built-In Formatter Options | no |
| [Bulk Suppressions](https://eslint.org/docs/latest/use/suppressions) | Suppressions File; Resolving Suppressions; Usage with the Node.js API | no |
| [Ways to Extend ESLint](https://eslint.org/docs/latest/extend/ways-to-extend) | Plugins; Shareable Configs; Custom Formatters; Custom Parsers | no |
| [Create Plugins](https://eslint.org/docs/latest/extend/plugins) | Create a plugin; Testing a Plugin; Linting a Plugin; Share Plugins | no |
| [Custom Rules](https://eslint.org/docs/latest/extend/custom-rules) | Rule Structure; The Context Object; Rule Unit Tests; Rule Naming Conventions; Runtime Rules; Profile Rule Performance | no |
| [Custom Processors](https://eslint.org/docs/latest/extend/custom-processors) | Custom Processor Specification; Specify Processor in Config Files | no |
| [Languages](https://eslint.org/docs/latest/extend/languages) | Language Requirements; Publish a Language in a Plugin | no |
| [Share Configurations](https://eslint.org/docs/latest/extend/shareable-configs) | Create a Shareable Config; Publishing a Shareable Config; Use a Shareable Config; Sharing Multiple Configs; Further Reading | no |
| [Custom Formatters](https://eslint.org/docs/latest/extend/custom-formatters) | Create a Custom Formatter; Packaging a Custom Formatter; Examples | no |
| [Custom Parsers](https://eslint.org/docs/latest/extend/custom-parsers) | Create a Custom Parser; AST Specification; Packaging a Custom Parser; Example | no |
| [Stats Data](https://eslint.org/docs/latest/extend/stats) | Enable stats collection; Stats type | no |
| [Node.js API Reference](https://eslint.org/docs/latest/integrate/nodejs-api) | ESLint class; loadESLint(); SourceCode; Linter; RuleTester | no |
| [Architecture](https://eslint.org/docs/latest/contribute/architecture/) | The cli object; The ESLint class; The Linter object; Rules | no |
