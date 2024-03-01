//Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function show_magicians(magicians: string[]): void {
    console.log("Magicians:");
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    // Modify the array by adding the phrase "the Great" to each magician's name
    return magicians.map(magician => `${magician} the Great`);
}

// Create an array of magician's names
let magicians: string[] = ['Merlin', 'Houdini', 'David Copperfield', 'Harry Potter'];

// Call make_great() to modify the array
let great_magicians: string[] = make_great(magicians);

// Call show_magicians() to see the modified list
show_magicians(great_magicians);
