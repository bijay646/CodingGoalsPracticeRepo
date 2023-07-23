// Your task is to make a function that can take any non-negative integer as an argument
// and return it with its digits in descending order.
// Essentially, rearrange the digits to create the highest possible number.

function getHighestNumber(inputNumber) {
  const digitsArray = String(inputNumber).split("");
  digitsArray.sort((a, b) => b - a);

  return Number(digitsArray.join(""));
}

console.log(getHighestNumber(251));
console.log(getHighestNumber(6294361));
