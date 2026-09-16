import { Page, Locator} from '@playwright/test'

export class ConfirmationPage{

    page:Page;
    thankYouText:Locator;
    orderIdTextField :Locator;
    
    constructor (page:Page){
        this.page = page;
        this.thankYouText = page.locator(".hero-primary");
        this.orderIdTextField  = page.locator(".em-spacer-1 .ng-star-inserted");

    }

    async getOrderNumberDisplayed(){
        const orderIdText:any  = await this.orderIdTextField.textContent();
        
        return orderIdText.replaceAll('|', '').trim();

    }

    async navigateToOrders(){
        await this.page.locator("[routerlink*='myorders']").first().click();

    }
}
