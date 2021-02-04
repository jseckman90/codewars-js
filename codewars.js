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

// const almostIncreasingSequence = (sequence) => {
//   let nonIncreaseNum = [];

//   for (i = 1; i < sequence.length; i++) {
//     if (sequence[i] <= sequence[i - 1]) {
//       nonIncreaseNum.push(sequence[i]);
//       if (nonIncreaseNum.length > 1) return false;
//       if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1])
//         return false;
//     }
//   }

//   return true;
// }

// almostIncreasingSequence([1, 2, 3, 4, 99, 5, 6]);

// After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

// const matrixElementsSum = (matrix) => {
//   sum = 0;
//   //first loop goes through the outside array
//   for (i = 0; i < matrix.length; i++) {
//     //second loop goes through the inside arrays
//     for (j = 0; j < matrix[i].length; j++) {
//       if (matrix[i][j] === 0) {
//         //set every value in same column to 0 if it is below the current value
//         for (k = i + 1; k < matrix.length; k++) {
//           matrix[k][j] = 0;
//           console.log(matrix);
//         }
//       }
//     }
//   }
//   for (x = 0; x < matrix.length; x++) {
//     for (y = 0; y < matrix[x].length; y++) {
//       sum += matrix[x][y];
//     }
//   }
//   console.log(sum);
// };

// matrixElementsSum([
//   [0, 1, 1, 2],
//   [0, 5, 0, 0],
//   [2, 0, 3, 3],
// ]);

// Given an array of strings, return another array containing all of its longest strings.

// const allLongestStrings = (inputArray) => {
//   let strLng = 0;
//   let newArr = [];
//   for (i = 0; i < inputArray.length; i++) {
//     if (inputArray[i].length > strLng) {
//       strLng = inputArray[i].length;
//     }
//   }
//   console.log(strLng);
//   for (j = 0; j < inputArray.length; j++) {
//     if (inputArray[j].length >= strLng) {
//       newArr.push(inputArray[j]);
//     }
//   }
//   return console.log(newArr);
// };

// allLongestStrings(["aba", "aa", "ad", "vcd", "aba", "d;safkljdslkfj"]);

// Given two strings, find the number of common characters between them.

// const commonCharacterCount = (s1, s2) => {
//   let count = 0;
//   const stringTwo = s2.split("");
//   for (letter of s1) {
//     console.log(s1);
//     console.log(stringTwo);
//     let index = stringTwo.findIndex((s) => s === letter);
//     if (index >= 0) {
//       count++;
//       stringTwo.splice(index, 1);
//     }
//     console.log(stringTwo);
//   }
//   return console.log(count);
// };

// commonCharacterCount("aabcc", "adcaa");

// Given an array of integers, find the sum of its elements.

// const sumArray = (ar) => {
//   let sum = 0;
//   for (i = 0; i < ar.length; i++) {
//     sum += ar[i];
//   }
//   return sum;
// };

// sumArray([1, 2, 3]);

// Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

// The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

const compareTriplets = (a, b) => {
  let alice = 0;
  let bob = 0;

  for (i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alice += 1;
    } else if (b[i] > a[i]) {
      bob += 1;
    }
  }
  let comp = [alice, bob];
  console.log(comp);
};

compareTriplets([5, 6, 7], [3, 6, 10]);
