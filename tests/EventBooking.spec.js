const {test,expect} = require ("@playwright/test");

test ("Book Event", async ({page})=>{
     page.goto("https://eventhub.rahulshettyacademy.com/")

     const emailField = page.locator('#email');
     await emailField.fill("ksmith@gmail.com");

     const passwordField = page.locator('#password');
     await passwordField.fill("12345Pass@");

     const sigInBtn = page.locator("#login-btn");
     await sigInBtn.click();

    
     const eventCardSection = page.locator("#event-card").filter({hasText:'Dilli Diwali Mela'}).getByText("Book Now")
     await eventCardSection.click();

     // Booking page
     const fullnameField = page.locator("#customerName");
     await fullnameField.fill("Karen Anne");
     
     const customerEmailField = page.locator("#customer-email");
     await customerEmailField.fill("ksmith@gmail.com");


    const phoneField = page.locator("#phone");
    await phoneField.fill("1234567890");

    // take note of the current available seats before boooking
    const [currentAvaibleSeatText] = (await page.getByText("seats").textContent()).split("/");
    const currentAvailSeatCount = currentAvaibleSeatText[0];
    await console.log("CURRENT AVAILABLE SEATS: "+ currentAvailSeatCount);

    const confirmBookingBtn = page.locator("#confirm-booking");
    await confirmBookingBtn.click();

    //booking confirmation page
    await expect (page.getByText("Booking Confirmed! 🎉")).toBeVisible();

    //navigate to events page
    const eventsLink = page.locator("nav-events");
    await eventsLink.click();

    // const eventCardSeatsText = page.locator("#event-card").filter({hasText:'World Tech Summit'}).getByText("seats left");
    // await console.log("EVENT SEAT TEXT:"+ eventCardSeatsText);

    //  await page.pause()

    

})

