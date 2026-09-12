# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: WebApiPart2.spec.js >> Login
- Location: tests/WebApiPart2.spec.js:25:1

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('.card-body b').first() to be visible

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "🎯 I'll help you prepare for your next QA job — Explore the QA Career Accelerator." [ref=e11] [cursor=pointer]:
      - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart 1" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
          - generic [ref=e22]: "1"
      - listitem [ref=e23] [cursor=pointer]:
        - button "Sign Out" [ref=e24]:
          - generic [ref=e25]: 
          - text: Sign Out
  - text:    
  - generic [ref=e26]:
    - paragraph [ref=e27]: Home | Search
    - heading "Filters" [level=4] [ref=e29]
    - generic [ref=e30]:
      - textbox "search" [ref=e32]
      - generic [ref=e33]:
        - heading "Price Range" [level=6] [ref=e34]
        - generic [ref=e35]:
          - textbox "Min Price" [ref=e37]
          - textbox "Max Price" [ref=e39]
      - generic [ref=e40]:
        - heading "Categories" [level=6] [ref=e41]
        - generic [ref=e42]: 
        - generic [ref=e44]:
          - checkbox [ref=e45]
          - generic [ref=e46]: fashion
        - generic [ref=e47]:
          - checkbox [ref=e48]
          - generic [ref=e49]: electronics
        - generic [ref=e50]:
          - checkbox [ref=e51]
          - generic [ref=e52]: household
      - generic [ref=e53]:
        - heading "Sub Categories" [level=6] [ref=e54]
        - generic [ref=e55]: 
        - generic [ref=e57]:
          - checkbox [ref=e58]
          - generic [ref=e59]: t-shirts
        - generic [ref=e60]:
          - checkbox [ref=e61]
          - generic [ref=e62]: shirts
        - generic [ref=e63]:
          - checkbox [ref=e64]
          - generic [ref=e65]: shoes
        - generic [ref=e66]:
          - checkbox [ref=e67]
          - generic [ref=e68]: mobiles
        - generic [ref=e69]:
          - checkbox [ref=e70]
          - generic [ref=e71]: laptops
      - generic [ref=e72]:
        - heading "Search For" [level=6] [ref=e73]
        - generic [ref=e74]: 
        - generic [ref=e76]:
          - checkbox [ref=e77]
          - generic [ref=e78]: men
        - generic [ref=e79]:
          - checkbox [ref=e80]
          - generic [ref=e81]: women
  - generic [ref=e82]:
    - generic [ref=e83]:
      - generic [ref=e84]:
        - generic [ref=e85]: Showing 3 results |
        - generic [ref=e86]: User can only see maximum 9 products on a page
      - generic [ref=e87]:
        - generic [ref=e91]:
          - heading "ADIDAS ORIGINAL" [level=5] [ref=e92]
          - generic [ref=e93]: $ 11500
          - button "View" [ref=e95] [cursor=pointer]:
            - generic [ref=e96]: 
            - text: View
          - button " Add To Cart" [ref=e97] [cursor=pointer]:
            - generic [ref=e98]: 
            - text: Add To Cart
        - generic [ref=e102]:
          - heading "ZARA COAT 3" [level=5] [ref=e103]
          - generic [ref=e104]: $ 11500
          - button "View" [ref=e106] [cursor=pointer]:
            - generic [ref=e107]: 
            - text: View
          - button " Add To Cart" [ref=e108] [cursor=pointer]:
            - generic [ref=e109]: 
            - text: Add To Cart
        - generic [ref=e113]:
          - heading "iphone 13 pro" [level=5] [ref=e114]
          - generic [ref=e115]: $ 55000
          - button "View" [ref=e117] [cursor=pointer]:
            - generic [ref=e118]: 
            - text: View
          - button " Add To Cart" [ref=e119] [cursor=pointer]:
            - generic [ref=e120]: 
            - text: Add To Cart
    - list "Pagination" [ref=e125]:
      - listitem [ref=e126]:
        - text: «
        - generic [ref=e127]:
          - text: Previous
          - generic [ref=e128]: page
      - listitem [ref=e129]:
        - generic [ref=e130]: You're on page
        - text: "1"
      - listitem [ref=e131]:
        - generic [ref=e132]:
          - text: Next
          - generic [ref=e133]: page
        - text: »
  - generic [ref=e134]: Design and Developed By - Kunal Sharma
```

# Test source

```ts
  1  | const {test,expect} = require('@playwright/test');
  2  | let webContext;
  3  | 
  4  | 
  5  | // saving context to state.json file
  6  | test.beforeAll(async({browser})=>{
  7  |     const context = await browser.newContext();
  8  |     const page = await context.newPage();
  9  |     await page.goto("https://rahulshettyacademy.com/client/");
  10 |     const email = page.locator ('#userEmail');
  11 |     const emailValue = "ksmith@gmail.com";
  12 |     await email.fill(emailValue);
  13 | 
  14 |     const password = page.locator ('#userPassword');
  15 |     await password.fill ('12345Pass');
  16 | 
  17 |     const loginBtn = page.locator ('#login');
  18 |     await loginBtn.click();
  19 |     await page.waitForLoadState('networkidle');
  20 |     await context.storageState({path:'state.json'});
  21 |     webContext =  await browser.newContext({storageState:'state.json'});
  22 | 
  23 | })
  24 | 
  25 | test("Login", async ({})=> {
  26 | 
  27 |    
  28 |     const page = await webContext.newPage();
  29 |     await page.goto("https://rahulshettyacademy.com/client/");
  30 |     const allCardBodyTitles = page.locator('.card-body b');  // parent child locator
> 31 |     await allCardBodyTitles.first().waitFor(); // another sync step for all textContents returning an array
     |                                     ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  32 | 
  33 | 
  34 |     console.log (await allCardBodyTitles.allTextContents()); 
  35 | 
  36 |     });
```