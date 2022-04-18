function getElementValue(id){
    console.log(idArr = id.split(' '))
    return document.getElementById(id)
}
function clearText(text){
        getElementValue('txtNumber').value = '';
        getElementValue('txtSecondNumber').value = '';
        getElementValue('answer').innerHTML = text;
        
}

function hideSecondNum (){
        clearText('')
    if( getElementValue('dropDown').value === 'ddPercentage' ){
        getElementValue('lblSecondNum').style.display = 'block';
        getElementValue('txtSecondNumber').style.display = 'block'
    }else{
        getElementValue('lblSecondNum').style.display = 'none';
        getElementValue('txtSecondNumber').style.display = 'none'
    }
}
function calculation(){
    let firstNum = Number(getElementValue('txtNumber').value)
    let secondNum = Number(getElementValue('txtSecondNumber').value)
    console.log(firstNum)
    console.log(secondNum)
    
    if(isNaN(firstNum) || isNaN(secondNum)){
        
        return clearText('Please only enter numbers') 
    }else{
        if(getElementValue('dropDown').value === 'ddSquare'){

            return squareNumber(firstNum)
        }
        if(getElementValue('dropDown').value === 'ddHalf'){
            return halfNumber(firstNum)
        }
        if(getElementValue('dropDown').value === 'ddPercentage'){
            return percentOf(firstNum, secondNum)
            
        }
        if(getElementValue('dropDown').value === 'ddCircle'){
            return areaOfCircle(firstNum)
            
        }
        if(getElementValue('dropDown').value === 'ddAll'){
            return allTheAbove(firstNum)
            
        }
    }
}

function squareNumber(num){
    return getElementValue('answer').innerHTML = `The result of squaring the number ${num} is ${num *= num}.`
}

function halfNumber(num){
    let half;
    return getElementValue('answer').innerHTML = `Half of ${num} is ${half= num /2}.`
}

function percentOf(num1, num2){
    let percentage;
    return getElementValue('answer').innerHTML = `${num1} is ${percentage = ((num1 / num2) * 100).toFixed(2)}% of ${num2}.`
}

function areaOfCircle(num){
    let area;
    return getElementValue('answer').innerHTML = `The area for a circle with radius ${num} is ${area =((num * num) * Math.PI).toFixed(2)}.`
}
function allTheAbove(num){
    
    let half = num / 2;
    let square = half * half;
    let area = ((square * square)* Math.PI).toFixed(2);
    let percentage = ((square / area) * 100).toFixed(2)

    return getElementValue('answer').innerHTML = 
    `Half of ${num} is ${half}<br>
     The Square of that half is ${square}<br>
     The area of a circle using the square number above is ${area}<br>
     The percentage of the area ${percentage}%
    `
}



getElementValue('dropDown').addEventListener('change', hideSecondNum)
getElementValue('calculate').addEventListener('click', calculation)