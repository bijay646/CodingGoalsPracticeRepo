// In this kata you will create a function that takes a list of non-negative integers
// and strings and returns a new list with the strings filtered out.

function filterList(inputList) {
  const filteredList = inputList.filter(
    (listItem) => typeof listItem == "number"
  );

  return filteredList;
}

console.log(filterList([1, 2, "a", "b", 5, "apple"]));
