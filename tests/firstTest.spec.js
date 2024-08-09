const {test} = require("@playwright/test");
const {POManager}=require("../pageObjects/POManager")
const dataset = JSON.parse(JSON.stringify(require("../utils/testDataRahul")))

for (const data of dataset){
test(`RahulShetty ${data.selection}`,async({page})=>{
    
    const pm = new POManager(page)
    await pm.rahulPage.navigation();
    await pm.rahulPage.selection(data.text,data.selection);
    
})}
