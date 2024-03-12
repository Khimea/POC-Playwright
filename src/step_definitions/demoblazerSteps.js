const { When, Then } = require('@cucumber/cucumber')
const  demoblaze = require('../pages/DemoblazePage')
When('Dirigirse a demoblaze website', async () => {
    await demoblaze.navigate()
});
When(/^Seleccionar producto (.*)$/, async function (product) {
    await demoblaze.clickProduct(product)
});
When(/^Añadir producto al carro$/, async function () {
    await demoblaze.addToCart()
});
When(/^Volver al (.*)$/, async function (home) {
    await demoblaze.clickHome(home)
});

When(/^Visualizar carrito$/, async function () {
    await demoblaze.visualize()
});
When(/^Crear orden de compra$/, async function () {
    await demoblaze.createOrdenBuy()
});
When(/^Completar formulario compra$/, async function () {
    await demoblaze.fillFormBuy()
});
When(/^Comprar orden$/, async function () {
    await demoblaze.completeBuy()
});
Then(/^Compra exitosa$/, async function () {
    await demoblaze.validateBuy()
});