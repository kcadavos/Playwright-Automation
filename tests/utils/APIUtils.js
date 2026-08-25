
class APIUtils
{
    constructor (apiContext,loginPayload){
        this.apiContext= apiContext;
        this.loginPayload = loginPayload;
    }

    async getToken()
    {
        //login api call
        const loginResponse= await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
         {
             data:this.loginPayload
         });
     
         const loginResponseJSON= await loginResponse.json()
         const token =  loginResponseJSON.token;// extracting token
     
          console.log("TOKEN:"+ token);
          return token;
    }

    async createOrder(orderPayload)
    {
        let response ={};
        response.token = await this.getToken();
        const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
        {
           data:orderPayload,
           headers:{
               'Authorization' :response.token,
               'Content-Type' : 'application/json',
                 }
        });
   
        const orderResponseJSON = await orderResponse.json();
        console.log( "ORDER RESPONSE JSON: " + orderResponseJSON )
        const orderId = orderResponseJSON.orders[0];
        console.log ("ORDERID FROM API:"+ orderId);
        response.orderId = orderId;
        return response;
    }
}

module.exports={APIUtils};