
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
let response;


//will be executed before any other test
test.beforeAll(async ()=>{

    const apiContext =  await request.newContext();
    const apiUtils = new APIUtils(apiContext, loginPayload);
    response = await apiUtils.createOrder(orderPayload);

     // order API CALL
     

});//end of beforeAll

//will execute before each test case
test.beforeEach (()=>{

})

test("Add Items to Cart", async ({page})=> {

    // skip login and order placement using api call instead of UI
    page.addInitScript(value =>{ // value to pass
        window.localStorage.setItem('token',value);

    },response.token)

    await page.goto("https://rahulshettyacademy.com/client/");
    // login api and order placement api are called 


    //GO TO ORDERS
        await page.locator("[routerlink*='myorders']").first().click();
        const ordersCnt = await page.locator(".ng-star-inserted").count();
            console.log("CNT " +ordersCnt);
            //iterate through the order entries
            for (let i=0; i<ordersCnt; ++i)
                {
                
                   const rowElement =  page.locator("tbody .ng-star-inserted").nth(i);
                   const rowOrderText = await rowElement.locator("[scope*='row']").textContent();
                     if(rowOrderText.includes(response.orderId))
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
        // await expect (orderId from API).toHaveText(cleanOrderText);
        expect  (await response.orderId.includes(summaryOrderIdText)).toBeTruthy();

         await page.pause();
    });