const {expect} = require("@playwright/test");

class rahul{
    constructor(page){
        this.page = page
        this.radio = page.locator("fieldset label input[value='radio3']")
        this.dropdown = page.locator("#dropdown-class-example");
        this.checkbox = page.locator("fieldset label input[id='checkBoxOption3']")

    }

    async navigation(){
        await this.page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    }

    async selection(title,dropdownOption){
    await expect (this.page).toHaveTitle(title);
    await this.radio.click();
    await expect (this.radio).toBeChecked;
    const dropdown = this.dropdown
    await this.dropdown.selectOption(dropdownOption);
    await this.checkbox.click();
    await expect (this.checkbox).toBeChecked();

    }
}

module.exports={rahul};