//----send email-----
function myFunction1() {
  GmailApp.sendEmail('reveiver@gmail.com','email send from sender using appscript','This is body of message, Hello World');
}

//------make draft------
function myFunction2() {
  GmailApp.createDraft('reveiver@gmail.com','email send from sender using appscript','This is body of message, Hello World');
}

//------make draft and attache file------
function myFunction3() {
  var file = DriveApp.getFileById('<<Enter doc file ID>>')
  GmailApp.createDraft('reveiver@gmail.com','email from sender with attachment','This is body of message, Hello World',{
    attachments:[file.getAs('application/pdf')],
    name: 'MyDocAsPDF'

  });
}

//------update all Draft messages ------
function myFunction4() {
  var draft = GmailApp.getDrafts();
  for(var i=0;i<draft.length;i++){
    draft[i].update('newReceive@mail.com','update'+i,'Hello world -'+i);
    
  }
  
 }


//------update all Draft messages ------
function myFunction4() {
  var draft = GmailApp.getDrafts();
  for(var i=0;i<draft.length;i++){
   // draft[i].update('newReceive@mail.com','update subject'+i,'Hello world message -'+i);
    var id = draft[i].getId();

    console.log(draft[i].getId());
    console.log(draft[i].getMessage().getSubject());
    console.log(draft[i].getMessage().getBody());
  }
 }

/*
//------send HTML template email-------
function myFunction5() {
var emailMessage = HtmlService.createHtmlOutputFromFile('emailHTML').getContent();

emailMessage= emailMessage.replace('#TITLE','NEW TITLE');
emailMessage = emailMessage.replace('#MESSAGE','New Message..');

MailApp.sendEmail('receiver@mail.com','new HTML templage','',{
  htmlBody:emailMessage
})
console.log(emailMessage);

}


//HTML file
<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
  </head>
  <body>
    <h2>#TITLE</h2>
    <hr>
    <p>#MESSAGE</p>
  </body>
</html>

*/



