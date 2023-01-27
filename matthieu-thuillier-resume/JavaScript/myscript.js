console.log('Hello World')

// Function alert to thanks for downloading the CV//

const alertDownload = () => {
    alert('Thanks for downloading my CV')
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
}


// use the logic to change the background color of the intermeddiate skills


let eventTrigger = document.getElementById('changeBackground')

const setBgTwo = () => {
    let changeColorTwo = document.querySelectorAll('.skills-progress-intermediate')
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    // Use a loop to pick the right element position

    for (let i = 0; i < changeColorTwo.length; i++) {
        changeColorTwo[i].style.backgroundColor = "#" + randomColor;
    }
}


eventTrigger.addEventListener('click', setBgTwo)


  



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


moreSkills.addEventListener('click', closeMore)
moreButton.addEventListener('click', closeMore)



// Form section //

// Change the color of the field background when the field is active

let inputFormName = document.getElementsByClassName('input-color');

const changeInputBackground = () => {
    inputFormName.style.backgroundColor= 'red';
    console.log('this input is clicked')
}

inputFormName.addEventListener('click',changeInputBackground);
 

// Create a basic alert when the form is submitted //


const alertForm = () => {
    alert(`Thanks for contacting me - the form has been submitted correctly - I'll contact you as soon as possible`)
    console.log('The button has been clicked and the form is pushed')
}


//exemple //



const items = document.querySelectorAll('.appear2');

const active = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
        entry.target.classList.add('inview2'); 
        }else{
            entry.target.classList.remove('inview2'); 
        }
    });
}
const io2 = new IntersectionObserver(active);
 for(let i=0; i < items.length; i++){
    io2.observe(items[i]);
 }

