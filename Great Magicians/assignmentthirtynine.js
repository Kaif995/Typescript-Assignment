//Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function show_magicians(magicians) {
    console.log("Magicians:");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    // Modify the array by adding the phrase "the Great" to each magician's name
    return magicians.map(function (magician) { return "".concat(magician, " the Great"); });
}
// Create an array of magician's names
var magicians = ['Merlin', 'Houdini', 'David Copperfield', 'Harry Potter'];
// Call make_great() to modify the array
var great_magicians = make_great(magicians);
// Call show_magicians() to see the modified list
show_magicians(great_magicians);
