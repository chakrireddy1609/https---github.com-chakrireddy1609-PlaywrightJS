const {expect} = require("@playwright/test");

class serviceNow{
    constructor(page){
        this.page = page
        this.locationDropdown = page.locator(".form-select");
        this.openJobs = page.getByText("See Open Jobs");
        this.tenthJob = page.locator(".card-job").nth(10)
        this.searchBox = page.locator("input#l-search");
        this.applyFilters = page.getByRole("button",{name:'Apply filters'})
        this.totalJobs = page.locator(".job-count");
        this.countJobs = page.locator(".card-job")
        this.jobTitle = page.locator(".card-job a");
        this.date = page.locator("//*[@class='card-body']/ul/li[4]");
        
    

    }

async navigationJob(){
    await this.page.goto("https://careers.servicenow.com/en/");
}

async searchJobs(city,searchTerm){
    
    await this.page.locator(".form-select").click();
    await this.locationDropdown.selectOption(city);
    await this.openJobs.click();
    await expect(this.tenthJob).toBeVisible();
    await this.searchBox.fill(searchTerm)
    await this.applyFilters.click();
    await expect(this.tenthJob).toBeVisible();
    const totalJobs = await this.totalJobs.textContent();
    console.log(totalJobs);
    const count = await this.countJobs.count();
    for (let i=0;i<count;i++){
        console.log(await this.jobTitle.nth(i).textContent()+ await this.date.nth(i).textContent());

}
}}

module.exports ={serviceNow};