function mixUp(){
    let firstString = document.getElementById('firstTxt').value
    let secondString = document.getElementById('secondTxt').value
    let mixString
    if(typeof firstString !== 'string' || typeof secondString !== 'string'){
        return document.getElementById('answer').innerHTML = `Please enter string only`
    }else{
        mixString = firstString.replace(firstString.slice(0,2), secondString.slice(0,2));
        mixString = mixString + ' ' + secondString.replace(secondString.slice(0,2), firstString.slice(0,2))
        return document.getElementById('answer').innerHTML = mixString
    }
  }

  document.getElementById('runBtn').addEventListener('click', mixUp)


