
console.log('Hello World')

// Create a function for the hamburger menu

let sidenav = document.getElementById("mySidenav");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}

// Fonction stop watch

window.onload = function () {

  let seconds = 0;
  let tens = 0

  let secondsSpan = document.getElementById('seconds');
  let tensSpan = document.getElementById('tens');
  let buttonStart = document.getElementById('button-start');
  let buttonStop = document.getElementById('button-stop');
  let buttonReset = document.getElementById('button-reset');
  let Interval


buttonStart.onclick = function () {
  clearInterval(Interval);
     Interval = setInterval(setTimer, 10);
}

  
buttonStop.onclick = function() {
  clearInterval(Interval);
}


buttonReset.onclick = function () {
  clearInterval(Interval)
  seconds = '00';
  tens = '00';
  secondsSpan.innerHTML = seconds;
  tensSpan.innerHTML = tens;
}

const setTimer = () => {
  tens++;
      
  if(tens <= 9){
    tensSpan.innerHTML = "0" + tens;
  }
  
  if (tens > 9){
    tensSpan.innerHTML = tens;
    
  } 
  
  if (tens > 99) {
    console.log("seconds");
    seconds++;
    secondsSpan.innerHTML = "0" + seconds;
    tens = 0;
    tensSpan.innerHTML = "0" + 0;
  }
  
  if (seconds > 9){
    secondsSpan.innerHTML = seconds;
  }

}
}

