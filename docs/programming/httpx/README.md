# HTTPX: allowed pages and term checklist

Not published (`docfx.json` excludes `**/README.md`). Source: HTTPX documentation (https://www.python-httpx.org/, Encode OSS), its left navigation, cached 2026-11-06 (`references/official-docs/urls_kb_httpx_bs4.txt`).

Status (2026-11-06): skeleton. Groups and pages follow the navigation: 1. QuickStart (a page of its own, as in the navigation), 2. Advanced (10), 3. Guides (4), 4. API Reference (3). Each page has one row, its own subject, as a table-of-contents title; its terms are added when the page is read (repository README, "New terms from a new documentation set"). Introduction is the source of the HTTPX row.

Left out (no terms): Guides > Troubleshooting (how-to), and Community (Third Party Packages, a list of links; Contributing; Code of Conduct).

| Page | Sections (h2) | Read |
|---|---|---|
| [QuickStart](https://www.python-httpx.org/quickstart/) | Passing Parameters in URLs; Response Content; Binary Response Content; JSON Response Content; Custom Headers; Sending Form Encoded Data; Sending Multipart File Uploads; Sending JSON Encoded Data; Sending Binary Request Data; Response Status Codes; Response Headers; Streaming Responses; Cookies; Redirection and History; Timeouts; Authentication; Exceptions | no |
| [Clients](https://www.python-httpx.org/advanced/clients/) | Why use a Client?; Usage; Making requests; Sharing configuration across requests; Merging of configuration; Other Client-only configuration options; Request instances; Monitoring download progress; Monitoring upload progress; Multipart file encoding | no |
| [Authentication](https://www.python-httpx.org/advanced/authentication/) | Basic authentication; Digest authentication; NetRC authentication; Custom authentication schemes | no |
| [SSL](https://www.python-httpx.org/advanced/ssl/) | - | no |
| [Proxies](https://www.python-httpx.org/advanced/proxies/) | HTTP Proxies; Authentication; Proxy mechanisms; SOCKS | no |
| [Timeouts](https://www.python-httpx.org/advanced/timeouts/) | Setting and disabling timeouts; Setting a default timeout on a client; Fine tuning the configuration | no |
| [Resource Limits](https://www.python-httpx.org/advanced/resource-limits/) | - | no |
| [Event Hooks](https://www.python-httpx.org/advanced/event-hooks/) | - | no |
| [Transports](https://www.python-httpx.org/advanced/transports/) | HTTP Transport; WSGI Transport; ASGI Transport; Custom transports; Mock transports; Mounting transports | no |
| [Text Encodings](https://www.python-httpx.org/advanced/text-encodings/) | Using the default encoding; Using an explicit encoding; Using auto-detection | no |
| [Extensions](https://www.python-httpx.org/advanced/extensions/) | Request Extensions; Response Extensions | no |
| [Async Support](https://www.python-httpx.org/async/) | Making Async requests; API Differences; Supported async environments; Calling into Python Web Apps | no |
| [HTTP/2](https://www.python-httpx.org/http2/) | Enabling HTTP/2; Inspecting the HTTP version | no |
| [Logging](https://www.python-httpx.org/logging/) | - | no |
| [Requests Compatibility Guide](https://www.python-httpx.org/compatibility/) | Redirects; Client instances; Request URLs; Determining the next redirect request; Request Content; Upload files; Content encoding; Cookies; Status Codes; Streaming responses; Timeouts; Proxy keys; SSL configuration; Request body on HTTP methods; Checking for success and failure responses; Request instantiation; Mocking; Caching; Networking layer; Query Parameters; Event Hooks; Exceptions and Errors | no |
| [Developer Interface](https://www.python-httpx.org/api/) | Helper Functions; Client; AsyncClient; Response; Request; URL; Headers; Cookies; Proxy | no |
| [Exceptions](https://www.python-httpx.org/exceptions/) | The exception hierarchy; Exception classes | no |
| [Environment Variables](https://www.python-httpx.org/environment_variables/) | Proxies; SSL_CERT_FILE; SSL_CERT_DIR | no |
