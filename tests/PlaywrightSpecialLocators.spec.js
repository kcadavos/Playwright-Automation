const {test,expect} = require("@playwright/test");

test("Playwright Special Locators Test 1", async ({ page }) => {
  await page.goto("https://www.rahulshettyacademy.com/angularpractice/");

  // automatically locates the checkbox based on the labe
  await page.getByLabel("Check me out if you Love IceCreams!").click();

  //automatically locate radio button based on the label
  await page.getByLabel("Employed").check();

  //automatically locate a dropdown based on label
  await page.getByLabel("Gender").selectOption("Female");

  //locate using placeholder
  await page.getByPlaceholder("Password").fill("abc123");

  //locate using role
  await page.getByRole("button", { name: "Submit" }).click();

  //get by text
  await page.getByText("Success! The Form has been submitted successfully!.").isVisible();

  //locate by Role
  await page.getByRole("link", { name: "Shop" }).click();

  //locate by filer
  await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();


});
