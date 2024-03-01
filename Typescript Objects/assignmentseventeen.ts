//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// Create TypeScript objects for books
const book1: { title: string; author: string; year: number } = {
    title: "Clean Code",
    author: "Robert C. Martin",
    year: 2008,
};

const book2: { title: string; author: string; year: number } = {
    title: "Code Complete",
    author: "Steve McConnell",
    year: 1994,
};

const book3: { title: string; author: string; year: number } = {
    title: "The Pragmatic Programmer",
    author: "David Thomas",
    year: 2019,
};

// Print information about each book
console.log("Book 1:", book1);
console.log("Book 2:", book2);
console.log("Book 3:", book3);