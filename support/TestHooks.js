const {Before, AfterAll, After} = require('@cucumber/cucumber')
const page = require('@playwright/test')
let {setDefaultTimeout} = require('@cucumber/cucumber')
const utils = require("./utils");

const path = require('path');
setDefaultTimeout(60 * 15000)
const recordVideo = process.env.VIDEO || false ? true : false;
const headless = process.env.HEADLESS || false ? true : false;
require('dotenv').config({
    path: path.join(__dirname, '../.env'),
});
Before(async () => {
    let browser = await page.chromium.launch({headless: headless, ignoreHTTPSErrors: true})
    global.browser = browser
    const context = await browser.newContext({
        viewport: { width: 1920, height: 1080 },
        recordVideo: recordVideo ? { dir: './videos/' } : undefined

    })
    global.page = await context.newPage()
})

After(async (scenario) => {
    await utils.takeScreenshot(scenario);
  });

  
AfterAll(async () => {
    if (global.browser) {
        await global.browser.close();
    }
})
