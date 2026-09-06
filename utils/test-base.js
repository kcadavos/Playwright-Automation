const base= require("@playwright/test");

exports.customtest =base.test.extend(
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
