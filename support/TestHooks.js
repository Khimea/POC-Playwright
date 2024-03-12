const {Before, AfterAll} = require('@cucumber/cucumber')
const page = require('@playwright/test')
let {setDefaultTimeout} = require('@cucumber/cucumber')
const path = require('path');
setDefaultTimeout(60 * 15000)
const isHeadless = process.env.HEADLESS;
const headless = isHeadless ? true : false;
require('dotenv').config({
    path: path.join(__dirname, '../.env'),
});
Before(async () => {
    let browser = await page.chromium.launch({headless: headless|| false, ignoreHTTPSErrors: true})
    global.browser = browser
    const context = await browser.newContext({
        viewport: { width: 1920, height: 1080 } // Maximizing screen by setting viewport size
    })
    global.page = await context.newPage()
})

AfterAll(async () => {
    if (global.browser) {
        await global.browser.close();
    }
})
