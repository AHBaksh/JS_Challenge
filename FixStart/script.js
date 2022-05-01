function fixStart(){
    let stringText = document.getElementById('firstTxt').value;
    let replaceString = document.getElementById('replaceTxt').value
    if(stringText === ''){

        return document.getElementById('answer').innerHTML = 'Please enter a string';

    }else{
      let newString = stringText.slice(1, stringText.length).replaceAll(stringText.slice(0,1), replaceString);
      newString = stringText.slice(0,1) + newString;
    return document.getElementById('answer').innerHTML =  newString;
    }
}

document.getElementById('runBtn').addEventListener('click', fixStart)