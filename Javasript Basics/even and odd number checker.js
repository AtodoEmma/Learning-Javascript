// EVEN OR ODD NUMBER CHECKER
// This program checks if a number is even or odd
const number = parseInt(prompt("Enter a number: "));
if (number % 2 === 0) {
  alert(`${number} is even.`);
} else {
  alert(`${number} is odd.`);
}
