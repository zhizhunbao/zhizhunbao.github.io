# 8. Storage: allowed sub-pages

Follows `../README.md`. Figure on `index.md`: classification (see `../README.md`). Source: [Azure documentation: Storage](https://learn.microsoft.com/en-us/azure/?product=storage).

## Sub-pages

| No. | File | Title (group name in the figure) | Sources | Allowed sections (the groups of the sub-page figure, in figure order) |
|---|---|---|---|---|
| 8.1 | `storage-accounts.md` | Storage accounts | [AZ-900 unit: Describe Azure storage accounts](https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/2-accounts) | 8.1.1 Standard general-purpose v2, 8.1.2 Premium block blobs, 8.1.3 Premium file shares, 8.1.4 Premium page blobs, 8.1.5 Storage account endpoints |
| 8.2 | `storage-redundancy.md` | Storage redundancy | [AZ-900 unit: Describe Azure storage redundancy](https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/3-redundancy) | 8.2.1 Locally redundant storage (LRS), 8.2.2 Zone-redundant storage (ZRS), 8.2.3 Geo-redundant storage (GRS), 8.2.4 Geo-zone-redundant storage (GZRS), 8.2.5 Read-access GRS (RA-GRS), 8.2.6 Read-access GZRS (RA-GZRS) |
| 8.3 | `storage-services.md` | Storage services | [AZ-900 unit: Describe Azure storage services](https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/4-describe-azure-storage-services); [Introduction to Azure Storage](https://learn.microsoft.com/en-us/azure/storage/common/storage-introduction) | 8.3.1 Azure Blobs, 8.3.2 Azure Files, 8.3.3 Azure Elastic SAN, 8.3.4 Azure Container Storage, 8.3.5 Azure Queues, 8.3.6 Azure Tables, 8.3.7 Azure Disks, 8.3.8 Azure NetApp Files, 8.3.9 Azure Managed Lustre |
| 8.4 | `data-migration-options.md` | Data migration options | [AZ-900 unit: Identify Azure data migration options](https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/6-identify-azure-data-migration-options) | 8.4.1 Azure Migrate, 8.4.2 Azure Data Box |
| 8.5 | `file-movement-options.md` | File movement options | [AZ-900 unit: Identify Azure file movement options](https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/7-identify-azure-file-movement-options) | 8.5.1 AzCopy, 8.5.2 Azure Storage Explorer, 8.5.3 Azure File Sync |

Blob details (access tiers hot, cool, cold and archive; block, append and page blobs; lifecycle management; Data Lake Storage) are H3 inside 8.3.1 Azure Blobs. Azure Migrate is defined in `../migration/`; 8.4.1 links there.
