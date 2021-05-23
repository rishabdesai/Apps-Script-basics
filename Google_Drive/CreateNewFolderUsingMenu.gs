
/*
//-------Create menu, Accept folder name, create new folder---------- 
function myFunction() {
  //get UI of spreadsheet
  var ui = SpreadsheetApp.getUi();
  //create menu, create menu-item and add to UI
  ui.createMenu('Advance').addItem('Create Folder', 'makeFolder').addToUi();
}


function makeFolder(){
  //get folder by ID
  var parentFolder = DriveApp.getFolderById('<<ENTER PARENT FOLDER ID HERE>>');
 //get UI of spreadsheet
  var ui = SpreadsheetApp.getUi();
  //show prompt to get new folder name
  var response = ui.prompt('Enter new folder name to create ',ui.ButtonSet.OK_CANCEL);
  //if user press OK button, then create folder with responce text
  if(response.getSelectedButton() == ui.Button.OK){
    var folder = parentFolder.createFolder(response.getResponseText());
    //get ID of newly created folder
    var folderId = folder.getId();
    //alert the user that new folder has been created
    ui.alert('New folder crated with ID :  '+folderId);
  } 
}
*/


/*
//-------Create menu, Accept folder name, create new folder, add a text file---------- 
function myFunction() {
  //get UI of spreadsheet
  var ui = SpreadsheetApp.getUi();
  //create menu, create menu-item and add to UI
  ui.createMenu('Advance').addItem('Create Folder', 'makeFolder').addToUi();
}


function makeFolder(){
  //get folder by ID
  var parentFolder = DriveApp.getFolderById('<<ENTER PARENT FOLDER ID HERE>>');
 //get UI of spreadsheet
  var ui = SpreadsheetApp.getUi();
  //show prompt to get new folder name
  var response = ui.prompt('Enter new folder name to create ',ui.ButtonSet.OK_CANCEL);
  //if user press OK button, then create folder with responce text
  if(response.getSelectedButton() == ui.Button.OK){
    var folder = parentFolder.createFolder(response.getResponseText());
    //get ID of newly created folder
    var folderId = folder.getId();
    //alert the user that new folder has been created
    ui.alert('New folder crated with ID :  '+folderId);

    //create txt file inside newly created folder
    folder.createFile('hello.txt','inside newly created txt file ');

  } 
}
*/

/*
//--------Get list of all folders in speadsheet----------
function myFunction() {
  //get UI of spreadsheet
  var ui = SpreadsheetApp.getUi();
  //create menu
  ui.createMenu('Advance').addItem('List All Floders', 'listFolders').addToUi();
}

function listFolders(){
  //get spreadsheet by id
  var ss =SpreadsheetApp.openById('<<ENTER SPREADSHEET ID HERE>>');
  //get sheet by name
  var sheet = ss.getSheetByName('sheet1');


 //get folder by ID
  var parentFolder = DriveApp.getFolderById('<<ENTER PARENT FOLDER ID HERE>>');
  var folders = parentFolder.getFolders();
  while(folders.hasNext()){
    var folder = folders.next();
    //sheet.appendRow([folder.getName()]); //get folder names
   //get log of all folders
    var arr = [folder.getName(),folder.getDateCreated(), folder.getLastUpdated(),folder.getUrl()];
    sheet.appendRow(arr);
  }
  sheet.appendRow(['Last run : '+Date()]);
}
*/

/*
//------create new spreadsheet and move to specific folder------
function myFunction() {
  //create new spreadsheet 
  var newSSName = 'NewSpreadSheet1';
  var createNewSS = SpreadsheetApp.create(newSSName);
  //get ID of newly create spreadsheet
var newID = createNewSS.getId();

//get Folder ID, where newly created file to be moved.
var parentFolder = DriveApp.getFolderById('<<ENTER PARENT FOLDER ID HERE>>');
//get ID of file
var file = DriveApp.getFileById(newID);
//get parent folder of file
var parentOfFile = file.getParents();

//add file to specific folder
parentFolder.addFile(file);
//after copying file, remove file from source.

parentOfFile.next().removeFile(file);

}

*/