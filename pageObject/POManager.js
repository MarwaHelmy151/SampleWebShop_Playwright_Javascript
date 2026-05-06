const { HomePage } = require('./HomePage')
const { RegisterPage } = require('./RegisterPage')
const { LoginPage } = require('./LoginPage')
const { DashboardPage } = require('./DashboardPage')
const { SendEmailPage } = require('./SendEmailPage')
const { ContactUsPage } = require('./ContactUsPage')
const { CustomerInfoPage } = require('./CustomerInfoPage')
const { ShoppingCartPage } = require("./ShoppingCartPage")
const { CheckoutPage } = require("./CheckoutPage")


class POManager {
    constructor(page) {
        this.page = page
        // store the object inside the manager
        this.homepage = new HomePage(page)
        this.registerpage = new RegisterPage(page)
        this.loginpage = new LoginPage(page)
        this.dashboardpage = new DashboardPage(page)
        this.sendemailpage = new SendEmailPage(page)
        this.contacuspage = new ContactUsPage(page)
        this.customerinfopage = new CustomerInfoPage(page)
        this.shoppingcartpage = new ShoppingCartPage(page)
        this.checkoutpage = new CheckoutPage(page)
    }

    // return an object
    getHomePage() {
        return this.homepage
    }

    getRegisterPage() {
        return this.registerpage
    }

    getLoginPage() {
        return this.loginpage
    }

    getDashboardPage() {
        return this.dashboardpage
    }

    getsendemailpage() {
        return this.sendemailpage
    }

    getconcatus() {
        return this.contacuspage
    }

    getcustomerInfopage() {
        return this.customerinfopage
    }

    getShoppingCartpage() {
        return this.shoppingcartpage
    }

    getcheckoutpage() {
        return this.checkoutpage
    }
}

module.exports = { POManager }