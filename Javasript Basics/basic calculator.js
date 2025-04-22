//BASIC CALCULATOR
const number1 = parseInt(prompt("Enter any number"));
const number2 = parseInt(prompt("Enter any number"));
const operator = prompt("Enter operator");
const resultA = number1 + number2;
const resultB = number1 - number2;
const resultC = number1 / number2;
const resultD = number1 * number2;

if (operator === "+") {
  alert(resultA);
} else if (operator === "-") {
  alert(resultB);
} else if (operator === "/") {
  alert(resultC);
} else if (operator === "*") {
  alert(resultD);
}
