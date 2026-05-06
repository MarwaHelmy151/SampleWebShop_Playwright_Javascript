import {expect, Locator, Page } from '@playwright/test';
//import fs from 'fs';
import path from 'path';

export class CheckoutPage{
    page : Page
    firstname: Locator
    selectAddressDDL: Locator
    countryList: Locator
    cityfield: Locator
    addressfield: Locator
    zipcode: Locator
    phonenumberfield: Locator
    billingcontinueBtn: Locator
    shippingcontinueBtn: Locator
    shippingmethodcontinueBtn :Locator
    paymentcontinueBtn: Locator
    paymentinfocontinueBtn: Locator
    confirmBtn: Locator
    orderSuccessMessage: Locator
    ordernumber_checkoutpage: Locator
    clickHereLink: Locator
    ordernumber_orderInformationpage: Locator
    
    constructor(page : Page) {
        this.page = page
        this.firstname = page.locator("#BillingNewAddress_FirstName")
        this.selectAddressDDL = page.locator("select[name='billing_address_id']")
        this.countryList = page.locator("#BillingNewAddress_CountryId")
        this.cityfield = page.locator("#BillingNewAddress_City")
        this.addressfield = page.locator("#BillingNewAddress_Address1")
        this.zipcode = page.locator("#BillingNewAddress_ZipPostalCode")
        this.phonenumberfield = page.locator("#BillingNewAddress_PhoneNumber")
        this.billingcontinueBtn = page.locator("#billing-buttons-container input")
        this.shippingcontinueBtn = page.locator("#shipping-buttons-container input.new-address-next-step-button")
        this.shippingmethodcontinueBtn = page.locator(".shipping-method-next-step-button")
        this.paymentcontinueBtn = page.locator(".payment-method-next-step-button")
        this.paymentinfocontinueBtn = page.locator(".payment-info-next-step-button")
        this.confirmBtn = page.locator(".confirm-order-next-step-button")
        this.orderSuccessMessage = page.locator("div.section.order-completed strong")
        this.ordernumber_checkoutpage = page.locator(".details li")
        this.clickHereLink = page.locator(".details li a")
        this.ordernumber_orderInformationpage = page.locator(".order-number strong")
    }

    async addbillingaddress(country: string, city: string, address: string, zip: string, phone: string) {
            await this.page.waitForLoadState('networkidle');
    
            if (await this.selectAddressDDL.isVisible()) {
                await this.selectAddressDDL.selectOption("New Address")
                await expect(this.firstname).toBeEnabled();
            }
            else {
                await expect(this.firstname).toBeEnabled();
            }
    
    
            await this.countryList.selectOption(country);
            await this.cityfield.fill(city);
            await this.addressfield.fill(address);
            await this.zipcode.fill(zip);
            await this.phonenumberfield.fill(phone);
            await this.billingcontinueBtn.click();
            await this.shippingcontinueBtn.click();
            await this.shippingmethodcontinueBtn.click();
            await this.paymentcontinueBtn.click();
            await this.paymentinfocontinueBtn.click();
            await this.confirmBtn.click();
        }
    
        async getOrdernumber() {
            await this.page.waitForLoadState('networkidle');
            const ordernumber = await this.ordernumber_checkoutpage.first().innerText()
            const ordernumber_checkoutpage = await ordernumber.split(": ")[1].trim()
            return ordernumber_checkoutpage
        }
    
        async navigateToOrderDetailsPage() {
            await this.clickHereLink.click()
            const ordernumber = await this.ordernumber_orderInformationpage.innerText()
            const ordernumber_orderInformationpage = ordernumber.split("#")[1].trim()
            return ordernumber_orderInformationpage
        }
    
        async verifyPDFisDownloadedSuccessfully() {
            const downloadDir = 'C:/Users/mahelmy/Downloads';
            const filePrefix = 'order_';
    
            const [download] = await Promise.all([
                this.page.waitForEvent('download'),
                this.page.click('.pdf-order-button')
            ]);
    
            // Save PDF manually
            const fileName = download.suggestedFilename();
            const filePath = path.join(downloadDir, fileName);
            await download.saveAs(filePath);
    
            //  Simple check
            if (fileName.startsWith(filePrefix)) {
                console.log(
                    'PDF is downloaded successfully, Latest downloaded PDF: ' + fileName
                );
            } else {
                console.log('No PDF found with prefix: ' + filePrefix);
            }
        }
}

module.exports = { CheckoutPage }