# 10. Integration: allowed sub-pages

Follows `../README.md`. Figure on `index.md`: classification (see `../README.md`). Sources: [Azure Integration Services](https://azure.microsoft.com/en-us/solutions/integration-services) (workflows, API management) and [Compare messaging services](https://learn.microsoft.com/en-us/azure/service-bus-messaging/compare-messaging-services) (messages versus events).

## Sub-pages

| No. | File | Title (group name in the figure) | Sources | Allowed sections (the groups of the sub-page figure, in figure order) |
|---|---|---|---|---|
| 10.1 | `workflows.md` | Workflows | [Azure Integration Services](https://azure.microsoft.com/en-us/solutions/integration-services); [What is Azure Logic Apps?](https://learn.microsoft.com/en-us/azure/logic-apps/logic-apps-overview) | 10.1.1 Azure Logic Apps |
| 10.2 | `api-management.md` | API management | [Azure Integration Services](https://azure.microsoft.com/en-us/solutions/integration-services); [Azure API Management overview](https://learn.microsoft.com/en-us/azure/api-management/api-management-key-concepts) | 10.2.1 Azure API Management |
| 10.3 | `messages.md` | Messages | [Compare messaging services](https://learn.microsoft.com/en-us/azure/service-bus-messaging/compare-messaging-services#events-vs-messages-in-azure-messaging-services); [Storage queues and Service Bus queues compared](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-azure-and-service-bus-queues-compared-contrasted) | 10.3.1 Azure Service Bus, 10.3.2 Azure Queue Storage |
| 10.4 | `events.md` | Events | [Compare messaging services](https://learn.microsoft.com/en-us/azure/service-bus-messaging/compare-messaging-services#events-vs-messages-in-azure-messaging-services); [What is Azure Web PubSub?](https://learn.microsoft.com/en-us/azure/azure-web-pubsub/overview) | 10.4.1 Azure Event Grid, 10.4.2 Azure Event Hubs, 10.4.3 Azure Web PubSub |

Azure Queue Storage is defined in `../storage/` (8.3 Storage services); 10.3.2 compares it with Service Bus queues and links there. The comparison of Event Grid, Event Hubs and Service Bus (purpose, data model, ordering, transactions) is a comparison figure on 10.4, with a link from 10.3. Azure Data Factory belongs to 9. Analytics and Azure Functions to 3. Compute.
