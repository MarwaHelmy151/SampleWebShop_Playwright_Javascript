class ContactUsPage {
    constructor(page) {
        this.page = page
        this.fullname = page.locator("#FullName")
        this.enquiryTxt = page.locator("#Enquiry")
        this.submitBtn = page.locator("form div input[type='submit']")
        this.successMessage = page.locator(".result")
    }

    async contactUs(fullname, enquiry) {
        await this.fullname.fill(fullname);
        await this.enquiryTxt.fill(enquiry);
        await this.submitBtn.click();
    }
}

module.exports = { ContactUsPage }