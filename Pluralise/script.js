function pluralise(){
    let number = Number(document.getElementById('numTxt').value)
    let word = document.getElementById('wordTxt').value
  if( number === '' || word ===''){
    return document.getElementById('answer').innerHTML = 'Please enter a number and string'
  }
    if( typeof number !== 'number' || typeof word !== 'string'){
    

        return document.getElementById('answer').innerHTML = 'Please enter a number and string'

    }else{
            if(number > 1){
              return document.getElementById('answer').innerHTML = `${number} ${word + 's'}`
            }else{
              return document.getElementById('answer').innerHTML = `${number} ${word}`
            }
    }
}

document.getElementById('runBtn').addEventListener('click', pluralise)