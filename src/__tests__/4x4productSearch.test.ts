import { northridgePage } from "../pageObjects/4x4pageObjects";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities, Browser } from "selenium-webdriver";
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  const page = new northridgePage(driver);

test("search", async () => {
    await page.navigate();
})

test("use search bar to search for products", async () => {
  await page.search("Rigid 360 Lights Red");
  expect(await page.getresults()).toContain("Rigid 360 Lights Red")
  await driver.quit()
});
test("close pop up", async () => {
  await page.closePopup()
})

test ("select a product", async () => {
   await page.selectProduct();
   expect(await page.getresults()).toContain("off road lights")
   await driver.quit()
})



