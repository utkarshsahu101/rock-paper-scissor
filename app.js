// dom variables
const userScore = document.getElementById("userScore");
const compScore = document.getElementById("compScore");
const scoreBoard = document.querySelector(".scoreBoard");
const result = document.querySelector(".result > p");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

// js variables
let user = 0;
let comp = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}
// console.log(getComputerChoice());

function win(userChoice, computerChoice) {
  const smallUser = "user".fontsize(3).sub();
  const smallComp = "comp".fontsize(3).sub();
  const userChoiceDiv = document.getElementById(userChoice);
  user++;
  userScore.innerHTML = user;
  compScore.innerHTML = comp;

  result.innerHTML = `${userChoice}${smallUser} beats ${computerChoice}${smallComp}. You win....`;
  userChoiceDiv.classList.add("green-shadow");
  setTimeout(() => userChoiceDiv.classList.remove("green-shadow"), 800);
}
function lose(userChoice, computerChoice) {
  const smallUser = "user".fontsize(3).sub();
  const smallComp = "comp".fontsize(3).sub();
  const userChoiceDiv = document.getElementById(userChoice);
  comp++;
  userScore.innerHTML = user;
  compScore.innerHTML = comp;

  result.innerHTML = `${userChoice}${smallUser} loses to  ${computerChoice}${smallComp}. You lost....`;
  userChoiceDiv.classList.add("red-shadow");
  setTimeout(() => userChoiceDiv.classList.remove("red-shadow"), 800);
}
function draw(userChoice, computerChoice) {
  const smallUser = "user".fontsize(3).sub();
  const smallComp = "comp".fontsize(3).sub();
  const userChoiceDiv = document.getElementById(userChoice);
  userScore.innerHTML = user;
  compScore.innerHTML = comp;

  result.innerHTML = `${userChoice}${smallUser} equals ${computerChoice}${smallComp}. It's a draw.`;
  userChoiceDiv.classList.add("black-shadow");
  setTimeout(() => userChoiceDiv.classList.remove("black-shadow"), 800);
}
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscissor":
    case "scissorpaper":
    case "paperrock":
      win(userChoice, computerChoice);
      break;
    case "scissorrock":
    case "paperscissor":
    case "rockpaper":
      lose(userChoice, computerChoice);
      break;
    case "scissorscissor":
    case "paperpaper":
    case "rockrock":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock.addEventListener("click", () => game("rock"));
  paper.addEventListener("click", () => game("paper"));
  scissor.addEventListener("click", () => game("scissor"));
}

main();
