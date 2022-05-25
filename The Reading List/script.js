let booksArr = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    alreadyRead: true,
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    alreadyRead: true,
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K Rowling",
    alreadyRead: false,
  },
];

function allReadElements() {
  for (let i = 0; i < booksArr.length; i++) {
    if (booksArr[i].alreadyRead) {
      let readElement = document.createElement("p");
      readElement.innerHTML += `Title: ${booksArr[i].title} by the author ${booksArr[i].author}`;
      document.getElementById("readContents").appendChild(readElement);
    }else{
        let readNotElement = document.createElement("p");
        readNotElement.innerHTML += `Title: ${booksArr[i].title} by the author ${booksArr[i].author}`;
        document.getElementById("notReadContents").appendChild(readNotElement);
    }
  }


}

function onClcikRead() {
    let read = document.getElementById('readContents')
    if( read.style.display ==='block'){
        return read.style.display = 'none'
    }
      return read.style.display = 'block'
    }

function onClickNotRead(){
    let notRead = document.getElementById('notReadContents')
    if(notRead.style.display === 'block'){
       return notRead.style.display ='none';
    }
       return notRead.style.display ='block'
    }
allReadElements()

document.getElementById("read").addEventListener("click", onClcikRead);
document.getElementById("notRead").addEventListener("click", onClickNotRead);
