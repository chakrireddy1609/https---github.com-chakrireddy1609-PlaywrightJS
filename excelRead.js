const excelJs = require('exceljs');

async function writeExcel(sheet,path,inputText,replaceText){
    
    const workbook = new excelJs.Workbook()
    await workbook.xlsx.readFile(path);
    const worksheet = workbook.getWorksheet(sheet);
    const output = await readExcel(inputText,worksheet);
    const cell = worksheet.getCell(output.row,output.column);
    cell.value = replaceText;
    await workbook.xlsx.writeFile(path);

}
async function readExcel(inputText,worksheet){
    let output = {row:-1,column:-1};
    worksheet.eachRow((row,rowNumber)=>{
        row.eachCell((cell,colNumber)=>{
            if (cell.value === inputText){
                output.row = rowNumber;
                output.column = colNumber;
            }
        })
    })
    return output;
    

}

writeExcel("Sheet1","/Users/chakri/downloads/file_example_XLSX_10.xlsx",3598,1609);