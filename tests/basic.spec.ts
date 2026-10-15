import { test } from '@playwright/test';

test('Open Amazon', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
});

test('check worker', async ({}, testInfo) => {
  console.log(`Worker: ${testInfo.workerIndex}, Parallel Index: ${testInfo.parallelIndex}`);
});
