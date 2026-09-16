import {Page,Locator} from '@playwright/test'

export class CartPage{

    page:Page;
    checkOut:Locator;

    constructor (page:Page)
    {
        this.page = page;
        this.checkOut = page.locator("text=Checkout");
    }
    async checkCart(productName:string)
    {
          await this.page.locator(".itemNumber").waitFor();
          return await this.page.getByText(productName).isVisible();
          
          
    }
    async clickCheckOut (){
        await this.checkOut.click();
    }
}