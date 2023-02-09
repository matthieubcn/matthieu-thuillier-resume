console.log("Hello World");

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

const choices = document.querySelectorAll(".choice");
const result = document.querySelector("#result");

choices.forEach((choice) => {
  choice.addEventListener("click", function () {
    const computerChoice = getComputerChoice();
    const userChoice = this.id;
    const winner = getWinner(userChoice, computerChoice);
    showResult(winner, userChoice, computerChoice);
  });
});

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);
  switch (random) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Tie";
  } else if (userChoice === "rock" && computerChoice === "paper") {
    return "Computer Wins";
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    return "Computer Wins";
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    return "Computer Wins";
  } else {
    return "You Win";
  }
}

function showResult(winner, userChoice, computerChoice) {
  result.innerHTML = `
    <p>You chose <span>${userChoice}</span></p>
    <p>Computer chose <span>${computerChoice}</span></p>
    <p>Result: <span>${winner}</span></p>
  `;
}

// Function type writting

const typewriter = (element, text, speed) => {
  window.addEventListener("load", () => {
    let i = 0;
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  });
};

const target = document.querySelector(".typewriter");
typewriter(target, "Rock Paper Scissor", 200);
