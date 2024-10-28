const inp = document.querySelector("input");
const score = document.querySelector("#score");
const high_score = document.querySelector("#highscore");
const check = document.querySelector("#check");
const result_of_guess = document.querySelector("#result_of_guess");
const win = document.querySelector("body");
const again = document.querySelector(".again");
console.log(check);
console.log(score);
console.log(high_score);

let target = randomGenerator();
again.addEventListener("click", function (e) {
  win.style.backgroundColor = "black";
  result_of_guess.textContent = "Start guessing...";
  score.textContent = 20;
  inp.value = "";
  target = randomGenerator();
});
check.addEventListener("click", function (e) {
  console.log(target);
  let guess = parseInt(inp.value);
  if (guess === target) {
    result_of_guess.textContent =
      "Congratulations! You guessed the correct number.";
    target = randomGenerator();
    updateHighScore();
    win.style.backgroundColor = "green";
    inp.value = "";
  } else if (guess < target) {
    result_of_guess.textContent = "Too low!";
    updateScore();
  } else if (guess > target) {
    result_of_guess.textContent = "Too high!";
    updateScore();
  }
  if (parseInt(score.textContent) === 0) {
    win.style.backgroundColor = "red";
    result_of_guess.textContent = "Game Over! Your final score is";
  }
});

function randomGenerator() {
  return Math.floor(Math.random() * 20 + 1);
}

function updateScore() {
  score.textContent = parseInt(score.textContent) - 1;
}
function updateHighScore() {
  let current_score = parseInt(score.textContent);
  if (current_score > parseInt(high_score.textContent)) {
    high_score.textContent = current_score;
  }
}
