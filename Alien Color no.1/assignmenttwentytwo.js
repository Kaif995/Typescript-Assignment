/* Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)*/
//Passing Version (Green Alien)
var alien_color = 'green';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting down the green alien.");
}
else {
    console.log("No points earned. Keep shooting!");
}

//Failing Version (Non-Green Alien)
var alien_color = 'red'; // Change to 'yellow' or 'red' for failing version
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting down the green alien.");
}
else {
    console.log("No points earned. Keep shooting!");
}

