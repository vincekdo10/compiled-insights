import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import path from "path";

const OUT_DIR = path.join(process.cwd(), "public", "screenshots", "annandfriends");
const VIEWPORT = { width: 1440, height: 900 };
const URL = "https://www.annandfriends.com/";

async function preparePageForScreenshot(page) {
  await page.evaluate(async () => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const step = Math.max(window.innerHeight * 0.75, 400);
    const maxScroll = document.body.scrollHeight;

    for (let y = 0; y <= maxScroll; y += step) {
      window.scrollTo(0, y);
      await delay(350);
    }

    window.scrollTo(0, 0);
    await delay(600);
  });

  await page.evaluate(async () => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    document.querySelectorAll("img").forEach((img) => {
      img.loading = "eager";
      if (img.dataset.src) img.src = img.dataset.src;
      if (img.dataset.srcset) img.srcset = img.dataset.srcset;
    });

    const images = Array.from(document.querySelectorAll("img"));
    await Promise.all(
      images.map(
        (img) =>
          new Promise((resolve) => {
            if (img.complete && img.naturalWidth > 0) {
              resolve();
              return;
            }
            img.addEventListener("load", resolve, { once: true });
            img.addEventListener("error", resolve, { once: true });
            setTimeout(resolve, 5000);
          })
      )
    );

    await delay(1500);
  });

  await page.waitForLoadState("networkidle", { timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(2000);
}

async function capture() {
  await mkdir(OUT_DIR, { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 2,
  });

  const page = await context.newPage();
  console.log(`Loading ${URL}`);

  try {
    await page.goto(URL, { waitUntil: "load", timeout: 120000 });
    await preparePageForScreenshot(page);

    const viewportPath = path.join(OUT_DIR, "site-viewport.png");
    await page.screenshot({ path: viewportPath, fullPage: false });
    console.log(`Saved ${viewportPath}`);

    const fullPath = path.join(OUT_DIR, "site-full.png");
    await page.screenshot({ path: fullPath, fullPage: true });
    console.log(`Saved ${fullPath}`);
  } catch (error) {
    console.error("Failed:", error.message);
  } finally {
    await page.close();
    await browser.close();
  }

  console.log("Done.");
}

capture();
