// ======== NOTES ON RANDOM WORD SELECTION FROM THE WORDLIST ARRAY ======== //


// The line of code.
let ranObj = wordList[Math.floor(Math.random() * wordList.length)];

// ===== Math.random() ==== //

// generates a random floating-point number between 0 and 1 (such as 0.43, 0.23, 0.59 etc)



// ===== Math.random() * wordList.length ===== //

// after generating a random number with Math.random(), multiply the result by wordList.length, which changes the range of the random number.

// wordList.Length gives the total number of objects in the wordList array. Because there are 4 items in the array, wordList.length = 4

// Therefore - multiplying Math.random() by wordList.Length (which is 4), im scailing the random number between 0 and the length of the array.

// Example: if Math.random() returns 0.674 and wordList.length is 4, the result will be 0.674 * 4 = 2.696. The number is still a floating point number.... for now



// ===== Math.floor() ===== //

// Takes the floating point number and rounds it down to the nearest integer (whole number).

// Example: 2.696 is rounded down to 2

// This ensures we get a whole number that can be used as an index for the array.


// Now - let ranObj = wordList[2].

// wordList = [

        // ======== index 0 ======== //
//    { 
//        word: "Kaalia", // Word to guess
//        hint: "Flying Human Cleric Lady", // Hint for word  
//    }, 

        // ======== index 1 ======== //
//    {
//        word: "Ulalek",
//        hint: "Eldrazi Horror Boy",
//    }, 

        // ======== index 2 ======== //
//    {
//        word: "Dragon",
//        hint: "Breathes Fire",
//    }, 

        // ======== index 3 ======== //
//    {
//        word: "Edgar",
//        hint: "First Vampire" 
//    }, 
// ];

