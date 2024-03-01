//You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var dinnerGuests = ["Talal", "Mohtashim", "Malas"];
// Print an invitation message to each dinner guest
for (var _i = 0, dinnerGuests_1 = dinnerGuests; _i < dinnerGuests_1.length; _i++) {
    var guest = dinnerGuests_1[_i];
    console.log("Dear ".concat(guest, ", I would like to invite you to dinner. It would be an honor to have you join us."));
}
// Guest who can't make it
var guestCantMakeIt = "Malas";
console.log("Unfortunately, ".concat(guestCantMakeIt, " can't make it to dinner."));
// Replace the guest who can't make it with a new person
var newGuest = "Talha";
dinnerGuests = dinnerGuests.map(function (guest) { return (guest === guestCantMakeIt ? newGuest : guest); });
// Print a second set of invitation messages
console.log("\nAfter the changes:");
for (var _a = 0, dinnerGuests_2 = dinnerGuests; _a < dinnerGuests_2.length; _a++) {
    var guest = dinnerGuests_2[_a];
    console.log("Dear ".concat(guest, ", I would like to invite you to dinner. It would be an honor to have you join us."));
}
// Bigger dinner table
console.log("\nGood news! I found a bigger dinner table!");
// Three more guests to invite
var additionalGuests = ["Bilal", "Taha", "Ali"];
// Add the new guests to the dinnerGuests array
dinnerGuests = dinnerGuests.concat(additionalGuests);
// Print invitations for the new guests
console.log("\nInviting more guests:");
for (var _b = 0, additionalGuests_1 = additionalGuests; _b < additionalGuests_1.length; _b++) {
    var guest = additionalGuests_1[_b];
    console.log("Dear ".concat(guest, ", I would like to invite you to dinner. It would be wonderful to have you join us."));
}
// Print a final set of invitation messages with the updated guest list
console.log("\nFinal guest list:");
for (var _c = 0, dinnerGuests_3 = dinnerGuests; _c < dinnerGuests_3.length; _c++) {
    var guest = dinnerGuests_3[_c];
    console.log("Dear ".concat(guest, ", I would like to invite you to dinner. It would be an honor to have you join us."));
}
