//If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// Intentional array index error
var numbers = [1, 2, 3, 4, 5];
// Trying to access an element at an invalid index
var invalidIndex = 10;
var result = numbers[invalidIndex]; // This will produce an array index error
// Correcting the error
if (result !== undefined) {
    console.log("Result:", result);
}
else {
    console.log("Error: Index ".concat(invalidIndex, " is out of bounds."));
}
