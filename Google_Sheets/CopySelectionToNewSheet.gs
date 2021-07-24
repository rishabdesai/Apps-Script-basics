//bound script
//copy selected cell from one sheet to newly created sheet.

function copySelectionToOtherSheet() {
//select range 
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = ss.getActiveSheet();
  const range = sheet.getActiveRange();
  const activeSel = range.getValues();

//create new sheet. If sheet name exists, then format it.
  const countSheets = ss.getSheets();
  const newSheetName = 'Sheet ' + countSheets.length;
  let newSheet = ss.getSheetByName(newSheetName);
  if (newSheet == null) {
    newSheet = ss.insertSheet();
    newSheet.setName(newSheetName);
  } else {
    newSheet.clear()
  }
  //copy selected content to new sheet
  const copiedRange = newSheet.getRange(1,1,range.getNumRows(),range.getNumColumns());
  copiedRange.setValues(activeSel);
}

