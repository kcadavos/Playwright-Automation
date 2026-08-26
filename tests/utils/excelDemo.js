const ExcelJs= require('exceljs');

async function excelTest()
{

    const workbook = new ExcelJs.Workbook();
    
    await  workbook.xlsx.readFile("/Users/karen/Desktop/Learning/Playwright Automation/download.xlsx");
    
    const worksheet1 = workbook.getWorksheet('Sheet1');
     worksheet1.eachRow((row, rowNumber)=>{
        row.eachCell((cell,colNumber)=>{
            console.log("ROW:"+ rowNumber + " COL:" + colNumber + " VAL: "+ cell.value)
            
        })
    })
    
}


excelTest();