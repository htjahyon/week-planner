var days = [
  {
    day: "Sunday"
  },
  {
    day: "Monday"
  },
  {
    day: "Tuesday"
  },
  {
    day: "Wednesday"
  },
  {
    day: "Thursday"
  },
  {
    day: "Friday"
  },
  {
    day: "Saturday"
  }
];
function returnDays(object) {
  var dayElement = document.createElement("div");
  dayElement.className = "day";
  dayElement.textContent = object.day;
  return dayElement;
}
for(var i=0; i<days.length; i++) {
  document.querySelector(".week").appendChild(returnDays(days[i]));
}
function returnTable(name) {
  var tableElement = document.createElement("table");
  tableElement.id = name;
  var titleElement = document.createElement("tr");
  titleElement.textContent = name;
  titleElement.style = "background-color: lightgray";
  tableElement.appendChild(titleElement);
  for(var i=0; i<8; i++) {
    var rowElement = document.createElement("tr");
    var dataElement = document.createElement("td");
    rowElement.appendChild(dataElement);
    tableElement.appendChild(rowElement);
  }
  return tableElement;
}
document.querySelector(".tables").appendChild(returnTable("Time"));
document.querySelector(".tables").appendChild(returnTable("Description"));
