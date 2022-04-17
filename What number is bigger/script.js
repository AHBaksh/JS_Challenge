function biggerNumber (){
    let firstNum = document.getElementById('firstNumber').value;
    let secondNum = document.getElementById('secondNumber').value;
    let answer = document.getElementById('answer');
    if( /[^0-9]+/g.test(firstNum) || /[^0-9]+/g.test(secondNum)){

        document.getElementById('firstNumber').value = firstNum.substr(0, firstNum.length-1)
        document.getElementById('secondNumber').value = secondNum.substr(0, secondNum.length-1)
        return answer.innerHTML = 'Please only enter numbers'
        
       
    }else{
        firstNum = Number(firstNum)
        secondNum = Number(secondNum)
        if ( firstNum === secondNum){
            return answer.innerHTML = "Both number are the same enter different number or 'Randomise'"
        }else{
        if(firstNum > secondNum){
            return answer.innerHTML = `The first number ${firstNum} is the biggest number`
        }else{
            return answer.innerHTML = `The second number ${secondNum} is the biggest number`
        }
    }

        
            
        
    }
}
function randomise(){

    document.getElementById('firstNumber').value = Math.floor(Math.random()*100)
    document.getElementById('secondNumber').value = Math.floor(Math.random()*100)

    biggerNumber()

}
document.getElementById('firstNumber').addEventListener('keyup', biggerNumber)
document.getElementById('secondNumber').addEventListener('keyup', biggerNumber)
document.getElementById('btnRandom').addEventListener('click', randomise)

