"""Split DocFX's search index (_site/index.json) into parts under GitHub's 100 MB file limit.

Since 2026-11-19: the whole-site index reached 110 MB (every page's full text, 86% of it the College and University
Programs pages), GitHub refused the gh-pages push ("exceeds GitHub's file size limit of 100.00 MB") and the site
stopped publishing. Nothing is dropped or shortened (the user's decision: repeated words are useful too): the entries
are written unchanged, in DocFX's order, into index-1.json, index-2.json ... of at most PART_BYTES each, and index.json
becomes the list of parts, {"parts": ["index-1.json", ...]}, which public/kb.js reads before loading every part.

Run after each whole-site docfx build:  python docs/templates/kb/split_index.py <site folder>
"""
import json
import sys
from pathlib import Path

PART_BYTES = 40_000_000  # well under GitHub's 100 MB limit, so a part has room to grow


def split(site):
    index = site / "index.json"
    data = json.loads(index.read_text(encoding="utf-8"))
    if "parts" in data and isinstance(data["parts"], list):
        print("index.json is already split")
        return
    for old in site.glob("index-*.json"):
        old.unlink()
    parts, part, size = [], {}, 2
    for key, entry in data.items():
        item = len(json.dumps({key: entry}, ensure_ascii=False).encode("utf-8"))
        if part and size + item > PART_BYTES:
            parts.append(part)
            part, size = {}, 2
        part[key] = entry
        size += item
    if part:
        parts.append(part)
    names = []
    for i, p in enumerate(parts, 1):
        name = f"index-{i}.json"
        (site / name).write_text(json.dumps(p, ensure_ascii=False), encoding="utf-8")
        names.append(name)
    index.write_text(json.dumps({"parts": names}), encoding="utf-8")
    sizes = ", ".join(f"{n} {(site / n).stat().st_size / 1e6:.1f} MB" for n in names)
    print(f"index.json: {len(data)} pages split into {sizes}")


if __name__ == "__main__":
    split(Path(sys.argv[1]))
