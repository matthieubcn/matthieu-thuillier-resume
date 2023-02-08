
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



// Function to create a slide menu to show the value;


const rangeInput = document.querySelector('#tip-percentage')
const rangeValue = document.querySelector('#range-value')

rangeInput.addEventListener('input', function () {
    rangeValue.textContent = rangeInput.value + '%'
    console.log('the slide is moving')
});


//  Fumction to calculate the tips

const billAmount = document.querySelector('#amount-value');
const tipPercentage = document.querySelector('#tip-percentage')
const tipPercentageValue = document.querySelector('#range-value')
const tipAmount = document.querySelector('#tipAmount');
const totalAmount = document.querySelector('#billAmount');

const errorMessage = document.querySelector('#errorMessage')


billAmount.addEventListener('input', () => {

    if (typeof parseFloat(billAmount.value) === 'string ') {
        errorMessage.textContent = 'Only Numbers are eligible to pay for a bill'
        tipAmount.value = 0;
        totalAmount.value = 0;

        console.log('the value is wrong ')

    }else {
        errorMessage.textContent = '';
        tipAmount.value = (billAmount.value * tipPercentage.value / 100).toFixed(2);
        totalAmount.value = parseFloat(billAmount.value) + parseFloat(tipAmount.value);
    }
})


//Funtion to inform the user that it has to be a number



        
// Function type writting


const typewriter = (element, text, speed) => {
  window.addEventListener('load', () => {

      let i = 0;
      function type() {
          if (i < text.length) {
              element.innerHTML += text.charAt(i);
              i++;
              setTimeout(type, speed);
          }
      };
      type();
  });
};

const target = document.querySelector('.typewriter');
typewriter(target, 'Tips Collector', 200);