"""Write docs/docfx.build.json: docfx.json plus each Markdown page's last-change time as file metadata `kbUpdated`.

The layout shows it as "Last updated on MM/DD/YYYY HH:MM:SS" (user, 2026-10-19: "加上时分秒").
Time = the page's last git commit (committer time with its offset); a page with uncommitted changes uses the file's
modification time instead, so a local preview shows the edit. ms.date stays the fallback.
Run from the repo root, then build with the generated file:
    python docs/templates/kb/git_times.py
    docfx docs/docfx.build.json
GitHub Actions needs the full history (actions/checkout with fetch-depth: 0).
"""
import json
import subprocess
from datetime import datetime
from pathlib import Path

DOCS = Path(__file__).resolve().parents[2]
ROOT = DOCS.parent


def git(*args):
    return subprocess.run(["git", *args], cwd=ROOT, capture_output=True, text=True, encoding="utf-8", check=True).stdout


times = {}
for block in git("log", "--format=@%cI", "--name-only", "--", "docs").split("@")[1:]:  # newest first
    when, *files = block.strip().splitlines()
    for f in files:
        if f.endswith(".md") and f.startswith("docs/"):
            times.setdefault(f[len("docs/"):], when)
# every new file listed on its own (a plain status shows a new folder as one line, so its pages had no time); for a
# rename "old -> new", the new path
dirty = {line[3:].split(" -> ")[-1].strip().strip('"') for line in git("status", "--porcelain", "--untracked-files=all", "--", "docs").splitlines()}
for f in dirty:
    p = ROOT / f
    if f.endswith(".md") and p.is_file():
        times[f[len("docs/"):]] = datetime.fromtimestamp(p.stat().st_mtime).astimezone().isoformat(timespec="seconds")

config = json.loads((DOCS / "docfx.json").read_text(encoding="utf-8"))
# "2026-10-19 18:47:36-04:00": a space instead of "T", because docfx turns ISO strings with "T" into dates, which the
# template then cannot read as text (a space is still a valid HTML datetime value)
config["build"].setdefault("fileMetadata", {})["kbUpdated"] = {k: v.replace("T", " ", 1) for k, v in sorted(times.items())}
(DOCS / "docfx.build.json").write_text(json.dumps(config, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"docfx.build.json: {len(times)} page times")
