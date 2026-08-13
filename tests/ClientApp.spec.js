const {test,expect} = require("@playwright/test");


test.only("Register", async ({page})=> {

    await page.goto("https://rahulshettyacademy.com/client/");
    const registerBtn = page.locator ('.login-wrapper-footer-text'); //locate through class
    await registerBtn.click();
    
    const pageTitle = page.locator('.login-title');
    await expect(pageTitle).toContainText("Register");
    
    const firstName = page.locator('#firstName');
    await firstName.fill('Karen');
    
    const LastName =page.locator('#lastName');
    await LastName.fill('Smith');

    const userEmail = page.locator('#userEmail');
    await userEmail.fill('ksmith1@gmail.com');

    const userMobile = page.locator('#userMobile');
    await userMobile.fill('1234567890')

    const occupation = page.locator('[formcontrolname="occupation"]');
    await occupation.selectOption({ label: 'Student' });

    const genderMale = page.locator('input[value="Male"]');
    await genderMale.check();

    const userPassword = page.locator('#userPassword');
    await userPassword.fill('12345Pass')

    const confirmPassword = page.locator('#confirmPassword');
    await confirmPassword.fill('12345Pass');

    const chkboxRequired = page.locator('[formcontrolname="required"]');
    await chkboxRequired.check();

    const loginBtn = page.locator('#login');
    await loginBtn.click();

    const createdSuccessfully =page.locator('.headcolor')
    await expect(createdSuccessfully).toContainText("Account Created Successfully");










    });