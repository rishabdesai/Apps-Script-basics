/*
function myFunction() {
//-------------Append a document header paragraph.---------
var body = DocumentApp.getActiveDocument().getBody();
 var header = body.appendParagraph("A Document");
 header.setHeading(DocumentApp.ParagraphHeading.HEADING1);
 //Append a section header paragraph.
 var section = body.appendParagraph("Section 1");
 section.setHeading(DocumentApp.ParagraphHeading.HEADING2);
 // Append a regular paragraph.
 body.appendParagraph("This is a typical paragraph.");
}
*/

/*
function myFunction() {
//----------------get first paragraphs---------
var body = DocumentApp.getActiveDocument().getBody();
var paragraphList = body.getParagraphs();
//get first paragraph only
console.log(paragraphList[0].getText());
}
*/

/*
function myFunction() {
//---------get second paragraph and apppend text to it.---------
var body = DocumentApp.getActiveDocument().getBody();
var paragraphList = body.getParagraphs();
paragraphList[1].appendText("demo text !!!!!!!!");
console.log(paragraphList[1].getText());
}
*/


/*
function myFunction() {
//-----------append text and change appended text to bold and italics---------
var body = DocumentApp.getActiveDocument().getBody();
//Append a styled paragraph.
var body = DocumentApp.getActiveDocument().getBody();
var par = body.appendParagraph('A bold, italicized paragraph.');
par.setBold(true);
par.setItalic(true);
}
*/

/*
function myFunction() {
//---------change background color and text size of 2nd paragraph---------
    var body = DocumentApp.getActiveDocument().getBody();
    var style ={};
    style[DocumentApp.Attribute.BACKGROUND_COLOR]='#ffff00';
    style[DocumentApp.Attribute.FONT_SIZE]=18;

    var paraList = body.getParagraphs();
    paraList[1].setAttributes(style);
}
*/





 