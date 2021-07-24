// add a new sheet into spreadsheet
 
function makeNew(){
//1. open sheet by ID
  const id = "<<ADD ID OF SPREADSHEET>>";
  const ss = SpreadsheetApp.openById(id);

//2. add new sheet by name (if not already exists)
  const newname = "sheetNew";
  let sheet = ss.getSheetByName(newname);
  if(sheet == null) {
    sheet = ss.insertSheet();
    sheet.setName(newname);
  }
 //3. get index of newly added sheet 
  Logger.log(sheet.getIndex());

}
