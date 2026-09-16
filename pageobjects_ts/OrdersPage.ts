import {Page,Locator} from '@playwright/test'

export class OrdersPage{
    page:Page;
    orderRow:Locator;
    constructor (page:Page){
        this.page = page;
        this.orderRow= page.locator(".ng-star-inserted");

    }

    async goThroughOrders(cleanOrderText:string){
        const ordersCnt = await this.orderRow.count();
        console.log("CNT " +ordersCnt);

        //iterate through the order entries
                for (let i=0; i<ordersCnt; ++i)
                    {
                    
                       const rowElement =  this.page.locator("tbody .ng-star-inserted").nth(i);
                       const rowOrderText:string|null = await rowElement.locator("[scope*='row']").textContent();
                         if(rowOrderText?.includes(cleanOrderText))
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