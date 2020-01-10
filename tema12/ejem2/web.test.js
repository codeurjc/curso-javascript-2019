const { Builder, By, Key, until } = require('selenium-webdriver');

test('Google shows search term in title', async () => {

    let driver = await new Builder().forBrowser('chrome').build();

    try {

        await driver.get('http://www.google.com/ncr');
        await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        await driver.wait(until.titleContains('webdriver'), 5000);
        
    } finally {
        await driver.quit();
    }
})