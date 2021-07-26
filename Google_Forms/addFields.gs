//create a blank Form
function newForm() {
 const newForm = FormApp.create('new form11');
  const id = newForm.getId();
  const form = FormApp.openById(id);
  Logger.log(form);
  
  //add text item
  const item1 = form.addTextItem();
  Logger.log(item1);
  
  //add check box
  const item2 = form.addCheckboxItem();
  Logger.log(item2);
  item2.setChoices([
   item2.createChoice('first'),
   item2.createChoice('second'),
   item2.createChoice('third'),
  ]);

  //radio buttons
  const item3 = form.addMultipleChoiceItem();
  item3.setTitle('Multi choice question')
  .setChoiceValues(['YES','NO']);

  //new section
  form.addPageBreakItem().setTitle('break1');

  //grid items
  const item4 = form.addGridItem();
  item4.setTitle('grid items')
  .setRows(['r1','r2','r3'])
  .setColumns(['c1','c2','c3']);

//set date item
  const items5 = form.addDateItem().setTitle('time  item');


}
