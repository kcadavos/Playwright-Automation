const {test,expect} = require ('@playwright/test'); //import playwright

// Option 1 to kickstart automation in Playwright
test('Browser Context Playwright Test',async ({browser})=>
{
  
    const context =await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagepractise/");
    //css locator
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill("learning");
    await page.locator('#signInBtn').click();
// sample   
}); 

//Option 2 to kickstart automation in Playwright
test('Page Context Playwright Test',async ({page})=>
    {
        await page.goto("https://google.com");
        //get title assertion
        console.log("Title is: " + await page.title());
        await expect(page).toHaveTitle("Google");
    
    }); 