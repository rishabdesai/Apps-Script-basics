//create new contact

function createNewContact() {
  const newContact = ContactsApp.createContact('givenName111','familyName111','email111@email111.com');
  Logger.log(newContact);
  
}
