//https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary
Number.prototype.round = function(places) {
    return +(Math.round(this + "e+" + places)  + "e-" + places);
  }
  
  function MacroPlusOne() {
    // Add 1 to the referenced cell
  
    var spreadsheet = SpreadsheetApp.getActive();
    var sheet = spreadsheet.getActiveSheet();
    var cellRange = sheet.getActiveCell();
  
    var input_value = cellRange.offset(0,-2).getValue();
    var output_value = input_value + 1;
    
    /* console.log(input_value)
    console.log(output_value)
    */
    
    return output_value
  }
  
  class Doit {
    constructor(x, y){
      this.x = x;
      this.y = y;
    }
  
    static CallIt() {
      return 45;
    }
  }
  
  function Perleeze() {
    a = new Doit(44,33);
    // var b = a.CallIt();
    var c = Doit.CallIt()
    console.log(c);
  }
  
  function insert2DArrayIntoSheet(range) {
    var columnCount = range[0].length
    var rowCount = range.length
  
    console.log("number of columns: " + columnCount)
    console.log("number of rows: " + rowCount)
    
    
    // ref length: e.g. C4:C8 returns range.length == 5. This is a basically a JS 2D array
    // range is treated as javascript's 2d array. You can get the 
    // number of rows with range.length and the 
    // number of columns with range[0].length. 
    // If you want to get the value from row r and column c use: range[r][c].
  
    var ss=SpreadsheetApp.getActive();
    var sh=ss.getActiveSheet();
    // var array=[[1,2,3],[4,5,6],[7,8,9]];
    var array = [];
    //var array=[1,2,3,4,5,6,7,8,9];
    array.push(33);
    array.push(323);
    
  
  
    //var rg=sh.getRange(1,1,array.length,array[0].length);
    return(array)
    // rg.setValues(array);
  }
  
  // =insert2DArrayIntoSheet()
  
  //google: .getRange(range).setValues(values)
  // https://webapps.stackexchange.com/questions/10629/how-to-pass-a-range-into-a-custom-function-in-google-spreadsheets