# Kubernetes: allowed pages

Source: Kubernetes Documentation, Concepts (https://kubernetes.io/docs/concepts/). Its full menu is in the cached page (`references/official-docs/cache/html/kubernetes-docs-concepts.html`; the list with every page's URL is `references/official-docs/kubernetes_concepts_menu.json`), so nothing here copies it. The rest of the documentation (Setup, Tasks, Tutorials, Reference) is not used.

The site lists the official menu as it stands, names, order and nesting unchanged, with the parts that hold no terms removed (the ROS 2 layout), drawn and numbered as README, "Levels, numbers and figures of a source" sets out. The 14 groups are folders; a page with pages under it in the menu (Objects In Kubernetes, Pods, Workload Management and others) is a folder too.

Status (2026-10-31): all 14 groups are written. A group or entry whose own page has text and pages under it is a chapter: its own text is page 0 (1.2.0, 2.0, 4.1.0 and the like), and its index page lists page 0 and the pages under it. A page's sections that hold terms are its groups, its opening is group 0, and terms are quoted from the page; on pages that open with a feature-state banner the entry row quotes the first defining sentence. Every quote is checked against the cache by the generator, and every page by script for italic concept names missing from its Glossary (README, "Levels, numbers and figures of a source").

Added by hand (2026-11-04): 4.2.1 Deployments gains 4.2.1.2 Rolling Back a Deployment with its term revision, a concept the page names in plain text in that section's Note (CST8915 Week 9 names rollbacks); the later sections moved to 4.2.1.3 to 4.2.1.5.

Checked by hand (2026-11-04): the 40 pages whose entry row does not cite para. 1 were compared with the cached page. Right as they are (para. 1 is a banner, a feature-gate note, "This page describes" or background): all but three. Fixed: 4.2.1 Deployments (entry row now para. 1 "A Deployment manages a set of Pods...", page-0 row para. 2 "provides declarative updates"), 4.1.0 Pods (entry row quotes para. 1 and 2), 4.5.0 Workload API (entry row quotes the defining sentence "The `Workload` API resource defines..."), 4 Workloads and 4.0 Workloads (the page opens with the menu blurb "Understand Pods..."; the rows now quote "A workload is an application running on Kubernetes.", para. 2). Since 2026-11-04 the rows of these pages bold two or more phrases and carry no links (README, term tables); the pages not yet revised keep one bold span and their links.

Left out on the pages (besides the noise kinds of the ROS 2 README): field paths, flags and command-line options; tables of fields, metrics and examples; FAQ, troubleshooting, good-practice and limitation sections. Three quotes stop before a phrase the source sets in bold (leader election on Running multiple schedulers, hierarchical quorum on Gang Scheduling, PodGroup scheduling cycle), since the quote check strips bold; those bold names are not boxes yet.

Left out (no terms, by the menu's own labels or content):

- Removed: Pod Security Policies (Security; the feature was removed).
- Guides and checklists: Role Based Access Control Good Practices, Good practices for Kubernetes Secrets, Security Checklist, Application Security Checklist, and the three Hardening Guides under Multi-tenancy (Security); Admission Webhook Good Practices and Good practices for Dynamic Resource Allocation as a Cluster Admin (Cluster Administration); Guide for Running Windows Containers in Kubernetes (Windows in Kubernetes).
- Links: Installing Addons (a list of third-party projects) and Certificates (it only points to a Tasks page) (Cluster Administration).
