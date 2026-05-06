class HomePage {
    constructor(page) {
        this.page = page
        this.registerLink = page.locator(".ico-register");
        this.loginLink = page.locator(".ico-login")
        this.shoppingCartLink = page.locator("#topcartlink a")
        this.contactusLink = page.locator("div[class='footer-menu-wrapper'] a[href='/contactus']")
        this.topMenuCategories = page.locator("ul[class='top-menu'] li a")
        this.topMenu = page.locator(".top-menu")

    }

    async goTo() {
        await this.page.goto("https://demowebshop.tricentis.com/");
    }

    async openRegisterPage() {
        await this.registerLink.click()
    }

    async openLoginPage() {
        await this.loginLink.click()
    }

    async openContactUs() {
        this.contactusLink.click()
    }

    async openShoppingCartPage() {
        this.shoppingCartLink.click()
    }

    // generic -- click on top menu
    async selectfromtopMenu(productcategory) {
        await this.topMenuCategories.first().waitFor()
        for (let i = 0; i < await this.topMenuCategories.count(); i++) {
            const text = (await this.topMenuCategories.nth(i).textContent()).trim()
            if (text === productcategory) {
                await this.topMenuCategories.nth(i).click()
                break;
            }
        }
    }

    // generic -- hover to top menu

    async hoverToTopMenu_SelectCategory(topMenuCategory, productcategory) {
        await this.topMenuCategories.first().waitFor()
        await this.topMenu.getByRole('link', { name: topMenuCategory }).hover()
        await this.topMenu.getByRole('link', { name: productcategory }).click()

    }
}


module.exports = { HomePage }