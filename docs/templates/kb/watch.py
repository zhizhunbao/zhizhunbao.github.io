"""Local preview with automatic rebuild: serve docs/_site and rebuild it whenever a source file under docs/ changes.

docfx 2.81 has no watch mode (`docfx --serve` builds once), so this polls the sources every second. After each build
it writes _site/kb-build.txt; kb.js, on localhost only, polls that file and reloads the page when it changes.
Run from the repo root (a full build takes about 10 s):
    python docs/templates/kb/watch.py [port]
"""
import functools
import http.server
import os
import subprocess
import sys
import threading
import time
from pathlib import Path

DOCS = Path(__file__).resolve().parents[2]
SITE = DOCS / "_site"
DOCFX = Path.home() / ".dotnet" / "tools" / "docfx.exe"
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080


def snapshot():
    """Modification time of every source file (the generated _site and docfx.build.json are left out)."""
    times = {}
    for root, dirs, files in os.walk(DOCS):
        dirs[:] = [d for d in dirs if d not in ("_site", "obj")]
        for f in files:
            if f != "docfx.build.json":
                p = os.path.join(root, f)
                times[p] = os.stat(p).st_mtime
    return times


def build():
    start = time.time()
    r = subprocess.run([str(DOCFX), str(DOCS / "docfx.json")], capture_output=True, text=True, encoding="utf-8",
                       errors="replace")
    tail = [line for line in r.stdout.splitlines() if "warning(s)" in line or "error(s)" in line]
    print(f"[{time.strftime('%H:%M:%S')}] built in {time.time() - start:.1f}s: {' '.join(s.strip() for s in tail)}",
          flush=True)
    if r.returncode != 0:
        print(r.stdout[-2000:], flush=True)
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
    build()
    threading.Thread(target=serve, daemon=True).start()
    print(f"serving http://localhost:{PORT}/ ; watching {DOCS}", flush=True)
    last = snapshot()
    while True:
        time.sleep(1)
        now = snapshot()
        if now != last:
            time.sleep(0.5)  # let an editor or script finish writing
            build()
            last = snapshot()
