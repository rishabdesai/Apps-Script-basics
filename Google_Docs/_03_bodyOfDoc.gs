/*
//----function to get text inside body of doc----
function getDocBody(){
    //get docuemnt using ID
    var doc = DocumentApp.getActiveDocument();
    //get body of doc
    var body = doc.getBody();
    //get text of body
    var bodyText = body.getText();
    console.log(bodyText);
    //append to body of doc
    body.appendParagraph("How are you doing?");
    //add horizontal rule
    body.appendHorizontalRule();
}
*/