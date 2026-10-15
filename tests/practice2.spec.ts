import {test, expect} from '@playwright/test'

test('Repeated Add to cart',async ({page}) => {

    const username = page.locator('[data-test="username"]')
    const password = page.locator('[data-test="password"]')
    const loginButton = page.locator('[data-test="login-button"]')
    const openMenu = page.getByRole('button', { name: 'Open Menu' })
    const logoutButton = page.locator('[data-test="logout-sidebar-link"]')
    const goToCart = page.locator('[data-test="shopping-cart-link"]')

    await page.goto('https://www.saucedemo.com')

    /* Login & Verify URL & Heading*/

    await username.fill('standard_user')
    await expect(username).toHaveValue('standard_user')
    await password.fill('secret_sauce')
    await loginButton.click()
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await expect(page.locator('[data-test="title"]')).toHaveText('Products')

    /* Add item to cart & Verify the item in Cart*/
    
    await expect(page.locator('[data-test="item-5-title-link"]')).toHaveText('Sauce Labs Fleece Jacket')
    await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
    await expect(page.locator('[data-test="remove-sauce-labs-fleece-jacket"]')).toHaveText('Remove')
    await goToCart.click()
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html')
    await expect(page.locator('[data-test="title"]')).toHaveText('Your Cart')
    await expect(page.locator('[data-test="item-5-title-link"]')).toHaveText('Sauce Labs Fleece Jacket')

    /* go to Menu & Logout*/

    await openMenu.click()
    await expect(logoutButton).toBeVisible()
    await logoutButton.click()
})