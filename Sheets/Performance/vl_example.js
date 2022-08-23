//https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary
Number.prototype.round = function(places) {
  return +(Math.round(this + "e+" + places)  + "e-" + places);
}


function AddOneToAllElements(range) {
  var rangeLength = range.length;
  var AddOneSet = [];

  for (let i = 0; i < rangeLength; i++) {
    AddOneSet.push(1 + Number(range[i]));
  }

  return AddOneSet;
}

function SpToKgV3(stonesPoundsRange) {
  // convert stones and pounds/lbs to kilograms.
  // This is pur-ish JS and operates independently of the spreadsheet.
  // Any formatting / presentation is up to the Sheet.
  const kg_in_pounds = 0.45359237
  
  var rangeLength = stonesPoundsRange.length;
  console.log("Number of rows:" + rangeLength);
  var kgArray = [];
  var total_pounds = 0;

   for (let i = 0; i < rangeLength; i++) {
    total_pounds = (Number(stonesPoundsRange[i][0]) * 14) + Number(stonesPoundsRange[i][1])
    var kilograms = (total_pounds * kg_in_pounds).round(2);
    kgArray.push(kilograms);
  }
  
   return kgArray;

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

// =SheetConvertStonesPoundsToKg(
// Example call from Sheets: =SheetConvertStonesPoundsToKg(E5:E9) (error - only 1 column - too few)
// Example call from Sheets: =SheetConvertStonesPoundsToKg(E5:F9) (ok - 2 columns, being stones and pounds)

function SheetConvertStonesPoundsToKg(stonesPoundsRange) {
  var columnCount = stonesPoundsRange[0].length
  if (columnCount != 2) {
    return "Error: The passed range must have exactly 2 columns"
  }
  var rowCount = stonesPoundsRange.length;

  console.log("number of columns: " + columnCount)
  console.log("number of rows: " + rowCount)

  
  // ref length: e.g. C4:C8 returns range.length == 5. This is a basically a JS 2D array
  // range is treated as javascript's 2d array. You can get the 
  // number of rows with range.length and the 
  // number of columns with range[0].length. 
  // If you want to get the value from row r and column c use: range[r][c].

  var array = SpToKgV3(stonesPoundsRange)

  return(array)
}

// =insert2DArrayIntoSheet(

//google: .getRange(range).setValues(values)
// https://webapps.stackexchange.com/questions/10629/how-to-pass-a-range-into-a-custom-function-in-google-spreadsheets
