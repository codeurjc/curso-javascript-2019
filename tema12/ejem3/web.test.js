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

test('Ad is created and shown', async () => {

    //Given
    await driver.get("http://localhost:" + this.port + "/");

    //When
    var newTitle = "MessageTitle";
    var newBody = "MessageBody";

    await driver.findElement(By.id("title-input")).sendKeys(newTitle);
    await driver.findElement(By.id("body-input")).sendKeys(newBody);

    await driver.findElement(By.id("submit")).click();

    //Then
    var title = await driver.findElement(By.id("title")).getText();
    var body = await driver.findElement(By.id("body")).getText();

    expect(title).toBe(newTitle);
    expect(body).toBe(newBody);

})