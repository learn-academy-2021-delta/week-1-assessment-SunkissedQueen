// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.
//This appears to be an evaluation. I would assign a number value to a variable then make a series of conditional statements using the if/elseif/else functions. These statements would compare the variable against the number 212 and log a sentence using string interpolation that includes that value and a result of whether it is below, above, or at boiling point.

// Create the code and test each of the variables provided. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp = 35
//var temp = 350
//var temp = 212

// if (temp === 212) {
//     console.log(temp + " is at boiling point")
//   } else if(temp < 212) {
//     console.log(temp + " is below boiling point")
//   } else if(typeof temp === "string") {
//   console.log("Please type a number.")
//   } else {
//     console.log(temp + " is above boiling point")
//  };


// --------------------2) Create the code that will combine two arrays and return the length using the variables provided below. Expected output: 10
//Concat and Length properties. I would assign an array list to two separate variables using the square brackets. (Thank you for providing it.) Next I would make a variable that would concat those arrays. Then I would perform a length propety command.
var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 22, 9, 13]


// var comboNumbers = myNumbers1.concat(myNumbers2)
// console.log(comboNumbers.length)


// --------------------3) Create the code that will reverse the letters of a string using the test variables provided below. Expected output: "eilrahc", "atled"
//Turning strings into arrays then back to a string. In order to use the reverse function, I will use the split function to turn the string into an array. For the list to populate as separate words, I will use a quotation marks and a space when assigning the split property. Then join property with a space and comma to produce an output with the string separated by a comma.

var myString1 = "charlie"
var myString2 = "delta"

// So this question really gave my everything a sweat. I was going to remove the other attempts, but it was an interesting journey. So get ready for the fun. I wasn't sure if a string or an array expected for the output. So I worked hard to produce both.
// First failed attempt console.log(myString1.split("").reverse().join("").concat(myString2.split("").reverse().join("")))
//I get the output as eilrahcatled.

// Testing each portion of my code because the split(" ") was undoing my reverse.
//var myString1 = "charlie"
//var myString2 = "delta"
//console.log((myString1.split(" ").concat(myString2.split(" "))).join(", "))
//gives me an output of charlie, delta

//console.log(myString1.split("").reverse().join(""))
//output of eilrahc

// console.log(myString1.split(" ").reverse().join("").concat(myString2.split(" ").reverse().join("")))
// output of charliedelta

// My brain is tired attempt. I know I want to split to make an array. Reverse the arrays, then join them. But it is not working.

// console.log(myString1.split(" ").reverse( ).concat(myString2.split(" ").reverse( )).join(", "))
// output as a string without quotations and not in reverse--- charlie, delta

// This was a desperate move.
// var myString3 = " ,"
// console.log(myString1.split("").reverse().join("") + myString3.split("").reverse().join("") + myString2.split("").reverse().join(""))
//output without quotations --- eilrahc, atled

// I realize I should have asked for clarity on it the output should be on separate lines, or a string, or an array.
// console.log(myString1.split("").reverse().join("")); console.log(myString2.split("").reverse().join(""))
// output on separate lines--- eilrahc
//  atled

// Of course, I had to keep trying. It's not 8:59am on Monday yet.
// var myString1 = "charlie"
// var myString2 = "delta"
// console.log(myString1.split("").reverse().join("").concat(", ", myString2.split("").reverse().join("")))
// output as a string without quotations     eilrahc, atled

// The only way I could get quotation is in an array...wait a minute, did you want quotations? Did you want them on the same line? ...well here is the code anyway.
// var myString1 = "charlie"
// var myString2 = "delta"
// console.log(myString1.split("").reverse().join("").concat(" ", myString2.split("").reverse().join("")).split(" "))
// output   ['eilrahc', 'atled']

// --------------------4) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 15, 12
// This appears to be an evaluation. I will make a series of conditional statements using the if/elseif/else functions. These statements would compare the variable against the each other and log the difference. My catchall will request that the user enter a number value in case letters were entered.

var number1 = 42
var number2 = 27

// var number1 = 7
// var number2 = 19

// if (number1 === number2) {
//   console.log("Please enter two different numbers.")
// } else if(number1 > number2) {
//   console.log(number1 - number2)
// } else{
//   console.log(number2 - number1)
// };


// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable is not a number using the two sets of test variables provided below. Expected output: "Your input is not a number", 3

var numberRefactor1 = 42
var numberRefactor2 = "hello"

// var numberRefactor1 = 27
// var numberRefactor2 = 24
// if (typeof numberRefactor1 === "string") {
//   console.log("Your input is not a number")
// } else if(typeof numberRefactor2 === "string") {
//     console.log("Your input is not a number")
//   } else if(numberRefactor1 === numberRefactor2) {
//   console.log("Please enter two different numbers.")
// } else if(numberRefactor1 > numberRefactor2) {
//   console.log(numberRefactor1 - numberRefactor2)
// } else{
//   console.log(numberRefactor2 - numberRefactor1)
// };
