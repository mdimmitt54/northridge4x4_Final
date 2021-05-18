
import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
    WebElement,
  } from "selenium-webdriver";
import { Driver } from "selenium-webdriver/chrome";

const fs = require("fs");
const chromedriver = require("chromedriver");

export class northridgePage {
    driver:WebDriver
    url:string = "https://www.northridge4x4.com/"
    searchBar:By = By.css();
    brandNavigation:By = By.css("Shop Top Brands");
    brandHeader:By = By.xpath("//div[@id='page-content']/h1");
    partsNavigation:By = By.css ("slave-suspension");
    partsItem:By = By.xpath("//div[@id='tns1-item0']/a/div[2]/p")
    addToCart: By = By.css(".js-add-cart");




    constructor(driver:WebDriver) {
        this.driver = driver;
    }

    async clickOnBrandsButton() {
        await this.driver.wait(until.elementLocated(this.brandNavigation));
        await (await this.driver.findElement(this.brandNavigation)).click();
        await this.driver.wait(until.elementLocated(this.brandHeader))
    }
    async getHeaderTextBrand() {
        await this.driver.wait(until.elementLocated(this.brandHeader));
        return await (this.driver.findElement(this.brandHeader)).getText();    
}
}