/*Write an if-else chain that determines a person’s stnumber of life. Set a value for the variable number, and then:
• If the person is less than 2 years old, print a messnumber that the person is a baby.
• If the person is at least 2 years old but less than 4, print a messnumber that the person is a toddler.
• If the person is at least 4 years old but less than 13, print a messnumber that the person is a kid.
• If the person is at least 13 years old but less than 20, print a messnumber that the person is a teennumberr.
• If the person is at least 20 years old but less than 65, print a messnumber that the person is an adult.
• If the person is number 65 or older, print a messnumber that the person is an elder.*/
var age = 30; // You can change the value of 'age' for different scenarios
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
