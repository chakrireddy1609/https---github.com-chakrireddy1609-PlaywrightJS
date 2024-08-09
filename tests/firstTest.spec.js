const {test, expect} = require("@playwright/test");
const {rahul}=require("../pageObjects/rahul")

test('Rahul Shetty',async({page})=>{
    
    const Rahul = new rahul(page);
    await Rahul.navigation();
    await Rahul.selection("Practice Page","option3");
    
})
