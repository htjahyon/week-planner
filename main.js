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
var sundayElement = document.getElementsByClassName("day")[0];
sundayElement.addEventListener("click", sundaySchedule);
var mondayElement = document.getElementsByClassName("day")[1];
mondayElement.addEventListener("click", mondaySchedule);
var tuesdayElement = document.getElementsByClassName("day")[2];
tuesdayElement.addEventListener("click", tuesdaySchedule);
var wednesdayElement = document.getElementsByClassName("day")[3]
wednesdayElement.addEventListener("click", wednesdaySchedule);
var thursdayElement = document.getElementsByClassName("day")[4];
thursdayElement.addEventListener("click", thursdaySchedule);
var fridayElement = document.getElementsByClassName("day")[5];
fridayElement.addEventListener("click", fridaySchedule);
var saturdayElement = document.getElementsByClassName("day")[6];
saturdayElement.addEventListener("click", saturdaySchedule);

function sundaySchedule() {
  var text = "Sunday";
  var emElement = document.querySelector("em");
  emElement.textContent = text;
}
function mondaySchedule() {
  var text = "Monday";
  var emElement = document.querySelector("em");
  emElement.textContent = text;
}
function tuesdaySchedule() {
  var text = "Tuesday";
  var emElement = document.querySelector("em");
  emElement.textContent = text;
}
function wednesdaySchedule() {
  var text = "Wednesday";
  var emElement = document.querySelector("em");
  emElement.textContent = text;
}
function thursdaySchedule() {
  var text = "Thursday";
  var emElement = document.querySelector("em");
  emElement.textContent = text;
}
function fridaySchedule() {
  var text = "Friday";
  var emElement = document.querySelector("em");
  emElement.textContent = text;
}
function saturdaySchedule() {
  var text = "Saturday";
  var emElement = document.querySelector("em");
  emElement.textContent = text;
}
