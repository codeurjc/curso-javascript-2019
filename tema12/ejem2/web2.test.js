const { Builder, By, Key, until } = require('selenium-webdriver');

let driver;

beforeEach(async () => {
    driver = await new Builder().forBrowser('chrome').build();
})

afterEach(async () => {
    if (driver) {
        await driver.quit();
    }
});

test('Google shows search term in title', async () => {

    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleContains('webdriver'), 5000);

})