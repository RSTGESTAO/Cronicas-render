import asyncio, os, time
from pathlib import Path
from playwright.async_api import async_playwright

FPS = int(os.getenv("FPS", "24"))
DURATION = int(os.getenv("DURATION", "12"))
WIDTH = int(os.getenv("WIDTH", "720"))
HEIGHT = int(os.getenv("HEIGHT", "1280"))
OUTPUT = Path("frames")
OUTPUT.mkdir(exist_ok=True)

async def main():
    started = time.monotonic()
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=True,
            args=["--no-sandbox", "--enable-webgl", "--use-gl=angle", "--use-angle=swiftshader"],
        )
        page = await browser.new_page(
            viewport={"width": WIDTH, "height": HEIGHT}, device_scale_factor=1
        )
        page.on(
            "console",
            lambda msg: print("BROWSER:", msg.text) if msg.type == "error" else None,
        )
        await page.goto("http://127.0.0.1:8000/cena.html", wait_until="domcontentloaded")
        await page.wait_for_function("window.__ready===true", timeout=90000)
        for i in range(FPS * DURATION):
            await page.evaluate("(t)=>window.drawFrame(t)", i / FPS)
            await page.screenshot(path=str(OUTPUT / f"{i:05}.png"))
        await browser.close()
    elapsed = time.monotonic() - started
    print(f"BENCHMARK captura: {FPS * DURATION} quadros, {WIDTH}x{HEIGHT}, {FPS} fps, {elapsed:.2f} s")
    Path("captura_tempo.txt").write_text(
        f"Resolucao: {WIDTH}x{HEIGHT}\nFPS: {FPS}\nDuracao: {DURATION}s\n"
        f"Quadros: {FPS * DURATION}\nCaptura: {elapsed:.2f}s\n",
        encoding="utf-8",
    )

asyncio.run(main())
