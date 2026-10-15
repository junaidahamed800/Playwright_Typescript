import { test, expect } from '@playwright/test';

test('successful login to SauceDemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  await expect(page).toHaveTitle('Swag Labs');
  await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
  await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/\/inventory\.html$/);
  await expect(page.getByText('Products', { exact: true })).toBeVisible();
  await expect(page.locator('.inventory_item')).toHaveCount(6);
});
