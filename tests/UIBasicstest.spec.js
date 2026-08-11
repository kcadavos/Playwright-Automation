const { test, expect } = require("@playwright/test"); //import playwright

// Option 1 to kickstart automation in Playwright
test.only("Browser Context Playwright Test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagepractise/");
  //css locator
  const userName = page.locator("#username")
  const passWord = page.locator("#password");
  await userName.fill("rahulshettyacademy");
  await passWord.fill("learning");
  await page.locator("#signInBtn").click();
  console.log("ERROR MSG: " + await page.locator("[style*='block']").textContent());
  await expect (page.locator("[style*='block']")).toContainText("no longer valid")
  
  await passWord.fill("");
  await passWord.fill("Learning@830$3mK2")
  await page.locator("#signInBtn").click();
  
  const cardBodyHeader = page.locator(".card-body a")
    console.log(await cardBodyHeader.nth(0).textContent());
    console.log(await cardBodyHeader.first().textContent());

//sample    
});

//Option 2 to kickstart automation in Playwright
test("Page Context Playwright Test", async ({ page }) => {
  await page.goto("https://google.com");
  //get title assertion
  console.log("Title is: " + (await page.title()));
  await expect(page).toHaveTitle("Google");
});
