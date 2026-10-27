# 25. Azure Well-Architected Framework: allowed sub-pages

Follows `../README.md`. Figure on `index.md`: classification (see `../README.md`). Source: [Azure Well-Architected Framework](https://learn.microsoft.com/en-us/azure/well-architected/) (its five pillars and each pillar's design principles).

## Sub-pages

| No. | File | Title (group name in the figure) | Sources | Allowed sections (the groups of the sub-page figure, in figure order) |
|---|---|---|---|---|
| 25.1 | `reliability.md` | Reliability | [Reliability design principles](https://learn.microsoft.com/en-us/azure/well-architected/reliability/principles) | 25.1.1 Design for business requirements, 25.1.2 Design for resilience, 25.1.3 Design for recovery, 25.1.4 Design for operations, 25.1.5 Keep it simple |
| 25.2 | `security.md` | Security | [Security design principles](https://learn.microsoft.com/en-us/azure/well-architected/security/principles) | 25.2.1 Plan your security readiness, 25.2.2 Design to protect confidentiality, 25.2.3 Design to protect integrity, 25.2.4 Design to protect availability, 25.2.5 Sustain and evolve your security posture |
| 25.3 | `cost-optimization.md` | Cost Optimization | [Cost Optimization design principles](https://learn.microsoft.com/en-us/azure/well-architected/cost-optimization/principles) | 25.3.1 Develop cost-management discipline, 25.3.2 Design with a cost-efficiency mindset, 25.3.3 Design for usage optimization, 25.3.4 Design for rate optimization, 25.3.5 Monitor and optimize over time |
| 25.4 | `operational-excellence.md` | Operational Excellence | [Operational Excellence design principles](https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/principles) | 25.4.1 Embrace DevOps culture, 25.4.2 Establish development standards, 25.4.3 Evolve operations with observability, 25.4.4 Automate for efficiency, 25.4.5 Adopt safe deployment practices |
| 25.5 | `performance-efficiency.md` | Performance Efficiency | [Performance Efficiency design principles](https://learn.microsoft.com/en-us/azure/well-architected/performance-efficiency/principles) | 25.5.1 Negotiate realistic performance targets, 25.5.2 Design to meet capacity requirements, 25.5.3 Achieve and sustain performance, 25.5.4 Optimize for long-term improvement |

While a principle has no terms of its own, the pillar figure shows the principles as boxes in one column (no empty dashed groups); a principle becomes a group when its first term arrives. Each pillar page may add, after its principles, the pillar's checklist and tradeoffs as H3 inside the closest principle. The Well-Architected Review assessment and Azure Advisor (defined in 20.4.1) are tools across the pillars; 25.1 links to them.
