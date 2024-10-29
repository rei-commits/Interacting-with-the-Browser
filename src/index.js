const carData = [
    {
      model: "Dodge Hellcat",
      image: "./images/dodge-hellcat.jpg",
    },
    {
      model: "Mercedes-AMG GT",
      image: "./images/mercedes-amg-gt.jpg",
    },
    {
      model: "Audi RS8",
      image: "./images/audi-rs8.jpg",
    },
    {
      model: "Ferrari 488",
      image: "./images/ferrari-488.jpg",
    },
    {
      model: "Porsche 911",
      image: "./images/porsche-911.jpg",
    },
  ];
  
  const guessInput = document.getElementById("car-input");
  const submitGuessBtn = document.getElementById("guess-button");
  const feedbackDiv = document.getElementById("feedback");
  const newGameBtn = document.getElementById("new-game-button");
  const carImage = document.getElementById("car-image");
  
  let randomCar;
  let remainingGuesses;
  let currentBlurLevel;
  
  // Function to start a new game
  function newGame() {
    const randomIndex = Math.floor(Math.random() * carData.length);
    randomCar = carData[randomIndex];
    carImage.src = randomCar.image;
    remainingGuesses = 5;
    currentBlurLevel = 10; // Start with a moderate blur level
    carImage.style.filter = `blur(${currentBlurLevel}px)`;
    feedbackDiv.textContent = "";
    guessInput.value = "";
    guessInput.disabled = false;
    submitGuessBtn.disabled = false;
  }
  
  // Function to handle user guesses
  function guessCar() {
    const userGuess = guessInput.value.trim();
  
    if (userGuess.toLowerCase() === randomCar.model.toLowerCase()) {
      feedbackDiv.textContent = "Congratulations! You guessed it!";
      endGame();
    } else {
      remainingGuesses--;
      currentBlurLevel -= 2; // Reduce the blur by 2px for each incorrect guess
      carImage.style.filter = `blur(${Math.max(currentBlurLevel, 0)}px)`;
  
      if (remainingGuesses > 0) {
        feedbackDiv.textContent = `Incorrect guess. ${remainingGuesses} guesses remaining.`;
      } else {
        feedbackDiv.textContent = `Sorry, you're out of guesses. The correct answer was ${randomCar.model}.`;
        endGame();
      }
    }
    guessInput.value = "";
    guessInput.focus();
  }
  
  // Function to end the game
  function endGame() {
    guessInput.disabled = true;
    submitGuessBtn.disabled = true;
  }
  
  // Add event listeners
  submitGuessBtn.addEventListener("click", guessCar);
  newGameBtn.addEventListener("click", newGame);
  window.addEventListener("load", newGame);
v  