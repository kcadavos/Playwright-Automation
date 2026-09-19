const playwright = require('@playwright/test');
const {POManager} = require('../../pageobjects/POManager');
const {Before, After} =require('@cucumber/cucumber');
const { BeforeStep, AfterStep ,Status} = require('@cucumber/cucumber');

Before(async function(){
    const browser = await playwright.chromium.launch({
        headless:false
    });
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.poManager = new POManager(this.page);
});

BeforeStep (function(){

});


AfterStep (async function({result}){
 if (result.status === Status.FAILED)
    {
        await this.page.screenshot({path:'screenshot1.png' }); //takes screenshot for every failed step
    }
});

After (function (){
    console.log ("Clean up text last to execute");
});