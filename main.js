/**
 * Hello challanger!
 * 
 * I hope you know the game called "Wordle", that would help a lot! ;)
 * The task is to write the key function of the game where the magic happens.
 * 
 * [part 3/3]
 * 
 * The Trials of the Oracle
 * 
 * Captured in the heart of the ancient Kata Forests, you find yourself trapped in a dark, enigmatic chamber. The room is silent except for the voice of a mysterious oracle. It looms over you, demanding proof of your coding prowess. A fan of The New York Times' infamous games, the oracle is particularly fond of challenges that tease the brain, like Wordle, Sudoku, and Connections. To escape, you must outsmart the oracle by conquering its three trials. Each trial reveals a fragment of the key to your freedom.
 * 
 * 🌟 Trial 1: The Number Enigma [https://github.com/SchoolOfCode/week-6-hackathon-daniellem62]
 * 
 * 🌟 Trial 2: The Connections Conundrum [https://github.com/SchoolOfCode/week-6-hackathon-chargrace]
 * 
 * 🌟 Trial 3: The Wordle Challenge
 * 
 * In the final trial, the Oracle challenges you to implement a Wordle-like game. It has chosen a four-letter keyword, and you must write a function that processes guesses and returns results:
 * 
 * 🟩 Green: Correct letter in the correct position.
 * 
 * 🟨 Yellow: Correct letter in the wrong position.
 * 
 * ⬜ Gray: Letter not in the word.
 * 
 * Your function must validate guesses, provide accurate returns, and handle edge cases like invalid input or incorrect word length. Outsmart the oracle by crafting code that wins the game in as few guesses as possible.
 * 
 * To be more specific, the function should take in two strings, "keyword" as the word to guess and "input" as the player's guess.
 * 
 * The function should compare the two words and return the matching letters along with their positions in array "green" also the containing letters and their positions in array "amber". This info will be used by other functions further down the line.
 * 
 * An example for the format the funtion should return:
 * 
 * {
 *     green: [
 *         { letter: 'a', position: 1 },
 *         { letter: 'b', position: 2 },
 *     ],
 *     amber: [
 *         { letter: 'c', position: 3 },
 *     ],
 * }
 * 
 * This is so the (hypothetical) display function can show the player which letters are correct and in the right position (green) and which letters are correct but in the wrong position (amber).
 * If there are no matches, the function should return an object with a message as below:
 * 
 * { message: 'no hit' }
 * 
 * Good luck!
 * 
 * PS: Use `npm install` to install the required libraries and `npm test` to run the tests.
 * 
 * Bonus: uncomment the tests in `main.test.js` and make them pass!
 * 
 * MVP 2: If the user input is NOT 4 characters long, the function should throw an error with the message "Input must be a 4 letter word".
 * 
 * MVP 3: If the user input contains any characters other than lowercase letters, the function should throw an error with the message "Input must only contain lowercase letters".
 * 
**/

export function letterMatches(keyword, input) {
    // your code goes here...
}
