// You are going to be given a word. Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character.
// If the word's length is even, return the middle 2 characters.

function getMiddleCharacter(inputWord) {
  const characterArray = inputWord.split("");
  const isEven = characterArray.length % 2 === 0;
  const middleIndex = Math.floor(characterArray.length / 2);

  if (isEven) {
    return characterArray.slice(middleIndex - 1, middleIndex + 1).join("");
  } else {
    return characterArray.slice(middleIndex, middleIndex + 1).join("");
  }
}

console.log(getMiddleCharacter("apple"));
console.log(getMiddleCharacter("orange"));
