const { test, expect } = require("@playwright/test");

test("Login", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client/");
  const email = page.getByPlaceholder("email@example.com");
  const emailValue = "ksmith@gmail.com";
  await email.fill(emailValue);

  const password = page.getByPlaceholder("enter your password");
  await password.fill("12345Pass");

  const loginBtn = page.getByRole("button", { name: "Login" });
  await loginBtn.click();

  // await page.waitForLoadState('networkidle'); // synchronization step wait for returning arrays i.e allTextcontents (sometimes flaky)

  const allCardBodyTitles = page.locator(".card-body b"); // parent child locator
  await allCardBodyTitles.first().waitFor(); // another sync step for all textContents returning an array
  console.log(await allCardBodyTitles.allTextContents());
});

test("Add Items to Cart", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client/");
  const email = page.getByPlaceholder("email@example.com");
  const emailValue = "ksmith@gmail.com";
  await email.fill(emailValue);

  const password = page.getByPlaceholder("enter your passsword");
  await password.fill("12345Pass");

  const loginBtn = page.getByRole("button", { name: "Login" });
  await loginBtn.click();

  await page.waitForLoadState("networkidle"); // synchronization step wait for returning arrays i.e allTextcontents (sometimes flaky)

  const allCardBodyTitles = page.locator(".card-body b"); // parent child locator
  await allCardBodyTitles.first().waitFor();
  console.log(await allCardBodyTitles.allTextContents());

  const productName = "ZARA COAT 3";
  await page
    .locator(".card-body")
    .filter({ hasText: "ZARA COAT 3" })
    .getByRole("button", { name: "Add to Cart" })
    .click();

  //Cart Page
  await page
    .getByRole("listitem")
    .getByRole("button", { name: "Cart" })
    .click();

  await page.locator("div li").first().waitFor();
  await page.getByText("ZARA COAT 3").isVisible();

  // click checkout
  await page.getByRole("button", { name: "Checkout" }).click();

  await page
    .getByPlaceholder("Select Country")
    .pressSequentially("ind", { delay: 150 }); // do not use fill and this types it slowly

  await page.getByRole("button", { name: "India" }).nth(1).click();
  await page.getByText("PLACE ORDER").click();



  //verify Order Summary Page
  await expect(page.getByText("Thankyou for the order.")).toBeVisible();
  //  await page.pause();
});
