//Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    console.log("Magicians:");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Create an array of magician's names
var magicians = ['Merlin', 'Houdini', 'David Copperfield', 'Harry Potter'];
// Call the function to show the magicians
show_magicians(magicians);
