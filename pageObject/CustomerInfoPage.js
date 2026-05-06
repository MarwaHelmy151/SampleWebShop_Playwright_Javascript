const { expect } = require('@playwright/test');
class CustomerInfoPage {
    constructor(page) {
        this.page = page
        this.changePasswordLink = page.getByRole("link", { name: 'Change password' })
        this.oldPassword = page.getByLabel('Old password:')
        this.newPassword = page.getByLabel('New password:')
        this.confirmPassword = page.getByLabel('Confirm password:')
        this.changePasswordBTn = page.locator(".change-password-button")
        this.successMessage = page.locator('.result')
        this.accountlists = page.locator(".list li a")
        this.blockname = page.locator(".page-title h1")
    }


    async changePassword(password, newPassword) {
        await this.changePasswordLink.click();
        await this.oldPassword.fill(password);
        await this.newPassword.fill(newPassword);
        await this.confirmPassword.fill(newPassword);
        await this.changePasswordBTn.click();

    }

    async selectlists() {
        for (let i = 0; i < await this.accountlists.count(); i++) {
            await this.accountlists.nth(i).click()
            const rawText = await this.blockname.textContent();
            const text = await rawText.split("-")[1].trim()
            console.log(text)
            await expect(this.accountlists.nth(i)).toHaveText(text)
        }
    }
}

module.exports = { CustomerInfoPage }