function loadItem() {

  var item = {
    itemImage : "/pictures/scale.svg",
    itemName : "Аналитические весы OHAUS Adventurer АХ324 (B715976163)",
    itemType : "Весы",
    status : "Готов к работе",
    manufacturer : "Ohaus",
    model : "AX-123",
    responsableDepartment : "Группа обслуживания лабораторного оборудования",
    operatinDepartment : "Химико-аналитическая лаборатория 2.0",
    financiallyResponsiblePerson : "Иванов Иван Иванович",
    place : "г. Санкт-Петербург (Нойдорф)",
    serialNumber : "B715976163",
    GUID : "508b2a71-662e-4983-ae0c-3cb0c1cd21c5",
    bimsID : "49db8db1-585f-4b9e-bbf0-8a59698edc8b",
    Tam : "А-001234"
  };

  var ulReport = document.getElementById("device-info");
    var atts = Object.values(item);
    for (let i = 0; i<ulReport.getElementsByTagName("li").length; i++) {
      document.getElementById("att"+(i+1)).innerHTML=  "<mark>"+document.getElementsByTagName("mark")[i].innerHTML+"</mark>";
    }
  var value = document.getElementById("search-input").value;

  if (value.localeCompare(item.GUID)==0 || value.localeCompare(item.bimsID)==0 || value.localeCompare(item.Tam)==0  ||value.localeCompare(item.serialNumber)==0) {
    (document.getElementsByClassName("report-container"))[0].style.visibility="visible";
    (document.getElementsByClassName("report-item-details"))[0].style.visibility="visible";

    document.getElementById("item-name").innerHTML=item.itemName;
    (document.getElementsByClassName("report-container__item-img"))[0].src=item.itemImage;
    var ulReport = document.getElementById("device-info");
    var atts = Object.values(item);
    for (let i = 0; i<ulReport.getElementsByTagName("li").length; i++) {
      document.getElementById("att"+(i+1)).innerHTML = document.getElementById("att"+(i+1)).innerHTML +" " + atts[2+i];
    }

  }
  else {
    alert("Элемент найден не был");
    (document.getElementsByClassName("report-container"))[0].style.visibility="hidden";
    (document.getElementsByClassName("report-item-details"))[0].style.visibility="hidden";
    (document.getElementsByClassName("result-container"))[0].style.visibility="hidden";
  }

}

