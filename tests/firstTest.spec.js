const {test, expect} = require("@playwright/test");

test('Playwright',async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect (page).toHaveTitle("Practice Page");
    await page.locator("fieldset label input[value='radio3']").click();
    await expect (page.locator("fieldset label input[value='radio3']¸")).toBeChecked;
    const dropdown = page.locator("#dropdown-class-example");
    await dropdown.selectOption("option3");
    await page.locator("fieldset label input[id='checkBoxOption3']").click();
    await expect (page.locator("fieldset label input[id='checkBoxOption3']¸")).toBeChecked;
    page.pause();
    




})
