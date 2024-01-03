const { expect } = require('@playwright/test');
const elements = require("./obj").obj

class Page {

    async navigate() {
        await global.page.goto(process.env.WEB_URL,)
    }

    async enterUsername() {
        await elements.elemento1().waitFor({ status: 'visible', setTimeout: 20000 })
        await elements.elemento2().fill(process.env.WEB_USERNAME)
    }

    async enterPassword() {
        await elements.elemento3().fill(process.env.WEB_PASSWORD)
    }

    async clickOnLoginButton() {
        await elements.elemento4().click()
    }

    async verifyDashboardURL() {
        expect(await global.page.url()).toEqual('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    }
}

module.exports = new Page