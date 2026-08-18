const {test,expect} = require("@playwright/test");

test("Playwright Special Locators Test 1", async ({ page }) => {
//hirearchy in timeouts -- global -> test-> step level
test.setTimeout(60000); // timeout to ocmplete the whole test
// test level timeout for expect
const slowExpect =expect.configure({timeout:9000});

// action timeout in page level
page.setDefaultTimeout(9000);

  await page.goto("https://www.rahulshettyacademy.com/angularpractice/");

  // automatically locates the checkbox based on the labe
  await page.getByLabel("Check me out if you Love IceCreams!").click();

 

  //automatically locate radio button based on the label
  await page.getByLabel("Employed").check();

  //automatically locate a dropdown based on label
  await page.getByLabel("Gender").selectOption("Female");

  //locate using placeholder
  //get by label doesnt work in all  edit boxes only works if the input box is wrapped inside the label
  //also works even if its not wrapped but if there is association using for and id
  await page.getByPlaceholder("Password").fill("abc123");




  //locate using role
  await page.getByRole("button", { name: "Submit" }).click();

  //get by text
//  await page.getByText("Success! The Form has been submitted successfully!.").isVisible();

//Step level timeout: default timeout for expect assertions is 5 seconds. with timeout it forces it to wait based on the idnidcatedindicated

await expect (page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible({timeout: 10_000});
// // Global Level timeout - if you want to apply a change in timeout globally you can change the config.js


// //using testimeout
// await slowExpect(page.getByAltText("Success! The Form has been submitted successfully!.")).toBeVisible();


  //locate by Role
  await page.getByRole("link", { name: "Shop" }).click();
  // if the content takes a while to load
//   await expect (page.locator(".my-4").first().toHaveText("Shop"))

  //locate by filer
  await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();

  //locator css waitFor() 
  //wait for doesnt have default -- based on overall test level timeout



});
