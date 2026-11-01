# Docker: allowed pages

Source: Docker Docs, Get started (https://docs.docker.com/get-started/). Its full menu is in the cached page (`design-refs/official-docs/cache/html/docs-get-started.html`), so nothing here copies it. The rest of Docker Docs (Guides, Manuals, Reference) is not used.

The site lists the official menu as it stands, names, order and nesting unchanged, with the parts that hold no terms removed (the ROS 2 layout), drawn and numbered as README, "Levels, numbers and figures of a source" sets out.

| No. | Folder and page | Entries (official names, menu order) |
|---|---|---|
| 1 | `docker-overview.md` Docker overview | (none; the page's sections are its parts: The Docker platform, Docker architecture, The underlying technology) |
| 2 | `the-basics/` The basics | Container, Image, Registry, Docker Compose |
| 3 | `building-images/` Building images | Understanding the image layers, Writing a Dockerfile, Build, tag, and publish an image, Using the build cache, Multi-stage builds |
| 4 | `running-containers/` Running containers | Publishing and exposing ports, Overriding container defaults, Persisting container data, Sharing local files with containers, Multi-container applications |

Names: the four pages of The basics are titled as questions ("What is a container?"); boxes are terms, never page titles, so they carry the term the page defines (Container, Image, Registry, Docker Compose). Every other name is the menu's.

Groups: the menu puts the three series under a heading, Docker concepts, which has no page; the series are the groups. The basics and Running containers have no page either (their URLs return 404), so their rows have (No definition) and cite the menu. What is Docker? defines Docker itself: its first sentence is the Overview's first row, and the page is the group Docker overview, named after its URL since its title is a question and its term, Docker, is the frame; its sections are its parts on its own page, so the Overview holds no details.

Left out (no terms): Get Docker (installation), Educational resources (links), and the three tutorials (Containerize an application, Sandbox a coding agent, Pilot an organization rollout).

Pages: each page's sections that hold terms are its groups, terms only as items (README, "Levels, numbers and figures of a source"); the opening of a page (its Explanation before the first subsection) is group 0.

Left out on the pages:

- What is Docker?: What can I use Docker for? and its three subsections (use cases).
- Sections that name no term of their own: Publishing to ephemeral ports and Publishing all ports; Overriding the network ports and Restricting the container to consume the resources; Managing volumes; Sharing files between a host and container; Additional resources and Next steps; the other steps of Try it out.
- Image: the two principles in the opening (Images are immutable; Container images are composed of layers), statements rather than names; the word layer they use is kept.
- Options and flags (`-p`, `-P`, `-e`, `--memory`, `--cpus`, `-v`, `--mount`, `--network`) and commands (`docker run`, `docker volume ls` and the like).

Docker Docs also has a Glossary (Reference, `cache/md/docs-reference-glossary.md`, 15 terms); it is outside Get started and not used yet.
