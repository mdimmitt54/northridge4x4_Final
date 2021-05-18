import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
    WebElement,
  } from "selenium-webdriver";
import { Driver } from "selenium-webdriver/chrome";
import {northridgePage} from '../pageObjects/northridgePage'

const chromedriver = require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
const myPage = new northridgePage( driver,'https://www.northridge4x4.com/')

}
test('Northridge searchBar', async () => {
  let searchBar = await (await driver).findElement(By.css('input[name="search-box"]'))
  await searchBar.clear()
  await searchBar.sendKeys('Lift Kits\n')

})