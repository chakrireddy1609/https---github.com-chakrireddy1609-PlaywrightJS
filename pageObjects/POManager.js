const {rahul} = require("./rahul")
const {serviceNow} = require("./serviceNow")

class POManager{
    constructor(page){
        this.page = page
        this.rahulPage = new rahul(this.page);
        this.serviceNowPage = new serviceNow(this.page);
    }

    serviceNowPage(){
        return this.serviceNowPage
    }
    rahulPage(){
        return this.rahulPage
    }
}

module.exports={POManager};