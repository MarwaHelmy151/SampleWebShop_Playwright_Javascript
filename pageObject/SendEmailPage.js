class SendEmailPage {
    constructor(page) {
        this.page = page
        this.friendEmail = page.locator("#FriendEmail")
        this.sendEmailBtn = page.locator("form div input[type='submit']")
        this.successMessage = page.locator(".result")

    }

    async sendEmailToFriend(friendEmail) {
        this.friendEmail.fill(friendEmail);
        this.sendEmailBtn.click();
    }
}


module.exports = { SendEmailPage }