import { test, expect } from '@playwright/test';
import { POManager } from '../../pageObject_TS/POManager'
const data = JSON.parse(JSON.stringify(require('../../utils/testdata.json')))

for (const user of data.logins) {
    test(`User can add product to WishList successfully ${user.email}`, async ({ page }) => {
        const testdata = data.testCases[1]

        // valid login
        const pommanager = new POManager(page)
        const homepage = pommanager.getHomePage()
        await homepage.goTo()
        await homepage.openLoginPage()
        const loginpage = pommanager.getLoginPage()
        await loginpage.validlogin(user.email, user.password)
        await expect(loginpage.customerinfopage).toHaveText(user.email)



        await homepage.selectfromtopMenu(testdata.productcategory)
        const dashboardpage = pommanager.getDashboardPage()
        await dashboardpage.selectProduct(testdata.productname)

        // add product to wishlist
        await dashboardpage.addToWhishList()
        console.log(await dashboardpage.wishlist_successMessage.textContent())
        await expect(dashboardpage.wishlist_successMessage).toHaveText("The product has been added to your wishlist")

    })
}
