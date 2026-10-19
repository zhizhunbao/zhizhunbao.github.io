---
title: "Audit against WCAG"
description: "CST8914 Accessible by Design, assignment 2: Audit against WCAG. The success criteria it tests and where each is explained."
ms.date: 2026-10-19
---

# Audit against WCAG

Assignment 2 of CST8914 Accessible by Design (given in week 7) asks me to test one web page against the WCAG success criteria with automated tools, manual checks and a screen reader, then report each failure twice: in plain language for the client and in technical terms, with fixed code, for a developer. The table lists the success criteria it covers, each with its official Understanding page and the sections here that explain it. My own results come after the assignment is submitted.

## Success criteria to test

| # | Success criterion | Explained in |
|---|---|---|
| 1 | [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html) | [3. Informative Images](../lectures/images-tutorial.md#informative-images)<br>[3. An alt Decision Tree](../lectures/images-tutorial.md#an-alt-decision-tree) |
| 2 | [1.2.1 Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded.html) | [4. Transcripts](../lectures/making-audio-and-video-media-accessible.md#transcripts) |
| 3 | [1.2.2 Captions (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html) | [4. Captions/Subtitles](../lectures/making-audio-and-video-media-accessible.md#captionssubtitles) |
| 4 | [1.2.3 Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded.html) | [4. Description of Visual Information](../lectures/making-audio-and-video-media-accessible.md#description-of-visual-information) |
| 5 | [1.2.4 Captions (Live)](https://www.w3.org/WAI/WCAG22/Understanding/captions-live.html) | [4. Captions/Subtitles](../lectures/making-audio-and-video-media-accessible.md#captionssubtitles) |
| 6 | [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html) | [1. Headings](../lectures/page-structure-tutorial.md#headings)<br>[2. Tables with One Header](../lectures/tables-tutorial.md#tables-with-one-header)<br>[6. Labeling Controls](../lectures/forms-tutorial.md#labeling-controls)<br>[7. H43: Using id and headers attributes to associate data cells with header cells in data tables](../lectures/wcag-2-2.md#h43-using-id-and-headers-attributes-to-associate-data-cells-with-header-cells-in-data-tables) |
| 7 | [1.3.2 Meaningful Sequence](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html) | Understanding page only |
| 8 | [1.3.3 Sensory Characteristics](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html) | Understanding page only |
| 9 | [1.4.1 Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html) | Understanding page only |
| 10 | [1.4.2 Audio Control](https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html) | [4. Media Players](../lectures/making-audio-and-video-media-accessible.md#media-players) |
| 11 | [1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) | Understanding page only |
| 12 | [1.4.4 Resize text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html) | Understanding page only |
| 13 | [1.4.5 Images of Text](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html) | [3. An alt Decision Tree](../lectures/images-tutorial.md#an-alt-decision-tree) |
| 14 | [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html) | [5. Developing a Keyboard Interface](../lectures/aria-authoring-practices-guide.md#developing-a-keyboard-interface) |
| 15 | [2.1.2 No Keyboard Trap](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html) | [5. Dialog (Modal) Pattern](../lectures/aria-authoring-practices-guide.md#dialog-modal-pattern) |
| 16 | [2.2.1 Timing Adjustable](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html) | Understanding page only |
| 17 | [2.2.2 Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html) | [7. 2.2.2 Pause, Stop, Hide](../lectures/wcag-2-2.md#222-pause-stop-hide) |
| 18 | [2.3.1 Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html) | Understanding page only |
| 19 | [2.4.1 Bypass Blocks](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html) | [7. 2.4.1 Bypass Blocks](../lectures/wcag-2-2.md#241-bypass-blocks)<br>[1. Page Regions](../lectures/page-structure-tutorial.md#page-regions) |
| 20 | [2.4.2 Page Titled](https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html) | [7. 2.4.2 Page Titled](../lectures/wcag-2-2.md#242-page-titled) |
| 21 | [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html) | [7. 2.4.3 Focus Order](../lectures/wcag-2-2.md#243-focus-order) |
| 22 | [2.4.4 Link Purpose (In Context)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html) | [3. Functional Images](../lectures/images-tutorial.md#functional-images) |
| 23 | [2.4.5 Multiple Ways](https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways.html) | Understanding page only |
| 24 | [2.4.6 Headings and Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html) | [1. Headings](../lectures/page-structure-tutorial.md#headings)<br>[6. Labeling Controls](../lectures/forms-tutorial.md#labeling-controls) |
| 25 | [2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html) | [7. 2.4.7 Focus Visible](../lectures/wcag-2-2.md#247-focus-visible) |
| 26 | [3.1.1 Language of Page](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html) | Understanding page only |
| 27 | [3.1.2 Language of Parts](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html) | Understanding page only |
| 28 | [3.2.1 On Focus](https://www.w3.org/WAI/WCAG22/Understanding/on-focus.html) | Understanding page only |
| 29 | [3.2.2 On Input](https://www.w3.org/WAI/WCAG22/Understanding/on-input.html) | [7. 3.2.2 On Input](../lectures/wcag-2-2.md#322-on-input) |
| 30 | [3.2.3 Consistent Navigation](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html) | Understanding page only |
| 31 | [3.2.4 Consistent Identification](https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification.html) | Understanding page only |
| 32 | [3.3.2 Labels or Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html) | [6. Labeling Controls](../lectures/forms-tutorial.md#labeling-controls)<br>[6. Form Instructions](../lectures/forms-tutorial.md#form-instructions) |
| 33 | [3.3.4 Error Prevention (Legal, Financial, Data)](https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data.html) | [6. Validating Input](../lectures/forms-tutorial.md#validating-input) |
| 34 | [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html) | [5. Providing Accessible Names and Descriptions](../lectures/aria-authoring-practices-guide.md#providing-accessible-names-and-descriptions)<br>[5. Read Me First](../lectures/aria-authoring-practices-guide.md#read-me-first) |
