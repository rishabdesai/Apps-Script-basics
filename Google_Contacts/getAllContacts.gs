//get all contacts

function listAllContacts() {
  const allContacts = ContactsApp.getContacts();
  //Logger.log(allContacts);

  allContacts.forEach((con)=>{
    const person = con.getFullName();
    Logger.log(person);
  })


  
}
