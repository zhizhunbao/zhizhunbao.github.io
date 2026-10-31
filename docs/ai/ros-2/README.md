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

Left out (no terms):

- Groups: About ROS (its term, ROS, is the first row of the overview; its sections give the Framework, Tools and Capabilities definitions), Distributions (a release process page and release lists), Integrations, Migration and upgrades, Community, Contact, Citations, Contributing to ROS.
- Inside the kept groups: Installation, First steps with ROS, Setting up your environment and Setting up Turtlesim under Get started; under Framework, Working with nodes, Working with interfaces, Working with topics, Working with services, Working with actions, Working with parameters and Working with Client libraries with every tutorial, how-to, example and learning path under them, and the comparison Topics vs Services vs Actions; under Tools and Capabilities, every tutorial, how-to and learning path below the entries (not yet sorted one by one).

Entries whose body says only "Coming Soon" while the ROS documentation is being rewritten keep their menu name with (No definition): How ROS works, Introspection and analysis, Debugging, Builds, Visualization, Package documentation.
