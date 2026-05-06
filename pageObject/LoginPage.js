class LoginPage {
    constructor(page) {
        this.page = page
        this.email = page.locator("#Email")
        this.password = page.locator("#Password")
        this.loginBtn = page.locator(".login-button")
        this.customerinfopage = page.locator("div[class='header-links'] a[href='/customer/info']")
        this.logoutLink = page.getByRole("link", { name: 'Log out' })


    }

    async validlogin(email, password) {
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