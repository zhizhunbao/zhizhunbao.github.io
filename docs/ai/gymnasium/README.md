# Gymnasium: allowed pages

Source: the Gymnasium Documentation, version 1.4.0 (https://gymnasium.farama.org/). Its full menu is in the cached home page (`design-refs/official-docs/cache/html/gymnasium.html`), so nothing here copies it.

The site lists the official menu as it stands, names, order and nesting unchanged, with the parts that hold no terms removed (the ROS 2 layout). Every figure shows one level below its page: the Overview shows the groups and their entries, each group page its entries with their parts, and each entry page its parts.

| No. | Folder and page | Entries (official names, menu order) | Parts |
|---|---|---|---|
| 1 | `introduction/` Introduction | Basic Usage | |
| 2 | `api/` API | Env, Make and register, Spaces, Wrappers, Vectorize, Utility functions, Typing, Functional Env | Spaces: Fundamental Spaces, Composite Spaces, Spaces Utils; Wrappers: Misc Wrappers, Action Wrappers, Observation Wrappers, Reward Wrappers; Vectorize: Wrappers, AsyncVectorEnv, SyncVectorEnv, Utility functions |
| 3 | `environments/` Environments | Classic Control, Box2D, Toy Text, MuJoCo | the 5, 3, 4 and 11 environments each lists |

Left out (no terms): Training an Agent, Create a Custom Environment, Recording Agents, Speeding Up Training and Gym Migration Guide under Introduction (guides); List of Wrappers under Wrappers (a table of the wrappers on the other pages); Atari (its page only redirects to ale.farama.org) and External Environments (links) under Environments; the Tutorials group (Gymnasium Basics, Training Agents, Third-Party Tutorials); the Development links (Github, Paper, Gymnasium Release Notes, Gym Release Notes, Contribute to the Docs).

Rows: an entry whose page is a list of classes or functions quotes the first class's description, marked (context) when that class is not the entry itself; a list page with no such sentence has (No definition) (Fundamental Spaces, Composite Spaces, Spaces Utils, Misc Wrappers, the two Utility functions pages, Typing). An environment quotes the sentence that describes it, after the page's opening line naming its family.
