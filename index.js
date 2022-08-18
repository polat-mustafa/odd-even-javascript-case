const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please entry your number: ", (answer) => {
  if (answer > 9) {
    const result = answer
      .split("")
      .map(Number)
      .reduce((a, b) => a + b);
    console.log("Sum of digits :", result);
    result % 2 === 0
      ? console.log(`${answer} is an even number`)
      : console.log(`${answer} is an odd number`);
  } else if (answer > 0 && answer < 10) {
    answer % 2 === 0
      ? console.log(`${answer} is an even number`)
      : console.log(`${answer} is an odd number`);
  } else {
    console.log("Please enter a valid number");
  }
  rl.close();
});
