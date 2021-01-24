// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// const findSummation = (num) => {
//   let result = 0;
//   for (i = 0; i <= num; i++) {
//     result += i;
//   }
//   return result;
// };

// findSummation(8);

// Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// const removeChar = (str) => {
//   return str.slice(1, -1);
// };

// removeChar("hello");

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// const filter_list = (l) => {
//   for (i = 0; i <= l.length; i++) {
//     console.log(typeof i);
//   }
// };

// filter_list([1, 2, "a", "b"]);

// Given the string, check if it is a palindrome.

// function checkPalindrome(inputString) {
//   inputString = inputString.split("");

//   stringReverse = inputString.reverse().join();
//   inputString = inputString.reverse().join();

//   if (inputString === stringReverse) {
//     return true;
//   } else {
//     return false;
//   }
// }
// checkPalindrome("hello");

// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// function adjacentElementsProduct(inputArray) {
//   let c = inputArray[0] * inputArray[1];
//   let p = c;
//   for (i = 1; i < inputArray.length; i++) {
//     let c = inputArray[i] * inputArray[i + 1];
//     if (c > p) {
//       p = c;
//     }
//   }
//   return p;
// }
// console.log(adjacentElementsProduct([-23, 4, -3, 8, -12]));

// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

// A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.

// function shapeArea(n) {
//   square = n * n;
//   remainder = (n - 1) * (n - 1);
//   result = square + remainder;

//   return result;
// }
// shapeArea(3);

// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

// function makeArrayConsecutive2(statues) {
//   statues.sort((a, b) => {
//     return a - b;
//   });
//   const arrLength = statues.length;
//   const highNum = statues[arrLength - 1];
//   const lowNum = statues[0];
//   const minStatues = highNum - lowNum + 1 - arrLength;
//   return minStatues;
// }

// makeArrayConsecutive2([6, 2, 3, 8]);

// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

// Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

function almostIncreasingSequence(sequence) {
  let nonIncreaseNum = [];

  for (i = 1; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      nonIncreaseNum.push(sequence[i]);
      if (nonIncreaseNum.length > 1) return false;
      if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1])
        return false;
    }
  }

  return true;
}

almostIncreasingSequence([1, 2, 3, 4, 99, 5, 6]);
