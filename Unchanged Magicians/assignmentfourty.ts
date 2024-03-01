//Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians(magicians: string[]): void {
    console.log("Magicians:");
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    // Create a copy of the array and modify each magician's name
    return magicians.map(magician => `${magician} the Great`);
}

// Create an array of magician's names
let magicians: string[] = ['Merlin', 'Houdini', 'David Copperfield', 'Harry Potter'];

// Call make_great() with a copy of the array
let great_magicians: string[] = make_great([...magicians]); // Using the spread operator to create a copy

// Call show_magicians() with the original and modified arrays
console.log("Original Magicians:");
show_magicians(magicians);

console.log("\nMagicians with the Great Added:");
show_magicians(great_magicians);
