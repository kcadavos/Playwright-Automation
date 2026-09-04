const {test,expect} = require("@playwright/test");

const {LoginPage} = require("../pageobjects/LoginPage.js");
const { DashboardPage } = require("../pageobjects/DashboardPage.js");
const { CartPage } = require("../pageobjects/CartPage.js");
const { PaymentPage } = require("../pageobjects/PaymentPage.js");
const { ConfirmationPage } = require("../pageobjects/ConfirmationPage.js");
const { OrdersPage } = require("../pageobjects/OrdersPage.js");
const dataset = JSON.parse(JSON.stringify(require("../utils/testdata/placeOrderTestData.json")));

test("Login", async ({page})=> {

    // const userName = "ksmith@gmail.com";
    // const password="12345Pass"
    // const productName= "ZARA COAT 3";

    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    await loginPage.validLogin(dataset.userName,dataset.password);



    await page.waitForLoadState('networkidle'); // synchronization step wait for returning arrays i.e allTextcontents (sometimes flaky) 

    const allCardBodyTitles = page.locator('.card-body b');  // parent child locator
    await allCardBodyTitles.first().waitFor(); // another sync step for all textContents returning an array
    console.log (await allCardBodyTitles.allTextContents()); 

    });

    test.only("Add Items to Cart", async ({page})=> {
    
        // const userName = "ksmith@gmail.com";
        // const password="12345Pass"
        // const productName= "ZARA COAT 3";
    
        const loginPage = new LoginPage(page);
        await loginPage.goTo();
        await loginPage.validLogin(dataset.userName,dataset.password);

        
        const dashboardPage = new DashboardPage(page);
        await dashboardPage.searchProduct(dataset.productName);
        await dashboardPage.navigateToCart(page);

        console.log("URL:", await page.url());
        console.log("TITLE:", await page.title());
        
       

        //Cart Page
        const cartPage = new CartPage(page);
        const isProductVisible = await cartPage.checkCart(dataset.productName);
        expect (isProductVisible).toBeTruthy();
        await cartPage.clickCheckOut();

        //PaymentPage                        
        // const countryName = "India"
        const paymentPage = new PaymentPage(page);
        await paymentPage.enterPaymentDetails(dataset.countryName);
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