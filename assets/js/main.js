// guessNumber()has to:
// // roundCount++
// replace the contents of div#roundsOutputElement with `${roundCount} / ${numOfRounds}`
// generate a random number between 1 and 100. Store in var theAnswer
// Store the user input from #user-guess in var userGuess
// if theAnswer == userGuess, output `Yes! You got me in ${roundCount} guesses! I'm ${userGuess}. <a href="#" onclick="reset()">You win! Play again?`</a>.
//if theAnswer > userGuess, output `${roundCount} - You need to guess higher than ${userGuess}`.
// else output `${roundCount} - You need to guess lower than ${userGuess}.`
// On win: disable input field
// show radios again

// ######################################################
// Still ToDo:


// references
const customInputEl = document.querySelector("#custom-user-input");
const inputTrigger = document.getElementById("inputTrigger");
const roundsOutputEl = document.getElementById("roundsOutputEl");
let guessInput = document.getElementById("guess-input");
const resultEl = document.getElementById("res");
let numOfRounds = parseInt(
  document.querySelector("input[name=round-radios]:checked").value
);
let roundCount = 0;
let theAnswer = 0;
let userGuess = 0;

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

roundsOutputEl.addEventListener("click", getTargetValue); // get the radio value if the element is clicked

theAnswer = Math.ceil(Math.random() * 100);
console.log(theAnswer);

// Function: guess number
let guessNumber = () => {
  event.preventDefault();
  if (inputTrigger.checked) {
    numOfRounds = parseInt(customInputEl.value);
  }
  roundCount++;
  roundsOutputEl.innerHTML = `${roundCount} / ${numOfRounds}`;

  userGuess = parseInt(guessInput.value);

  if (theAnswer == userGuess) {
    resultEl.innerHTML += `<p>${roundCount} - Yes! You got me in ${roundCount} guesses! You win! Number ${userGuess}. <a href="#" onclick="reset()"> Play again?</a></p>`;
    guessInput.disabled = true;
  } else if (numOfRounds <= roundCount) {
    document.write("GAME OVER");
  } else if (theAnswer > userGuess) {
    resultEl.innerHTML += `<p>${roundCount} - You need to guess higher than ${userGuess}.</p>`;
  } else if (theAnswer < userGuess) {
    resultEl.innerHTML += `<p>${roundCount} - You need to guess lower than ${userGuess}.</p>`;
  }
  guessInput.value = "";
  guessInput.focus();
};

// function reset
let reset = () => {
  location.reload();
};
