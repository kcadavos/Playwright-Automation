# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Register.spec.js >> Register
- Location: tests/Register.spec.js:4:1

# Error details

```
Test timeout of 40000ms exceeded.
```

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.headcolor')
Expected substring: "Account Created Successfully"
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 40000ms
  - waiting for locator('.headcolor')
  - Test timeout of 40000ms exceeded.

```

```yaml
- banner:
  - text: Ecom
  - link " dummywebsite@rahulshettyacademy.com":
    - /url: emailto:dummywebsite@rahulshettyacademy.com
  - link "":
    - /url: "#"
  - link "":
    - /url: "#"
  - link "":
    - /url: "#"
  - link "":
    - /url: "#"
- heading "We Make Your Shopping Simple" [level=3]
- heading "Practice Website for Rahul Shetty Academy Students" [level=1]:
  - text: Practice Website for
  - emphasis: Rahul Shetty Academy
  - text: Students
- link "Register":
  - /url: "#/auth/register"
- heading "Register" [level=1]
- text: First Name
- textbox "First Name": Karen
- text: Last Name
- textbox "Last Name": Smith
- text: Email
- textbox "email@example.com": ksmith1@gmail.com
- text: Phone Number
- textbox "enter your number": "1234567890"
- text: Occupation
- combobox:
  - option "Choose your occupation" [disabled]
  - option "Doctor"
  - option "Student" [selected]
  - option "Engineer"
  - option "Scientist"
- text: Gender
- radio "Male" [checked]
- text: Male
- radio "Female"
- text: Female Password
- textbox "Passsword": 12345Pass
- text: Confirm Password
- textbox "Confirm Password":
  - /placeholder: Confirm Passsword
  - text: 12345Pass
- checkbox [checked]
- text: I am 18 year or Older
- button "Register"
- paragraph: Already have an account? Login here
- heading "Why People Choose Us?" [level=1]
- text: 
- heading "3546540" [level=1]
- paragraph: Successfull Orders
- text: 
- heading "37653" [level=1]
- paragraph: Customers
- text: 
- heading "3243" [level=1]
- paragraph: Sellers
- text: 
- heading "4500+" [level=1]
- paragraph: Daily Orders
- text: 
- heading "500+" [level=1]
- paragraph: Daily New Customer Joining
```

# Test source

```ts
  1  | const {test,expect} = require("@playwright/test");
  2  | 
  3  | 
  4  | test("Register", async ({page})=> {
  5  | 
  6  |     await page.goto("https://rahulshettyacademy.com/client/");
  7  |     const registerBtn = page.locator ('.login-wrapper-footer-text'); //locate through class
  8  |     await registerBtn.click();
  9  |     
  10 |     const pageTitle = page.locator('.login-title');
  11 |     await expect(pageTitle).toContainText("Register");
  12 |     
  13 |     const firstName = page.locator('#firstName');
  14 |     await firstName.fill('Karen');
  15 |     
  16 |     const LastName =page.locator('#lastName');
  17 |     await LastName.fill('Smith');
  18 | 
  19 |     const userEmail = page.locator('#userEmail');
  20 |     await userEmail.fill('ksmith1@gmail.com');
  21 | 
  22 |     const userMobile = page.locator('#userMobile');
  23 |     await userMobile.fill('1234567890')
  24 | 
  25 |     const occupation = page.locator('[formcontrolname="occupation"]');
  26 |     await occupation.selectOption({ label: 'Student' });
  27 | 
  28 |     const genderMale = page.locator('input[value="Male"]');
  29 |     await genderMale.check();
  30 | 
  31 |     const userPassword = page.locator('#userPassword');
  32 |     await userPassword.fill('12345Pass')
  33 | 
  34 |     const confirmPassword = page.locator('#confirmPassword');
  35 |     await confirmPassword.fill('12345Pass');
  36 | 
  37 |     const chkboxRequired = page.locator('[formcontrolname="required"]');
  38 |     await chkboxRequired.check();
  39 | 
  40 |     const loginBtn = page.locator('#login');
  41 |     await loginBtn.click();
  42 | 
  43 |     const createdSuccessfully =page.locator('.headcolor')
> 44 |     await expect(createdSuccessfully).toContainText("Account Created Successfully");
     |                                       ^ Error: expect(locator).toContainText(expected) failed
  45 |     
  46 | 
  47 | 
  48 | 
  49 | 
  50 | 
  51 | 
  52 | 
  53 | 
  54 | 
  55 |     });
```