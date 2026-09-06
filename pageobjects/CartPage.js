class CartPage{
    constructor (page)
    {
        this.page = page;
        this.checkOut = page.locator("text=Checkout");
    }
    async checkCart(productName)
    {
          await this.page.locator(".itemNumber").waitFor();
          return await this.page.getByText(productName).isVisible();
          
          
    }
    async clickCheckOut (){
        await this.checkOut.click();
    }
}
module.exports={CartPage};