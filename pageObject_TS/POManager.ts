import {Locator, Page } from '@playwright/test';
import { HomePage } from '../pageObject_TS/HomePage';
import { RegisterPage } from '../pageObject_TS/RegisterPage';
import { LoginPage } from '../pageObject_TS/LoginPage';
import {DashboardPage} from '../pageObject_TS/DashboardPage'
import {SendEmailPage} from '../pageObject_TS/SendEmailPage'
import {ContactUsPage} from '../pageObject_TS/ContactUsPage'
import {CustomerInfoPage} from '../pageObject_TS/CustomerInfoPage'
import {ShoppingCartPage} from '../pageObject_TS/ShoppingCartPage'
import { CheckoutPage } from '../pageObject_TS/CheckoutPage';

export class POManager {
    page: Page
    homepage: HomePage
    registerpage: RegisterPage
    loginpage: LoginPage
    dashboardpage: DashboardPage
    sendemailpage: SendEmailPage
    contacuspage: ContactUsPage
    customerinfopage: CustomerInfoPage
    shoppingcartpage: ShoppingCartPage
    checkoutpage: CheckoutPage


    constructor(page: Page) {
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