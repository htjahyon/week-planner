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

var rightDataElement = null;
var selectedRowIndex = 0;
var textDayElement = document.querySelector("span");
var weekElement = document.querySelector(".week");
weekElement.addEventListener("click", daySchedule);
var entryModalElement = document.querySelector("#entry");
entryModalElement.addEventListener("click", entryModal);


start();
var tdElements = document.querySelector(".schedule");
tdElements.addEventListener("click", updateModal);

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
  var modal = document.querySelector("#modal1");
  modal.style = "display:block";
  var submit1 = document.querySelector("#submit1");
  submit1.addEventListener("click", addEvent);
  window.onclick = function(event) {
    if(event.target.id === "x1" || event.target.id === "submit1") {
       modal.style = "display:none";
    }
  }
}
function updateModal() {
  if (event.target.id !== "updateButton") return;
    selectedRowIndex = event.target.className;
  var modal = document.querySelector("#modal2");
  modal.style = "display:block";
  var sameDay = document.querySelector("#inputday2");
  sameDay.textContent = selectedDay;
  var submit2 = document.querySelector("#submit2");
  submit2.addEventListener("click", updateEvent);
  window.onclick = function (event) {
    if (event.target.id === "x2") {
      modal.style = "display:none";
    }
    else if(event.target.id === "submit2") {
      modal.style = "display:none";
      updateEvent();
    }
  }
}
function addEvent() {
  var inputDay = document.querySelector("#inputday1").value;
  var inputTime = document.querySelector("#inputtime1").value;
  var inputDescription = document.querySelector("#inputdescription1").value;
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
function updateEvent() {
  var inputTime = document.querySelector("#inputtime2").value;
  var inputDescription = document.querySelector("#inputdescription2").value;
  for(var i=0; i<days.length; i++) {
    if(selectedDay === days[i].day) {
      break;
    }
  }
  days[i].times[selectedRowIndex] = inputTime;
  days[i].descriptions[selectedRowIndex] = inputDescription;
  var oldUpdateButton = document.getElementsByClassName(selectedRowIndex)[0];
  oldUpdateButton.remove();
  displaySchedule();
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
    var updateButton = document.createElement("button");
    updateButton.id = "updateButton";
    updateButton.className = k;
    updateButton.textContent = "Update";
    descriptionData[k].appendChild(updateButton);
  }
}
