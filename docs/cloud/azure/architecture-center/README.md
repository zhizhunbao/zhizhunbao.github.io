# 27. Azure Architecture Center: allowed sub-pages

Follows `../README.md`. Figure on `index.md`: classification (see `../README.md`). Source: [Azure application architecture fundamentals](https://learn.microsoft.com/en-us/azure/architecture/guide/) (the parts of its design steps that the Architecture Center holds), with each part's own catalog.

## Sub-pages

| No. | File | Title (group name in the figure) | Sources | Allowed sections (the groups of the sub-page figure, in figure order) |
|---|---|---|---|---|
| 27.1 | `architecture-styles.md` | Architecture styles | [Architecture styles](https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/) | 27.1.1 N-tier, 27.1.2 Web-Queue-Worker, 27.1.3 Microservices, 27.1.4 Event-driven architecture, 27.1.5 Big data, 27.1.6 Big compute |
| 27.2 | `best-practices.md` | Best practices | [Best practices in cloud applications](https://learn.microsoft.com/en-us/azure/architecture/best-practices/index-best-practices) | 27.2.1 API design, 27.2.2 API implementation, 27.2.3 Autoscaling, 27.2.4 Background jobs, 27.2.5 Caching, 27.2.6 Content Delivery Network, 27.2.7 Data partitioning, 27.2.8 Host name preservation, 27.2.9 Message encoding considerations, 27.2.10 Monitoring and diagnostics, 27.2.11 Transient fault handling |
| 27.3 | `cloud-design-patterns.md` | Cloud design patterns | [Cloud design patterns](https://learn.microsoft.com/en-us/azure/architecture/patterns/) | 27.3.1 Cache-Aside, 27.3.2 Circuit Breaker, 27.3.3 Competing Consumers, 27.3.4 Event Sourcing, 27.3.5 Gateway Aggregation, 27.3.6 Gateway Offloading, 27.3.7 Gateway Routing, 27.3.8 Publisher-Subscriber, 27.3.9 Queue-Based Load Leveling, 27.3.10 Retry, 27.3.11 Sharding |
| 27.4 | `technology-choices.md` | Technology choices | [Azure application architecture fundamentals: Make informed technology choices](https://learn.microsoft.com/en-us/azure/architecture/guide/#make-informed-technology-choices) | 27.4.1 Compute, 27.4.2 Data stores, 27.4.3 Messaging, 27.4.4 AI |
| 27.5 | `architectures.md` | Architectures | [Browse Azure architectures](https://learn.microsoft.com/en-us/azure/architecture/browse/) | 27.5.1 Solution ideas, 27.5.2 Example workloads, 27.5.3 Reference architectures |

The reference architectures taught in the courses (N-tier, Windows N-tier application, multi-region N-tier, PaaS and SaaS examples) are H3 inside 27.5.3.

Checked 2026-10-27: Best practices now lists 11 practices (no separate "Data partitioning strategies"); 27.3 shows the 11 planned patterns only; 27.5 quotes the one sentence that names all three architecture types, as context. The technology choices still point to their topics: compute to 4, data stores to 8 and 9, messaging to 10, AI to 13.
