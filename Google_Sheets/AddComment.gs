//create a menu in UI.
function addComment() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('New Menu').addItem('addComment', 'commentfn').addToUi();
}

//create a function to add comment in a selected cell.
function commentfn() {
  const ui = SpreadsheetApp.getUi();
  const cell = SpreadsheetApp.getActive().getActiveSheet().getActiveCell();
  const info = ui.prompt(" Enter comment below ");

  if (info.getSelectedButton() == ui.Button.OK) {
    cell.setComment(info.getResponseText());
  }
}
