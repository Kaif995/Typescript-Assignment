//Q2:- Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let Name: string = "Eric ";

console.log('Uppercase',Name.toUpperCase());
console.log('Lowercase',Name.toLowerCase());
console.log('Titlecase',Name.replace(/\b\w/g,c=> c.toUpperCase()));