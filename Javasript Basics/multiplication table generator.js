//MULTIPLICATION TABLE GENERATOR
let x = parseInt(
  prompt("Enter a number to generate its multiplication table: ")
);
for (let myNumber = x; myNumber === x; myNumber++) {
  for (let myNumber2 = 1; myNumber2 <= 12; myNumber2++) {
    console.log(`${myNumber} times ${myNumber2} = ${myNumber * myNumber2}`);
  }
}
