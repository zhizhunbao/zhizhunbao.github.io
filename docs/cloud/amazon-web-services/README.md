# Amazon Web Services: allowed pages

Source: the AWS Documentation home page (https://docs.aws.amazon.com/), section "Product guides & references", and below it each product's own conceptual guide. The home page is cached as `design-refs/official-docs/cache/html/aws.html` (2026-10-25); its category lists sit in the page's embedded data, decoded to `cache/aws-docs-home-data.xml`. The guides' tables of contents are cached as `cache/aws-iam-toc.json`, `cache/aws-awscloudformation-toc.json` and `cache/aws-directoryservice-toc.json` (2026-11-06), so nothing here copies them.

Status (2026-11-06): skeleton. Pages, menu and Glossary rows (names, Chinese names, numbers, sources) for the terms first met on 2026-11-06 (AWS CloudFormation, IAM roles and how IAM works, AWS Directory Service); definitions pending, no figures and no Classification sections until the skeleton is confirmed.

## Third level: product categories

The home page lists 31 product categories alphabetically, as an index (repository README, "Third and fourth levels", case 3). Here the 29 that hold terms follow the learning order of the Microsoft Azure entry (`docs/cloud/azure/README.md`, section 3), so the two clouds read side by side; a category with no Azure counterpart sits after its nearest one or at the end. The Overview page states this order.

| No. | Folder | Category (official name) | Products listed | Azure counterpart |
|---|---|---|---|---|
| 1 | `compute/` | Compute | 17 | 4. Compute |
| 2 | `compute-hpc/` | Compute HPC | 1 | (after Compute) |
| 3 | `containers/` | Containers | 6 | 5. Containers |
| 4 | `serverless/` | Serverless | 11 | (after Containers) |
| 5 | `front-end-web-mobile/` | Front-End Web & Mobile | 10 | 6. Web |
| 6 | `networking-content-delivery/` | Networking & Content Delivery | 17 | 7. Networking |
| 7 | `storage/` | Storage | 10 | 8. Storage |
| 8 | `database/` | Database | 12 | 9. Databases |
| 9 | `application-integration/` | Application Integration | 9 | 10. Integration |
| 10 | `analytics/` | Analytics | 21 | 11. Analytics |
| 11 | `internet-of-things/` | Internet of Things (IoT) | 11 | 12. Internet of Things |
| 12 | `machine-learning/` | Machine Learning | 33 | 13. AI + Machine Learning |
| 13 | `media-services/` | Media Services | 10 | 14. Media |
| 14 | `security-identity-compliance/` | Security, Identity, & Compliance | 30 | 17. Identity, 18. Security |
| 15 | `cryptography-pki/` | Cryptography & PKI | 7 | (after Security) |
| 16 | `end-user-computing/` | End User Computing | 6 | 19. Virtual Desktop Infrastructure |
| 17 | `management-governance/` | Management & Governance | 40 | 20. Management and Governance |
| 18 | `aws-management-console/` | AWS Management Console | 4 | (after Management & Governance) |
| 19 | `cloud-financial-management/` | Cloud Financial Management | 5 | (after Management & Governance) |
| 20 | `developer-tools/` | Developer Tools | 38 | 23. DevOps |
| 21 | `migration-transfer/` | Migration & Transfer | 12 | 24. Migration |
| 22 | `business-applications/` | Business Applications | 16 | (none) |
| 23 | `game-development/` | Game Development | 3 | (none) |
| 24 | `blockchain/` | Blockchain | 2 | (none) |
| 25 | `quantum-computing/` | Quantum Computing | 1 | (none) |
| 26 | `satellite/` | Satellite | 1 | (none) |
| 27 | `customer-enablement-services/` | Customer Enablement Services | 5 | (none) |
| 28 | `marketplace/` | Marketplace | 1 | (none) |
| 29 | `partner-central/` | Partner Central | 1 | (none) |

Left out (no terms): the categories Decision Guides (27 guides choosing between services) and General Reference (8 reference lists: AWS Glossary, Service Endpoints, Service Quotas reference and the like; the AWS Glossary may still serve as a definition source); and the rest of the home page: Featured content (repeats products), Getting started with AWS, Hands-on Tutorials, AWS Prescriptive Guidance, AWS Decision Guides, AWS Solutions Library, Developer resources (AWS CLI, SDKs & toolkits, Code Example Library, AWS Builder Center, AWS Developer Tools Blog, AWS re:Post). `media/` is kept for figures, so Media Services is `media-services/`.

## Fourth level and below: products and their guides

- A product is numbered by its place in its category's list on the home page, counting only products that hold terms: a decision guide listed inside a category ("Choosing an AWS monitoring and observability service" in 17, "Choosing AWS security, identity, and governance services" in 14) and "Security Documentation" (links) are not counted. So far: 14.3 AWS Directory Service, 14.5 AWS Identity and Access Management, 17.3 AWS CloudFormation. The list order is the one in the page's data (`aws-docs-home-data.xml`); the rendered category view was not checked.
- A product listed in two categories (AWS Management Console and AWS Console Mobile Application are in both 17 and 18) gets one place, decided when the first of them is written.
- A product page follows its conceptual guide only (CloudFormation User Guide, IAM User Guide, Directory Service Administration Guide). The API references, CLI references and other guides its documentation page lists are left out.
- Inside a guide, its table of contents is followed as the Kubernetes entry follows its menu: names, order and nesting unchanged, numbered in order, entries without terms (Getting started, best practices, tutorials, code examples, troubleshooting, quotas, reference lists, document history) left out. A page's sections that hold terms are its groups, its opening is group 0 (repository README, "Levels, numbers and figures of a source").
- A first entry titled "What is X?" carries its term X (14.3.1 AWS Directory Service, 14.5.1 IAM, 17.3.1 CloudFormation).
- Provisional numbers: 14.5.1.4 How IAM Works is the fourth entry under What is IAM?; the three before it (Why should I use IAM?, When do I use IAM?, How do I manage IAM?) are not read yet, and the number drops if any of them holds no term. 14.5.2.4 Roles and 14.5.3.1 Policies and Permissions have pages under them in the guide (The confused deputy problem; Managed policies and inline policies, Permissions boundaries, Identity vs resource and others); each becomes a folder with its own text as page 0 when one of those pages is added.

## Skeleton checklist

| No. | Page | Official page | Terms (groups first) | Status |
|---|---|---|---|---|
| 14.3.1 | `security-identity-compliance/directory-service/what-is.md` | [What is AWS Directory Service?](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html) | 14.3.1.0: Microsoft Active Directory (AD) | skeleton |
| 14.5.1.4 | `security-identity-compliance/iam/introduction/intro-structure.md` | [How IAM works](https://docs.aws.amazon.com/IAM/latest/UserGuide/intro-structure.html) | 14.5.1.4.0: principal, IAM user, AWS STS federated user principal, IAM role, application; 14.5.1.4.1: request, actions or operations, resources; 14.5.1.4.2: authentication; 14.5.1.4.3: authorization | skeleton |
| 14.5.2.4 | `security-identity-compliance/iam/identities/roles.md` | [IAM roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html) | 14.5.2.4.0: role; 14.5.2.4.1: permissions policy, trust policy | skeleton |
| 14.5.3.1 | `security-identity-compliance/iam/access-management/policies-and-permissions.md` | [Policies and permissions in AWS Identity and Access Management](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html) | 14.5.3.1.1: identity-based policies, resource-based policies | skeleton |
| 17.3.1 | `management-governance/cloudformation/welcome.md` | [What is CloudFormation?](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html) | 17.3.1.1: template | skeleton |

Placement notes: principal and its four kinds are in group 0 of How IAM works, where the page lists them together (the diagram sits there too), although Components of a request also defines principal. Permissions policy and trust policy are in Roles terms and concepts, where Delegation names both in italics; Additional resources defines permissions policies again. Identity-based and resource-based policies are defined under Policy types; How IAM works only names them.

Named on these pages but not in the skeleton (the user decides): directories and Lightweight Directory Access Protocol (LDAP), and the three directory types AWS Managed Microsoft AD, AD Connector and Simple AD (14.3.1); environment data, resource data, request context, root user, federated principal, users in AWS IAM Identity Center directory, explicit deny, denied by default (14.5.1.4); AWS service role, AWS service-linked role, role chaining, delegation, role for cross-account access, principals, identity federation, federated principals, permissions boundaries (14.5.2.4); policy, managed policies, inline policies and the other policy types (14.5.3.1); stack (17.3.1).
