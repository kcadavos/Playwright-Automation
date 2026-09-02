class OrdersPage{
    constructor (page){
        this.page = page;
        this.orderRow= page.locator(".ng-star-inserted");

    }

    async goThroughOrders(cleanOrderText){
        const ordersCnt = await this.orderRow.count();
        console.log("CNT " +ordersCnt);

        //iterate through the order entries
                for (let i=0; i<ordersCnt; ++i)
                    {
                    
                       const rowElement =  this.page.locator("tbody .ng-star-inserted").nth(i);
                       const rowOrderText = await rowElement.locator("[scope*='row']").textContent();
                         if(rowOrderText.includes(cleanOrderText))
                         {
                            console.log("row order text " + rowOrderText);
                             await (rowElement.locator(".btn-primary")).click();
                             break;
                         }

                    }
            
            
            //verify Order Summary Page
            await this.page.waitForLoadState('networkidle');
    }
}
module.exports={OrdersPage};