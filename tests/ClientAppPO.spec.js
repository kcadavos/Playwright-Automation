const {test,expect} = require("@playwright/test");

const {LoginPage} = require("../pageobjects/LoginPage.js");
const { DashboardPage } = require("../pageobjects/DashboardPage.js");
const { CartPage } = require("../pageobjects/CartPage.js");
const { PaymentPage } = require("../pageobjects/PaymentPage.js");

test("Login", async ({page})=> {

    const userName = "ksmith@gmail.com";
    const password="12345Pass"
    const productName= "ZARA COAT 3";

    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    await loginPage.validLogin(userName,password);



    await page.waitForLoadState('networkidle'); // synchronization step wait for returning arrays i.e allTextcontents (sometimes flaky) 

    const allCardBodyTitles = page.locator('.card-body b');  // parent child locator
    await allCardBodyTitles.first().waitFor(); // another sync step for all textContents returning an array
    console.log (await allCardBodyTitles.allTextContents()); 

    });

    test.only("Add Items to Cart", async ({page})=> {
    
        const userName = "ksmith@gmail.com";
        const password="12345Pass"
        const productName= "ZARA COAT 3";
    
        const loginPage = new LoginPage(page);
        await loginPage.goTo();
        await loginPage.validLogin(userName,password);

        
        const dashboardPage = new DashboardPage(page);
        await dashboardPage.searchProduct(productName);
        await dashboardPage.navigateToCart(page);

        console.log("URL:", await page.url());
        console.log("TITLE:", await page.title());
        
       

        //Cart Page
        const cartPage = new CartPage(page);
        const isProductVisible = await cartPage.checkCart(productName);
        expect (isProductVisible).toBeTruthy();
        await cartPage.clickCheckOut();

        //PaymentPage                        
        const countryName = "India"
        const paymentPage = new PaymentPage(page);
        await paymentPage.enterPaymentDetails(countryName);
        //check values in the payment  page
        // await expect( page.locator(".user__name [type='text']").first()).toHaveText(userName);
        await paymentPage.clickSubmit();
            

            //confirmation page
            await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
            const orderIdText = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
            const cleanOrderText = orderIdText.replaceAll('|', '').trim();
            console.log(await "ORDER ID: " + cleanOrderText);

            //GO TO ORDERS
            await page.locator("[routerlink*='myorders']").first().click();
            const ordersCnt = await page.locator(".ng-star-inserted").count();
                console.log("CNT " +ordersCnt);
                //iterate through the order entries
                for (let i=0; i<ordersCnt; ++i)
                    {
                    
                       const rowElement =  page.locator("tbody .ng-star-inserted").nth(i);
                       const rowOrderText = await rowElement.locator("[scope*='row']").textContent();
                         if(rowOrderText.includes(cleanOrderText))
                         {
                            console.log("row order text " + rowOrderText);
                             await (rowElement.locator(".btn-primary")).click();
                             break;
                         }

                    }
            
            //verify Order Summary Page

        await page.waitForLoadState('networkidle');
        // await page.pause();
        //     const summaryOrderId= await page.locator(".col-text");
        //     const summaryOrderIdText =await summaryOrderId.textContent();
        //     console.log("SUMMARY ORDER TEXT: "+ summaryOrderIdText)
        //     // await expect (summaryOrderId).toHaveText(cleanOrderText);
        //     expect  (await cleanOrderText.includes(summaryOrderIdText)).toBeTruthy();

        // await page.pause();    
        console.log("CLEAN ORDER TEXT:"+cleanOrderText);
        const orderRow = await page.getByText(cleanOrderText.trim(), { exact: true });

        // console.log("ORDER ROW:"+ orderRow);
        await expect(orderRow).toBeVisible();
        });