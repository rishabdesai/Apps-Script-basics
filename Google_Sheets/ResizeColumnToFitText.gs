 //---------resize column width--------
  function myFunction() {
  const spreadsheetID = '<<enter sheet ID>>';
 var ss = SpreadsheetApp.openById(spreadsheetID);
 ss.autoResizeColumn(1);  
  }
  