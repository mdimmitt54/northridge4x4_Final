import {
    Builder, By, Capabilities, until, WebDriver, WebElement, } from "selenium-webdriver";

import { Driver } from "selenium-webdriver/chrome";
import { elementIsDisabled } from "selenium-webdriver/lib/until";

const fs = require("fs");
const chromedriver = require("chromedriver");


export class northridgePage {
    driver:WebDriver
    url:string = "https://www.northridge4x4.com/"
    searchBar: By = By.css("#search-box");
    result: By = By.css(".results-products");
    closeAd: By = By.xpath(`//a[@class="ltkpopup-close ltkpopup-close-button"]`);
    viewProduct: By = By.css(".btn btn-primary footerSubmit newProdsButton")
    
    constructor(driver: WebDriver) {
        this.driver = driver;
    
    }
async navigate(){
        await this.driver.get(this.url)   
    }
async search(searchItem: String){
        await this.driver.wait(until.elementLocated(this.searchBar));
        await this.driver.findElement(this.searchBar).sendKeys(`${searchItem}\n`);
    }

async getresults(){
        await this.driver.wait(until.elementLocated(this.result));
        return await (this.driver.findElement(this.result)).getText();
    } 
    
async closePopup(){
        await this.driver.wait(until.elementLocated(this.closeAd));
        await (await this.driver.findElement(this.closeAd)).click();
        return await (this.driver.findElement( this.result)).click();  
}
async selectProduct(){
    await this.driver.wait(until.elementLocated(this.viewProduct));
    return await (await (this.driver.findElement(this.viewProduct))).click();

}
}