//bound script

function insertValueAtLastRow(){
const ss = SpreadsheetApp.getActiveSpreadsheet();
const activesheet = ss.getActiveSheet();
//const sheet = activesheet.getSheetName();
//Logger.log(sheet);

let arr = [activesheet.getLastRow()+1,'data added at last row'];
activesheet.appendRow(arr);
}