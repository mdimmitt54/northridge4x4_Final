import * as accountData from "../signInData.json"

import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
    WebElement,
  } from "selenium-webdriver";
import { Driver } from "selenium-webdriver/chrome";
import { elementIsDisabled } from "selenium-webdriver/lib/until";

const fs = require("fs");
const chromedriver = require("chromedriver");


export class northridgePage {
    driver:WebDriver
    url:string = "https://www.northridge4x4.com/"
    signinButton: By = By.css(".viewLoginModal")   /*** Sign In button for main page ***/
    emailAddress: By = By.css(".form-control valid")    /*** email address for account ***/
    emailInput: By = By.name("login-username")    /*** click and type email address field ***/
    accountPassword: By = By.css(".form-control") /*** actual account password ***/
    passwordInput: By = By.name("login-password")   /*** click and type password in field ***/
    signInAccount: By = By.css(".btn btn-lg btn-primary btn-block")   /*** click the sign in button ***/
    searchField: By = By.css("#search-box");
    result: By = By.css(".results-products");
    closeAd: By = By.css(".ltkpopup-close ltkpopup-close-button");
    brandButton:By = By.css(".Shop Top Brands");
    partsHeader:By = By.xpath("//div[@id='page-content']/h1");

    constructor(driver: WebDriver) {
        this.driver = driver;
    }

async navigate(){
    await this.driver.get(this.url)   
    
    }
async signInButton(){
        await this.driver.wait(until.elementLocated(this.signinButton));
        await this.driver.findElement(this.signinButton).click();
    }
async closePopup(){
        await this.driver.wait(until.elementLocated(this.closeAd));
        await (await this.driver.findElement(this.closeAd)).click();
        return await (this.driver.findElement( this.result)).click();
        
    }
async signIn(): Promise<void> {
        await this.driver.wait(until.elementLocated(this.emailAddress));
        await this.driver.findElement(this.emailAddress).click();
        await this.driver.findElement(this.emailAddress).sendKeys(accountData.EmailAddress);
        await this.driver.findElement(this.accountPassword).click();
        await this.driver.findElement(this.passwordInput).sendKeys(accountData.Password);
        await this.driver.findElement(this.signInAccount).click();
    }
async getresults(){
        await this.driver.wait(until.elementLocated(this.result));
        return await (this.driver.findElement(this.result)).getText();
    }
async doSearch(searchItem:String){
        await this.driver.wait(until.elementLocated(this.searchField));
        await this.driver.findElement(this.searchField).sendKeys(`${searchItem}\n`);
    }
    
async shopbrandsButton() {
    await this.driver.wait(until.elementLocated(this.brandButton));
    await (await this.driver.findElement(this.brandButton)).click();
    await this.driver.wait(until.elementLocated(this.brandButton))
}
}
