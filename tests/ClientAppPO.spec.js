const {test,expect} = require("@playwright/test");
const {customtest} = require('../utils/test-base');

const {LoginPage} = require("../pageobjects/LoginPage.js");
const { DashboardPage } = require("../pageobjects/DashboardPage.js");
const { CartPage } = require("../pageobjects/CartPage.js");
const { PaymentPage } = require("../pageobjects/PaymentPage.js");
const { ConfirmationPage } = require("../pageobjects/ConfirmationPage.js");
const { OrdersPage } = require("../pageobjects/OrdersPage.js");
const dataset = JSON.parse(JSON.stringify(require("../utils/testdata/placeOrderTestData.json")));


    
// test("Login", async ({page})=> {

  

//     const loginPage = new LoginPage(page);
//     await loginPage.goTo();
//     await loginPage.validLogin(dataset.userName,dataset.password);



//     await page.waitForLoadState('networkidle'); // synchronization step wait for returning arrays i.e allTextcontents (sometimes flaky) 

//     const allCardBodyTitles = page.locator('.card-body b');  // parent child locator
//     await allCardBodyTitles.first().waitFor(); // another sync step for all textContents returning an array
//     console.log (await allCardBodyTitles.allTextContents()); 

//     });


for (const data of dataset)
{
test(`@smoke Add Items to Cart for ${data.productName}`, async ({page})=> {

    
        const loginPage = new LoginPage(page);
        await loginPage.goTo();
        await loginPage.validLogin(data.userName,data.password);

        
        const dashboardPage = new DashboardPage(page);
        await dashboardPage.searchProduct(data.productName);
        await dashboardPage.navigateToCart(page);

        console.log("URL:", await page.url());
        console.log("TITLE:", await page.title());
        
       

        //Cart Page
        const cartPage = new CartPage(page);
        const isProductVisible = await cartPage.checkCart(data.productName);
        expect (isProductVisible).toBeTruthy();
        await cartPage.clickCheckOut();

        //PaymentPage                  
        const paymentPage = new PaymentPage(page);
        await paymentPage.enterPaymentDetails(data.countryName);
        await paymentPage.clickSubmit();
            
        //confirmation page
        const confirmationPage = new ConfirmationPage(page);
        await expect(confirmationPage.thankYouText).toHaveText(" Thankyou for the order. ");
        const cleanOrderText = await confirmationPage.getOrderNumberDisplayed();
        await confirmationPage.navigateToOrders();

        //ORDERS PAGE
        const ordersPage = new OrdersPage(page);
        await ordersPage.goThroughOrders(cleanOrderText);

        const orderRow = await page.getByText(cleanOrderText, { exact: true });

        // console.log("ORDER ROW:"+ orderRow);
        await expect(orderRow).toBeVisible();
 });

}


customtest(`@web @smoke Add Items to Cart Using Custom Test `, async ({page,testDataForOrder})=> {

    
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    await loginPage.validLogin(testDataForOrder.userName,testDataForOrder.password);

    
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.searchProduct(testDataForOrder.productName);
    await dashboardPage.navigateToCart(page);

    console.log("URL:", await page.url());
    console.log("TITLE:", await page.title());
    
   

    //Cart Page
    const cartPage = new CartPage(page);
    const isProductVisible = await cartPage.checkCart(testDataForOrder.productName);
    expect (isProductVisible).toBeTruthy();
    await cartPage.clickCheckOut();

    //PaymentPage                  
    const paymentPage = new PaymentPage(page);
    await paymentPage.enterPaymentDetails(testDataForOrder.countryName);
    await paymentPage.clickSubmit();
        
    //confirmation page
    const confirmationPage = new ConfirmationPage(page);
    await expect(confirmationPage.thankYouText).toHaveText(" Thankyou for the order. ");
    const cleanOrderText = await confirmationPage.getOrderNumberDisplayed();
    await confirmationPage.navigateToOrders();

    //ORDERS PAGE
    const ordersPage = new OrdersPage(page);
    await ordersPage.goThroughOrders(cleanOrderText);

    const orderRow = await page.getByText(cleanOrderText, { exact: true });

    // console.log("ORDER ROW:"+ orderRow);
    await expect(orderRow).toBeVisible();
});