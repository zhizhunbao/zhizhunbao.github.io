# 6. Storage: allowed sub-pages

Follows `../README.md`. Figure on `index.md`: classification (see `../README.md`). Source: [Azure documentation: Storage](https://learn.microsoft.com/en-us/azure/?product=storage).

## Sub-pages

| No. | File | Title (group name in the figure) | Sources | Allowed sections (H2 = the parts in the figure, in figure order) |
|---|---|---|---|---|
| 6.1 | `storage-accounts.md` | Storage accounts | [AZ-900 unit: Describe Azure storage accounts](https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/2-accounts) | 6.1.1 Standard general-purpose v2, 6.1.2 Premium block blobs, 6.1.3 Premium file shares, 6.1.4 Premium page blobs, 6.1.5 Storage account endpoints |
| 6.2 | `storage-redundancy.md` | Storage redundancy | [AZ-900 unit: Describe Azure storage redundancy](https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/3-redundancy) | 6.2.1 Locally redundant storage (LRS), 6.2.2 Zone-redundant storage (ZRS), 6.2.3 Geo-redundant storage (GRS), 6.2.4 Geo-zone-redundant storage (GZRS), 6.2.5 Read-access GRS (RA-GRS), 6.2.6 Read-access GZRS (RA-GZRS) |
| 6.3 | `storage-services.md` | Storage services | [AZ-900 unit: Describe Azure storage services](https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/4-describe-azure-storage-services); [Introduction to Azure Storage](https://learn.microsoft.com/en-us/azure/storage/common/storage-introduction) | 6.3.1 Azure Blobs, 6.3.2 Azure Files, 6.3.3 Azure Elastic SAN, 6.3.4 Azure Container Storage, 6.3.5 Azure Queues, 6.3.6 Azure Tables, 6.3.7 Azure Disks, 6.3.8 Azure NetApp Files, 6.3.9 Azure Managed Lustre |
| 6.4 | `data-migration-options.md` | Data migration options | [AZ-900 unit: Identify Azure data migration options](https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/6-identify-azure-data-migration-options) | 6.4.1 Azure Migrate, 6.4.2 Azure Data Box |
| 6.5 | `file-movement-options.md` | File movement options | [AZ-900 unit: Identify Azure file movement options](https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/7-identify-azure-file-movement-options) | 6.5.1 AzCopy, 6.5.2 Azure Storage Explorer, 6.5.3 Azure File Sync |

Blob details (access tiers hot, cool, cold and archive; block, append and page blobs; lifecycle management; Data Lake Storage) are H3 inside 6.3.1 Azure Blobs. Azure Migrate is defined in `../migration/`; 6.4.1 links there.
