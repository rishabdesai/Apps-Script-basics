function generateLandingPagesReport() {
  const spreadsheetID = '<<copy-spreadsheet-ID-here>>';

  var ss = SpreadsheetApp.openById(spreadsheetID);  //select spreadsheet with name= page2 and id ='spreadsheetID'
  var sheet = ss.getSheetByName('week1'); //select sheet with name 'week1'
  var values = sheet.getRange('A2:H4').getValues();  //select range of values 
  console.log(values); // print on console the check

  var deck = SlidesApp.getActivePresentation();  //select active slide
  var slides = deck.getSlides();  
  var templateSlide = slides[1];  //define template slide number
  var presentLength = slides.length;  //get initial slides count

  values.forEach(function (page) {
    if (page[0]) {
      var title = page[0];
      var date = page[1].toString();
      var hours = page[2];
      var totalim = page[3];
      var yes = page[4];
      var no = page[5];
      var maybe = page[6];
      var email = page[7];

      templateSlide.duplicate();  //duplicate the template slide
      slides = deck.getSlides(); //update the array of slides for  index and length
      var newSlides = slides[2]; //declare new page to update

      var shapes = (newSlides.getShapes());
      shapes.forEach(function (shape) {
        shape.getText().replaceAllText('{{title}}', title);
        shape.getText().replaceAllText('{{date}}', date);
        shape.getText().replaceAllText('{{hours}}', hours);
        shape.getText().replaceAllText('{{totalim}}', totalim);
        shape.getText().replaceAllText('{{yes}}', yes);
        shape.getText().replaceAllText('{{no}}', no);
        shape.getText().replaceAllText('{{maybe}}', maybe);
        shape.getText().replaceAllText('{{email}}', email);
      });
      presentLength=slides.length;
      newSlides.move(presentLength);
    }  //end of conditional loop
  }); //end of foreach loop
  templateSlide.remove(); //to remove the template slide.
}




