const page = require('@playwright/test')
const headless = process.env.HEADLESS === 'false' ? false : true;
const recordVideo = process.env.VIDEO === 'false' ? false : true;

const getBrowser = async () => {
    let browserType = process.env.BROWSER_TYPE || 'chromium';
    let launchOptions = { headless: headless, ignoreHTTPSErrors: true };
    if (!page[browserType] || typeof page[browserType].launch !== 'function') {
        throw new Error(`Tipo de navegador no compatible: ${browserType}`);
    }
    return await page[browserType].launch(launchOptions);
};

const configureContext = async (browser) => {
    let contextOptions = {
        viewport: { width: 1920, height: 1080 }
    };
    if (recordVideo) {
        contextOptions.recordVideo = { dir: './videos/' };
    }
    
    let context = await browser.newContext(contextOptions);
    global.page = await context.newPage();
};


module.exports = {
    getBrowser,
    configureContext
};
