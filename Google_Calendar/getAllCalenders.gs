//get default calender email name.
function getDefaultCal(){
  const cal =CalendarApp.getDefaultCalendar();
  Logger.log(cal.getName());
}

//get all available calenders name (owned and shared)
function getMycal() {
const allCals = CalendarApp.getAllCalendars();
//print array of calender 
Logger.log(allCals);
//print all calender names
allCals.forEach((myAllCals)=>{
  const myName = myAllCals.getName();
  Logger.log(myName);
})
}

//get all available calenders name (owned only)
function getMycal() {
const allCals = CalendarApp.getAllOwnedCalendars();
//print all calender names
allCals.forEach((myAllCals)=>{
  const myName = myAllCals.getName();
  Logger.log(myName);
})
}

//get all details of calender - name,ID, color, events of today.
function getMycalDetails() {
const allCals = CalendarApp.getAllCalendars();
const today = new Date();

allCals.forEach((myAllCalDetails)=>{
  const myName = {
    name:myAllCalDetails.getName(),
    id:myAllCalDetails.getId(),
    color:myAllCalDetails.getColor(),
    val:myAllCalDetails.getEventsForDay(today)
  };
  Logger.log(myName);
  Logger.log(myName.val.length);
});
}