import { expect, test } from '@playwright/test';

test('Verify Page Title', async ({ page }) => {
  await page.setContent('<title>Test page</title>');
  await expect(page).toHaveTitle('Test page');
});