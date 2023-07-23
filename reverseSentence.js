// Complete the function that accepts a string parameter, and reverses each
// word in the string. All spaces in the string should be retained.

function reverseWords(inputSentence) {
  const inputWords = inputSentence.split(" ");

  const reversedWords = inputWords.map((item) =>
    item.split("").reverse().join("")
  );

  return reversedWords.join(" ");
}

console.log(reverseWords("What is your name?"));
console.log(reverseWords("He eats rice."));
