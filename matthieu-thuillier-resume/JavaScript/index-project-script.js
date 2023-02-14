// Create a function for the hamburger menu

let sidenav = document.getElementById("mySidenav");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

// /Set the width of the side navigation to 250px 
function openNav() {
  sidenav.classList.add("active");
}

// Set the width of the side navigation to 0
function closeNav() {
  sidenav.classList.remove("active");
}

// Function survey
let surveyBar = document.getElementById("survey-bar");
let closeButton = document.getElementById("close-button");
let surveyForm = document.getElementById("survey-form");
let radioButtons = surveyForm.elements["rating"];

setTimeout(function(){
  surveyBar.style.display = "block";
}, 2000);

closeButton.onclick = function() {
  surveyBar.style.display = "none";
}

setTimeout(function(){
  var radioChecked = false;
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      radioChecked = true;
      break;
    }
  }
  if (!radioChecked) {
    surveyBar.style.display = "none";
  }
}, 10000);

let surveySubmitted = false;

surveyForm.onsubmit = function(event) {
  event.preventDefault();

  if (!surveySubmitted) {
    surveySubmitted = true;
    for (var i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) {
        alert("Thanks for taking the survey! Your rating is: " + radioButtons[i].value + " stars.");
        surveyBar.style.display = "none";
        break;
      }
    }
  } else {
    alert("You have already submitted the survey.");
  }
};