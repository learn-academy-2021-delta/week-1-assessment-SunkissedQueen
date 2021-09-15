// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2021"
//console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: Answer correct because the length property counts in numerical order starting at 1 and counts a space as a character.


// --------------------2) What will this log?

var greeting = "Hello World!"
// console.log(greeting[3])

// a) Your answer: l
// b) Verify and explain: Answer correct because there is a zero index when locating the place of a character...so the count starts at 0.


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
// console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: Answer correct because there is a zero index when locating the place of a character...so the count starts at 0. Each language is counted as a single location because it is in an array.


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY, SUNDAY
// b) Verify and explain: "weekendDays.toUpperCase is not a function." (I copied the stuff in quotations from the console. All these other words are mine.) I am assuming there is some extra steps needed to capitalize an array. Join function to make a string and then use .toUpperCase(). My head hurts too much from trying to reverse that other array.


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: Torn between 6, 6, 7 and 19 because of all of these would be considered strings
// b) Verify and explain: "number" I was so confused, but I see that typeof is an operator...so it wants to determine what follows it. In this case, the next thing is the actual number of characters that the length property states as 3 because it's a list in an array. Wow! My initial guess was in a different state. Anyway...type of 3 will output number.
