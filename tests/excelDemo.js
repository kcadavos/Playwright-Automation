const ExcelJs= require('exceljs');

async function updateExcelTest(searchText, replaceText, filepath)
{

    const workbook = new ExcelJs.Workbook();
    
    await  workbook.xlsx.readFile(filepath);
    
    
    const worksheet1 = workbook.getWorksheet('Sheet1');

    let output={
        row:-1,
        column:-1
    }; //output object to hold cell location to change value

    //read sheet
     worksheet1.eachRow((row, rowNumber)=>{
        row.eachCell((cell,colNumber)=>{
            // console.log("ROW:"+ rowNumber + " COL:" + colNumber + " VAL: "+ cell.value)
            if (cell.value ===searchText)
                {
                    // console.log("ROW#: "+rowNumber);
                    // console.log("COL#: "+ colNumber);

                    //update the locator if the text is matched
                    output.row = rowNumber;
                    output.column = colNumber;
                }

        })
    })
    
   //read and write cell
    const cell = worksheet1.getCell(output.row,output.column);
    cell.value = replaceText;
    await workbook.xlsx.writeFile(filepath);


}

updateExcelTest("Papaya", "Atis", "/Users/karen/Desktop/Learning/Playwright Automation/download.xlsx")

test("Upload download excel validation", ({})=>{

})

