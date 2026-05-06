import {Locator, Page } from '@playwright/test';

export class DashboardPage{
    page: Page
    productTitles: Locator
    addTocartBTn: Locator
    emailfriendBtn: Locator
    addToWishListBtn: Locator
    addedToCart_successMessage: Locator
    productname: Locator
    wishlist_successMessage: Locator

     constructor(page: Page) {
        this.page = page
        this.productTitles = page.locator(".product-title a")
        this.addTocartBTn = page.locator(".add-to-cart-button")
        this.emailfriendBtn = page.locator(".email-a-friend-button")
        this.addToWishListBtn = page.locator("#add-to-wishlist-button-14")
        this.addedToCart_successMessage = page.locator(".content")
        this.productname = page.locator("h1")
        this.wishlist_successMessage = page.locator(".content")

    }
    // generic
    async selectProduct(productname: string) {
        await this.productTitles.first().waitFor()
        await this.productTitles.filter({ hasText: productname }).click()

    }

    async addProductToCart() {
        await this.addTocartBTn.click();
    }

    async emailFriend() {
        await this.emailfriendBtn.click();
    }

    async addToWhishList() {
        await this.addToWishListBtn.click()
    }

    async addManyproducts() {
        for (let i = 0; i < await this.productTitles.count(); i++) {
            await this.page.waitForLoadState('networkidle');
            await this.productTitles.nth(i).click()
            await this.page.waitForLoadState('networkidle');
            if (await this.addTocartBTn.isVisible()) {
                await this.addTocartBTn.click()
            }
            await this.page.goBack()
        }
    }

}

module.exports = { DashboardPage }