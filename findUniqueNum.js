// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// It’s guaranteed that array contains at least 3 numbers.
// The tests contain some very huge arrays, so think about performance.

function findUniqueElement(inputArray) {
  const uniqueNumber = inputArray.filter(
    (item) => inputArray.indexOf(item) === inputArray.lastIndexOf(item)
  );
  return uniqueNumber[0];
}

console.log(findUniqueElement([2, 1, 2, 2, 2]));
console.log(findUniqueElement([2, 2, 2, 5, 2]));
