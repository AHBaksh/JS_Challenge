let celsius;
let fahrenheit;

function convertToF(){
    
    celsius = document.getElementById('inputC').value
    if(/[^0-9]+/gi.test(celsius))
    {   
        document.getElementById('inputC').value = celsius.substr(0, celsius.length-1)
    }else{
        fahrenheit = (celsius * 9 / 5) + 32
        document.getElementById('inputF').value = fahrenheit
    }
}

function convertToC(){
    fahrenheit = document.getElementById('inputF').value
    if(/[^0-9]+/gi.test(fahrenheit)){
        document.getElementById('inputC').value = fahrenheit.substr(0, fahrenheit.length-1)
    }else{
        celsius = (fahrenheit -32) * 5 / 9
        document.getElementById('inputC').value = celsius
    }
}

document.getElementById('inputF').addEventListener('keyup', convertToC)
document.getElementById('inputC').addEventListener('keyup', convertToF)