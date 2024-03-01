//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
const dinnerGuests: string[] = ["Aaliyan", "Jonny", "Ali"];

// Print an invitation message to each dinner guest
for (const guest of dinnerGuests) {
    console.log(`Dear ${guest}, I would like to invite you to dinner. It would be wonderful to have you join us.`);
}

// Print the number of people invited to dinner
const numberOfGuests: number = dinnerGuests.length;
console.log(`Total number of guests invited to dinner: ${numberOfGuests}`);