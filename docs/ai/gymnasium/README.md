# Gymnasium: allowed pages

Source: the Gymnasium Documentation, version 1.4.0 (https://gymnasium.farama.org/). Its full menu is in the cached home page (`references/official-docs/cache/html/gymnasium.html`), so nothing here copies it.

The site lists the official menu as it stands, names, order and nesting unchanged, with the parts that hold no terms removed (the ROS 2 layout). Every figure shows one level below its page: the Overview shows the groups and their entries, each group page its entries with their parts, and each entry page its parts.

| No. | Folder and page | Entries (official names, menu order) | Parts |
|---|---|---|---|
| 1 | `introduction/` Introduction | Basic Usage | |
| 2 | `api/` API | Env, Make and register, Spaces, Wrappers, Vectorize, Utility functions, Typing, Functional Env | Spaces: Fundamental Spaces, Composite Spaces, Spaces Utils; Wrappers: Misc Wrappers, Action Wrappers, Observation Wrappers, Reward Wrappers; Vectorize: Wrappers, AsyncVectorEnv, SyncVectorEnv, Utility functions |
| 3 | `environments/` Environments | Classic Control, Box2D, Toy Text, MuJoCo | the 5, 3, 4 and 11 environments each lists |

Left out (no terms): Training an Agent, Create a Custom Environment, Recording Agents, Speeding Up Training and Gym Migration Guide under Introduction (guides); List of Wrappers under Wrappers (a table of the wrappers on the other pages); Atari (its page only redirects to ale.farama.org) and External Environments (links) under Environments; the Tutorials group (Gymnasium Basics, Training Agents, Third-Party Tutorials); the Development links (Github, Paper, Gymnasium Release Notes, Gym Release Notes, Contribute to the Docs).

Rows: an entry whose page is a list of classes or functions quotes the first class's description, marked (context) when that class is not the entry itself; a list page with no such sentence has (No definition) (Fundamental Spaces, Composite Spaces, Spaces Utils, Misc Wrappers, the two Utility functions pages, Typing). An environment quotes the sentence that describes it, after the page's opening line naming its family.

Pages: below the menu, each page's own sections are its parts, with the classes, subsections and named list items under them.

API pages (the user's rule, 2026-10-31): classes, types and methods are terms; module-level functions, function parameters and arguments, and attributes or properties are not. A class is a box under its section or menu part and its methods are rows under it; a class that is the entry or the part itself is not repeated, and a method repeated with the same text on a subclass is listed once, at the class that defines it.

Left out on the pages: the noise kinds listed in the ROS 2 README; under the API rule, every function, attribute and property, the class that is the entry or the part itself, and repeated methods; and these:

- Headings that hold only those: Attributes, Additional functions, Additional Methods, Utility functions, Vector Utility functions, and on Utility functions and Vector Utility functions every section (Seeding, Environment Checking, Shared Memory for a Space and the like).
- Grouping headings, whose classes hang on the part directly: Common Wrappers, Uncommon Wrappers, Data Conversion Wrappers, Base Class, Available Action Wrappers, Implemented Wrappers, Vector Only wrappers, Vectorized Common wrappers.
- Typing: the type tables.
- MuJoCo: Versions and Comparing training performance across versions (version history).
- Basic Usage: Your First RL Program is code, but its subsection Explaining the Code Step by Step is kept for timestep and terminal state.
