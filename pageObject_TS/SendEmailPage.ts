import {Locator, Page } from '@playwright/test';

export class SendEmailPage {
    page: Page
    friendEmail: Locator
    sendEmailBtn: Locator
    successMessage: Locator

    constructor(page: Page) {
        this.page = page
        this.friendEmail = page.locator("#FriendEmail")
        this.sendEmailBtn = page.locator("form div input[type='submit']")
        this.successMessage = page.locator(".result")

    }

    async sendEmailToFriend(friendEmail: string) {
        this.friendEmail.fill(friendEmail);
        this.sendEmailBtn.click();
    }

}

module.exports = { SendEmailPage }