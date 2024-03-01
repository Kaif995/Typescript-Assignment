//Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
const names: string[] = ["Malas", "Mobin", "Mohatashim", "Talal"];

// Print a personalized message to each person
for (const name of names) {
    console.log(`Hello ${name}, hope you're having a great day!`);
}
