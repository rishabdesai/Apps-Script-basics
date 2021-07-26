//bound script

function translateApp(){
    const id ='<< COPY SHEET ID>>';
    const sheet = SpreadsheetApp.openById(id).getSheets()[0];
    Logger.log(sheet.getName());

    const words = sheet.getDataRange().getValues();
    Logger.log(words);

    words.forEach((str,index)=>{
      const finalstr = LanguageApp.translate(str,'en','gu');
      Logger.log(finalstr);

      const range = sheet.getRange((index+1),2);
      range.setValue(finalstr);
    })
}