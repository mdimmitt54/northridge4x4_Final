import * as accountData from "../singInData.json"

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
    signinButton: By = By.css("viewLoginModal")   /*** Sign In button for main page ***/
    emailAddress: By = By.css("form-control valid")    /*** email address for account ***/
    emailInput:   By = By.name("username")    /*** click and type email address field ***/
    accountPassword: By = By.css("form-control") /*** actual account password ***/
    passwordInput: By = By.name("password")   /*** click and type password in field ***/
    signInAccount: By = By.css("btn btn-lg btn-primary btn-block")   /*** click the sign in button ***/


    constructor(driver: WebDriver) {
        this.driver = driver;
    }

async navigate(){
    await this.driver.get(this.url)   
    }

async signInButton(){
        await this.driver.wait(until.elementLocated(this.signInButton));
        await this.driver.findElement(this.signinButton).click();
    }

async signIn() {
        await this.driver.findElement(this.emailAddress).click();
        await this.driver.findElement(this.emailInput).sendKeys(accountData.EmailAddress);
        await this.driver.findElement(this.accountPassword).click();
        await this.driver.findElement(this.passwordInput).sendKeys(accountData.Password);
        await this.driver.findElement(this.signInAccount).click();
    }

}