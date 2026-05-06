const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageObject/POManager');
const data = JSON.parse(JSON.stringify(require('../utils/testdata.json')))

test('@smoke User can contact us successfully', async ({ page }) => {
    const userlogin = data.logins[0]
    const fullname = "Mariam Test"
    const enquiry = "This is for test"

    // valid login
    const pommanager = new POManager(page)
    const homepage = pommanager.getHomePage()
    await homepage.goTo()
    await homepage.openLoginPage()
    const loginpage = pommanager.getLoginPage()
    await loginpage.validlogin(userlogin.email, userlogin.password)
    await expect(loginpage.customerinfopage).toHaveText(userlogin.email)

    const contactuspage = pommanager.getconcatus()
    await homepage.openContactUs()
    await contactuspage.contactUs(fullname, enquiry)

    console.log(await contactuspage.successMessage.textContent())
    await expect(contactuspage.successMessage).toHaveText("Your enquiry has been successfully sent to the store owner.")

})
