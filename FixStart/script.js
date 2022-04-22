function fixStart(){
    let stringText = document.getElementById('firstTxt').value
    if(stringText === ''){

        return document.getElementById('answer').innerHTML = 'Please enter a string';

    }else{
        let arr =[...stringText]
        for(let i =1; i < arr.length; i++){
          if (arr[i] === arr[0]){
            arr[i] = '*'
          }
        }

    return document.getElementById('answer').innerHTML = arr.join('');
    }
}

document.getElementById('runBtn').addEventListener('click', fixStart)