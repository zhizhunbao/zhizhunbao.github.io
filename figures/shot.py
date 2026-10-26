import sys, pathlib
from playwright.sync_api import sync_playwright

src, out = pathlib.Path(sys.argv[1]).resolve(), sys.argv[2]
with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(device_scale_factor=2, viewport={"width": 1400, "height": 900})
    pg.goto(src.as_uri())
    pg.locator("#fig").screenshot(path=out)
    b.close()
