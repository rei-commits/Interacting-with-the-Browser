const carData = [
  { model: "Dodge Hellcat", image: "./images/dodge-hellcat.jpg" },
  { model: "Mercedes-AMG GT", image: "./images/mercedes-amg-gt.jpg" },
  { model: "Audi RS8", image: "./images/audi-rs8.jpg" },
  { model: "Ferrari 488", image: "./images/ferrari-488.jpg" },
  { model: "Porsche 911", image: "./images/porsche-911.jpg" },
];

const guessInput = document.getElementById("car-input");
const submitGuessBtn = document.getElementById("guess-button");
const feedbackDiv = document.getElementById("feedback");
const newGameBtn = document.getElementById("new-game-button");
const carImage = document.getElementById("car-image");

let randomCar;
let remainingGuesses;
let blurAmount = 10; // Initial blur level

// Start a new game
function newGame() {
  const randomIndex = Math.floor(Math.random() * carData.length);
  randomCar = carData[randomIndex];
  carImage.src = randomCar.image;
  remainingGuesses = 5;
  blurAmount = 10; // Reset blur level for a new game
  carImage.style.filter = `blur(${blurAmount}px)`;
  feedbackDiv.textContent = "";
  guessInput.value = "";
  guessInput.disabled = false;
  submitGuessBtn.disabled = false;
}

// Handle user guesses
function guessCar() {
  const userGuess = guessInput.value.trim();

  if (userGuess.toLowerCase() === randomCar.model.toLowerCase()) {
    feedbackDiv.textContent = "Congratulations! You guessed it!";
    carImage.style.filter = "blur(0px)"; // Clear the blur on correct guess
    endGame();
  } else {
    remainingGuesses--;
    if (remainingGuesses > 0) {
      feedbackDiv.textContent = `Incorrect guess. ${remainingGuesses} guesses remaining.`;
      blurAmount -= 2; // Decrease blur amount gradually
      carImage.style.filter = `blur(${blurAmount}px)`;
    } else {
      feedbackDiv.textContent = `Sorry, you're out of guesses. The correct answer was ${randomCar.model}.`;
      endGame();
    }
  }
  guessInput.value = "";
  guessInput.focus();
}

// End the game
function endGame() {
  guessInput.disabled = true;
  submitGuessBtn.disabled = true;
}

// Event listeners
submitGuessBtn.addEventListener("click", guessCar);
window.addEventListener("load", newGame);
newGameBtn.addEventListener("click", newGame);
