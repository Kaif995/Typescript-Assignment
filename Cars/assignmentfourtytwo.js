//Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function createCar(manufacturer, modelName, ...options) {
    const car = {
        manufacturer,
        modelName,
    };

    for (const option of options) {
        const [key, value] = option;
        car[key] = value;
    }

    return car;
}

// Call the function with required information and additional name-value pairs
const myCar = createCar('Toyota', 'Camry', ['color', 'Blue'], ['features', ['Sunroof', 'Navigation']]);

// Print the returned Object to verify the information
console.log(myCar);
