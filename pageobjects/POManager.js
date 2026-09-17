const {Page} = require  ('@playwright/test');

const  {LoginPage} =require  ('./LoginPage.js');
const { DashboardPage } =require ('./DashboardPage.js');
const { OrdersPage } =require ('./OrdersPage.js');
const { PaymentPage } =require ('./PaymentPage.js');
const { CartPage } =require ('./CartPage.js');
const {ConfirmationPage} =require ('./ConfirmationPage.js');

class POManager
{

    constructor (page)
    {
        this.page=page;
        this.loginPage= new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.ordersPage  = new OrdersPage(this.page);
        this.paymentPage = new PaymentPage(this.page);
        this.cartPage = new CartPage(this.page);
        this.confirmationPage = new ConfirmationPage(this.page);
    }

    getLoginPage()
    {
        return this.loginPage;
    }

    getCartPage()
    {
        return this.cartPage;
    }

    getDashboardPage()
    {
        return this.dashboardPage;
    }

    getOrdersPage()
    {
        return this.ordersPage;
    }

    getPaymentPage()
    {
        return this.paymentPage;
    }

    getConfirmationPage()
    {
        return this.confirmationPage;
    }
}


module.exports={POManager};