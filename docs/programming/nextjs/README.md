# Next.js: allowed pages and term checklist

Not published (`docfx.json` excludes `**/README.md`). Source: Next.js Docs, version 16.4.5 (https://nextjs.org/docs, Vercel), App Router, from its page list `https://nextjs.org/docs/llms.txt` (saved as `references/official-docs/nextjs_llms.txt`; the site's own sidebar is collapsed in the served HTML), pages cached 2026-11-07 (`references/official-docs/urls_kb_nextjs.txt`, 118 pages, `--plain`).

Status (2026-11-07): skeleton. Groups and pages follow the list's order: 1. Getting Started (16 pages), 2. API Reference (8 parts: Directives 5, Components 5, File-System Conventions 22 with Metadata Files 5, Functions 44, Configuration 3, CLI 2, then Edge Runtime and Turbopack as pages), 3. Glossary (a page of its own, as in the list), 4. Architecture (3). Each page has one row, its own subject, as a table-of-contents title; its terms are added when the page is read (repository README, "New terms from a new documentation set"). Exception: 3. Glossary is the source's own term list, so its 62 terms are rows from the start (definitions pending). Two titles are put in title case (File-System Conventions, Metadata and OG Images); code names (use cache, cookies, page.js, next CLI) stay as written.

Left out (no terms):

- Getting Started: Installation and Upgrading (how-to).
- Guides, the whole group (66 pages; the source calls them "how to implement common patterns and real-world use cases"): Adopting Partial Prefetching; AI Coding Agents; Analytics; Authentication; Authentication with Cache Components; Backend for Frontend; Building; Caching (Previous Model); CDN Caching; CI Build Caching; Client-side data fetching; Content Security Policy; CSS-in-JS; Custom Server; Data Security; Debugging; Deploying to Platforms; Draft Mode; Environment Variables; Forms; How Revalidation Works; ISR; ISR with Cache Components; Instant navigation; Instrumentation; Interactive apps; Internationalization; JSON-LD; Keeping pages static; Lazy Loading; Development Environment; Next.js MCP Server; MDX; Memory Usage; Migrating; Migrating to Cache Components; Multi-tenant; Multi-zones; Offline support; OpenTelemetry; Optimizing prefetching; Optimizing the static shell; Package Bundling; PPR Platform Guide; Prefetching; Preserving UI state; Preventing Flash; Production; PWAs; Public pages; Redirecting; Rendering Philosophy; Sass; Scripts; Self-Hosting; Server Actions; Server and Client Boundary; SPAs; Static Exports; Streaming; Tailwind CSS v3; Testing; Third Party Libraries; Upgrading; Videos; View transitions. A few read as concepts rather than how-to (Caching (Previous Model), How Revalidation Works, Rendering Philosophy, Streaming, Server and Client Boundary, Self-Hosting); each can be added as a page when it is wanted.
- API Reference: the options under next.config.js (81) and under Route Segment Config (7), since options are not terms on this site (repository README, Docker excepted); both parent pages are kept. Adapters, the whole group (12 pages, for deployment platform authors).
- Architecture: Supported Browsers (a reference list).
- Community, the whole group (Contribution Guide, Rspack).
- Pages Router: the older router, a documentation set of its own (`https://nextjs.org/docs/pages/llms.txt`), listed as Optional; offer2pr uses the App Router.

| Page | Sections (h2) | Read |
|---|---|---|
| 1 [Getting Started](https://nextjs.org/docs/app/getting-started) | Pre-requisite knowledge; Next Steps | no |
| 1.1 [Project Structure](https://nextjs.org/docs/app/getting-started/project-structure) | Folder and file conventions; Organizing your project; Examples | no |
| 1.2 [Layouts and Pages](https://nextjs.org/docs/app/getting-started/layouts-and-pages) | Creating a page; Creating a layout; Creating a nested route; Nesting layouts; Creating a dynamic segment; Rendering with search params; Linking between pages; Route Props Helpers; API Reference | no |
| 1.3 [Linking and Navigating](https://nextjs.org/docs/app/getting-started/linking-and-navigating) | How navigation works; What can make transitions slow?; Examples | no |
| 1.4 [Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components) | When to use Server and Client Components?; How do Server and Client Components work in Next.js?; Examples; Next Steps | no |
| 1.5 [Fetching Data](https://nextjs.org/docs/app/getting-started/fetching-data) | Fetching data; Examples; Next steps | no |
| 1.6 [Mutating Data](https://nextjs.org/docs/app/getting-started/mutating-data) | What are Server Functions?; Creating Server Functions; Invoking Server Functions; Examples; Next steps | no |
| 1.7 [Caching](https://nextjs.org/docs/app/getting-started/caching) | Enabling Cache Components; Usage; Working with runtime APIs; Static, cached, and streaming; Random values and timestamps; Predictable values; Prerendering; Where cached content is stored; Incremental Static Regeneration; Bots and crawlers; Next Steps | no |
| 1.8 [Revalidating](https://nextjs.org/docs/app/getting-started/revalidating) | cacheLife; cacheTag; revalidateTag; updateTag; revalidatePath; What should I cache?; API Reference | no |
| 1.9 [Error Handling](https://nextjs.org/docs/app/getting-started/error-handling) | Handling expected errors; Handling uncaught exceptions; API Reference | no |
| 1.10 [CSS](https://nextjs.org/docs/app/getting-started/css) | Tailwind CSS; CSS Modules; Global CSS; External stylesheets; Ordering and Merging; Development vs Production; Next Steps | no |
| 1.11 [Image Optimization](https://nextjs.org/docs/app/getting-started/images) | Local images; Remote images; API Reference | no |
| 1.12 [Font Optimization](https://nextjs.org/docs/app/getting-started/fonts) | Google fonts; Local fonts; API Reference | no |
| 1.13 [Metadata and OG images](https://nextjs.org/docs/app/getting-started/metadata-and-og-images) | Default fields; Static metadata; Generated metadata; File-based metadata; Favicons; Static Open Graph images; Generated Open Graph images; API Reference | no |
| 1.14 [Route Handlers](https://nextjs.org/docs/app/getting-started/route-handlers) | Route Handlers; API Reference | no |
| 1.15 [Proxy](https://nextjs.org/docs/app/getting-started/proxy) | Proxy; API Reference | no |
| 1.16 [Deploying](https://nextjs.org/docs/app/getting-started/deploying) | Node.js server; Docker; Static export; Adapters | no |
| 2 [API Reference](https://nextjs.org/docs/app/api-reference) | - | no |
| 2.1 [Directives](https://nextjs.org/docs/app/api-reference/directives) | Where to place a directive; What each directive requires; Placement decides what you cache | no |
| 2.1.1 [use cache](https://nextjs.org/docs/app/api-reference/directives/use-cache) | Usage; How use cache works; Serialization; Constraints; use cache at runtime; Revalidation; Examples; Troubleshooting; Platform Support; Version History; Related | no |
| 2.1.2 [use cache: private](https://nextjs.org/docs/app/api-reference/directives/use-cache-private) | Usage; Request APIs allowed in private caches; Version History; Related | no |
| 2.1.3 [use cache: remote](https://nextjs.org/docs/app/api-reference/directives/use-cache-remote) | Usage; Examples; Platform Support; Version History; Related | no |
| 2.1.4 [use client](https://nextjs.org/docs/app/api-reference/directives/use-client) | Usage; Nesting Client Components within Server Components; Reference | no |
| 2.1.5 [use server](https://nextjs.org/docs/app/api-reference/directives/use-server) | Using use server at the top of a file; Using use server inline; Security considerations; Reference | no |
| 2.2 [Components](https://nextjs.org/docs/app/api-reference/components) | - | no |
| 2.2.1 [Font](https://nextjs.org/docs/app/api-reference/components/font) | Reference; Examples; Google Fonts; Using Multiple Fonts; Version Changes | no |
| 2.2.2 [Form Component](https://nextjs.org/docs/app/api-reference/components/form) | Reference; Examples | no |
| 2.2.3 [Image Component](https://nextjs.org/docs/app/api-reference/components/image) | Reference; Functions; Known browser bugs; Examples; Version History | no |
| 2.2.4 [Link Component](https://nextjs.org/docs/app/api-reference/components/link) | Reference; Examples; Version history | no |
| 2.2.5 [Script Component](https://nextjs.org/docs/app/api-reference/components/script) | Props; Required Props; Optional Props; Version History | no |
| 2.3 [File-system conventions](https://nextjs.org/docs/app/api-reference/file-conventions) | - | no |
| 2.3.1 [default.js](https://nextjs.org/docs/app/api-reference/file-conventions/default) | Reference; Learn more about Parallel Routes | no |
| 2.3.2 [Dynamic Segments](https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes) | Convention; Behavior; Examples; Next Steps | no |
| 2.3.3 [error.js](https://nextjs.org/docs/app/api-reference/file-conventions/error) | Reference; Examples; Version History; Learn more about error handling | no |
| 2.3.4 [forbidden.js](https://nextjs.org/docs/app/api-reference/file-conventions/forbidden) | Reference; Version History | no |
| 2.3.5 [instrumentation.js](https://nextjs.org/docs/app/api-reference/file-conventions/instrumentation) | Exports; Version History; Learn more about Instrumentation | no |
| 2.3.6 [instrumentation-client.js](https://nextjs.org/docs/app/api-reference/file-conventions/instrumentation-client) | Usage; Router navigation tracking; Performance considerations; Execution timing; See also; Examples; Version history | no |
| 2.3.7 [Intercepting Routes](https://nextjs.org/docs/app/api-reference/file-conventions/intercepting-routes) | Convention; Examples; Next Steps | no |
| 2.3.8 [layout.js](https://nextjs.org/docs/app/api-reference/file-conventions/layout) | Reference; Caveats; Examples; Version History | no |
| 2.3.9 [loading.js](https://nextjs.org/docs/app/api-reference/file-conventions/loading) | Reference; Behavior; Platform Support; Examples; Version History | no |
| 2.3.10 [mdx-components.js](https://nextjs.org/docs/app/api-reference/file-conventions/mdx-components) | Exports; Version History; Learn more about MDX Components | no |
| 2.3.11 [not-found.js](https://nextjs.org/docs/app/api-reference/file-conventions/not-found) | not-found.js; global-not-found.js (experimental); Reference; Examples; Version History | no |
| 2.3.12 [page.js](https://nextjs.org/docs/app/api-reference/file-conventions/page) | Good to know; Reference; Examples; Version History | no |
| 2.3.13 [Parallel Routes](https://nextjs.org/docs/app/api-reference/file-conventions/parallel-routes) | Convention; Behavior; Examples | no |
| 2.3.14 [proxy.js](https://nextjs.org/docs/app/api-reference/file-conventions/proxy) | Exports; Params; NextResponse; Execution order; Runtime; Advanced Proxy flags; Examples; Platform support; Migration to Proxy; Version history; Learn more about Proxy | no |
| 2.3.15 [public](https://nextjs.org/docs/app/api-reference/file-conventions/public-folder) | Caching; Robots, Favicons, and others | no |
| 2.3.16 [route.js](https://nextjs.org/docs/app/api-reference/file-conventions/route) | Reference; Examples; Version History | no |
| 2.3.17 [Route Groups](https://nextjs.org/docs/app/api-reference/file-conventions/route-groups) | Convention; Use cases; Caveats | no |
| 2.3.18 [src](https://nextjs.org/docs/app/api-reference/file-conventions/src-folder) | - | no |
| 2.3.19 [template.js](https://nextjs.org/docs/app/api-reference/file-conventions/template) | Convention; Props; Behavior; Version History | no |
| 2.3.20 [unauthorized.js](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized) | Reference; Examples; Version History | no |
| 2.3.21 [Metadata Files](https://nextjs.org/docs/app/api-reference/file-conventions/metadata) | - | no |
| 2.3.21.1 [favicon, icon, and apple-icon](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons) | Image files (.ico, .jpg, .png); Generate icons using code (.js, .ts, .tsx); Version History | no |
| 2.3.21.2 [manifest.json](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/manifest) | Static Manifest file; Generate a Manifest file | no |
| 2.3.21.3 [opengraph-image and twitter-image](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image) | Image files (.jpg, .png, .gif); Generate images using code (.js, .ts, .tsx); Version History | no |
| 2.3.21.4 [robots.txt](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots) | Static robots.txt; Generate a Robots file; Version History | no |
| 2.3.21.5 [sitemap.xml](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap) | Returns; Version History; Next Steps | no |
| 2.3.22 [Route Segment Config](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config) | Version History | no |
| 2.4 [Functions](https://nextjs.org/docs/app/api-reference/functions) | - | no |
| 2.4.1 [after](https://nextjs.org/docs/app/api-reference/functions/after) | Reference; Good to know; Examples; Platform Support; Version History | no |
| 2.4.2 [cacheLife](https://nextjs.org/docs/app/api-reference/functions/cacheLife) | Usage; Reference; Examples; Version History; Related | no |
| 2.4.3 [cacheTag](https://nextjs.org/docs/app/api-reference/functions/cacheTag) | Usage; Good to know; Examples; Version History; Related | no |
| 2.4.4 [catchError](https://nextjs.org/docs/app/api-reference/functions/catchError) | Reference; Examples; Version History; Learn more about error handling | no |
| 2.4.5 [connection](https://nextjs.org/docs/app/api-reference/functions/connection) | Examples; Reference; Good to know | no |
| 2.4.6 [cookies](https://nextjs.org/docs/app/api-reference/functions/cookies) | Reference; Good to know; Understanding Cookie Behavior in Server Components; Understanding Cookie Behavior in Server Functions; Examples; Version History | no |
| 2.4.7 [draftMode](https://nextjs.org/docs/app/api-reference/functions/draft-mode) | Reference; Good to know; Examples; Version History; Next Steps | no |
| 2.4.8 [fetch](https://nextjs.org/docs/app/api-reference/functions/fetch) | fetch(url, options); Memoization; Troubleshooting; Version History | no |
| 2.4.9 [forbidden](https://nextjs.org/docs/app/api-reference/functions/forbidden) | Good to know; Examples; Version History | no |
| 2.4.10 [generateImageMetadata](https://nextjs.org/docs/app/api-reference/functions/generate-image-metadata) | Parameters; Returns; Image generation function props; Version History; Next Steps | no |
| 2.4.11 [generateMetadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata) | The metadata object; generateMetadata function; Why generateMetadata is Server Component only; Reference; Behavior; Version History; Next Steps | no |
| 2.4.12 [generateSitemaps](https://nextjs.org/docs/app/api-reference/functions/generate-sitemaps) | Returns; URLs; Example; Version History; Next Steps | no |
| 2.4.13 [generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params) | Parameters; Returns; Single Dynamic Segment; Multiple Dynamic Segments; Catch-all Dynamic Segment; Examples; Version History | no |
| 2.4.14 [generateViewport](https://nextjs.org/docs/app/api-reference/functions/generate-viewport) | The viewport object; generateViewport function; Viewport Fields; With Cache Components; Types; Version History; Next Steps | no |
| 2.4.15 [headers](https://nextjs.org/docs/app/api-reference/functions/headers) | Reference; Good to know; Examples; Version History | no |
| 2.4.16 [ImageResponse](https://nextjs.org/docs/app/api-reference/functions/image-response) | Reference; Behavior; Examples; Version History | no |
| 2.4.17 [io](https://nextjs.org/docs/app/api-reference/functions/io) | Usage; When you don't need io(); How io() differs from connection(); Reference; Version History | no |
| 2.4.18 [navigation](https://nextjs.org/docs/app/api-reference/functions/navigation) | Usage; How navigation() differs from connection(); When to use it; Good to know; Reference; Version History | no |
| 2.4.19 [NextRequest](https://nextjs.org/docs/app/api-reference/functions/next-request) | cookies; nextUrl; Version History | no |
| 2.4.20 [NextResponse](https://nextjs.org/docs/app/api-reference/functions/next-response) | cookies; json(); redirect(); rewrite(); next() | no |
| 2.4.21 [root-params](https://nextjs.org/docs/app/api-reference/functions/next-root-params) | Root parameters and generateStaticParams; Root parameters and other route parameters; Accessing root parameters in shared code; Behavior with caching directives; Multiple root layouts; Catch-all and optional catch-all segments; Returns; Restrictions; Why root parameters are special; Version History | no |
| 2.4.22 [notFound](https://nextjs.org/docs/app/api-reference/functions/not-found) | Good to know; Examples; Version History | no |
| 2.4.23 [permanentRedirect](https://nextjs.org/docs/app/api-reference/functions/permanentRedirect) | Parameters; Returns; Behavior; Example | no |
| 2.4.24 [prefetch](https://nextjs.org/docs/app/api-reference/functions/prefetch) | Usage; How prefetch() differs from connection(); When to use it; Good to know; Reference; Version History | no |
| 2.4.25 [redirect](https://nextjs.org/docs/app/api-reference/functions/redirect) | Reference; Behavior; Example; FAQ; Version History | no |
| 2.4.26 [refresh](https://nextjs.org/docs/app/api-reference/functions/refresh) | Usage; Parameters; Returns; Examples | no |
| 2.4.27 [revalidatePath](https://nextjs.org/docs/app/api-reference/functions/revalidatePath) | Usage; Parameters; Returns; What can be invalidated; Using revalidatePath with rewrites; Relationship with revalidateTag and updateTag; Examples | no |
| 2.4.28 [revalidateTag](https://nextjs.org/docs/app/api-reference/functions/revalidateTag) | Usage; Parameters; Returns; Relationship with revalidatePath; Examples | no |
| 2.4.29 [unauthorized](https://nextjs.org/docs/app/api-reference/functions/unauthorized) | Good to know; Examples; Version History | no |
| 2.4.30 [unstable_cache](https://nextjs.org/docs/app/api-reference/functions/unstable_cache) | Unsupported operations; Parameters; Returns; Example; Version History | no |
| 2.4.31 [unstable_noStore](https://nextjs.org/docs/app/api-reference/functions/unstable_noStore) | Usage; Version History | no |
| 2.4.32 [unstable_rethrow](https://nextjs.org/docs/app/api-reference/functions/unstable_rethrow) | - | no |
| 2.4.33 [updateTag](https://nextjs.org/docs/app/api-reference/functions/updateTag) | Usage; Parameters; Returns; Differences from revalidateTag; Examples; When to use updateTag; Related | no |
| 2.4.34 [useLinkStatus](https://nextjs.org/docs/app/api-reference/functions/use-link-status) | You might not need useLinkStatus; Parameters; Returns; Example; Gracefully handling fast navigation; Version History; Next Steps | no |
| 2.4.35 [useOffline](https://nextjs.org/docs/app/api-reference/functions/use-offline) | Parameters; Returns; Examples; Version History | no |
| 2.4.36 [useParams](https://nextjs.org/docs/app/api-reference/functions/use-params) | Parameters; Returns; Behavior; Version History | no |
| 2.4.37 [usePathname](https://nextjs.org/docs/app/api-reference/functions/use-pathname) | Parameters; Returns; Behavior; Examples | no |
| 2.4.38 [useReportWebVitals](https://nextjs.org/docs/app/api-reference/functions/use-report-web-vitals) | useReportWebVitals; Web Vitals; Sending results to external systems | no |
| 2.4.39 [useRouter](https://nextjs.org/docs/app/api-reference/functions/use-router) | useRouter(); Examples; Version History | no |
| 2.4.40 [useSearchParams](https://nextjs.org/docs/app/api-reference/functions/use-search-params) | Parameters; Returns; Behavior; Examples; Version History | no |
| 2.4.41 [useSelectedLayoutSegment](https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segment) | Parameters; Returns; Behavior; Examples; Version History | no |
| 2.4.42 [useSelectedLayoutSegments](https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segments) | Parameters; Returns; Behavior; Version History | no |
| 2.4.43 [useServerInsertedHTML](https://nextjs.org/docs/app/api-reference/functions/use-server-inserted-html) | Parameters; Returns; Behavior; Next Steps | no |
| 2.4.44 [userAgent](https://nextjs.org/docs/app/api-reference/functions/userAgent) | isBot; browser; device; engine; os; cpu | no |
| 2.5 [Configuration](https://nextjs.org/docs/app/api-reference/config) | - | no |
| 2.5.1 [next.config.js](https://nextjs.org/docs/app/api-reference/config/next-config-js) | ECMAScript Modules; Configuration as a Function; TypeScript; Unit Testing (experimental) | no |
| 2.5.2 [TypeScript](https://nextjs.org/docs/app/api-reference/config/typescript) | Using TypeScript 7; IDE Plugin; End-to-End Type Safety; Route-Aware Type Helpers; next-env.d.ts; Examples; Version Changes | no |
| 2.5.3 [ESLint](https://nextjs.org/docs/app/api-reference/config/eslint) | Setup ESLint; Reference; Examples; Migrating existing config | no |
| 2.6 [CLI](https://nextjs.org/docs/app/api-reference/cli) | - | no |
| 2.6.1 [create-next-app](https://nextjs.org/docs/app/api-reference/cli/create-next-app) | Reference; Examples | no |
| 2.6.2 [next CLI](https://nextjs.org/docs/app/api-reference/cli/next) | Reference; Examples | no |
| 2.7 [Edge Runtime](https://nextjs.org/docs/app/api-reference/edge) | Caveats; Reference | no |
| 2.8 [Turbopack](https://nextjs.org/docs/app/api-reference/turbopack) | Why Turbopack?; Supported platforms; Getting started; Supported features; import.meta.env; import.meta.glob; Known gaps with webpack; Unsupported and unplanned features; Configuration; Generating trace files for performance debugging; Summary; Version Changes | no |
| 3 [Glossary](https://nextjs.org/docs/app/glossary) | 62 terms as h2 | no |
| 4 [Architecture](https://nextjs.org/docs/architecture) | - | no |
| 4.1 [Accessibility](https://nextjs.org/docs/architecture/accessibility) | Route Announcements; Linting; Accessibility Resources | no |
| 4.2 [Fast Refresh](https://nextjs.org/docs/architecture/fast-refresh) | How It Works; Error Resilience; Limitations; Tips; Fast Refresh and Hooks | no |
| 4.3 [Next.js Compiler](https://nextjs.org/docs/architecture/nextjs-compiler) | Why SWC?; Supported Features; Experimental Features; Unsupported Features; Version History | no |
