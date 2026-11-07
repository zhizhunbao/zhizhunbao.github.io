# Fluent 2: allowed pages and term checklist

Not published (`docfx.json` excludes `**/README.md`). Source: Fluent 2 Design System (https://fluent2.microsoft.design/, Microsoft), its left navigation as the site embeds it (cached 2026-11-06: 92 pages in `design-refs/official-docs/cache/html/fluent2-*.html`, list `urls_kb_fluent2.txt`).

Status (2026-11-06): skeleton. Groups and pages follow the navigation, in its order and words (title case in titles; the four Components groups are named by their library). Each page has a row for its own subject and a row per titled item (`card-title`) the page defines with a sentence; the other terms of a page (section names that are terms, such as the material types or the token kinds, and words its text names) are added one page at a time when the page is read, following the README rule for a new documentation set. Chinese names were drafted with a local model and are checked as definitions are written.

Left out (no terms): Get started (What's new is release notes; Design and Develop are Figma and setup how-to), the Windows library (an overview with no component pages), and each library's Overview page (a list of its components; it is the source of its group row).

| Page | Titled terms | Sections holding them | All sections | Read |
|---|---|---|---|---|
| [1.1 Design Principles](https://fluent2.microsoft.design/design-principles) | 0 | - | Natural on every platform, Built for focus, One for all, all for one, Unmistakably Microsoft | no |
| [1.2 Color](https://fluent2.microsoft.design/color) | 2 | Brand colors (2) | Fluent palettes, Neutral colors, Shared colors, Brand colors, Interaction States, Accessibility best practices, Color tokens | no |
| [1.3 Elevation](https://fluent2.microsoft.design/elevation) | 17 | Depth, shadow, and light (2), Low elevation ramp (8), High elevation ramp (4), Shadows on color surfaces (3) | Depth, shadow, and light, Shadow system, Low elevation ramp, High elevation ramp, Shadows on color surfaces | no |
| [1.4 Iconography](https://fluent2.microsoft.design/iconography) | 2 | System Icons (2) | Fluent icon collections, System Icons, Product launch icons, File type icons, Icon usage | no |
| [1.5 Layout](https://fluent2.microsoft.design/layout) | 18 | Spacing and proximity (4), Grid (8), Alignment (4), Responsive design (2) | Spacing and proximity, Grid, Alignment, Responsive design, Responsive techniques | no |
| [1.6 Material](https://fluent2.microsoft.design/material) | 0 | - | Material types, Solid, Acrylic, Mica, Smoke | no |
| [1.7 Motion](https://fluent2.microsoft.design/motion) | 8 | Motion principles (4), Duration and easing (6), Choreography (2) | Motion principles, Duration and easing, Transitions, or motion in practice, Choreography, Accessible motion design | no |
| [1.8 Shapes](https://fluent2.microsoft.design/shapes) | 6 | Forms (6) | Forms, Corner radius, Stroke | no |
| [1.9 Typography](https://fluent2.microsoft.design/typography) | 0 | - | Fluent font stacks, Type ramp, Styling text | no |
| [2.1 Accessibility](https://fluent2.microsoft.design/accessibility) | 0 | - | Building for diverse experiences, Structure, hierarchy, and navigation, Keyboard navigation and assistive technologies, Color, Responsive layouts, Rich media and alternatives, Meaningful text, Code standards, Design accessibility specs, Resources | no |
| [2.2 Content Design](https://fluent2.microsoft.design/content-design) | 0 | - | Why content design matters, Designing content, Writing content, Some best practices | no |
| [2.3 Design Tokens](https://fluent2.microsoft.design/design-tokens) | 0 | - | Global tokens, Alias tokens, Theming | no |
| [2.4 Handoffs](https://fluent2.microsoft.design/handoffs) | 9 | Visual patterns for handoffs (5), Content patterns for handoff (4) | Handoff principles, The role of AI in handoffs, Handoffs & user intent, Visual patterns for handoffs, Content patterns for handoff | no |
| [2.5 Onboarding](https://fluent2.microsoft.design/onboarding) | 5 | Principles (5), Scenarios and goals (6) | Principles, Scenarios and goals, Content | yes (2026-11-06) |
| [2.6 Wait UX](https://fluent2.microsoft.design/wait-ux) | 0 | Visual patterns (4) | Principles, Visual patterns, Behavior, Accessibility, Content patterns | yes (2026-11-06) |
| [3.1 Responsible AI](https://fluent2.microsoft.design/responsible-AI) | 4 | Principles (5) | Principles, UX strategies, Agent interactions, Visual patterns, Content patterns, Evaluation criteria | no |
| [3.2 Types of AI Harm](https://fluent2.microsoft.design/ai-harm) | 6 | Harm categories (6) | Harm categories, Inaccurate output, Incomplete output, Biased output, Inappropriate or unsafe output, Non-transparent output, Overreliance, Feedback and harm reporting, Resources | no |
| [4.1 System Prompt Engineering](https://fluent2.microsoft.design/content-engineering/system-prompt-engineering) | 0 | - | What is a system prompt?, Structure a system prompt, Explore the tasks | no |
| [4.2 Evaluating Output Quality](https://fluent2.microsoft.design/content-engineering/evaluating-output-quality) | 0 | - | What is an eval?, Why evals matter for UX, Core components of an eval, Key decisions in human-centered evals, Evaluation pages | no |
| [5.1 Color Tokens](https://fluent2.microsoft.design/color-tokens) | 0 | - | Neutral Background, Neutral Foreground, Neutral Stroke, Neutral Shadow, Brand Background, Brand Foreground, Brand Stroke, Brand Shadow, Status Background, Status Foreground, Status Stroke, Generic Status Background, Generic Status Foreground, Generic Status Stroke | no |
| [6.1 Accordion](https://fluent2.microsoft.design/components/web/react/core/accordion/usage) | 0 | - | Resources, Behavior, Layout, Accessibility, Content | no |
| [6.2 Avatar](https://fluent2.microsoft.design/components/web/react/core/avatar/usage) | 2 | Types (2) | Resources, Types, Behavior, Accessibility | no |
| [6.3 Avatar Group](https://fluent2.microsoft.design/components/web/react/core/avatargroup/usage) | 3 | Types (3) | Resources, Types, Behavior, Accessibility | no |
| [6.4 Badge](https://fluent2.microsoft.design/components/web/react/core/badge/usage) | 0 | - | Resources, Behavior, Layout, Accessibility, Content | no |
| [6.5 Breadcrumb](https://fluent2.microsoft.design/components/web/react/core/breadcrumb/usage) | 0 | Behavior (1) | Resources, Behavior, Layout, Accessibility, Content | no |
| [6.6 Button](https://fluent2.microsoft.design/components/web/react/core/button/usage) | 4 | Types (4), Behavior (1) | Resources, Types, Behavior, Layout, Accessibility, Content | no |
| [6.7 Card](https://fluent2.microsoft.design/components/web/react/core/card/usage) | 2 | Layout (2) | Resources, Layout, Behavior, Accessibility, Content | no |
| [6.8 Carousel](https://fluent2.microsoft.design/components/web/react/core/carousel/usage) | 0 | - | Resources, Behavior, Layout, Accessibility | no |
| [6.9 Checkbox](https://fluent2.microsoft.design/components/web/react/core/checkbox/usage) | 2 | Layout (2) | Resources, Behavior, Layout, Accessibility, Content | no |
| [6.10 Combobox](https://fluent2.microsoft.design/components/web/react/core/combobox/usage) | 0 | - | Resources, Behavior, Accessibility, Content | no |
| [6.11 Dialog](https://fluent2.microsoft.design/components/web/react/core/dialog/usage) | 3 | Types (3) | Resources, Types, Behavior, Layout, Accessibility, Content | yes (2026-11-06) |
| [6.12 Divider](https://fluent2.microsoft.design/components/web/react/core/divider/usage) | 2 | Types (2) | Resources, Types, Layout, Accessibility, Content | no |
| [6.13 Drawer](https://fluent2.microsoft.design/components/web/react/core/drawer/usage) | 4 | Types (2), Behavior (2) | Resources, Types, Behavior, Layout, Content | no |
| [6.14 Dropdown](https://fluent2.microsoft.design/components/web/react/core/dropdown/usage) | 0 | - | Resources, Behavior, Accessibility, Content | no |
| [6.15 Field](https://fluent2.microsoft.design/components/web/react/core/field/usage) | 8 | Behavior (3), Layout (2), Content (3) | Resources, Types, Behavior, Layout, Accessibility, Content | no |
| [6.16 Fluent Provider](https://fluent2.microsoft.design/components/web/react/core/fluentprovider/usage) | 0 | - | Resources | no |
| [6.17 Icon](https://fluent2.microsoft.design/components/web/react/core/icon/usage) | 0 | - | Resources | no |
| [6.18 Image](https://fluent2.microsoft.design/components/web/react/core/image/usage) | 0 | - | Resources, Layout, Accessibility | no |
| [6.19 Info Label](https://fluent2.microsoft.design/components/web/react/core/infolabel/usage) | 0 | Content (1) | Resources, Behavior, Layout, Accessibility, Content | no |
| [6.20 Input](https://fluent2.microsoft.design/components/web/react/core/input/usage) | 0 | - | Resources, Behavior, Layout, Accessibility, Content | no |
| [6.21 Label](https://fluent2.microsoft.design/components/web/react/core/label/usage) | 0 | - | Resources, Behavior, Layout, Accessibility, Content | no |
| [6.22 Link](https://fluent2.microsoft.design/components/web/react/core/link/usage) | 4 | Types (4), Behavior (1), Layout (2) | Resources, Types, Behavior, Layout, Accessibility, Content | no |
| [6.23 List](https://fluent2.microsoft.design/components/web/react/core/list/usage) | 0 | - | Resources, Behavior, Layout, Accessibility, Content | no |
| [6.24 Menu](https://fluent2.microsoft.design/components/web/react/core/menu/usage) | 3 | Types (3), Layout (2) | Resources, Types, Layout, Behavior, Content | no |
| [6.25 Message Bar](https://fluent2.microsoft.design/components/web/react/core/messagebar/usage) | 8 | Types (4), Layout (4), Content (3) | Resources, Types, Behavior, Layout, Accessibility, Content | no |
| [6.26 Nav](https://fluent2.microsoft.design/components/web/react/core/nav/usage) | 8 | Behavior (4), Layout (6) | Resources, Behavior, Layout, Accessibility, Content | no |
| [6.27 Persona](https://fluent2.microsoft.design/components/web/react/core/persona/usage) | 0 | - | Resources, Layout, Accessibility, Content | no |
| [6.28 Popover](https://fluent2.microsoft.design/components/web/react/core/popover/usage) | 3 | Layout (2), Content (1) | Resources, Layout, Accessibility, Content | no |
| [6.29 Progress Bar](https://fluent2.microsoft.design/components/web/react/core/progressbar/usage) | 2 | Behavior (2) | Resources, Behavior, Layout, Content | no |
| [6.30 Radio Group](https://fluent2.microsoft.design/components/web/react/core/radiogroup/usage) | 2 | Layout (2) | Resources, Behavior, Layout, Accessibility, Content | no |
| [6.31 Rating](https://fluent2.microsoft.design/components/web/react/core/rating/usage) | 7 | Types (3), Behavior (6) | Resources, Types, Behavior, Layout, Accessibility | no |
| [6.32 Searchbox](https://fluent2.microsoft.design/components/web/react/core/searchbox/usage) | 0 | - | Resources, Behavior, Layout, Accessibility, Content | no |
| [6.33 Select](https://fluent2.microsoft.design/components/web/react/core/select/usage) | 1 | Behavior (1) | Resources, Behavior, Content | no |
| [6.34 Skeleton](https://fluent2.microsoft.design/components/web/react/core/skeleton/usage) | 0 | - | Resources, Behavior, Layout, Accessibility | no |
| [6.35 Slider](https://fluent2.microsoft.design/components/web/react/core/slider/usage) | 6 | Types (2), Behavior (2), Layout (2) | Resources, Types, Behavior, Layout, Accessibility, Content | no |
| [6.36 Spin Button](https://fluent2.microsoft.design/components/web/react/core/spin/usage) | 0 | - | Resources, Behavior, Accessibility, Content | no |
| [6.37 Spinner](https://fluent2.microsoft.design/components/web/react/core/spinner/usage) | 0 | - | Resources, Layout, Accessibility, Content | no |
| [6.38 Switch](https://fluent2.microsoft.design/components/web/react/core/switch/usage) | 0 | - | Resources, Layout, Accessibility, Content | no |
| [6.39 Tablist](https://fluent2.microsoft.design/components/web/react/core/tablist/usage) | 2 | Layout (3) | Resources, Layout, Behavior, Accessibility, Content | no |
| [6.40 Tag](https://fluent2.microsoft.design/components/web/react/core/tag/usage) | 6 | Types (2), Behavior (2), Layout (3) | Resources, Types, Behavior, Layout, Accessibility, Content | no |
| [6.41 Tag Picker](https://fluent2.microsoft.design/components/web/react/core/tagpicker/usage) | 0 | - | Behavior, Layout, Accessibility | no |
| [6.42 Text](https://fluent2.microsoft.design/components/web/react/core/text/usage) | 0 | - | Resources, Presets, Layout, Accessibility | no |
| [6.43 Textarea](https://fluent2.microsoft.design/components/web/react/core/textarea/usage) | 0 | - | Resources, Behavior, Layout, Accessibility, Content | no |
| [6.44 Toast](https://fluent2.microsoft.design/components/web/react/core/toast/usage) | 6 | Types (3), Layout (1), Content (3) | Resources, Types, Behavior, Layout, Accessibility, Content | no |
| [6.45 Toolbar](https://fluent2.microsoft.design/components/web/react/core/toolbar/usage) | 0 | - | Resources, Behavior, Layout, Accessibility, Content | no |
| [6.46 Tooltip](https://fluent2.microsoft.design/components/web/react/core/tooltip/usage) | 0 | - | Resources, Behavior, Layout, Accessibility, Content | no |
| [6.47 Tree](https://fluent2.microsoft.design/components/web/react/core/tree/usage) | 6 | Types (2), Behavior (2), Layout (4), Content (2) | Resources, Types, Behavior, Layout, Accessibility, Content | no |
| [7.1 Activity Indicator](https://fluent2.microsoft.design/components/ios/core/activityindicator/usage) | 0 | - | Resources, Behavior, Layout, Accessibility | no |
| [7.2 Avatar](https://fluent2.microsoft.design/components/ios/core/avatar/usage) | 2 | Types (2) | Resources, Types, Behavior, Accessibility | no |
| [7.3 Avatar Group](https://fluent2.microsoft.design/components/ios/core/avatargroup/usage) | 2 | Types (2) | Resources, Types, Behavior, Accessibility | no |
| [7.4 Button](https://fluent2.microsoft.design/components/ios/core/button/usage) | 1 | Types (2) | Resources, Types, Layout, Accessibility, Content | no |
| [7.5 Card Nudge](https://fluent2.microsoft.design/components/ios/core/cardnudge/usage) | 0 | - | Resources, Behavior, Layout, Content | no |
| [7.6 Heads-up Display](https://fluent2.microsoft.design/components/ios/core/hud/usage) | 0 | - | Resources, Behavior, Content | no |
| [7.7 Navigation Bar](https://fluent2.microsoft.design/components/ios/core/navigationbar/usage) | 0 | Layout (1) | Resources, Layout, Accessibility, Content | no |
| [7.8 Progress Bar](https://fluent2.microsoft.design/components/ios/core/progressbar/usage) | 0 | - | Resources, Behavior, Layout, Accessibility | no |
| [7.9 Segmented Control](https://fluent2.microsoft.design/components/ios/core/segmentedcontrol/usage) | 0 | - | Resources, Behavior, Layout, Content | no |
| [7.10 Shimmer](https://fluent2.microsoft.design/components/ios/core/shimmer/usage) | 0 | - | Resources, Layout, Accessibility | no |
| [7.11 Text Field](https://fluent2.microsoft.design/components/ios/core/textfield/usage) | 0 | - | Resources, Behavior, Accessibility, Content | no |
| [7.12 Tooltip](https://fluent2.microsoft.design/components/ios/core/tooltip/usage) | 0 | - | Resources, Behavior, Layout, Content | no |
| [8.1 Avatar](https://fluent2.microsoft.design/components/android/core/avatar/usage) | 2 | Types (2) | Resources, Types, Behavior, Accessibility | no |
| [8.2 Avatar Group](https://fluent2.microsoft.design/components/android/core/avatargroup/usage) | 2 | Types (2) | Resources, Types, Behavior, Accessibility | no |
| [8.3 Button](https://fluent2.microsoft.design/components/android/core/button/usage) | 1 | Types (2), Behavior (3) | Resources, Types, Behavior, Layout, Accessibility, Content | no |
| [8.4 Progress Indicator](https://fluent2.microsoft.design/components/android/core/progressindicator/usage) | 2 | Types (2) | Resources, Types, Behavior, Layout, Accessibility, Content | no |
| [8.5 Shimmer](https://fluent2.microsoft.design/components/android/core/shimmer/usage) | 0 | - | Resources, Behavior, Layout, Accessibility | no |

## Card titles left out (guideline or picture captions, not terms)

- 1.7 Motion: Use quick, natural durations
- 1.7 Motion: Unnatural durations can be jarring and abrupt
- 1.7 Motion: Use choreography help build focus
- 1.7 Motion: Moving elements together can create ambiguity
- 2.5 Onboarding: A modal invites users to try a new experience, tells them the benefits, and gives them a way to opt out.
- 2.5 Onboarding: An in-browser banner calls attention to new improvements.
- 2.5 Onboarding: Teaching popovers, especially in the brand color, can point directly to helpful features in UI
- 2.5 Onboarding: A message bar at the top of the browser alerts users to new functionality that makes their workflows easier.
- 2.5 Onboarding: An empty state message in Teams quickly tells people what they can accomplish and gives them a CTA for an easy path forward.
- 2.5 Onboarding: A wizard lets people know how many steps they have to complete and how much progress they’ve made.
- 2.6 Wait UX: A spinner labeled “Searching …” with a nonbreaking space before the ellipsis.
- 2.6 Wait UX: Top label: “Uploading file …” | Bottom status: “30% complete – about 20 seconds remaining”
- 2.6 Wait UX: Skeleton cards with shimmer effect and Copilot theme applied
- 2.6 Wait UX: Label: “Generating report …” | Status: “Estimated time: 1 minute”
- 3.1 Responsible AI: Keep users in control
- 6.5 Breadcrumb: Show a tooltip on hover or focus over the overflow trigger. Overflow menu appears on selection.
- 6.19 Info Label: Make link text specific
- 6.22 Link: Inline links add an underline in rest and visited states for additional visual cues
- 6.22 Link: Open icon signifies the link opens a new context
- 6.22 Link: Chevron signifies the text is interactive
- 6.24 Menu: Group items to make them easier to scan
- 6.24 Menu: Use a divider for more visual distinction between groups
- 6.25 Message Bar: Success messages state specifically what’s changed
- 6.25 Message Bar: Use links to provide additional info related to the message
- 6.25 Message Bar: Button labels should be clear and direct responses to message titles
- 6.26 Nav: Selection indicator on a sub-item
- 6.26 Nav: Selection shifts to NavCategory when closed
- 6.31 Rating: Partially filled (0.5 step)
- 6.39 Tablist: In smaller layouts, a dropdown might be preferable to a tablist
- 6.44 Toast: Stack up to 4 toasts
- 6.47 Tree: Selecting a parent item also selects all of its children
- 6.47 Tree: If a child item is deselected, the parent checkbox shows a mixed selection state.
- 6.47 Tree: Basic tree with badges and quick actions shown on hover
- 6.47 Tree: Persona tree with badges and quick actions shown on hover
- 7.7 Navigation Bar: Simplify complicated hierarchies with a segmented control
- 8.3 Button: Extended FABs keep the primary action apparent
- 8.3 Button: Menu FABs offer distinct but related options under one category, like adding
- 8.3 Button: When the menu is open, people can take the specific action they need
