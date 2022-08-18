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
  }
  rl.close();
});
