import * as employeeData from "./objectsPage/singInData.json"
import { NorthridgePage } from "./objectsPage/northridgeObjects"
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";
const driver:WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();


describe("Chewy page tests suites", ()=> {

    const page = new NorthridgePage(driver);
    beforeEach(async () => {
      await page.navigate();
    });
    afterAll(async () => {
      await page.driver.quit();
    });
    
    test("siginingin returning customer", async () =>{
      await page.navigate();
      await page.clickOnAccountButton();
      await page.signIn();
      expect(await page.getHeaderText()).toContain(`Hi, ${employeeData.name}!`)

    });

    test("the search field works", async ()=> {
       await page.doSearch("Dog Food");
        expect(await page.getresults()).toContain("Dog Food");
        })
})
       