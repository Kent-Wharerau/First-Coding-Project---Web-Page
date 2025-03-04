console.log("connected!!!")

// =============== Araay of objets - Words to slected at random along with hints =============== //

const wordList = [
    {
        word: "Kaalia", // Word to guess
        hint: "Flying Human Cleric Lady", // Hint for word
    },

    {
        word: "Ulalek",
        hint: "Eldrazi Horror Boy",
    },

    {
        word: "Dragon",
        hint: "Breathes Fire",
    },

    {
        word: "Edgar",
        hint: "First Vampire" 
    },
];




// =============== Selecting DOM elements: inputs container and reset button =============== //

const inputs = document.querySelector(".inputs"), // Container where input fields will be added dynamically
resetBtn = document.querySelector(".reset-btn"), // Button to reset and get a new word
hint = document.querySelector(".hint span"), // Element that displays the hint for the word
guessesLeft = document.querySelector(".guesses-left span"), // Element to show remaining guesses
wrongLetter = document.querySelector(".wrong-letter span"), // Element to display wrong guesses
typingInput = document.querySelector(".typing-input"); // Input field where the user types their guesses
let word, corrects = [], incorrects = [] // Initiializes variables to hold the word, correct guesses and incorrect guesses




// ==================== Functions =================== //

// Function to get a random word from the wordlist array
function randomWord() {
    let ranObj = wordList[Math.floor(Math.random() * wordList.length)]; // Randomly selecting an object from the wordlist array
    word = ranObj.word; // getting the word from random object
    maxGuesses = 10; corrects = []; incorrects = []; // resets guesses, corrects and incorrects to start a new game
    console.log(word); // Logging the randomly selected word to the console - (debugging)
    hint.innerText = ranObj.hint; // Sets the hint for randomly selected word
    guessesLeft.innerText = maxGuesses; // Displays the initial number of guesses
    wrongLetter.innerText = incorrects; // Displays incorrect guesses

    // For Loop - loop through each Character of the selected word and creating input fields for them
    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled />`; // Adds a disabled input field for each letter of the word
    }

    inputs.innerHTML = html; // Instert the HTML (input fields) into the DOM inside the inputs container
}
// Calls the randomWord() function once when the page loads to display a random word
randomWord();

// Function to init game
function initGame(e) {
    let key = e.target.value; // Gets the letter typed by the user
    
    // Checks if the input is a valid alphabet letter and hasn't been guessed yet (correct or incorrect)
    if(key.match(/^[A-Za-z]+$/) && !incorrects.includes(` ${key}`) && !corrects.includes(key)) {
        console.log(key);

        if(word.includes(key)) { //if user letter is found in the word
            for (let i = 0; i < word.length; i++) {
                // Showing the matched letter in the input value
                if(word[i] === key) {
                    corrects.push(key); // Adds the correct letter to the corrects array
                    inputs.querySelectorAll("input")[i].value = key; // Sets the value of the input field to the correct letter
                }
            }
        } else {
            maxGuesses--; // Reduces the number of guesses left by 1 if the letter is incorrect
            incorrects.push(` ${key}`); // Adds the incorrect letter to the incorrects array
        }
        // Updates the remaining guesses and wrong letters displayed 
        guessesLeft.innerText = maxGuesses;
        wrongLetter.innerText = incorrects;
    }
    
    typingInput.value = ""; // Clears the input field after each guess

    // Delays the check for win or game over and shows the relevant message
    setTimeout(() => {
        if(corrects.length === word.length) { // If user has found all the letters
            alert(`Congrats!!! You found the correct word`); // Displays message congratulating user for correct answer
            randomWord(); // Calls the randomWord function and the game resets
        } else if(maxGuesses < 1) { // If no guesses are left
            alert("Game Over!!!"); // Displays message indicating the user failed to identify the correct word
            for(let i = 0; i < word.length; i++) {
                // Reveal all the letters of the word in the input fields
                inputs.querySelectorAll("input")[i].value = word[i];
            }
        }
    });
}



// ==================== Event Listeners ===================== //

// Event listener for the reset button - when clicked, it triggers randomWord() to select a new word
resetBtn.addEventListener("click", randomWord);

//Event listener for typing input - When the user types, it triggers initGame() to check the guess
typingInput.addEventListener("input", initGame);

// Event listener for clicking on input fields - Focuses on the typing input field when clicked 
inputs.addEventListener("click", () => typingInput.focus());

// Event listener for pressing a key - Focuses on the typing input field when any key is pressed
document.addEventListener("keydown", () => typingInput.focus());