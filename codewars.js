// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

const findSummation = (num) => {
  let result = 0;
  for (i = 0; i <= num; i++) {
    result += i;
  }
  return result;
};

findSummation(8);

// Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

const removeChar = (str) => {
  return str.slice(1, -1);
};

removeChar("hello");
