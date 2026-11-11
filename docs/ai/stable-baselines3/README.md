# Stable-Baselines3: allowed pages

Source: the Stable-Baselines3 Docs, version 2.9.2a0 (master) (https://stable-baselines3.readthedocs.io/en/master/). Its full menu is in the cached home page (`references/official-docs/cache/html/stable-baselines3-en-master.html`), so nothing here copies it.

The site lists the official menu as it stands, names and order unchanged, with the parts that hold no terms removed (the ROS 2 layout). The menu's second level only links to sections of the same page, so the entries have no parts.

| No. | Folder and page | Entries (official names, menu order) |
|---|---|---|
| 1 | `user-guide/` User Guide | RL Algorithms, Vectorized Environments, Policy Networks, Callbacks, RL Baselines3 Zoo, SB3 Contrib, Stable Baselines Jax (SBX), Imitation Learning, On saving and loading |
| 2 | `rl-algorithms/` RL Algorithms | Base RL Class, A2C, DDPG, DQN, HER, PPO, SAC, TD3 |
| 3 | `common/` Common | Atari Wrappers, Environments Utils, Custom Environments, Probability Distributions, Evaluation Helper, Gym Environment Checker, Monitor Wrapper, Logger, Action Noise, Utils |

Left out (no terms): under User Guide, Installation, Getting Started, Reinforcement Learning Tips and Tricks, Reinforcement Learning Resources (links), Examples, Using Custom Environments, Tensorboard Integration, Integrations, Plotting, Migrating from Stable-Baselines, Dealing with NaNs and infs, Developer Guide and Exporting models (guides); the Misc caption (Changelog, Projects).

Rows: a page that is a list of functions quotes its first class or function description, marked (context) when that is not the entry itself; Environments Utils, Logger and Utils have (No definition).

Pages: below the menu, each page's own sections are its parts, with the classes, subsections and named list items under them.

API pages (the user's rule, 2026-10-31): classes, types and methods are terms; module-level functions, function parameters and arguments, and attributes or properties are not. A class is a box under its section or menu part and its methods are rows under it; a class that is the entry or the part itself is not repeated, and a method repeated with the same text on a subclass is listed once, at the class that defines it.

Left out on the pages: the noise kinds listed in the ROS 2 README; under the API rule, every function, argument row and property (logger), the class that is the entry or the part itself, inherited and repeated methods, and the policy aliases (MlpPolicy, CnnPolicy, MultiInputPolicy: "alias of" the classes kept); and these:

- RL Algorithms: the algorithm support table (17 rows, 7 of them entries; the other 10, ARS, CrossQ, DroQ, Maskable PPO, QR-DQN, RecurrentPPO, SAC-N, SimBa, TQC and TRPO, have no page in this menu).
- Unlabelled list items (no name to keep): VecEnv API vs Gym API (8), Default Network Architecture (3), the CombinedExtractor steps (3), the AtariWrapper preprocessing (8).
- Callbacks: the Callback Collection list (it points to the H3s, which are kept); the API rows of those callbacks (their headings carry them).
- Policy Networks: BaseFeaturesExtractor, named only as a base class.
- Probability Distributions: the intro list mapping classes to spaces.
- Logger: the 27 logged keys under eval/, rollout/, time/, train/ (values, like attributes).
- On saving and loading: File structure, Pros, Cons.
