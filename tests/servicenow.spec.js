const {test} = require("@playwright/test");
const {POManager}=require("../pageObjects/POManager")
const dataset = JSON.parse(JSON.stringify(require("../utils/testDataServiceNow.json")))


for (const data of dataset){
test(`ServiceNow ${data.city}`,async({page})=>{
    const pm = new POManager(page)
    await pm.serviceNowPage.navigationJob();
    await pm.serviceNowPage.searchJobs(data.city,data.inputFilter);
    

})
}