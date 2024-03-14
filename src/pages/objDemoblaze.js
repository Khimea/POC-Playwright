let demoblazeLocators = {
    Product :() => global.page.locator('.card-title'),
    addProductToCart :() => global.page.locator("#tbodyid > div.row > div > a"),
    homeNavBar :() => global.page.locator('.nav-item'),
    cartBtn :() => global.page.locator('#navbarExample > ul > li:nth-child(4)'),
    verOrderCompra :() => global.page.locator('#page-wrapper > div > div.col-lg-1 > button'),
    nameInput :() => global.page.locator('#name'),
    countryInput :() => global.page.locator('#country'),
    cityInput :() => global.page.locator('#city'),
    cardInput :() => global.page.locator('#card'),
    monthInput :() => global.page.locator('#month'),
    yearInput :() => global.page.locator('#year'),
    buyBtn :() => global.page.locator('#orderModal > div > div > div.modal-footer > button.btn.btn-primary'),
    validateBuyLbl :() => global.page.locator('body > div.sweet-alert.showSweetAlert.visible >h2')
}
module.exports =
    {
        demoblazeLocators,
    }