// playwright.config.js
// @ts-check
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  use: {
    // All requests we send go to this API endpoint.
    baseURL: 'https://pacific-thicket-29914.herokuapp.com/'}
};
module.exports = config;