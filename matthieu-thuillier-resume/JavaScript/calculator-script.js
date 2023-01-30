
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



// Manipulate a dom

let display = document.getElementById('display');

// convert to an array

let buttons = Array.from(document.getElementsByClassName('button'));
console.log(buttons)

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            case '←':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);  
                }
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText)
                } catch {
                    display.innerText ='Error : invalid Format!'
                }
                break;
            default:
                display.innerText += e.target.innerText
           
        }
        });
});
