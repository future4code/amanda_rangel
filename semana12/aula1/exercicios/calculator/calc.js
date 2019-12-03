const operation = (process.argv[2]);
const firstNumber = Number(process.argv[3]);
const secondNumber = Number(process.argv[4]);

if (operation === "add") {
  let response = firstNumber + secondNumber;
  console.log("\x1b[32m", `A resposta é ${response}`);
}  else if (operation === "sub") {
    let response = secondNumber - firstNumber;
    console.log("\x1b[34m", `A resposta é ${response}`);
} else if (operation === "mult") {
    let response = firstNumber * secondNumber;
    console.log("\x1b[35m", `A resposta é ${response}`);
} else if (operation === "div") {
    let response = firstNumber / secondNumber;
    console.log("\x1b[36m", `A resposta é ${response}`);
}

