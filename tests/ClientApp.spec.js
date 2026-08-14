const {test,expect} = require("@playwright/test");


test("Login", async ({page})=> {

    await page.goto("https://rahulshettyacademy.com/client/");
    const email = page.locator ('#userEmail');
    await email.fill('ksmith@gmail.com');

    const password = page.locator ('#userPassword');
    await password.fill ('12345Pass');

    const loginBtn = page.locator ('#login');
    await loginBtn.click();

    // await page.waitForLoadState('networkidle'); // synchronization step wait for returning arrays i.e allTextcontents (sometimes flaky) 

    const allCardBodyTitles = page.locator('.card-body b');  // parent child locator
    await allCardBodyTitles.first().waitFor(); // another sync step for all textContents returning an array
    console.log (await allCardBodyTitles.allTextContents()); 




    });