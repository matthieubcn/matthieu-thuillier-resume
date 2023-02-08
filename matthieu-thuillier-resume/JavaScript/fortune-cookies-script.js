
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
};

// Logic for the fortune cookies //

// Fortuen cookies Array to be feed if necessary //

let fortuneQuotes = [
"The love of your life is right in front of your eyes.",
"Behind this fortune is the love of my life.",
"You have a secret admirer.",
"Love because it is the only true adventure.",
"The love of your life will appear in front of you unexpectedly!",
"An old love will come back to you.",
"Your love life will soon be happy and harmonious.",
"The fortune you seek is in another cookie.",
"A closed mouth gathers no feet.",
"A conclusion is simply the place where you got tired of thinking.",
"A cynic is only a frustrated optimist.",
"A foolish man listens to his heart. A wise man listens to cookies.",
"You will die alone and poorly dressed.",
"A fanatic is one who can't change his mind, and won't change the subject.",
"If you look back, you’ll soon be going that way.",
"You will live long enough to open many fortune cookies.",
"An alien of some sort will be appearing to you shortly.",
"Do not mistake temptation for opportunity.",
"Flattery will go far tonight.",
"He who laughs at himself never runs out of things to laugh at.",
"He who laughs last is laughing at you.",
"He who throws dirt is losing ground.",
"Some men dream of fortunes, others dream of cookies.",
"The greatest danger could be your stupidity.",
"We don’t know the future, but here’s a cookie.",
"The world may be your oyster, but it doesn't mean you'll get its pearl.",
"You will be hungry again in one hour.",
"The road to riches is paved with homework.",
"You can always find happiness at work on Friday.",
"Actions speak louder than fortune cookies.",
];

// First 2 selectors to trigger the logic //
    
let buttonCookies = document.getElementById('daily-cookies-button');
let randomQuote = document.getElementById('randomText');
let buttonHidden = document.getElementById('button-hidden')

const fortuneSelector = () => {
    let randomFortune = Math.floor(Math.random()* fortuneQuotes.length)
    return fortuneQuotes[randomFortune];
}

console.log(fortuneSelector())

const showFortune = () => {
  randomQuote.innerHTML = fortuneSelector();
  buttonCookies.innerHTML = 'Come Back Tomorrow!';
  buttonCookies.style.cursor = 'not-allowed';
  buttonCookies.style.backgroundColor ='#4B86AB'
  buttonCookies.removeEventListener('click', showFortune);
  buttonHidden.style.display = 'block';
}

buttonCookies.addEventListener('click', showFortune);

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
typewriter(target, 'Open your Cookie', 200);