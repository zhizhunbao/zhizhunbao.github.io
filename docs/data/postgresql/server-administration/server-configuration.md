---
title: "19. Server Configuration"
description: "PostgreSQL, 19. Server Configuration: its 18 parts, 19.1 to 19.18; started 2026-11-07 with max_connections under 19.3; the other parameters are added when the page is read."
ms.date: 2026-11-07
---

# 19. Server Configuration

## Glossary

| Term | Definition | 中文翻译 | Source |
|---|---|---|---|
| **Server Configuration**<br>服务器配置 | (Definition pending) | （定义待补） | [The PostgreSQL Global Development Group, n.d., "19. Server Configuration"](https://www.postgresql.org/docs/current/runtime-config.html) |
| **19.1. Setting Parameters**<br>设置参数 | (Definition pending) | （定义待补） | [The PostgreSQL Global Development Group, n.d., "19.1. Setting Parameters"](https://www.postgresql.org/docs/current/config-setting.html) |
| **19.2. File Locations**<br>文件位置 | (Definition pending) | （定义待补） | [The PostgreSQL Global Development Group, n.d., "19.2. File Locations"](https://www.postgresql.org/docs/current/runtime-config-file-locations.html) |
| **19.3. Connections and Authentication**<br>连接与认证 | (Definition pending) | （定义待补） | [The PostgreSQL Global Development Group, n.d., "19.3. Connections and Authentication"](https://www.postgresql.org/docs/current/runtime-config-connection.html) |
| **max_connections**<br>最大连接数（max_connections） | "Determines the **maximum number of concurrent connections** to the **database server**." | 决定**最大并发连接数**，即同时连到**数据库服务器**的连接上限。 | [The PostgreSQL Global Development Group, n.d., "19.3.1. Connection Settings", "max_connections"](https://www.postgresql.org/docs/current/runtime-config-connection.html#GUC-MAX-CONNECTIONS) |
| **19.4. Resource Consumption**<br>资源消耗 | (Definition pending) | （定义待补） | [The PostgreSQL Global Development Group, n.d., "19.4. Resource Consumption"](https://www.postgresql.org/docs/current/runtime-config-resource.html) |
| **19.5. Write Ahead Log**<br>预写式日志 | (Definition pending) | （定义待补） | [The PostgreSQL Global Development Group, n.d., "19.5. Write Ahead Log"](https://www.postgresql.org/docs/current/runtime-config-wal.html) |
| **19.6. Replication**<br>复制 | (Definition pending) | （定义待补） | [The PostgreSQL Global Development Group, n.d., "19.6. Replication"](https://www.postgresql.org/docs/current/runtime-config-replication.html) |
| **19.7. Query Planning**<br>查询规划 | (Definition pending) | （定义待补） | [The PostgreSQL Global Development Group, n.d., "19.7. Query Planning"](https://www.postgresql.org/docs/current/runtime-config-query.html) |
| **19.8. Error Reporting and Logging**<br>错误报告与日志 | (Definition pending) | （定义待补） | [The PostgreSQL Global Development Group, n.d., "19.8. Error Reporting and Logging"](https://www.postgresql.org/docs/current/runtime-config-logging.html) |
| **19.9. Run-time Statistics**<br>运行时统计 | (Definition pending) | （定义待补） | [The PostgreSQL Global Development Group, n.d., "19.9. Run-time Statistics"](https://www.postgresql.org/docs/current/runtime-config-statistics.html) |
| **19.10. Vacuuming**<br>清理 | (Definition pending) | （定义待补） | [The PostgreSQL Global Development Group, n.d., "19.10. Vacuuming"](https://www.postgresql.org/docs/current/runtime-config-vacuum.html) |
| **19.11. Client Connection Defaults**<br>客户端连接默认值 | (Definition pending) | （定义待补） | [The PostgreSQL Global Development Group, n.d., "19.11. Client Connection Defaults"](https://www.postgresql.org/docs/current/runtime-config-client.html) |
| **19.12. Lock Management**<br>锁管理 | (Definition pending) | （定义待补） | [The PostgreSQL Global Development Group, n.d., "19.12. Lock Management"](https://www.postgresql.org/docs/current/runtime-config-locks.html) |
| **19.13. Version and Platform Compatibility**<br>版本与平台兼容性 | (Definition pending) | （定义待补） | [The PostgreSQL Global Development Group, n.d., "19.13. Version and Platform Compatibility"](https://www.postgresql.org/docs/current/runtime-config-compatible.html) |
| **19.14. Error Handling**<br>错误处理 | (Definition pending) | （定义待补） | [The PostgreSQL Global Development Group, n.d., "19.14. Error Handling"](https://www.postgresql.org/docs/current/runtime-config-error-handling.html) |
| **19.15. Preset Options**<br>预设选项 | (Definition pending) | （定义待补） | [The PostgreSQL Global Development Group, n.d., "19.15. Preset Options"](https://www.postgresql.org/docs/current/runtime-config-preset.html) |
| **19.16. Customized Options**<br>自定义选项 | (Definition pending) | （定义待补） | [The PostgreSQL Global Development Group, n.d., "19.16. Customized Options"](https://www.postgresql.org/docs/current/runtime-config-custom.html) |
| **19.17. Developer Options**<br>开发者选项 | (Definition pending) | （定义待补） | [The PostgreSQL Global Development Group, n.d., "19.17. Developer Options"](https://www.postgresql.org/docs/current/runtime-config-developer.html) |
| **19.18. Short Options**<br>短选项 | (Definition pending) | （定义待补） | [The PostgreSQL Global Development Group, n.d., "19.18. Short Options"](https://www.postgresql.org/docs/current/runtime-config-short.html) |

## References

The PostgreSQL Global Development Group. (n.d.). *PostgreSQL 18.6 documentation*. Retrieved October 25, 2026, from <https://www.postgresql.org/docs/current/index.html>
