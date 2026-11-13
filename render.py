import asyncio, time
from pathlib import Path
from playwright.async_api import async_playwright
FPS=12; DURATION=12; OUTPUT=Path('frames'); OUTPUT.mkdir(exist_ok=True)
async def main():
    start=time.monotonic()
    async with async_playwright() as p:
        browser=await p.chromium.launch(headless=True,args=['--no-sandbox','--enable-webgl','--use-gl=angle','--use-angle=swiftshader'])
        page=await browser.new_page(viewport={'width':540,'height':960},device_scale_factor=1)
        page.on('console',lambda msg: print('BROWSER:',msg.text) if msg.type=='error' else None)
        await page.goto('http://127.0.0.1:8000/cena.html',wait_until='domcontentloaded')
        await page.wait_for_function('window.__ready===true',timeout=90000)
        for i in range(FPS*DURATION):
            await page.evaluate('(t)=>window.drawFrame(t)',i/FPS)
            await page.screenshot(path=str(OUTPUT/f'{i:05}.png'))
        await browser.close()
    print('Quadros:',FPS*DURATION,'Tempo:',round(time.monotonic()-start,2),'s')
asyncio.run(main())
