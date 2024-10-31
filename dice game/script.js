const score1 = document.querySelector(".score1")
let current_score1 = document.querySelector(".current_score1");

const score2 = document.querySelector(".score2")
let current_score2 = document.querySelector(".current_score2");

const roll = document.querySelector(".roll");
const hold = document.querySelector(".hold");

let isPlayerOne = true;

roll.addEventListener("click", () => {
    let dice_number = Math.floor(Math.random() * 6) + 1;
    console.log(dice_number);
    if (dice_number === 1) {
        if (isPlayerOne) {
            current_score1.textContent = 0;
            isPlayerOne = false;
        }
        else {
            current_score2.textContent = 0;
            isPlayerOne = true;
        }
    }    
    if (isPlayerOne) {
        current_score1.textContent = parseInt(current_score1.textContent) + dice_number;
    }
    else {
        current_score2.textContent = parseInt(current_score2.textContent) + dice_number;
    }

})

hold.addEventListener("click", () => {
    if (isPlayerOne) {
        score1.textContent = parseInt(score1.textContent) + parseInt(current_score1.textContent);
        current_score1.textContent = 0;
        isPlayerOne = false;
    }
    else {
        score2.textContent = parseInt(score2.textContent) + parseInt(current_score2.textContent);
        current_score2.textContent = 0;
        isPlayerOne = true;
    }
})