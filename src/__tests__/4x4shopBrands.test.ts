import * as accountData from "./signInData.json"
import { northridgePage } from "./pageObjects/4x4pageObjects";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();


  describe("Northridge account login & product search", () => {

  const page = new northridgePage(driver);

 test("Search By Brands", async () => {
    await page.navigate();
    await page.shopbrandsButton();
    expect(await page.getresults()).toContain("Brands");
      })
 })