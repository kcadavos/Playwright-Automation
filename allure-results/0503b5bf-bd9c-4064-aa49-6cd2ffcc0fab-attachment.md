# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EventBooking.spec.js >> Book Event
- Location: tests/EventBooking.spec.js:3:1

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('#event-card').filter({ hasText: 'World Tech Summit' }).getByText('Book Now')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e4]:
      - link "EventHub" [ref=e5] [cursor=pointer]:
        - /url: /
      - generic [ref=e10]:
        - link "Home" [ref=e11] [cursor=pointer]:
          - /url: /
        - link "Events" [ref=e12] [cursor=pointer]:
          - /url: /events
        - link "My Bookings" [ref=e13] [cursor=pointer]:
          - /url: /bookings
        - link "API Docs" [ref=e14] [cursor=pointer]:
          - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
        - button "Admin" [ref=e16] [cursor=pointer]
        - generic [ref=e19]:
          - generic "ksmith@gmail.com" [ref=e20]
          - button "Logout" [ref=e21] [cursor=pointer]
  - main [ref=e22]:
    - generic [ref=e23]:
      - generic [ref=e26]:
        - heading "Discover & Book Amazing Events" [level=1] [ref=e27]: Discover & BookAmazing Events
        - paragraph [ref=e28]: From tech conferences to live concerts, sports events to cultural festivals — find experiences that inspire you.
        - generic [ref=e29]:
          - link "Browse Events →" [ref=e30] [cursor=pointer]:
            - /url: /events
          - link [ref=e32] [cursor=pointer]:
            - /url: /bookings
            - button "My Bookings" [ref=e33]
      - generic [ref=e34]:
        - generic [ref=e35]:
          - generic [ref=e36]:
            - heading "Featured Events" [level=2] [ref=e37]
            - paragraph [ref=e38]: Hand-picked upcoming events just for you
          - link "View all →" [ref=e39] [cursor=pointer]:
            - /url: /events
        - generic [ref=e40]:
          - article [ref=e41]:
            - generic [ref=e42]:
              - img "Dilli Diwali Mela" [ref=e43]
              - generic [ref=e44]: Festival
              - generic [ref=e46]: Featured
            - generic [ref=e47]:
              - link [ref=e48] [cursor=pointer]:
                - /url: /events/3
                - heading "Dilli Diwali Mela" [level=3] [ref=e49]
              - generic [ref=e50]:
                - generic [ref=e51]: Tue, 20 Oct
                - generic [ref=e55]: Pragati Maidan Exhibition Grounds, Delhi
              - generic [ref=e59]:
                - generic [ref=e60]:
                  - paragraph [ref=e61]: $300
                  - generic [ref=e62]: 7 seats left!
                - link "Book Now" [ref=e63] [cursor=pointer]:
                  - /url: /events/3
          - article [ref=e64]:
            - generic [ref=e65]:
              - img "Hollywood Monsoon Night — Los Angeles" [ref=e66]
              - generic [ref=e67]: Concert
              - generic [ref=e69]: Featured
            - generic [ref=e70]:
              - link [ref=e71] [cursor=pointer]:
                - /url: /events/2
                - heading "Hollywood Monsoon Night — Los Angeles" [level=3] [ref=e72]
              - generic [ref=e73]:
                - generic [ref=e74]: Sat, 11 Jul
                - generic [ref=e78]: Dome, NSCI SVP Stadium, Worli, Los Angeles
              - generic [ref=e82]:
                - generic [ref=e83]:
                  - paragraph [ref=e84]: $2,500
                  - generic [ref=e85]: 8 seats left!
                - link "Book Now" [ref=e86] [cursor=pointer]:
                  - /url: /events/2
          - article [ref=e87]:
            - generic [ref=e88]:
              - img "World Tech Summit" [ref=e89]
              - generic [ref=e90]: Conference
              - generic [ref=e92]: Featured
              - generic [ref=e93]: SOLD OUT
            - generic [ref=e95]:
              - link [ref=e96] [cursor=pointer]:
                - /url: /events/1
                - heading "World Tech Summit" [level=3] [ref=e97]
              - generic [ref=e98]:
                - generic [ref=e99]: Sat, 18 Apr
                - generic [ref=e103]: Hyderabad, Hitech city, Hyderabad
              - generic [ref=e107]:
                - generic [ref=e108]:
                  - paragraph [ref=e109]: $1,500
                  - text: SOLD OUT
                - link "Sold Out" [disabled]:
                  - /url: /events/1
      - generic [ref=e111]:
        - heading "Ready to experience something new?" [level=2] [ref=e112]
        - paragraph [ref=e113]: Browse thousands of events across India. Book tickets in seconds.
        - link [ref=e114] [cursor=pointer]:
          - /url: /events
          - button "Explore All Events" [ref=e115]
  - contentinfo [ref=e116]:
    - generic [ref=e117]:
      - generic [ref=e118]:
        - generic [ref=e119]:
          - heading "Rahul Shetty Academy" [level=3] [ref=e120]
          - paragraph [ref=e121]: India's leading QA automation training academy — empowering engineers to build real-world testing skills.
        - generic [ref=e122]:
          - heading "Popular Courses" [level=3] [ref=e123]
          - list [ref=e124]:
            - listitem [ref=e125]:
              - link "Selenium WebDriver with Java" [ref=e126] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e127]:
              - link "Playwright with JavaScript" [ref=e128] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e129]:
              - link "RestAssured API Testing" [ref=e130] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e131]:
              - link "Cypress End-to-End Testing" [ref=e132] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e133]:
              - link "Appium Mobile Testing" [ref=e134] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
        - generic [ref=e135]:
          - heading "QA Job Hiring Platform" [level=3] [ref=e136]
          - paragraph [ref=e137]: Get hired faster — take skill assessments trusted by top QA employers worldwide.
          - link "techsmarthire.com →" [ref=e138] [cursor=pointer]:
            - /url: https://techsmarthire.com
        - generic [ref=e139]:
          - heading "EventHub Practice App" [level=3] [ref=e140]
          - list [ref=e141]:
            - listitem [ref=e142]:
              - link "Browse Events" [ref=e143] [cursor=pointer]:
                - /url: /events
            - listitem [ref=e144]:
              - link "My Bookings" [ref=e145] [cursor=pointer]:
                - /url: /bookings
            - listitem [ref=e146]:
              - link "Manage Events" [ref=e147] [cursor=pointer]:
                - /url: /admin/events
            - listitem [ref=e148]:
              - link "API Documentation" [ref=e149] [cursor=pointer]:
                - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
      - generic [ref=e150]:
        - paragraph [ref=e151]: © 2026 Rahul Shetty Academy. All rights reserved.
        - generic [ref=e152]:
          - link "rahulshettyacademy.com →" [ref=e153] [cursor=pointer]:
            - /url: https://rahulshettyacademy.com
          - link "techsmarthire.com →" [ref=e154] [cursor=pointer]:
            - /url: https://techsmarthire.com
  - alert [ref=e155]
```

# Test source

```ts
  1  | const {test,expect} = require ("@playwright/test");
  2  | 
  3  | test ("Book Event", async ({page})=>{
  4  |      page.goto("https://eventhub.rahulshettyacademy.com/")
  5  | 
  6  |      const emailField = page.locator('#email');
  7  |      await emailField.fill("ksmith@gmail.com");
  8  | 
  9  |      const passwordField = page.locator('#password');
  10 |      await passwordField.fill("12345Pass@");
  11 | 
  12 |      const sigInBtn = page.locator("#login-btn");
  13 |      await sigInBtn.click();
  14 | 
  15 |     
  16 |      const eventCardSection = page.locator("#event-card").filter({hasText:'World Tech Summit'}).getByText("Book Now")
> 17 |      await eventCardSection.click();
     |                             ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  18 | 
  19 |      // Booking page
  20 |      const fullnameField = page.locator("#customerName");
  21 |      await fullnameField.fill("Karen Anne");
  22 |      
  23 |      const customerEmailField = page.locator("#customer-email");
  24 |      await customerEmailField.fill("ksmith@gmail.com");
  25 | 
  26 | 
  27 |     const phoneField = page.locator("#phone");
  28 |     await phoneField.fill("1234567890");
  29 | 
  30 |     // take note of the current available seats before boooking
  31 |     const [currentAvaibleSeatText] = (await page.getByText("seats").textContent()).split("/");
  32 |     const currentAvailSeatCount = currentAvaibleSeatText[0];
  33 |     await console.log("CURRENT AVAILABLE SEATS: "+ currentAvailSeatCount);
  34 | 
  35 |     const confirmBookingBtn = page.locator("#confirm-booking");
  36 |     await confirmBookingBtn.click();
  37 | 
  38 |     //booking confirmation page
  39 |     await expect (page.getByText("Booking Confirmed! 🎉")).toBeVisible();
  40 | 
  41 |     //navigate to events page
  42 |     const eventsLink = page.locator("#nav-events");
  43 |     await eventsLink.click();
  44 | 
  45 |     const eventCardSeatsText = page.locator("#event-card").filter({hasText:'World Tech Summit'}).getByText("seats left").innerText();
  46 |     const eventCardSeatsTextCnt = parseInt(eventCardSeatsText);
  47 |     await console.log("EVENT SEAT TEXT:"+ eventCardSeatsTextCnt);
  48 | 
  49 |     const expectedCurrentAvailSeat = await currentAvailSeatCount -1;
  50 |     await console.log("CURRENT AVAIL SEAT -1 :"+ expectedCurrentAvailSeat);
  51 | 
  52 |     await expect(expectedCurrentAvailSeat === eventCardSeatsTextCnt).toBeTruthy();
  53 |     //  await page.pause()
  54 | 
  55 |     
  56 | 
  57 | })
  58 | 
  59 | 
```