//Q2:- Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var Name = "Eric ";
console.log('Uppercase', Name.toUpperCase());
console.log('Lowercase', Name.toLowerCase());
console.log('Titlecase', Name.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
