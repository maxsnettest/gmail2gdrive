// -----------------------------------------------------------------------------
// Doesn't work or previous method tested (that works or not)
// Either way, another method has been chosen (for code optimization, or esthetism)
// Kept for future references, knowledge base, inspiration, and fun.

/*
function create_log_file_driveapp(folder) {
//doesnt work (error)
//DriveApp.createFile('TestSpreadSheetwithDriveApp', '', 'MimeType.GOOGLE_SHEETS');
//DriveApp.createFile('TestSpreadSheetwithDriveApp', '', MimeType.GOOGLE_SHEETS);
//DriveApp.createFile('TestSpreadSheetwithDriveApp', '', MimeType.application/vnd.google-apps.spreadsheet);
//DriveApp.createFile('TestSpreadSheetwithDriveApp2', '', 'application/vnd.google-apps.spreadsheet');

  
//make a file but not recognized as a spreadsheet
//DriveApp.createFile('TestSpreadSheetwithDriveApp', '', 'MimeType.application/vnd.google-apps.spreadsheet');

  // Not possible to create Google* docs with DriveApp
  // https://stackoverflow.com/questions/39308025/create-google-spreadsheet-using-google-script
}
*/

/*
// -----------------------------------------------------------------------------
// Create file with the json method 
function f_create_log_file_json(folder) {

  //prepare filename
  var logfname   = "log" + Utilities.formatDate(new Date(), "GMT", "yyyyMMdd'T'HH:mm:ss'Z'");
  
  var id_folder  = folder.getId();
  var url_folder = folder.getUrl();
      Logger.log("INFO:   ParentId: "+id_folder);
      Logger.log(url_folder);

    var resource = {
      title: logfname,
      mimeType: MimeType.GOOGLE_SHEETS,
      parents: [{ id: id_folder }]
    }
  
    var fileJson = Drive.Files.insert(resource)
    
    //Log Google Spreadsheet file created.

    var spreadsheetId = fileJson.id;
    Logger.log("INFO:   spreadsheetId: "+spreadsheetId);
    var spreadsheetFile = DriveApp.getFileById(spreadsheetId);
  var spreadsheetUrl = spreadsheetFile.getUrl();
        Logger.log(spreadsheetUrl);

}
*/

/*

function add_headers_log_file_advanced_services(){
    
    // This code uses the Sheets Advanced Service, but for most use cases
    // the built-in method SpreadsheetApp.getActiveSpreadsheet()
    //     .getRange(range).setValues(values) is more appropriate.
    var values = [
    
      [
        "Mail title"
      ],
      [
        "Mail date"
      ],
      [
        "Mail id"
      ],
      [
        "Mail link"
      ],
      [
        "Mail body"
      ]
      
    ];
    
  var valueRange = Sheets.newRowData();
    valueRange.values = values;
  
  var appendRequest = Sheets.newAppendCellsRequest();
  
  appendRequest.sheetId = spreadsheetId;
  appendRequest.rows = [valueRange];

  var result = Sheets.Spreadsheets.Values.append(valueRange, spreadsheetId, "A1", {
  valueInputOption: "USER_ENTERED"
  });

    
 //   Sheets.Spreadsheets.Values.update(resource, fileId, range, optionalArgs)
  //  var result = Sheets.Spreadsheets.Values.update(valueRange, fileId, "A1", {
  //     "majorDimension": "COLUMNS"
  //  }
  //  );
  
  
  
}
*/


/*
// -----------------------------------------------------------------------------
// Prepare the SpreadsheetApp_Spreadsheet logfile from the String fodler id.
// Return 1
function f_prepare_log_file_Int(folder_id_String){
  
  var folder_DriveApp_Folder = f_folder_DriveApp_Folder(folder_id_String);
  var logfile_SpreadsheetApp_Spreadsheet = f_create_logfile_SpreadsheetApp_Spreadsheet(folder_DriveApp_Folder);
  var logfileId_String = logfile_SpreadsheetApp_Spreadsheet.getId()
  Logger.log("INFO: logfile created - spreadsheet Id:" + logfileId_String);
  
  // Put the log file Spreasheet Id in Cache. After that, f_logfile_SpreadsheetApp_Spreadsheet can be called to retriev the Spreadheet log file.
  CacheService.getScriptCache().put("logfileId_String", logfileId_String);
  
  // Logger.log("INFO: logfile spreadsheet Id cached:   " + CacheService.getScriptCache().get("logfileId_String"));
  // Logger.log("INFO: logfile spreadsheet Id cached_f: " + f_logfile_SpreadsheetApp_Spreadsheet().getId());
  
  f_add_headers_log_file_Int();

  return 1;  

}
*/

/*

 // Id of the Folder where to create a Google Spreadsheet log file.
    // To find the folder id, open it in Google Drive.
    // You will get an URL like:
    // https://drive.google.com/drive/u/2/folders/1abcde1245tbE-DWc3cr4655122kqqEqGrg
    // 1abcde1245tbE-DWc3cr4655122kqqEqGrg is the folder Id.
    //"logfilefolderid": "1gnctVvynVtbE-DWc3c4OURLOkqqEqGrg" - don't use, deprecated.
    
    */

