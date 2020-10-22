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
    descriptions: []
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
tdElements.addEventListener("click", deleteModal);

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
    if (event.target.id === "x2" || event.target.id === "submit2") {
      modal.style = "display:none";
    }
  }
}
function deleteModal() {
  if (event.target.id !== "deleteButton") return;
  selectedRowIndex = event.target.className;
  var modal = document.querySelector("#modal3");
  modal.style = "display:block";
  var yesButton = document.querySelector("#yes");
  yesButton.addEventListener("click", deleteEvent);
  window.onclick = function (event) {
    if (event.target.id === "x3" || event.target.id === "no" || event.target.id === "yes") {
      modal.style = "display:none";
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
  displaySchedule();
}
function deleteEvent() {
  for (var i = 0; i < days.length; i++) {
    if (selectedDay === days[i].day) {
      break;
    }
  }
  days[i].times.splice(selectedRowIndex,1);
  days[i].descriptions.splice(selectedRowIndex,1);
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
    var deleteButton = document.createElement("button");
    deleteButton.id = "deleteButton";
    deleteButton.className = k;
    deleteButton.textContent = "Delete";
    deleteButton.style = "background-color: red";
    descriptionData[k].appendChild(deleteButton);
    var updateButton = document.createElement("button");
    updateButton.id = "updateButton";
    updateButton.className = k;
    updateButton.textContent = "Update";
    descriptionData[k].appendChild(updateButton);
  }
}
