//You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let dinnerGuests: string[] = ["Malas", "Mohtashim", "Mobin"];

// Print an invitation message to each dinner guest
for (const guest of dinnerGuests) {
    console.log(`Dear ${guest}, I would like to invite you to dinner. It would be an honor to have you join us.`);
}

// Guest who can't make it
const guestCantMakeIt: string = "Malas";
console.log(`Unfortunately, ${guestCantMakeIt} can't make it to dinner.`);

// Replace the guest who can't make it with a new person
const newGuest: string = "Talal";
dinnerGuests = dinnerGuests.map(guest => (guest === guestCantMakeIt ? newGuest : guest));

// Print a second set of invitation messages
console.log("\nAfter the changes:");

for (const guest of dinnerGuests) {
    console.log(`Dear ${guest}, I would like to invite you to dinner. It would be an honor to have you join us.`);
}
