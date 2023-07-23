// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

function drawStairs(inputNumber) {
  return Array(inputNumber)
    .fill("I")
    .map((item, i) => item.padStart(i + 1, " "))
    .join("\n");
}

console.log(drawStairs(5));
