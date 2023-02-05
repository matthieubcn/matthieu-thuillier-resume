console.log('Hello World');

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

// function closeNav1() {
//     sidenav.classList.remove('active')
// }

const close = () => {
    sidenav.style.display ='none'
    console.log('the links are clicked');
}



// Function alert to thanks for downloading the CV//

const alertDownload = () => {
    alert(`Thanks for downloading my CV - you'll be redirected to a new tab soon`)
    console.log('The button is clicked')
}


// function to generate randowm color for the skills bars //

// USe the button ti change the color of the whole classes of skills progress advancesd 
const setBg = () => {
    let changeColor = document.querySelectorAll('.skills-progress-advanced')
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    for (let i = 0; i < changeColor.length; i++) {
        changeColor[i].style.backgroundColor = "#" + randomColor;
    }

    console.log('this button is clicked')
}

//use the logic to change the background color of the intermeddiate skills


let eventTrigger = document.getElementById('changeBackground')

const setBgTwo = () => {
let changeColorTwo = document.querySelectorAll('.skills-progress-intermediate')
const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    // Use a loop to pick the right element position

    for (let i = 0; i < changeColorTwo.length; i++) {
        changeColorTwo[i].style.backgroundColor = "#" + randomColor;
    }
}

eventTrigger.addEventListener('click', setBgTwo);


// click two buttons to reverse the logic ==> one button is create when the first function is passed //

let moreSkills = document.getElementById('hidden')
let moreButton = document.getElementById('hidden-button')
let overWritting = document.getElementById('showmore-button')

const showMore = () =>{
    moreSkills.style.display = 'block';
    moreButton.style.display = 'block';
    console.log('this open  button is clicked true')
    overWritting.style.display='none'
}

moreSkills.addEventListener('click', showMore)
moreButton.addEventListener('click', showMore)
overWritting.addEventListener('click',showMore)

const closeMore = () => {
    moreSkills.style.display = 'none';
    moreButton.style.display = 'none';
    overWritting.innerHTML = 'Learn more'; // back to the original version //
    console.log('the close button is clicked true')
    overWritting.style.display='block'
}

moreSkills.addEventListener('click', closeMore);
moreButton.addEventListener('click', closeMore);


// Method to close the click more button for the section of Country manager position //

let moreSkills1 = document.getElementById('hidden1');
let moreButton1 = document.getElementById('hidden-button1');
let overWritting1 = document.getElementById('showmore-button1');

const showMore1 = () =>{
    moreSkills1.style.display = 'block';
    moreButton1.style.display = 'block';
    overWritting1.innerHTML = 'Learn more'; // back to the original version //
    console.log('this open  button is clicked true')
    overWritting1.style.display='none'
}

moreSkills1.addEventListener('click', showMore1)
moreButton1.addEventListener('click', showMore1)
overWritting1.addEventListener('click',showMore1)

const closeMore1 = () => {
    moreSkills1.style.display = 'none';
    moreButton1.style.display = 'none';
    overWritting1.innerHTML = 'Learn more'; // back to the original version //
    console.log('the close button is clicked true')
    overWritting1.style.display='block'
}

moreSkills1.addEventListener('click', closeMore1);
moreButton1.addEventListener('click', closeMore1);


// function for the team leader position


let moreSkills2 = document.getElementById('hidden2');
let moreButton2 = document.getElementById('hidden-button2');
let overWritting2 = document.getElementById('showmore-button2');

const showMore2 = () =>{
    moreSkills2.style.display = 'block';
    moreButton2.style.display = 'block';
    console.log('this open  button is clicked true')
    overWritting2.style.display='none'
}


const closeMore2 = () => {
    moreSkills2.style.display = 'none';
    moreButton2.style.display = 'none';
    overWritting2.innerHTML = 'Learn more'; // back to the original version //
    console.log('the close button is clicked true')
    overWritting2.style.display='block'
}


// Function for the inside sales position

let moreSkills3 = document.getElementById('hidden3');
let moreButton3 = document.getElementById('hidden-button3');
let overWritting3 = document.getElementById('showmore-button3');

const showMore3 = () =>{
    moreSkills3.style.display = 'block';
    moreButton3.style.display = 'block';
    console.log('this open  button is clicked true')
    overWritting3.style.display='none'
}


const closeMore3 = () => {
    moreSkills3.style.display = 'none';
    moreButton3.style.display = 'none';
    overWritting3.innerHTML = 'Learn more'; // back to the original version //
    console.log('the close button is clicked true')
    overWritting3.style.display='block'
}

// function for inside nord net position\


let moreSkills4 = document.getElementById('hidden4');
let moreButton4 = document.getElementById('hidden-button4');
let overWritting4 = document.getElementById('showmore-button4');

const showMore4 = () =>{
    moreSkills4.style.display = 'block';
    moreButton4.style.display = 'block';
    console.log('this open  button is clicked true')
    overWritting4.style.display = 'none';
}


const closeMore4 = () => {
    moreSkills4.style.display = 'none';
    moreButton4.style.display = 'none';
    overWritting4.innerHTML = 'Learn more'; // back to the original version //
    console.log('the close button is clicked true')
    overWritting4.style.display='block'
}

//Function retail position 

let moreSkills5 = document.getElementById('hidden5');
let moreButton5 = document.getElementById('hidden-button5');
let overWritting5 = document.getElementById('showmore-button5');

const showMore5 = () =>{
    moreSkills5.style.display = 'block';
    moreButton5.style.display = 'block';
    console.log('this open  button is clicked true')
    overWritting5.style.display = 'none';
}


const closeMore5 = () => {
    moreSkills5.style.display = 'none';
    moreButton5.style.display = 'none';
    overWritting5.innerHTML = 'Learn more'; // back to the original version //
    console.log('the close button is clicked true')
    overWritting5.style.display='block'
}

let moreSkills6 = document.getElementById('hidden6');
let moreButton6 = document.getElementById('hidden-button6');
let overWritting6 = document.getElementById('showmore-button6');

const showMore6 = () =>{
    moreSkills6.style.display = 'block';
    moreButton6.style.display = 'block';
    console.log('this open  button is clicked true')
    overWritting6.style.display = 'none';
}

const closeMore6 = () => {
    moreSkills6.style.display = 'none';
    moreButton6.style.display = 'none';
    overWritting6.innerHTML = 'Learn more'; // back to the original version //
    console.log('the close button is clicked true')
    overWritting6.style.display='block'
}

let moreSkills7 = document.getElementById('hidden7');
let moreButton7 = document.getElementById('hidden-button7');
let overWritting7 = document.getElementById('showmore-button7');

const showMore7 = () =>{
    moreSkills7.style.display = 'block';
    moreButton7.style.display = 'block';
    console.log('this open  button is clicked true')
    overWritting7.style.display = 'none';
}

const closeMore7 = () => {
    moreSkills7.style.display = 'none';
    moreButton7.style.display = 'none';
    overWritting7.innerHTML = 'Learn more'; // back to the original version //
    console.log('the close button is clicked true')
    overWritting7.style.display='block'
}



// Form section //

// Change the color of the field background when the field is active

let inputFormName = document.getElementById('name');

const changeInputBackground = () => {
    inputFormName.style.backgroundColor= 'whitesmoke';
    console.log('this input is clicked')
}
inputFormName.addEventListener('mouseover', changeInputBackground);



 
let email= document.getElementById('email')

const changeEmailBackground = () => {
    email.style.backgroundColor = 'whitesmoke'
    
}
email.addEventListener('click', changeEmailBackground)

// Change the color of the company field

let company = document.getElementById('company')

const changeCompanyBackground = () => {
    company.style.backgroundColor = 'whitesmoke'
}

company.addEventListener('click', changeCompanyBackground)

// Change the text color for the textarea field

let message = document.getElementById('message')

const changeTextArea = () => {
    message.style.backgroundColor = 'whitesmoke'
}

message.addEventListener('click', changeTextArea)

// Create a fucntion to make the form dynamic and inform that all the fields are required before submitting the form


function validateForm(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let company = document.getElementById('company').value;
    let message = document.getElementById('message').value;
    let isValid = true;

    // Create a name function if the name is less or equal of 2 caracterers
    const newLocal = name.length <= 2;
    if (name == "" || newLocal ) {
        document.getElementById("nameError").innerHTML = "Name is required";
        isValid = false;
    } else {
        document.getElementById("nameError").innerHTML = "";
    }

    if (email == "") {
        document.getElementById("emailError").innerHTML = "Email is required";
        isValid = false;
    } else if (email.indexOf('@') === -1) {
        document.getElementById("emailError").innerHTML = "Email must contain an @";
        isValid =false
    } else {
        document.getElementById("emailError").innerHTML = "";
    }

    if (company == "") {
        document.getElementById("companyError").innerHTML = "Company name is required";
        isValid = false;

    } else {
        document.getElementById("companyError").innerHTML = "";

    } if (message == '') {
        document.getElementById('messageError').innerHTML ='Please send me a message'
    } else {
        document.getElementById("messageError").innerHTML =""
    }

    if (isValid) {
        alert(`All the fields are filled and the form has been sent properly`);
        console.log('the form has been sent');
        document.getElementById("allErrors").innerHTML=""

    } else {
        document.getElementById("allErrors").innerHTML="All fields are required"
    }
    return isValid;
}
