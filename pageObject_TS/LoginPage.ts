import {Locator, Page } from '@playwright/test';

export class LoginPage{
    page : Page
    email: Locator
    password: Locator
    loginBtn: Locator
    customerinfopage: Locator
    logoutLink: Locator
 
    constructor(page:Page) {
        this.page = page
        this.email = page.locator("#Email")
        this.password = page.locator("#Password")
        this.loginBtn = page.locator(".login-button")
        this.customerinfopage = page.locator("div[class='header-links'] a[href='/customer/info']")
        this.logoutLink = page.getByRole("link", { name: 'Log out' })
    }

    async validlogin(email : string, password : string) {
        await this.email.fill(email)
        await this.password.fill(password)
        await this.loginBtn.click()
    }

    async openCustomerInfoPage() {
        await this.customerinfopage.click()
    }

    async logout() {
        await this.logoutLink.click()
    }
}

module.exports = { LoginPage }