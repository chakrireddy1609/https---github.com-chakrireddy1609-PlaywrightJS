const {test} = require("@playwright/test");
const{serviceNow} = require("../pageObjects/serviceNow");
const {POManager}=require("../pageObjects/POManager")



test('ServiceNow',async({page})=>{
    const pm = new POManager(page)
    await pm.serviceNowPage.navigationJob();
    await pm.serviceNowPage.searchJobs("Hyderabad","QA");
    

})
