const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageObject/POManager');
const data = JSON.parse(JSON.stringify(require('../utils/testdata.json')))

test('User can add many products to cart', async ({ page }) => {
    const userlogin = data.logins[1]
    const testdata = data.testCases[0]

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
    await dashboardpage.addManyproducts()

    homepage.openShoppingCartPage()
    const shoppingcartpage = pommanager.getShoppingCartpage()
    await expect(shoppingcartpage.productname).toHaveCount(4);
    console.log(await shoppingcartpage.productname.allTextContents())

})