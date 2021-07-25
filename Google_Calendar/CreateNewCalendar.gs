//Create new calender,set color and description
function makeCalendar() {
const myCal = CalendarApp.createCalendar("new test Cal");
Logger.log(myCal.getId());
myCal.setColor('#0000ff');
myCal.setDescription('testing - to create new calendar');
}


//delete calender (only owned calender can be deleted)
function deleteCal(){
    const id = '<<COPY THE CALENDAR ID>>';
    const cal = CalendarApp.getOwnedCalendarById(id);
    cal.deleteCalendar();
}