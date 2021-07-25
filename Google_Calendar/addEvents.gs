
function addEvents() {
  const cal = CalendarApp.getDefaultCalendar();

  const today = new Date();
  const myDay = (100 * 60 * 90 * 24);
  const startTime = new Date(today.getTime() + myDay + (1000 * 60 * 60 * 5));
  const endTime = new Date(today.getTime() + myDay + (1000 * 60 * 60 * 6));


  const newEvent = cal.createEvent("new event Title",startTime,endTime);
  newEvent.addGuest('<<guestemailID@gmail.com>>');

}