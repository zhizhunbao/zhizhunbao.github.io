# 17. Identity: allowed sub-pages

Follows `../README.md`. Figure on `index.md`: classification (see `../README.md`). Source: [AZ-900 module: Describe Azure identity, access, and security](https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/) (its identity units 2–6).

## Sub-pages

| No. | File | Title (group name in the figure) | Sources | Allowed sections (the groups of the sub-page figure, in figure order) |
|---|---|---|---|---|
| 17.1 | `directory-services.md` | Directory services | [What is Microsoft Entra?](https://learn.microsoft.com/en-us/entra/fundamentals/what-is-entra); [What is Microsoft Entra Connect?](https://learn.microsoft.com/en-us/entra/identity/hybrid/connect/whatis-azure-ad-connect); [What is Microsoft Entra Domain Services?](https://learn.microsoft.com/en-us/entra/identity/domain-services/overview) | 17.1.1 Microsoft Entra ID, 17.1.2 Microsoft Entra Connect, 17.1.3 Microsoft Entra Domain Services |
| 17.2 | `authentication-methods.md` | Authentication methods | [What is single sign-on in Microsoft Entra ID?](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/what-is-single-sign-on); [How it works: Microsoft Entra multifactor authentication](https://learn.microsoft.com/en-us/entra/identity/authentication/concept-mfa-howitworks); [Passkeys (FIDO2)](https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-passwordless) | 17.2.1 Single sign-on (SSO), 17.2.2 Multifactor authentication (MFA), 17.2.3 Passwordless authentication |
| 17.3 | `external-identities.md` | External identities | [What is Microsoft Entra B2B collaboration?](https://learn.microsoft.com/en-us/entra/external-id/what-is-b2b); [B2B direct connect overview](https://learn.microsoft.com/en-us/entra/external-id/b2b-direct-connect-overview); [External ID in an external tenant](https://learn.microsoft.com/en-us/entra/external-id/customers/overview-customers-ciam) | 17.3.1 B2B collaboration, 17.3.2 B2B direct connect, 17.3.3 External ID for customers |
| 17.4 | `conditional-access.md` | Conditional Access | [What is Conditional Access?](https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview) | 17.4.1 Conditional Access policy |
| 17.5 | `role-based-access-control.md` | Role-based access control | [What is Azure RBAC?](https://learn.microsoft.com/en-us/azure/role-based-access-control/overview) | 17.5.1 Security principal, 17.5.2 Role definition, 17.5.3 Scope, 17.5.4 Role assignment |

The kinds of security principal taught in CST8912 (user, group, service principal, managed identity: system-assigned and user-assigned) are H3 inside 17.5.1 Security principal. The module's other units (Zero Trust, defense in depth, encryption and key management, Microsoft Defender for Cloud) belong to 13. Security.

Definitions come from the Microsoft Entra and Azure RBAC product documentation; the AZ-900 units only shaped the five groups (2026-10-27). The passwordless page now redirects to passkeys (FIDO2), so 17.2.3 quotes it as context.
