let prompt = require('prompt-sync')();

console.log('::: Guess the secret number! :::');
console.log('The number is between 0 and 100.')
console.log('Guess a negative number to stop playing.')

const secretNumber = Math.round(Math.random() * 100);
let answer, prevGuess, guesses = 1;

while (answer != secretNumber) {
  answer = prompt('Guess a number: ');
  if (isNaN(answer)) {
    console.log('Not a number! Try again!');
  } else if (answer < 0) {
    answer = secretNumber;
    console.log('Stopping...');
  } else if (answer == secretNumber) {
    console.log(`You got it! You took ${guesses} attemps!`);
  } else if (answer === prevGuess) {
    console.log('Already guessed!');
  } else {
    if (answer < secretNumber) {
      console.log('Too low!');
    } else {
      console.log('Too high!');
    }
    guesses++;
    prevGuess = answer;
  }
}