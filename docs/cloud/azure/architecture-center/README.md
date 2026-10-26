# 19. Azure Architecture Center: allowed sub-pages

Follows `../README.md`. Figure on `index.md`: classification (see `../README.md`). Source: [Azure application architecture fundamentals](https://learn.microsoft.com/en-us/azure/architecture/guide/) (the parts of its design steps that the Architecture Center holds), with each part's own catalog.

## Sub-pages

| No. | File | Title (group name in the figure) | Sources | Allowed sections (the groups of the sub-page figure, in figure order) |
|---|---|---|---|---|
| 19.1 | `architecture-styles.md` | Architecture styles | [Architecture styles](https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/) | 19.1.1 N-tier, 19.1.2 Web-Queue-Worker, 19.1.3 Microservices, 19.1.4 Event-driven architecture, 19.1.5 Big data, 19.1.6 Big compute |
| 19.2 | `best-practices.md` | Best practices | [Best practices in cloud applications](https://learn.microsoft.com/en-us/azure/architecture/best-practices/index-best-practices) | 19.2.1 API design, 19.2.2 API implementation, 19.2.3 Autoscaling, 19.2.4 Background jobs, 19.2.5 Caching, 19.2.6 Content Delivery Network, 19.2.7 Data partitioning, 19.2.8 Data partitioning strategies, 19.2.9 Host name preservation, 19.2.10 Message encoding considerations, 19.2.11 Monitoring and diagnostics, 19.2.12 Transient fault handling |
| 19.3 | `cloud-design-patterns.md` | Cloud design patterns | [Cloud design patterns](https://learn.microsoft.com/en-us/azure/architecture/patterns/) | 19.3.1 Cache-Aside, 19.3.2 Circuit Breaker, 19.3.3 Competing Consumers, 19.3.4 Event Sourcing, 19.3.5 Gateway Aggregation, 19.3.6 Gateway Offloading, 19.3.7 Gateway Routing, 19.3.8 Publisher-Subscriber, 19.3.9 Queue-Based Load Leveling, 19.3.10 Retry, 19.3.11 Sharding |
| 19.4 | `technology-choices.md` | Technology choices | [Azure application architecture fundamentals: Make informed technology choices](https://learn.microsoft.com/en-us/azure/architecture/guide/#make-informed-technology-choices) | 19.4.1 Compute, 19.4.2 Data stores, 19.4.3 Messaging, 19.4.4 AI |
| 19.5 | `architectures.md` | Architectures | [Browse Azure architectures](https://learn.microsoft.com/en-us/azure/architecture/browse/) | 19.5.1 Solution ideas, 19.5.2 Example workloads, 19.5.3 Reference architectures |

19.3 lists the 11 patterns in the figure as H2, then the rest of the catalog (Ambassador to Valet Key) in one table. The technology choices point to their topics: compute to 3, data stores to 6 and 7, messaging to 8, AI to 11. The reference architectures taught in the courses (N-tier, Windows N-tier application, multi-region N-tier, PaaS and SaaS examples) are H3 inside 19.5.3.
