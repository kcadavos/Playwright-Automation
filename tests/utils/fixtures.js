const {test:base,request} = require ('@playwright/test');
const { APIUtils } = require('./APIUtils.js');
const loginPayload = {userEmail: "ksmith@gmail.com", userPassword: "12345Pass"};
const orderPayload={
    orders: [
        {
            country: "India",
            productOrderedId: "6960eae1c941646b7a8b3ed3"
        }
    ]
};

exports.customtest = base.extend({
    authenticatedPage : async({browser},use)=>{
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://rahulshettyacademy.com/client/");
        const email = page.locator ('#userEmail');
        const emailValue = "ksmith@gmail.com";
        await email.fill(emailValue);
    
        const password = page.locator ('#userPassword');
        await password.fill ('12345Pass');
    
        const loginBtn = page.locator ('#login');
        await loginBtn.click();
        await page.waitForLoadState('networkidle');
        await use(page);


        // executes after the test script is executed anything after USE
        await context.close();
    },
    createOrder : async({},use)=>{

        const apiContext = await request.newContext();
        const apiUtils = new APIUtils(apiContext,loginPayload);
        const response = await apiUtils.createOrder(orderPayload);
        use(response);
        
        // executes after the test script is executed anything after USE
        await apiContext.dispose();


    },
    testDataForOrder: {
        productName: "ADDIDAS ORIGINAL"
    }
} )