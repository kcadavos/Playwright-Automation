class PaymentPage{
    constructor (page){
        this.page= page;
        this.countryField = page.locator("[placeholder*='Country']");
        this.countryDDL = page.locator(".ta-results"); 
        this.countryDDLButton = page.locator(".ta-results").locator("button");
        this.submitBtn = page.locator(".action__submit");
    }

    async enterPaymentDetails(countryName){
        await this.countryField.pressSequentially("ind",{delay:150}); // do not use fill and this types it slowly 
        await  this.countryDDL.waitFor();
        const optionsCount = await this.countryDDLButton.count();

        for (let i =0; i<optionsCount; ++i)
            { 
                const text = (await this.countryDDLButton.nth(i).textContent()).trim();
                console.log ("TEXT:"+text);
           
                if (text=== countryName)
                {

                    await this.countryDDLButton.nth(i).click();
                    break;
                }

            }

       
    }

    async clickSubmit(){
        
        await this.submitBtn.click();
    }
}

module.exports={PaymentPage};