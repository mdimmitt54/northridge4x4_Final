import * as accountData from "./singInData.json"
import { northridgePage } from "./pageObjects/4x4pageObjects";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();


  describe("Northridge account login & product search", () => {

  const page = new northridgePage(driver);

  test("exsisting customer can sign in to thier account", async () => {
    await page.navigate();



  })
})
