function insert2DArrayIntoSheet(range) {
  var columnCount = range[0].length
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

  var ss=SpreadsheetApp.getActive();
  var sh=ss.getActiveSheet();
  var array = [];
  array.push(33);
  array.push(323);

  return(array)
}

// =insert2DArrayIntoSheet()

//google: .getRange(range).setValues(values)
// https://webapps.stackexchange.com/questions/10629/how-to-pass-a-range-into-a-custom-function-in-google-spreadsheets
