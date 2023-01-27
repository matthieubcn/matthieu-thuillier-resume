console.log('Hello World')

// Function alert to thanks for downloading the CV//

const alertDownload = () => {
    alert('Thanks for downloading my CV')
    console.log('The button is clicked')
}

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

