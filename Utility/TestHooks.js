const { Before, AfterAll } = require('@cucumber/cucumber')
const page = require('@playwright/test')
let { setDefaultTimeout } = require('@cucumber/cucumber')
const path = require('path');
setDefaultTimeout(60 * 15000)

require('dotenv').config({
    path: path.join(__dirname, '../.env'),
});
Before(async () => {
  let browser = await page.chromium.launch({ headless: false })
  global.browser = browser
  const context = await browser.newContext()
  global.page = await context.newPage()
})

AfterAll(async () => {
  await global.browser.close()
})