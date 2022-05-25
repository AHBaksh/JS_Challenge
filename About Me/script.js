let body = document.getElementsByTagName('body')[0]
body.style.fontFamily= "Arial, sans-serif";
let nickname = document.getElementById('nickname')
nickname.innerHTML='Abdul'
let favorites = document.getElementById('favorites')
favorites.innerHTML= 'Food'
let hometown = document.getElementById('hometown')
hometown.innerHTML = 'Leeds'

let listItem = document.getElementsByTagName('li')



for(let i =0; i< listItem.length; i++){
    listItem[i].className = 'listitem'
    document.getElementsByClassName('listitem')[i].style.color='red'
   
}

let img =  document.createElement('img')
img.src = 'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2Fe6496bba-3356-11ec-91da-063c6e372e74.jpg?crop=2667%2C1500%2C0%2C0&resize=200'
document.getElementsByTagName('ul')[0].prepend(img)
