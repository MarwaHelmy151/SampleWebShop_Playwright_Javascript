const { Before} = require("@cucumber/cucumber");
const { chromium } = require('playwright');


Before(async function () {
      
        const browser= await chromium.launch({headless:false});
        const context= await browser.newContext()
        this.page = await context.newPage();
        
})