// username & password were located through the getByRole method & not using getByLabel method because the input fields were not associated with a label element. 
// The getByRole method is more reliable in this case as it targets elements based on their role and accessible name, ensuring that the correct input fields are selected for filling in the username and password.  

import {test, expect} from '@playwright/test';

test('Login And Logout',async ({page}) => {

    const username = page.getByLabel('Username')
    const password = page.getByRole('textbox', { name: 'Password' })
    const LoginButton = page.getByRole('button', { name: 'Login' })
    const verifyUser = page.getByRole('heading', { name: 'Hi, practice!' })
    const successfulLogin = page.getByText('You logged into a secure area!')
    const LogoutButton = page.getByRole('link', { name: 'Logout' })

    await page.goto('https://practice.expandtesting.com/login')

    await username.fill('practice')
    await expect(username).toHaveValue('practice')
    await password.fill('SuperSecretPassword!')
    await LoginButton.click()
    await expect(verifyUser).toBeVisible()    
    await expect(successfulLogin).toBeVisible()
    await LogoutButton.click()

    // Add what happens after logout, like verifying the user is redirected to the login page or a logout confirmation message is displayed.

})