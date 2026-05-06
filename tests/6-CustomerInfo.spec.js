const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageObject/POManager');

test('User can change password successfully', async ({ page }) => {
    const email = "MariamTester@gmail.com"
    const password = "12345678"
    const newPassword = "123456"

    // valid login
    const pommanager = new POManager(page)
    const homepage = pommanager.getHomePage()
    await homepage.goTo()
    await homepage.openLoginPage()
    const loginpage = pommanager.getLoginPage()
    await loginpage.validlogin(email, password)
    await expect(loginpage.customerinfopage).toHaveText(email)


    // navigate to customerinfo page
    await loginpage.openCustomerInfoPage()

    // Change password
    const customerinfopage = pommanager.getcustomerInfopage()
    customerinfopage.changePassword(password, newPassword)
    await expect(customerinfopage.successMessage).toHaveText("Password was changed")
    await loginpage.logout();

    // Login again successfully with new credentials
    await homepage.openLoginPage()
    await loginpage.validlogin(email, newPassword)
    await expect(loginpage.customerinfopage).toHaveText(email)

})