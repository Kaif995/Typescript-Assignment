/*Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')*/
var car = 'subaru';
// Test 1
console.log("Is car equal to 'subaru'? I predict True.");
console.log(car == 'subaru'); // This will print True because the value of 'car' is 'subaru'.
// Test 2
console.log("Is car not equal to 'honda'? I predict True.");
console.log(car != 'honda'); // This will print True because the value of 'car' is not 'honda'.
// Test 3
console.log("Is car strictly equal to 'subaru'? I predict True.");
console.log(car === 'subaru'); // This will print True because the value and type of 'car' are both 'subaru'.
// Test 4
console.log("Is car not strictly equal to 'Subaru'? I predict True.");
console.log(car !== 'Subaru'); // This will print True because the comparison is case-sensitive.
// Test 5
console.log("Is car equal to 'toyota'? I predict False.");
console.log(car == 'toyota'); // This will print False because the value of 'car' is not 'toyota'.
// Test 6
console.log("Is car not equal to 'subaru'? I predict False.");
console.log(car != 'subaru'); // This will print False because the values are equal.
// Test 7
console.log("Is car strictly equal to undefined? I predict False.");
console.log(car === undefined); // This will print False because 'car' is defined.
// Test 8
console.log("Is car not equal to null? I predict True.");
console.log(car != null); // This will print True because 'car' is not null.
// Test 9
console.log("Is car not equal to 'Subaru'? I predict True.");
console.log(car !== 'Subaru'); // This will print True because the comparison is case-sensitive.
// Test 10
console.log("Is car strictly equal to null? I predict False.");
console.log(car === null); // This will print False because 'car' is not null.


