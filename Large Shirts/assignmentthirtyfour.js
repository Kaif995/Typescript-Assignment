//Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("T-Shirt Summary: Size - ".concat(size, ", Message - \"").concat(message, "\""));
}
// Create a large shirt with default message
make_shirt();
// Create a medium shirt with default message
make_shirt('Medium');
// Create a shirt of any size with a different message
make_shirt('Small', 'TypeScript is awesome!');
