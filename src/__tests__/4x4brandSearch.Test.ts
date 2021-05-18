import {northridgePage} from "../pageObjects/northridgePage";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities, promise } from "selenium-webdriver";
const driver:WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  describe("Brand page", ()=> {

    const page = new northridgePage(driver);
    afterAll(async () => {
      await page.driver.quit();
    });

test("Brands Naivgation Works", async () =>{
  await page.navigate();
  await page.clickOnBrandsButton();
  expect(await page.getHeaderTextBrand()).toContain("Shop by Brand"); 

  })
})