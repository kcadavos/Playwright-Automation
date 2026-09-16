import {test as baseTest} from '@playwright/test'

interface testDataForOrder {
    userName: string;
    password: string;
    productName: string;
    countryName: string;
};
export const customtest =baseTest.extend<{testDataForOrder:testDataForOrder}>(
    
        
{
    testDataForOrder :
    {
        userName: "ksmith@gmail.com",
        password :"12345Pass",
        productName: "ZARA COAT 3",
        countryName :"India"
        }
}
)
