//You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let dinnerGuests: string[] = ["Talal", "Mohtashim", "Malas"];

// Print an invitation message to each dinner guest
for (const guest of dinnerGuests) {
    console.log(`Dear ${guest}, I would like to invite you to dinner. It would be an honor to have you join us.`);
}

// Guest who can't make it
const guestCantMakeIt: string = "Malas";
console.log(`Unfortunately, ${guestCantMakeIt} can't make it to dinner.`);

// Replace the guest who can't make it with a new person
const newGuest: string = "Talha";
dinnerGuests = dinnerGuests.map(guest => (guest === guestCantMakeIt ? newGuest : guest));

// Print a second set of invitation messages
console.log("\nAfter the changes:");

for (const guest of dinnerGuests) {
    console.log(`Dear ${guest}, I would like to invite you to dinner. It would be an honor to have you join us.`);
}

// Bigger dinner table
console.log("\nGood news! I found a bigger dinner table!");

// Three more guests to invite
const additionalGuests: string[] = ["Bilal", "Taha", "Ali"];

// Add the new guests to the dinnerGuests array
dinnerGuests = dinnerGuests.concat(additionalGuests);

// Print invitations for the new guests
console.log("\nInviting more guests:");

for (const guest of additionalGuests) {
    console.log(`Dear ${guest}, I would like to invite you to dinner. It would be wonderful to have you join us.`);
}

// Print a final set of invitation messages with the updated guest list
console.log("\nFinal guest list:");

for (const guest of dinnerGuests) {
    console.log(`Dear ${guest}, I would like to invite you to dinner. It would be an honor to have you join us.`);
}
