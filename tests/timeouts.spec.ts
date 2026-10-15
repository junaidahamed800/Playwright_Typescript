import { test } from '@playwright/test';

test('show timeouts', async ({}, testInfo) => {
  console.log('Test timeout:', testInfo.timeout);
});