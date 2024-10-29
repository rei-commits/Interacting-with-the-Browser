
# Car Model Guessing Game

This is a simple interactive web-based game where users try to guess the correct car model from a gradually revealing blurred image. The image becomes clearer with each incorrect guess, providing a hint as players get closer to the correct answer.


## Features

- Dynamic Image Blur: The car image starts with a blur and becomes progressively clearer with each incorrect guess.
- User Feedback: Informative messages guide the player by tracking remaining guesses and indicating whether the guess was correct or incorrect.
- Random Car Selection: A random car model is chosen for each new game.
- Reset Button: Start a new game with a different random car model at any time.



## Tech Usage

- HTML: For basic page structure.
- CSS: For styling, including image dimensions and feedback messages.
- JavaScript: For game logic, dynamic blur adjustments, and DOM manipulation.
- Browser Object Model (BOM): Utilized to prompt the user and provide interactive gameplay.



## How To Play

1. Start the Game: The game begins automatically when the page loads. A car image will appear with a blurred effect, hiding its details.
2. Guess the Car Model: Type your guess for the car model in the input field and press "Guess".
3. Hints with Each Incorrect Guess: If the guess is incorrect, a message will appear with the number of remaining guesses, and the image will become slightly clearer.
4. Win or Lose:
     - If you guess correctly, a congratulatory message will appear.
     - If you exhaust all guesses without guessing correctly, the correct answer will be revealed.
5. Start a New Game: Press the "New Game" button to reset with a new random car model and image.

## Installation

Clone or download Repository

```bash
  git clone https://github.com/username/car-model-guessing-game.git
```
    
## Customizing the Game

1. Add New Cars: Add new car models to the carData array in index.js, including the model name and image path.
2. Adjust Blur Levels: Modify the initial blur level or the decrement step for incorrect guesses to change the game's difficulty.
