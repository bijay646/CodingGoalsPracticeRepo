// A square of squares
// You like building blocks. You especially like building blocks that are squares.
// And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle!
// Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait!
// That's it! You just have to check if your number of building blocks is a perfect square.

function isSquare(inputNumber) {
  if (inputNumber < 0) return false;
  if (inputNumber === 0) return true;

  const factors = [];

  for (let i = 1; i <= inputNumber; i++) {
    if (inputNumber % i === 0) {
      factors.push(i);
    }
  }

  let filteredFactors = factors.filter((item) => item * item === inputNumber);

  if (filteredFactors.length > 0) return true;

  return false;
}

console.log(isSquare(-4));
console.log(isSquare(0));
console.log(isSquare(1));
console.log(isSquare(3));
console.log(isSquare(16));
