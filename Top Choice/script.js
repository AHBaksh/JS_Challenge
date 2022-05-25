let list = []
let subject = document.getElementById('subject')
let choice = document.getElementById('choice')
let content = document.getElementById('content')
let message = document.getElementById('message')
let suffix;


function addToList(){

  if( subject.value==='' || choice.value===''){
    message.innerHTML='Please enter all fields'
  }else{
    message.innerHTML=''
    subject.disabled = true;
    list.push(choice.value)
    showList()

  }
}
function createElementAndValue(contentValue, tag, targetEleId){

  let createElem = document.createElement(tag)
  createElem.innerHTML= contentValue
  return document.getElementById(targetEleId).appendChild(createElem)

}
function showList(){
  content.innerHTML=''
  createElementAndValue(`${subject.value} choices:`,'h3','content' )
  

  
  for(let i =0; i< list.length; i++){
    listNum = i + 1
    listNumStr = String(listNum)

    if(listNumStr.slice(-2) === '11' || listNumStr.slice(-2) === '12'|| listNumStr.slice(-2) === '13'){
      suffix = 'th';
    }
    else{
      switch (listNumStr.slice(-1)) {
        case  '1':
          suffix = "st";
          break;
          case  '2':
          suffix = "nd";
          break
          case '3':
          suffix = "rd";
          break
        default:
          suffix ='th';
      }
    }
    
    let para = document.createElement('p')
    para.innerHTML= `My ${listNum}${suffix} choice is ${list[i]} `
    document.getElementById('content').appendChild(para)

  }
}

document.getElementById('submit').addEventListener('click', addToList)
