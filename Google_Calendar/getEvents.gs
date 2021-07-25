//get events for next 7 days.
function getDefaultCal(){
  const cal =CalendarApp.getDefaultCalendar();
 
  const start = new Date(); // today
  const end = new Date(start.getTime()+(1000*60*60*24*7));  // next 7 days

  const events = cal.getEvents(start,end);
  events.forEach((event)=>{
    Logger.log(event.getTitle());
  })
}