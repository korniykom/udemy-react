"use strict";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 100;
// console.log(document.querySelector(".guess").value);
// document.querySelector(".guess").value = 23;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;

const setMessage = (message) => {
  document.querySelector(".message").textContent = message;
};
const updateScore = () => {
  document.querySelector(".score").textContent = score;
};
const updateHighScore = () => {
  if (score > highScore) highScore = score;
  document.querySelector(".highscore").textContent = highScore;
};
const updateNumber = () => {
  document.querySelector(".number").textContent = secretNumber;
};
const setGreenBackground = () => {
  document.querySelector("body").style.backgroundColor = "#06b347";
};

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (!guess) {
    setMessage("No number");
  } else if (guess === secretNumber) {
    setMessage("Correct Number");
    updateNumber();
    setGreenBackground();
    document.querySelector(".number").style.width = "100%";
    updateHighScore();
  } else if (guess !== secretNumber) {
    score--;
    updateScore();
    setMessage(guess > secretNumber ? "Too high" : "Too low");
  } else {
    document.querySelector(".score").textContent = 0;
    setMessage("You lost");
  }
});

document.querySelector(".again").addEventListener("click", () => {
  document.querySelector(".message").textContent = "Start guessing";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
});
