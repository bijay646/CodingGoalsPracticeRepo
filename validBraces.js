// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

function checkBracesValidity(bracesString) {
  const bracesMap = { "(": ")", "{": "}", "[": "]" };
  let stack = [];

  for (let i = 0; i < bracesString.length; i++) {
    let currentChar = bracesString[i];

    if (bracesMap[currentChar]) {
      stack.push(currentChar);
    } else {
      if (currentChar !== bracesMap[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(checkBracesValidity("[{}])"));
console.log(checkBracesValidity("()[{()}]"));
