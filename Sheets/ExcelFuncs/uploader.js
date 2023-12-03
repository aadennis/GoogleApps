function importAndCreateChart() {
  var file = DriveApp.getFilesByName('EnergyUsage.xls').next();
  var spreadsheet = SpreadsheetApp.open(file);
  var sheet = spreadsheet.getSheets()[0]; // Assumes data is on the first sheet

  // Get the data
  var data = sheet.getDataRange().getValues();

  // Create a new sheet for the imported data
  var newDataSheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet('ImportedData');
  newDataSheet.getRange(1, 1, data.length, data[0].length).setValues(data);

  // Create a chart
  var chart = newDataSheet.newChart()
    .asLineChart()
    .setTitle('Energy Consumption Over Time')
    .setXAxisTitle('Date Time')
    .setYAxisTitle('kWh')
    .addRange(newDataSheet.getRange(1, 1, data.length, 2))
    .setPosition(5, 5, 0, 0)
    .build();

  // Insert chart into the sheet
  newDataSheet.insertChart(chart);
}

function convertExcelToGoogleSheets() {
  // https://developers.google.com/apps-script/advanced/drive
  var excelFile = DriveApp.getFilesByName('EnergyUsage.xls').next();
  var folder = DriveApp.getFolderById('1ry9f7JFliRiITFwe6LSlR8i4b3CJ0oJV'); //('ENERGY_DATA'); 
  var x = excelFile.getName()
  // Create a copy of the Excel file in Google Sheets format
  var newSpreadsheet = SpreadsheetApp.create(excelFile.getName() + ' (Converted)');
  var newSpreadsheetId = newSpreadsheet.getId();
  var newSpreadsheetFile = DriveApp.getFileById(newSpreadsheetId);

  // Move the new Google Sheets file to the desired folder
  folder.createFile(newSpreadsheetFile.getBlob());
}

function runit() {
  convertExcelToGoogleSheets()
  // Move the new Google Sheets file to the desired folder
  // folder.createFile(googleSheetFile);
}

