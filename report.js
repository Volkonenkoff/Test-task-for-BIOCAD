function generateReport() {

  var tableData = {
    data : "04.10.19 10:23",
    UBS : "В1: № 2000460789536: pH 1.09<br>В2: № 2000460789536: pH 2.00<br>В3: № 2000460789536: pH 4.01<br>В4: № 2000460789536: pH 7.00<br>В5: № 2000460789536: pH 9.21",
    slope : [98.7, 98.7, 98.7, 90.1],
    offset : [-0.3,-0.3,-0.3,-0.5],
    user : ["Иванов Геннадий Петрович","Петров Иван Генадьевич","Петров Генадий Иванович","Генадьев Иван Петрович"]
  }


  const opts = document.querySelectorAll('input[name="report-option"]')
  for (const i of opts) {
    if (i.checked) {
      document.getElementById("report-name").innerHTML=i.value[0].toUpperCase() + i.value.slice(1) + " report";
  }
}

  (document.getElementsByClassName("result-container"))[0].style.visibility="visible";

  let table = document.querySelector('#res-data');
  table.innerHTML="";
  for (let i = 0; i < 4; i++) {
    let tr = document.createElement('tr');
    let td=document.createElement('td');
    td.innerHTML=tableData.data;
    tr.appendChild(td);
    td=document.createElement('td');
    td.innerHTML=tableData.UBS;
    tr.appendChild(td);
    td=document.createElement('td');
    let str = tableData.slope[i] + (isSlopePositive(tableData.slope[i])
    ? "<img src='pictures/positive.svg' alt='res' />" : "<img src='pictures/negative.svg' alt='res' />"); 
    td.innerHTML=str;
    tr.appendChild(td);
    td=document.createElement('td');
    str=tableData.offset[i] + (isOffsetPositive(tableData.offset[i])
    ? "<img src='pictures/positive.svg' alt='res' />" : "<img src='pictures/negative.svg' alt='res' />"); 
    td.innerHTML=str;
    tr.appendChild(td);
    td=document.createElement('td');
    td.innerHTML=tableData.user[i];
    tr.appendChild(td);
    if (i+1!=4) {
      tr.className="bordered";
    }
    table.appendChild(tr);

  }
}

function isSlopePositive(slope) {
  return slope>95 && slope<105 ? true : false;
}

function isOffsetPositive(offset) {
  return offset>-2 && offset<2 ? true : false;
}
