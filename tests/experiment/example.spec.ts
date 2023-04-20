import { test, expect } from '@playwright/test';

test('can visit homepage', async ({ page }) => {
  await page.goto('https://amazon.co.uk');
});
