# Korean Law (folder korean-law): rules, allowed pages and checklist

Not published (`docfx.json` excludes `**/README.md`).

## 1. Source

- 국가법령정보센터 (법제처, Ministry of Government Legislation), https://www.law.go.kr/. The current text of each statute (현행법령) as the site shows it on the day cached.
- Cached 2026-11-07, `references/official-docs/urls_kb_korean_law.txt` (16 article pages, `--plain`) and `cache/html/law-lsinfor-<lsiSeq>.html` (7 full texts, curl, HTML only). The statute page `https://www.law.go.kr/법령/<name>` is a 1 KB frame; the article page `/LSW/lsSideInfoP.do?lsiSeq=&joNo=&joBrNo=&docCls=jo&urlMode=lsScJoRltInfoR` holds the article text, and `/LSW/lsInfoR.do?lsiSeq=&efYd=...` the whole statute (the frame's `lsInfoP.do` is an empty shell). Links on the site use the readable addresses `법령/<name>` and `법령/<name>/제N조`.
- English titles (Korean Law Translation Center, elaw.klri.re.kr) are not cached yet and do not appear on the pages; names are the Korean names as 국가법령정보센터 writes them, Chinese names are this site's own translations.
- Statute names keep the source's characters, including the Korean separator ㆍ in 제7장 신분보장ㆍ징계ㆍ소청; the Chinese names use 、.

## 2. Levels and order

- Overview; a page per statute (group), numbered 1 to 7; a page per chapter (장) that holds terms, keeping the source's own part and chapter numbers (제2편 각칙 제33장); a chapter's sections (절) are its parts; the articles (조) are the terms, named as the source writes them (제307조(명예훼손)).
- The source lists statutes alphabetically (an index), so the order is this site's (repository README, Third and fourth levels, rule 3): the general criminal law, the special acts, criminal procedure, then the public-service and disclosure acts.
- Chapters and articles not listed below stay only in the cache (documentation-set rule: parts that hold no terms are not copied).
- An article's Definition quotes its paragraphs (①, ②) word for word, with only `**` added; the amendment notes that follow a sentence (`<개정 1995. 12. 29.>`) are history, not text, and are not quoted. The Source names the paragraphs quoted (제307조 제1항, 제2항) and links the readable article address; law.go.kr has no text anchors.

## 3. Statutes, chapters and articles

| No. | Folder | Statute | lsiSeq | Act | Chapter page | Articles | Read |
|---|---|---|---|---|---|---|---|
| 1 | `criminal-act/` | 형법 | 290185 | 법률 제22007호, 시행 2026. 10. 2. | `p2-ch33.md` 제2편 각칙 제33장 명예에 관한 죄 | 제307조(명예훼손), 제311조(모욕), 제312조(고소와 피해자의 의사) | all three written (2026-11-07) |
| 2 | `information-and-communications-network-act/` | 정보통신망 이용촉진 및 정보보호 등에 관한 법률 | 290001 | 법률 제21988호, 시행 2026. 10. 2. | `ch5.md` 제5장 정보통신망에서의 이용자 보호 등 | 제44조의7(불법정보 및 허위조작정보의 유통금지 등) | no |
| 2 | `information-and-communications-network-act/` | 정보통신망 이용촉진 및 정보보호 등에 관한 법률 | 290001 | 법률 제21988호, 시행 2026. 10. 2. | `ch10.md` 제10장 벌칙 | 제70조(벌칙) | no |
| 3 | `personal-information-protection-act/` | 개인정보 보호법 | 283839 | 법률 제21445호, 시행 2026. 9. 11. | `ch1.md` 제1장 총칙 | 제2조(정의) | no |
| 3 | `personal-information-protection-act/` | 개인정보 보호법 | 283839 | 법률 제21445호, 시행 2026. 9. 11. | `ch3.md` 제3장 개인정보의 처리 | 제23조(민감정보의 처리 제한) | no |
| 3 | `personal-information-protection-act/` | 개인정보 보호법 | 283839 | 법률 제21445호, 시행 2026. 9. 11. | `ch9.md` 제9장 보칙 | 제59조(금지행위) | no |
| 3 | `personal-information-protection-act/` | 개인정보 보호법 | 283839 | 법률 제21445호, 시행 2026. 9. 11. | `ch10.md` 제10장 벌칙 | 제71조(벌칙) | no |
| 4 | `criminal-procedure-act/` | 형사소송법 | 290189 | 법률 제22009호, 시행 2026. 10. 2. | `p2-ch1.md` 제2편 제1심 제1장 수사 | 제230조(고소기간) | no |
| 4 | `criminal-procedure-act/` | 형사소송법 | 290189 | 법률 제22009호, 시행 2026. 10. 2. | `p2-ch2.md` 제2편 제1심 제2장 공소 | 제249조(공소시효의 기간) | no |
| 5 | `state-public-officials-act/` | 국가공무원법 | 285489 | 법률 제21574호, 시행 2026. 10. 22. | `ch10.md` 제10장 징계 | 제78조(징계 사유) | no |
| 6 | `public-educational-officials-act/` | 교육공무원법 | 290751 | 법률 제21857호, 시행 2026. 10. 2. | `ch7.md` 제7장 신분보장ㆍ징계ㆍ소청 | 제51조(징계의결의 요구) | no |
| 7 | `official-information-disclosure-act/` | 공공기관의 정보공개에 관한 법률 | 251019 | 법률 제19408호, 시행 2023. 11. 17. | `ch1.md` 제1장 총칙 | 제2조(정의) | no |
| 7 | `official-information-disclosure-act/` | 공공기관의 정보공개에 관한 법률 | 251019 | 법률 제19408호, 시행 2023. 11. 17. | `ch2.md` 제2장 정보공개 청구권자와 공공기관의 의무 | 제5조(정보공개 청구권자) | no |
| 7 | `official-information-disclosure-act/` | 공공기관의 정보공개에 관한 법률 | 251019 | 법률 제19408호, 시행 2023. 11. 17. | `ch3.md` 제3장 정보공개의 절차 | 제9조(비공개 대상 정보) | no |

## 4. Status

- 2026-11-07: skeleton (pages, menu, Glossary rows with names and Chinese names; every definition pending). No figures and no Classification sections until the skeleton is confirmed. Definitions are quoted article by article from the cached pages, one at a time.
- The Social Sciences and Humanities Overview figure and the Sources figures (Sources, Government Agencies) do not show this entry and MOLEG yet; they are re-rendered with the first figures of this entry.
