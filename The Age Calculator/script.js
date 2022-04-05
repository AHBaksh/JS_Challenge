function calcAge(){
    let dob = document.getElementById('dobText')
    let currentYearText = document.getElementById('currentYearText')
    let answer = document.getElementById('answer')

    if(dob.value === '' || currentYearText.value === ''){
        return answer.innerHTML = 'Please enter value in both boxes'
    }else{

        currentYearText = currentYearText.value.replace(/[^0-9]+/gi, "")
        dob = dob.value.replace(/[^0-9]+/gi, "")

        document.getElementById('dobText').value = dob;
        document.getElementById('currentYearText').value = currentYearText;
        
        if(currentYearText > dob){
            age = Number(currentYearText) -  Number(dob);
            answer.innerHTML = `They are either ${age -1} or ${age} years old`
        }else{
            answer.innerHTML = 'Current year should be higher than the Birth year'
        }
    }

}

document.getElementById("calculate").addEventListener('click', calcAge)