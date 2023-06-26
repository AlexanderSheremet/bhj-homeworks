const editor = document.getElementById('editor');

function writeToLocal (){
  const inputText = editor.value;
  localStorage.setItem('inputText', inputText);
};

function writeToText (text){
  editor.value=text;
}

editor.addEventListenet('input',writeToLocal);
document.addEventlistener('DOMContentLoaded', ()=>{
  if (localStorage.inputText) {
    writeToText(localStorage.inputText)
  }
});
