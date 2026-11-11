# Canadian Law (folder canadian-law): rules, allowed pages and checklist

Not published (`docfx.json` excludes `**/README.md`).

## 1. Source

- Justice Laws Website (Department of Justice Canada), https://laws-lois.justice.gc.ca/eng/. The consolidated text as the site shows it on the day cached.
- Cached 2026-11-08, `references/official-docs/urls_kb_me_gaps_20261108.txt`, `urls_kb_me_gaps_2_20261108.txt` and `urls_kb_me_gaps_3_20261108.txt` (`--plain`). The table of contents is in `cache/html/justice-eng-acts-*.html`: the `md` conversion drops it.
- Licence: the Reproduction of Federal Law Order (SI/97-5, https://laws-lois.justice.gc.ca/eng/regulations/SI-97-5/FullText.html, read 2026-11-08) lets anyone reproduce federal enactments and consolidations at no charge and without permission, with due diligence for accuracy and without presenting the copy as official. Definitions quote word for word (`--plain` caching of that page timed out; it was read directly).

## 2. Levels and order

- Overview; a page per statute, numbered 1 to 2 in the order this entry was needed; a page per Part, Division or heading that holds terms, named as the statute names it; the sections are the terms, named by section number and marginal note (`5 Compliance with obligations`).
- A section has several marginal notes when it has several subsections: the row uses the note printed directly before the section number.
- The menu shortens the second statute to the opening words of its long title; the page keeps the whole title. The source gives no short title for it. CASL appears only in the Chinese name and the folder name.

## 3. Left in the cache

- PIPEDA: Short Title, DIVISION 5 Transitional Provisions, PARTS 2 to 6 (electronic documents and amendments to other Acts), SCHEDULES 2 to 4.
- The second statute: Conflict of Provisions, Her Majesty, Application, General Provisions, Injunction, Offences, Rules about Contraventions and Reviewable Conduct, Consultation and Disclosure of Information, General, Transitional Provisions, the amendments and Coming into Force. Private Right of Action (ss. 47 to 51) is marked repealed before coming into force in the cached text, so it has no page.

## 4. Status

- 2026-11-08: skeleton (pages, menu, Glossary rows with names and Chinese names; every definition pending; first filled the same day: Schedule 1 and Requirements and Prohibitions). No figures and no Classification section until the skeleton is confirmed. The Social Sciences and Humanities Overview figure does not show this entry yet.
