const ExcelJs = require("exceljs");
const { test, expect } = require("@playwright/test");

async function updateExcelTest(
  searchText,
  replaceText,
  changeLocation,
  filepath
) {
  const workbook = new ExcelJs.Workbook();

  await workbook.xlsx.readFile(filepath);
  const worksheet1 = workbook.getWorksheet("Sheet1");
  const output = {
    row: -1,
    column: -1,
  }; //output object to hold cell location to change value

  //read sheet
  worksheet1.eachRow((row, rowNumber) => {
    row.eachCell((cell, colNumber) => {
      // console.log("ROW:"+ rowNumber + " COL:" + colNumber + " VAL: "+ cell.value)
      if (cell.value === searchText) {
        // console.log("ROW#: "+rowNumber);
        // console.log("COL#: "+ colNumber);

        //update the locator if the text is matched
        output.row = rowNumber;
        output.column = colNumber;
      }
    });
  });

  //read and write cell
  const cell = worksheet1.getCell(
    output.row,
    output.column + changeLocation.colChange
  );
  cell.value = replaceText;
  await workbook.xlsx.writeFile(filepath);
}

test("Upload download excel validation", async ({ page }) => {
  const filepath = "/Users/karen/Downloads/download.xlsx";
  const textSearch = "Papaya";
  const priceChange = "350";

  await page.goto("https://rahulshettyacademy.com/upload-download-test/");
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: "Download" }).click();
  const dl = await downloadPromise;
  await dl.saveAs(filepath);
  await updateExcelTest(
    textSearch,
    priceChange,
    { rowChange: 0, colChange: 2 },
    filepath
  );
  await page.locator("#fileinput").setInputFiles(filepath);

  const desiredRow = await page
    .getByRole("row")
    .filter({ has: page.getByText(textSearch) });
  await expect(desiredRow.locator("#cell-4-undefined")).toContainText(
    priceChange
  );
});
