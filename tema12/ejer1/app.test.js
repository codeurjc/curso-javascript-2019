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

    let inputText = 'webdriver';

    await driver.get('http://localhost:8080/');
    await driver.findElement(By.tagName('input')).sendKeys(inputText);
    await driver.findElement(By.tagName('button')).click();
    let text = await driver.findElement(By.tagName('li')).getText()

    expect(text).toBe(inputText);

})