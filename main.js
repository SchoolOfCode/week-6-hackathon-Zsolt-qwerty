/**
 * Hello challanger!
 * 
 * I hope you know the game called "Wordle", that would help a lot! ;)
 * The task is to write the key function of the game where the magic happens.
 * 
 * Namely, the function should take in two strings, "keyword" as the word to guess and "input" as the player's guess.
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
    // MVP 2: check if input is 4 characters long
    if (input.length !== 4) {
        throw new Error('Input must be a 4 letter word');
    }

    // MVP 3: check if input only contains letters
    if (!/^[a-z]+$/.test(input)) {
        throw new Error('Input must only contain lowercase letters');
    }

    // MVP 1: compare the input and keyword and return the matches
    // create an empty array to store the matches
    const green = [];
    // create an empty array to store the containments
    const amber = [];
    
    // iterate over the input
    for (let i = 0; i < input.length; i++) {
        // if current letter is in the same position as in the keyword
        if (keyword[i]===input[i]){
            // add the letter and its position to the green array
            green.push({ letter: input[i], position: i + 1 });
        // if current letter is in the keyword but different position
        } else if (keyword.includes(input[i])){
            // add the letter and its position to the amber array
            amber.push({ letter: input[i], position: i + 1 });
        }
    }
    
    // if no match add message
    if (green.length === 0 && amber.length === 0) {
        return { message: 'no hit' };
    }

    // return the findings
    return { green: green, amber: amber };
}
