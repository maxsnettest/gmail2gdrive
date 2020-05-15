// -----------------------------------------------------------------------------
// Max Prat-Carrabin 2020
// Google Apps Script to create a Google Spreadsheet to the gmail2gdrive script of https://github.com/ahochsteger/gmail2gdrive, as per request https://github.com/ahochsteger/gmail2gdrive/issues/37
//
// Naming conventionts to functions and variables:
// First part in lowercase is a human understandable name.
// Second part with caps locks for first letters are the Class, seperated by a '_', to which they belong to.
// Functions start witf 'f_'
//
// Exemple: 
// Variable: folder_id_String is a folder id as a string.
// Function: f_add_headers_log_file_Int adds headers and returns an Int. 
//
/*
//Scenario: folder already created and we have its id.
var folder_id_String   = "1gnctVvynVtbE-DWc3c4OURLOkqqEqGrg";

// -----------------------------------------------------------------------------
// Prepare the SpreadsheetApp_Spreadsheet logfile from the String fodler id.
// Return 1
function f_prepare_log_file_Int(folder_id_String){
  var folder_DriveApp_Folder = f_folder_DriveApp_Folder(folder_id_String);
 // var logfile_SpreadsheetApp_Spreadsheet = f_create_logfile_SpreadsheetApp_Spreadsheet(folder_DriveApp_Folder);
  CacheService.getScriptCache().put("logfile_SpreadsheetApp_Spreadsheet", f_create_logfile_SpreadsheetApp_Spreadsheet(folder_DriveApp_Folder));
  f_add_headers_log_file_Int(CacheService.getScriptCache().get("logfile_SpreadsheetApp_Spreadsheet"));
  return 1;  
}

// -----------------------------------------------------------------------------
// Returns the DriveApp_Folder folder from the String folder id.
function f_folder_DriveApp_Folder(folder_id_String){
  return DriveApp.getFolderById(folder_id_String);    
}

// -----------------------------------------------------------------------------
// Creates the log file on Goole Drive in the indicated DriveApp_Folder folder.
// Then returns it, as SpreadsheetApp_Spreadsheet, by opening it.
function f_create_logfile_SpreadsheetApp_Spreadsheet(folder_DriveApp_Folder) {

  // -----------------------------------------------------------------------------
  // Prepare Log File Name ( log + date )
  var logfname_String   = "log" + Utilities.formatDate(new Date(), "GMT", "yyyyMMdd HH:mm:ss");
  
  // -----------------------------------------------------------------------------
  // Create temporary Spreadsheet at the root of the Google Drive folder
  // returns SpreadsheetApp.Spreadsheet
  // https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet
  var logfiletemp_SpreadsheetApp_Spreadsheet = SpreadsheetApp.create(logfname_String);
  Logger.log(logfiletemp_SpreadsheetApp_Spreadsheet.getUrl());

  // -----------------------------------------------------------------------------  
  // Get the SpreadsheetApp.Spreadsheet temporary log file as a DriveApp.File
  var logfiletemp_DriveApp_File = DriveApp.getFileById(logfiletemp_SpreadsheetApp_Spreadsheet.getId());

  // -----------------------------------------------------------------------------
  // Copy the temporary log file into its final destination
  // DriveApp.File.makeCopy(name, Destinateion)
  // name	is String	
  // destination	is Folder	
  // returns  File
  // https://developers.google.com/apps-script/reference/drive/file#makecopydestination
  var logfile_DriveApp_File = logfiletemp_DriveApp_File.makeCopy(logfname_String,DriveApp.getFolderById(folder_id_String));

  // -----------------------------------------------------------------------------
  // Delete the temporary log file
  // DriveApp.removeFile(child) 
  // child is a file
  // returns Folder
  DriveApp.removeFile(logfiletemp_DriveApp_File);
  
  return SpreadsheetApp.openById(logfile_DriveApp_File.getId());
  
}

// -----------------------------------------------------------------------------
// Adds the header (the first line) to the log file SpreadsheetApp_Spreadsheet
// Return 1
function f_add_headers_log_file_Int(SpreadsheetApp_Spreadsheet){
    
  f_addaline_log_file_SpreadsheetApp(SpreadsheetApp_Spreadsheet,"Mail title","Mail date","Mail id","Mail link","Thread PDF Link","Attachement Name","Attachement Link");
  return 1;
    
}

function f_addaline_log_file_SpreadsheetApp(SpreadsheetApp_Spreadsheet,A,B,C,D,E,F,G){
  
  // -----------------------------------------------------------------------------
  // Google comments:  
  // for most use cases
  // the built-in method SpreadsheetApp.getActiveSpreadsheet()
  // .getRange(range).setValues(values) is more appropriate.
  
  // -----------------------------------------------------------------------------
  // Related Links:
  // setvalues:  https://developers.google.com/apps-script/reference/spreadsheet/range#setvaluesvalues
  // range https://developers.google.com/apps-script/reference/spreadsheet/range
  // getrange https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getRange(String)
  // spreadsheet https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet
  // getactivespreadsheet https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#getactivespreadsheet
  // activespreadsheet https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#getActiveSpreadsheet()
  // spreadsheet app https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app
  
  // -----------------------------------------------------------------------------
  // SpreadsheetApp.Spreadsheet.Range.setValues(values)
  // values is	Object[][],	A two-dimensional array of values. - The size of the two-dimensional array must match the size of the range.
  // Returns Range — This range, for chaining.
  //
  // Exemple:
  // var ss = SpreadsheetApp.getActiveSpreadsheet();
  // var sheet = ss.getSheets()[0];
  // 
  // var values = [
  //   [ "2.000", "1,000,000", "$2.99" ]
  // ];
  // 
  // var range = sheet.getRange("B2:D2");
  // range.setValues(values);
  // 
  
  // -----------------------------------------------------------------------------
  // SpreadsheetApp.Spreadsheet.getSheets() - Gets all the sheets in this spreadsheet.
  // returns Sheet[] — An array of all the sheets in the spreadsheet.
  //
  // Exemple:
  // The code below logs the name of the second sheet
  // var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  // if (sheets.length > 1) {
  //  Logger.log(sheets[1].getName());
  // }
  //
  
  var values_Object2 = [[ A,B,C,D,E,F,G ]];
  var sheet_SpreadsheetApp_Spreadsheet_Sheet = SpreadsheetApp_Spreadsheet.getSheets()[0];
  
  // SpreadsheetApp.SpreadSheet.Sheet.getLastRow()
  // https://developers.google.com/apps-script/reference/spreadsheet/sheet#getLastRow()
  // Return Integer — the last row of the sheet that contains content
  var lastrow_Int = sheet_SpreadsheetApp_Spreadsheet_Sheet.getLastRow()+1;
  Logger.log("Lastrow+1="+lastrow_Int);

  sheet_SpreadsheetApp_Spreadsheet_Sheet.getRange("A" + lastrow_Int + ":G" + lastrow_Int).setValues(values_Object2);
  
}
*/
