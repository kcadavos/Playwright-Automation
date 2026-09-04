
const {test,expect,request}=require("@playwright/test");
const {APIUtils} = require('../utils/APIUtils');

const loginPayload = {userEmail: "ksmith@gmail.com", userPassword: "12345Pass"}
const orderPayload={
    orders: [
        {
            country: "India",
            productOrderedId: "6960eae1c941646b7a8b3ed3"
        }
    ]
};
const fakePayLoadOrders = {data:[],message:"No Orders"};
let response;


//will be executed before any other test
test.beforeAll(async ()=>{

    const apiContext =  await request.newContext();
    const apiUtils = new APIUtils(apiContext, loginPayload);
    response = await apiUtils.createOrder(orderPayload);

     // order API CALL
     

});//end of beforeAll


test("Empty Order List", async ({page})=> {

    // skip login and order placement using api call instead of UI
    page.addInitScript(value =>{ // value to pass
        window.localStorage.setItem('token',value);
    },response.token)


    await page.goto("https://rahulshettyacademy.com/client/");
    
     //network intercept 
    //intercepting response -APi response-> { playwright fakeresponse}->browser->render data on front end
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
    async route =>{
        const response = await page.request.fetch(route.request());
        let body = JSON.stringify(fakePayLoadOrders);
        route.fulfill({
            response,
            body
        });

    });

    //GO TO ORDERS
        await page.locator("[routerlink*='myorders']").click();
        await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");

        console.log(await page.locator(".mt-4").textContent());
         await page.pause();
    });