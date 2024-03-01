/*Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.*/
//Running If Block Version (Green Alien)v
var alien_color = 'green';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting down the green alien.");
}
else {
    console.log("No points earned. Keep shooting!");
}
//Running Else Block Version (Non-Green Alien)
var alien_color = 'red';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting down the green alien.");
}
else {
    console.log("No points earned. Keep shooting!");
}
