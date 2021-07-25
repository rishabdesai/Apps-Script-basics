//bound script
//add text on each slide page 
function AddTextToSlide() {
  const ppt = SlidesApp.getActivePresentation();
  const slides = ppt.getSlides();
  Logger.log(slides);

  slides.forEach((slide, index)=>{
    let myText = `slide no #${index + 1}`;
    let val = slide.insertTextBox(myText);
    Logger.log(val);


  })


}
