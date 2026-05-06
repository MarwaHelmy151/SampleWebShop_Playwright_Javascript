const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageObject/POManager');

test('User can register successfully', async ({ page }) => {

    const username = "Mariam"
    const lastname = "Tester"
    const email = "MariamTester2@gmail.com"
    const password = "123456"

    const pommanager = new POManager(page)

    // The returned object must be stored in a variable inside the test
    const homepage = pommanager.getHomePage()
    await homepage.goTo()
    await homepage.openRegisterPage()


    const registerpage = pommanager.getRegisterPage()
    registerpage.user_register(username, lastname, email, password)

    console.log(await (registerpage.message).textContent())
    expect(registerpage.message).toHaveText("Your registration completed")

})