import {Page} from '@playwright/test'

import {LoginPage} from './LoginPage.ts';
import { DashboardPage } from './DashboardPage.ts';
import { OrdersPage } from './OrdersPage.ts';
import { PaymentPage } from './PaymentPage.ts';
import { CartPage } from './CartPage.ts';
import {ConfirmationPage} from './ConfirmationPage.ts'

export class POManager
{
    page: Page;
    loginPage: LoginPage;
    dashboardPage :DashboardPage;
    ordersPage : OrdersPage;
    paymentPage: PaymentPage;
    cartPage:CartPage;
    confirmationPage : ConfirmationPage;

    constructor (page:Page)
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