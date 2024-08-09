const {test, expect} = require("@playwright/test");
const{serviceNow} = require("../pageObjects/serviceNow");


test('ServiceNow',async({page})=>{
    const servicenow = new serviceNow(page);
    await servicenow.navigationJob();
    await servicenow.searchJobs("Hyderabad","QA");
    

})
