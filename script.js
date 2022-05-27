"use strict";

const message = document.getElementById("message");
const hiddenNumber = document.getElementById("hiddenNumber");
const scoreEL = document.getElementById("score");

let solution = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;
let playing = true;

//hiddenNumber.textContent = solution;
console.log(solution);

document.getElementById("check").addEventListener("click", function () {
  let number = document.getElementById("guessBtn").value;
  console.log(number);
  if (playing) {
    if (score > 1) {
      if (!number) {
        message.textContent = "🚫No Number !!";
      } else if (number == solution) {
        message.textContent = "✅ Correct Number";
        hiddenNumber.textContent = solution;
        document.querySelector("body").classList.add("backgroundImg");
        playing = false;

        if (score > highscore) {
          highscore = score;
          document.getElementById("highScore").textContent = highscore;
        }
      } else {
        message.textContent = number > solution ? "⬆ too high" : "⬇ Too low";
        score--;
        scoreEL.textContent = score;
      }
    } else {
      message.textContent = "👎You Lost the game";
      scoreEL.textContent = 0;
      hiddenNumber.textContent = solution;
      document.querySelector("body").classList.add("lostBackground");
      playing = false;
    }
  }
});

document.getElementById("again").addEventListener("click", function () {
  solution = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  scoreEL.textContent = score;
  hiddenNumber.textContent = "?";
  message.textContent = "Start Guessing !!!";
  document.getElementById("guessBtn").value = " ";
  document.querySelector("body").classList.remove("backgroundImg");
  document.querySelector("body").classList.remove("lostBackground");
  playing = true;
});
