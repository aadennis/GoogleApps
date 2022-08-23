function AddOneToAllElements(range) {
  let str = '';
  var rangeLength = range.length;
  var AddOneSet = [];

  for (let i = 0; i < rangeLength; i++) {
    AddOneSet.push(1 + Number(range[i]));
  }

  return AddOneSet;
}

function sp_to_kgv2() {
  // convert stones and pounds/lbs to kilograms.
  // This function exists as a macro in the parent Google Sheet.
  // The macro must be called from a cell under the column header "kilos".
  // That calling cell stores the result of this function.
  // "kilos" must itself be 2 cells to the right of the column "Enter stones", and
  // 1 cell to the right of the column "Enter pounds".

  const kg_in_pounds = 0.45359237
  
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();
  var cellRange = sheet.getActiveCell();

  var stones = cellRange.offset(0,-2).getValue();
  var pounds = cellRange.offset(0,-1).getValue();
  var total_pounds = (stones * 14) + pounds;
  var kilograms = (total_pounds * kg_in_pounds).round(2);
  
/*  console.log(stones)
  console.log(pounds)
  console.log(total_pounds);
  console.log(kilograms);
*/

  return kilograms

}

function insert2DArrayIntoSheet(range) {
  var columnCount = range[0].length
  if (columnCount > 1) {
    return "Error: The passed range must have only 1 column"
  }
  var rowCount = range.length
  var firstValue = range[0][0];

  console.log("number of columns: " + columnCount)
  console.log("number of rows: " + rowCount)
  console.log("first cell:" + firstValue);
  
  // ref length: e.g. C4:C8 returns range.length == 5. This is a basically a JS 2D array
  // range is treated as javascript's 2d array. You can get the 
  // number of rows with range.length and the 
  // number of columns with range[0].length. 
  // If you want to get the value from row r and column c use: range[r][c].

  var array = AddOneToAllElements(range)

  return(array)
}

// =insert2DArrayIntoSheet(

//google: .getRange(range).setValues(values)
// https://webapps.stackexchange.com/questions/10629/how-to-pass-a-range-into-a-custom-function-in-google-spreadsheets
