# Ultralytics YOLO: allowed pages

Source: the Ultralytics YOLO Docs, ultralytics 8.4.194 (https://docs.ultralytics.com/). Its full menu is the `nav` of the cached `mkdocs.yml` of that release, so nothing here copies it.

The site lists the official menu as it stands, names, order and nesting unchanged, with the parts that hold no terms removed (the ROS 2 layout).

| No. | Folder and page | Entries (official names, menu order) | Parts |
|---|---|---|---|
| 1 | `modes/` Modes | Train, Val, Predict, Export, Track, Benchmark | |
| 2 | `tasks/` Tasks | Detect, Segment, Semantic, Depth, Classify, Pose, OBB | |
| 3 | `models/` Models | the 21 model pages from YOLO26 to Ultralytics LLM Interface | |
| 4 | `datasets/` Datasets | Detection, Segmentation, Semantic Segmentation, Depth Estimation, Pose, Classification, Oriented Bounding Boxes (OBB), Multi-Object Tracking, Explorer | the datasets each lists; Explorer: Explorer API |
| 5 | `solutions/` Solutions | the 17 solution pages from Analytics to Workouts Monitoring | |
| 6 | `platform/` Platform | Agents, Data, Train, Deploy, Explore, REST API | Data: Datasets, Annotation; Train: Projects, Models, Cloud Training, AutoTrain; Deploy: Inference, Endpoints, Monitoring |
| 7 | `rust-inference/` Rust Inference | Rust Inference | |

Left out (no terms): the Home tab (Quickstart, Usage and the model pages it repeats), Compare (comparison pages), Guides, YOLOv5 (Legacy), Integrations (third-party tools, as for ROS 2), Reference (about 300 pages generated from the code's modules) and Help (FAQ, contributing and policies); YOLO27 (Coming Soon) under Models; Explorer Dashboard Demo and VOC Exploration Example under Explorer; Quickstart, Integrations and Account under Platform. Languages links are not in the menu tree.

Rows: each entry and part quotes the sentence that opens its page, marked (context) when it describes the page or a related thing rather than the entry itself.
