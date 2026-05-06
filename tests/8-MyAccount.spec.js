const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageObject/POManager');
const data = JSON.parse(JSON.stringify(require('../utils/testdata.json')))

test('@smoke User can navigate my account and select lists successfully', async ({ page }) => {
    const userlogin = data.logins[0]

    // valid login
    const pommanager = new POManager(page)
    const homepage = pommanager.getHomePage()
    await homepage.goTo()
    await homepage.openLoginPage()
    const loginpage = pommanager.getLoginPage()
    await loginpage.validlogin(userlogin.email, userlogin.password)
    await expect(loginpage.customerinfopage).toHaveText(userlogin.email)


    // navigate to customerinfo page
    await loginpage.openCustomerInfoPage()


    const customerinfopage = pommanager.getcustomerInfopage()
    await customerinfopage.selectlists()


})
