const {test, expect} = require("@playwright/test");

test('ServiceNow',async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://careers.servicenow.com/en/");
    const locationDropdown = page.locator(".form-select");
    await locationDropdown.click();
    await locationDropdown.selectOption("Hyderabad");
    await page.getByText("See Open Jobs").click();
    await expect(page.locator(".card-job").nth(10)).toBeVisible();
    await page.locator("input#l-search").fill("QA");
    await page.getByText("Apply filters").click();
    await expect(page.locator(".card-job").nth(10)).toBeVisible();
    const totalJobs = await page.locator(".job-count").textContent();
    console.log(totalJobs);
    const countJobs =  await page.locator(".card-job").count();
    const jobTitle = page.locator(".card-job a");
    const date = page.locator("//*[@class='card-body']/ul/li[4]");
    for (let i=0;i<countJobs;i++){
        console.log(await jobTitle.nth(i).textContent()+ await date.nth(i).textContent());
    }

})