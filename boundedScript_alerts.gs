function myFunction() {
  const ui =  SpreadsheetApp.getUi();
 

  //ui.alert('Alert !!!', 'This is a alert',ui.ButtonSet.YES_NO);
  //ui.prompt('About you','enter your email id',ui.ButtonSet.OK_CANCEL);
 
  //const html = HtmlService.createHtmlOutput('<p>This interface is written in HTML</p>');
  //ui.showModalDialog(html,"HTML!")

  //const html = HtmlService.createHtmlOutput('<p>This interface is written in HTML</p>');
  //ui.showSidebar(html)

  //ui.createAddonMenu().addItem('i need alert','alertMe').addToUi();
  
  ui.createMenu('custom Menu').addSubMenu(ui.createMenu('sub-1').addItem('alert-me','alertMe')).addToUi();


}

function alertMe(){
  return SpreadsheetApp.getUi().alert('you haven benn alerted!');
}


function toast(){
   //SpreadsheetApp.getActiveSpreadsheet().toast('hello there!!!');
     SpreadsheetApp.getActiveSpreadsheet().toast('this is title','this is body',-1);


}
