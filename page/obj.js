
let obj = {
    elemento1 :() => global.page.locator("[name='username']"),
    elemento2 :() => global.page.locator("[name='username']"),
    elemento3 :() => global.page.locator('[placeholder="Password"]'),
    elemento4 :() => global.page.getByRole('button', { text: 'Login' })
    }
    
    module.exports =
    {
        obj,
    }