const {test} = require("@playwright/test");
const {POManager}=require("../pageObjects/POManager")

test('Rahul Shetty',async({page})=>{
    
    const pm = new POManager(page)
    await pm.rahulPage.navigation();
    await pm.rahulPage.selection("Practice Page","option3");
    
})
