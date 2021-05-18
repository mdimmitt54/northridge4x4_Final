import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
    WebElement,
  } from "selenium-webdriver";
import { Driver } from "selenium-webdriver/chrome";

const chromedriver = require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

test('Northridge site', async () => {
    await (await driver).get('https://www.northridge4x4.com/')

})

test('Northridge searchBar', async () => {
    let searchBar = await (await driver).findElement(By.css('input[name="search-box"]'))
    await searchBar.clear()
    await searchBar.sendKeys('Lift Kits\n')


})