//If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var dinnerGuests = ["Mohtashim", "malas", "Mobin"];
// Print an invitation message to each dinner guest
for (var _i = 0, dinnerGuests_1 = dinnerGuests; _i < dinnerGuests_1.length; _i++) {
    var guest = dinnerGuests_1[_i];
    console.log("Dear ".concat(guest, ", I would like to invite you to dinner. It would be an honor to have you join us."));
}
