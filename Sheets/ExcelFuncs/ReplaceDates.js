function cleanDateTime() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var range = sheet.getRange("A1:A1000"); 
  
  var values = range.getValues();
  var cleanedValues = [];
  
  for (var i = 0; i < values.length; i++) {
    var dateObject = new Date(values[i][0]);
    var timeString = Utilities.formatDate(dateObject, "GMT", "HH:mm:ss");
    cleanedValues.push([timeString]);
  }
  
  range.setValues(cleanedValues);
}

function deleteEmptyOrZeroRows() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var range = sheet.getRange("B3:B30"); 

  var values = range.getValues();
  var rowsToDelete = [];

  for (var i = 0; i < values.length; i++) {
    var cellValue = values[i][0];

    if (cellValue === "" || cellValue === 0) {
      rowsToDelete.push(i + 1); // Sheets are 1-indexed
    }
  }

  // Delete rows in reverse order to avoid issues with changing row indices
  for (var j = rowsToDelete.length - 1; j >= 0; j--) {
    sheet.deleteRow(rowsToDelete[j]);
  }
}

function convertExcelToGoogleSheets() {
  var excelFile = DriveApp.getFilesByName('Power2').next();
  var folder = DriveApp.getFolderById('1ry9f7JFliRiITFwe6LSlR8i4b3CJ0oJV'); // Replace with the actual folder ID where you want to create the new Google Sheets document

  // Create a copy of the Excel file in Google Sheets format
  var newSpreadsheet = SpreadsheetApp.create(excelFile.getName() + ' (Converted)');
  var newSpreadsheetId = newSpreadsheet.getId();
  var newSpreadsheetFile = DriveApp.getFileById(newSpreadsheetId);

  // Move the new Google Sheets file to the desired folder
  folder.createFile(newSpreadsheetFile.getBlob());
  
  // Optionally, delete the original Excel file
  // excelFile.setTrashed(true);
}

function convertExcelToGoogleSheets2() {
  var excelFile = DriveApp.getFilesByName('Power2').next();
  var folder = DriveApp.getFolderById('1ry9f7JFliRiITFwe6LSlR8i4b3CJ0oJV'); // Replace with the actual folder ID where you want to create the new Google Sheets document

  // Create a copy of the Excel file in Google Sheets format
  var newSpreadsheet = SpreadsheetApp.create(excelFile.getName() + ' (Converted)');
  var newSpreadsheetId = newSpreadsheet.getId();
  var newSpreadsheetFile = DriveApp.getFileById(newSpreadsheetId);

  // Get the active sheet of the new Google Sheets file
  var newSheet = newSpreadsheet.getSheets()[0];

  // Get data from the Excel file
  var excelData = SpreadsheetApp.open(excelFile).getDataRange().getValues();

  // Set data to the new Google Sheets file
  newSheet.getRange(1, 1, excelData.length, excelData[0].length).setValues(excelData);

  // Move the new Google Sheets file to the desired folder
  //folder.createFile(newSpreadsheetFile.getBlob());
  // Move the new Google Sheets file to the desired folder
  folder.createFile(newSpreadsheetFile.getBlob().setName('fliksy.xlsx'));

  
  // Optionally, delete the original Excel file
  // excelFile.setTrashed(true);
}

