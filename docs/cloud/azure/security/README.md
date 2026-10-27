# 18. Security: allowed sub-pages

Follows `../README.md`. Figure on `index.md`: classification (see `../README.md`). Source: [AZ-900 module: Describe Azure identity, access, and security](https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/) (its security units 7–9a).

## Sub-pages

| No. | File | Title (group name in the figure) | Sources | Allowed sections (the groups of the sub-page figure, in figure order) |
|---|---|---|---|---|
| 18.1 | `zero-trust-model.md` | Zero Trust model | [What is Zero Trust?](https://learn.microsoft.com/en-us/security/zero-trust/zero-trust-overview) | 18.1.1 Verify explicitly, 18.1.2 Use least privilege access, 18.1.3 Assume breach |
| 18.2 | `defense-in-depth.md` | Defense-in-depth | [AZ-900 unit: Describe defense-in-depth](https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/8-describe-defense-depth) | 18.2.1 Physical security, 18.2.2 Identity and access, 18.2.3 Perimeter, 18.2.4 Network, 18.2.5 Compute, 18.2.6 Application, 18.2.7 Data |
| 18.3 | `encryption-and-key-management.md` | Encryption and key management | [Azure data encryption at rest](https://learn.microsoft.com/en-us/azure/security/fundamentals/encryption-atrest); [Azure encryption overview](https://learn.microsoft.com/en-us/azure/security/fundamentals/encryption-overview); [About Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/overview) | 18.3.1 Encryption at rest, 18.3.2 Encryption in transit, 18.3.3 Azure Key Vault |
| 18.4 | `microsoft-defender-for-cloud.md` | Microsoft Defender for Cloud | [What is Microsoft Defender for Cloud?](https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-cloud-introduction) | 18.4.1 Cloud Native Application Protection Platform (CNAPP), 18.4.2 Cloud security posture management (CSPM), 18.4.3 Development security operations (DevSecOps), 18.4.4 Cloud workload protection platform (CWPP), 18.4.5 AI security and threat protection, 18.4.6 Managed detection and response for servers |

Network security services (Azure Firewall, Web Application Firewall, DDoS Protection) are defined in `../networking/` (7.4); 18.2.3 Perimeter and 18.2.4 Network link there. Identity and access is 12. Identity.

Zero Trust and encryption rows quote the product documentation. The seven defense-in-depth layers are named only in the AZ-900 unit, so 18.2 quotes that unit. 18.4 follows the six capability areas of the Defender for Cloud product overview, not the AZ-900 pillars (2026-10-27).
