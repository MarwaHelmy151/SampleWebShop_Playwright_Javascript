import {Locator, Page } from '@playwright/test';

export class RegisterPage {
    page: Page
    femaleRadioBtn: Locator
    firstname: Locator
    lastname: Locator
    email: Locator
    password: Locator
    confirmpassword: Locator
    registerBtn: Locator
    message: Locator

    constructor(page: Page) {
        this.page = page
        this.femaleRadioBtn = page.locator("#gender-female");
        this.firstname = page.locator("#FirstName");
        this.lastname = page.locator("#LastName")
        this.email = page.locator("#Email")
        this.password = page.locator("#Password")
        this.confirmpassword = page.locator("#ConfirmPassword")
        this.registerBtn = page.locator("#register-button")
        this.message = page.locator(".result")
    }

    async user_register(username: string, lastname: string, email: string, password: string) {
        await this.femaleRadioBtn.click();
        await this.firstname.fill(username)
        await this.lastname.fill(lastname)
        await this.email.fill(email)
        await this.password.fill(password)
        await this.confirmpassword.fill(password)
        this.registerBtn.click()

    }
}

module.exports = { RegisterPage }