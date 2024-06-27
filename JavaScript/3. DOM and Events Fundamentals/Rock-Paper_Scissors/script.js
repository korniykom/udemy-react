// 1 - paper
//2 - scissors
//3 - rock
let computerChoice = Math.floor(Math.random() * 3) + 1;
const whatIsComputerChoice = (computerChoice) => {
  if (computerChoice === 1) {
    return "paper";
  } else if (computerChoice === 2) {
    return "scissors";
  } else {
    return "rock";
  }
};
console.log(whatIsComputerChoice(computerChoice));
document.querySelector(".paper").addEventListener("click", () => {
  computerChoice === 1
    ? (document.querySelector(".result").textContent = "Tie")
    : computerChoice === 2
    ? (document.querySelector(".result").textContent = "Computer has won")
    : (document.querySelector(".result").textContent = "Player has won");
});

document.querySelector(".scissors").addEventListener("click", () => {
  computerChoice === 1
    ? (document.querySelector(".result").textContent = "Player has won")
    : computerChoice === 2
    ? (document.querySelector(".result").textContent = "Tie")
    : (document.querySelector(".result").textContent = "Computer has won");
});

document.querySelector(".rock").addEventListener("click", () => {
  computerChoice === 1
    ? (document.querySelector(".result").textContent = "Computer has won")
    : computerChoice === 2
    ? (document.querySelector(".result").textContent = "Player has won")
    : (document.querySelector(".result").textContent = "Tie");
});
//Restart
document.querySelector(".restart-button").addEventListener("click", () => {
  document.querySelector(".result").textContent =
    "So... Let's Play another Game!";
  computerChoice = Math.floor(Math.random() * 3) + 1;
});
