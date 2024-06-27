"use strict";
let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];
let playing = true;

const score0Element = document.querySelector("#score--0");
const score1Element = document.getElementById("score--1");
const diceElement = document.querySelector(".dice");
const buttonRoll = document.querySelector(".btn--roll");
const buttonHold = document.querySelector(".btn--hold");
const buttonNew = document.querySelector(".btn--new");
const currentScoreElement0 = document.getElementById("current--0");
const currentScoreElement1 = document.getElementById("current--1");

const changePlayer = () => {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--active");

  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add("player--active");
  currentScore = 0;
};

score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add("hidden");

buttonRoll.addEventListener("click", () => {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceElement.classList.remove("hidden");
    diceElement.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      changePlayer();
    }
  }
});
buttonHold.addEventListener("click", () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      diceElement.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    }
    changePlayer();
  }
});

buttonNew.addEventListener("click", () => {
  currentScore = 0;
  scores[0] = scores[1] = 0;
  playing = true;
  document.querySelector(`.player--0`).classList.remove("player--winner");
  document.querySelector(`.player--1`).classList.remove("player--winner");
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--active");
  activePlayer = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add("player--active");
  currentScoreElement0.textContent = 0;
  currentScoreElement1.textContent = 0;
  score0Element.textContent = 0;
  score1Element.textContent = 0;
});
