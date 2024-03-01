//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var dinnerGuests = ["Aaliyan", "Jonny", "Ali"];
// Print an invitation message to each dinner guest
for (var _i = 0, dinnerGuests_1 = dinnerGuests; _i < dinnerGuests_1.length; _i++) {
    var guest = dinnerGuests_1[_i];
    console.log("Dear ".concat(guest, ", I would like to invite you to dinner. It would be wonderful to have you join us."));
}
// Print the number of people invited to dinner
var numberOfGuests = dinnerGuests.length;
console.log("Total number of guests invited to dinner: ".concat(numberOfGuests));
