const { Given, When, Then } = require("@cucumber/cucumber");
const { POManager } = require("../../pageobjects/POManager");
const { expect } = require("@playwright/test");
const playwright  = require("@playwright/test");

Given(
  "a login to Ecommerce application with {string} and {string}",
  {timeout: 100 * 1000},
  async function (username, password) {
    const loginPage = this.poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(username, password);
  }
);

When("Add {string} to Cart",  {timeout: 100 * 1000}, async function (productName) {
  this.dashboardPage = this.poManager.getDashboardPage();
  await this.dashboardPage.searchProduct(productName);
  await this.dashboardPage.navigateToCart(this.page);
});

Then("Verify {string} is displayed in the Cart", async function (productName) {
  const cartPage = this.poManager.getCartPage();
  const isProductVisible = await cartPage.checkCart(productName);
  expect(isProductVisible).toBeTruthy();
  await cartPage.clickCheckOut();
});

When("Enter valid details and Place the Order", async function () {
  const paymentPage = this.poManager.getPaymentPage();
  await paymentPage.enterPaymentDetails("India");
  await paymentPage.clickSubmit();
  this.confirmationPage = this.poManager.getConfirmationPage();
  await expect(this.confirmationPage.thankYouText).toHaveText(
    " Thankyou for the order. "
  );
  this.cleanOrderText = await this.confirmationPage.getOrderNumberDisplayed();
});

Then("Verify order is place in OrderHistory", async function () {
  await this.confirmationPage.navigateToOrders();
  const ordersPage = this.poManager.getOrdersPage();
  await ordersPage.goThroughOrders(this.cleanOrderText);
  const orderRow = await this.page.getByText(this.cleanOrderText, { exact: true });
  await expect(orderRow).toBeVisible();
});



Given('a login to Ecommerce2 application with {string} and {string}',async function (username, password) {
    await this.page.goto("https://rahulshettyacademy.com/loginpagepractise/");
  const userName = this.page.locator("#username")
  const passWord = this.page.locator("#password"); // locating by id
  await userName.fill(username);
  await passWord.fill(password);
  await this.page.locator("#signInBtn").click();
  });

Then('Verify Error Message is displayed',{timeout: 100*1000}, async function () {
  console.log("ERROR MSG: " + await this.page.locator("[style*='block']").textContent());
  await expect (this.page.locator("[style*='block']")).toContainText("Incorrect username/password")
  
  });
  