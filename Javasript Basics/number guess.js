//NUMBER GUESSING GAME
const myNumber1 = parseInt(prompt("Enter a number between 1 and 5: "));
const myNumber = Math.floor(Math.random() * 5) + 1;
if (myNumber1 === myNumber) {
  alert(`You guessed the correct number, ${myNumber}!`);
} else {
  alert(`Sorry, the correct number was ${myNumber}.`);
}
