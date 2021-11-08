
function addEvents() {
  const cal = CalendarApp.getDefaultCalendar();

  const today = new Date();
  const myDay = (100 * 60 * 90 * 24);
  const startTime = new Date(today.getTime() + myDay + (1000 * 60 * 60 * 5));
  const endTime = new Date(today.getTime() + myDay + (1000 * 60 * 60 * 6));


  const newEvent = cal.createEvent("new event Title",startTime,endTime);
  newEvent.addGuest('<<guestemailID@gmail.com>>');

}


// add event for selected date-range
function createCalenderEvent1() {
  let cal1 = CalendarApp.getCalendarById("<<calender ID>>");
  let sheet1 = SpreadsheetApp.getActiveSheet();

  let schedule =sheet1.getDataRange().getValues();

  schedule.splice(0,2);

schedule.forEach(function(entry){
  cal1.createEvent(entry[2],entry[0],entry[0])
});

}

// add All-day-event from date-range
function createCalenderEvent2() {
  let cal1 = CalendarApp.getCalendarById("<<calender ID>>");
  let sheet2 = SpreadsheetApp.getActiveSheet();

  let schedule =sheet2.getDataRange().getValues();

  schedule.splice(0,2);

schedule.forEach(function(entry){
  cal1.createAllDayEvent(entry[2],entry[0])
});

}

// add All-day-event-series based on date-range
function createCalenderEvent3() {
  let cal1 = CalendarApp.getCalendarById("<<calender ID>>");
  let sheet3 = SpreadsheetApp.getActiveSheet();

  let schedule =sheet3.getDataRange().getValues();

  schedule.splice(0,2);

schedule.forEach(function(entry){
    var eventSeries = cal1.createAllDayEventSeries(entry[2],entry[0],
        CalendarApp.newRecurrence().addWeeklyRule()
            .onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY)
            .until(new Date('January 1, 2022')),
        {guests: 'everyone@example.com'});
    Logger.log('Event Series ID: ' + eventSeries.getId());

});

}


| data for sheet-1                                                          | 		
|start	                        |end	                          |task name  |
| November 8, 2021, 9:00:00 AM	|November 9, 2021, 10:00:00 AM	|task-1     |
| November 9, 2021, 11:00:00 AM	|November 10, 2021, 12:00:00 PM	|task-2     |
| November 10, 2021, 1:00:00 PM	|November 11, 2021, 2:00:00 PM	|task-3     |

  
| data for sheet-2                                | 		
|start	                        |end  |task name  |
| November 8, 2021, 9:00:00 AM	|	    |task-1     |
| November 9, 2021, 11:00:00 AM	|	    |task-2     |
| November 10, 2021, 1:00:00 PM	|	    |task-3     |
  
  
|data for sheet-3                                 |
|start	                        |end	|task name  |
|November 17, 2021, 12:00:00 AM	|	    |task-1     |
  
  
  

