//get events from calendar for next 365 days
function EventsCount() {
  const cal = CalendarApp.getDefaultCalendar();

  const today = new Date(); // today
  const day = 1000 * 60 * 60 * 24;  //day length in seconds
  const end = new Date(today.getTime() + (day * 365));  //for next 356 days

  const events = cal.getEvents(today, end);
  Logger.log(events.length);  // count of events for next 356 days

  events.forEach((event) => {
    Logger.log(event.getTitle());
  })
}


//delete events for next 7 days
function deleteEvent() {
  const cal = CalendarApp.getDefaultCalendar();

  const today = new Date(); // today
  const day = 1000 * 60 * 60 * 24;  //day length in seconds
  const end = new Date(today.getTime() + (day * 7));  //for next 7 days

  const events = cal.getEvents(today, end);
  Logger.log(events.length);  // count of events for next 7 days

  events.forEach((event) => {
    Logger.log(event);
    event.deleteEvent();
  })

}


// get count of events for Today
function getTodayEvents(){
  const cal = CalendarApp.getDefaultCalendar();
  const day = new Date();
  const event = cal.getEventsForDay(day);
  Logger.log("Number of events today   :   "+event.length);
}

