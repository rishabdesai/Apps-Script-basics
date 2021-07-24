//create alternete color rows 

function addColorsToSheets(){
//1. open sheet by ID
  const id = "<<ADD ID OF SPREADSHEET>>";
  const ss = SpreadsheetApp.openById(id);
//2. select first sheet
  const sheet = ss.getSheets()[0];
//3. use for loop. 
  for(let i=1;i<51;i++){
    let backColor ='green';
    if((i%2)==0){
      backColor='red';
    }else{
      backColor ='purple';
    }
     sheet.getRange('A'+i+':J'+i).setBackground(backColor);
  }

}
