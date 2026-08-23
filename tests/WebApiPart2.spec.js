const {test,expect} = require('@playwright/test');
let webContext;


// saving context to state.json file
test.beforeAll(async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/");
    const email = page.locator ('#userEmail');
    const emailValue = "ksmith@gmail.com";
    await email.fill(emailValue);

    const password = page.locator ('#userPassword');
    await password.fill ('12345Pass');

    const loginBtn = page.locator ('#login');
    await loginBtn.click();
    await page.waitForLoadState('networkidle');
    await context.storageState({path:'state.json'});
    webContext =  await browser.newContext({storageState:'state.json'});

})

test("Login", async ({})=> {

   
    const page = await webContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client/");
    const allCardBodyTitles = page.locator('.card-body b');  // parent child locator
    await allCardBodyTitles.first().waitFor(); // another sync step for all textContents returning an array


    console.log (await allCardBodyTitles.allTextContents()); 

    });