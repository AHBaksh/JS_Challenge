    let partnerName = ['Alex','Ashley','Billie','Cassidy','Charlie','Francis']
    let jobTitle = ['Sales Assistant','Engineer','Builder','Developer','CEO','Doctor']
    let geoLocation = ['England','Italy','India','Dubai','Brazil','Germany']

function random(){

   return Math.floor(Math.random()* 6)
}
function fortune(){

   document.getElementById('txtFortune').innerHTML = `You will be a ${jobTitle[random()]} in ${geoLocation[random()]}, and married to ${partnerName[random()]} with ${random()} kids.`
}

document.getElementById('btnFortune').addEventListener('click' ,fortune)
