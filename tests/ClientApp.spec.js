const {test,expect} = require("@playwright/test");


test("Login", async ({page})=> {

    await page.goto("https://rahulshettyacademy.com/client/");
    const email = page.locator ('#userEmail');
    const emailValue = "ksmith@gmail.com";
    await email.fill(emailValue);

    const password = page.locator ('#userPassword');
    await password.fill ('12345Pass');

    const loginBtn = page.locator ('#login');
    await loginBtn.click();

    // await page.waitForLoadState('networkidle'); // synchronization step wait for returning arrays i.e allTextcontents (sometimes flaky) 

    const allCardBodyTitles = page.locator('.card-body b');  // parent child locator
    await allCardBodyTitles.first().waitFor(); // another sync step for all textContents returning an array
    console.log (await allCardBodyTitles.allTextContents()); 

    });

    test.only("Add Items to Cart", async ({page})=> {

        await page.goto("https://rahulshettyacademy.com/client/");
        const email = page.locator ('#userEmail');
        const emailValue = 'ksmith@gmail.com';
        await email.fill(emailValue);
    
        const password = page.locator ('#userPassword');
        await password.fill ('12345Pass');
    
        const loginBtn = page.locator ('#login');
        await loginBtn.click();
    
        await page.waitForLoadState('networkidle'); // synchronization step wait for returning arrays i.e allTextcontents (sometimes flaky) 
    
        const allCardBodyTitles = page.locator('.card-body b');  // parent child locator
        await allCardBodyTitles.first().waitFor(); 
        console.log (await allCardBodyTitles.allTextContents()); 

        const products = page.locator(".card-body");
        const productCnt = await products.count();
        const productName = "ZARA COAT 3";

        for (let i=0; i<productCnt; ++i)
            {
                if (await products.nth(i).locator("b").textContent() === productName)
                    {
                        await products.nth(i).locator("text= Add to Cart").click(); // search by text
                        break; //exit the for loop once item is found
                    }
            }


            //Cart Page
            await page.locator("[routerlink*='cart']").click();
            await page.locator("div li").first().waitFor();
            const bool = page.locator("h3:has-text('ZARA COAT 4')").isVisible();
            expect (bool).toBeTruthy();

            await page.locator("text=Checkout").click();

            await page.locator("[placeholder*='Country']").pressSequentially("ind",{delay:150}); // do not use fill and this types it slowly 
            const dropdown = page.locator(".ta-results"); 
            await dropdown.waitFor();
            const optionsCount = await dropdown.locator("button").count();

            for (let i =0; i<optionsCount; ++i)
                { 
                    const text = await dropdown.locator("button").nth(i).textContent();
                    console.log ("TEXT:"+text);
                    if (text===" India")
                    {

                        await dropdown.locator("button").nth(i).click();
                        break;
                    }

                }

            //check values in the payment  page
            console.log(await page.locator(".user__name [type='text']").first().textContent() );
            expect(page.locator(".user__name [type='text']").first()).toHaveText(emailValue);
            
            await page.locator(".action__submit").click();

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
            const summaryOrderId=  page.locator(".col-text");
            const summaryOrderIdText =await summaryOrderId.textContent();
            console.log("SUMMARY ORDER TEXT: "+ summaryOrderIdText)
            // await expect (summaryOrderId).toHaveText(cleanOrderText);
            expect  (await cleanOrderText.includes(summaryOrderIdText)).toBeTruthy();

            //  await page.pause();
        });