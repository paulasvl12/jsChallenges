// VERY EASY: Create two variables and assign a number to each.
//  Console log the difference between the numbers. 
//  Example output: “The difference between 6 and 2 is 4”

var eddie = 1;
var paula = 999;
console.log("The difference between " + eddie + " and " + paula + " is " + paula - eddie);

// EASY: Create two variables and assign a person’s name to each. 
// Console log a statement that says which name is shorter or longer, 
// and by how many characters. Example output: “The name Thomas is longer than John by 2 characters”

var nameOne = "Eduardo";
var nameTwo = "Paula";

if(nameOne.length < nameTwo.length){
    console.log(nameTwo + " is longer by " + (nameTwo.length - nameOne.length));
} else {
    console.log(nameOne + " is longer by " + (nameOne.length - nameTwo.length));
}

// MEDIUM: Write a program to tell if someone is shouting (typing in all caps),
//  whispering (typing in all lowercase), or neither. Use prompt to get user input,
//  and then console log whether the user was shouting, whispering, or talking normally.

var userInput = prompt("Enter a message");
if(userInput.toUpperCase() === userInput){
    console.log("chill don't scream at me pls");
} else if (userInput.toLowerCase() === userInput){
    console.log("speak up");
} else {
    console.log("ur talking normal i guess");
}

// HARD: Create 4 math functions, one called add() that adds 2 numbers, one called subtract() 
// that subtracts 2 numbers, one called multiply() to multiply 2 numbers, and one called
//  divide() to divide two numbers.

const add = (numOne, numTwo) => {return numOne + numTwo;}
const subtract = (numOne, numTwo) => {return numOne - numTwo;}
const multiply = (numOne, numTwo) => {return numOne * numTwo;}
const divide = (numOne, numTwo) => {return numOne / numTwo;}

// VERY HARD: Create a simple calculator that prompts the user for a number,
//  an operator (either +, -, * or /), and another number, and then uses the 
//  functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"

var numOne = parseInt(prompt("Enter a number"));
var operator = prompt("Enter an operator");
var numTwo = parseInt(prompt("Enter a second number"));

if (operator == "+"){
    console.log(numOne + " + " + numTwo + " = " + add(numOne, numTwo));
}
else if (operator == "-"){
    console.log(numOne + " - " + numTwo + " = " + subtract(numOne, numTwo));
}
else if (operator == "*"){
    console.log(numOne + " * " + numTwo + " = " + multiply(numOne, numTwo));
}
else {
    console.log(numOne + " / " + numTwo + " = " + divide(numOne, numTwo));
}