const {test,expect} = require("@playwright/test");

test("Login with radiobutton select",async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagepractise/");
    //css locator
    const userName = page.locator("#username")
    const passWord = page.locator("#password"); // locating by id
    await userName.fill("rahulshettyacademy");
    await passWord.fill("learning");

    // select a radiobutton
    const radiobutton = page.locator(".radiotextsty");
    await radiobutton.last().click();

    const okayBtn = page.locator("#okayBtn");
    await okayBtn.click();

    //check if radio button is selected
    await expect(radiobutton.last()).toBeChecked();

    const dropdown = page.locator("select.form-control"); //select drop down form
    await dropdown.selectOption("consult");

    const acceptChkbox = page.locator("#terms");
    //check checkbox and check if the checkbox is checked
    await acceptChkbox.click();
    await expect (acceptChkbox).toBeChecked();

    //uncheck and check if it is uncheck
    await acceptChkbox.uncheck();
    expect (await acceptChkbox.isChecked()).toBeFalsy();

    //check blinking text
    const documentLink = page.locator("[href*='documents-request']");
    // tohaveattribute (name , expectedvalue)
    await expect (documentLink).toHaveAttribute("class", "blinkingText");


    // await page.pause(); //opens the playwright inspector
});

test.only ('@Child window test',async({browser})=>{
const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagepractise/");

  const documentLink = page.locator("[href*='documents-request']");
  
  //
  const [newPage] =await Promise.all(
  [
      context.waitForEvent('page'), // waits for the new page is pending, rejected or fulfilled
      documentLink.click(),

  ])// wait until all the promises in the array are fulfilled
  
   const textElement = newPage.locator (".red");
   const textString = await textElement.textContent();
   console.log(textString);
   
   //split the string 
   const arrayText = textString.split("@");
   const domainText = arrayText[1].split(" ") [0]
  console.log ( "FROM new page:" + domainText);

  //navigate back to the previous page
  const usernameField = page.locator("#username");
  await usernameField.fill(domainText);
  console.log("from old page: " + await usernameField.inputValue());

})