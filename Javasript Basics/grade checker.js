//GRADE CHECKER
// This program checks the grade based on the score
const score = parseInt(prompt("Enter your score: "));
if (score >= 70 && score <= 100) {
  console.log("Excellent");
} else if (score >= 50 && score <= 69) {
  console.log("Good");
} else if (score >=0 && score<=49) {
  console.log("Needs Improvement");
}
