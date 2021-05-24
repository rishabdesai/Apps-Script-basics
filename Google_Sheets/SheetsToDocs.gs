 //---------copy table from Sheets to Docs--------
  function myFunction() {
  const spreadsheetID = '<<your sheet ID >>';
 var ss = SpreadsheetApp.openById(spreadsheetID);
 //get first sheet 
 var sheet = ss.getSheets()[0];
  //select range of cell to be copy in Docs
  var rawData=sheet.getRange(1,1,sheet.getLastRow(),sheet.getLastColumn()).getValues();
  
  //create new Docs file
  var doc = DocumentApp.create('Sample Doc File');
  //get body of Doc file
  var body = doc.getBody();
  //insert paragraph heading into Docs
  body.insertParagraph(0,ss.getName()).setHeading(DocumentApp.ParagraphHeading.HEADING1);
  //insert table into Docs
  var table = body.appendTable(rawData);
  //set first row as Bold
  table.getRow(0).editAsText().setBold(true);
  }
  
