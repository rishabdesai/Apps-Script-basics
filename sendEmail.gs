function myFunction() {
    //create new doc with name "Hello_Google_Doc" and save in ref 'myDoc'
  var myDoc = DocumentApp.create("Hello_Google_Doc");
  //get reference of body of newlycreated doc
  var body = myDoc.getBody();
  //write content inside body.
  body.appendParagraph("This is body inside document name Hello_Google_Doc !!!");

  //get email of current login ID  
  var email =  Session.getActiveUser().getEmail();
  //create subject of email using URL of doc and save in ref 'subject'
  var subject = myDoc.getUrl();
  //create body of email and save it in ref 'bodyMail'
  var bodyMail = "This is the new doc "+myDoc.getUrl();
  //send email 
  GmailApp.sendEmail(email,subject,bodyMail);
}
