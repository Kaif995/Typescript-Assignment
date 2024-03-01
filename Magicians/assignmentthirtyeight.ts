//Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians: string[]): void {
    console.log("Magicians:");
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Create an array of magician's names
let magicians: string[] = ['Merlin', 'Houdini', 'David Copperfield', 'Harry Potter'];

// Call the function to show the magicians
show_magicians(magicians);
