//Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var favoriteTransportation = ["kawasaki ninja h2r", "Audi Etron GT", "Rolls Royce", "Hilux"];
// Print statements about each mode of transportation
for (var _i = 0, favoriteTransportation_1 = favoriteTransportation; _i < favoriteTransportation_1.length; _i++) {
    var mode = favoriteTransportation_1[_i];
    console.log("I would like to own a ".concat(mode, "."));
}
