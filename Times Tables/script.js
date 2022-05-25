let numVal;

function onLoad() {
  for (let i = 0; i < 13; i++) {
    
    let thead = document.getElementById("th");
    let content = document.createElement("td");
    content.innerHTML = i;
    thead.appendChild(content);

  }

  let tbody = document.getElementById("tbody");

  for (let num1 = 1; num1 < 13; num1++) {
    
    let tr = document.createElement("tr");
    let tableCol = document.createElement("td");
    tableCol.className = "tableCol";
    tableCol.innerHTML = num1;
    tr.appendChild(tableCol);
    
    for (let num2 = 1; num2 < 13; num2++) {
     
        numVal = num1 * num2;
      let td = document.createElement("td");
      td.className='tdClass'
      td.innerHTML = numVal;
      tr.appendChild(td);

    }

    tbody.appendChild(tr);
  }
}

onLoad();
