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
function start() {
  var tbodyElement = document.querySelector(".rows");
  for(var i=0; i<8; i++) {
    var rowElement = document.createElement("tr");
    var dataElement1 = document.createElement("td");
    var dataElement2 = document.createElement("td");
    tbodyElement.appendChild(rowElement);
    rowElement.append(dataElement1, dataElement2);
  }
}
start();

var divElement = document.querySelector(".week");
divElement.addEventListener("click", daySchedule);

function daySchedule() {
  if(event.target === null) {
    return;
  }
  else if(event.target.className === "day") {
    var text = event.target.textContent;
    var emElement = document.querySelector("em");
    emElement.textContent = text;
  }
  else {
    return;
  }
}
