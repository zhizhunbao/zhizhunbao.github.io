"""Local preview with automatic rebuild: serve _site (repo root), rebuild it when a source file under docs/ changes.

docfx 2.81 has no watch mode (`docfx --serve` builds once), so this polls the sources every second. After each build
it writes _site/kb-build.txt; kb.js, on localhost only, polls that file and reloads the page when it changes.
The preview builds into _site at the repo root, outside docs/: built into docs/_site (the GitHub Actions output) a
full build took 390 s instead of about 55 s (measured 2026-10-25, 4,300 pages).

Since 2026-11-07 a change inside one section is rebuilt alone (a section = the nearest folder with its own toc.yml,
such as docs/market): docfx builds that folder into _site_partial, and its files are copied into _site, so a change
costs seconds instead of a full build of 13,000 pages. Startup, and a change outside every section (docs/toc.yml,
docfx.json, templates/, a root page) still build the whole site. Until the next full build, the search index keeps
the previous full build's entries, and links from the section to other sections are rewritten from .md to .html.
Run it with start-knowledge-base.bat, or:
    python docs/templates/kb/watch.py [port]
"""
import functools
import http.server
import json
import os
import re
import shutil
import subprocess
import sys
import threading
import time
from pathlib import Path

DOCS = Path(__file__).resolve().parents[2]
SITE = DOCS.parent / "_site"
PARTIAL_SITE = DOCS.parent / "_site_partial"
BUILD_CONFIG = DOCS / "docfx.build.json"        # written by git_times.py
PARTIAL_CONFIG = DOCS / "docfx.partial.json"    # written here for a section build
GENERATED = {"docfx.build.json", "docfx.partial.json"}
DOCFX = Path.home() / ".dotnet" / "tools" / "docfx.exe"
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
MAX_SECTIONS = 3  # more sections changed at once: build the whole site


def snapshot():
    """Modification time of every source file (the generated _site and docfx config files are left out)."""
    times = {}
    for root, dirs, files in os.walk(DOCS):
        dirs[:] = [d for d in dirs if d not in ("_site", "obj")]
        for f in files:
            if f not in GENERATED:
                p = os.path.join(root, f)
                times[p] = os.stat(p).st_mtime
    return times


def changed_files(old, new):
    return {p for p in set(old) | set(new) if old.get(p) != new.get(p)}


def section_of(path):
    """Nearest folder below docs/ with its own toc.yml, as a path relative to docs/ ('market'); None = whole site."""
    rel = Path(path).relative_to(DOCS)
    if not rel.parts or rel.parts[0] == "templates":
        return None
    folder = (DOCS / rel).parent
    while folder != DOCS:
        if (folder / "toc.yml").is_file():
            return folder.relative_to(DOCS).as_posix()
        folder = folder.parent
    return None


def sections_to_build(changes):
    """The sections to rebuild, or None when the whole site must be built."""
    sections = set()
    for p in changes:
        s = section_of(p)
        if s is None:
            return None
        sections.add(s)
    # a section inside another changed section is covered by it
    sections = {s for s in sections if not any(s != o and s.startswith(o + "/") for o in sections)}
    return sections if 0 < len(sections) <= MAX_SECTIONS else None


def run_git_times():
    subprocess.run([sys.executable, str(Path(__file__).with_name("git_times.py"))], capture_output=True)


def run_docfx(config, output):
    # --disableGitFeatures: the "Last updated" times come from git_times.py, so docfx's own per-file git lookups only
    # cost time ("may have side effect on performance when the repo is large", docfx build CLI reference)
    return subprocess.run([str(DOCFX), str(config), "-o", str(output), "--disableGitFeatures"],
                          capture_output=True, text=True, encoding="utf-8", errors="replace")


def report(kind, start, r):
    tail = [line for line in r.stdout.splitlines() if "warning(s)" in line or "error(s)" in line]
    print(f"[{time.strftime('%H:%M:%S')}] {kind} built in {time.time() - start:.1f}s: "
          f"{' '.join(s.strip() for s in tail)}", flush=True)
    if r.returncode != 0:
        print(r.stdout[-2000:], flush=True)


def build():
    """Whole site: git_times.py first (docfx.build.json = docfx.json plus each page's "Last updated" time), then docfx."""
    print(f"[{time.strftime('%H:%M:%S')}] building the whole site ...", flush=True)
    start = time.time()
    run_git_times()
    report("whole site", start, run_docfx(BUILD_CONFIG, SITE))
    (SITE / "kb-build.txt").write_text(str(time.time()), encoding="utf-8")


MD_LINK = re.compile(r'href="(?![a-z]+:|#|/)([^"#]*?)\.md(#[^"]*)?"')


def build_sections(sections):
    """Only the given sections: build them into _site_partial, then copy their folders into _site."""
    names = ", ".join(sorted(sections))
    print(f"[{time.strftime('%H:%M:%S')}] building {names} ...", flush=True)
    start = time.time()
    run_git_times()
    config = json.loads(BUILD_CONFIG.read_text(encoding="utf-8"))
    b = config["build"]
    content_excludes = b["content"][0].get("exclude", [])
    b["content"] = [{"files": [f"{s}/**/*.{{md,yml}}" for s in sorted(sections)], "exclude": content_excludes}]
    b["resource"] = [{"files": [f"{s}/**/{d}/**" for s in sorted(sections) for d in ("images", "media")]
                               + [f"{s}/**/quiz/*.json" for s in sorted(sections)]}]
    b.pop("sitemap", None)
    PARTIAL_CONFIG.write_text(json.dumps(config, ensure_ascii=False, indent=2), encoding="utf-8")
    if PARTIAL_SITE.exists():
        shutil.rmtree(PARTIAL_SITE)
    r = run_docfx(PARTIAL_CONFIG, PARTIAL_SITE)
    copied = 0
    for s in sections:
        src = PARTIAL_SITE / s
        if not src.is_dir():
            continue
        for f in src.rglob("*"):
            if f.is_dir():
                continue
            dst = SITE / s / f.relative_to(src)
            dst.parent.mkdir(parents=True, exist_ok=True)
            if f.suffix == ".html":
                # links to pages outside the built sections stay as .md (docfx cannot resolve them): make them .html
                text = MD_LINK.sub(lambda m: f'href="{m.group(1)}.html{m.group(2) or ""}"',
                                   f.read_text(encoding="utf-8"))
                dst.write_text(text, encoding="utf-8")
            else:
                shutil.copyfile(f, dst)
            copied += 1
    report(f"{names} ({copied} files)", start, r)
    (SITE / "kb-build.txt").write_text(str(time.time()), encoding="utf-8")


class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


def serve():
    handler = functools.partial(Quiet, directory=str(SITE))
    http.server.ThreadingHTTPServer(("localhost", PORT), handler).serve_forever()


if __name__ == "__main__":
    SITE.mkdir(exist_ok=True)
    # serve at once: the last build stays viewable while the startup build runs
    threading.Thread(target=serve, daemon=True).start()
    print(f"serving http://localhost:{PORT}/ ; watching {DOCS}", flush=True)
    last = snapshot()
    build()
    while True:
        time.sleep(1)
        now = snapshot()
        if now != last:
            time.sleep(0.5)  # let an editor or script finish writing
            now = snapshot()  # taken before the build, so a save during the build triggers the next one
            sections = sections_to_build(changed_files(last, now))
            last = now
            if sections:
                build_sections(sections)
            else:
                build()
