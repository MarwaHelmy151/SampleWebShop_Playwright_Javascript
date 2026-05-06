const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageObject/POManager');
const data = JSON.parse(JSON.stringify(require('../utils/testdata.json')))

test('User can remove product from cart successfully', async ({ page }) => {
    const userlogin = data.logins[0]
    const testdata = data.testCases[3]

    // valid login
    const pommanager = new POManager(page)
    const homepage = pommanager.getHomePage()
    await homepage.goTo()
    await homepage.openLoginPage()
    const loginpage = pommanager.getLoginPage()
    await loginpage.validlogin(userlogin.email, userlogin.password)
    await expect(loginpage.customerinfopage).toHaveText(userlogin.email)

    // add first product
    await homepage.selectfromtopMenu(testdata.topMenuCategory)
    const dashboardpage = pommanager.getDashboardPage()
    await dashboardpage.selectProduct(testdata.productname)
    await dashboardpage.addProductToCart()
    await expect(dashboardpage.productname).toHaveText(testdata.productname)
    await expect(dashboardpage.addedToCart_successMessage).toHaveText("The product has been added to your shopping cart")

    // add second product
    await homepage.selectfromtopMenu(testdata.topMenuCategory2)
    await dashboardpage.selectProduct(testdata.productname2)
    await dashboardpage.addProductToCart()
    await expect(dashboardpage.productname).toHaveText(testdata.productname2)
    await expect(dashboardpage.addedToCart_successMessage).toHaveText("The product has been added to your shopping cart")

    // navigate to shopping cart
    await homepage.openShoppingCartPage()
    const shoppingcartpage = pommanager.getShoppingCartpage()
    await expect(shoppingcartpage.productname).toHaveCount(2);
    const items = await shoppingcartpage.productname.allInnerTexts()
    console.log(items)
    await expect(shoppingcartpage.productname).toHaveText([testdata.productname, testdata.productname2]);


    // Remove product
    await shoppingcartpage.removeProduct(testdata.productname2)

    // Verify that item is removed
    await expect(shoppingcartpage.productname).toHaveCount(1);
    await expect(shoppingcartpage.productname).toHaveText(testdata.productname);

})

