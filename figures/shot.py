import io, sys, pathlib
from PIL import Image
from playwright.sync_api import sync_playwright

src, out = pathlib.Path(sys.argv[1]).resolve(), sys.argv[2]
SLICE = 2000  # a tall figure is shot in slices this high and stitched, since Chromium leaves blank tiles in one huge shot
with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(device_scale_factor=2, viewport={"width": 1400, "height": 900})
    pg.goto(src.as_uri())
    box = pg.locator("#fig").bounding_box()
    if box["width"] <= 1400 and box["height"] <= 900:
        pg.locator("#fig").screenshot(path=out)
    else:
        # past 4000 px the figure is shot at scale 1, so the image stays light enough to load
        scale = 1 if max(box["width"], box["height"]) > 4000 else 2
        assert (scale == 1) == out.endswith("@1x.png"), "a figure past 4000 px is shot at scale 1 and named *@1x.png (kb.js shows it at full size)"
        pg.close()
        pg = b.new_page(device_scale_factor=scale, viewport={"width": max(1400, int(box["width"]) + 10), "height": SLICE})
        pg.goto(src.as_uri())
        box = pg.locator("#fig").bounding_box()
        img = Image.new("RGB", (round(box["width"] * scale), round(box["height"] * scale)), "white")
        top = 0
        while top < box["height"]:
            h = min(SLICE, box["height"] - top)
            pg.evaluate(f"window.scrollTo(0, {box['y'] + top})")
            y = pg.evaluate("window.scrollY")
            shot = pg.screenshot(clip={"x": box["x"], "y": box["y"] + top - y, "width": box["width"], "height": h})
            img.paste(Image.open(io.BytesIO(shot)), (0, round(top * scale)))
            top += h
        img.save(out, optimize=True)
    b.close()
