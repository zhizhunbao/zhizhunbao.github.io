# ROS 2: allowed pages

Source: the ROS 2 Documentation for Lyrical Luth, the latest LTS distribution (https://docs.ros.org/en/lyrical/). Its full menu is in the cached index page (`design-refs/official-docs/cache/html/docs-en-lyrical.html`), so nothing here copies it.

The site lists the official menu as it stands, names, order and nesting unchanged, with the parts that hold no terms removed. Every figure shows one level: the Overview shows the groups and their entries, and each entry's deeper entries are planned on its own page ("Parts") and drawn in that page's figure.

| No. | Folder and page | Entries (official names, menu order) |
|---|---|---|
| 1 | `get-started/` Get started | Glossary |
| 2 | `framework/` Framework | How ROS works, Nodes, Interfaces (topics, services, actions), Parameters, Client libraries |
| 3 | `tools/` Tools | Introspection and analysis, Node management, Debugging, Builds, Visualization, Package documentation |
| 4 | `capabilities/` Capabilities | Simulation, Motion planning and manipulation, Navigation, Perception |

Parts planned on entry pages, from the menu (deeper levels under them in brackets):

| Entry | Parts |
|---|---|
| 1.1 Glossary | API, client_library, package, REP, VCS, rclcpp, repository, Buffer, Buffer backend, Tensor message, Buffer descriptor, Acceptable backend list (the page's own list) |
| 2.2 Nodes | Discovery, The ROS_DOMAIN_ID, Logging, Composition |
| 2.3 Interfaces (topics, services, actions) | Interfaces (Tf2, About rosidl::Buffer backends), Topics (Quality of Service settings, Topic statistics), Services, Actions |
| 2.5 Client libraries | Different ROS 2 middleware vendors, Executors, Internal ROS 2 interfaces, ROS 2 middleware implementations |
| 3.1 Introspection and analysis | Introspection with command line tools, Logging |
| 3.2 Node management | ROS 2 Security |
| 3.4 Builds | Cross-compilation, The build system, Finding package documentation, Releasing a Package |
| 3.5 Visualization | RViz, Overview and using RQt |
| 4.1 Simulation | URDF |

Noise is told by the menu's own labels: an entry marked tutorial, how-to, learning path or example is left out, with everything under it; an unlabelled entry is kept. Each group page's figure shows its entries as groups with these parts as boxes; an entry with no kept parts (How ROS works, Parameters, Debugging, Package documentation, Motion planning and manipulation, Navigation, Perception) is an empty group.

Left out (no terms):

- Groups: About ROS (its term, ROS, is the first row of the overview; its sections give the Framework, Tools and Capabilities definitions), Distributions (a release process page and release lists), Integrations, Migration and upgrades, Community, Contact, Citations, Contributing to ROS.
- Inside the kept groups: Installation, First steps with ROS, Setting up your environment and Setting up Turtlesim under Get started; under Framework, Working with nodes, Working with interfaces, Working with topics, Working with services, Working with actions, Working with parameters and Working with Client libraries with every tutorial, how-to, example and learning path under them, and the comparison Topics vs Services vs Actions; under Tools and Capabilities, every entry labelled tutorial or how-to (including Testing and everything under it, and the launch file tutorials).

Entries whose body says only "Coming Soon" while the ROS documentation is being rewritten keep their menu name with (No definition): How ROS works, Introspection and analysis, Debugging, Builds, Visualization, Package documentation.

Pages: below the menu, each page's own sections are its parts, placed before the menu's (the overview: The ecosystem and ROS distributions from About ROS; How ROS works: ROS Graph, a heading with no text yet; Parameters: Parameters background with Declaring parameters, Parameter types and Parameter callbacks, then Interacting with parameters; Client libraries: Client libraries in ROS with ROS Client Library (rcl), The rclcpp package and The rclpy package).

Noise kinds, left out on every page of every AI product and not listed again in its README: the page's opening overview or introduction (it is the entry's own row); why, motivation, advantages, benefits, use cases and real-world application lists; installation, quick start, setup, usage, how-to steps, examples, demos, code and results; performance, benchmarks, metrics, comparisons, experiments and the tables of supported tasks, models or versions; notes, tips, warnings, limitations and troubleshooting; summary, conclusion, what's next, related content and quick links; FAQ, comments, citations and acknowledgments; the rows of argument, parameter, format and flag tables; UI tab, screen and chart lists. A product README lists only what falls outside these kinds: names that look like terms but are left out, with the reason, and noise sections kept for a term they hold.

Left out on the pages: the six parameter service names (API names) and the "pre set parameter", "set parameter" and "post set parameter" callbacks, named only inside the Parameter callbacks text (a fourth level); Migrating from ROS 1; the ROS 1 and ROS 2 list under ROS distributions; Community, Integrations and Supported systems on About ROS, and Community-contributed packages on the Capabilities pages (third-party, as for Integrations).
