const {test, expect,request} = require("@playwright/test");
const { assert } = require("console");
const payload = {userEmail:"anshika@gmail.com",userPassword:"Iamking@000"};
let webContext;

test('API Test',async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    page.on('response',response=>console.log(response.url(),response.status()));
    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").fill("Iamking@000");
    await page.locator("#login").click();
    await context.storageState({path:'state.json'});
    webContext = await browser.newContext({storageState:'state.json'}); 
    
})

test.only('Visual Testint', async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://accounts.joveo.com/");
    expect(await page.screenshot()).toMatchSnapshot("AccountsPage.png")

})

/* test('Playwright',async()=>{
    const page = await webContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    page.on('request',request=>console.log(request.url()))
    const card = page.locator(".card-body");
    const select_title = 'IPHONE 13 PRO';
    
    await expect (page).toHaveTitle("Let's Shop");
    await expect(page.locator("ul button[class='btn btn-custom']").first()).toBeVisible();
    const count = await card.count()
    for (let i=0;i<count;++i){
        if(await card.nth(i).locator("b").textContent()===select_title){
            await card.nth(i).locator('text= Add To Cart').click();
            break;
        }}
    await page.locator("li button[routerlink='/dashboard/cart']").click();
    const product_cart = await page.locator("div h3").nth(1).textContent();
    await expect (product_cart).toBe(select_title);
    console.log(select_title);
    console.log(product_cart);
    await page.locator("li button:has-text('Checkout')").click();
    await page.locator("input[type='text']").nth(1).fill("055");
    const month =  page.locator("select[class='input ddl']").first();
    await month.selectOption("09");
    const date =  page.locator("select[class='input ddl']").last();
    await date.selectOption("16");
    await page.locator("input[placeholder='Select Country']").pressSequentially("Ind");
    const dropdown =  page.locator(".ta-results");
    await dropdown.waitFor();
    const values = await dropdown.locator("button").count();
    for (let i = 0;i<values;++i){
        const country_text = await dropdown.locator("button").nth(i).textContent();
        if(country_text === " India"){
            await dropdown.locator("button").nth(i).click();
            break;
        }
    }
    await page.getByText('Place Order ').click();
    await page.route("",async route=>{
        const response = await page.request.fetch(route.request());
        route.fulfill({
            response,body
        })

    });
    
    const thanks_text = await page.locator(".hero-primary");
    await expect(thanks_text).toBeVisible();
    await expect(thanks_text).toHaveText(" Thankyou for the order. ");
    
    
    
    
}) */