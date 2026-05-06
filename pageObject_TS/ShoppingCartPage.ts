import {Locator, Page } from '@playwright/test';


export class ShoppingCartPage {
    page: Page
    productname: Locator
    terms: Locator
    checkoutBTn: Locator
    cartRow: Locator
    updateShoppingBtn: Locator

    constructor(page: Page) {
        this.page = page
        this.productname = page.locator(".product-name");
        this.terms = page.locator("#termsofservice")
        this.checkoutBTn = page.getByRole('button', { name: "Checkout" })
        this.cartRow = page.locator('tr.cart-item-row')
        this.updateShoppingBtn = page.locator("input[name='updatecart']")
    }

    async checkout() {
        await this.terms.click()
        await this.checkoutBTn.click()
    }

    async removeProduct(productname: string) {
        const cartRow = this.cartRow.filter({ hasText: productname })
        await cartRow.locator('input[name="removefromcart"]').check()
        await this.updateShoppingBtn.click()
    }

}

module.exports = { ShoppingCartPage }