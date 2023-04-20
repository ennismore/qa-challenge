import { chromium, Browser, Page } from '@playwright/test';

export async function searchAmazon(productName: string): Promise<void> {
  let browser: Browser | undefined;
  let page: Page | undefined;

  try {
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    page = await context.newPage();

    await page.goto('https://www.amazon.com/');
    await page.type('#twotabsearchtextbox', productName);
    await page.click('#nav-search-submit-button');
    await page.waitForSelector('.s-result-list');
    await page.click('.s-result-list .s-result-item:nth-of-type(1) .a-link-normal.a-text-normal');
    await page.waitForSelector('#productTitle');
  } catch (error) {
    console.error(error);
  } finally {
    if (page) {
      await page.close();
    }
    if (browser) {
      await browser.close();
    }
  }
}
