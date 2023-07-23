// Check to see if a string has the same amount of 'x's and 'o's. The method must return
// a boolean and be case insensitive. The string can contain any char.

function countCharacters(inputString) {
  let countX = 0;
  let countO = 0;
  const characterArray = inputString.split("");
  for (let i = 0; i < characterArray.length; i++) {
    if (characterArray[i].toLowerCase() === "x") {
      countX++;
    } else if (characterArray[i].toLowerCase() === "o") {
      countO++;
    }
  }

  return countX === countO;
}

console.log(countCharacters("oXoxxoo"));
console.log(countCharacters("oXxo"));
