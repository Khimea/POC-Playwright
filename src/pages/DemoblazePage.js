const {expect} = require('@playwright/test');
const {test} = require("playwright/test");
const {waitForDialog} = require('@playwright/test');
const assert = require('node:assert').strict


const elements = require("./objDemoblaze").demoblazeLocators


class PageDemoblaze {
    async navigate() {
        await global.page.goto(process.env.WEB_URL,)
    }

    clickProduct = async (productName) => {
        await elements.Product().filter({hasText: productName}).click()
    };

    async addToCart() {
        await elements.addProductToCart().click();
        const dialog = await waitForDialog;
        if (dialog && !dialog.handled()) {
            await dialog.accept();
        }
    }

    clickHome = async (homeName) => {
        await elements.homeNavBar().filter({hasText: homeName}).click()
    };

    async visualize() {
        await elements.cartBtn().click()
    }

    async createOrdenBuy() {
        await elements.verOrderCompra().click()
    }

    async fillFormBuy() {

        await page.waitForURL('**/cart.html');
        await elements.nameInput().isVisible()
        await elements.nameInput().fill('Test')
        await elements.countryInput().fill('Test');
        await elements.cityInput().fill('test');
        await elements.cardInput().fill('1234 1234 1234 1234');
        await elements.monthInput().fill('11');
        await elements.yearInput().fill('2028');
    }

    async completeBuy() {
        await elements.buyBtn().click()
    }

    async validateBuy() {
        expect(await this.getText()).toEqual('Thank you for your purchase!')
    }

    async getText() {
        return await elements.validateBuyLbl().textContent()
    }
}

module.exports = new PageDemoblaze