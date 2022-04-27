let evenOutput =document.getElementById('evenAnswer')
let oddOutput =document.getElementById('oddAnswer')


function clear(){
    evenOutput.innerHTML = ''
    oddOutput.innerHTML = ''
}


function evenOdd(){
    let firstNum = Number(document.getElementById('firstTxt').value)
    let secondNum = Number(document.getElementById('secondTxt').value)
    clear()
    if( isNaN(firstNum) || isNaN(secondNum)){
        return evenOutput.innerHTML = 'Please only enter numbers'

    }else{
        for(let i = firstNum; i <= secondNum; i++){
            if(i % 2 === 0){
                evenOutput.innerHTML+=`${i} is even <br>`
            }else{
                oddOutput.innerHTML += `${i} is odd <br>`
            }
            
        }
    }
    return 
  }

  document.getElementById('runBtn').addEventListener('click', evenOdd)