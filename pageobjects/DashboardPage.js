class DashboardPage{
    constructor(page)
    {
        this.page = page;
        this.products =  page.locator('.card-body');
        this.productsText = page.locator('.card-body b');
        this.cart = page.locator("[routerlink*='cart']"); 
    }

    async searchProduct(productName)
    {
        await this.page.waitForLoadState('networkidle');
       const titles  = await this.productsText.allTextContents(); 
      await  console.log("TITLES: "+ titles);

        const productCnt = await this.products.count();

        for (let i=0; i<productCnt; ++i)
            {
                if (await this.products.nth(i).locator("b").textContent() === productName)
                    {
                        await this.products.nth(i).locator("text= Add to Cart").click(); // search by text
                        break; //exit the for loop once item is found
                    }
            }
    }

    async navigateToCart(page)
    {
        // await page.waitForTimeout(3000);
        await this.cart.click();
        console.log("ENTERED NAVIGATE TO CART");
        // await page.pause();
    }
}

module.exports={DashboardPage};