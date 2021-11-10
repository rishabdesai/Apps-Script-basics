
//get all calendar name list on console
function getAllCal(){
  const cal = CalendarApp.getAllCalendars();
  Logger.log("list of cal  "+cal.length);
  for(var x=0;x<cal.length;x++){
    Logger.log(cal[x].getName());
  }
}


//get all calender name and ID to google sheet

function getAllCal(){
  const cal = CalendarApp.getAllCalendars();
  const sheet = SpreadsheetApp.openById("<<Google sheet ID>>).getSheetByName("sheet1");
  Logger.log("list of cal  "+cal.length);
  for(var x=0;x<cal.length;x++){
    sheet.appendRow([cal[x].getName(),cal[x].getId(),cal[x].getColor()]);
  }
}

