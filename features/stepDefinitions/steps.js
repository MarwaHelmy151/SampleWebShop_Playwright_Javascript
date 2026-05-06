const {Then,Given} = require('@cucumber/cucumber')
const {expect } = require('@playwright/test');
const { POManager } = require('../../pageObject/POManager');
//const data = JSON.parse(JSON.stringify(require('../../utils/testdata.json')))

Given('Login to DemoWepShop with valid credentials {string} and {string}' , async function (email, password) {
    // valid login
    this.pommanager = new POManager(this.page)
    this.homepage = this.pommanager.getHomePage()
    await this.homepage.goTo()
    await this.homepage.openLoginPage()
    this.loginpage = this.pommanager.getLoginPage()
    await this.loginpage.validlogin(email,password)
})


Then('Verify that user {string} logged in successfully', async function (email) {
    await expect(this.loginpage.customerinfopage).toHaveText(email)
})


Then('Click on topmenu {string} and select product {string}', async function(productcategory,productname){
    this.homepage.selectfromtopMenu(productcategory)
    this.dashboardpage = this.pommanager.getDashboardPage()
    await this.dashboardpage.selectProduct(productname)
    
})


Then('send an Email to a friend {string}', async function(friendsmail) {
    await this.dashboardpage.emailFriend()
    const sendemailpage = this.pommanager.getsendemailpage()
    sendemailpage.sendEmailToFriend(friendsmail)
    console.log(await sendemailpage.successMessage.textContent())
    await expect(sendemailpage.successMessage).toHaveText("Your message has been sent.")
})


Then('User can contact us by filling in {string} and {string} and send enquiry', async function(fullname, enquiry){
    const contactuspage = this.pommanager.getconcatus()
    await this.homepage.openContactUs()
    await contactuspage.contactUs(fullname, enquiry)
    console.log(await contactuspage.successMessage.textContent())
    await expect(contactuspage.successMessage).toHaveText("Your enquiry has been successfully sent to the store owner.")

})

Then('Add product to wishlist successfully', {timeout: 100*1000} , async function() {
    // add product to wishlist
    await this.dashboardpage.addToWhishList()
    console.log(await this.dashboardpage.wishlist_successMessage.textContent())
    await expect(this.dashboardpage.wishlist_successMessage).toHaveText("The product has been added to your wishlist")
}) 

Then('Navigate to topMenu {string} and select productcategory {string} and select product {string} and add to cart', async function(topMenuCategory,productcategory,productname){
    // hover to topmenu and click on product category
    await this.homepage.hoverToTopMenu_SelectCategory(topMenuCategory, productcategory)
    const dashboardpage = this.pommanager.getDashboardPage()
    await dashboardpage.selectProduct(productname)
    await dashboardpage.addProductToCart()
    await expect(dashboardpage.productname).toHaveText(productname)
    await expect(dashboardpage.addedToCart_successMessage).toHaveText("The product has been added to your shopping cart")
    await this.homepage.openShoppingCartPage()
    this.shoppingcartpage = this.pommanager.getShoppingCartpage()
    await expect(this.shoppingcartpage.productname).toHaveText(productname)
    
})
 
Then('User can Checkout and add payment details {string}, {string}, {string}, {string}, {string}', async function(country, city, address, zip, phone){
    await this.shoppingcartpage.checkout()
    this.checkoutpage = this.pommanager.getcheckoutpage()
    await this.checkoutpage.addbillingaddress(country, city, address, zip, phone)
})

Then("Order is successfully processed", async function() {
    console.log(await this.checkoutpage.orderSuccessMessage.textContent())
    await expect(this.checkoutpage.orderSuccessMessage).toHaveText("Your order has been successfully processed!")

})

Then('User can print the receipt', async function() {
    const orderFromCheckout = await this.checkoutpage.getOrdernumber();
    const orderFromOrderInformation = await this.checkoutpage.navigateToOrderDetailsPage();
    expect(orderFromCheckout).toBe(orderFromOrderInformation)
    // Verify that PDF is downloaded successfully in Downloads file
    await this.checkoutpage.verifyPDFisDownloadedSuccessfully()
})


Then('Click on topmenu {string} and add prodcut {string} to cart', async function(topMenuCategory,productname){
    await this.homepage.selectfromtopMenu(topMenuCategory)
    const dashboardpage = this.pommanager.getDashboardPage()
    await dashboardpage.selectProduct(productname)
    await dashboardpage.addProductToCart()
    await expect(dashboardpage.productname).toHaveText(productname)
    await expect(dashboardpage.addedToCart_successMessage).toHaveText("The product has been added to your shopping cart")

})

Then('Verify that 2 items {string} and {string} are available in shopping cart', async function(productname,productname2){
    await this.homepage.openShoppingCartPage()
    this.shoppingcartpage = this.pommanager.getShoppingCartpage()
    await expect(this.shoppingcartpage.productname).toHaveCount(2);
    const items = await this.shoppingcartpage.productname.allInnerTexts()
    console.log(items)
    await expect(this.shoppingcartpage.productname).toHaveText([productname, productname2]);
})

Then('Remove product {string} from cart successfully', async function(productname){
    // Remove product
    await this.shoppingcartpage.removeProduct(productname)
})

Then('Verify that {string} is still available', async function(productname){
    // Verify that item is removed
    await expect(this.shoppingcartpage.productname).toHaveCount(1);
    await expect(this.shoppingcartpage.productname).toHaveText(productname);
})