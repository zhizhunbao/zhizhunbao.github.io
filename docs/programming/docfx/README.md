# DocFX: allowed pages and term checklist

Not published (`docfx.json` excludes `**/README.md`). Source: Docfx documentation (https://dotnet.github.io/docfx/, .NET Foundation), its Docs navigation as the site loads it (`docs/toc.json`), cached 2026-11-07 (`design-refs/official-docs/urls_kb_docfx.txt` and `urls_kb_docfx_build.txt`).

Status (2026-11-07): skeleton. Groups and pages follow the Docs navigation: 1. Get Started (1), 2. Essentials (8), 3. Advanced (1), 4. Reference (4; 4.2 Commandline Reference is a folder, its Overview page as index and its 9 commands as pages 4.2.1 to 4.2.9 in the navigation's order). Each page has one row, its own subject, as a table-of-contents title; its terms are added when the page is read (repository README, "New terms from a new documentation set"). Quick Start (the site's home page) is the source of the DocFX row.

Left out (no terms): Get started > Quick Start (tutorial; source of the DocFX row only); Essentials > SDK compatibility (a table of automated test results); Advanced > Deploy to GitHub Pages from Azure DevOps (how-to); Archive (Templates, Managed Reference, Schema Document Processor, Plugins: archived pages); the API tab (Docfx's own .NET API reference); the Extensions tab (Templates, Packages, Tools: lists of community templates, plugins and tools).

| Page | Sections (h2) | Read |
|---|---|---|
| [Basic Concepts](https://dotnet.github.io/docfx/docs/basic-concepts.html) | Introduction; Consuming .NET projects; Documentation Build Process | no |
| [Markdown](https://dotnet.github.io/docfx/docs/markdown.html) | Markdown Extensions; YAML header; Alerts; Video; Image; Math Expressions; Mermaid Diagrams; PlantUML Diagrams; Include Markdown Files; Code Snippet; Tabs; Differences introduced by DFM syntax | no |
| [Table of Contents](https://dotnet.github.io/docfx/docs/table-of-contents.html) | YAML TOC; Nested TOCs; Reference TOCs; Navigation Bar | no |
| [Config](https://dotnet.github.io/docfx/docs/config.html) | URL Management; URL Redirects; Metadata; Sitemap | no |
| [Template](https://dotnet.github.io/docfx/docs/template.html) | Template Metadata; Custom Template; Template Variables | no |
| [.NET API Docs](https://dotnet.github.io/docfx/docs/dotnet-api-docs.html) | Generate .NET API Docs; Generate from assemblies; Generate from projects or solutions; Generate from source code; Customization Options; Supported XML Tags; Filter APIs | no |
| [REST API docs](https://dotnet.github.io/docfx/docs/rest-api-docs.html) | Organize REST APIs using Tags | no |
| [Links and Cross References](https://dotnet.github.io/docfx/docs/links-and-cross-references.html) | Markdown links; Link to local files; Cross references; Cross reference to .NET basic class library; Cross reference using xrefmap | no |
| [Create PDF Files](https://dotnet.github.io/docfx/docs/pdf.html) | Enable PDF; PDF Metadata; Customize PDF Pages | no |
| [Additional Languages](https://dotnet.github.io/docfx/docs/additional-languages.html) | - | no |
| [Config Reference](https://dotnet.github.io/docfx/reference/docfx-json-reference.html) | Global properties; rules; build; metadata; File Mappings; Predefined Metadata | no |
| [Commandline Overview](https://dotnet.github.io/docfx/reference/docfx-cli-reference/overview.html) | Introduction; docfx commands | no |
| [docfx](https://dotnet.github.io/docfx/reference/docfx-cli-reference/docfx.html) | Name; Usage; Arguments; Options; Examples | no |
| [docfx metadata](https://dotnet.github.io/docfx/reference/docfx-cli-reference/docfx-metadata.html) | Name; Usage; Arguments; Options; Examples | no |
| [docfx build](https://dotnet.github.io/docfx/reference/docfx-cli-reference/docfx-build.html) | Name; Usage; Output manifest; Arguments; Options; Examples | no |
| [docfx pdf](https://dotnet.github.io/docfx/reference/docfx-cli-reference/docfx-pdf.html) | Name; Usage; Arguments; Options; Examples | no |
| [docfx serve](https://dotnet.github.io/docfx/reference/docfx-cli-reference/docfx-serve.html) | Name; Usage; Arguments; Options; Examples | no |
| [docfx init](https://dotnet.github.io/docfx/reference/docfx-cli-reference/docfx-init.html) | Name; Usage; Options; Examples | no |
| [docfx template](https://dotnet.github.io/docfx/reference/docfx-cli-reference/docfx-template.html) | Name; Usage; Arguments; Options; Examples | no |
| [docfx download](https://dotnet.github.io/docfx/reference/docfx-cli-reference/docfx-download.html) | Name; Usage; Arguments; Options; Examples | no |
| [docfx merge](https://dotnet.github.io/docfx/reference/docfx-cli-reference/docfx-merge.html) | Name; Usage; Arguments; Options; Examples | no |
| [Environment Variables](https://dotnet.github.io/docfx/reference/docfx-environment-variables-reference.html) | DOCFX_KEEP_DEBUG_INFO; DOCFX_SOURCE_BRANCH_NAME; DOCFX_SOURCE_REPOSITORY_URL; DOCFX_NO_CHECK_CERTIFICATE_REVOCATION_LIST; DOCFX_PDF_TIMEOUT; PLAYWRIGHT_NODEJS_PATH | no |
| [API Page](https://dotnet.github.io/docfx/docs/api-page.html) | Inline Elements; Block Elements | no |
