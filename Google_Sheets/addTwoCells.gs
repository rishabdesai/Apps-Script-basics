//add two cells and display in next cell

function addTowCells(){
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getSheetByName('sheet1');
  const range = sheet.getRange('C1:C10');
  range.setFormula('=sum(A1:B1)');
}