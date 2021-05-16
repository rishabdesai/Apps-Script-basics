function myFunction() {
  const spreadsheetID = '<<copy-your-sheet-ID-here>>';

  /** Create new spreadsheet */
  //SpreadsheetApp.create("hello")

  /** open spreadsheet */
  //SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/<<copy-your-sheet-ID-here>>/');
  //SpreadsheetApp.openById(spreadsheetID);
  //SpreadsheetApp.open(DriveApp.getFilesByName('hello').next())

  /** Get and insert spreadsheet */
  //const spreadsheet = SpreadsheetApp.openById(spreadsheetID);
  //spreadsheet.getSheetByName('Sheet1');
  //console.log(spreadsheet.getSheets());

  //spreadsheet.insertSheet();
  //spreadsheet.insertSheet('wow',0, {template: spreadsheet.getSheetByName('Sheet1') });

  /** Get range and values */
  //const spreadsheet = SpreadsheetApp.openById(spreadsheetID);
  //const sheet_wow = spreadsheet.getSheetByName('wow');
  //var range = sheet_wow.getRange(1,1,1,4);
  //console.log(range.getValues());

  //console.log(sheet_wow.getSheetValues(1,1,1,4));

  //console.log(sheet_wow.getDataRange().getValues());

  /** setting values automatically in spreadsheet */
  //const spreadsheet = SpreadsheetApp.openById(spreadsheetID);
  //const sheet_wow = spreadsheet.getSheetByName('wow');
  //var range = sheet_wow.getRange('D2');
  //range.setValue(200);

  //var range = sheet_wow.getRange(3,1,1,4);
  //range.setValues([['2','Atsi','Baroda','200']])


  /** get last row column */
  //const spreadsheet = SpreadsheetApp.openById(spreadsheetID);
  //const sheet_wow = spreadsheet.getSheetByName('wow');
  //Logger.log(sheet_wow.getLastRow());
  //Logger.log(sheet_wow.getLastColumn());

  //const lastCol = sheet_wow.getLastColumn();
  //const lastRow = sheet_wow.getLastRow();

  //sheet_wow.getRange(lastRow+1,1,1,lastCol).setValues([['5','sid','New York','300']]);


  /** get max row column , create filter*/
  // const spreadsheet = SpreadsheetApp.openById(spreadsheetID);
  // const sheet_wow = spreadsheet.getSheetByName('wow');
  // Logger.log(sheet_wow.getMaxRows());
  // Logger.log(sheet_wow.getMaxColumns());

  // const lastCol = sheet_wow.getLastColumn();
  // const lastRow = sheet_wow.getLastRow();
  // const maxCol = sheet_wow.getMaxColumns();
  // const maxRow = sheet_wow.getMaxRows();

  //sheet_wow.deleteColumns(lastCol+1,maxCol-lastCol)
  //sheet_wow.deleteRows(lastRow + 1, maxRow - lastRow)

  /** copying cell, format etc*/

  // const spreadsheet = SpreadsheetApp.openById(spreadsheetID);
  // const sheet_wow = spreadsheet.getSheetByName('wow');
  // const sheet_hello = spreadsheet.getSheetByName('hello');

  // const lastCol = sheet_hello.getLastColumn();
  // const lastRow = sheet_hello.getLastRow();
  // const maxCol = sheet_hello.getMaxColumns();
  // const maxRow = sheet_hello.getMaxRows();

  //var range = sheet_hello.getRange(1,1,maxRow,maxCol);
  //sheet_wow.getBandings()[0].copyTo(range)

  //  sheet_hello.copyTo(spreadsheet);


  //var range_to_copy = sheet_hello.getRange(2,2);
  //var range_to_paste = sheet_hello.getRange(3,2,lastRow-2,1);

  //range_to_copy.copyTo(range_to_paste);
  //range_to_copy.copyTo(range_to_paste,SpreadsheetApp.CopyPasteType.PASTE_FORMULA,false);
  
 /** autofill etc*/

  // const spreadsheet = SpreadsheetApp.openById(spreadsheetID);
  // const sheet_hello = spreadsheet.getSheetByName('hello');

  // const lastRow = sheet_hello.getLastRow();

  // var range_to_autofill =  sheet_hello.getRange(2,2,2);
  // var destination = sheet_hello.getRange(2,2,20);

  //range_to_autofill.autoFill(destination,SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
  // range_to_autofill.autoFillToNeighbor(SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
  //range_to_autofill.autoFillToNeighbor(SpreadsheetApp.AutoFillSeries.ALTERNATE_SERIES);


/** clear, delete cells, delete columns, delte rows */
  // const spreadsheet = SpreadsheetApp.openById(spreadsheetID);
  // const sheet_hello = spreadsheet.getSheetByName('hello');
  
  // const lastCol = sheet_hello.getLastColumn();
  // const lastRow = sheet_hello.getLastRow();
  // const maxCol = sheet_hello.getMaxColumns();
  // const maxRow = sheet_hello.getMaxRows();

  //var range = sheet_hello.getRange(lastRow,1,1,lastCol);
  //range.clear();

  //sheet_hello.clear();
 

/** sort and filter */
//  const spreadsheet = SpreadsheetApp.openById(spreadsheetID);
//   const sheet_hello = spreadsheet.getSheetByName('hello');
 
//  const lastCol = sheet_hello.getLastColumn();   console.log(lastCol);
//   const lastRow = sheet_hello.getLastRow();     console.log(lastRow);

//   //sheet_hello.sort(2,false);

//   // let range = sheet_hello.getRange(2,1,lastRow-1, lastCol); console.log(range.getValues());
//   // range.sort({column: 2}); 

//   let range =  sheet_hello.getDataRange();
//   range.createFilter();

/** set formula */

//  const spreadsheet = SpreadsheetApp.openById(spreadsheetID);
//   const sheet_hello = spreadsheet.getSheetByName('hello');
 
//   const lastCol = sheet_hello.getLastColumn();  
//   const lastRow = sheet_hello.getLastRow();     

//   //let range = sheet_hello.getRange(lastRow+1, 3);
//   //range.setFormula(`=COUNTUNIQUE(C2:C${lastRow})`);

//   let range = sheet_hello.getRange(lastRow+1,3,1,2);
//   range.setFormulas([
//     [`=COUNTUNIQUE(C2:C${lastRow})`,`=SUM(D2:D${lastRow})`]
//     ]);


/** format cells */
//  const spreadsheet = SpreadsheetApp.openById(spreadsheetID);
//  const sheet_hello = spreadsheet.getSheetByName('hello');
 
//  sheet_hello.getRange('A1').setBackground('orange');
//  sheet_hello.getRange('B1').setFontColor('00ff00');
//   sheet_hello.getRange('C1').setFontSize(24);
//   sheet_hello.getRange('D1').setBorder(false,true, false,true, null, null, 'blue',SpreadsheetApp.BorderStyle.DOTTED);

}
