const {test,expect} = require("@playwright/test");
const {customtest} = require('../utils/test-base');

// import {LoginPage} from '../pageobjects_ts/LoginPage.ts';
// import { DashboardPage } from '../pageobjects_ts/DashboardPage.ts';
// import { CartPage } from '../pageobjects_ts/CartPage.ts';
// import {PaymentPage} from '../pageobjects_ts/PaymentPage.ts'
// import { ConfirmationPage } from '../pageobjects_ts/ConfirmationPage.ts';
// import {OrdersPage} from '../pageobjects_ts/OrdersPage.ts'
import {POManager} from '../pageobjects_ts/POManager.ts'
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

        const poManager = new POManager(page);
        const loginPage = poManager.getLoginPage();
        await loginPage.goTo();
        await loginPage.validLogin(data.userName,data.password);

        
        const dashboardPage = poManager.getDashboardPage();
        await dashboardPage.searchProduct(data.productName);
        await dashboardPage.navigateToCart(page);

        console.log("URL:", await page.url());
        console.log("TITLE:", await page.title());
        
       

        //Cart Page
        const cartPage = poManager.getCartPage();
        const isProductVisible = await cartPage.checkCart(data.productName);
        expect (isProductVisible).toBeTruthy();
        await cartPage.clickCheckOut();

        //PaymentPage                  
        const paymentPage = poManager.getPaymentPage();
        await paymentPage.enterPaymentDetails(data.countryName);
        await paymentPage.clickSubmit();
            
        //confirmation page
        const confirmationPage = poManager.getConfirmationPage();
        await expect(confirmationPage.thankYouText).toHaveText(" Thankyou for the order. ");
        const cleanOrderText = await confirmationPage.getOrderNumberDisplayed();
        await confirmationPage.navigateToOrders();

        //ORDERS PAGE
        const ordersPage = poManager.getOrdersPage();
        await ordersPage.goThroughOrders(cleanOrderText);

        const orderRow = await page.getByText(cleanOrderText, { exact: true });

        // console.log("ORDER ROW:"+ orderRow);
        await expect(orderRow).toBeVisible();
 });

}


customtest(`@web @smoke Add Items to Cart Using Custom Test `, async ({page,testDataForOrder})=> {

    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(testDataForOrder.userName,testDataForOrder.password);

    
    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.searchProduct(testDataForOrder.productName);
    await dashboardPage.navigateToCart(page);

    console.log("URL:", await page.url());
    console.log("TITLE:", await page.title());
    
   

    //Cart Page
    const cartPage = poManager.getCartPage();
    const isProductVisible = await cartPage.checkCart(testDataForOrder.productName);
    expect (isProductVisible).toBeTruthy();
    await cartPage.clickCheckOut();

    //PaymentPage                  
    const paymentPage = poManager.getPaymentPage();
    await paymentPage.enterPaymentDetails(testDataForOrder.countryName);
    await paymentPage.clickSubmit();
        
    //confirmation page
    const confirmationPage = poManager.getConfirmationPage();
    await expect(confirmationPage.thankYouText).toHaveText(" Thankyou for the order. ");
    const cleanOrderText = await confirmationPage.getOrderNumberDisplayed();
    await confirmationPage.navigateToOrders();

    //ORDERS PAGE
    const ordersPage = poManager.getOrdersPage();
    await ordersPage.goThroughOrders(cleanOrderText);

    const orderRow = await page.getByText(cleanOrderText, { exact: true });

    // console.log("ORDER ROW:"+ orderRow);
    await expect(orderRow).toBeVisible();
});