//You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var dinnerGuests = ["Malas", "Mohtashim", "Mobin"];
// Print an invitation message to each dinner guest
for (var _i = 0, dinnerGuests_1 = dinnerGuests; _i < dinnerGuests_1.length; _i++) {
    var guest = dinnerGuests_1[_i];
    console.log("Dear ".concat(guest, ", I would like to invite you to dinner. It would be an honor to have you join us."));
}
// Guest who can't make it
var guestCantMakeIt = "Malas";
console.log("Unfortunately, ".concat(guestCantMakeIt, " can't make it to dinner."));
// Replace the guest who can't make it with a new person
var newGuest = "Talal";
dinnerGuests = dinnerGuests.map(function (guest) { return (guest === guestCantMakeIt ? newGuest : guest); });
// Print a second set of invitation messages
console.log("\nAfter the changes:");
for (var _a = 0, dinnerGuests_2 = dinnerGuests; _a < dinnerGuests_2.length; _a++) {
    var guest = dinnerGuests_2[_a];
    console.log("Dear ".concat(guest, ", I would like to invite you to dinner. It would be an honor to have you join us."));
}
