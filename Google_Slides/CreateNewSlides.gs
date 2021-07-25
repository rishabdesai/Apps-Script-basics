//standalone scripts

//create new slides
function createNewSlides() {
  const slides = SlidesApp.create('newSlides');
  Logger.log(slides);
}


//find name of slides using ID
function selectSlideById(){
  const id= '<<COPY SLIDES ID>>';
  const slides = SlidesApp.openById(id);
  Logger.log(slides.getName())
}


//bound script
//add new blank slide to slides
function addSlide() {
  const ppt  = SlidesApp.getActivePresentation();

  const s1 = ppt.appendSlide();
  Logger.log(s1);
}

//bound script
//find all layout-names in slides
function addSlide() {
    const ppt  = SlidesApp.getActivePresentation();

    const layouts = ppt.getLayouts();
    layouts.forEach((layout)=>{
    Logger.log(layout.getLayoutName());
  })
}

//bound script
//find all layout names in slides along with index
function addSlide() {
  const ppt = SlidesApp.getActivePresentation();

  const layouts = ppt.getLayouts();
  layouts.forEach((layout,index) => {
    Logger.log(layout.getLayoutName());
    Logger.log(index);
  })
}

