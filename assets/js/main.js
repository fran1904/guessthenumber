// references
let i = 0;
let a = 0;
let b = 0;
let startText =
  "Planet Earth stands shortly before an an alien invasion...                               A fleet of Zogonian Battle-Cruisers is headed toward Earth.                               As commander of Earth's forces, only YOU can save the human race.                               Your first task is to discover how many alien ships are in the enemy fleet.                               Time is short...";

const startContainer = document.getElementById("startContainer");
const customInputEl = document.querySelector("#custom-user-input");
const inputTrigger = document.getElementById("inputTrigger");
const roundsOutputEl = document.getElementById("roundsOutputEl");
const guessInput = document.getElementById("guess-input");
const roundsEl = document.getElementById("roundsEl");
const resultEl = document.getElementById("res");
const resContent = document.getElementById("resContent");
const gameOver = document.getElementById("gameOver");
const winLose = document.getElementById("winLose");
const winLoseDesc = document.getElementById("winLoseDesc");
let numOfRounds = parseInt(
  document.querySelector("input[name=round-radios]:checked").value
);
let roundCount = 0;
let theAnswer = 0;
let userGuess = 0;

// Function: Types startText to screen
let typeStartText = () => {
  if (i < startText.length) {
    document.getElementById("startText").innerHTML += startText.charAt(i);
    i++;
    setTimeout(typeStartText, 30);
  }
};

// Function: hide screen one, show screen two
let showScreenTwo = () => {
  startContainer.classList.add("hide");
  roundsContainer.classList.remove("hide");
};

// Function: show screen three (start game)
let startGame = () => {
  roundsContainer.classList.add("hide");
  guessContainer.classList.remove("hide");
};

// Function: Gets value of clicked radio
let getTargetValue = () => {
  numOfRounds = event.target.value;
  if (numOfRounds == "custom") {
    toggleInputVis();
  }
};

// Function: Show hidden input field
let toggleInputVis = () => {
  if (inputTrigger.checked) {
    customInputEl.classList.remove("hide");
  }
};

// Show screen four - game over
let showGameOver = () => {
  guessContainer.classList.add("hide");
  gameOver.classList.remove("hide");
};

// function reset
let reset = () => {
  location.reload();
};

roundsOutputEl.addEventListener("click", getTargetValue); // get the radio value if the element is clicked

theAnswer = Math.ceil(Math.random() * 100);

roundsEl.innerHTML = `<i class="fas fa-user-astronaut"></i>`;

// Function: guess number
let guessNumber = () => {
  event.preventDefault();
  if (inputTrigger.checked) {
    numOfRounds = parseInt(customInputEl.value);
  }
  roundCount++;
  roundsEl.innerHTML = `${roundCount} / ${numOfRounds}`;
  userGuess = parseInt(guessInput.value);

  if (theAnswer == userGuess) {
    showGameOver();
    winLose.innerHTML = "You Win!";
    winLoseDesc.innerHTML = `Congratulations! The invading fleet has ${userGuess} Battle Cruisers! Now you can prepare your defenses!`;
  } else if (numOfRounds <= roundCount) {
    showGameOver();
  } else if (theAnswer > userGuess) {
    resContent.innerHTML += `<p>${roundCount} - There are more Battle Cruisers than ${userGuess}.</p>`;
  } else if (theAnswer < userGuess) {
    resContent.innerHTML += `<p>${roundCount} - There are less Battle Cruisers than ${userGuess}.</p>`;
  }
  guessInput.value = "";
  guessInput.focus();
};
