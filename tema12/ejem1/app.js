const { Builder, By, Key, until } = require('selenium-webdriver');

async function sleep(){
    return new Promise(resolve=> setTimeout(resolve, 2000))
}

async function browse() {

    let driver = await new Builder().forBrowser('chrome').build();
    try {

        await driver.get('http://www.google.com/ncr');

        await sleep();

        await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);

        await sleep();

        await driver.wait(until.titleContains('webdriver'), 5000);
        console.log("Google works as expected");

    } catch(e){
        
        console.log("Google does not show search item in the title");

    } finally {
        await driver.quit();
    }
}

browse();