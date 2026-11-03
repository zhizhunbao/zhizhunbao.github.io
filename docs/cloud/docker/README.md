# Docker: allowed pages

Source: all of Docker Docs (https://docs.docker.com/), every address in its sitemap (`https://docs.docker.com/sitemap.xml`, read 2026-11-02: 2167 pages). The user's decision of 2026-11-02: everything is kept, including commands, options, tutorials, API operations and release notes, because keeping it costs nothing; not every detail needs attention.

The menu follows the four parts of the top navigation, numbered in that order:

| No. | Folder | Part | Pages at the source | What it answers |
|---|---|---|---|---|
| 1 | `get-started/` | Get started | 22 | What must a beginner understand? |
| 2 | `guides/` | Guides | 67 | How is a given task done? |
| 3 | `manuals/` | Manuals | 928 | How does each product work? Addresses outside the other three parts (`/engine/`, `/build/`, `/compose/` and the rest) sit here. |
| 4 | `reference/` | Reference | 1150 | What is the exact form of a command, option, instruction, key or API operation? |

Order inside a part: the official sidebar, then the address. Names: the official menu names without their Experimental, Beta, New or Updated labels; a page the menu does not name carries its own page title. A menu group without a page of its own is named from its address and cites the first page it holds.

Skeleton: each page starts as "Not written yet." with its source. Figures and Glossary rows are written when the user confirms; terms arrive as usual, and on these pages commands and options are terms (repository README, "Levels, numbers and figures of a source").

## Get started

Written, as they stood before 2026-11-02, keeping the old addresses as redirects:

| No. | Folder and page | Entries (official names, menu order) |
|---|---|---|
| 1.3 | `docker-overview.md` Docker overview | (none; the page's sections are its parts: The Docker platform, Docker architecture, The underlying technology) |
| 1.4 | `the-basics/` The basics | Container, Image, Registry, Docker Compose |
| 1.5 | `building-images/` Building images | Understanding the image layers, Writing a Dockerfile, Build, tag, and publish an image, Using the build cache, Multi-stage builds |
| 1.6 | `running-containers/` Running containers | Publishing and exposing ports, Overriding container defaults, Persisting container data, Sharing local files with containers, Multi-container applications |

Not written yet: 1.1 Tutorials, 1.2 Get Docker, 1.7 Educational resources.

Names: the four pages of The basics are titled as questions ("What is a container?"); boxes are terms, never page titles, so they carry the term the page defines (Container, Image, Registry, Docker Compose). Every other name is the menu's.

Groups: the menu puts the three series under a heading, Docker concepts, which has no page; the series are the groups. The basics and Running containers have no page either (their URLs return 404), so their rows have (No definition) and cite the menu. What is Docker? defines Docker itself: its first sentence is the first row of the entry's Overview, and the page is the group Docker overview, named after its URL since its title is a question and its term, Docker, is the frame.

Pages: each page's sections that hold terms are its groups, terms only as items (README, "Levels, numbers and figures of a source"); the opening of a page (its Explanation before the first subsection) is group 0.

Left out so far on the written pages (to add when those pages are revisited, since everything is now kept):

- What is Docker?: What can I use Docker for? and its three subsections (use cases).
- Sections that name no term of their own: Publishing to ephemeral ports and Publishing all ports; Overriding the network ports and Restricting the container to consume the resources; Managing volumes; Sharing files between a host and container; Additional resources and Next steps; the other steps of Try it out.
- Image: the two principles in the opening (Images are immutable; Container images are composed of layers), statements rather than names; the word layer they use is kept.
- Options and flags (`-p`, `-P`, `-e`, `--memory`, `--cpus`, `-v`, `--mount`, `--network`) and commands (`docker run`, `docker volume ls` and the like): their terms belong to 4 Reference.
