class ConfirmationPage{
    constructor (page){
        this.page = page;
        this.thankYouText = page.locator(".hero-primary");
        this.orderIdTextField  = page.locator(".em-spacer-1 .ng-star-inserted");

    }

    async getOrderNumberDisplayed(){
        const orderIdText = await this.orderIdTextField.textContent();
        // console.log(await "ORDER ID: " + orderIdText);
        return await((orderIdText.replaceAll('|', '')).trim());

    }

    async navigateToOrders(){
        await this.page.locator("[routerlink*='myorders']").first().click();

    }
}

module.exports={ConfirmationPage}