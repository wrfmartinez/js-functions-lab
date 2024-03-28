/*
Exercise 1: maxOfTwoNumbers

In this exercise, create a function named maxOfTwoNumbers. It should take two numbers as inputs and return the larger number. If they're equal, return either one.

Exercise 1 has been completed for you:
*/

// const maxOfTwoNumbers = (x, y) => {
//   if (x >= y) {
//     return x;
//   } else {
//     return y;
//   }
// }
  
// console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 2));

/*
Exercise 2: maxOfThree

Define a function, maxOfThree, it should accept three numbers and return the largest among them.

Complete Exercise 2 in the space below:
*/

// const maxOfThree = (num1, num2, num3) => {
//   if (num1 >= num2 && num1 >= num3) {
//     return num1;
//   } else if (num2 >= num3 && num2 >= num1) {
//     return num2;
//   } else {
//     return num3;
//   }
// }

// console.log('Exercise 2 Result:', maxOfThree(9, 9, 9));

/*
Exercise 3: Insert at the Beginning

Write a function named isCharAVowel that takes a single character as an argument. It should return true if the character is a vowel, and false otherwise.

Complete Exercise 3 in the space below:
*/

// const isCharAVowel = (char) => {
//   const vowels = 'a, e, i, o, u';
//   let result = false;

//   for (let i = 0; i < vowels.length; i++) {
//     if (char === vowels[i]) {
//       result = true;
//     }
//   }

//   return result;
// }

// console.log('Exercise 3 Result:', isCharAVowel('o'));

/*
Exercise 4: sumArray

Create a function called sumArray. It should take an array of numbers and return the total sum. For example, sumArray([2, 4, 5]) should return 11.

Complete Exercise 4 in the space below:
*/

// const sumArray = (array) => {
//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }

//   return sum;
// } 

// console.log('Exercise 4 Result:', sumArray([0, 0, 0]));

/*
Exercise 5: multiplyArray

Define a function called multiplyArray. It should take an array of numbers and return the product of those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

Complete Exercise 5 in the space below:
*/

// const multiplyArray = (array) => {
//   let product = 1;

//   for (let i = 0; i < array.length; i++) {
//     product *= array[i];
//   }

//   return product;
// }

// console.log('Exercise 5 Result:', multiplyArray([2, 2, 2]));

/*
Exercise 6: reverseString

Define a function called reverseString. It should take a string and return it with its characters in reverse order. For example, reverseString('rockstar'); would return the string "ratskcor".

Complete Exercise 6 in the space below:
*/

// const reverseString = (string) => {
//   let reversed = '';

//   for (let i = string.length - 1; i >= 0; i--) {
//     reversed += string[i];
//   }

//   return reversed;
// }

// console.log('Exercise 6 Result:', reverseString('tree'));

/*
Exercise 7: longestStringInArray

Define a function called longestStringInArray. It should accept an array of strings and return the length of the longest string in the array.

Complete Exercise 7 in the space below:
*/

// const longestStringInArray = (array) => {
//   let longestLength = 0;

//   for (let i = 0; i < array.length; i++) {
//     if (array[i].length > longestLength) {
//       longestLength = array[i].length;
//     }
//   }

//   return longestLength;
// }

// console.log('Exercise 7 Result:', longestStringInArray(['boo', 'track', 'presumptuous']));

/*
Exercise 8: stringsLongerThan

Write a function called stringsLongerThan. It takes an array of strings and a number, returning all strings longer than the given number. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3) would return ['hello', 'morning'].

Complete Exercise 8 in the space below:
*/

// const stringsLongerThan = (array, length) => {
//   let newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i].length > length) {
//       newArray.push(array[i]);
//     }
//   }

//   return newArray;
// }

// console.log('Exercise 8 Result:', stringsLongerThan(['say', 'hello', 'in', 'the', 'morning', 'track'], 3));

/*
Exercise 9: numArgs

Challenge yourself with numArgs. This function should return the count of arguments passed to it when called.

Complete Exercise 9 in the space below:
*/

const numArgs = function() {
  return arguments.length;
}

console.log('Exercise 9 Result:', numArgs(3, 'bob', [2, 4, 5], 7, 'peter'));