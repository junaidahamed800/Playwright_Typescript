// username & password were located through the getByRole method & not using getByLabel method because the input fields were not associated with a label element. 
// The getByRole method is more reliable in this case as it targets elements based on their role and accessible name, ensuring that the correct input fields are selected for filling in the username and password.  

import {test} from '@playwright/test';

test('Login And Logout', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
})