const {test,expect} = require('@playwright/test');

test ("Other validations",async ({page})=>{
 await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

 // to go back and forward on the page
 //  await page.goto("https://google.com")
//  await page.goBack(); // go back 
//  await page.goForward(); // go forward

//test display and hidden elements
await expect(page.locator("#displayed-text")).toBeVisible();
await page.locator("#hide-textbox").click();
await expect(page.locator("#displayed-text")).toBeHidden();

//test a javascript pop up (dialog)
page.on('dialog',dialog=>dialog.accept()); // dialog.dismiss to cancel
await page.locator("#confirmbtn").click();


//locator for hover
await page.locator("#mousehover").hover();

//attached frame (child frame)
await page.pause();
const framesPage= page.frameLocator("#courses-iframe"); // switch to your iframe
await framesPage.locator("li a[href*='lifetime-access']:visible").click();
 const textCheck = await framesPage.locator(".text h2").textContent();
 console.log("SUB COUNT:"+ textCheck.split(" ")[1]);

})