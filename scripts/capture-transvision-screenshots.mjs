import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import path from "path";

const OUT_DIR = path.join(process.cwd(), "public", "screenshots", "transvision");
const VIEWPORT = { width: 1440, height: 900 };

const pages = [
  {
    name: "before",
    url: "https://web.archive.org/web/20240722122048/https://www.transvisionpc.com/",
  },
  {
    name: "after",
    url: "https://www.transvisionpc.com/",
  },
];

async function preparePageForScreenshot(page) {
  // Scroll the full page to trigger lazy-loaded images and sections
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

  // Force eager loading and hydrate common lazy-load patterns
  await page.evaluate(async () => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    document.querySelectorAll("img").forEach((img) => {
      img.loading = "eager";
      if (img.dataset.src) img.src = img.dataset.src;
      if (img.dataset.srcset) img.srcset = img.dataset.srcset;
    });

    document.querySelectorAll("source[data-srcset]").forEach((source) => {
      source.srcset = source.dataset.srcset;
    });

    document.querySelectorAll("[data-background-image]").forEach((el) => {
      el.style.backgroundImage = `url(${el.dataset.backgroundImage})`;
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

  for (const pageConfig of pages) {
    const page = await context.newPage();
    console.log(`Loading ${pageConfig.name}: ${pageConfig.url}`);

    try {
      await page.goto(pageConfig.url, {
        waitUntil: "load",
        timeout: 120000,
      });

      if (pageConfig.name === "before") {
        await page.addStyleTag({
          content: `
            #wm-ipp-base, #wm-ipp-print, .wb-autocomplete-suggestions,
            #donato, #wm-toolbar, #wm-ipp {
              display: none !important;
            }
            body { margin-top: 0 !important; padding-top: 0 !important; }
          `,
        });
        await page.waitForTimeout(2000);
      }

      await preparePageForScreenshot(page);

      const viewportPath = path.join(OUT_DIR, `${pageConfig.name}-viewport.png`);
      await page.screenshot({ path: viewportPath, fullPage: false });
      console.log(`Saved ${viewportPath}`);

      const fullPath = path.join(OUT_DIR, `${pageConfig.name}-full.png`);
      await page.screenshot({ path: fullPath, fullPage: true });
      console.log(`Saved ${fullPath}`);
    } catch (error) {
      console.error(`Failed ${pageConfig.name}:`, error.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log("Done.");
}

capture();
