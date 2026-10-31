# Ultralytics YOLO: allowed pages

Source: the Ultralytics YOLO Docs, ultralytics 8.4.194 (https://docs.ultralytics.com/). Its full menu is the `nav` of the cached `mkdocs.yml` of that release, so nothing here copies it.

The site lists the official menu as it stands, names, order and nesting unchanged, with the parts that hold no terms removed (the ROS 2 layout).

| No. | Folder and page | Entries (official names, menu order) | Parts |
|---|---|---|---|
| 1 | `modes/` Modes | Train, Val, Predict, Export, Track, Benchmark | each page's own sections, with the subsections and named list items under them |
| 2 | `tasks/` Tasks | Detect, Segment, Semantic, Depth, Classify, Pose, OBB | each page's own sections |
| 3 | `models/` Models | the 21 model pages from YOLO26 to Ultralytics LLM Interface | each page's own sections |
| 4 | `datasets/` Datasets | Detection, Segmentation, Semantic Segmentation, Depth Estimation, Pose, Classification, Oriented Bounding Boxes (OBB), Multi-Object Tracking, Explorer | the datasets each lists; Explorer: Explorer API |
| 5 | `solutions/` Solutions | the 17 solution pages from Analytics to Workouts Monitoring; the group page's own Solutions Arguments, SolutionAnnotator, SolutionResults | each page's own sections |
| 6 | `platform/` Platform | Agents, Data, Train, Deploy, Explore, REST API; the group page's own Multi-Region Infrastructure and Key Features | each page's own sections, then the menu's: Data: Datasets, Annotation; Train: Projects, Models, Cloud Training, AutoTrain; Deploy: Inference, Endpoints, Monitoring |
| 7 | `rust-inference/` Rust Inference | Rust Inference | |

Left out (no terms): the Home tab (Quickstart, Usage and the model pages it repeats), Compare (comparison pages), Guides, YOLOv5 (Legacy), Integrations (third-party tools, as for ROS 2), Reference (about 300 pages generated from the code's modules) and Help (FAQ, contributing and policies); YOLO27 (Coming Soon) under Models; Explorer Dashboard Demo and VOC Exploration Example under Explorer; Quickstart, Integrations and Account under Platform. Languages links are not in the menu tree.

Rows: each entry and part quotes the sentence that opens its page, marked (context) when it describes the page or a related thing rather than the entry itself.

Pages: below the menu, each page's own sections are its parts, with the subsections and named list items under them.

Left out on the pages: the noise kinds listed in the ROS 2 README, and these:

- Modes: Comet, ClearML and TensorBoard under Logging (third-party, as for Integrations); the rows of argument, format and source tables (not yet decided). Train's Usage Examples is kept for the training setups it names.
- Group pages: Platform: the Workflow verb list (Upload, Visualize, Train, Export, Deploy, Build, Monitor, Connect, Collaborate), the region table, Account Management (the Account menu entry). Solutions: the Solutions list (the entries), the method list of SolutionAnnotator, the result fields of SolutionResults.
- Tasks: Semantic: Instance vs Semantic Segmentation (a comparison table; the Segment page defines the two). Depth: the A/B experiment labels under the log-depth head. Pose: the 17 keypoint names of the index map.
- Models: YOLO26: the 4 bold items of Overview (the Dual-Head Architecture box is kept). YOLOv3: the Overview items YOLOv3, YOLOv3-Ultralytics, YOLOv3u (variants, not terms). SAM 2: the SA-V Dataset items (counts). Kept from noise sections: YOLOv10's Architecture, the Key Features of YOLOv6, YOLO-NAS and RT-DETR, and YOLO-World's Set prompts.
- Datasets: Classification's Supported Datasets and Explorer's Explorer API are the menu parts, not repeated. The group pages' sections Object Detection and Pose Estimation (Datasets, Tasks) are the Detection and Pose entries under their menu names.
- Solutions: Heatmaps: the colormap table rows. Instance Segmentation Tracking: What is Instance Segmentation? is the entry's row, its two named types are kept.
- Platform: Agents: the condition examples under Filter Detections with a Condition, and the Send Webhooks how-to (its blocks are rows of Configure Blocks). Data: the Supported Tasks rows (the Tasks entries). Train: GPU Tier Access and Signup Credits (billing). Deploy: the Deployment Options rows (Shared Inference and Dedicated Endpoints are kept under Architecture). Explore: the sections on cloning, following, publishing and sharing content (UI).
