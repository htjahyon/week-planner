var days = [
  {
    day: "Sunday",
    times: [],
    descriptions: []
  },
  {
    day: "Monday",
    times: [],
    descriptions: []
  },
  {
    day: "Tuesday",
    times: [],
    descriptions: []
  },
  {
    day: "Wednesday",
    times: [],
    description: []
  },
  {
    day: "Thursday",
    times: [],
    descriptions: []
  },
  {
    day: "Friday",
    times: [],
    descriptions: []
  },
  {
    day: "Saturday",
    times: [],
    descriptions: []
  }
];
var selectedDay = "Monday";
var textDayElement = document.querySelector("span");
var rowIndex = 0;
start();

var weekElement = document.querySelector(".week");
weekElement.addEventListener("click", daySchedule);
var buttonElement = document.querySelector("button");
buttonElement.addEventListener("click", entryModal);

function start() {
  var tbodyElement = document.querySelector(".rows");
  for (var i=0; i<8; i++) {
    var rowElement = document.createElement("tr");
    var dataElement1 = document.createElement("td");
    dataElement1.className = "timedata";
    var dataElement2 = document.createElement("td");
    dataElement2.className = "descriptiondata";
    tbodyElement.appendChild(rowElement);
    rowElement.append(dataElement1, dataElement2);
  }
}
function daySchedule() {
  if(event.target.className !== "day") return;
    selectedDay = event.target.textContent;
    textDayElement.textContent = selectedDay;
    displaySchedule();
}
function entryModal() {
  var modal = document.querySelector(".modal");
  modal.style = "display:block";
  var submit = document.querySelector("#submit");
  submit.addEventListener("click", addEvent);
  window.onclick = function(event) {
    if(event.target.id === "x" || event.target.id === "submit") {
       modal.style = "display:none";
    }
  }
}
function addEvent() {
  var inputDay = document.querySelector("#inputday").value;
  var inputTime = document.querySelector("#inputtime").value;
  var inputDescription = document.querySelector("#inputdescription").value;
  for(var i=0; i<days.length; i++) {
    if(inputDay === days[i].day) {
      days[i].times.push(inputTime);
      days[i].descriptions.push(inputDescription);
    }
  }
  if(selectedDay === inputDay) {
    displaySchedule();
  }
}
function displaySchedule() {
  for (var i=0; i<days.length; i++) {
    if (selectedDay === days[i].day) {
      break;
    }
  }
  if (days[i].times === undefined && days[i].description === undefined) {
    return;
  }
  var timeData = document.getElementsByClassName("timedata");
  var descriptionData = document.getElementsByClassName("descriptiondata");
  for(var j=0; j<8; j++) {
    timeData[j].textContent = "";
    descriptionData[j].textContent = "";
  }
  for (var k=0; k<days[i].times.length; k++) {
    timeData[k].textContent = days[i].times[k];
    descriptionData[k].textContent = days[i].descriptions[k];
  }
  rowIndex = days[i].times.length;
}
