var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians(magicians) {
    console.log("Magicians:");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    // Create a copy of the array and modify each magician's name
    return magicians.map(function (magician) { return "".concat(magician, " the Great"); });
}
// Create an array of magician's names
var magicians = ['Merlin', 'Houdini', 'David Copperfield', 'Harry Potter'];
// Call make_great() with a copy of the array
var great_magicians = make_great(__spreadArray([], magicians, true)); // Using the spread operator to create a copy
// Call show_magicians() with the original and modified arrays
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nMagicians with the Great Added:");
show_magicians(great_magicians);
