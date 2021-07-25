//bound script
//append slides with specific layout slide and then change the color.
function addSlide() {
  const ppt = SlidesApp.getActivePresentation();

  const layouts = ppt.getLayouts();
  
  const slide = ppt.appendSlide(layouts[8]);
  slide.getBackground().setSolidFill('#ff0000');
  Logger.log(slide);
}


//bound script
//get slide count
function getSlideCount() {
  const ppt = SlidesApp.getActivePresentation();
  const slides = ppt.getSlides();
  Logger.log(slides);
}

