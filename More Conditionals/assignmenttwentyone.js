var string1 = 'apple';
var string2 = 'orange';
var number1 = 5;
var number2 = 10;
var array = [1, 2, 3, 4, 5];
// Tests for equality and inequality with strings
console.log("Are 'apple' and 'orange' equal? I predict False.");
console.log(string1 == string2); // False
console.log("Are 'apple' and 'orange' not equal? I predict True.");
console.log(string1 != string2); // True
// Tests using the lower case function
console.log("Is 'apple' equal to 'Apple' in a case-insensitive comparison? I predict True.");
console.log(string1.toLowerCase() == 'Apple'.toLowerCase()); // True
// Numerical tests
console.log("Is 5 greater than 10? I predict False.");
console.log(number1 > number2); // False
console.log("Is 5 less than or equal to 10? I predict True.");
console.log(number1 <= number2); // True
// Tests using "and" and "or" operators
console.log("Is 'apple' equal to 'orange' and 5 less than 10? I predict False.");
console.log(string1 == string2 && number1 < number2); // False
console.log("Is 'apple' equal to 'orange' or 5 less than 10? I predict True.");
console.log(string1 == string2 || number1 < number2); // True
// Test whether an item is in an array
console.log("Is 3 in the array? I predict True.");
console.log(array.includes(3)); // True
// Test whether an item is not in an array
console.log("Is 6 not in the array? I predict True.");
console.log(!array.includes(6)); // True
