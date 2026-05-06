import { test, expect } from '@playwright/test';
import { POManager } from '../../pageObject_TS/POManager'
const data = JSON.parse(JSON.stringify(require('../../utils/testdata.json')))

test('User can send E-Mail successfully', async ({ page }) => {
    const userlogin = data.logins[0]
    const testdata = data.testCases[0]
    const friendsmail = "Test10@gmail.com";

    // valid login
    const pommanager = new POManager(page)
    const homepage = pommanager.getHomePage()
    await homepage.goTo()
    await homepage.openLoginPage()
    const loginpage = pommanager.getLoginPage()
    await loginpage.validlogin(userlogin.email, userlogin.password)
    await expect(loginpage.customerinfopage).toHaveText(userlogin.email)


    // select from topMenu
    homepage.selectfromtopMenu(testdata.productcategory)

    const dashboardpage = pommanager.getDashboardPage()
    await dashboardpage.selectProduct(testdata.productname)
    await dashboardpage.emailFriend()


    const sendemailpage = pommanager.getsendemailpage()
    sendemailpage.sendEmailToFriend(friendsmail)
    console.log(await sendemailpage.successMessage.textContent())
    await expect(sendemailpage.successMessage).toHaveText("Your message has been sent.")

})