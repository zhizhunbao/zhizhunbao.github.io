# node-postgres: allowed pages and term checklist

Not published (`docfx.json` excludes `**/README.md`). Source: node-postgres documentation (https://node-postgres.com/), its left navigation, cached 2026-11-07 (`references/official-docs/urls_kb_node_postgres.txt`, 18 pages, `--plain`). The client library under Payload's Postgres adapter, which `cms/src/lib/db/pool.ts` takes its pool from.

Status (2026-11-07): skeleton. Groups and pages follow the navigation: 1. API (6 pages), 2. Features (10; the navigation writes the group in lower case, "features"), 3. Guides (1). Each page has one row, its own subject, as a table-of-contents title; its terms are added when the page is read (repository README, "New terms from a new documentation set"). Welcome is the source of the node-postgres row.

Left out (no terms): Announcements (release notes); Guides > Suggested Code Structure, Express with Async/Await (how-to) and Upgrading (migration notes). Pool Sizing is kept: it states how the pool size relates to the server's connection limit (PostgreSQL 19.3, max_connections).

| Page | Sections (h2) | Read |
|---|---|---|
| 1.1 [pg.Client](https://node-postgres.com/apis/client) | new Client; client.connect; client.pipeline; client.query; client.end; client.getTransactionStatus; events | no |
| 1.2 [pg.Pool](https://node-postgres.com/apis/pool) | new Pool; pool.query; pool.connect; pool.end; properties; events | no |
| 1.3 [pg.Result](https://node-postgres.com/apis/result) | properties | no |
| 1.4 [pg.Types](https://node-postgres.com/apis/types) | - | no |
| 1.5 [Cursor](https://node-postgres.com/apis/cursor) | install; constructor; read; close | no |
| 1.6 [Utilities](https://node-postgres.com/apis/utilities) | Utility Functions | no |
| 2.1 [Connecting](https://node-postgres.com/features/connecting) | Environment variables; Programmatic; Connection URI | no |
| 2.2 [Queries](https://node-postgres.com/features/queries) | Text only; Parameterized query; Query config object | no |
| 2.3 [Pipelining](https://node-postgres.com/features/pipelining) | What is pipelining?; Enabling pipelining; Pipelining with a pool; Error isolation; Named prepared statements; Graceful shutdown; When to use pipelining | no |
| 2.4 [Pooling](https://node-postgres.com/features/pooling) | Why?; Examples | no |
| 2.5 [Transactions](https://node-postgres.com/features/transactions) | Examples | no |
| 2.6 [Data Types](https://node-postgres.com/features/types) | strings by default; type parsing examples | no |
| 2.7 [SSL](https://node-postgres.com/features/ssl) | Self-signed cert; Usage with connectionString; Direct SSL negotiation; Channel binding | no |
| 2.8 [Native](https://node-postgres.com/features/native) | - | no |
| 2.9 [ESM](https://node-postgres.com/features/esm) | ESM Support | no |
| 2.10 [Callbacks](https://node-postgres.com/features/callbacks) | Callback Support | no |
| 3.1 [Pool Sizing](https://node-postgres.com/guides/pool-sizing) | Simple apps, dev mode, fixed instance counts, etc.; Auto-scaling, cloud-functions, multi-tenancy, etc.; pg-bouncer, RDS-proxy, etc.; Conclusion, tl;dr; Need help? | no |
