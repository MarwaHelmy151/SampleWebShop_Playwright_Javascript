const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageObject/POManager');
const data = JSON.parse(JSON.stringify(require('../utils/testdata.json')))

test('User can place order successfully', async ({ page }) => {
    const userlogin = data.logins[0]
    const testdata = data.testCases[2]

    // valid login
    const pommanager = new POManager(page)
    const homepage = pommanager.getHomePage()
    await homepage.goTo()
    await homepage.openLoginPage()
    const loginpage = pommanager.getLoginPage()
    await loginpage.validlogin(userlogin.email, userlogin.password)
    await expect(loginpage.customerinfopage).toHaveText(userlogin.email)

    // hover to topmenu and click on product category
    await homepage.hoverToTopMenu_SelectCategory(testdata.topMenuCategory, testdata.productcategory)

    const dashboardpage = pommanager.getDashboardPage()
    await dashboardpage.selectProduct(testdata.productname)
    await dashboardpage.addProductToCart()
    await expect(dashboardpage.productname).toHaveText(testdata.productname)
    await expect(dashboardpage.addedToCart_successMessage).toHaveText("The product has been added to your shopping cart")

    await homepage.openShoppingCartPage()

    const shoppingcartpage = pommanager.getShoppingCartpage()
    await expect(shoppingcartpage.productname).toHaveText(testdata.productname)
    await shoppingcartpage.checkout()

    const checkoutpage = pommanager.getcheckoutpage()
    await checkoutpage.addbillingaddress(testdata.country, testdata.city, testdata.address, testdata.zip, testdata.phone)
    console.log(await checkoutpage.orderSuccessMessage.textContent())
    await expect(checkoutpage.orderSuccessMessage).toHaveText("Your order has been successfully processed!")

    // Verify that order number is same in checkoutpage and in order Info
    const orderFromCheckout =
        await checkoutpage.getOrdernumber();

    const orderFromOrderInformation =
        await checkoutpage.navigateToOrderDetailsPage();

    expect(orderFromCheckout).toBe(orderFromOrderInformation)

    // Verify that PDF is downloaded successfully in Downloads file
    await checkoutpage.verifyPDFisDownloadedSuccessfully()


})